import React, { useState } from 'react';
import { ServiceItem } from '../types/portfolio';
import { ServiceDetailModal } from './ServiceDetailModal';
import { 
  FolderKanban, 
  CalendarCheck, 
  Search, 
  FileText, 
  Share2, 
  MessageSquare, 
  ArrowRight,
  Settings2,
  Check
} from 'lucide-react';

interface ServicesProps {
  services: ServiceItem[];
  onOpenPersonalize: () => void;
  onSelectForInquiry: (serviceTitle: string) => void;
}

export const Services: React.FC<ServicesProps> = ({
  services,
  onOpenPersonalize,
  onSelectForInquiry,
}) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case 'FolderKanban':
        return <FolderKanban className="w-5 h-5 text-[#6F4E37]" />;
      case 'CalendarCheck':
        return <CalendarCheck className="w-5 h-5 text-[#6F4E37]" />;
      case 'Search':
        return <Search className="w-5 h-5 text-[#6F4E37]" />;
      case 'FileText':
        return <FileText className="w-5 h-5 text-[#6F4E37]" />;
      case 'Share2':
        return <Share2 className="w-5 h-5 text-[#6F4E37]" />;
      case 'MessageSquare':
      default:
        return <MessageSquare className="w-5 h-5 text-[#6F4E37]" />;
    }
  };

  // Only display services that are enabled (default all true, customizable by user)
  const visibleServices = services.filter(s => s.enabled !== false);

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#C8A96A]/40 text-[#6F4E37] text-xs font-semibold uppercase tracking-wider">
              Services in Development
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F]">
              Virtual Support Services
            </h2>
            <p className="text-sm sm:text-base text-[#38271F]/80 leading-relaxed font-sans">
              These are the core areas of virtual assistance I am developing towards offering. Each service is built around attention to detail, reliability, and clear communication.
            </p>
          </div>

          <div className="shrink-0 flex items-center gap-2">
            <button
              onClick={onOpenPersonalize}
              className="inline-flex items-center gap-1.5 text-xs text-[#6F4E37] hover:text-[#38271F] bg-[#FFF1C1]/60 hover:bg-[#FFF1C1] px-3 py-2 rounded-lg transition-colors border border-[#C8A96A]/30"
              title="Show or hide specific services"
            >
              <Settings2 className="w-3.5 h-3.5" />
              <span>Configure Visible Services</span>
            </button>
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visibleServices.map(service => (
            <div
              key={service.id}
              className="group bg-[#FFFDF7] rounded-2xl p-6 border border-[#C8A96A]/35 hover:border-[#6F4E37]/60 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                {/* Card Top: Icon + Status Tag */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/30 flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getServiceIcon(service.icon)}
                  </div>

                  <span className="text-[11px] font-medium tracking-wide text-[#6F4E37] bg-[#FFF1C1]/70 px-2 py-0.5 rounded border border-[#C8A96A]/30">
                    {service.status}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-[#38271F] mb-2 group-hover:text-[#6F4E37] transition-colors">
                  {service.title}
                </h3>

                {/* Short Description */}
                <p className="text-xs sm:text-sm text-[#38271F]/80 leading-relaxed font-sans mb-4">
                  {service.shortDescription}
                </p>

                {/* Deliverables snippet */}
                <div className="space-y-1.5 pt-3 border-t border-[#38271F]/10">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6F4E37]/90 block mb-1">
                    Sample Deliverables:
                  </span>
                  {service.deliverables.slice(0, 2).map((deliv, i) => (
                    <div key={i} className="flex items-start gap-1.5 text-xs text-[#38271F]/75">
                      <Check className="w-3.5 h-3.5 text-[#C8A96A] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{deliv}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer: View Scope Button */}
              <div className="pt-5 mt-4 border-t border-[#38271F]/10 flex items-center justify-between">
                <button
                  onClick={() => setSelectedService(service)}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6F4E37] hover:text-[#38271F] transition-colors"
                >
                  <span>View Full Scope</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>

                <span className="text-[11px] text-[#38271F]/50">
                  {service.toolsUsed.length} tools
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Note on service availability */}
        <div className="mt-12 p-4 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/30 text-xs text-[#38271F]/80 text-center max-w-2xl mx-auto">
          <p>
            <span className="font-semibold text-[#6F4E37]">Honest Transparency: </span>
            I am currently accepting pilot tasks, practice projects, and entry-level administrative assistance to build experience and deliver maximum value to your business.
          </p>
        </div>
      </div>

      {/* Service Detail Modal */}
      <ServiceDetailModal
        service={selectedService}
        onClose={() => setSelectedService(null)}
        onSelectForInquiry={onSelectForInquiry}
      />
    </section>
  );
};
