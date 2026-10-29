import '../index.css';
import Providers from './providers';

export const metadata = {
  title: "Parveen Fleets Pvt Ltd | India's Most Trusted Corporate Transportation Partner",
  description: 'Technology-driven employee transportation, corporate cab rentals, luxury bus rentals, airport transfers, and fleet solutions across India with 112+ operational hubs.',
  keywords: 'corporate transportation, employee transport services, cab rentals Pune, bus rental India, Parveen Fleets',
  icons: { icon: '/PARVEEN_FLEETS_NEW_LOGO-removebg-preview.png' }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Sora:wght@400;500;600;700;800&family=Space+Grotesk:wght@500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
