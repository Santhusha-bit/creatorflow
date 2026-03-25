# Creatorflow

AI-powered content pipeline for creators and entrepreneurs. Generate Instagram and YouTube content simultaneously for personal brand building or digital product selling.

## Tech Stack

- **React 18** + **Vite**
- **Anthropic Claude API**

## Project Structure

```
creatorflow/
├── src/
│   ├── App.jsx              # Root router + all shared data (steps, icons, stream helper)
│   ├── index.css            # Global design system
│   ├── main.jsx             # React entry point
│   ├── pages/
│   │   ├── Landing.jsx      # Marketing landing page
│   │   ├── ModeSelector.jsx # Choose: Personal Brand or Sell a Product
│   │   └── Pipeline.jsx     # 7-step content generation app
│   └── components/
│       └── OutputCard.jsx   # Streaming output card (copy + export)
├── public/
│   └── favicon.svg
├── index.html
├── vite.config.js
├── package.json
└── .env.example
```

## Quick Start

### 1. Install dependencies

```bash
cd creatorflow
npm install
```

### 2. Set up your API key

```bash
cp .env.example .env
```

Open `.env` and replace `your_api_key_here` with your Anthropic API key.
Get one at: https://console.anthropic.com/settings/keys

### 3. Run the dev server

```bash
npm run dev
```

The app opens at **http://localhost:3000**

## Build for Production

```bash
npm run build
npm run preview
```

## API Key Security

This app calls the Anthropic API directly from the browser (using the `anthropic-dangerous-direct-browser-calls` header). This is fine for local development and personal use, but **do not deploy this publicly** with your API key exposed in the frontend.

For a production deployment, add a backend proxy:
- **Next.js**: Add an API route in `/pages/api/generate.js`
- **Express**: Proxy `/api/generate` to the Anthropic API with your key in the server environment
- **Vercel Edge Functions**: Same pattern

## Pipelines

### Personal Brand (7 steps)
1. Brand Identity Builder
2. Profile & Bio Optimizer
3. Content Strategy Planner
4. Hook & Caption Writer
5. Video & Reel Scriptwriter
6. Community & Engagement Engine
7. Monetization Roadmap

### Sell a Product (7 steps)
1. Product Idea Generator
2. Product Outline Builder
3. Seller Profile Optimizer
4. Sales Content Machine
5. Sales Copy Writer
6. Story Selling Script
7. Buyer Engagement Sequence

Each step generates content for **Instagram**, **YouTube**, or **both simultaneously**.
