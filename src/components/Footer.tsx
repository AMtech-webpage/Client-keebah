import React from 'react';
import { ProfileData } from '../types/portfolio';
import { Linkedin, Mail, MessageCircle, Phone, ArrowUp } from 'lucide-react';

interface FooterProps {
  profile: ProfileData;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const currentYear = new Date().getFullYear();
  const phone = profile.phoneNumber || profile.whatsAppNumber || '+234 907 678 6830';
  const cleanPhoneDigits = phone.replace(/[^0-9]/g, '');

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#FAF6EE] border-t border-[#C8A96A]/30 pt-14 pb-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-12 border-b border-[#38271F]/10">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2">
              <span className="w-8 h-8 rounded-full bg-[#FFFDF7] border border-[#C8A96A] text-[#6F4E37] flex items-center justify-center font-serif text-base font-bold">
                ASR
              </span>
              <span className="font-serif text-lg font-bold text-[#38271F]">
                {profile.name}
              </span>
            </div>

            <p className="text-xs text-[#6F4E37] font-semibold tracking-wider uppercase">
              Aspiring Virtual Assistant
            </p>

            <p className="text-xs text-[#38271F]/75 leading-relaxed max-w-sm">
              Helping entrepreneurs, busy professionals, and growing teams stay organized, focused, and productive with dependable virtual support.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-semibold text-[#6F4E37] uppercase tracking-wider">
              Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#38271F]/80">
              <a href="#home" className="hover:text-[#6F4E37] transition-colors">Home</a>
              <a href="#about" className="hover:text-[#6F4E37] transition-colors">About Me</a>
              <a href="#services" className="hover:text-[#6F4E37] transition-colors">Services</a>
              <a href="#skills" className="hover:text-[#6F4E37] transition-colors">Skills</a>
              <a href="#portfolio" className="hover:text-[#6F4E37] transition-colors">Portfolio</a>
              <a href="#why-me" className="hover:text-[#6F4E37] transition-colors">Why Work With Me</a>
              <a href="#contact" className="hover:text-[#6F4E37] transition-colors">Contact</a>
            </div>
          </div>

          {/* Connect & Back to Top */}
          <div className="md:col-span-3 space-y-3 flex flex-col justify-between">
            <div>
              <h4 className="text-xs font-semibold text-[#6F4E37] uppercase tracking-wider mb-2">
                Get In Touch
              </h4>
              <p className="text-xs text-[#38271F]/80 break-all mb-1">
                {profile.email}
              </p>
              <p className="text-xs text-[#6F4E37] font-mono mb-3">
                {phone}
              </p>
              <div className="flex items-center gap-2">
                <a
                  href={`mailto:${profile.email}`}
                  className="p-2 rounded-lg bg-white border border-[#C8A96A]/30 text-[#6F4E37] hover:bg-[#FFFDF7] transition-colors"
                  aria-label="Email Abdul"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
                <a
                  href={`https://wa.me/${cleanPhoneDigits}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-emerald-300 text-emerald-700 hover:bg-emerald-50 transition-colors"
                  aria-label="WhatsApp chat"
                  title="Chat on WhatsApp"
                >
                  <MessageCircle className="w-4 h-4" />
                </a>
                <a
                  href={`tel:${cleanPhoneDigits.startsWith('+') ? cleanPhoneDigits : `+${cleanPhoneDigits}`}`}
                  className="p-2 rounded-lg bg-white border border-[#C8A96A]/30 text-[#6F4E37] hover:bg-[#FFFDF7] transition-colors"
                  aria-label="Call phone"
                  title="Direct Call"
                >
                  <Phone className="w-4 h-4" />
                </a>
                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-lg bg-white border border-[#C8A96A]/30 text-[#6F4E37] hover:bg-[#FFFDF7] transition-colors"
                  aria-label="LinkedIn profile"
                  title="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>

            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-xs text-[#6F4E37] hover:text-[#38271F] font-medium transition-colors self-start mt-4"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#38271F]/60">
          <p>© {currentYear} Abdul Salam Rokibat. All rights reserved.</p>
          <p className="text-[11px] text-[#6F4E37]/80">
            Crafted with warm brown, butter cream & champagne gold elegance.
          </p>
        </div>
      </div>
    </footer>
  );
};
