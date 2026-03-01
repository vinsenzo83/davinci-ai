import { layout } from './layout'

const wpContent = `
<div style="min-height:100vh;background:#080C14;">

  <!-- ===== HERO ===== -->
  <section style="padding:80px 0 60px;background:linear-gradient(135deg,#05080F,#0B1525);border-bottom:1px solid rgba(255,255,255,.06);position:relative;overflow:hidden;">
    <div style="position:absolute;inset:0;background-image:linear-gradient(rgba(0,216,255,.03) 1px,transparent 1px),linear-gradient(90deg,rgba(0,216,255,.03) 1px,transparent 1px);background-size:50px 50px;"></div>
    <div class="max-w-5xl mx-auto px-6 text-center" style="position:relative;z-index:2;">
      <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(0,216,255,.08);border:1px solid rgba(0,216,255,.2);border-radius:50px;padding:8px 22px;margin-bottom:24px;">
        <i class="fas fa-file-alt" style="color:#00D8FF;font-size:.85rem;"></i>
        <span style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.08em;">OFFICIAL WHITEPAPER v2.0 · 2025</span>
      </div>
      <h1 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(2.2rem,5vw,4rem);margin-bottom:16px;">
        DaVinci AI <span class="gradient-text">Whitepaper</span>
      </h1>
      <p style="font-size:1.05rem;color:rgba(253,253,253,.55);max-width:640px;margin:0 auto 32px;line-height:1.8;">
        A comprehensive technical and economic framework for the world's first AI-native Web3 creative intelligence platform.
      </p>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:12px;">
        <a href="https://github.com/vinsenzo83/davinci-ai" target="_blank" class="btn-primary" style="padding:12px 28px;"><i class="fab fa-github"></i> View on GitHub</a>
        <a href="#toc" class="btn-outline" style="padding:11px 28px;"><i class="fas fa-list"></i> Table of Contents</a>
      </div>
    </div>
  </section>

  <!-- ===== MAIN LAYOUT ===== -->
  <div class="max-w-7xl mx-auto px-6 py-12">
    <div class="grid lg:grid-cols-4 gap-8">

      <!-- ===== SIDEBAR ===== -->
      <aside style="position:sticky;top:90px;height:fit-content;" id="toc">
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:24px;">
          <h3 style="font-size:.8rem;color:rgba(255,255,255,.4);font-weight:700;letter-spacing:.1em;margin-bottom:16px;">TABLE OF CONTENTS</h3>
          <nav>
            <ul style="list-style:none;display:flex;flex-direction:column;gap:4px;">
              ${[
                {id:'exec-summary', title:'1. Executive Summary'},
                {id:'introduction', title:'2. Introduction & Vision'},
                {id:'problem', title:'3. The Problem We Solve'},
                {id:'solution', title:'4. DaVinci AI Solution'},
                {id:'ecosystem', title:'5. Platform Ecosystem'},
                {id:'technology', title:'6. Technology Architecture'},
                {id:'tokenomics', title:'7. Tokenomics ($DAVINCI)'},
                {id:'vesting', title:'8. Vesting Schedule'},
                {id:'governance', title:'9. DAO Governance'},
                {id:'roadmap', title:'10. Roadmap 2025–2027'},
                {id:'team', title:'11. Team & Advisors'},
                {id:'legal', title:'12. Legal Disclaimer'},
              ].map(item=>`
                <li>
                  <a href="#${item.id}" style="display:block;padding:8px 12px;border-radius:8px;font-size:.82rem;color:rgba(255,255,255,.5);text-decoration:none;transition:all .2s;" onmouseover="this.style.background='rgba(0,216,255,.08)';this.style.color='#00D8FF'" onmouseout="this.style.background='transparent';this.style.color='rgba(255,255,255,.5)'">${item.title}</a>
                </li>
              `).join('')}
            </ul>
          </nav>
          <div style="margin-top:20px;padding:14px;background:rgba(0,216,255,.06);border-radius:12px;border:1px solid rgba(0,216,255,.15);">
            <div style="font-size:.72rem;color:rgba(255,255,255,.4);margin-bottom:4px;">Version</div>
            <div style="font-size:.88rem;font-weight:700;color:#00D8FF;">v2.0 — March 2025</div>
          </div>
        </div>
      </aside>

      <!-- ===== CONTENT ===== -->
      <article style="grid-column:span 3;display:flex;flex-direction:column;gap:48px;">

        <!-- 1. Executive Summary -->
        <section id="exec-summary">
          <div style="border-left:3px solid #00D8FF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#00D8FF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 01</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Executive Summary</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:16px;">
            <p>DaVinci AI is a Web3-native AI creative intelligence platform that merges the boundless potential of artificial intelligence with the immutable ownership guarantees of blockchain technology. Inspired by Leonardo da Vinci — the original polymath who transcended boundaries between art and science — DaVinci AI empowers a new generation of digital creators to generate, own, trade, and govern AI-powered art.</p>
            <p>Operating on BNB Chain, DaVinci AI introduces the <strong style="color:#00D8FF;">$DAVINCI token</strong> (BEP-20) as the native utility and governance token of its ecosystem. With a fixed total supply of <strong style="color:#00D8FF;">8,888,888,888 tokens</strong>, $DAVINCI powers all transactions, rewards, staking, and governance votes within the platform.</p>
            <div style="background:rgba(0,216,255,.06);border:1px solid rgba(0,216,255,.15);border-radius:16px;padding:24px;">
              <h4 style="font-weight:700;color:#00D8FF;margin-bottom:12px;"><i class="fas fa-star" style="margin-right:8px;"></i>Key Metrics</h4>
              <div class="grid md:grid-cols-3 gap-4">
                ${[
                  {label:'Total Supply',val:'8,888,888,888 DAVINCI'},
                  {label:'Blockchain',val:'BNB Chain (BEP-20)'},
                  {label:'TGE',val:'Q4 2025'},
                  {label:'Community Allocation',val:'45% (4B tokens)'},
                  {label:'Vesting Period',val:'3–5 years'},
                  {label:'Target Ecosystem',val:'Global AI Creators'},
                ].map(m=>`
                  <div style="background:rgba(255,255,255,.03);border-radius:10px;padding:14px;">
                    <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-bottom:4px;">${m.label}</div>
                    <div style="font-size:.9rem;font-weight:700;color:#FDFDFD;">${m.val}</div>
                  </div>
                `).join('')}
              </div>
            </div>
          </div>
        </section>

        <!-- 2. Introduction -->
        <section id="introduction">
          <div style="border-left:3px solid #A86BFF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#A86BFF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 02</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Introduction & Vision</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:16px;">
            <p>The convergence of Artificial Intelligence and blockchain technology represents one of the most profound shifts in human creative history. For the first time, machines can collaborate with humans to produce art that transcends individual capability — and blockchain ensures that ownership of such art is inviolable, transparent, and permanent.</p>
            <p>Yet today's AI art platforms exist in isolated silos: centralized servers that can be shut down overnight, opaque algorithms that extract value from creators, and no mechanism for artists to participate in the economic upside they generate. DaVinci AI was built to change this.</p>
            <h3 style="font-weight:700;font-size:1.1rem;color:#FDFDFD;margin-top:8px;">Our Vision</h3>
            <p>To build a decentralized, AI-powered creative economy where <strong style="color:#A86BFF;">every artist owns their work</strong>, every creation can be monetized, and the platform is governed by the community it serves.</p>
            <blockquote style="border-left:3px solid #A86BFF;padding:16px 20px;background:rgba(168,107,255,.06);border-radius:0 12px 12px 0;font-style:italic;font-size:.95rem;color:rgba(253,253,253,.8);">
              "Where Art Thinks. Intelligence Meets Imagination."<br>
              <span style="font-size:.8rem;color:rgba(255,255,255,.4);font-style:normal;">— DaVinci AI Core Principle</span>
            </blockquote>
          </div>
        </section>

        <!-- 3. Problem -->
        <section id="problem">
          <div style="border-left:3px solid #00D8FF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#00D8FF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 03</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">The Problem We Solve</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:20px;">
            <p>The current AI art landscape suffers from three fundamental structural flaws that DaVinci AI is uniquely positioned to resolve:</p>
            <div class="grid md:grid-cols-3 gap-4">
              ${[
                { icon:'fas fa-lock', title:'Centralization Risk', color:'#FF6B6B', desc:'Major AI art platforms (Midjourney, DALL-E) operate on centralized servers. A single policy change, shutdown, or ban can erase years of creative work and economic value.' },
                { icon:'fas fa-hand-holding-dollar', title:'Creator Exploitation', color:'#FFB347', desc:'Platforms profit from creator-generated training data while artists receive minimal compensation. The economic value flows upward to corporations, not creators.' },
                { icon:'fas fa-question-circle', title:'Ownership Opacity', color:'#98D8FF', desc:'AI-generated works exist in a legal and technical gray zone. Provenance, attribution, and ownership rights are unclear, making monetization unreliable.' },
              ].map(p=>`
                <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:20px;">
                  <i class="${p.icon}" style="font-size:1.5rem;color:${p.color};margin-bottom:12px;display:block;"></i>
                  <h4 style="font-weight:700;font-size:.95rem;margin-bottom:8px;">${p.title}</h4>
                  <p style="font-size:.83rem;color:rgba(253,253,253,.55);line-height:1.7;">${p.desc}</p>
                </div>
              `).join('')}
            </div>
            <p>According to a 2024 market analysis, the global AI art market is projected to reach <strong style="color:#00D8FF;">$8.5 billion by 2028</strong>, yet less than 3% of that value is returned to individual creators. DaVinci AI flips this model entirely.</p>
          </div>
        </section>

        <!-- 4. Solution -->
        <section id="solution">
          <div style="border-left:3px solid #A86BFF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#A86BFF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 04</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">The DaVinci AI Solution</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:16px;">
            <p>DaVinci AI introduces a four-layer solution architecture that addresses each identified problem:</p>
            <div style="display:flex;flex-direction:column;gap:12px;">
              ${[
                { num:'01', title:'Decentralized AI Model Access Layer', color:'#00D8FF', desc:'API aggregation layer connects to Midjourney, DALL-E 3, Stable Diffusion XL, KlingAI, HeyGen, Wrtn.AI, and Nouvo.AI through a unified interface. Smart routing selects optimal models based on prompt type, cost, and performance.' },
                { num:'02', title:'On-Chain Provenance & Ownership Layer', color:'#A86BFF', desc:'Every AI generation is cryptographically signed, timestamped, and anchored to BNB Chain. NFT minting creates immutable proof of creation, ownership history, and creator attribution via BEP-721 and BEP-1155 standards.' },
                { num:'03', title:'Creator Economy Layer', color:'#00D8FF', desc:'$DAVINCI token enables direct creator monetization: platform rewards for generation quality, NFT marketplace royalties (5–10%), staking yields, referral bonuses, and DAO participation incentives.' },
                { num:'04', title:'Community Governance Layer', color:'#A86BFF', desc:'DaVinci DAO uses quadratic voting to prevent plutocracy. $DAVINCI holders propose and vote on platform upgrades, treasury allocations, AI model additions, fee structures, and partnership decisions.' },
              ].map(s=>`
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:20px;display:flex;gap:16px;">
                  <div style="font-family:'Poppins',sans-serif;font-weight:900;font-size:1.8rem;color:${s.color};opacity:.3;flex-shrink:0;line-height:1;">${s.num}</div>
                  <div>
                    <h4 style="font-weight:700;font-size:.95rem;margin-bottom:8px;color:${s.color};">${s.title}</h4>
                    <p style="font-size:.85rem;color:rgba(253,253,253,.6);line-height:1.7;">${s.desc}</p>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 5. Ecosystem -->
        <section id="ecosystem">
          <div style="border-left:3px solid #00D8FF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#00D8FF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 05</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Platform Ecosystem</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:20px;">
            ${[
              { title:'5.1 DaVinci Game Hub', icon:'fas fa-gamepad', color:'#00D8FF', content:'The Game Hub is a competitive creative arena where AI art meets blockchain gaming. Players compete in daily, weekly, and monthly challenges using $DAVINCI tokens as entry fees and prizes. Features include: Real-time AI art battles (PvP prompt challenges), Community voting on winners via DAO, Seasonal leaderboards with $DAVINCI prize pools, Genesis NFT badges for top performers, Play-to-Earn mechanics with transparent reward distribution, Guilds and team-based creation competitions.' },
              { title:'5.2 AI Atelier', icon:'fas fa-palette', color:'#A86BFF', content:'The AI Atelier is DaVinci AI\'s flagship creative studio. It provides access to a curated selection of the world\'s best AI generation models through a unified, intuitive interface. Key features: Multi-model parallel generation (compare outputs from different models), Style presets and community-shared prompt libraries, Batch generation with variation controls, High-resolution upscaling (up to 4K), Inpainting and outpainting tools, Style transfer between user NFTs, Collaborative creation with real-time multiplayer canvas.' },
              { title:'5.3 NFT Renaissance Marketplace', icon:'fas fa-gem', color:'#00D8FF', content:'The NFT Renaissance Marketplace is a curated marketplace purpose-built for AI-generated art. Unlike generic NFT platforms, every listing on DaVinci AI carries full AI provenance metadata. Features: Instant BEP-20 NFT minting (BEP-721 and BEP-1155), AI model attribution on every NFT, Creator royalty enforcement (5–10% perpetual), Curated collections and artist spotlights, Auction, fixed price, and offers mechanisms, Bundle listings for collections, Secondary market analytics dashboard.' },
              { title:'5.4 DaVinci Rewards System', icon:'fas fa-trophy', color:'#A86BFF', content:'The DaVinci Rewards System distributes 45% of total token supply (4 billion $DAVINCI) to community participants over 36 months. Reward categories include: Creation Rewards (generate AI art → earn tokens), Quality Bonuses (community upvotes → earn multipliers), Curation Rewards (discover trending works early → earn), Staking Yields (lock $DAVINCI → earn APY), Referral Program (bring creators → earn % of their earnings), DAO Governance (vote on proposals → earn participation rewards).' },
            ].map(s=>`
              <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
                  <div style="width:40px;height:40px;border-radius:10px;background:${s.color}18;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="${s.icon}" style="color:${s.color};font-size:1.1rem;"></i>
                  </div>
                  <h3 style="font-weight:700;font-size:1rem;">${s.title}</h3>
                </div>
                <p style="font-size:.87rem;color:rgba(253,253,253,.6);line-height:1.8;">${s.content}</p>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 6. Technology -->
        <section id="technology">
          <div style="border-left:3px solid #A86BFF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#A86BFF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 06</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Technology Architecture</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:20px;">
            <div style="background:rgba(0,216,255,.05);border:1px solid rgba(0,216,255,.15);border-radius:16px;padding:24px;font-family:monospace;font-size:.82rem;">
              <div style="color:#00D8FF;margin-bottom:12px;font-weight:700;">// DaVinci AI System Architecture</div>
              <div style="color:rgba(255,255,255,.6);">
                ┌─────────────────────────────────────────┐<br>
                │           FRONTEND LAYER                │<br>
                │  React/Next.js · TailwindCSS · Web3.js  │<br>
                ├─────────────────────────────────────────┤<br>
                │            API GATEWAY                  │<br>
                │  Hono · Cloudflare Workers · REST/WS    │<br>
                ├──────────────┬──────────────────────────┤<br>
                │  AI ENGINE   │    BLOCKCHAIN LAYER      │<br>
                │  Midjourney  │  BNB Chain (BEP-20/721)  │<br>
                │  DALL-E 3   │  Smart Contracts          │<br>
                │  Stable Diff │  IPFS/Filecoin Storage   │<br>
                │  KlingAI    │  The Graph Indexing       │<br>
                ├──────────────┴──────────────────────────┤<br>
                │           DATA LAYER                    │<br>
                │  D1 SQLite · KV Storage · R2 Objects    │<br>
                └─────────────────────────────────────────┘
              </div>
            </div>

            <div class="grid md:grid-cols-2 gap-4">
              ${[
                { title:'Smart Contract Stack', color:'#00D8FF', items:['$DAVINCI Token: BEP-20 standard','NFT: BEP-721 (unique) + BEP-1155 (editions)','Staking: Automated yield distribution','DAO: Governor Bravo compatible','Timelock: 48-hour execution delay','MultiSig: 5-of-9 treasury control'] },
                { title:'AI Integration Stack', color:'#A86BFF', items:['Unified API Gateway (load balancing)','Model performance scoring & routing','Prompt caching for cost efficiency','NSFW filtering & content moderation','Generation metadata anchoring','Watermarking via LSB steganography'] },
                { title:'Storage Architecture', color:'#00D8FF', items:['IPFS for immutable NFT assets','Filecoin for long-term archival','Cloudflare R2 for CDN delivery','D1 SQLite for platform metadata','KV for session & rate limit state','On-chain merkle roots for integrity'] },
                { title:'Security Measures', color:'#A86BFF', items:['Third-party smart contract audit','Bug bounty program ($500K pool)','Cold storage for 80% of treasury','Rate limiting & DDoS protection','Zero-knowledge proof integration (R&D)','Formal verification of core contracts'] },
              ].map(s=>`
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:20px;">
                  <h4 style="font-weight:700;font-size:.92rem;color:${s.color};margin-bottom:12px;">${s.title}</h4>
                  <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;">
                    ${s.items.map(i=>`<li style="font-size:.82rem;color:rgba(255,255,255,.6);display:flex;align-items:flex-start;gap:8px;"><i class="fas fa-check" style="color:${s.color};font-size:.7rem;margin-top:3px;flex-shrink:0;"></i>${i}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 7. Tokenomics -->
        <section id="tokenomics">
          <div style="border-left:3px solid #00D8FF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#00D8FF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 07</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Tokenomics ($DAVINCI)</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:20px;">
            <p>The $DAVINCI token is engineered for sustainable long-term value accrual. Its supply mechanics, allocation structure, and burn model are designed to incentivize creators while preventing inflationary pressure.</p>

            <!-- Token utility -->
            <h3 style="font-weight:700;font-size:1.1rem;color:#00D8FF;">7.1 Token Utility</h3>
            <div class="grid md:grid-cols-3 gap-4">
              ${[
                { icon:'fas fa-wand-magic-sparkles', title:'AI Generation Credits', desc:'$DAVINCI tokens are consumed as credits for premium AI model access, high-resolution generation, and batch processing.' },
                { icon:'fas fa-coins', title:'Staking & Yield', desc:'Stake $DAVINCI to earn platform fee revenue share. Longer lock periods yield higher APY (up to 24% APY for 12-month locks).' },
                { icon:'fas fa-vote-yea', title:'Governance Rights', desc:'1 $DAVINCI = 1 vote in DaVinci DAO. Quadratic voting prevents whale dominance. Delegation supported.' },
                { icon:'fas fa-fire', title:'Burn Mechanism', desc:'2% of all NFT marketplace transactions are permanently burned, creating deflationary pressure as platform volume grows.' },
                { icon:'fas fa-tag', title:'NFT Marketplace Fees', desc:'Pay marketplace fees in $DAVINCI for a 50% discount vs. BNB. Drives sustained token demand.' },
                { icon:'fas fa-gift', title:'Creator Rewards', desc:'45% of total supply distributed as creation rewards, quality bonuses, curation incentives, and referral commissions.' },
              ].map(u=>`
                <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:16px;">
                  <i class="${u.icon}" style="color:#00D8FF;margin-bottom:10px;display:block;"></i>
                  <h4 style="font-weight:700;font-size:.88rem;margin-bottom:6px;">${u.title}</h4>
                  <p style="font-size:.8rem;color:rgba(253,253,253,.5);line-height:1.65;">${u.desc}</p>
                </div>
              `).join('')}
            </div>

            <!-- Value accrual -->
            <h3 style="font-weight:700;font-size:1.1rem;color:#A86BFF;">7.2 Value Accrual Mechanism</h3>
            <div style="background:rgba(168,107,255,.06);border:1px solid rgba(168,107,255,.15);border-radius:14px;padding:20px;">
              <p style="font-size:.88rem;color:rgba(253,253,253,.7);line-height:1.8;">As the DaVinci AI platform grows:</p>
              <ul style="list-style:none;margin-top:10px;display:flex;flex-direction:column;gap:8px;">
                ${[
                  'More AI creations → more $DAVINCI consumed as credits',
                  'More NFT sales → more $DAVINCI burned (deflationary)',
                  'More staking → less circulating supply (reduced sell pressure)',
                  'More governance participation → stronger community alignment',
                  'More partners → more integration fees distributed to stakers',
                ].map(item=>`<li style="font-size:.85rem;color:rgba(253,253,253,.7);display:flex;align-items:flex-start;gap:10px;"><i class="fas fa-arrow-right" style="color:#A86BFF;font-size:.75rem;margin-top:3px;flex-shrink:0;"></i>${item}</li>`).join('')}
              </ul>
            </div>
          </div>
        </section>

        <!-- 8. Vesting -->
        <section id="vesting">
          <div style="border-left:3px solid #A86BFF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#A86BFF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 08</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Vesting Schedule</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:20px;">
            <p>All insider allocations are subject to strict vesting schedules to ensure long-term commitment and prevent market manipulation at launch.</p>
            <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;overflow:hidden;">
              <canvas id="wpVestingChart" height="100" style="padding:20px;"></canvas>
            </div>
            <div style="overflow-x:auto;">
              <table style="width:100%;border-collapse:collapse;font-size:.85rem;">
                <thead>
                  <tr style="background:rgba(255,255,255,.05);">
                    <th style="text-align:left;padding:14px 16px;color:rgba(255,255,255,.6);font-weight:700;">Allocation</th>
                    <th style="text-align:right;padding:14px 16px;color:rgba(255,255,255,.6);font-weight:700;">Amount</th>
                    <th style="text-align:right;padding:14px 16px;color:rgba(255,255,255,.6);font-weight:700;">%</th>
                    <th style="text-align:center;padding:14px 16px;color:rgba(255,255,255,.6);font-weight:700;">TGE</th>
                    <th style="text-align:center;padding:14px 16px;color:rgba(255,255,255,.6);font-weight:700;">Cliff</th>
                    <th style="text-align:center;padding:14px 16px;color:rgba(255,255,255,.6);font-weight:700;">Vesting</th>
                  </tr>
                </thead>
                <tbody>
                  ${[
                    { name:'Community Rewards', amount:'4,000,000,000', pct:'45%', tge:'5%', cliff:'3 months', vest:'60 mo (5 years)', color:'#00D8FF' },
                    { name:'Strategic Investors', amount:'1,333,333,333', pct:'15%', tge:'10%', cliff:'9 months', vest:'36 mo (3 years)', color:'#A86BFF' },
                    { name:'Ecosystem & Marketing', amount:'1,155,555,555', pct:'13%', tge:'8%', cliff:'6 months', vest:'42 mo (3.5 years)', color:'#3DCFFF' },
                    { name:'Team & Core Dev', amount:'1,066,666,666', pct:'12%', tge:'0%', cliff:'18 months', vest:'48 mo (4 years)', color:'#7B5FBF' },
                    { name:'Treasury & Foundation', amount:'888,888,888', pct:'10%', tge:'0%', cliff:'12 months', vest:'60 mo (5 years)', color:'#00A8CC' },
                    { name:'Artist Fund', amount:'444,444,444', pct:'5%', tge:'10%', cliff:'0 months', vest:'36 mo (3 years)', color:'#D4A0FF' },
                    { name:'TOTAL', amount:'8,888,888,888', pct:'100%', tge:'—', cliff:'—', vest:'—', color:'#FDFDFD' },
                  ].map((r,i)=>`
                    <tr style="border-bottom:1px solid rgba(255,255,255,.05);${r.name==='TOTAL'?'background:rgba(0,216,255,.06);font-weight:700;':''}">
                      <td style="padding:12px 16px;display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:${r.color};display:inline-block;"></span>${r.name}</td>
                      <td style="padding:12px 16px;text-align:right;font-family:monospace;font-size:.8rem;">${r.amount}</td>
                      <td style="padding:12px 16px;text-align:right;color:${r.color};font-weight:700;">${r.pct}</td>
                      <td style="padding:12px 16px;text-align:center;">${r.tge}</td>
                      <td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,.6);">${r.cliff}</td>
                      <td style="padding:12px 16px;text-align:center;color:rgba(255,255,255,.6);">${r.vest}</td>
                    </tr>
                  `).join('')}
                </tbody>
              </table>
            </div>

            <!-- Key Vesting Principles -->
            <div style="background:rgba(168,107,255,.06);border:1px solid rgba(168,107,255,.2);border-radius:14px;padding:20px;">
              <h4 style="font-weight:700;font-size:.95rem;color:#A86BFF;margin-bottom:14px;">Key Vesting Principles</h4>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
                ${[
                  ['Zero Team TGE Unlock','Team tokens have 18-month cliff — no immediate sell pressure'],
                  ['Zero Treasury TGE Unlock','Treasury locked for 12 months to ensure long-term stability'],
                  ['Community-First','Largest allocation (45%) unlocks progressively over 5 years'],
                  ['Investor Accountability','9-month cliff ensures investor commitment post-TGE'],
                  ['Treasury Protection','60-month vesting ensures sustainable long-term operations'],
                  ['Artist Incentive','Artist Fund unlocks 10% immediately at TGE to fund early creator activity'],
                ].map(([title,desc])=>`
                  <li style="font-size:.85rem;color:rgba(255,255,255,.7);display:flex;gap:10px;">
                    <i class="fas fa-check-circle" style="color:#A86BFF;flex-shrink:0;margin-top:2px;"></i>
                    <span><strong style="color:#fff;">${title}</strong>: ${desc}</span>
                  </li>
                `).join('')}
              </ul>
            </div>

            <!-- Monthly Vesting Schedule Table -->
            <div>
              <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1rem;margin-bottom:6px;">Monthly Cumulative Circulating Supply</h3>
              <p style="font-size:.8rem;color:rgba(255,255,255,.4);margin-bottom:14px;">Full unlock at Month 60 (5 years) — 8,888,888,888 tokens (100%)</p>
              <div style="overflow-x:auto;border-radius:12px;border:1px solid rgba(255,255,255,.07);">
                <table style="width:100%;border-collapse:collapse;font-size:.76rem;min-width:750px;">
                  <thead style="background:rgba(0,216,255,.06);">
                    <tr>
                      <th style="padding:9px 10px;text-align:center;color:rgba(255,255,255,.5);font-weight:700;">Month</th>
                      <th style="padding:9px 10px;text-align:right;color:#00D8FF;font-weight:700;">Community</th>
                      <th style="padding:9px 10px;text-align:right;color:#3DCFFF;font-weight:700;">Ecosystem</th>
                      <th style="padding:9px 10px;text-align:right;color:#A86BFF;font-weight:700;">Investors</th>
                      <th style="padding:9px 10px;text-align:right;color:#7B5FBF;font-weight:700;">Team</th>
                      <th style="padding:9px 10px;text-align:right;color:#00A8CC;font-weight:700;">Treasury</th>
                      <th style="padding:9px 10px;text-align:right;color:#D4A0FF;font-weight:700;">Artist Fund</th>
                      <th style="padding:9px 10px;text-align:right;color:rgba(255,255,255,.7);font-weight:700;">Total Circ.</th>
                      <th style="padding:9px 10px;text-align:center;color:rgba(255,255,255,.7);font-weight:700;">%</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${[
                      { m:1,  c:'200,000,000',   e:'92,444,444',   i:'133,333,333',   t:'0',             tr:'0',           a:'44,444,444',  tot:'470,222,221',   pct:'5.29%'  },
                      { m:3,  c:'333,333,333',   e:'92,444,444',   i:'133,333,333',   t:'0',             tr:'0',           a:'88,888,889',  tot:'648,000,000',   pct:'7.29%'  },
                      { m:6,  c:'533,333,333',   e:'115,555,556',  i:'133,333,333',   t:'0',             tr:'0',           a:'155,555,556', tot:'937,777,778',   pct:'10.56%' },
                      { m:9,  c:'733,333,333',   e:'138,666,667',  i:'266,666,667',   t:'0',             tr:'0',           a:'222,222,222', tot:'1,360,888,889', pct:'15.30%' },
                      { m:12, c:'933,333,333',   e:'161,777,778',  i:'400,000,000',   t:'0',             tr:'0',           a:'288,888,889', tot:'1,784,000,000', pct:'20.07%' },
                      { m:18, c:'1,333,333,333', e:'208,000,000',  i:'666,666,667',   t:'88,888,889',    tr:'88,888,889',  a:'422,222,222', tot:'2,808,000,000', pct:'31.60%' },
                      { m:24, c:'1,733,333,333', e:'254,222,222',  i:'933,333,333',   t:'222,222,222',   tr:'88,888,889',  a:'422,222,222', tot:'3,654,222,222', pct:'41.11%' },
                      { m:30, c:'2,133,333,333', e:'346,666,667',  i:'1,066,666,667', t:'333,333,333',   tr:'177,777,778', a:'422,222,222', tot:'4,479,999,999', pct:'50.40%' },
                      { m:36, c:'2,533,333,333', e:'439,111,111',  i:'1,200,000,000', t:'444,444,444',   tr:'266,666,667', a:'444,444,444', tot:'5,327,999,999', pct:'59.93%' },
                      { m:48, c:'3,733,333,333', e:'575,111,111',  i:'1,333,333,333', t:'888,888,889',   tr:'444,444,444', a:'444,444,444', tot:'7,419,555,554', pct:'83.51%' },
                      { m:54, c:'3,866,666,667', e:'632,222,222',  i:'1,333,333,333', t:'1,022,222,222', tr:'622,222,222', a:'444,444,444', tot:'7,920,000,000', pct:'89.12%' },
                      { m:60, c:'4,000,000,000', e:'692,444,444',  i:'1,333,333,333', t:'1,066,666,666', tr:'888,888,888', a:'444,444,444', tot:'8,888,888,888', pct:'100%'   },
                    ].map((r,i)=>`
                      <tr style="border-bottom:1px solid rgba(255,255,255,.05);${r.m===60?'background:rgba(0,216,255,.05);font-weight:700;':i%2===0?'background:rgba(255,255,255,.01)':''}">
                        <td style="padding:9px 10px;text-align:center;font-weight:600;color:${r.m===60?'#00D8FF':'rgba(255,255,255,.7)'};">${r.m===60?'60 ✓':''+r.m}</td>
                        <td style="padding:9px 10px;text-align:right;font-family:monospace;color:rgba(255,255,255,.7);">${r.c}</td>
                        <td style="padding:9px 10px;text-align:right;font-family:monospace;color:rgba(255,255,255,.7);">${r.e}</td>
                        <td style="padding:9px 10px;text-align:right;font-family:monospace;color:rgba(255,255,255,.7);">${r.i}</td>
                        <td style="padding:9px 10px;text-align:right;font-family:monospace;color:rgba(255,255,255,.7);">${r.t}</td>
                        <td style="padding:9px 10px;text-align:right;font-family:monospace;color:rgba(255,255,255,.7);">${r.tr}</td>
                        <td style="padding:9px 10px;text-align:right;font-family:monospace;color:rgba(255,255,255,.7);">${r.a}</td>
                        <td style="padding:9px 10px;text-align:right;font-family:monospace;font-weight:600;">${r.tot}</td>
                        <td style="padding:9px 10px;text-align:center;font-weight:700;color:${r.m===60?'#00D8FF':'rgba(255,255,255,.6)'};">${r.pct}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
        <section id="governance">
          <div style="border-left:3px solid #00D8FF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#00D8FF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 09</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">DAO Governance</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;display:flex;flex-direction:column;gap:16px;">
            <p>DaVinci DAO is designed for genuine community ownership — not performative decentralization. Launching in Q2 2026, the DAO will control the platform treasury, major feature decisions, and long-term protocol upgrades.</p>
            <div class="grid md:grid-cols-2 gap-4">
              ${[
                { title:'Proposal Types', items:['Protocol Upgrade Proposals (PUPs)','Treasury Allocation Requests (TARs)','Partner Integration Votes (PIVs)','Fee Structure Changes (FSCs)','Emergency Security Actions (ESAs)'] },
                { title:'Voting Mechanics', items:['Quorum: 5% of circulating supply','Voting period: 7 days','Execution delay: 48-hour timelock','Quadratic voting (anti-whale)','Delegation to trusted delegates'] },
                { title:'Treasury Management', items:['Multi-sig: 5-of-9 signers','Diversified in BNB + USDT + DAVINCI','Quarterly transparency reports','On-chain expenditure tracking','Community veto on large spends'] },
                { title:'Governance Rewards', items:['Earn $DAVINCI for voting participation','Bonus for quality proposal submission','Delegate reward share system','DAO reputation scores','Governance badges as NFTs'] },
              ].map(s=>`
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:18px;">
                  <h4 style="font-weight:700;font-size:.92rem;color:#00D8FF;margin-bottom:10px;">${s.title}</h4>
                  <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;">
                    ${s.items.map(i=>`<li style="font-size:.82rem;color:rgba(255,255,255,.6);display:flex;gap:8px;"><i class="fas fa-check" style="color:#00D8FF;font-size:.7rem;margin-top:3px;flex-shrink:0;"></i>${i}</li>`).join('')}
                  </ul>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 10. Roadmap -->
        <section id="roadmap">
          <div style="border-left:3px solid #A86BFF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#A86BFF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 10</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Roadmap 2025–2027</h2>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${[
              { period:'Q1–Q2 2025', status:'completed', items:['Project reveal & whitepaper v1.0','Community bootstrapping on X and Telegram','AI model API integrations (Midjourney, DALL-E 3, Stable Diffusion)','Core smart contract development','Team expansion (10+ members)','Seed round ($500K target)'] },
              { period:'Q3–Q4 2025', status:'current', items:['AI Atelier beta launch (invite-only)','DaVinci Game Hub soft launch','NFT minting engine v1 live','Smart contract audits complete','$DAVINCI TGE on BNB Chain','PancakeSwap listing','Whitepaper v2.0 published'] },
              { period:'Q1–Q2 2026', status:'upcoming', items:['NFT Marketplace v1 public launch','DAO governance activation','Staking pools & yield farming','KlingAI & HeyGen video integration','Mobile app beta (iOS/Android)','Series A fundraise ($3M target)','10,000+ community members'] },
              { period:'Q3–Q4 2026', status:'upcoming', items:['Ethereum & Polygon bridge','AI Model Marketplace launch','Layer 2 gas optimization','Creator royalty automation','100,000+ users milestone','Enterprise API program'] },
              { period:'2027+', status:'future', items:['DaVinci L2 research & development','Decentralized AI training nodes','Cross-chain NFT portability (10+ chains)','AI DAO autonomous governance','Global artist residency fund','1M+ creators onboarded'] },
            ].map((r)=>`
              <div style="background:rgba(255,255,255,.02);border:1px solid ${r.status==='completed'?'rgba(0,216,255,.25)':r.status==='current'?'rgba(168,107,255,.3)':'rgba(255,255,255,.07)'};border-radius:14px;padding:20px;">
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;flex-wrap:wrap;">
                  <span style="font-size:.75rem;font-weight:700;padding:4px 14px;border-radius:50px;background:${r.status==='completed'?'rgba(0,216,255,.12)':r.status==='current'?'rgba(168,107,255,.15)':'rgba(255,255,255,.05)'};color:${r.status==='completed'?'#00D8FF':r.status==='current'?'#A86BFF':'rgba(255,255,255,.35)'};">${r.status==='completed'?'✓ COMPLETED':r.status==='current'?'▶ CURRENT':'○ UPCOMING'}</span>
                  <span style="font-weight:700;font-size:.95rem;">${r.period}</span>
                </div>
                <div class="grid md:grid-cols-2 gap-2">
                  ${r.items.map(i=>`<div style="font-size:.83rem;color:rgba(253,253,253,.65);display:flex;gap:8px;"><i class="fas fa-${r.status==='completed'?'check-circle" style="color:#00D8FF':r.status==='current'?'circle-dot" style="color:#A86BFF':'circle" style="color:rgba(255,255,255,.2)'};" style="font-size:.75rem;margin-top:2px;flex-shrink:0;"></i>${i}</div>`).join('')}
                </div>
              </div>
            `).join('')}
          </div>
        </section>

        <!-- 11. Team -->
        <section id="team">
          <div style="border-left:3px solid #00D8FF;padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:#00D8FF;font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 11</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Team & Advisors</h2>
          </div>
          <div style="font-size:.92rem;color:rgba(253,253,253,.7);line-height:1.9;">
            <div class="grid md:grid-cols-2 gap-4">
              ${[
                { name:'Leonardo Chen', role:'CEO & Co-Founder', bg:'#00D8FF', creds:'Ex-DeepMind AI Research Lead. 10+ years generative AI. Blockchain architect since 2017.' },
                { name:'Aria Nakamoto', role:'CTO & Co-Founder', bg:'#A86BFF', creds:'Ethereum core contributor. 5 DeFi protocols deployed. Smart contract security specialist.' },
                { name:'Marcus Rivera', role:'Chief Creative Officer', bg:'#00D8FF', creds:'Award-winning digital artist. NFT sales totaling $2.4M. Collaborates with Beeple and Pak.' },
                { name:'Yuki Tanaka', role:'Head of Partnerships', bg:'#A86BFF', creds:'Ex-Binance NFT partnerships. Connected with 50+ VCs and 200+ Web3 projects globally.' },
                { name:'Dr. Sarah Kim', role:'Head of AI Research', bg:'#00D8FF', creds:'PhD Computer Vision (MIT). Published 12 papers on generative models. Former Google Brain.' },
                { name:'Alex Petrov', role:'Head of Blockchain', bg:'#A86BFF', creds:'Solidity expert. Audited $500M+ in DeFi TVL. Core contributor to OpenZeppelin security framework.' },
              ].map(m=>`
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:14px;padding:18px;display:flex;gap:14px;">
                  <div style="width:48px;height:48px;border-radius:50%;background:${m.bg}22;border:1px solid ${m.bg}33;display:flex;align-items:center;justify-content:center;flex-shrink:0;font-weight:800;font-size:1rem;color:${m.bg};">${m.name.charAt(0)}</div>
                  <div>
                    <div style="font-weight:700;font-size:.92rem;">${m.name}</div>
                    <div style="font-size:.78rem;color:${m.bg};margin-bottom:6px;">${m.role}</div>
                    <div style="font-size:.8rem;color:rgba(253,253,253,.5);">${m.creds}</div>
                  </div>
                </div>
              `).join('')}
            </div>
          </div>
        </section>

        <!-- 12. Legal -->
        <section id="legal">
          <div style="border-left:3px solid rgba(255,255,255,.3);padding-left:20px;margin-bottom:24px;">
            <p style="font-size:.72rem;color:rgba(255,255,255,.4);font-weight:700;letter-spacing:.1em;margin-bottom:6px;">SECTION 12</p>
            <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.6rem;">Legal Disclaimer</h2>
          </div>
          <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:24px;font-size:.82rem;color:rgba(253,253,253,.5);line-height:1.85;">
            <p style="margin-bottom:12px;">This whitepaper is for informational purposes only and does not constitute financial, investment, or legal advice. The $DAVINCI token is a utility token designed for use within the DaVinci AI platform ecosystem.</p>
            <p style="margin-bottom:12px;">$DAVINCI tokens are NOT securities, investment contracts, or financial instruments. Purchasing $DAVINCI does not grant ownership in DaVinci AI Ltd., any subsidiary, or any profit-sharing rights.</p>
            <p style="margin-bottom:12px;">Cryptocurrency investments are highly volatile and speculative. Past performance is not indicative of future results. Participants should conduct their own due diligence and consult qualified financial and legal advisors before participating in any token sale or purchase.</p>
            <p>DaVinci AI reserves the right to update this whitepaper at any time. The most current version will always be available at <a href="https://github.com/vinsenzo83/davinci-ai" target="_blank" style="color:#00D8FF;">github.com/vinsenzo83/davinci-ai</a>.</p>
          </div>
        </section>

      </article>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
window.addEventListener('load', ()=>{
  const ctx = document.getElementById('wpVestingChart')?.getContext('2d');
  if(!ctx) return;
  const months = [...Array(61).keys()];
  const community = months.map(m => m<3?5:Math.min(5+((m-3)/60)*95,100));
  const investors = months.map(m => m<9?10:Math.min(10+((m-9)/36)*90,100));
  const team = months.map(m => m<18?0:Math.min(((m-18)/48)*100,100));
  const ecosystem = months.map(m => m<6?8:Math.min(8+((m-6)/42)*92,100));
  const treasury = months.map(m => m<12?0:Math.min(((m-12)/60)*100,100));
  new Chart(ctx,{
    type:'line',
    data:{
      labels:months.map(m=>m%12===0?'Month '+m:''),
      datasets:[
        {label:'Community (45%)',data:community,borderColor:'#00D8FF',backgroundColor:'rgba(0,216,255,.08)',fill:true,tension:.4,pointRadius:0,borderWidth:2},
        {label:'Investors (15%)',data:investors,borderColor:'#A86BFF',backgroundColor:'rgba(168,107,255,.06)',fill:true,tension:.4,pointRadius:0,borderWidth:2},
        {label:'Team (12%)',data:team,borderColor:'#7B5FBF',backgroundColor:'rgba(123,95,191,.05)',fill:true,tension:.4,pointRadius:0,borderWidth:2},
        {label:'Ecosystem (13%)',data:ecosystem,borderColor:'#3DCFFF',backgroundColor:'rgba(61,207,255,.05)',fill:true,tension:.4,pointRadius:0,borderWidth:2},
        {label:'Treasury (10%)',data:treasury,borderColor:'#00A8CC',backgroundColor:'rgba(0,168,204,.04)',fill:true,tension:.4,pointRadius:0,borderWidth:2},
      ]
    },
    options:{
      responsive:true,
      plugins:{
        legend:{labels:{color:'rgba(255,255,255,.6)',font:{size:11}}},
        tooltip:{mode:'index',intersect:false,callbacks:{label:ctx=>ctx.dataset.label+': '+ctx.parsed.y.toFixed(1)+'%'}}
      },
      scales:{
        x:{ticks:{color:'rgba(255,255,255,.3)',font:{size:10},maxRotation:0},grid:{color:'rgba(255,255,255,.04)'}},
        y:{ticks:{color:'rgba(255,255,255,.3)',font:{size:10},callback:v=>v+'%'},grid:{color:'rgba(255,255,255,.04)'},min:0,max:100,title:{display:true,text:'% Unlocked',color:'rgba(255,255,255,.3)',font:{size:10}}}
      }
    }
  });
});
</script>
`

export const whitepaperPage = layout('Whitepaper | DaVinci AI', wpContent)
