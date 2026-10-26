// Parveen Fleets Pvt Ltd - Master Data Store

export const COMPANY_INFO = {
  name: "PARVEEN FLEETS PVT LTD",
  shortName: "Parveen Fleets",
  tagline: "Redefining Travel with Safety, Comfort and Innovation",
  foundedYear: 2012,
  pvtLtdYear: 2021,
  headOffice: {
    city: "Pune",
    state: "Maharashtra",
    address: "Tower 4, Level 7, Corporate Hub, Viman Nagar, Pune, Maharashtra 411014",
    phone: "+91 95458 99838"
  },
  branches: [
    {
      city: "Mumbai",
      state: "Maharashtra",
      address: "Bandra Kurla Complex (BKC), Bandra East, Mumbai 400051",
      phone: "+91 77440 00844",
      type: "Regional Hub"
    },
    {
      city: "Delhi NCR",
      state: "Delhi",
      address: "Worldmark 2, Aerocity Hospitality District, New Delhi 110037",
      phone: "+91 95458 99838",
      type: "North India Hub"
    },
    {
      city: "Hyderabad",
      state: "Telangana",
      address: "Mindspace Cyberabad, Hitec City, Madhapur, Hyderabad 500081",
      phone: "+91 77440 00844",
      type: "South India Hub"
    }
  ],
  phones: ["+91 95458 99838", "+91 77440 00844"],
  emails: ["sales@parveenfleets.in", "vajidmirza@parveenfleets.in"],
  website: "www.parveenfleets.in",
  whatsappUrl: "https://wa.me/919545899838?text=Hello%20Team%20Parveen%20Fleets.%20I%20need%20transportation%20services.",
  socials: {
    linkedin: "https://www.linkedin.com/company/parveenfleets",
    facebook: "https://facebook.com/parveenfleets",
    instagram: "https://instagram.com/parveenfleets",
    twitter: "https://twitter.com/parveenfleets"
  }
};

export const HERO_STATS = [
  { value: "112+", label: "Operational Hubs", sub: "PAN India Coverage" },
  { value: "500+", label: "Corporate Trips Daily", sub: "Enterprise SLA 99.8%" },
  { value: "24x7", label: "Control Center", sub: "Live GPS & SOS Support" },
  { value: "15,000+", label: "Daily Safe Commuters", sub: "PoSH & Police Verified" }
];

export const TIMELINE_MILESTONES = [
  {
    year: "2012",
    title: "The Genesis in Pune",
    description: "Started operations with an initial fleet of 15 premium cabs serving leading IT software parks in Hinjawadi & Magarpatta, Pune.",
    badge: "Inception",
    metric: "15+ Fleet Assets"
  },
  {
    year: "2016",
    title: "Expansion to Mumbai & Western India",
    description: "Expanded into Mumbai BKC and industrial belts, scaling to 120+ vehicles and introducing dedicated luxury bus charters for tech MNCs.",
    badge: "Scale Up",
    metric: "120+ Corporate Cabs"
  },
  {
    year: "2021",
    title: "Incorporated as Private Limited",
    description: "Officially incorporated as Parveen Fleets Pvt Ltd. Established dedicated regional command centers in Delhi NCR and Hyderabad.",
    badge: "Pvt Ltd Milestone",
    metric: "4 Strategic Command Centers"
  },
  {
    year: "2024",
    title: "Award of the Year & IoT Telematics",
    description: "Honored as 'Best Corporate Car Rental Of The Year 2024'. Rolled out in-house AI routing engine and automated telematics safety suite.",
    badge: "Award Winner",
    metric: "1st National IBSEA Honor"
  },
  {
    year: "2026",
    title: "112+ Locations PAN India Enterprise",
    description: "Operating across 12+ states, powering sustainable hybrid & EV fleets for Fortune 500 enterprises with guaranteed 99.8% on-time SLA.",
    badge: "Enterprise Standard",
    metric: "112+ Pan-India Hubs"
  }
];

export const SERVICES_DATA = [
  {
    id: "employee-transportation",
    title: "Employee Transportation",
    tagline: "Automated Daily Corporate Commute",
    description: "Turnkey pickup and drop logistics for corporate workforce with dynamic roster scheduling, geo-fenced route optimization, and live safety escort tracking.",
    icon: "Users",
    image: "/images/fleet/mini-bus.jpg",
    features: ["Dynamic Roster Optimization", "Strict On-Time Arrival SLA", "Real-Time Geo-Tracking", "Escort Guards for Night Shifts"],
    popular: true
  },
  {
    id: "corporate-cabs",
    title: "Corporate Cab Services",
    tagline: "Dedicated On-Demand & Spot Executive Cabs",
    description: "Premium sedan and SUV spot rentals for leadership meetings, client visits, inter-office transit, and ad-hoc corporate requirements with unified billing.",
    icon: "Car",
    image: "/images/fleet/ciaz.jpg",
    features: ["Instant Booking Portal", "Clean Chauffeur Uniforms", "Bottled Water & Wi-Fi", "Zero Surge Pricing Guarantee"],
    popular: false
  },
  {
    id: "luxury-rentals",
    title: "Luxury Car Rentals",
    tagline: "Mercedes, BMW, Audi & Fortuner for CXOs",
    description: "Bespoke executive mobility for board members, global delegations, and VIP guests with high-end luxury sedans and premium SUVs driven by elite protocol chauffeurs.",
    icon: "Crown",
    image: "/images/fleet/luxury-suv.jpg",
    features: ["Mercedes S/E-Class & BMW 5/7", "Protocol Trained Chauffeurs", "Flight Meet & Greet", "Executive Privacy Tint & Amenities"],
    popular: true
  },
  {
    id: "airport-transfers",
    title: "Airport Transfers",
    tagline: "Punctual Executive Flight Transfers",
    description: "Seamless door-to-terminal airport logistics with automated real-time flight tracking, delayed flight adjustments, meet-and-greet placards, and zero wait times.",
    icon: "PlaneTakeoff",
    image: "/images/fleet/dzire.jpg",
    features: ["Automated Flight Delay Tracking", "Airport Chauffeur Meet & Greet", "Luggage Handling Assistance", "Priority Airport Toll Access"],
    popular: false
  },
  {
    id: "shuttle-services",
    title: "Shuttle Services",
    tagline: "Campus & Metro Hub Commuter Shuttles",
    description: "Scheduled high-capacity point-to-point AC shuttle buses connecting corporate tech parks to major metro hubs, railway stations, and central city clusters.",
    icon: "BusFront",
    image: "/images/fleet/tempo-traveller.jpg",
    features: ["Fixed Scheduled Departures", "QR Code Pass Scanning", "High Frequency Peak Hours", "Carbon Footprint Reduction"],
    popular: false
  },
  {
    id: "long-term-rentals",
    title: "Long-Term Rentals",
    tagline: "Custom Monthly & Annual Fleet Leases",
    description: "Hassle-free corporate vehicle leasing programs with dedicated vehicles, dedicated chauffeurs, fuel management, regular maintenance, and guaranteed standby replacements.",
    icon: "CalendarClock",
    image: "/images/fleet/innova-hycross.jpg",
    features: ["Flexible 12 to 36 Month Terms", "Dedicated Chauffeur & Vehicle", "Comprehensive Maintenance & Insurance", "Immediate Standby Replacement"],
    popular: false
  },
  {
    id: "bus-coach-rentals",
    title: "Bus & Coach Rentals",
    tagline: "Tempo Travellers & Luxury Volvo Coaches",
    description: "Modern 12 to 55-seater air-conditioned executive coaches and Tempo Travellers for employee shift transport, team offsites, annual corporate summits, and industrial visits.",
    icon: "ShieldAlert",
    image: "/images/fleet/luxury-coach.jpg",
    features: ["12 to 55 Seater Capacities", "Air Suspension & Pushback Seats", "PA System & High-Speed Wi-Fi", "Highway Speed Governors Enabled"],
    popular: true
  },
  {
    id: "tourism-solutions",
    title: "Tourism & Events",
    tagline: "MICE & Corporate Retreat Logistics",
    description: "End-to-end transportation management for high-stakes MICE conferences, global summits, shareholder meetings, corporate weekend getaways, and luxury industrial delegations.",
    icon: "Compass",
    image: "/images/fleet/volvo-coach.jpg",
    features: ["Dedicated On-Ground Transport Marshals", "Custom Branded Fleet Wraps", "Multi-City Delegate Coordination", "24x7 Dedicated Event War-Room"],
    popular: false
  }
];

export const WHY_CHOOSE_US = [
  {
    title: "PAN India Operations",
    desc: "Seamless single-vendor operations across 112+ cities with consistent enterprise SLAs and localized dispatch hubs.",
    icon: "MapPin"
  },
  {
    title: "Technology Driven Operations",
    desc: "Proprietary dispatch algorithms, automated rostering, and instant mobile alerts for commuters and fleet managers.",
    icon: "Cpu"
  },
  {
    title: "Live Vehicle Tracking",
    desc: "Dual GPS tracking with real-time speed, geo-fencing, and live route telemetry accessible on corporate admin dashboards.",
    icon: "Radio"
  },
  {
    title: "24x7 Support Center",
    desc: "Round-the-clock physical command control center with dedicated escalation marshals and instant response teams.",
    icon: "Headphones"
  },
  {
    title: "Trained Chauffeurs",
    desc: "100% police verified, background checked, defensive driving certified, and groomed in soft skills & PoSH ethics.",
    icon: "Award"
  },
  {
    title: "Safe Transportation",
    desc: "Comprehensive safety architecture with in-cab SOS buttons, live dashcams, breathalyzers, and escort protection.",
    icon: "ShieldCheck"
  },
  {
    title: "Accurate Billing",
    desc: "Automated tamper-proof digital trip sheets, GPS-logged kilometers, toll fastag integration, and zero billing disputes.",
    icon: "FileCheck"
  },
  {
    title: "Real-Time Reporting",
    desc: "Customizable daily MIS, fuel telemetry, employee compliance logs, and on-time performance dashboards in one click.",
    icon: "BarChart3"
  },
  {
    title: "Dedicated Account Managers",
    desc: "A dedicated senior key account manager assigned to your organization for daily reviews and uninterrupted support.",
    icon: "UserCheck"
  }
];

export const SAFETY_FEATURES = [
  {
    id: "sos",
    title: "SOS Emergency Alert",
    description: "Instant physical and in-app SOS buttons trigger automated alerts to our 24x7 Emergency Response Center and corporate safety team within 5 seconds.",
    tag: "Instant Response"
  },
  {
    id: "trip-sharing",
    title: "Live Trip Sharing",
    description: "Commuters can share end-to-end live encrypted trip tracking URLs with family members and HR security personnel with one touch.",
    tag: "Real-time Link"
  },
  {
    id: "live-tracking",
    title: "Dual GPS Telematics",
    description: "Every vehicle is equipped with dual-redundant GPS trackers that stream vehicle speed, exact coordinates, and ignition status every 3 seconds.",
    tag: "High Precision"
  },
  {
    id: "women-safety",
    title: "Women Safety Protocols",
    description: "Strict first-pickup and last-drop protocol ensuring a female employee is never left as the solitary passenger with the driver during night shifts.",
    tag: "Special Protocol"
  },
  {
    id: "safe-reach",
    title: "Safe Reach Confirmation",
    description: "Digital confirmation requiring the employee to authenticate safe arrival at their residence before the chauffeur's trip is marked closed.",
    tag: "100% Verified"
  },
  {
    id: "route-deviation",
    title: "Route Deviation Alert",
    description: "Automated geofencing alert triggers instant alarm in the command center if a cab veers more than 200 meters off the prescribed route.",
    tag: "Geo-Fence Alert"
  },
  {
    id: "speed-monitoring",
    title: "Speed Violation Monitoring",
    description: "Hard-coded telematics limit vehicle speeds to 60 km/h in city and 80 km/h on expressways, alerting dispatch managers immediately upon any breach.",
    tag: "Speed Capped"
  },
  {
    id: "otp-verification",
    title: "OTP Verification",
    description: "Two-factor OTP match between commuter and chauffeur guarantees correct boarding and eliminates unauthorized passenger boardings.",
    tag: "2-Factor Auth"
  },
  {
    id: "qr-boarding",
    title: "QR Boarding Verification",
    description: "Fast touchless scanning of employee corporate badges on in-vehicle tablets for automated attendance and seat confirmation.",
    tag: "Touchless"
  },
  {
    id: "posh-compliance",
    title: "PoSH Compliance & Training",
    description: "All chauffeurs undergo mandatory quarterly Prevention of Sexual Harassment (PoSH) compliance workshops and gender-sensitization certification.",
    tag: "Legal Compliance"
  },
  {
    id: "escort-facility",
    title: "Security Escort Facility",
    description: "Trained and verified security guards accompany night-shift cabs during 8:00 PM to 6:00 AM drops for total peace of mind.",
    tag: "Night Protection"
  },
  {
    id: "background-verified",
    title: "100% Police Verified Drivers",
    description: "Strict 5-point background checks: Police verification, permanent residential address check, court criminal record check, and drug screening.",
    tag: "Verified Fleet"
  }
];

export const FLEET_SHOWCASE = [
  {
    id: "dzire",
    name: "Suzuki Dzire",
    category: "Executive Sedans",
    capacity: "4 Passengers",
    luggage: "2 Bags",
    fuel: "Petrol / CNG / Hybrid",
    features: ["Chauffeur Driven", "Climate Control AC", "Live GPS Tracking", "Spacious Boot"],
    rateEstimate: "₹1,800 / 8 Hrs",
    image: "/images/fleet/dzire.jpg",
    badge: "Most Popular Daily"
  },
  {
    id: "ciaz",
    name: "Suzuki Ciaz",
    category: "Executive Sedans",
    capacity: "4 Passengers",
    luggage: "3 Bags",
    fuel: "Hybrid Petrol",
    features: ["Extra Rear Legroom", "Rear AC Vents", "Plush Leatherette", "Corporate Wi-Fi"],
    rateEstimate: "₹2,200 / 8 Hrs",
    image: "/images/fleet/ciaz.jpg",
    badge: "Executive Class"
  },
  {
    id: "innova-hycross",
    name: "Toyota Innova Hycross",
    category: "Premium MPVs",
    capacity: "6-7 Passengers",
    luggage: "5 Bags",
    fuel: "Self-Charging Hybrid",
    features: ["Captain Ottoman Seats", "Dual Zone Panoramic AC", "Ultra Silent Hybrid", "Sunroof & USB-C"],
    rateEstimate: "₹3,800 / 8 Hrs",
    image: "/images/fleet/innova-hycross.jpg",
    badge: "Flagship Corporate"
  },
  {
    id: "premium-suv",
    name: "Premium Luxury SUVs",
    category: "Luxury & VIP",
    capacity: "4-6 Passengers",
    luggage: "4 Bags",
    fuel: "Diesel / Hybrid",
    features: ["Mercedes GLE / BMW X5 / Fortuner", "VIP Black Leather", "Protocol Chauffeur", "Executive Privacy"],
    rateEstimate: "₹6,500 / 8 Hrs",
    image: "/images/fleet/luxury-suv.jpg",
    badge: "Dignitary Grade"
  },
  {
    id: "tempo-traveller",
    name: "Tempo Traveller (12/17/26S)",
    category: "Coaches & Travellers",
    capacity: "12 - 26 Seats",
    luggage: "15+ Bags",
    fuel: "Turbo Diesel",
    features: ["Pushback Luxury Seats", "Individual AC Louvers", "Surround Sound & Mic", "Large Luggage Bay"],
    rateEstimate: "₹4,500 / 8 Hrs",
    image: "/images/fleet/tempo-traveller.jpg",
    badge: "Team Commute"
  },
  {
    id: "mini-bus",
    name: "Mini Executive Buses",
    category: "Coaches & Travellers",
    capacity: "20 - 32 Seats",
    luggage: "25 Bags",
    fuel: "BS6 Diesel",
    features: ["Air Suspension", "Wide Central Aisle", "LED Reading Lamps", "GPS Route Monitored"],
    rateEstimate: "₹6,000 / Day",
    image: "/images/fleet/mini-bus.jpg",
    badge: "Campus Shuttles"
  },
  {
    id: "luxury-coaches",
    name: "Luxury Coaches (40-49S)",
    category: "Coaches & Travellers",
    capacity: "40 - 49 Seats",
    luggage: "45 Bags",
    fuel: "BS6 Heavy Diesel",
    features: ["Semi-Sleeper / Pushback", "Full Air Suspension", "Emergency Exits & Cameras", "Chilled AC Ducts"],
    rateEstimate: "₹9,500 / Day",
    image: "/images/fleet/luxury-coach.jpg",
    badge: "Event & MICE"
  },
  {
    id: "volvo-coaches",
    name: "Volvo Multi-Axle Coaches",
    category: "Coaches & Travellers",
    capacity: "45 - 53 Seats",
    luggage: "60 Bags",
    fuel: "Euro 6 Clean Diesel",
    features: ["Volvo B11R Multi-Axle", "Aircraft Style Overhead", "Restroom On-Board (Optional)", "High-Speed 5G Wi-Fi"],
    rateEstimate: "₹14,000 / Day",
    image: "/images/fleet/volvo-coach.jpg",
    badge: "Ultimate Luxury"
  }
];

export const OPERATIONAL_STATES = [
  {
    name: "Maharashtra",
    status: "Headquarters & Western Hub",
    hubs: ["Pune (Corporate HQ)", "Mumbai (BKC, Andheri, Navi Mumbai)", "Nagpur", "Nashik", "Aurangabad"],
    vehicles: "220+ Active Units",
    highlight: true
  },
  {
    name: "Delhi NCR",
    status: "Northern Regional Hub",
    hubs: ["New Delhi (Aerocity)", "Gurgaon (Cyber City)", "Noida (Sector 62)", "Faridabad"],
    vehicles: "95+ Active Units",
    highlight: true
  },
  {
    name: "Telangana",
    status: "Southern Tech Hub",
    hubs: ["Hyderabad (Hitec City, Gachibowli, Financial District)", "Secunderabad"],
    vehicles: "85+ Active Units",
    highlight: true
  },
  {
    name: "Gujarat",
    status: "Industrial & Port Belt",
    hubs: ["Ahmedabad", "Vadodara", "Surat", "GIFT City", "Rajkot"],
    vehicles: "45+ Active Units",
    highlight: false
  },
  {
    name: "Karnataka",
    status: "Silicon Valley Corridor",
    hubs: ["Bengaluru (Electronic City, Whitefield, Outer Ring Road)", "Mysuru"],
    vehicles: "60+ Active Units",
    highlight: true
  },
  {
    name: "Tamil Nadu",
    status: "Automotive & IT Hub",
    hubs: ["Chennai (OMR, Guindy, Sriperumbudur)", "Coimbatore"],
    vehicles: "40+ Active Units",
    highlight: false
  },
  {
    name: "Rajasthan",
    status: "Tourism & Corporate Hub",
    hubs: ["Jaipur", "Udaipur", "Jodhpur", "Bhiwadi"],
    vehicles: "30+ Active Units",
    highlight: false
  },
  {
    name: "Punjab",
    status: "Northern Industrial Network",
    hubs: ["Chandigarh", "Mohali", "Ludhiana", "Amritsar"],
    vehicles: "25+ Active Units",
    highlight: false
  },
  {
    name: "Uttar Pradesh",
    status: "Enterprise & Expressways",
    hubs: ["Lucknow", "Kanpur", "Greater Noida", "Agra"],
    vehicles: "35+ Active Units",
    highlight: false
  },
  {
    name: "West Bengal",
    status: "Eastern Regional Network",
    hubs: ["Kolkata (Salt Lake Sector V, New Town)", "Durgapur"],
    vehicles: "30+ Active Units",
    highlight: false
  },
  {
    name: "Assam",
    status: "North-Eastern Gateway",
    hubs: ["Guwahati", "Dibrugarh"],
    vehicles: "18+ Active Units",
    highlight: false
  },
  {
    name: "Uttarakhand",
    status: "Hill & Manufacturing Belt",
    hubs: ["Dehradun", "Pantnagar", "Haridwar"],
    vehicles: "20+ Active Units",
    highlight: false
  }
];

export const CITIES_WE_SERVE_COLUMNS = [
  [
    { name: "Jammu & Kashmir", tone: "gold", cities: ["Jammu", "Pulwama", "Akhnoor", "Patnitop", "Srinagar"] },
    { name: "Punjab", tone: "amber", cities: ["Amritsar", "Barnala", "Jalandhar", "Firozpur"] },
    { name: "Rajasthan", tone: "amber", cities: ["Ajmer", "Jaipur", "Jodhpur", "Udaipur", "Kota"] },
    { name: "Haryana", tone: "amber", cities: ["Gurugram", "Karnal", "Faridabad", "Ambala", "Sonipat"] },
    { name: "Madhya Pradesh", tone: "amber", cities: ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain"] },
    { name: "Uttar Pradesh", tone: "amber", cities: ["Agra", "Lucknow", "Meerut", "Noida", "Varanasi"] }
  ],
  [
    { name: "Uttarakhand", tone: "amber", cities: ["Dehradun", "Haridwar", "Almora", "Auli", "Rishikesh"] },
    { name: "Assam", tone: "green", cities: ["Guwahati", "Dibrugarh", "Jorhat", "Tezpur", "Silchar"] },
    { name: "Odisha", tone: "green", cities: ["Bhubaneswar", "Cuttack", "Brahmapur", "Raurkela", "Sambalpur", "Puri"] },
    { name: "Telangana", tone: "green", cities: ["Hyderabad", "Karimnagar", "Ramagundam", "Mahabubnagar", "Siddipet", "Suryapet", "Adilabad"] },
    { name: "Tamil Nadu", tone: "green", cities: ["Chennai", "Coimbatore", "Coonoor", "Kanyakumari", "Madurai", "Rameswaram", "Thanjavur", "Tiruchirappalli"] }
  ],
  [
    { name: "Gujarat", tone: "amber", cities: ["Vadodara", "Dwarka", "Gandhinagar", "Ahmedabad", "Surat", "Rajkot", "Junagadh", "Jamnagar", "Porbandar"] },
    { name: "Maharashtra", tone: "amber", cities: ["Pune", "Solapur", "Kolhapur", "Nagpur", "Aurangabad", "Mumbai", "Ahmednagar", "Shirdi", "Nashik", "Latur", "Akola"] },
    { name: "Kerala", tone: "green", cities: ["Thiruvananthapuram", "Kozhikode", "Thrissur", "Kochi", "Kannur", "Kottayam", "Kasaragod", "Valanchery"] }
  ],
  [
    { name: "Andhra Pradesh", tone: "violet", cities: ["Amaravati", "Nellore", "Chittoor", "Eluru", "Guntur", "Tirupati", "Kurnool", "Vijayawada", "Visakhapatnam"] },
    { name: "Karnataka", tone: "violet", cities: ["Bangalore", "Mysuru", "Mangaluru", "Udupi", "Hubballi", "Dharwad", "Uttara Kannada"] },
    { name: "West Bengal", tone: "violet", cities: ["Kolkata", "Asansol", "Siliguri", "Durgapur", "Kharagpur", "Cooch Behar", "Shantipur", "Krishnanagar", "Medinipur"] }
  ]
];

export const CITY_GEO = {
  Jammu: [32.7266, 74.857],
  Pulwama: [33.8716, 74.899],
  Akhnoor: [32.8958, 74.7356],
  Patnitop: [33.0833, 75.3333],
  Srinagar: [34.0837, 74.7973],
  Amritsar: [31.634, 74.8723],
  Barnala: [30.3819, 75.5465],
  Jalandhar: [31.326, 75.5762],
  Firozpur: [30.9331, 74.6223],
  Ajmer: [26.4499, 74.6399],
  Jaipur: [26.9124, 75.7873],
  Jodhpur: [26.2389, 73.0243],
  Udaipur: [24.5854, 73.7125],
  Kota: [25.2138, 75.8648],
  Gurugram: [28.4595, 77.0266],
  Karnal: [29.6857, 76.9905],
  Faridabad: [28.4089, 77.3178],
  Ambala: [30.3752, 76.7821],
  Sonipat: [28.9931, 77.0151],
  Bhopal: [23.2599, 77.4126],
  Indore: [22.7196, 75.8577],
  Gwalior: [26.2183, 78.1828],
  Jabalpur: [23.1815, 79.9864],
  Ujjain: [23.1765, 75.7885],
  Agra: [27.1767, 78.0081],
  Lucknow: [26.8467, 80.9462],
  Meerut: [28.9845, 77.7064],
  Noida: [28.5355, 77.391],
  Varanasi: [25.3176, 82.9739],
  Dehradun: [30.3165, 78.0322],
  Haridwar: [29.9457, 78.1642],
  Almora: [29.5892, 79.6467],
  Auli: [30.527, 79.566],
  Rishikesh: [30.0869, 78.2676],
  Guwahati: [26.1445, 91.7362],
  Dibrugarh: [27.4728, 94.912],
  Jorhat: [26.7509, 94.2037],
  Tezpur: [26.6338, 92.8],
  Silchar: [24.8333, 92.7789],
  Bhubaneswar: [20.2961, 85.8245],
  Cuttack: [20.4625, 85.8829],
  Brahmapur: [19.315, 84.7941],
  Raurkela: [22.2604, 84.8536],
  Sambalpur: [21.4669, 83.9812],
  Puri: [19.8135, 85.8312],
  Hyderabad: [17.385, 78.4867],
  Karimnagar: [18.4386, 79.1288],
  Ramagundam: [18.759, 79.5134],
  Mahabubnagar: [16.7488, 77.9855],
  Siddipet: [18.1018, 78.8522],
  Suryapet: [17.15, 79.6167],
  Adilabad: [19.6641, 78.532],
  Chennai: [13.0827, 80.2707],
  Coimbatore: [11.0168, 76.9558],
  Coonoor: [11.35, 76.8167],
  Kanyakumari: [8.0883, 77.5385],
  Madurai: [9.9252, 78.1198],
  Rameswaram: [9.2876, 79.3129],
  Thanjavur: [10.787, 79.1378],
  Tiruchirappalli: [10.7905, 78.7047],
  Vadodara: [22.3072, 73.1812],
  Dwarka: [22.2442, 68.9685],
  Gandhinagar: [23.2156, 72.6369],
  Ahmedabad: [23.0225, 72.5714],
  Surat: [21.1702, 72.8311],
  Rajkot: [22.3039, 70.8022],
  Junagadh: [21.5222, 70.4579],
  Jamnagar: [22.4707, 70.0577],
  Porbandar: [21.6417, 69.6293],
  Pune: [18.5204, 73.8567],
  Solapur: [17.6599, 75.9064],
  Kolhapur: [16.705, 74.2433],
  Nagpur: [21.1458, 79.0882],
  Aurangabad: [19.8762, 75.3433],
  Mumbai: [19.076, 72.8777],
  Ahmednagar: [19.0948, 74.748],
  Shirdi: [19.7645, 74.4762],
  Nashik: [19.9975, 73.7898],
  Latur: [18.4088, 76.5604],
  Akola: [20.7002, 77.0082],
  Thiruvananthapuram: [8.5241, 76.9366],
  Kozhikode: [11.2588, 75.7804],
  Thrissur: [10.5276, 76.2144],
  Kochi: [9.9312, 76.2673],
  Kannur: [11.8745, 75.3704],
  Kottayam: [9.5916, 76.5222],
  Kasaragod: [12.4996, 74.9869],
  Valanchery: [10.8833, 76.0667],
  Amaravati: [16.541, 80.515],
  Nellore: [14.4426, 79.9865],
  Chittoor: [13.2172, 79.1003],
  Eluru: [16.7107, 81.0952],
  Guntur: [16.3067, 80.4365],
  Tirupati: [13.6288, 79.4192],
  Kurnool: [15.8281, 78.0373],
  Vijayawada: [16.5062, 80.648],
  Visakhapatnam: [17.6868, 83.2185],
  Bangalore: [12.9716, 77.5946],
  Mysuru: [12.2958, 76.6394],
  Mangaluru: [12.9141, 74.856],
  Udupi: [13.3409, 74.7421],
  Hubballi: [15.3647, 75.124],
  Dharwad: [15.4589, 75.0078],
  "Uttara Kannada": [14.8184, 74.6299],
  Kolkata: [22.5726, 88.3639],
  Asansol: [23.6739, 86.9524],
  Siliguri: [26.7271, 88.3953],
  Durgapur: [23.5204, 87.3119],
  Kharagpur: [22.346, 87.232],
  "Cooch Behar": [26.3239, 89.4529],
  Shantipur: [23.25, 88.43],
  Krishnanagar: [23.4058, 88.4909],
  Medinipur: [22.4309, 87.3215]
};

export const TESTIMONIALS_DATA = [
  {
    id: 1,
    clientName: "Rajesh S. Kulkarni",
    title: "Vice President - Global Workplace Operations",
    company: "Tier-1 IT Multinational (Pune Hinjawadi)",
    rating: 5,
    quote: "Parveen Fleets has transformed our employee commute. Transitioning 3,500 daily employees to their tech-driven platform resulted in zero missed shifts, 99.8% on-time performance, and unprecedented safety reviews from our female staff.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 2,
    clientName: "Sunita Deshmukh",
    title: "Director - Human Resources & Workplace Safety",
    company: "Global Financial Services Institution (Mumbai BKC)",
    rating: 5,
    quote: "The safety standards of Parveen Fleets are truly world-class. In an era where employee night safety and PoSH compliance are paramount, their dual telematics, live escort guards, and safe reach OTP authentication give us complete peace of mind.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80"
  },
  {
    id: 3,
    clientName: "Vikram Malhotra",
    title: "Head of Corporate Administration",
    company: "Automotive Conglomerate (Delhi NCR & Pune)",
    rating: 5,
    quote: "From Toyota Innova Hycross VIP rentals for visiting global board members to 40-seater luxury coaches for plant visits, Parveen Fleets consistently delivers gold-standard professionalism. Their billing is 100% transparent with zero discrepancies.",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80"
  }
];

export const CLIENT_LOGOS = [
  { name: "Tata Motors", logo: "/clients/tata-motors.svg" },
  { name: "Infosys", logo: "/clients/infosys.svg" },
  { name: "Wipro", logo: "/clients/wipro.svg" },
  { name: "Tech Mahindra", logo: "/clients/tech-mahindra.png" },
  { name: "Cognizant", logo: "/clients/cognizant.svg" },
  { name: "Amazon", logo: "/clients/amazon.svg" },
  { name: "Accenture", logo: "/clients/accenture.svg" },
  { name: "L&T Infotech", logo: "/clients/lt-infotech.svg" },
  { name: "Reliance", logo: "/clients/reliance.svg" },
  { name: "Capgemini", logo: "/clients/capgemini.svg" },
  { name: "HCL Tech", logo: "/clients/hcl-tech.svg" },
  { name: "Persistent", logo: "/clients/persistent.svg" }
];

export const INITIAL_LEADS = [
  {
    id: "PF-LEAD-101",
    name: "Arun Mehra",
    company: "Capgemini India",
    phone: "+91 98220 11442",
    email: "arun.mehra@capgemini.com",
    service: "Employee Transportation",
    city: "Pune",
    fleetSize: "45 Cabs Daily",
    status: "New",
    date: "2026-10-21",
    message: "Requirement for 45 Innova Hycross and Dzire cabs for night shift commute in Hinjawadi Phase 3."
  },
  {
    id: "PF-LEAD-102",
    name: "Pooja Varma",
    company: "Barclays Global Services",
    phone: "+91 98490 88219",
    email: "pooja.v@barclays.com",
    service: "Corporate Cab Services",
    city: "Mumbai",
    fleetSize: "15 Executive Sedans",
    status: "In Discussion",
    date: "2026-10-20",
    message: "Seeking dedicated Ciaz and Hycross rentals for senior executive travel between BKC and Airport."
  },
  {
    id: "PF-LEAD-103",
    name: "Karan Singhal",
    company: "Deloitte Digital",
    phone: "+91 99100 44521",
    email: "ksinghal@deloitte.com",
    service: "Bus & Coach Rentals",
    city: "Delhi NCR",
    fleetSize: "4 Volvo Coaches",
    status: "Proposal Sent",
    date: "2026-10-19",
    message: "Need 4 Volvo multi-axle coaches for our 3-day annual partner summit in Jaipur from Delhi."
  },
  {
    id: "PF-LEAD-104",
    name: "Deepak Nair",
    company: "Qualcomm India",
    phone: "+91 97010 33281",
    email: "dnair@qualcomm.com",
    service: "Shuttle Services",
    city: "Hyderabad",
    fleetSize: "8 Tempo Travellers",
    status: "Won",
    date: "2026-10-18",
    message: "Point to point shuttle service connecting Raidurg Metro to Hitec City campus every 15 minutes."
  }
];

export const INITIAL_BOOKINGS = [
  {
    id: "BK-8841",
    customer: "Infosys Technologies",
    service: "Employee Transportation",
    vehicle: "Toyota Innova Hycross (MH-12-PF-4021)",
    chauffeur: "Ramesh Pawar (+91 98223 44102)",
    pickup: "Pune Station",
    drop: "Hinjawadi Phase 2",
    dateTime: "2026-10-22 18:30",
    status: "In Progress",
    amount: "₹3,800"
  },
  {
    id: "BK-8842",
    customer: "Wipro Enterprises",
    service: "Airport Transfer",
    vehicle: "Suzuki Ciaz (MH-02-PF-1190)",
    chauffeur: "Suresh Shinde (+91 97654 11203)",
    pickup: "Mumbai T2 International",
    drop: "BKC Sofitel",
    dateTime: "2026-10-22 20:15",
    status: "Confirmed",
    amount: "₹2,400"
  },
  {
    id: "BK-8843",
    customer: "Tata Consulting",
    service: "Luxury Car Rental",
    vehicle: "Mercedes E-Class (DL-01-PF-9009)",
    chauffeur: "Mohd. Aslam (+91 98110 55412)",
    pickup: "Aerocity, New Delhi",
    drop: "Embassy Row, Chanakyapuri",
    dateTime: "2026-10-23 09:00",
    status: "Assigned",
    amount: "₹7,500"
  },
  {
    id: "BK-8844",
    customer: "Cognizant Solutions",
    service: "Bus & Coach Rental",
    vehicle: "Volvo 9600 Coach (TS-09-PF-7788)",
    chauffeur: "K. Venkatesh (+91 99887 66554)",
    pickup: "Hitec City Campus",
    drop: "Golconda Resort",
    dateTime: "2026-10-24 07:00",
    status: "Pending",
    amount: "₹18,500"
  }
];

export const INITIAL_BLOGS = [
  {
    id: "blog-1",
    title: "The Future of Corporate Commute: How AI Telematics & Smart Rostering Reduce Carbon Footprints",
    category: "Corporate Transport",
    readTime: "5 min read",
    date: "October 18, 2026",
    summary: "Discover how automated routing algorithms and dynamic fleet allocation decrease corporate transport operational costs by 22% while eliminating idle emissions.",
    author: "Vajid Mirza (Managing Director)",
    content: "Corporate transportation in 2026 is no longer just about moving employees from point A to point B. It is an intricate technology discipline that impacts employee satisfaction, safety compliance, and corporate ESG scores. At Parveen Fleets, our proprietary telematics platform calculates predictive traffic models to cluster pickup routes seamlessly..."
  },
  {
    id: "blog-2",
    title: "Women's Safety in Corporate Night Shifts: Essential Protocols Every HR Head Must Demand",
    category: "Employee Safety",
    readTime: "7 min read",
    date: "October 14, 2026",
    summary: "From dual-redundant GPS monitoring to trained security marshals and Safe Reach OTP confirmations, here is our blueprint for foolproof female commuter safety.",
    author: "Parveen Safety Advisory Board",
    content: "Under PoSH guidelines and state factory regulations, corporations hold strict responsibility for female employee transit between 8 PM and 6 AM. Our protocol enforces zero-unattended drops, real-time geofence alarms triggered within 5 seconds of route variance, and mandatory verified physical escorts..."
  },
  {
    id: "blog-3",
    title: "Transitioning Enterprise Fleets to Hybrid & EV: A Practical ROI Guide for CFOs",
    category: "Fleet Management",
    readTime: "6 min read",
    date: "October 10, 2026",
    summary: "Why adopting Toyota Innova Hycross hybrids and electric campus shuttles improves corporate balance sheets through lower fuel surcharges and green enterprise tax incentives.",
    author: "Senior Fleet Strategy Team",
    content: "Fluctuating fuel tariffs present a major headache for procurement teams. By integrating hybrid electric powertrains with regenerative braking in urban stop-and-go corporate corridors, Parveen Fleets delivers average fuel efficiency gains exceeding 38%..."
  },
  {
    id: "blog-4",
    title: "Planning Flawless Transport Logistics for 1,000+ Delegate Corporate Summits",
    category: "Travel",
    readTime: "8 min read",
    date: "October 05, 2026",
    summary: "A step-by-step masterclass on coordinating multi-airport VIP arrivals, luxury coach corridors, and on-ground marshal command centers for major enterprise events.",
    author: "Events Operations Head",
    content: "When high-profile executives, investors, and international partners gather for an annual summit, transportation is their first and last brand impression. Learn how our dedicated control room manages 50+ coaches in synchronized convoy..."
  }
];

export const AI_KNOWLEDGE_BASE = [
  {
    keywords: ["price", "pricing", "cost", "rates", "rate", "quote", "charge", "tariff"],
    answer: "Our corporate rates are customized based on fleet type, volume, and tenure. Executive sedans like the Dzire/Ciaz start around ₹1,800 - ₹2,200 for 8hrs/80km. Toyota Innova Hycross is ₹3,800, and Luxury Coaches range from ₹4,500 to ₹14,000. For monthly corporate contracts with automated rostering, we offer high-volume discounted tariffs. Would you like me to connect you with our corporate sales head at +91 95458 99838?"
  },
  {
    keywords: ["employee", "transportation", "commute", "pickup", "drop", "roster", "staff"],
    answer: "Parveen Fleets specializes in turnkey Employee Transportation Services across India! We handle end-to-end pickup/drop, dynamic roster optimization, real-time GPS tracking, women safety protocols with escort guards, and unified digital billing. We currently transport 15,000+ employees daily for Fortune 500 tech and BFSI clients."
  },
  {
    keywords: ["fleet", "cars", "vehicles", "innova", "hycross", "dzire", "bus", "coach", "volvo", "traveller"],
    answer: "Our premium fleet includes: Suzuki Dzire & Ciaz (Sedans), Toyota Innova Hycross (Luxury Hybrid MPV), Mercedes E/S-Class & BMW (Executive VIP), Tempo Travellers (12/17/26 Seats), and Luxury Volvo Multi-Axle Coaches (45-53 Seats). All vehicles are equipped with dual GPS, air conditioning, and are under 3 years old."
  },
  {
    keywords: ["safety", "women", "night", "escort", "sos", "posh", "driver", "police"],
    answer: "Safety is our core pillar. We provide: 1) 24x7 Command Control Monitoring, 2) In-cab and mobile SOS emergency triggers, 3) Strict Women Safety protocols with verified security guards for late shifts, 4) 100% Police & Background-checked Chauffeurs, 5) Real-time route deviation & speed monitoring, and 6) Safe Reach OTP confirmation before trip closure."
  },
  {
    keywords: ["branch", "branches", "office", "pune", "mumbai", "delhi", "hyderabad", "location", "cities"],
    answer: "Our Head Office is in Pune (Viman Nagar). We have full-fledged Regional Hubs in Mumbai (BKC), Delhi NCR (Aerocity), and Hyderabad (Hitec City). Additionally, we provide operational fleet management across 112+ locations nationwide!"
  },
  {
    keywords: ["book", "booking", "hire", "reserve", "how to"],
    answer: "You can book easily in 3 ways: 1) Click 'Get Instant Quote' on our website and our team responds in 15 minutes, 2) Direct WhatsApp at +91 95458 99838, or 3) Call our 24x7 enterprise corporate hotline at +91 77440 00844."
  },
  {
    keywords: ["contact", "email", "phone", "number", "call", "whatsapp"],
    answer: "You can reach Parveen Fleets directly at:\n• Phone: +91 95458 99838 / +91 77440 00844\n• WhatsApp: https://wa.me/919545899838\n• Email: sales@parveenfleets.in / vajidmirza@parveenfleets.in\n• Head Office: Corporate Hub, Viman Nagar, Pune, Maharashtra 411014."
  }
];
