# Toy Willa

Responsive React + TypeScript + Vite landing page for Toy Willa.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Netlify deployment

The project includes `netlify.toml` with:

- Build command: `npm run build`
- Publish directory: `dist`
- Node.js: 20

It also includes `public/_redirects` so SPA routes can be refreshed without a Netlify 404.

### WhatsApp configuration

Copy `.env.example` to `.env` and set the shop number:

```env
VITE_WHATSAPP_NUMBER=917400009218
```

Use the international number without `+`, spaces, or hyphens.

For Netlify, add the same variable under **Project configuration → Environment variables** before deploying.
