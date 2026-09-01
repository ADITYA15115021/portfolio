import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import { gmailComposeUrl, portfolio } from '../data/portfolio'

const links = ['About', 'Skills', 'Projects', 'Education', 'Contact']

export function Navbar() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)
  return <header className="sticky top-0 z-50 border-b border-line/80 bg-sand/95 backdrop-blur-sm">
    <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8 md:grid md:grid-cols-[1fr_auto_1fr]" aria-label="Main navigation">
      <a href="#home" className="flex h-9 w-9 items-center justify-center rounded-full bg-ink text-xs font-bold tracking-wide text-sand md:justify-self-start" aria-label="Back to top">{portfolio.initials}</a>
      <div className="hidden items-center gap-6 md:flex md:justify-self-center">
        {links.map((link) => <a key={link} href={`#${link.toLowerCase()}`} className="nav-link">{link}</a>)}
      </div>
      
      <button onClick={() => setOpen(!open)} className="rounded p-1 text-ink md:hidden" aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}>{open ? <X /> : <Menu />}</button>
    </nav>
    {open && <div id="mobile-navigation" className="border-t border-line bg-sand px-5 py-4 md:hidden">
      <div className="mx-auto grid max-w-6xl gap-1">{links.map((link) => <a key={link} onClick={close} href={`#${link.toLowerCase()}`} className="rounded px-3 py-2 text-base font-medium text-ink hover:bg-black/5">{link}</a>)}</div>
    </div>}
  </header>
}
