# Iskaashiga Biyogalinta Hargeysa

A modern, Somali-language landing page for the contributions management system at iskaashigabiyogalintahargeysa.com. This system enables neighborhood committees to track and manage contribution payments for water mains installation projects in collaboration with the Hargeisa Water Agency (Wakaaladda Biyaha Hargeysa).

## Features

- Somali language interface
- Responsive design for all devices
- Modern UI with Tailwind CSS
- Next.js 14+ with App Router
- TypeScript for type safety
- WhatsApp contact integration

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Installation

1. Install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install
```

2. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
website/
├── app/
│   ├── layout.tsx          # Root layout with Header and Footer
│   ├── page.tsx            # Main landing page
│   └── globals.css         # Global styles
├── components/              # React components
│   ├── Header.tsx          # Navigation component
│   ├── Hero.tsx            # Hero section
│   ├── AboutSection.tsx    # About the system
│   ├── HowItWorksSection.tsx  # How it works
│   ├── ContactSection.tsx  # Contact information
│   └── Footer.tsx          # Footer component
├── lib/
│   └── translations.ts     # Somali translation strings
└── public/                 # Static assets
```

## Building for Production

```bash
npm run build
npm start
```

## Technologies

- Next.js 14+
- React 18+
- TypeScript
- Tailwind CSS

## Contact

- Website: [iskaashigabiyogalintahargeysa.com](https://iskaashigabiyogalintahargeysa.com)
- Email: info@iskaashigabiyogalintahargeysa.com
- WhatsApp: +252 63 745 9344

## License

Private project for Iskaashiga Biyogalinta Hargeysa.
