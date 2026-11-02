import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { PortfolioProject } from '../types/portfolio';
import { ProjectDetailModal } from './ProjectDetailModal';
import { ArrowRight, Eye, Calendar, Table, FileText } from 'lucide-react';

export const Portfolio: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProject, setActiveProject] = useState<PortfolioProject | null>(null);

  const categories = ['All', 'Scheduling', 'Data & Systems', 'Documentation'];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Scheduling':
        return <Calendar className="w-3.5 h-3.5 text-[#C8A96A]" />;
      case 'Data & Systems':
        return <Table className="w-3.5 h-3.5 text-[#C8A96A]" />;
      case 'Documentation':
      default:
        return <FileText className="w-3.5 h-3.5 text-[#C8A96A]" />;
    }
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#C8A96A]/40 text-[#6F4E37] text-xs font-semibold uppercase tracking-wider">
              Sample Work & Practice Projects
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F]">
              Portfolio of Practical Work
            </h2>
            <p className="text-sm sm:text-base text-[#38271F]/80 leading-relaxed font-sans">
              To showcase real organization and administrative standards, these sample systems demonstrate my approach to scheduling, data management, and client communication.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#FAF6EE] rounded-xl border border-[#C8A96A]/30">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-[#6F4E37] text-white shadow-xs'
                    : 'text-[#38271F]/70 hover:text-[#38271F]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div
              key={project.id}
              className="group bg-[#FFFDF7] rounded-2xl border border-[#C8A96A]/35 hover:border-[#6F4E37]/60 shadow-2xs hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col justify-between"
            >
              <div>
                {/* Image Container with Badge */}
                <div className="relative aspect-[4/3] bg-[#FAF6EE] overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-103"
                  />
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors" />

                  {/* Explicit Practice Project Pill Label */}
                  <div className="absolute top-3 left-3 bg-[#FFFDF7]/95 text-[#6F4E37] text-[11px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded shadow-xs border border-[#C8A96A]/40 backdrop-blur-xs">
                    {project.badgeLabel}
                  </div>

                  <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                      onClick={() => setActiveProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#38271F]/90 text-white text-xs font-medium backdrop-blur-xs shadow-md hover:bg-[#6F4E37] transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Inspect Artifact</span>
                    </button>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Category metadata */}
                  <div className="flex items-center gap-2 text-xs text-[#6F4E37] font-medium mb-2">
                    {getCategoryIcon(project.category)}
                    <span>{project.category}</span>
                    <span className="text-[#38271F]/40">·</span>
                    <span className="text-[#38271F]/60 text-[11px]">Simulated Client Scenario</span>
                  </div>

                  <h3 className="text-xl font-serif font-bold text-[#38271F] mb-2 group-hover:text-[#6F4E37] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#38271F]/80 leading-relaxed font-sans line-clamp-3">
                    {project.shortDescription}
                  </p>
                </div>
              </div>

              {/* Card Bottom CTA */}
              <div className="px-6 pb-6 pt-2 border-t border-[#38271F]/5 flex items-center justify-between">
                <button
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6F4E37] group-hover:text-[#38271F] transition-colors"
                >
                  <span>View Project Details</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <div className="flex items-center gap-1 text-[11px] font-mono text-[#38271F]/50">
                  <span>Interactive Preview</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Future Portfolio Expansions */}
        <div className="mt-12 text-center text-xs text-[#38271F]/70">
          <span>More practice case studies and client workflow exercises are continuously being added.</span>
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
};
