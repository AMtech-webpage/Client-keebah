import React, { useState } from 'react';
import { ProfileData } from '../types/portfolio';
import { 
  Mail, 
  Linkedin, 
  MessageCircle, 
  Phone,
  Copy, 
  Check, 
  Send, 
  Sparkles, 
  ExternalLink,
  Clock,
  MapPin,
  CheckCircle2,
  Info
} from 'lucide-react';

interface ContactProps {
  profile: ProfileData;
  preselectedService?: string;
  onOpenPersonalize: () => void;
}

export const Contact: React.FC<ContactProps> = ({
  profile,
  preselectedService,
  onOpenPersonalize,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: preselectedService || 'Administrative Support',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedWhatsApp, setCopiedWhatsApp] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [copiedSummary, setCopiedSummary] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const servicesOptions = [
    'Administrative Support',
    'Email & Calendar Management',
    'Data Entry & Research',
    'Document Formatting',
    'Social Media Assistance',
    'Customer Communication Support',
    'General Virtual Assistant Inquiry',
    'Practice Project / Trial Task',
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    const num = profile.phoneNumber || profile.whatsAppNumber || '+234 907 678 6830';
    navigator.clipboard.writeText(num);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const handleCopyWhatsApp = () => {
    const num = profile.whatsAppNumber || '+234 907 678 6830';
    navigator.clipboard.writeText(num);
    setCopiedWhatsApp(true);
    setTimeout(() => setCopiedWhatsApp(false), 2000);
  };

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please enter your full name.';
    if (!formData.email.trim()) {
      errs.email = 'Please provide your email address.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errs.email = 'Please enter a valid email format.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 15) {
      errs.message = 'Please share a brief message (at least 15 characters).';
    }
    return errs;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setFormSubmitted(true);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(
      formData.subject || `Inquiry for Virtual Assistant Support: ${formData.service}`
    );
    const body = encodeURIComponent(
      `Hi Abdul,\n\nMy name is ${formData.name}.\nEmail: ${formData.email}\nService Requested: ${formData.service}\n\nProject / Task Details:\n${formData.message}\n\nLooking forward to speaking with you!`
    );
    return `mailto:${profile.email}?subject=${subject}&body=${body}`;
  };

  const handleCopyInquiryText = () => {
    const text = `INQUIRY FOR ABDUL SALAM ROKIBAT (VIRTUAL ASSISTANT)
From: ${formData.name} (${formData.email})
Service: ${formData.service}
Subject: ${formData.subject || 'Virtual Assistant Support Request'}
Message:
${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedSummary(true);
    setTimeout(() => setCopiedSummary(false), 2000);
  };

  const activePhone = profile.phoneNumber || profile.whatsAppNumber || '+234 907 678 6830';
  const cleanPhoneDigits = activePhone.replace(/[^0-9]/g, '');

  return (
    <section id="contact" className="py-16 sm:py-24 bg-[#FFFDF7]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FAF6EE] border border-[#C8A96A]/40 text-[#6F4E37] text-xs font-semibold uppercase tracking-wider">
            Let’s Connect
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#38271F]">
            Let’s Make Work Easier
          </h2>
          <p className="text-sm sm:text-base text-[#38271F]/80 leading-relaxed font-sans">
            Ready to reclaim your time, organize your tasks, or explore a practice collaboration? Send a message below or connect directly via WhatsApp or phone.
          </p>
        </div>

        {/* 2-Column Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#FAF6EE] rounded-2xl p-6 sm:p-8 border border-[#C8A96A]/35 space-y-6">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#38271F] mb-1">
                  Contact Information
                </h3>
                <p className="text-xs sm:text-sm text-[#38271F]/75 leading-relaxed">
                  Connect with Abdul Salam Rokibat directly for consultations, practice projects, or administrative support inquiries.
                </p>
              </div>

              {/* Email Card */}
              <div className="p-4 rounded-xl bg-white border border-[#C8A96A]/30 flex items-start justify-between gap-3 shadow-2xs">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#6F4E37] mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6F4E37] block">
                      Email Address
                    </span>
                    <a
                      href={`mailto:${profile.email}`}
                      className="text-xs sm:text-sm font-medium text-[#38271F] hover:text-[#6F4E37] transition-colors break-all"
                    >
                      {profile.email}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 text-[#38271F]/60 hover:text-[#6F4E37] rounded-md transition-colors shrink-0"
                  title="Copy email address"
                  aria-label="Copy email"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* WhatsApp Card */}
              <div className="p-4 rounded-xl bg-white border border-emerald-200/80 hover:border-emerald-300 transition-colors flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-emerald-50 text-emerald-700">
                    <MessageCircle className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-emerald-800 block">
                      WhatsApp Instant Chat
                    </span>
                    <a
                      href={`https://wa.me/${cleanPhoneDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm font-mono font-medium text-[#38271F] hover:text-emerald-700 transition-colors"
                    >
                      {activePhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={handleCopyWhatsApp}
                    className="p-1.5 text-[#38271F]/60 hover:text-emerald-700 rounded-md transition-colors"
                    title="Copy WhatsApp Number"
                    aria-label="Copy WhatsApp number"
                  >
                    {copiedWhatsApp ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <a
                    href={`https://wa.me/${cleanPhoneDigits}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-800 bg-emerald-100/70 hover:bg-emerald-100 px-2.5 py-1 rounded transition-colors"
                  >
                    <span>Chat</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Direct Phone / Call Card */}
              <div className="p-4 rounded-xl bg-white border border-[#C8A96A]/30 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#6F4E37]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6F4E37] block">
                      Phone / Direct Line
                    </span>
                    <a
                      href={`tel:${cleanPhoneDigits.startsWith('+') ? cleanPhoneDigits : `+${cleanPhoneDigits}`}`}
                      className="text-xs sm:text-sm font-mono font-medium text-[#38271F] hover:text-[#6F4E37] transition-colors"
                    >
                      {activePhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-1 shrink-0">
                  <button
                    onClick={handleCopyPhone}
                    className="p-1.5 text-[#38271F]/60 hover:text-[#6F4E37] rounded-md transition-colors"
                    title="Copy phone number"
                    aria-label="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
                  </button>

                  <a
                    href={`tel:${cleanPhoneDigits.startsWith('+') ? cleanPhoneDigits : `+${cleanPhoneDigits}`}`}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-[#6F4E37] bg-[#FAF6EE] hover:bg-[#FFF1C1]/60 px-2.5 py-1 rounded border border-[#C8A96A]/30 transition-colors"
                  >
                    <span>Call</span>
                  </a>
                </div>
              </div>

              {/* LinkedIn Card */}
              <div className="p-4 rounded-xl bg-white border border-[#C8A96A]/30 flex items-center justify-between gap-3 shadow-2xs">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-[#FAF6EE] text-[#6F4E37]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-wider text-[#6F4E37] block">
                      LinkedIn Profile
                    </span>
                    <span className="text-xs text-[#38271F]/70">
                      Connect professionally on LinkedIn
                    </span>
                  </div>
                </div>

                <a
                  href={profile.linkedInUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-semibold text-[#6F4E37] hover:text-[#38271F] px-2.5 py-1 rounded bg-[#FAF6EE] border border-[#C8A96A]/30 transition-colors"
                >
                  <span>Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Availability & Response Times */}
              <div className="space-y-2 pt-2 text-xs text-[#38271F]/80">
                <div className="flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-[#C8A96A]" />
                  <span>Typical Response Time: Within 24 hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 text-[#C8A96A]" />
                  <span>Availability: Remote support across international time zones</span>
                </div>
              </div>
            </div>

            {/* Customizer prompt */}
            <div className="p-4 rounded-xl bg-[#FFF1C1]/40 border border-[#C8A96A]/40 text-xs text-[#6F4E37] flex items-center justify-between">
              <span>Are you Abdul? Update these contact links anytime:</span>
              <button
                onClick={onOpenPersonalize}
                className="font-semibold underline ml-2 whitespace-nowrap"
              >
                Personalise Info
              </button>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <div className="bg-[#FFFDF7] rounded-2xl p-6 sm:p-8 border border-[#C8A96A]/35 shadow-sm">
              {formSubmitted ? (
                /* Success & Direct Email Options Modal/View */
                <div className="text-center py-6 space-y-5 animate-in fade-in duration-200">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-2xl font-serif font-bold text-[#38271F]">
                      Inquiry Prepared for Abdul
                    </h3>
                    <p className="text-xs sm:text-sm text-[#38271F]/80 max-w-md mx-auto leading-relaxed">
                      Thank you, <span className="font-semibold text-[#6F4E37]">{formData.name}</span>! Since this is a client-side portfolio showcase, you can now send this inquiry directly to Abdul’s inbox using your default email client or copy the formatted text.
                    </p>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-xl bg-[#FAF6EE] border border-[#C8A96A]/30 text-left text-xs space-y-1.5 max-w-md mx-auto font-mono text-[#38271F]">
                    <div><span className="text-[#6F4E37] font-semibold">Service:</span> {formData.service}</div>
                    <div><span className="text-[#6F4E37] font-semibold">Sender:</span> {formData.name} ({formData.email})</div>
                    <div className="line-clamp-2"><span className="text-[#6F4E37] font-semibold">Message:</span> {formData.message}</div>
                  </div>

                  <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
                    <a
                      href={getMailtoLink()}
                      className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-white bg-[#6F4E37] hover:bg-[#38271F] rounded-xl transition-colors shadow-xs"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Open in Email Client</span>
                    </a>

                    <button
                      onClick={handleCopyInquiryText}
                      className="inline-flex items-center gap-1.5 px-4 py-2.5 text-xs font-semibold text-[#38271F] bg-white border border-[#C8A96A]/40 rounded-xl hover:bg-[#FAF6EE] transition-colors"
                    >
                      {copiedSummary ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                      <span>{copiedSummary ? 'Copied to Clipboard' : 'Copy Formatted Inquiry'}</span>
                    </button>
                  </div>

                  <div className="pt-4 border-t border-[#38271F]/10">
                    <button
                      onClick={() => setFormSubmitted(false)}
                      className="text-xs text-[#6F4E37] hover:underline"
                    >
                      Edit or send another inquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#38271F] mb-1">
                        Your Full Name <span className="text-[#6F4E37]">*</span>
                      </label>
                      <input
                        type="text"
                        value={formData.name}
                        onChange={e => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Sarah Mitchell"
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF6EE]/50 border ${
                          errors.name ? 'border-rose-400' : 'border-[#C8A96A]/40'
                        } focus:outline-none focus:ring-1 focus:ring-[#6F4E37] transition-colors`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.name}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#38271F] mb-1">
                        Your Email Address <span className="text-[#6F4E37]">*</span>
                      </label>
                      <input
                        type="email"
                        value={formData.email}
                        onChange={e => setFormData({ ...formData, email: e.target.value })}
                        placeholder="sarah@company.com"
                        className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF6EE]/50 border ${
                          errors.email ? 'border-rose-400' : 'border-[#C8A96A]/40'
                        } focus:outline-none focus:ring-1 focus:ring-[#6F4E37] transition-colors`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-600 mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-[#38271F] mb-1">
                        Support Needed / Service Area
                      </label>
                      <select
                        value={formData.service}
                        onChange={e => setFormData({ ...formData, service: e.target.value })}
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF6EE]/50 border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                      >
                        {servicesOptions.map(opt => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-[#38271F] mb-1">
                        Subject Line (Optional)
                      </label>
                      <input
                        type="text"
                        value={formData.subject}
                        onChange={e => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="e.g. Schedule coordination inquiry"
                        className="w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF6EE]/50 border border-[#C8A96A]/40 focus:outline-none focus:ring-1 focus:ring-[#6F4E37]"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-[#38271F] mb-1">
                      Project Details or Tasks to Support <span className="text-[#6F4E37]">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Please share a brief description of what you need help with (e.g., managing weekly calendar, sorting Google Drive files, routine inbox support)..."
                      className={`w-full text-xs sm:text-sm px-3.5 py-2.5 rounded-lg bg-[#FAF6EE]/50 border ${
                        errors.message ? 'border-rose-400' : 'border-[#C8A96A]/40'
                      } focus:outline-none focus:ring-1 focus:ring-[#6F4E37] transition-colors`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-600 mt-1">{errors.message}</p>
                    )}
                  </div>

                  {/* Honest Disclosure notice */}
                  <div className="flex items-start gap-2 p-3 rounded-lg bg-[#FAF6EE] text-[11px] text-[#38271F]/70 border border-[#C8A96A]/20">
                    <Info className="w-3.5 h-3.5 text-[#C8A96A] shrink-0 mt-0.5" />
                    <span>
                      Portfolio Integration Note: Submitting prepares your message and enables 1-click dispatch to Abdul’s professional email.
                    </span>
                  </div>

                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-xs sm:text-sm font-semibold text-white bg-[#6F4E37] hover:bg-[#38271F] rounded-xl transition-all duration-200 shadow-xs hover:shadow-md"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
