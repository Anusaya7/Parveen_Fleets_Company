import React, { useState } from 'react';
import {
  LayoutDashboard, Users, Calendar, Car, Building2, FileText, Search,
  Download, Plus, Trash2, Edit3, CheckCircle2, AlertCircle, Eye,
  LogOut, Shield, ArrowLeft, TrendingUp, DollarSign, Clock, Filter,
  Phone, Mail, MapPin, Globe, Check, X, ShieldAlert, Sparkles
} from 'lucide-react';
import { INITIAL_LEADS, INITIAL_BOOKINGS, FLEET_SHOWCASE, SERVICES_DATA } from '../data/mockData';

export default function AdminPortal({ onBackToWebsite, leadsList, setLeadsList }) {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loginMessage, setLoginMessage] = useState('');
  const [currentRole, setCurrentRole] = useState('Admin'); // Admin, Manager, Operations, Sales, Support
  const [activeSection, setActiveSection] = useState('dashboard'); // dashboard, leads, bookings, fleet, clients, cms, seo

  // Filter & Search states
  const [leadSearch, setLeadSearch] = useState('');
  const [leadStatusFilter, setLeadStatusFilter] = useState('All');
  const [selectedLead, setSelectedLead] = useState(null);
  const [isEditingLead, setIsEditingLead] = useState(false);

  // Bookings state
  const [bookingsList, setBookingsList] = useState(INITIAL_BOOKINGS);
  const [bookingFilter, setBookingFilter] = useState('All');

  // Vehicles state
  const [vehiclesList, setVehiclesList] = useState(FLEET_SHOWCASE);
  const [showAddVehicleModal, setShowAddVehicleModal] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    name: '',
    category: 'Executive Sedans',
    capacity: '4 Passengers',
    fuel: 'Petrol / Hybrid',
    rateEstimate: '₹2,000 / 8 Hrs',
    badge: 'Available'
  });

  // Clients state
  const [clientsList, setClientsList] = useState([
    { id: 1, name: 'Infosys Technologies', city: 'Pune & Hyderabad', fleetSize: '65 Cabs', contract: '₹18.5 L / mo', status: 'Active' },
    { id: 2, name: 'Tata Motors', city: 'Pune & Mumbai', fleetSize: '45 Cabs', contract: '₹14.2 L / mo', status: 'Active' },
    { id: 3, name: 'Wipro Enterprises', city: 'Delhi NCR', fleetSize: '30 Cabs', contract: '₹9.8 L / mo', status: 'Active' },
    { id: 4, name: 'Cognizant Solutions', city: 'Hyderabad', fleetSize: '50 Cabs', contract: '₹15.0 L / mo', status: 'Active' }
  ]);

  // SEO state
  const [seoConfig, setSeoConfig] = useState({
    metaTitle: "Parveen Fleets Pvt Ltd | India's Most Trusted Corporate Transportation Partner",
    metaDesc: "Technology-driven employee transportation, cab rentals, bus rentals, airport transfers across India.",
    keywords: "corporate transportation, employee transport, cab rentals Pune, bus rental India, Parveen Fleets",
    canonicalUrl: "https://www.parveenfleets.in",
    robots: "index, follow"
  });
  const [seoSaved, setSeoSaved] = useState(false);

  // Export Leads to Excel (CSV format)
  const exportLeadsToExcel = () => {
    const headers = ['ID', 'Name', 'Company', 'Phone', 'Email', 'Service', 'City', 'Status', 'Date', 'Message'];
    const rows = leadsList.map(lead => [
      lead.id,
      `"${lead.name}"`,
      `"${lead.company}"`,
      `"${lead.phone}"`,
      `"${lead.email}"`,
      `"${lead.service}"`,
      `"${lead.city}"`,
      `"${lead.status}"`,
      `"${lead.date}"`,
      `"${(lead.message || '').replace(/"/g, '""')}"`
    ]);

    const csvContent = 'data:text/csv;charset=utf-8,' + [headers.join(','), ...rows.map(e => e.join(','))].join('\n');
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement('a');
    link.setAttribute('href', encodedUri);
    link.setAttribute('download', `Parveen_Fleets_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Delete Lead
  const handleDeleteLead = (id) => {
    if (window.confirm('Are you sure you want to delete this lead?')) {
      setLeadsList(leadsList.filter(l => l.id !== id));
      if (selectedLead?.id === id) setSelectedLead(null);
    }
  };

  // Update Lead Status
  const handleUpdateLeadStatus = (id, newStatus) => {
    setLeadsList(leadsList.map(l => l.id === id ? { ...l, status: newStatus } : l));
    if (selectedLead?.id === id) {
      setSelectedLead({ ...selectedLead, status: newStatus });
    }
  };

  // Update Booking Status
  const handleUpdateBookingStatus = (id, newStatus) => {
    setBookingsList(bookingsList.map(b => b.id === id ? { ...b, status: newStatus } : b));
  };

  // Delete Vehicle
  const handleDeleteVehicle = (id) => {
    if (window.confirm('Delete this vehicle from active fleet catalog?')) {
      setVehiclesList(vehiclesList.filter(v => v.id !== id));
    }
  };

  // Add Vehicle
  const handleAddVehicle = (e) => {
    e.preventDefault();
    const newEntry = {
      id: `v-${Date.now()}`,
      name: newVehicle.name,
      category: newVehicle.category,
      capacity: newVehicle.capacity,
      luggage: '3 Bags',
      fuel: newVehicle.fuel,
      features: ['Dual GPS', 'Air Conditioning', 'Chauffeur Driven', 'Verified'],
      rateEstimate: newVehicle.rateEstimate,
      image: '/images/fleet_luxury_suv.jpg',
      badge: newVehicle.badge
    };
    setVehiclesList([...vehiclesList, newEntry]);
    setShowAddVehicleModal(false);
    setNewVehicle({
      name: '',
      category: 'Executive Sedans',
      capacity: '4 Passengers',
      fuel: 'Petrol / Hybrid',
      rateEstimate: '₹2,000 / 8 Hrs',
      badge: 'Available'
    });
  };

  // Filtered Leads
  const filteredLeads = leadsList.filter(l => {
    const matchesSearch = l.name.toLowerCase().includes(leadSearch.toLowerCase()) ||
                          l.company.toLowerCase().includes(leadSearch.toLowerCase()) ||
                          l.city.toLowerCase().includes(leadSearch.toLowerCase()) ||
                          l.service.toLowerCase().includes(leadSearch.toLowerCase());
    const matchesStatus = leadStatusFilter === 'All' || l.status === leadStatusFilter;
    return matchesSearch && matchesStatus;
  });

  // Filtered Bookings
  const filteredBookings = bookingFilter === 'All'
    ? bookingsList
    : bookingsList.filter(b => b.status === bookingFilter);

  // Beautiful Enterprise Login Page if unauthenticated
  if (!isAuthenticated) {
    return (
      <div style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 50% 30%, rgba(17, 61, 137, 0.4) 0%, #050A12 80%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1.5rem'
      }}>
        <div className="glass-panel" style={{
          width: '100%',
          maxWidth: '460px',
          padding: '2.5rem',
          borderRadius: '24px',
          border: '1.5px solid rgba(255, 215, 0, 0.4)',
          boxShadow: '0 30px 80px rgba(0, 0, 0, 0.9)'
        }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <div style={{
              width: '54px',
              height: '54px',
              borderRadius: '14px',
              background: 'linear-gradient(135deg, #081B3A 0%, #113D89 60%, #FFD700 100%)',
              border: '2px solid #FFD700',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#FFFFFF',
              fontWeight: 900,
              fontSize: '1.6rem',
              marginBottom: '1rem',
              boxShadow: '0 0 20px rgba(255, 215, 0, 0.4)'
            }}>
              PF
            </div>
            <h2 style={{ fontSize: '1.6rem', color: '#FFFFFF', fontWeight: 900, marginBottom: '0.25rem' }}>
              PARVEEN FLEETS
            </h2>
            <div style={{ color: '#FFD700', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.1em' }}>
              ENTERPRISE COMMAND SUITE
            </div>
          </div>

          <form onSubmit={(e) => {
            e.preventDefault();
            setLoginMessage('Secure admin authentication is not connected in this scaffold. The dashboard remains locked; configure the Laravel authentication API before deployment.');
          }}>
            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                Enterprise Access Role
              </label>
              <select
                value={currentRole}
                onChange={(e) => setCurrentRole(e.target.value)}
                className="pf-input"
              >
                <option value="Admin" style={{ background: '#081B3A' }}>Administrator (Full Access)</option>
                <option value="Manager" style={{ background: '#081B3A' }}>General Manager (Operations & Approvals)</option>
                <option value="Operations" style={{ background: '#081B3A' }}>Operations & Dispatch Controller</option>
                <option value="Sales" style={{ background: '#081B3A' }}>Corporate Sales & Leads Manager</option>
                <option value="Support" style={{ background: '#081B3A' }}>24x7 Support & Escalations Desk</option>
              </select>
            </div>

            <div style={{ marginBottom: '1.25rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                Enterprise Email
              </label>
              <input
                type="email"
                required
                className="pf-input"
              />
            </div>

            <div style={{ marginBottom: '1.75rem' }}>
              <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                Security Passcode
              </label>
              <input
                type="password"
                required
                className="pf-input"
              />
            </div>

            {loginMessage && (
              <p role="alert" style={{ color: '#FCA5A5', fontSize: '0.85rem', marginBottom: '1rem' }}>
                {loginMessage}
              </p>
            )}

            <button type="submit" className="btn-gold" style={{ width: '100%', padding: '0.9rem' }}>
              Admin Sign-In (Not Connected)
            </button>

            <div style={{ textAlign: 'center', marginTop: '1.5rem' }}>
              <button
                type="button"
                onClick={onBackToWebsite}
                style={{ background: 'transparent', border: 'none', color: '#94A3B8', fontSize: '0.85rem', display: 'inline-flex', alignItems: 'center', gap: '0.4rem', cursor: 'pointer' }}
              >
                <ArrowLeft size={14} /> Return to Public Website
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#050A12', color: '#FFFFFF', display: 'flex', flexDirection: 'column' }}>
      
      {/* Top Admin Header Bar */}
      <header style={{
        background: 'rgba(8, 27, 58, 0.95)',
        borderBottom: '1px solid rgba(255, 215, 0, 0.2)',
        padding: '0.85rem 1.75rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 40,
        backdropFilter: 'blur(16px)'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
          <button
            onClick={onBackToWebsite}
            className="btn-outline"
            style={{ padding: '0.45rem 0.85rem', fontSize: '0.8rem', borderRadius: '8px' }}
          >
            <ArrowLeft size={14} /> Back to Website
          </button>

          <div style={{ display: 'flex', alignItems: 'center', gap: '0.65rem' }}>
            <div style={{
              width: '34px',
              height: '34px',
              borderRadius: '8px',
              background: 'linear-gradient(135deg, #081B3A, #FFD700)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#050A12',
              fontWeight: 900
            }}>
              PF
            </div>
            <div>
              <div style={{ fontWeight: 800, fontSize: '0.95rem' }}>PARVEEN FLEETS PVT LTD</div>
              <div style={{ fontSize: '0.7rem', color: '#FFD700', fontWeight: 600 }}>Command & Control Hub</div>
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Active Role Selector */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.05)', padding: '0.35rem 0.75rem', borderRadius: '8px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <Shield size={14} color="#FFD700" />
            <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Role:</span>
            <select
              value={currentRole}
              onChange={(e) => setCurrentRole(e.target.value)}
              style={{ background: 'transparent', border: 'none', color: '#FFD700', fontWeight: 700, fontSize: '0.8rem', cursor: 'pointer' }}
            >
              <option value="Admin" style={{ background: '#081B3A' }}>Admin</option>
              <option value="Manager" style={{ background: '#081B3A' }}>Manager</option>
              <option value="Operations" style={{ background: '#081B3A' }}>Operations</option>
              <option value="Sales" style={{ background: '#081B3A' }}>Sales</option>
              <option value="Support" style={{ background: '#081B3A' }}>Support</option>
            </select>
          </div>

          <button
            onClick={() => setIsAuthenticated(false)}
            style={{
              background: 'rgba(239, 68, 68, 0.15)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              color: '#F87171',
              padding: '0.45rem 0.85rem',
              borderRadius: '8px',
              fontSize: '0.8rem',
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              cursor: 'pointer'
            }}
          >
            <LogOut size={14} /> Logout
          </button>
        </div>
      </header>

      {/* Admin Layout with Navigation Sidebar */}
      <div style={{ display: 'flex', flex: 1 }}>
        
        {/* Sidebar */}
        <aside style={{
          width: '260px',
          background: 'rgba(5, 10, 18, 0.98)',
          borderRight: '1px solid rgba(255, 255, 255, 0.08)',
          padding: '1.5rem 1rem',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          flexShrink: 0
        }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', paddingLeft: '0.75rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              MAIN NAVIGATION
            </div>

            <button
              onClick={() => setActiveSection('dashboard')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: activeSection === 'dashboard' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                border: activeSection === 'dashboard' ? '1px solid rgba(255, 215, 0, 0.4)' : 'none',
                color: activeSection === 'dashboard' ? '#FFD700' : '#CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <LayoutDashboard size={18} /> Dashboard Stats
            </button>

            <button
              onClick={() => setActiveSection('leads')}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: activeSection === 'leads' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                border: activeSection === 'leads' ? '1px solid rgba(255, 215, 0, 0.4)' : 'none',
                color: activeSection === 'leads' ? '#FFD700' : '#CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Users size={18} /> Leads Management
              </div>
              <span style={{ background: '#FFD700', color: '#050A12', fontSize: '0.7rem', fontWeight: 800, padding: '0.1rem 0.5rem', borderRadius: '9999px' }}>
                {leadsList.length}
              </span>
            </button>

            <button
              onClick={() => setActiveSection('bookings')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: activeSection === 'bookings' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                border: activeSection === 'bookings' ? '1px solid rgba(255, 215, 0, 0.4)' : 'none',
                color: activeSection === 'bookings' ? '#FFD700' : '#CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <Calendar size={18} /> Booking Orders
            </button>

            <button
              onClick={() => setActiveSection('fleet')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: activeSection === 'fleet' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                border: activeSection === 'fleet' ? '1px solid rgba(255, 215, 0, 0.4)' : 'none',
                color: activeSection === 'fleet' ? '#FFD700' : '#CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <Car size={18} /> Fleet Management
            </button>

            <button
              onClick={() => setActiveSection('clients')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: activeSection === 'clients' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                border: activeSection === 'clients' ? '1px solid rgba(255, 215, 0, 0.4)' : 'none',
                color: activeSection === 'clients' ? '#FFD700' : '#CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <Building2 size={18} /> Corporate Clients
            </button>

            <div style={{ fontSize: '0.72rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase', paddingLeft: '0.75rem', marginTop: '1.5rem', marginBottom: '0.5rem', letterSpacing: '0.05em' }}>
              SYSTEM & CMS
            </div>

            <button
              onClick={() => setActiveSection('cms')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: activeSection === 'cms' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                border: activeSection === 'cms' ? '1px solid rgba(255, 215, 0, 0.4)' : 'none',
                color: activeSection === 'cms' ? '#FFD700' : '#CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <FileText size={18} /> CMS & Blogs
            </button>

            <button
              onClick={() => setActiveSection('seo')}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.75rem',
                padding: '0.75rem 1rem',
                borderRadius: '10px',
                background: activeSection === 'seo' ? 'rgba(255, 215, 0, 0.15)' : 'transparent',
                border: activeSection === 'seo' ? '1px solid rgba(255, 215, 0, 0.4)' : 'none',
                color: activeSection === 'seo' ? '#FFD700' : '#CBD5E1',
                fontWeight: 700,
                fontSize: '0.9rem',
                textAlign: 'left'
              }}
            >
              <Globe size={18} /> SEO & Schema Meta
            </button>
          </div>

          {/* Quick System Status Card in Sidebar */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.03)',
            borderRadius: '12px',
            padding: '1rem',
            border: '1px solid rgba(255, 255, 255, 0.08)'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#10B981', fontSize: '0.8rem', fontWeight: 700, marginBottom: '0.35rem' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981', display: 'inline-block' }} />
              War Room: All Systems Green
            </div>
            <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>
              112 Hubs Connected • ISO 9001:2015 Live Audit Logged
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main style={{ flex: 1, padding: '2rem', overflowY: 'auto' }}>
          
          {/* SECTION: DASHBOARD */}
          {activeSection === 'dashboard' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>
                    Enterprise Overview & Telematics
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                    Real-time operational indicators across Pune HQ, Mumbai, Delhi, and Hyderabad.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button onClick={exportLeadsToExcel} className="btn-outline" style={{ fontSize: '0.85rem', padding: '0.6rem 1rem' }}>
                    <Download size={15} /> Export Leads Excel
                  </button>
                  <button onClick={() => setActiveSection('leads')} className="btn-gold" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                    <Users size={15} /> View New Leads ({leadsList.filter(l => l.status === 'New').length})
                  </button>
                </div>
              </div>

              {/* 6 Key Stat Cards */}
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1.25rem',
                marginBottom: '2.5rem'
              }}>
                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <span>TOTAL VISITORS</span>
                    <Globe size={16} color="#38BDF8" />
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>84,290</div>
                  <div style={{ fontSize: '0.75rem', color: '#34D399', fontWeight: 600 }}>+18.4% this month</div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <span>TOTAL LEADS</span>
                    <Users size={16} color="#FFD700" />
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFD700' }}>{1244 + leadsList.length}</div>
                  <div style={{ fontSize: '0.75rem', color: '#FFD700', fontWeight: 600 }}>{leadsList.length} In Active Pipeline</div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <span>TOTAL BOOKINGS</span>
                    <Calendar size={16} color="#10B981" />
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>3,892</div>
                  <div style={{ fontSize: '0.75rem', color: '#34D399', fontWeight: 600 }}>99.8% On-Time SLA</div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <span>CONTRACT REVENUE</span>
                    <DollarSign size={16} color="#34D399" />
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#34D399' }}>₹4.82 Cr</div>
                  <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>Active Recurring ARR</div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <span>ACTIVE VEHICLES</span>
                    <Car size={16} color="#60A5FA" />
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>384 Cabs</div>
                  <div style={{ fontSize: '0.75rem', color: '#60A5FA', fontWeight: 600 }}>112+ Hubs Deployed</div>
                </div>

                <div className="glass-card" style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#94A3B8', fontSize: '0.8rem', fontWeight: 600, marginBottom: '0.5rem' }}>
                    <span>NEW MESSAGES / RFPs</span>
                    <Mail size={16} color="#F59E0B" />
                  </div>
                  <div style={{ fontSize: '1.8rem', fontWeight: 900, color: '#F59E0B' }}>14</div>
                  <div style={{ fontSize: '0.75rem', color: '#FBBF24', fontWeight: 600 }}>Action Required</div>
                </div>
              </div>

              {/* Recent Activity Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '1.5rem' }}>
                <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>
                    Latest Corporate Inquiries
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {leadsList.slice(0, 4).map((lead) => (
                      <div key={lead.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div>
                          <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>{lead.company}</strong>
                          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{lead.name} • {lead.city} • {lead.service}</div>
                        </div>
                        <span className={`status-badge ${lead.status.toLowerCase().replace(' ', '_')}`}>
                          {lead.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="glass-panel" style={{ padding: '1.75rem', borderRadius: '16px' }}>
                  <h3 style={{ fontSize: '1.15rem', color: '#FFFFFF', fontWeight: 800, marginBottom: '1rem' }}>
                    Active Dispatch Telematics
                  </h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                    {bookingsList.map((bk) => (
                      <div key={bk.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.75rem', background: 'rgba(255, 255, 255, 0.03)', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                        <div>
                          <strong style={{ color: '#FFFFFF', fontSize: '0.9rem' }}>{bk.customer} ({bk.id})</strong>
                          <div style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{bk.vehicle} • {bk.drop}</div>
                        </div>
                        <span className={`status-badge ${bk.status.toLowerCase().replace(' ', '_')}`}>
                          {bk.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: LEADS MANAGEMENT */}
          {activeSection === 'leads' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>
                    Leads & Corporate RFPs Management
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                    Track, manage, and convert incoming corporate transportation inquiries.
                  </p>
                </div>

                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  <button onClick={exportLeadsToExcel} className="btn-gold" style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}>
                    <Download size={15} /> Export Excel / CSV
                  </button>
                </div>
              </div>

              {/* Search & Filter Bar */}
              <div className="glass-card" style={{ padding: '1rem 1.25rem', marginBottom: '1.5rem', display: 'flex', gap: '1rem', flexWrap: 'wrap', alignItems: 'center' }}>
                <div style={{ flex: 1, minWidth: '220px', position: 'relative' }}>
                  <Search size={16} color="#FFD700" style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)' }} />
                  <input
                    type="text"
                    placeholder="Search by company, contact name, city, service..."
                    value={leadSearch}
                    onChange={(e) => setLeadSearch(e.target.value)}
                    className="pf-input"
                    style={{ paddingLeft: '2.5rem', fontSize: '0.85rem' }}
                  />
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <Filter size={15} color="#94A3B8" />
                  <span style={{ fontSize: '0.8rem', color: '#94A3B8' }}>Status:</span>
                  <select
                    value={leadStatusFilter}
                    onChange={(e) => setLeadStatusFilter(e.target.value)}
                    className="pf-input"
                    style={{ padding: '0.5rem 0.85rem', fontSize: '0.85rem', width: 'auto' }}
                  >
                    <option value="All" style={{ background: '#081B3A' }}>All Statuses</option>
                    <option value="New" style={{ background: '#081B3A' }}>New</option>
                    <option value="In Discussion" style={{ background: '#081B3A' }}>In Discussion</option>
                    <option value="Proposal Sent" style={{ background: '#081B3A' }}>Proposal Sent</option>
                    <option value="Won" style={{ background: '#081B3A' }}>Won / Closed</option>
                  </select>
                </div>
              </div>

              {/* Leads Table */}
              <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table className="enterprise-table">
                    <thead>
                      <tr>
                        <th>Lead ID</th>
                        <th>Client & Company</th>
                        <th>Contact</th>
                        <th>Service & City</th>
                        <th>Date</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredLeads.map((lead) => (
                        <tr key={lead.id}>
                          <td style={{ fontWeight: 800, color: '#FFD700' }}>{lead.id}</td>
                          <td>
                            <strong style={{ color: '#FFFFFF', display: 'block' }}>{lead.company}</strong>
                            <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{lead.name}</span>
                          </td>
                          <td>
                            <div style={{ fontSize: '0.85rem', color: '#E2E8F0' }}>{lead.phone}</div>
                            <div style={{ fontSize: '0.78rem', color: '#64748B' }}>{lead.email}</div>
                          </td>
                          <td>
                            <span style={{ color: '#FFD700', fontWeight: 600, display: 'block', fontSize: '0.85rem' }}>{lead.service}</span>
                            <span style={{ color: '#94A3B8', fontSize: '0.78rem' }}>{lead.city} • {lead.fleetSize}</span>
                          </td>
                          <td style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>{lead.date}</td>
                          <td>
                            <select
                              value={lead.status}
                              onChange={(e) => handleUpdateLeadStatus(lead.id, e.target.value)}
                              style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                color: lead.status === 'Won' ? '#10B981' : lead.status === 'New' ? '#60A5FA' : '#FFD700',
                                padding: '0.3rem 0.6rem',
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              <option value="New" style={{ background: '#081B3A' }}>New</option>
                              <option value="In Discussion" style={{ background: '#081B3A' }}>In Discussion</option>
                              <option value="Proposal Sent" style={{ background: '#081B3A' }}>Proposal Sent</option>
                              <option value="Won" style={{ background: '#081B3A' }}>Won</option>
                              <option value="Cancelled" style={{ background: '#081B3A' }}>Cancelled</option>
                            </select>
                          </td>
                          <td>
                            <div style={{ display: 'flex', gap: '0.4rem' }}>
                              <button
                                onClick={() => setSelectedLead(lead)}
                                style={{ background: 'rgba(59, 130, 246, 0.15)', border: 'none', color: '#60A5FA', padding: '0.35rem 0.6rem', borderRadius: '6px', cursor: 'pointer' }}
                                title="View Details"
                              >
                                <Eye size={14} />
                              </button>
                              <button
                                onClick={() => handleDeleteLead(lead.id)}
                                style={{ background: 'rgba(239, 68, 68, 0.15)', border: 'none', color: '#F87171', padding: '0.35rem 0.6rem', borderRadius: '6px', cursor: 'pointer' }}
                                title="Delete Lead"
                              >
                                <Trash2 size={14} />
                              </button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Lead Details Modal */}
              {selectedLead && (
                <div className="modal-overlay" onClick={() => setSelectedLead(null)}>
                  <div className="glass-panel" style={{ width: 'clamp(320px, 90vw, 550px)', padding: '2rem', borderRadius: '20px' }} onClick={(e) => e.stopPropagation()}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.25rem' }}>
                      <h3 style={{ fontSize: '1.3rem', color: '#FFFFFF' }}>Lead Details: {selectedLead.id}</h3>
                      <button onClick={() => setSelectedLead(null)} style={{ background: 'transparent', border: 'none', color: '#FFFFFF', cursor: 'pointer' }}>
                        <X size={18} />
                      </button>
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem', fontSize: '0.9rem', marginBottom: '1.5rem' }}>
                      <div><strong>Company:</strong> {selectedLead.company}</div>
                      <div><strong>Contact Name:</strong> {selectedLead.name}</div>
                      <div><strong>Phone:</strong> {selectedLead.phone}</div>
                      <div><strong>Email:</strong> {selectedLead.email}</div>
                      <div><strong>Service Requested:</strong> {selectedLead.service}</div>
                      <div><strong>City:</strong> {selectedLead.city}</div>
                      <div><strong>Requirement / Notes:</strong></div>
                      <div style={{ background: 'rgba(255, 255, 255, 0.05)', padding: '0.85rem', borderRadius: '8px', color: '#CBD5E1', lineHeight: 1.5 }}>
                        {selectedLead.message || 'No additional message provided.'}
                      </div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem' }}>
                      <button onClick={() => setSelectedLead(null)} className="btn-gold" style={{ fontSize: '0.85rem', padding: '0.6rem 1.25rem' }}>
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SECTION: BOOKING ORDERS */}
          {activeSection === 'bookings' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>
                    Corporate Booking Orders & Chauffeur Assignments
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                    Manage dispatch lifecycle: Pending → Assigned → Confirmed → In Progress → Completed.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <div style={{ overflowX: 'auto' }}>
                  <table className="enterprise-table">
                    <thead>
                      <tr>
                        <th>Booking ID</th>
                        <th>Client / Company</th>
                        <th>Service & Vehicle</th>
                        <th>Chauffeur</th>
                        <th>Pickup & Destination</th>
                        <th>Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {filteredBookings.map((bk) => (
                        <tr key={bk.id}>
                          <td style={{ fontWeight: 800, color: '#FFD700' }}>{bk.id}</td>
                          <td style={{ fontWeight: 700, color: '#FFFFFF' }}>{bk.customer}</td>
                          <td>
                            <strong style={{ color: '#FFD700', display: 'block', fontSize: '0.85rem' }}>{bk.service}</strong>
                            <span style={{ color: '#94A3B8', fontSize: '0.8rem' }}>{bk.vehicle}</span>
                          </td>
                          <td style={{ fontSize: '0.85rem', color: '#CBD5E1' }}>{bk.chauffeur}</td>
                          <td>
                            <div style={{ fontSize: '0.85rem', color: '#E2E8F0' }}><strong>From:</strong> {bk.pickup}</div>
                            <div style={{ fontSize: '0.85rem', color: '#94A3B8' }}><strong>To:</strong> {bk.drop}</div>
                          </td>
                          <td>
                            <select
                              value={bk.status}
                              onChange={(e) => handleUpdateBookingStatus(bk.id, e.target.value)}
                              style={{
                                background: 'rgba(255, 255, 255, 0.08)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                color: bk.status === 'Completed' || bk.status === 'Confirmed' ? '#10B981' : bk.status === 'In Progress' ? '#38BDF8' : '#F59E0B',
                                padding: '0.3rem 0.6rem',
                                borderRadius: '6px',
                                fontSize: '0.75rem',
                                fontWeight: 700,
                                cursor: 'pointer'
                              }}
                            >
                              <option value="Pending" style={{ background: '#081B3A' }}>Pending</option>
                              <option value="Assigned" style={{ background: '#081B3A' }}>Assigned</option>
                              <option value="Confirmed" style={{ background: '#081B3A' }}>Confirmed</option>
                              <option value="In Progress" style={{ background: '#081B3A' }}>In Progress</option>
                              <option value="Completed" style={{ background: '#081B3A' }}>Completed</option>
                              <option value="Cancelled" style={{ background: '#081B3A' }}>Cancelled</option>
                            </select>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* SECTION: FLEET MANAGEMENT */}
          {activeSection === 'fleet' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>
                    Vehicle Fleet Management
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                    Manage fleet assets, seating capacities, telemetry assignments, and availability.
                  </p>
                </div>

                <button
                  onClick={() => setShowAddVehicleModal(true)}
                  className="btn-gold"
                  style={{ fontSize: '0.85rem', padding: '0.65rem 1.25rem' }}
                >
                  <Plus size={15} /> Add New Vehicle
                </button>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                {vehiclesList.map((veh) => (
                  <div key={veh.id} className="glass-card" style={{ padding: '1.5rem', borderRadius: '16px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                      <div>
                        <span style={{ fontSize: '0.75rem', color: '#94A3B8', textTransform: 'uppercase' }}>{veh.category}</span>
                        <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', fontWeight: 800 }}>{veh.name}</h3>
                      </div>
                      <span className="status-badge active">{veh.badge}</span>
                    </div>

                    <div style={{ fontSize: '0.85rem', color: '#CBD5E1', display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                      <div><strong>Capacity:</strong> {veh.capacity}</div>
                      <div><strong>Fuel:</strong> {veh.fuel}</div>
                      <div><strong>Tariff Est:</strong> <span style={{ color: '#34D399', fontWeight: 700 }}>{veh.rateEstimate}</span></div>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.5rem', borderTop: '1px solid rgba(255, 255, 255, 0.06)', paddingTop: '0.75rem' }}>
                      <button
                        onClick={() => handleDeleteVehicle(veh.id)}
                        style={{ background: 'rgba(239, 68, 68, 0.15)', border: 'none', color: '#F87171', padding: '0.4rem 0.8rem', borderRadius: '6px', fontSize: '0.75rem', fontWeight: 700, cursor: 'pointer' }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Add Vehicle Modal */}
              {showAddVehicleModal && (
                <div className="modal-overlay" onClick={() => setShowAddVehicleModal(false)}>
                  <div className="glass-panel" style={{ width: 'clamp(320px, 90vw, 500px)', padding: '2rem', borderRadius: '20px' }} onClick={(e) => e.stopPropagation()}>
                    <h3 style={{ fontSize: '1.4rem', color: '#FFFFFF', marginBottom: '1.25rem' }}>Add New Fleet Asset</h3>
                    <form onSubmit={handleAddVehicle}>
                      <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem' }}>Model Name</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. Mercedes Benz E-Class / MG ZS EV"
                          value={newVehicle.name}
                          onChange={(e) => setNewVehicle({ ...newVehicle, name: e.target.value })}
                          className="pf-input"
                        />
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem' }}>Category</label>
                        <select
                          value={newVehicle.category}
                          onChange={(e) => setNewVehicle({ ...newVehicle, category: e.target.value })}
                          className="pf-input"
                        >
                          <option value="Executive Sedans" style={{ background: '#081B3A' }}>Executive Sedans</option>
                          <option value="Premium MPVs" style={{ background: '#081B3A' }}>Premium MPVs</option>
                          <option value="Luxury & VIP" style={{ background: '#081B3A' }}>Luxury & VIP</option>
                          <option value="Coaches & Travellers" style={{ background: '#081B3A' }}>Coaches & Travellers</option>
                        </select>
                      </div>
                      <div style={{ marginBottom: '1rem' }}>
                        <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem' }}>Seating Capacity</label>
                        <input
                          type="text"
                          required
                          placeholder="e.g. 4 Passengers / 26 Seats"
                          value={newVehicle.capacity}
                          onChange={(e) => setNewVehicle({ ...newVehicle, capacity: e.target.value })}
                          className="pf-input"
                        />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '0.75rem', marginTop: '1.5rem' }}>
                        <button type="button" onClick={() => setShowAddVehicleModal(false)} className="btn-outline">Cancel</button>
                        <button type="submit" className="btn-gold">Save Vehicle</button>
                      </div>
                    </form>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* SECTION: CLIENT ACCOUNTS */}
          {activeSection === 'clients' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>
                    Corporate Client Accounts
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                    Enterprise accounts, monthly contract values, and allocated fleet units.
                  </p>
                </div>
              </div>

              <div className="glass-panel" style={{ borderRadius: '16px', overflow: 'hidden' }}>
                <table className="enterprise-table">
                  <thead>
                    <tr>
                      <th>Client Name</th>
                      <th>Operational Locations</th>
                      <th>Active Fleet Size</th>
                      <th>Contract Billing</th>
                      <th>Account Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {clientsList.map((client) => (
                      <tr key={client.id}>
                        <td style={{ fontWeight: 800, color: '#FFFFFF' }}>{client.name}</td>
                        <td style={{ color: '#CBD5E1' }}>{client.city}</td>
                        <td style={{ color: '#FFD700', fontWeight: 700 }}>{client.fleetSize}</td>
                        <td style={{ color: '#10B981', fontWeight: 700 }}>{client.contract}</td>
                        <td><span className="status-badge active">{client.status}</span></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* SECTION: CMS & BLOGS */}
          {activeSection === 'cms' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>
                    Content Management System (CMS)
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                    Manage website content: Services, Testimonials, FAQ, Careers, and Knowledge Hub.
                  </p>
                </div>
              </div>

              <div className="glass-card" style={{ padding: '2rem', borderRadius: '16px' }}>
                <h3 style={{ fontSize: '1.25rem', color: '#FFFFFF', marginBottom: '1rem' }}>
                  Manage Published Services ({SERVICES_DATA.length} Active Services)
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                  {SERVICES_DATA.map((srv) => (
                    <div key={srv.id} style={{ background: 'rgba(255, 255, 255, 0.04)', padding: '1rem', borderRadius: '10px', border: '1px solid rgba(255, 255, 255, 0.06)' }}>
                      <strong style={{ color: '#FFD700', fontSize: '0.95rem', display: 'block' }}>{srv.title}</strong>
                      <span style={{ fontSize: '0.75rem', color: '#94A3B8' }}>{srv.tagline}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* SECTION: SEO CONFIGURATION */}
          {activeSection === 'seo' && (
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' }}>
                <div>
                  <h2 style={{ fontSize: '1.8rem', fontWeight: 900, color: '#FFFFFF' }}>
                    SEO & Schema Markup Engine
                  </h2>
                  <p style={{ color: '#94A3B8', fontSize: '0.9rem' }}>
                    Google Search Console, Open Graph, Twitter Cards, and Rich Snippet Schema settings.
                  </p>
                </div>

                {seoSaved && (
                  <span style={{ color: '#10B981', display: 'flex', alignItems: 'center', gap: '0.4rem', fontWeight: 700 }}>
                    <CheckCircle2 size={16} /> SEO Settings Saved!
                  </span>
                )}
              </div>

              <div className="glass-panel" style={{ padding: '2rem', borderRadius: '16px', maxWidth: '750px' }}>
                <form onSubmit={(e) => { e.preventDefault(); setSeoSaved(true); setTimeout(() => setSeoSaved(false), 2500); }}>
                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Page Title Tag
                    </label>
                    <input
                      type="text"
                      value={seoConfig.metaTitle}
                      onChange={(e) => setSeoConfig({ ...seoConfig, metaTitle: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Meta Description
                    </label>
                    <textarea
                      rows={3}
                      value={seoConfig.metaDesc}
                      onChange={(e) => setSeoConfig({ ...seoConfig, metaDesc: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <div style={{ marginBottom: '1.25rem' }}>
                    <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Focus SEO Keywords
                    </label>
                    <input
                      type="text"
                      value={seoConfig.keywords}
                      onChange={(e) => setSeoConfig({ ...seoConfig, keywords: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <div style={{ marginBottom: '1.5rem' }}>
                    <label style={{ fontSize: '0.8rem', color: '#CBD5E1', display: 'block', marginBottom: '0.35rem', fontWeight: 600 }}>
                      Robots Directive
                    </label>
                    <input
                      type="text"
                      value={seoConfig.robots}
                      onChange={(e) => setSeoConfig({ ...seoConfig, robots: e.target.value })}
                      className="pf-input"
                    />
                  </div>

                  <button type="submit" className="btn-gold" style={{ padding: '0.85rem 1.75rem' }}>
                    Update Global SEO Metadata
                  </button>
                </form>
              </div>
            </div>
          )}

        </main>
      </div>
    </div>
  );
}
