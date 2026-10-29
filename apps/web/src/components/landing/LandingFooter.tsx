import logo from '../../../assets/logo.png'

export default function LandingFooter() {
  return (
    <footer className="w-full bg-[#fbfaf9] border-t border-gray-100 pt-24 pb-8 px-6">
      <div className="w-full max-w-[1200px] mx-auto flex flex-col gap-8">
        
        {/* Top 4-column section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8 w-full">
          
          {/* Column 1: Branding and description */}
          <div className="flex flex-col gap-6 col-span-2 md:col-span-1">
            <div className="flex items-center gap-2">
              <img src={logo.src} alt="Snip Logo" className="h-7 w-auto" />
              <span className="font-bold text-xl tracking-tight text-gray-900">Snip</span>
            </div>
            <p className="text-gray-500 text-[14px] leading-relaxed">
              A fast, production-grade URL shortener with analytics. Capture links, organize them beautifully, and access anytime, anywhere.
            </p>
            <div className="flex items-center gap-3">
              {/* Social Icons */}
              <a href="https://github.com/Ankesh-Singh" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-black hover:border-gray-300 transition-colors bg-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/ankeshsingh07/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-black hover:border-gray-300 transition-colors bg-white">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              </a>
              <a href="https://aanks.xyz" target="_blank" rel="noopener noreferrer" aria-label="Portfolio" className="w-9 h-9 flex items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:text-black hover:border-gray-300 transition-colors bg-white">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
              </a>
            </div>
          </div>

          {/* Column 2: Platform */}
          <div className="flex flex-col gap-5">
            <h6 className="font-semibold text-[16px] text-gray-900 tracking-tight">Platform</h6>
            <div className="flex flex-col gap-3 text-gray-500 text-[15px] font-medium">
              <a href="#features" className="hover:text-black transition-colors">Features</a>
              <a href="#" className="hover:text-black transition-colors">Analytics</a>
              <a href="#" className="hover:text-black transition-colors">Integrations</a>
            </div>
          </div>

          {/* Column 3: Resources */}
          <div className="flex flex-col gap-5">
            <h6 className="font-semibold text-[16px] text-gray-900 tracking-tight">Resources</h6>
            <div className="flex flex-col gap-3 text-gray-500 text-[15px] font-medium">
              <a href="https://github.com/Ankesh-Singh/snip" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Documentation</a>
              <a href="/dashboard" className="hover:text-black transition-colors">API Reference</a>
              <a href="https://aanks.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Blog</a>
            </div>
          </div>

          {/* Column 4: Community */}
          <div className="flex flex-col gap-5">
            <h6 className="font-semibold text-[16px] text-gray-900 tracking-tight">Community</h6>
            <div className="flex flex-col gap-3 text-gray-500 text-[15px] font-medium">
              <a href="https://github.com/Ankesh-Singh" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
              <a href="https://www.linkedin.com/in/ankeshsingh07/" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
              <a href="https://aanks.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Portfolio</a>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex flex-col gap-6 mt-2">
          <div className="w-full h-[1px] bg-gray-200"></div>
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-500 text-[14px] font-medium">© 2024 Snip. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-green-200 bg-green-50 text-green-700 text-[12px] font-semibold tracking-wide">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Operational
              </div>
              <div className="flex items-center gap-1.5 text-gray-500 text-[14px] font-medium hover:text-gray-900 transition-colors cursor-pointer">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path></svg>
                EN-US
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  )
}
