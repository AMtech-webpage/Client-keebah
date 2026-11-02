import React, { useState } from 'react';
import { SKILLS_LIST } from '../data/portfolioData';
import { 
  Clock, 
  CheckCircle, 
  Mail, 
  FileCheck, 
  Laptop, 
  Layers, 
  Database, 
  PenTool, 
  Search, 
  Calendar,
  Sparkles
} from 'lucide-react';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'Clock':
        return <Clock className="w-4 h-4 text-[#C8A96A]" />;
      case 'CheckCircle':
        return <CheckCircle className="w-4 h-4 text-[#C8A96A]" />;
      case 'Mail':
        return <Mail className="w-4 h-4 text-[#C8A96A]" />;
      case 'FileCheck':
        return <FileCheck className="w-4 h-4 text-[#C8A96A]" />;
      case 'Laptop':
        return <Laptop className="w-4 h-4 text-[#C8A96A]" />;
      case 'Layers':
        return <Layers className="w-4 h-4 text-[#C8A96A]" />;
      case 'Database':
        return <Database className="w-4 h-4 text-[#C8A96A]" />;
      case 'PenTool':
        return <PenTool className="w-4 h-4 text-[#C8A96A]" />;
      case 'Search':
        return <Search className="w-4 h-4 text-[#C8A96A]" />;
      case 'Calendar':
      default:
        return <Calendar className="w-4 h-4 text-[#C8A96A]" />;
    }
  };

  const categories = ['All', 'Administration', 'Tools & Software', 'Communication & Research'];

  const filteredSkills = selectedCategory === 'All'
    ? SKILLS_LIST
    : SKILLS_LIST.filter(s => s.category === selectedCategory);

  return (
    <section id="skills" className="py-16 sm:py-24 bg-[#FAF6EE]/60 border-y border-[#C8A96A]/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FFFDF7] border border-[#C8A96A]/40 text-[#6F4E37] text-xs font-semibold uppercase tracking-wider">
            Capabilities & Learning Journey
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F]">
            Core Skills & Competencies
          </h2>
          <p className="text-sm sm:text-base text-[#38271F]/80 leading-relaxed font-sans">
            A transparent overview of the administrative abilities, productivity software, and communication habits I am practicing and developing every day.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-150 ${
                selectedCategory === cat
                  ? 'bg-[#6F4E37] text-white shadow-xs'
                  : 'bg-[#FFFDF7] text-[#38271F]/70 border border-[#C8A96A]/30 hover:text-[#38271F] hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map(skill => (
            <div
              key={skill.id}
              className="bg-[#FFFDF7] rounded-xl p-5 border border-[#C8A96A]/30 hover:border-[#6F4E37]/50 transition-all duration-150 shadow-2xs hover:shadow-xs group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#FAF6EE] border border-[#C8A96A]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getSkillIcon(skill.iconName)}
                  </div>
                  <span className="text-[11px] text-[#6F4E37] font-mono">
                    {skill.category}
                  </span>
                </div>

                <h3 className="text-base font-serif font-bold text-[#38271F] mb-1.5 group-hover:text-[#6F4E37] transition-colors">
                  {skill.name}
                </h3>

                <p className="text-xs text-[#38271F]/80 leading-relaxed font-sans">
                  {skill.description}
                </p>
              </div>

              {/* Progress-free indicator */}
              <div className="mt-4 pt-3 border-t border-[#38271F]/5 flex items-center justify-between text-[11px] text-[#38271F]/60">
                <span>Developing & Practicing</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#C8A96A]" />
              </div>
            </div>
          ))}
        </div>

        {/* Honest learning footer */}
        <div className="mt-10 flex items-center justify-center gap-2 text-xs text-[#6F4E37]">
          <Sparkles className="w-4 h-4 text-[#C8A96A]" />
          <span>No fabricated proficiency bars · Committed to real-world continuous improvement</span>
        </div>
      </div>
    </section>
  );
};
