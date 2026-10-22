import React, { useState, useRef, useEffect } from 'react';
import { Bot, X, Send, Sparkles } from 'lucide-react';
import { AI_KNOWLEDGE_BASE } from '../data/mockData';

export default function AIChatbot({ isOpen, onClose, onOpenQuote }) {
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hello! I am Parveen AI Assistant. How can I assist you today with corporate transportation, fleet rentals, pricing, or branch operations?",
      time: 'Just now'
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef(null);
  const nextMessageId = useRef(2);
  const replyTimer = useRef(null);

  useEffect(() => () => window.clearTimeout(replyTimer.current), []);

  const quickReplies = [
    "Employee Transportation",
    "Fleet & Pricing",
    "Pune HQ & Branches",
    "Safety & Women Escort",
    "Book a Fleet"
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const handleSendMessage = (textToSend) => {
    const query = textToSend || inputValue;
    if (!query.trim()) return;

    if (/\b(book|booking|quote)\b/i.test(query)) {
      onClose();
      onOpenQuote({ service: 'Corporate Transportation' });
      return;
    }

    const userMsg = {
      id: nextMessageId.current++,
      sender: 'user',
      text: query,
      time: 'Now'
    };

    setMessages((prev) => [...prev, userMsg]);
    if (!textToSend) setInputValue('');
    setIsTyping(true);

    // AI Knowledge Retrieval Logic
    replyTimer.current = window.setTimeout(() => {
      const lowerQuery = query.toLowerCase();
      let matchedAnswer = null;

      for (const item of AI_KNOWLEDGE_BASE) {
        if (item.keywords.some((k) => lowerQuery.includes(k))) {
          matchedAnswer = item.answer;
          break;
        }
      }

      if (!matchedAnswer) {
        if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
          matchedAnswer = "Greetings from Parveen Fleets Pvt Ltd! We provide enterprise employee transportation, corporate cab rentals, and luxury coaches across 112+ locations. What transport requirement can I help you configure?";
        } else {
          matchedAnswer = `I would love to help you with that! At Parveen Fleets Pvt Ltd, we deliver tailored enterprise transport solutions across 112+ Indian cities. Would you like me to connect you with our senior fleet manager at +91 95458 99838, or shall I open the Instant Quote portal for you?`;
        }
      }

      const botMsg = {
        id: nextMessageId.current++,
        sender: 'bot',
        text: matchedAnswer,
        time: 'Just now'
      };

      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 600);
  };

  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: '5.5rem',
      right: '2rem',
      width: 'clamp(320px, 92vw, 420px)',
      height: 'clamp(480px, 75vh, 620px)',
      background: 'rgba(13, 38, 67, 0.97)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      border: '1.5px solid rgba(255, 215, 0, 0.4)',
      borderRadius: '20px',
      boxShadow: '0 25px 60px rgba(0, 0, 0, 0.8), 0 0 30px rgba(255, 215, 0, 0.25)',
      zIndex: 1000,
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      
      {/* Chat Header */}
      <div style={{
        background: 'linear-gradient(90deg, #081B3A 0%, #113D89 100%)',
        padding: '1rem 1.25rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottom: '1px solid rgba(255, 215, 0, 0.2)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
          <div style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
            color: '#050A12',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 0 15px rgba(255, 215, 0, 0.5)'
          }}>
            <Bot size={22} />
          </div>
          <div>
            <div style={{ fontWeight: 800, color: '#FFFFFF', fontSize: '0.95rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
              Parveen AI Assistant
              <Sparkles size={12} color="#FFD700" />
            </div>
            <div style={{ fontSize: '0.72rem', color: '#34D399', display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              Company information • Preview assistant
            </div>
          </div>
        </div>

        <button
          onClick={onClose}
          style={{
            background: 'rgba(255, 255, 255, 0.08)',
            border: 'none',
            color: '#FFFFFF',
            width: '30px',
            height: '30px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Close Chat"
        >
          <X size={16} />
        </button>
      </div>

      {/* Messages Scroll Area */}
      <div aria-live="polite" style={{
        flex: 1,
        overflowY: 'auto',
        padding: '1.25rem',
        display: 'flex',
        flexDirection: 'column',
        gap: '1rem'
      }}>
        {messages.map((msg) => (
          <div
            key={msg.id}
            style={{
              display: 'flex',
              gap: '0.65rem',
              alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
              maxWidth: '85%'
            }}
          >
            {msg.sender === 'bot' && (
              <div style={{
                width: '28px',
                height: '28px',
                borderRadius: '8px',
                background: 'rgba(255, 215, 0, 0.2)',
                color: '#FFD700',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}>
                <Bot size={15} />
              </div>
            )}

            <div>
              <div style={{
                background: msg.sender === 'user'
                  ? 'linear-gradient(135deg, #113D89 0%, #081B3A 100%)'
                  : 'rgba(255, 255, 255, 0.06)',
                border: msg.sender === 'user'
                  ? '1px solid rgba(255, 215, 0, 0.4)'
                  : '1px solid rgba(255, 255, 255, 0.08)',
                color: '#FFFFFF',
                padding: '0.85rem 1rem',
                borderRadius: '14px',
                fontSize: '0.88rem',
                lineHeight: 1.5,
                whiteSpace: 'pre-wrap'
              }}>
                {msg.text}
              </div>
              <div style={{
                fontSize: '0.65rem',
                color: '#64748B',
                marginTop: '0.25rem',
                textAlign: msg.sender === 'user' ? 'right' : 'left'
              }}>
                {msg.time}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#94A3B8', fontSize: '0.8rem' }}>
            <Bot size={14} color="#FFD700" />
            <span>Parveen AI is typing...</span>
          </div>
        )}

        <div ref={messagesEndRef} />
      </div>

      {/* Quick Reply Pills */}
      <div style={{
        padding: '0.5rem 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.05)',
        display: 'flex',
        gap: '0.4rem',
        overflowX: 'auto',
        whiteSpace: 'nowrap'
      }}>
        {quickReplies.map((reply, i) => (
          <button
            key={i}
            onClick={() => handleSendMessage(reply)}
            disabled={isTyping}
            style={{
              background: 'rgba(255, 215, 0, 0.1)',
              border: '1px solid rgba(255, 215, 0, 0.25)',
              color: '#FFD700',
              padding: '0.35rem 0.75rem',
              borderRadius: '9999px',
              fontSize: '0.72rem',
              fontWeight: 600,
              cursor: isTyping ? 'not-allowed' : 'pointer',
              opacity: isTyping ? 0.6 : 1,
              flexShrink: 0
            }}
          >
            {reply}
          </button>
        ))}
      </div>

      {/* Input Box */}
      <div style={{
        padding: '0.85rem 1rem',
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'rgba(11, 30, 54, 0.98)',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem'
      }}>
        <input
          type="text"
          placeholder="Ask anything about fleet, pricing, branches..."
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
          disabled={isTyping}
          style={{
            flex: 1,
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.12)',
            borderRadius: '10px',
            padding: '0.65rem 0.9rem',
            color: '#FFFFFF',
            fontSize: '0.85rem'
          }}
        />

        <button
          onClick={() => handleSendMessage()}
          disabled={isTyping || !inputValue.trim()}
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #FFD700, #FFA500)',
            border: 'none',
            color: '#050A12',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
          aria-label="Send"
        >
          <Send size={16} />
        </button>
      </div>

    </div>
  );
}
