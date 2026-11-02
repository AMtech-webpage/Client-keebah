import React, { useState } from 'react';
import { ProfileData, ServiceItem } from '../types/portfolio';
import { X, Save, RotateCcw, Check, Sparkles, MessageSquare, Mail, Globe, User } from 'lucide-react';

interface PersonalizeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: ProfileData;
  services: ServiceItem[];
  onSaveProfile: (updatedProfile: ProfileData, updatedServices: ServiceItem[]) => void;
  onResetDefaults: () => void;
}

export const PersonalizeModal: React.FC<PersonalizeModalProps> = ({
  isOpen,
  onClose,
  profile,
  services,
  onSaveProfile,
  onResetDefaults,
}) => {
  const [formData, setFormData] = useState<ProfileData>({ ...profile });
  const [serviceStates, setServiceStates] = useState<ServiceItem[]>([...services]);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleTextChange = (field: keyof ProfileData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleToggleService = (id: string) => {
    setServiceStates(prev =>
      prev.map(s => (s.id === id ? { ...s, enabled: !s.enabled } : s))
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveProfile(formData, serviceStates);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 900);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-xs overflow-y-auto">
      <div
        className="relative w-full max-w-2xl bg-[#FFFDF7] rounded-2xl border border-[#C8A96A]/40 shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200"
        role="dialog"
        aria-modal="true"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#38271F]/10 bg-[#FAF6EE]">
          <div className="flex items-center gap-2.5">
            <div className="p-1.5 rounded-md bg-[#FFF1C1] text-[#6F4E37]">
              <Sparkles className="w-4 h-4" />
            </div>
            <div>
              <h3 className="text-base font-serif font-bold text-[#38271F]">
                Personalise Portfolio Details
              </h3>
              <p className="text-xs text-[#38271F]/70">
                Update your bio, contact placeholders, and offered services in real time.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#38271F]/70 hover:text-[#38271F] hover:bg-[#FFF1C1]/60 transition-colors"
            aria-label="Close customizer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Identity & Headline */}
          <div className="space-y-4">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6F4E37] flex items-center gap-2">
              <User className="w-3.5 h-3.5 text-[#C8A96A]" />
              Personal Branding
            </h4>

            <div>
              <label className="block text-xs font-medium text-[#38271F] mb-1">
                Your Full Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={e => handleTextChange('name', e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg bg-white border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#38271F] mb-1">
                Role Title Label
              </label>
              <input
                type="text"
                value={formData.roleTitle}
                onChange={e => handleTextChange('roleTitle', e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg bg-white border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#38271F] mb-1">
                Hero Headline
              </label>
              <input
                type="text"
                value={formData.headline}
                onChange={e => handleTextChange('headline', e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg bg-white border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                required
              />
            </div>

            <div>
              <label className="block text-xs font-medium text-[#38271F] mb-1">
                About Me Narrative Draft
              </label>
              <textarea
                rows={4}
                value={formData.aboutText}
                onChange={e => handleTextChange('aboutText', e.target.value)}
                className="w-full text-xs sm:text-sm px-3.5 py-2 rounded-lg bg-white border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                required
              />
              <p className="text-[11px] text-[#38271F]/60 mt-1">
                Feel free to tailor your background, tone, or specific industry interests.
              </p>
            </div>
          </div>

          {/* Contact Details */}
          <div className="space-y-4 pt-4 border-t border-[#38271F]/10">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6F4E37] flex items-center gap-2">
              <Mail className="w-3.5 h-3.5 text-[#C8A96A]" />
              Contact Placeholders & Links
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-medium text-[#38271F] mb-1">
                  Professional Email Address
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={e => handleTextChange('email', e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-lg bg-white border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-[#38271F] mb-1">
                  LinkedIn Profile URL
                </label>
                <input
                  type="url"
                  value={formData.linkedInUrl}
                  onChange={e => handleTextChange('linkedInUrl', e.target.value)}
                  className="w-full text-xs px-3.5 py-2 rounded-lg bg-white border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
            </div>

            {/* WhatsApp Control */}
            <div className="p-3.5 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/30 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-[#38271F] block">
                    WhatsApp Direct Contact
                  </span>
                  <span className="text-[11px] text-[#38271F]/70">
                    Only displayed on portfolio when enabled with a valid international number.
                  </span>
                </div>
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={formData.isWhatsAppActive}
                    onChange={e => handleTextChange('isWhatsAppActive', e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-[#6F4E37]"></div>
                </label>
              </div>

              {formData.isWhatsAppActive && (
                <div>
                  <label className="block text-xs font-medium text-[#38271F] mb-1">
                    WhatsApp Number (with country code, e.g. +234...)
                  </label>
                  <input
                    type="tel"
                    value={formData.whatsAppNumber}
                    onChange={e => handleTextChange('whatsAppNumber', e.target.value)}
                    placeholder="+234..."
                    className="w-full text-xs px-3.5 py-2 rounded-lg bg-white border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                  />
                </div>
              )}
            </div>
          </div>

          {/* Service Visibility Toggles */}
          <div className="space-y-3 pt-4 border-t border-[#38271F]/10">
            <div className="flex items-center justify-between">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-[#6F4E37]">
                Manage Active Services (Toggle Visibility)
              </h4>
              <span className="text-[11px] text-[#38271F]/60">
                Hide services you are not ready to provide yet
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {serviceStates.map(svc => (
                <label
                  key={svc.id}
                  className={`flex items-center justify-between p-3 rounded-lg border text-xs cursor-pointer transition-colors ${
                    svc.enabled !== false
                      ? 'bg-white border-[#C8A96A]/50 text-[#38271F]'
                      : 'bg-[#FAF6EE]/50 border-gray-200 text-gray-400'
                  }`}
                >
                  <span className="font-medium">{svc.title}</span>
                  <input
                    type="checkbox"
                    checked={svc.enabled !== false}
                    onChange={() => handleToggleService(svc.id)}
                    className="rounded text-[#6F4E37] focus:ring-[#6F4E37]"
                  />
                </label>
              ))}
            </div>
          </div>

          {/* Footer Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-[#38271F]/10">
            <button
              type="button"
              onClick={onResetDefaults}
              className="inline-flex items-center gap-1.5 text-xs text-[#38271F]/70 hover:text-[#6F4E37] transition-colors"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset to Defaults</span>
            </button>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={onClose}
                className="px-4 py-2 text-xs font-semibold text-[#38271F] bg-white border border-[#38271F]/20 rounded-lg hover:bg-[#FAF6EE] transition-colors"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-semibold text-white bg-[#6F4E37] rounded-lg hover:bg-[#38271F] transition-colors shadow-xs"
              >
                {savedSuccess ? <Check className="w-3.5 h-3.5" /> : <Save className="w-3.5 h-3.5" />}
                <span>{savedSuccess ? 'Saved!' : 'Save Changes'}</span>
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
