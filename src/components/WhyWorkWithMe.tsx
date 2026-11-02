import React from 'react';
import { WHY_WORK_WITH_ME } from '../data/portfolioData';
import { 
  Compass, 
  Target, 
  MessageCircle, 
  Sparkles, 
  ShieldCheck, 
  TrendingUp 
} from 'lucide-react';

export const WhyWorkWithMe: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Compass':
        return <Compass className="w-5 h-5 text-[#C8A96A]" />;
      case 'Target':
        return <Target className="w-5 h-5 text-[#C8A96A]" />;
      case 'MessageCircle':
        return <MessageCircle className="w-5 h-5 text-[#C8A96A]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#C8A96A]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#C8A96A]" />;
      case 'TrendingUp':
      default:
        return <TrendingUp className="w-5 h-5 text-[#C8A96A]" />;
    }
  };

  return (
    <section id="why-me" className="py-16 sm:py-24 bg-[#FAF6EE]/70 border-y border-[#C8A96A]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#C8A96A]/40 text-[#6F4E37] text-xs font-semibold uppercase tracking-wider">
            Commitment & Work Ethic
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F]">
            Why Work With Me?
          </h2>
          <p className="text-sm sm:text-base text-[#38271F]/80 leading-relaxed font-sans">
            As an aspiring Virtual Assistant, I bring fresh energy, meticulous precision, and an honest dedication to supporting your daily operations with peace of mind.
          </p>
        </div>

        {/* 6 Grid Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {WHY_WORK_WITH_ME.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF7] rounded-2xl p-6 border border-[#C8A96A]/30 hover:border-[#6F4E37]/50 transition-all duration-200 shadow-2xs hover:shadow-sm flex flex-col justify-between group"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>

                <h3 className="text-lg font-serif font-bold text-[#38271F] mb-2 group-hover:text-[#6F4E37] transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#38271F]/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-[#38271F]/5 flex items-center justify-between text-[11px] text-[#6F4E37]">
                <span>Work Ethic Principle</span>
                <span className="font-mono text-[#38271F]/40">0{idx + 1}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Client Collaboration Callout */}
        <div className="mt-12 bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 border border-[#C8A96A]/40 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center sm:text-left">
            <h4 className="text-base sm:text-lg font-serif font-bold text-[#38271F]">
              Looking for a dependable assistant to grow with your business?
            </h4>
            <p className="text-xs sm:text-sm text-[#38271F]/70">
              I am open to pilot tasks, part-time administrative assistance, and trial projects.
            </p>
          </div>

          <a
            href="#contact"
            className="px-5 py-2.5 text-xs font-semibold text-white bg-[#6F4E37] hover:bg-[#38271F] rounded-xl transition-colors shadow-2xs whitespace-nowrap shrink-0"
          >
            Start a Conversation
          </a>
        </div>
      </div>
    </section>
  );
};
