import React from 'react';
import { ProfileData } from '../types/portfolio';
import { ArrowRight, Sparkles, CheckCircle2, Shield, HeartHandshake } from 'lucide-react';

interface HeroProps {
  profile: ProfileData;
}

export const Hero: React.FC<HeroProps> = ({ profile }) => {
  return (
    <section id="home" className="relative pt-8 pb-16 sm:pt-14 sm:pb-24 overflow-hidden">
      {/* Background Accent Gradients */}
      <div className="absolute top-10 right-10 w-96 h-96 bg-[#FFF1C1]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute -bottom-10 left-10 w-80 h-80 bg-[#C8A96A]/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Typographic Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Small introductory label */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FAF6EE] border border-[#C8A96A]/40 text-[#6F4E37] text-xs font-semibold tracking-wider uppercase">
              <span className="w-2 h-2 rounded-full bg-[#C8A96A]" />
              <span>{profile.roleTitle}</span>
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif font-bold text-[#38271F] leading-[1.15] tracking-tight">
              {profile.headline}
            </h1>

            {/* Introduction paragraph */}
            <p className="text-base sm:text-lg text-[#38271F]/85 leading-relaxed font-sans max-w-xl">
              Hello, I’m <span className="font-semibold text-[#6F4E37]">{profile.name}</span>. I am developing my Virtual Assistant skills and am deeply passionate about supporting individuals, entrepreneurs, and growing businesses with organised, dependable, and thoughtful virtual assistance.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-[#6F4E37] hover:bg-[#38271F] rounded-xl transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                <span>Let’s Work Together</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#skills"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-[#38271F] bg-[#FAF6EE] hover:bg-[#FFF1C1]/60 border border-[#C8A96A]/50 rounded-xl transition-all duration-200 hover:-translate-y-0.5"
              >
                <span>Explore My Skills</span>
              </a>
            </div>

            {/* Trust Markers Bar */}
            <div className="pt-6 border-t border-[#38271F]/10 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#38271F]/80">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#C8A96A]" />
                <span>Meticulous Organisation</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Shield className="w-4 h-4 text-[#C8A96A]" />
                <span>Client Discretion</span>
              </span>
              <span className="flex items-center gap-1.5">
                <HeartHandshake className="w-4 h-4 text-[#C8A96A]" />
                <span>Eager Learner & Reliable Support</span>
              </span>
            </div>
          </div>

          {/* Right Column: Visual Portrait & Workspace Card */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Subtle Gold Decorative Ring */}
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#C8A96A]/20 via-[#FFF1C1]/40 to-[#6F4E37]/15 blur-sm -z-10" />

              <div className="bg-[#FFFDF7] rounded-2xl p-3 border border-[#C8A96A]/40 shadow-xl overflow-hidden">
                <div className="relative rounded-xl overflow-hidden aspect-[4/3] bg-[#FAF6EE]">
                  <img
                    src="/src/assets/images/hero_va_workspace_1793654655126.jpg"
                    alt="Virtual Assistant organized workspace representation"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-102"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                  {/* Contextual Tag */}
                  <div className="absolute bottom-3 left-3 right-3 text-white text-xs p-2.5 rounded-lg bg-black/40 backdrop-blur-xs border border-white/10 flex items-center justify-between">
                    <div>
                      <p className="font-serif font-semibold text-sm text-[#FFF1C1]">
                        Organised Daily Focus
                      </p>
                      <p className="text-[11px] text-white/80">
                        Visual Concept · Professional Virtual Support
                      </p>
                    </div>
                    <span className="text-[10px] uppercase font-mono px-2 py-0.5 bg-white/20 rounded">
                      Practice Ready
                    </span>
                  </div>
                </div>

                {/* Subtext under portrait: Clear label as requested */}
                <div className="px-3 pt-3 pb-1 flex items-center justify-between text-xs text-[#38271F]/70">
                  <span className="italic">Workspace concept for Abdul Salam Rokibat</span>
                  <span className="text-[#6F4E37] font-medium">Virtual Assistant</span>
                </div>
              </div>

              {/* Floating Mini Highlight Card */}
              <div className="hidden sm:flex absolute -bottom-5 -left-5 bg-[#FAF6EE] border border-[#C8A96A]/50 rounded-xl p-3 shadow-lg items-center gap-3 max-w-xs">
                <div className="w-8 h-8 rounded-lg bg-[#FFF1C1] text-[#6F4E37] flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-[#6F4E37]" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[#38271F]">
                    Ready for Practice Projects
                  </p>
                  <p className="text-[11px] text-[#38271F]/70">
                    Open to entry-level admin tasks & trials
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
