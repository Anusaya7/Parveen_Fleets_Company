'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import HeroSection from './HeroSection';
import StatsSection from './StatsSection';
import ClientsMarquee from './ClientsMarquee';
import AboutSection from './AboutSection';
import ServicesSection from './ServicesSection';
import WhyChooseUsSection from './WhyChooseUsSection';
import TechPlatformSection from './TechPlatformSection';
import SafetyModuleSection from './SafetyModuleSection';
import FleetShowcaseSection from './FleetShowcaseSection';
import OurPresenceSection from './OurPresenceSection';
import AwardsSection from './AwardsSection';
import TestimonialsSection from './TestimonialsSection';
import BlogSection from './BlogSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import AIChatbot from './AIChatbot';
import BookingModal from './BookingModal';
import BlogModal from './BlogModal';
import { INITIAL_LEADS } from '../data/mockData';
import { loadLocalLeads, persistLocalLeads, saveLead } from '../data/leadStore';
import useScrollReveal from '../hooks/useScrollReveal';

export default function WebsiteHome() {
  const router = useRouter();
  const [leadsList, setLeadsList] = useState(() => loadLocalLeads() || INITIAL_LEADS);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);
  useScrollReveal(true);

  useEffect(() => {
    persistLocalLeads(leadsList);
  }, [leadsList]);

  useEffect(() => {
    try {
      window.history.scrollRestoration = 'manual';
    } catch {
      /* ignore */
    }
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, []);

  const handleNewLeadAdded = async (newLead) => {
    const saved = await saveLead(newLead);
    setLeadsList((prev) => [saved.lead, ...prev]);
    return saved;
  };

  const handleOpenQuote = (data = null) => {
    setQuoteModalData(data);
    setIsQuoteModalOpen(true);
  };

  const handleSelectService = (service) => {
    handleOpenQuote({
      service: service.title,
      notes: `Interested in corporate service: ${service.title} (${service.tagline})`
    });
  };

  const handleBookVehicle = (vehicle) => {
    handleOpenQuote({
      service: vehicle.category,
      name: vehicle.name,
      notes: `Booking inquiry for ${vehicle.name} (${vehicle.capacity}, ${vehicle.rateEstimate})`
    });
  };

  return (
    <div className="bg-obsidian mesh-grid" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      <Navbar onOpenQuote={() => handleOpenQuote()} />

      <main style={{ flex: 1 }}>
        <HeroSection
          onOpenQuote={handleOpenQuote}
          onBookFleet={() => {
            const fleetElem = document.getElementById('fleet');
            if (fleetElem) fleetElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />
        <StatsSection />
        <ClientsMarquee />
        <AboutSection onOpenQuote={handleOpenQuote} />
        <ServicesSection onSelectService={handleSelectService} />
        <WhyChooseUsSection onOpenQuote={handleOpenQuote} />
        <TechPlatformSection />
        <SafetyModuleSection onOpenQuote={handleOpenQuote} />
        <FleetShowcaseSection onBookVehicle={handleBookVehicle} />
        <OurPresenceSection onOpenQuote={handleOpenQuote} />
        <AwardsSection onOpenQuote={handleOpenQuote} />
        <TestimonialsSection />
        <BlogSection onReadBlog={(blog) => setActiveBlog(blog)} />
        <ContactSection onNewLeadAdded={handleNewLeadAdded} />
      </main>

      <Footer onOpenAdmin={() => router.push('/admin')} />

      <FloatingActions
        onToggleChatbot={() => setIsChatOpen(!isChatOpen)}
        isChatOpen={isChatOpen}
      />

      <AIChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenQuote={handleOpenQuote}
      />

      <BookingModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={quoteModalData}
        onNewLeadAdded={handleNewLeadAdded}
      />

      <BlogModal
        blog={activeBlog}
        onClose={() => setActiveBlog(null)}
      />
    </div>
  );
}
