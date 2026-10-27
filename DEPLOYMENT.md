# Deployment Guide

Snip has three deployable services: the API on Render, the redirect worker on Cloudflare Workers, and the Next.js app on Cloudflare Workers through OpenNext.

## 1. Prerequisites

- Node.js 22, pnpm 11, GitHub, Cloudflare, Render, Supabase, Upstash Redis, and optionally Sentry.
- Install dependencies with `pnpm install --frozen-lockfile`.
- Keep `.env` and `.dev.vars` files local. Never commit credentials.
- Rotate any credential that has ever been committed, then update every service that uses it.

## 2. Environment variables

### Render API (`apps/api`)

| Variable | Required | Value |
|---|---:|---|
| `PORT` | Yes | `10000` |
| `DATABASE_URL` | Yes | Supabase pooled PostgreSQL URL |
| `SUPABASE_URL` | Yes | Supabase project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Yes | Supabase service-role key; secret |
| `UPSTASH_REDIS_REST_URL` | Yes | Upstash REST URL |
| `UPSTASH_REDIS_REST_TOKEN` | Yes | Upstash REST token; secret |
| `BASE_URL` | Yes | Public edge Worker origin |
| `CORS_ORIGIN` | Yes | Public web Worker origin |
| `INTERNAL_SECRET` | Yes | Strong random secret, identical on API and edge Worker |
| `CF_ACCOUNT_ID` | Yes | Cloudflare account ID |
| `CF_ANALYTICS_API_TOKEN` | Yes | Token allowed to query Analytics Engine |
| `SENTRY_DSN` | No | API Sentry DSN |

### Cloudflare edge Worker (`apps/edge`)

Plain variables in `wrangler.toml`: `API_ORIGIN_URL` (Render URL) and `APP_URL` (web URL).

Secrets set with `wrangler secret put`: `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `INTERNAL_SECRET`, and optionally `SENTRY_DSN`.

Bindings: `URL_CACHE` (KV namespace), `ANALYTICS_ENGINE` (dataset), and the `*/3 * * * *` cron trigger.

### Cloudflare web Worker (`apps/web`)

Build-time variables: `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `NEXT_PUBLIC_API_URL`, `NEXT_PUBLIC_EDGE_URL`, and optionally `NEXT_PUBLIC_SENTRY_DSN`.

Optional Sentry build variables: `SENTRY_DSN`, `SENTRY_ORG`, `SENTRY_PROJECT`, and `SENTRY_AUTH_TOKEN`.

## 3. Deploy the API to Render

### Blueprint method

1. Push the repository to GitHub.
2. In Render, choose **New > Blueprint** and select the repository.
3. Render reads `render.yaml`. Enter every variable marked `sync: false`.
4. Set `BASE_URL` to the planned edge Worker URL and `CORS_ORIGIN` to the planned web Worker URL.
5. Deploy and verify `https://<service>.onrender.com/health` returns `{ "status": "ok" }`.

### Manual method

1. Choose **New > Web Service**, connect the repository, and select `main`.
2. Runtime: **Docker**. Leave **Root Directory empty** because the Docker build needs the whole monorepo.
3. Dockerfile path: `apps/api/Dockerfile`; Docker build context: `.`.
4. Add the API variables above, set health check path to `/health`, and deploy.

## 4. Deploy the edge Worker to Cloudflare

1. Authenticate: `pnpm --filter edge exec wrangler login`, then verify with `pnpm --filter edge exec wrangler whoami`.
2. Create KV: `pnpm --filter edge exec wrangler kv namespace create URL_CACHE`.
3. Put the returned ID in `apps/edge/wrangler.toml` under `URL_CACHE`. Create a separate preview namespace if desired.
4. Set `API_ORIGIN_URL` and `APP_URL` in `apps/edge/wrangler.toml`.
5. Set secrets from `apps/edge`:

   ```bash
   pnpm exec wrangler secret put UPSTASH_REDIS_REST_URL
   pnpm exec wrangler secret put UPSTASH_REDIS_REST_TOKEN
   pnpm exec wrangler secret put INTERNAL_SECRET
   pnpm exec wrangler secret put SENTRY_DSN
   ```

6. Deploy from the repository root: `pnpm --filter edge deploy`.
7. Copy the Worker URL to Render as `BASE_URL`, then redeploy the API.

## 5. Deploy the web Worker to Cloudflare

1. Copy `apps/web/.env.example` to `apps/web/.env` and fill in production values. The `NEXT_PUBLIC_*` values are embedded during the build.
2. Verify authentication: `pnpm --filter web exec wrangler whoami`.
3. Deploy: `pnpm --filter web deploy`.
4. Add a custom domain in Cloudflare Workers settings if required.
5. Update the edge Worker's `APP_URL` and Render's `CORS_ORIGIN` to the final web URL, then redeploy both.

OpenNext's local build can fail on native Windows because it creates symbolic links. Use WSL/Linux, or connect the GitHub repository to Cloudflare Workers Builds with app root `apps/web`, build command `pnpm exec opennextjs-cloudflare build`, and deploy command `pnpm exec opennextjs-cloudflare deploy`. Add the production variables in the Cloudflare build settings.

## 6. Verification

1. API: `GET <RENDER_URL>/health` returns HTTP 200.
2. Web: login, create a short URL, edit it, and delete it.
3. Redirect: open `<EDGE_URL>/<short_code>` and confirm the redirect.
4. Analytics: confirm the click appears after the cron runs.
5. Review Cloudflare Worker logs and Render logs for errors.

## 7. Git remote transfer

Record the original remote first: `git remote get-url origin`.

Use a temporary remote so the original connection remains recoverable:

```bash
git remote add transfer https://github.com/Ankesh-Singh/snip.git
git fetch transfer main
git push --force-with-lease=main:<REMOTE_MAIN_SHA> transfer main:main
git remote remove transfer
git remote -v
```

`--force-with-lease` refuses to overwrite the target if it changed after the fetch. The final `origin` remains the original repository.
