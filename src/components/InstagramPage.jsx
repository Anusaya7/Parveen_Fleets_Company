'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingActions from './FloatingActions';
import AIChatbot from './AIChatbot';
import BookingModal from './BookingModal';
import InstagramReelsSection from './InstagramReelsSection';
import { INITIAL_LEADS } from '../data/mockData';
import { loadLocalLeads, persistLocalLeads, saveLead } from '../data/leadStore';

export default function InstagramPage() {
  const router = useRouter();
  const [leadsList, setLeadsList] = useState(() => loadLocalLeads() || INITIAL_LEADS);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    persistLocalLeads(leadsList);
  }, [leadsList]);

  const handleNewLeadAdded = async (newLead) => {
    const saved = await saveLead(newLead);
    setLeadsList((prev) => [saved.lead, ...prev]);
    return saved;
  };

  return (
    <div className="bg-obsidian mesh-grid" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <main style={{ flex: 1 }}>
        <InstagramReelsSection variant="page" />
      </main>
      <Footer onOpenAdmin={() => router.push('/admin')} />
      <FloatingActions onToggleChatbot={() => setIsChatOpen(!isChatOpen)} isChatOpen={isChatOpen} />
      <AIChatbot isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} onOpenQuote={() => setIsQuoteModalOpen(true)} />
      <BookingModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialData={null}
        onNewLeadAdded={handleNewLeadAdded}
      />
    </div>
  );
}
