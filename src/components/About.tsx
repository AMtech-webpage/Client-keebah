import React from 'react';
import { ProfileData } from '../types/portfolio';
import { VALUE_HIGHLIGHTS } from '../data/portfolioData';
import { CheckCircle2, GraduationCap, Clock, Edit3 } from 'lucide-react';

interface AboutProps {
  profile: ProfileData;
  onOpenPersonalize: () => void;
}

export const About: React.FC<AboutProps> = ({ profile, onOpenPersonalize }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'CheckCircle2':
        return <CheckCircle2 className="w-5 h-5 text-[#C8A96A]" />;
      case 'GraduationCap':
        return <GraduationCap className="w-5 h-5 text-[#C8A96A]" />;
      case 'Clock':
      default:
        return <Clock className="w-5 h-5 text-[#C8A96A]" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 bg-[#FAF6EE]/70 border-y border-[#C8A96A]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#C8A96A]/40 text-[#6F4E37] text-xs font-semibold uppercase tracking-wider">
            Background & Values
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F]">
            A Little About Me
          </h2>
          <div className="w-12 h-0.5 bg-[#C8A96A] mx-auto" />
        </div>

        {/* Narrative Box with Edit Trigger */}
        <div className="max-w-3xl mx-auto relative group">
          <div className="bg-[#FFFDF7] rounded-2xl p-6 sm:p-10 border border-[#C8A96A]/30 shadow-sm relative">
            {/* Quick edit badge */}
            <div className="flex justify-end mb-2">
              <button
                onClick={onOpenPersonalize}
                className="inline-flex items-center gap-1.5 text-xs text-[#6F4E37] hover:text-[#38271F] bg-[#FFF1C1]/60 hover:bg-[#FFF1C1] px-2.5 py-1 rounded-md transition-colors border border-[#C8A96A]/30"
                title="Edit this bio"
              >
                <Edit3 className="w-3 h-3" />
                <span>Personalise Bio</span>
              </button>
            </div>

            <p className="text-base sm:text-lg text-[#38271F]/90 leading-relaxed font-sans font-normal italic mb-6">
              “{profile.aboutText}”
            </p>

            <div className="flex items-center justify-between pt-6 border-t border-[#38271F]/10">
              <div>
                <p className="font-serif font-bold text-base text-[#38271F]">
                  {profile.name}
                </p>
                <p className="text-xs text-[#6F4E37]">
                  Aspiring Virtual Assistant · Continuous Learner
                </p>
              </div>

              <div className="text-right">
                <span className="text-xs px-2.5 py-1 rounded bg-[#FAF6EE] text-[#6F4E37] border border-[#C8A96A]/30 font-medium">
                  Remote & Adaptable
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* 3 Value Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          {VALUE_HIGHLIGHTS.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#FFFDF7] rounded-2xl p-6 border border-[#C8A96A]/30 shadow-2xs hover:shadow-md transition-shadow group flex flex-col justify-between"
            >
              <div>
                <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/30 flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                  {getIcon(item.icon)}
                </div>
                <h3 className="text-lg font-serif font-bold text-[#38271F] mb-2">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-[#38271F]/80 leading-relaxed font-sans">
                  {item.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-[#38271F]/5 text-[11px] text-[#6F4E37] font-medium">
                Pillar {idx + 1} of 3
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
