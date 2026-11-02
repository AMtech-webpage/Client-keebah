import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, SlidersHorizontal } from 'lucide-react';

interface NavbarProps {
  onOpenPersonalize: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenPersonalize }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Skills', href: '#skills' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Why Me', href: '#why-me' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 border-b ${
        scrolled
          ? 'bg-[#FFFDF7]/95 backdrop-blur-md border-[#C8A96A]/30 shadow-2xs'
          : 'bg-[#FFFDF7] border-[#38271F]/10'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#home"
          className="flex items-center gap-2 text-decoration-none group whitespace-nowrap shrink-0"
        >
          <span className="w-9 h-9 rounded-full bg-[#FAF6EE] border border-[#C8A96A] text-[#6F4E37] flex items-center justify-center font-serif text-lg font-bold tracking-tight shadow-2xs transition-transform group-hover:scale-105">
            ASR
          </span>
          <div className="flex flex-col">
            <span className="font-serif text-base sm:text-lg font-bold text-[#38271F] tracking-tight group-hover:text-[#6F4E37] transition-colors leading-tight">
              Abdul Salam Rokibat
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#6F4E37] font-medium leading-none">
              Virtual Assistant
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 text-xs sm:text-sm font-medium text-[#38271F]/80">
          {navLinks.map(link => (
            <a
              key={link.label}
              href={link.href}
              className="whitespace-nowrap shrink-0 hover:text-[#6F4E37] transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C8A96A] hover:after:w-full after:transition-all after:duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-3 shrink-0">
          <button
            onClick={onOpenPersonalize}
            title="Edit profile & customize content"
            className="p-2 text-[#38271F]/70 hover:text-[#6F4E37] hover:bg-[#FAF6EE] rounded-lg transition-colors border border-transparent hover:border-[#C8A96A]/30"
            aria-label="Customize profile details"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#6F4E37] hover:bg-[#38271F] rounded-lg transition-colors shadow-2xs whitespace-nowrap shrink-0"
          >
            <span>Let’s Connect</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={onOpenPersonalize}
            className="p-2 text-[#38271F]/70 hover:text-[#6F4E37] rounded-lg border border-[#38271F]/10"
            aria-label="Customize profile"
          >
            <SlidersHorizontal className="w-4 h-4" />
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#38271F] hover:bg-[#FAF6EE] rounded-lg transition-colors"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-[#C8A96A]/20 bg-[#FFFDF7] px-4 pt-3 pb-6 space-y-3 shadow-lg animate-in slide-in-from-top-2">
          <div className="flex flex-col space-y-2">
            {navLinks.map(link => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-sm font-medium text-[#38271F] hover:bg-[#FAF6EE] hover:text-[#6F4E37] rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#38271F]/10 flex flex-col gap-2">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 text-xs font-semibold text-white bg-[#6F4E37] hover:bg-[#38271F] rounded-lg transition-colors"
            >
              Let’s Connect
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
