import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Services } from './components/Services';
import { Skills } from './components/Skills';
import { Portfolio } from './components/Portfolio';
import { WhyWorkWithMe } from './components/WhyWorkWithMe';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { PersonalizeModal } from './components/PersonalizeModal';
import { DEFAULT_PROFILE, SERVICES_LIST } from './data/portfolioData';
import { ProfileData, ServiceItem } from './types/portfolio';
import { SlidersHorizontal } from 'lucide-react';

export default function App() {
  const [profile, setProfile] = useState<ProfileData>(() => {
    try {
      const saved = localStorage.getItem('asr_portfolio_profile');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (!parsed.whatsAppNumber || parsed.whatsAppNumber === '') {
          return {
            ...DEFAULT_PROFILE,
            ...parsed,
            whatsAppNumber: DEFAULT_PROFILE.whatsAppNumber,
            phoneNumber: DEFAULT_PROFILE.phoneNumber,
            isWhatsAppActive: true,
          };
        }
        return { ...DEFAULT_PROFILE, ...parsed };
      }
    } catch (e) {
      console.warn('Could not read saved profile from localStorage', e);
    }
    return DEFAULT_PROFILE;
  });

  const [services, setServices] = useState<ServiceItem[]>(() => {
    try {
      const saved = localStorage.getItem('asr_portfolio_services');
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.warn('Could not read saved services from localStorage', e);
    }
    return SERVICES_LIST;
  });

  const [isPersonalizeOpen, setIsPersonalizeOpen] = useState(false);
  const [preselectedService, setPreselectedService] = useState<string>('Administrative Support');

  const handleSaveProfile = (updatedProfile: ProfileData, updatedServices: ServiceItem[]) => {
    setProfile(updatedProfile);
    setServices(updatedServices);
    try {
      localStorage.setItem('asr_portfolio_profile', JSON.stringify(updatedProfile));
      localStorage.setItem('asr_portfolio_services', JSON.stringify(updatedServices));
    } catch (e) {
      console.warn('Could not persist profile changes', e);
    }
  };

  const handleResetDefaults = () => {
    setProfile(DEFAULT_PROFILE);
    setServices(SERVICES_LIST);
    try {
      localStorage.removeItem('asr_portfolio_profile');
      localStorage.removeItem('asr_portfolio_services');
    } catch (e) {
      console.warn('Could not reset localStorage', e);
    }
    setIsPersonalizeOpen(false);
  };

  const handleSelectServiceForInquiry = (serviceTitle: string) => {
    setPreselectedService(serviceTitle);
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF7] text-[#38271F] font-sans antialiased selection:bg-[#FFF1C1] selection:text-[#38271F]">
      {/* Navigation Bar */}
      <Navbar onOpenPersonalize={() => setIsPersonalizeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero profile={profile} />

        {/* About Me Section */}
        <About
          profile={profile}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />

        {/* Services Section */}
        <Services
          services={services}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
          onSelectForInquiry={handleSelectServiceForInquiry}
        />

        {/* Skills Section */}
        <Skills />

        {/* Portfolio / Sample Projects Section */}
        <Portfolio />

        {/* Why Work With Me Section */}
        <WhyWorkWithMe />

        {/* Contact Section */}
        <Contact
          profile={profile}
          preselectedService={preselectedService}
          onOpenPersonalize={() => setIsPersonalizeOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer profile={profile} />

      {/* Floating Quick Customizer Button */}
      <div className="fixed bottom-5 right-5 z-30">
        <button
          onClick={() => setIsPersonalizeOpen(true)}
          className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-[#FAF6EE] text-[#6F4E37] hover:text-[#38271F] border border-[#C8A96A]/60 shadow-md hover:shadow-lg hover:bg-white transition-all text-xs font-semibold"
          title="Personalise Abdul's portfolio details"
        >
          <SlidersHorizontal className="w-4 h-4 text-[#C8A96A]" />
          <span className="hidden sm:inline">Personalise Portfolio</span>
        </button>
      </div>

      {/* Personalization Modal */}
      <PersonalizeModal
        isOpen={isPersonalizeOpen}
        onClose={() => setIsPersonalizeOpen(false)}
        profile={profile}
        services={services}
        onSaveProfile={handleSaveProfile}
        onResetDefaults={handleResetDefaults}
      />
    </div>
  );
}
