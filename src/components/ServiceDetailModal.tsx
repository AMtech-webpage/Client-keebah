import React from 'react';
import { ServiceItem } from '../types/portfolio';
import { X, CheckCircle, Wrench, Shield, ArrowRight } from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onSelectForInquiry?: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onSelectForInquiry,
}) => {
  if (!service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-2xl border border-[#C8A96A]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#38271F]/10 bg-[#FAF6EE]">
          <div className="flex items-center gap-2">
            <span className="text-xs uppercase tracking-wider font-semibold text-[#6F4E37] bg-[#FFF1C1] px-2.5 py-1 rounded">
              Service Scope & Standards
            </span>
            <span className="text-xs text-[#6F4E37]/80">·</span>
            <span className="text-xs text-[#A88849] font-medium">{service.status}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#38271F]/70 hover:text-[#38271F] hover:bg-[#FFF1C1]/60 transition-colors"
            aria-label="Close service modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 max-h-[80vh] overflow-y-auto">
          <div>
            <h3 className="text-2xl font-serif font-bold text-[#38271F]">
              {service.title}
            </h3>
            <p className="text-sm text-[#38271F]/80 mt-2 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Deliverables List */}
          <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/30">
            <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6F4E37] mb-3 flex items-center gap-2">
              <CheckCircle className="w-4 h-4 text-[#C8A96A]" />
              Typical Deliverables & Scope
            </h4>
            <ul className="space-y-2.5 text-xs text-[#38271F]/90">
              {service.deliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6F4E37] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools & Workflow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-white border border-[#38271F]/10">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6F4E37] mb-2 flex items-center gap-2">
                <Wrench className="w-3.5 h-3.5 text-[#C8A96A]" />
                Primary Software & Tools
              </h4>
              <div className="flex flex-wrap gap-1.5 mt-2">
                {service.toolsUsed.map((tool, idx) => (
                  <span
                    key={idx}
                    className="text-xs px-2.5 py-1 rounded bg-[#FAF6EE] border border-[#C8A96A]/30 text-[#38271F] font-medium"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-[#38271F]/10">
              <h4 className="text-xs uppercase tracking-wider font-semibold text-[#6F4E37] mb-2 flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-[#C8A96A]" />
                Quality & Confidentiality
              </h4>
              <p className="text-xs text-[#38271F]/80 leading-relaxed mt-1">
                Every task is handled with double-check verification, client confidentiality agreements, and structured file naming.
              </p>
            </div>
          </div>

          {/* Honest Note for Aspiring VA */}
          <div className="p-3.5 rounded-lg bg-[#FFF1C1]/40 border border-[#C8A96A]/40 text-xs text-[#6F4E37]">
            <span className="font-semibold">Note on Service Stage: </span>
            This service is actively being offered for practice projects, pilot administrative trials, and structured entry-level support.
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-[#38271F]/10 bg-[#FAF6EE]">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#38271F] bg-white border border-[#38271F]/20 rounded-lg hover:bg-[#FFFDF7] transition-colors"
          >
            Close
          </button>

          {onSelectForInquiry && (
            <button
              onClick={() => {
                onSelectForInquiry(service.title);
                onClose();
              }}
              className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#6F4E37] rounded-lg hover:bg-[#38271F] transition-colors"
            >
              <span>Inquire About This Service</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};
