import React from 'react';
import { MessageCircle, Phone, Bot } from 'lucide-react';
import { COMPANY_INFO } from '../data/mockData';

export default function FloatingActions({ onToggleChatbot, isChatOpen }) {
  return (
    <aside className="floating-actions" aria-label="Quick contact and support options">
      
      {/* WhatsApp Button */}
      <a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fab-btn fab-whatsapp"
        aria-label="Chat on WhatsApp with Parveen Fleets"
      >
        <MessageCircle size={26} />
        <span className="fab-tooltip">Chat on WhatsApp</span>
      </a>

      {/* Direct Phone Call Button */}
      <a
        href="tel:+919545899838"
        className="fab-btn fab-phone"
        aria-label="Call 24x7 Corporate Helpline"
      >
        <Phone size={22} color="#FFD700" />
        <span className="fab-tooltip">24x7 Helpline: +91 95458 99838</span>
      </a>

      {/* AI Assistant Chatbot Button */}
      <button
        onClick={onToggleChatbot}
        className="fab-btn fab-bot animate-pulse-glow"
        aria-label="Toggle Parveen AI Assistant"
      >
        <Bot size={26} />
        <span className="fab-tooltip">
          {isChatOpen ? 'Close Parveen AI' : 'Ask Parveen AI Assistant'}
        </span>
      </button>

    </aside>
  );
}
