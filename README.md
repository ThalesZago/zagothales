# Personal Portfolio & Blog

A clean, minimalist personal portfolio and blog built with Next.js, TypeScript, Tailwind CSS, and MDX.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org) 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Content**: MDX files parsed with `gray-matter` and rendered via `next-mdx-remote`
- **Syntax highlighting**: `rehype-highlight` (atom-one-dark theme)
- **Fonts**: Geist Sans & Geist Mono (`next/font`)
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/portfolio
cd portfolio

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout (Navbar + Footer)
│   ├── page.tsx            # Home page
│   ├── about/page.tsx      # About page
│   ├── blog/
│   │   ├── page.tsx        # Blog post list
│   │   └── [slug]/page.tsx # Individual post
│   ├── projects/
│   │   ├── page.tsx        # Project grid
│   │   └── [slug]/page.tsx # Individual project
│   └── feed.xml/route.ts   # RSS feed
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   └── MDXContent.tsx      # MDX renderer with syntax highlighting
├── lib/
│   ├── posts.ts            # Post reading + frontmatter parsing
│   └── projects.ts         # Project reading + frontmatter parsing
└── content/
    ├── posts/              # Blog post MDX files
    └── projects/           # Project MDX files
```

## Adding Content

### New Blog Post

Create a file at `content/posts/my-post-title.mdx`:

```mdx
---
title: "My Post Title"
date: "2025-04-01"
excerpt: "A short summary shown in the post list."
tags: ["tag1", "tag2"]
---

Your content here...
```

### New Project

Create a file at `content/projects/my-project.mdx`:

```mdx
---
title: "My Project"
description: "A short description shown on the project card."
tags: ["React", "TypeScript"]
github: "https://github.com/yourusername/my-project"
demo: "https://my-project.vercel.app"
date: "2025-04-01"
---

## Overview

Your project details here...
```

## Personalizing

1. **Name & bio**: update `app/page.tsx`, `app/about/page.tsx`, `app/layout.tsx`
2. **Social links**: update `components/Navbar.tsx`, `components/Footer.tsx`, and `app/page.tsx`
3. **Accent color**: change `--accent` in `app/globals.css`
4. **Site URL (RSS)**: set the `NEXT_PUBLIC_SITE_URL` environment variable

## Environment Variables

| Variable | Description | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Full URL of your deployed site | `https://yourdomain.com` |

## Deployment

This project is ready to deploy on [Vercel](https://vercel.com):

1. Push to GitHub
2. Import the repository on vercel.com
3. Set `NEXT_PUBLIC_SITE_URL` in project settings
4. Deploy

## License

MIT


## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
