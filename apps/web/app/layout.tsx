import type { Metadata } from 'next'
import { Toaster } from '@/components/ui/sonner'
import './globals.css'

export const metadata: Metadata = {
  title: 'Snip - URL Shortener',
  description: 'A fast, production-grade URL shortener with analytics by Ankesh Singh. Capture links, organize them beautifully, and access anytime, anywhere.',
  authors: [{ name: 'Ankesh Singh', url: 'https://aanks.xyz' }],
  creator: 'Ankesh Singh',
  publisher: 'Ankesh Singh',
  metadataBase: new URL('https://aanks.xyz'),
  openGraph: {
    title: 'Snip - URL Shortener',
    description: 'Capture links, organize them beautifully, and access anytime, anywhere.',
    url: 'https://aanks.xyz',
    siteName: 'Snip',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Snip - URL Shortener',
    description: 'Capture links, organize them beautifully, and access anytime, anywhere.',
    creator: 'Ankesh Singh',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
