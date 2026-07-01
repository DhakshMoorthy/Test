# Wrightfully Fit — Premium Website

Luxury wellness website for [Wrightfully Fit](https://www.wrightfullyfit.com/).

## Quick start

```bash
npm install
npm run dev:clean
```

Open **http://localhost:3000**

### If you see "Internal Server Error"

This is almost always a stale build cache. Run:

```bash
pkill -f "next"
npm run dev:clean
```

Or for production:

```bash
pkill -f "next"
npm run build:clean
npm start
```

## Production

```bash
npm run build
npm start
```

## Features

- Full-screen hero slider (4 slides) with brand banner design
- Sticky transparent navbar → solid white on scroll
- Official logo & merch from wrightfullyfit.com
- All homepage sections with Framer Motion animations
- Swiper carousels, glassmorphism, animated counters
- Instagram edge tab (peeks from right, slides open)
- Mobile-first, SEO-friendly, accessible

## Stack

Next.js 15 · React 19 · TypeScript · Tailwind CSS v4 · Framer Motion · Swiper.js
