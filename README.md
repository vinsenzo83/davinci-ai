# DaVinci AI — AI Agent Creative Platform

> The world's first AI agent creative platform on Web3.  
> Generate art, video, music, code & NFTs. Earn `$DAVINCI` tokens on BNB Chain.

---

## 🌐 Live URLs

| Environment | URL |
|---|---|
| **Sandbox (Dev)** | https://4000-ifclimfdh50ocesbammad-cbeee0f9.sandbox.novita.ai |
| **GitHub** | https://github.com/vinsenzo83/davinci-ai |
| **Twitter / X** | https://x.com/DaVinciAiZ |
| **Telegram** | https://t.me/DaVinciAiZ |

---

## 🎯 Project Overview

**DaVinci AI** is a Web3-native AI agent creative platform built on **BNB Chain**. Users access 15+ specialized AI agents for art, video, music, writing, code, and NFT generation — all integrated into a single platform, rewarded with `$DAVINCI` tokens.

### Core Concept
- **AI Agent Studio** — 15+ purpose-built AI agents, each optimized for its domain
- **NFT Marketplace** — Mint, trade, and collect AI-generated NFTs on BNB Chain
- **Creator Game Hub** — AI art battles, leaderboards, and `$DAVINCI` prize pools
- **DAO Governance** — Token holders vote on new agents, treasury, and platform direction

---

## ✅ Completed Features

### Pages
| Page | Route | Status |
|---|---|---|
| Home (Landing) | `/` | ✅ Live |
| AI Agents Marketplace | `/agents` | ✅ Live |
| AI Image Studio | `/create/image` | ✅ Live |
| AI Video Lab | `/create/video` | ✅ Live |
| Whitepaper | `/whitepaper` | ✅ Live |
| My Page | `/mypage` | ✅ Live |
| Login / Wallet | `/login` | ✅ Live |

### Homepage Sections (13 sections)
| # | Section | ID |
|---|---|---|
| 1 | Hero — AI Agent Studio | — |
| 2 | Trust Bar — Platform Stats | — |
| 3 | X/Twitter Community | — |
| 4 | Featured AI Agents | `#agents` |
| 5 | How It Works | — |
| 6 | Ecosystem — Four Pillars | `#ecosystem` |
| 7 | About / Features (9 cards) | `#about` |
| 8 | Tokenomics & Value Architecture | `#tokenomics` |
| 9 | Vesting Schedule + Monthly Table | — |
| 10 | Roadmap 2025–2027 | `#roadmap` |
| 11 | Core Team + Extended Team | `#team` |
| 12 | Partners (24 partners, 3 categories) | `#partners` |
| 13 | FAQ (7 items) | — |
| 14 | CTA — Creative Revolution | — |

---

## 💎 Tokenomics

| Item | Value |
|---|---|
| **Token Name** | $DAVINCI |
| **Total Supply** | 8,888,888,888 |
| **Network** | BNB Chain (BEP-20) |
| **TGE Date** | Q4 2025 |
| **DEX Listing** | PancakeSwap |

### Token Allocation

| Allocation | % | Amount | TGE Unlock | Cliff | Vesting |
|---|---|---|---|---|---|
| Community Rewards | 45% | 4,000,000,000 | 5% | 3 months | 60 months |
| Strategic Investors | 15% | 1,333,333,333 | 10% | 9 months | 36 months |
| Ecosystem & Marketing | 13% | 1,155,555,555 | 8% | 6 months | 42 months |
| Team & Core Dev | 12% | 1,066,666,666 | 0% | 18 months | 48 months |
| Treasury & Foundation | 10% | 888,888,888 | 0% | 12 months | 60 months |
| Artist Fund | 5% | 444,444,444 | 10% | 0 months | 36 months |

---

## 🤝 Partners (24 total)

### AI Models
OpenAI · Midjourney · Stable Diffusion · Runway ML · KlingAI · HeyGen · Suno · ElevenLabs

### Web3 & Infrastructure
BNB Chain · PancakeSwap · OpenSea · Chainlink · IPFS · MetaMask · WalletConnect · Etherscan

### Creative Tools
Wrtn.AI · Replicate · Hugging Face · Anthropic · LangChain · Pinecone · AWS · Cloudflare

---

## 👥 Team

### Core Team
| Name | Role |
|---|---|
| Leonardo Chen | CEO & Co-Founder |
| Aria Nakamoto | CTO & Co-Founder |
| Marcus Rivera | Chief Creative Officer |
| Yuki Tanaka | Head of Partnerships |

### Extended Team
James Park (Smart Contract) · Sofia Mendes (AI Engineer) · Ryan O'Brien (Community) · Mei Lin (Product Design) · David Kwon (Backend) · Lena Müller (Marketing)

---

## 🗺️ Roadmap

| Phase | Period | Status | Milestone |
|---|---|---|---|
| Phase 1 | Q1–Q2 2025 | ✅ Completed | Genesis & Foundation |
| Phase 2 | Q3–Q4 2025 | 🔄 In Progress | Agent Platform Launch & TGE |
| Phase 3 | Q1–Q2 2026 | ⏳ Upcoming | Ecosystem Expansion |
| Phase 4 | Q3–Q4 2026 | ⏳ Upcoming | Multi-Chain & Scale |
| Phase 5 | 2027+ | 🔮 Future | The Renaissance Protocol |

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| **Runtime** | Cloudflare Pages + Workers (Edge) |
| **Framework** | Hono v4 (TypeScript) |
| **Frontend** | Vanilla HTML/CSS/JS · Tailwind CDN |
| **Charts** | Chart.js (Tokenomics Doughnut + Vesting Line) |
| **Icons** | FontAwesome 6.4 |
| **Fonts** | Space Grotesk · Poppins (Google Fonts) |
| **Build** | Vite v6 + @hono/vite-cloudflare-pages |
| **Deploy** | Wrangler v4 (Cloudflare Pages) |
| **CI/CD** | GitHub → Cloudflare Pages |

---

## 📁 Project Structure

```
davinci-web/
├── src/
│   ├── index.tsx              # Hono app entry — all routes
│   ├── pages/
│   │   ├── layout.ts          # Global HTML shell (navbar, footer, CSS)
│   │   ├── home.ts            # Homepage (13 sections, ~1100 lines)
│   │   ├── whitepaper.ts      # Full whitepaper page
│   │   ├── create-image.ts    # AI Image Studio
│   │   ├── create-video.ts    # AI Video Lab
│   │   ├── mypage.ts          # User dashboard
│   │   └── login.ts           # Wallet connect
│   └── data/
│       ├── agent-data.ts      # 15 AI agent definitions + platform stats
│       └── gallery-data.ts    # Sample gallery data
├── public/
│   └── static/                # Static assets
├── dist/                      # Build output (Cloudflare Pages)
├── ecosystem.config.cjs       # PM2 config (sandbox dev)
├── wrangler.jsonc             # Cloudflare Workers config
├── vite.config.ts             # Vite build config
└── package.json
```

---

## 🚀 Development

### Prerequisites
- Node.js 18+
- npm 9+

### Local Setup
```bash
git clone https://github.com/vinsenzo83/davinci-ai.git
cd davinci-ai
npm install
npm run build
```

### Run Dev Server (Sandbox / PM2)
```bash
pm2 start ecosystem.config.cjs
# → http://localhost:4000
```

### Run Dev Server (Local Machine)
```bash
npm run dev
# → http://localhost:5173
```

### Build for Production
```bash
npm run build
# → dist/_worker.js (~292 kB)
```

### Deploy to Cloudflare Pages
```bash
npm run deploy
# Requires CLOUDFLARE_API_TOKEN
```

---

## 📱 Responsive Breakpoints

| Breakpoint | Width | Layout |
|---|---|---|
| Mobile S | < 400px | Single column, stacked buttons |
| Mobile | 400–639px | 2-column grids |
| Tablet | 640–1023px | 2–3 column grids |
| Desktop | 1024px+ | Full multi-column layout |

All sections use CSS Grid with `clamp()` padding — no horizontal scroll on any viewport.

---

## 🔧 Key Design Decisions

- **No Node.js APIs** — Pure Cloudflare Workers runtime (Web APIs only)
- **No heavy bundling** — CDN-loaded Tailwind, Chart.js, FontAwesome
- **Inline HTML templates** — TypeScript template literals for SSR-like rendering
- **CSS class-based responsive** — No inline Tailwind breakpoints (avoids CDN class conflicts)
- **Single `layout.ts` footer** — Prevents duplicate footer bug

---

## ⏳ Planned / Not Yet Implemented

- [ ] Real wallet connect (MetaMask / WalletConnect integration)
- [ ] Actual AI agent API calls (currently UI mockup)
- [ ] Real NFT minting flow (BNB Chain smart contract)
- [ ] DAO governance on-chain voting
- [ ] User authentication & dashboard data
- [ ] Mobile app (React Native — Phase 3)
- [ ] Multi-language support (EN/KO/ZH/JA)
- [ ] Real-time community stats via API

---

## 📄 License

© 2025 DaVinci AI. All rights reserved. Built on BNB Chain.  
`$DAVINCI` is not a security. Not financial advice.

---

*Last updated: 2026-03-01 | Version: 3.5.0*
