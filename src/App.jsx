import React, { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ClientsMarquee from './components/ClientsMarquee';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import TechPlatformSection from './components/TechPlatformSection';
import SafetyModuleSection from './components/SafetyModuleSection';
import FleetShowcaseSection from './components/FleetShowcaseSection';
import OurPresenceSection from './components/OurPresenceSection';
import AwardsSection from './components/AwardsSection';
import TestimonialsSection from './components/TestimonialsSection';
import BlogSection from './components/BlogSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FloatingActions from './components/FloatingActions';
import AIChatbot from './components/AIChatbot';
import BookingModal from './components/BookingModal';
import BlogModal from './components/BlogModal';
import AdminPortal from './components/AdminPortal';
import { INITIAL_LEADS } from './data/mockData';
import { isLocalLeadMode, loadLocalLeads, persistLocalLeads, saveLead } from './data/leadStore';
import useScrollReveal from './hooks/useScrollReveal';

export default function App() {
  const [currentView, setCurrentView] = useState('website'); // 'website' | 'admin'
  const [leadsList, setLeadsList] = useState(() => loadLocalLeads() || INITIAL_LEADS);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteModalData, setQuoteModalData] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeBlog, setActiveBlog] = useState(null);
  useScrollReveal(currentView === 'website');

  useEffect(() => {
    if (isLocalLeadMode) persistLocalLeads(leadsList);
  }, [leadsList]);

  useEffect(() => {
    if (currentView !== 'website') return undefined;
    try {
      window.history.scrollRestoration = 'manual';
    } catch {
      /* ignore */
    }
    if (!window.location.hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
    return undefined;
  }, [currentView]);

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

  // If viewing Enterprise Admin Portal
  if (currentView === 'admin') {
    return (
      <AdminPortal
        onBackToWebsite={() => setCurrentView('website')}
        leadsList={leadsList}
        setLeadsList={setLeadsList}
      />
    );
  }

  // Public Enterprise Website
  return (
    <div className="bg-obsidian mesh-grid" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', position: 'relative' }}>
      
      {/* 1. Master Navbar */}
      <Navbar
        onOpenQuote={() => handleOpenQuote()}
      />

      {/* Main Content Area */}
      <main style={{ flex: 1 }}>
        
        {/* 2. Hero Section */}
        <HeroSection
          onOpenQuote={handleOpenQuote}
          onBookFleet={() => {
            const fleetElem = document.getElementById('fleet');
            if (fleetElem) fleetElem.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        <StatsSection />

        {/* 3. Infinite Corporate Client Logo Marquee */}
        <ClientsMarquee />

        {/* 4. About Us & Growth Story Timeline */}
        <AboutSection onOpenQuote={handleOpenQuote} />

        {/* 5. 8 Interactive Services */}
        <ServicesSection onSelectService={handleSelectService} />

        {/* 6. Why Choose Us & Enterprise Comparison Matrix */}
        <WhyChooseUsSection onOpenQuote={handleOpenQuote} />

        {/* 7. Advanced Tech Platform & Live Dashboard Telematics */}
        <TechPlatformSection />

        {/* 8. Dedicated Employee Safety Module & SOS Simulator */}
        <SafetyModuleSection onOpenQuote={handleOpenQuote} />

        {/* 9. Fleet Showcase with Filters & Specs */}
        <FleetShowcaseSection onBookVehicle={handleBookVehicle} />

        {/* 10. Our Presence (112+ Locations & Interactive State Directory) */}
        <OurPresenceSection onOpenQuote={handleOpenQuote} />

        {/* 11. National Awards (Best Corporate Car Rental 2024) */}
        <AwardsSection onOpenQuote={handleOpenQuote} />

        {/* 12. Animated Enterprise Testimonials */}
        <TestimonialsSection />

        {/* 13. Modern Blog System (5 Categories) */}
        <BlogSection onReadBlog={(blog) => setActiveBlog(blog)} />

        {/* 14. Contact Form & Instant Corporate Quote */}
        <ContactSection onNewLeadAdded={handleNewLeadAdded} />

      </main>

      {/* 15. Master Corporate Footer */}
      <Footer
        onOpenAdmin={() => setCurrentView('admin')}
      />

      {/* Floating Action Buttons: WhatsApp, Phone, Email, AI Assistant */}
      <FloatingActions
        onToggleChatbot={() => setIsChatOpen(!isChatOpen)}
        isChatOpen={isChatOpen}
      />

      {/* Parveen AI Assistant GPT-Style Chatbot */}
      <AIChatbot
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onOpenQuote={handleOpenQuote}
      />

      {/* Instant Booking / Quote Modal */}
      <BookingModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={quoteModalData}
        onNewLeadAdded={handleNewLeadAdded}
      />

      {/* Blog Article Reader Modal */}
      <BlogModal
        blog={activeBlog}
        onClose={() => setActiveBlog(null)}
      />

    </div>
  );
}
