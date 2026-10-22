# Parveen Fleets Pvt Ltd

Premium corporate transportation website built with React 19 and Vite. The public site includes responsive service, safety, fleet, coverage, testimonials, blog, contact, and quote-request experiences.

## Run the website

```bash
npm install
npm run dev
```

Create a `.env.local` file when the Laravel API is available:

```env
VITE_API_BASE_URL=http://localhost:8000
```

Quote and booking inquiries are submitted to `POST /api/v1/leads` when `VITE_API_BASE_URL` is set. Without it, the site runs in local preview mode and stores inquiries in the current browser only; successful form messages clearly identify that mode. Do not deploy the local preview mode as a live lead-capture system.

## Preview behavior

- Service filters, fleet categories, the platform capability selector, and the SOS response walkthrough are interactive.
- Platform metrics and the SOS walkthrough are illustrative examples, not live fleet telemetry or emergency services.
- The chat assistant uses a local company-information knowledge base; it is not connected to an AI provider.
- The enterprise admin remains locked until the missing server-side authentication and authorization are implemented.

## Quality checks

```bash
npm run lint
npm run build
```

## Backend status

`backend-laravel/` contains Laravel API integration files, migrations, and setup notes, but is not currently a complete standalone Laravel application: it does not include `composer.json`, Laravel bootstrap/configuration, or the auth, booking, vehicle, and client controllers referenced by its routes. The lead API now persists inquiries using the supplied leads migration, but the full admin portal must not be exposed publicly until the missing Laravel application components and server-side authentication/authorization are implemented and tested.

## Deployment notes

- Set `VITE_API_BASE_URL` to the deployed API origin and configure CORS for the website origin.
- Serve the built `dist/` directory over HTTPS.
- `public/robots.txt` and `public/sitemap.xml` expose the public landing page for search crawlers.
- Replace sample client, testimonial, and dashboard content with approved company data before public launch.
