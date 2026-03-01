import { layout } from './layout'

const whitepaperContent = `
<div style="min-height:calc(100vh - 72px);background:#080C14;padding:48px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid lg:grid-cols-4 gap-8">

      <!-- Sidebar TOC -->
      <div class="lg:col-span-1">
        <div style="position:sticky;top:90px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:20px;" id="tocSidebar">
          <div style="display:flex;align-items:center;gap:8px;margin-bottom:16px;">
            <i class="fas fa-file-alt" style="color:#00D8FF;font-size:.9rem;"></i>
            <span style="font-weight:700;font-size:.9rem;">Table of Contents</span>
          </div>
          <nav id="tocNav" style="display:flex;flex-direction:column;gap:3px;">
            ${[
              {id:'exec',label:'1. Executive Summary'},
              {id:'intro',label:'2. Introduction'},
              {id:'vision',label:'3. Vision & Mission'},
              {id:'market',label:'4. Market Opportunity'},
              {id:'platform',label:'5. Platform Architecture'},
              {id:'tech',label:'6. Technology Stack'},
              {id:'tokenomics',label:'7. $DAVINCI Tokenomics'},
              {id:'revenue',label:'8. Revenue Model'},
              {id:'roadmap',label:'9. Roadmap'},
              {id:'team',label:'10. Team'},
              {id:'legal',label:'11. Legal Disclaimer'}
            ].map((item,i) => `
              <a href="#${item.id}" class="toc-link" data-section="${item.id}" style="color:rgba(255,255,255,.45);font-size:.8rem;padding:7px 10px;border-radius:8px;text-decoration:none;transition:all .2s;display:block;" onmouseover="this.style.background='rgba(0,216,255,.06)';this.style.color='#00D8FF'" onmouseout="if(!this.classList.contains('active')){this.style.background='';this.style.color='rgba(255,255,255,.45)'}">${item.label}</a>`).join('')}
          </nav>

          <!-- GitHub Link -->
          <div style="margin-top:20px;padding-top:20px;border-top:1px solid rgba(255,255,255,.06);">
            <a href="https://github.com/vinsenzo83/davinci-ai/blob/main/WHITEPAPER.md" target="_blank" style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.5);font-size:.8rem;text-decoration:none;padding:8px 10px;border-radius:8px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);transition:all .2s;" onmouseover="this.style.borderColor='rgba(0,216,255,.3)';this.style.color='#00D8FF'" onmouseout="this.style.borderColor='rgba(255,255,255,.07)';this.style.color='rgba(255,255,255,.5)'">
              <i class="fab fa-github" style="font-size:1rem;"></i> View on GitHub
            </a>
            <a href="https://github.com/vinsenzo83/davinci-ai" target="_blank" style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,.5);font-size:.8rem;text-decoration:none;padding:8px 10px;border-radius:8px;margin-top:6px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);transition:all .2s;" onmouseover="this.style.borderColor='rgba(168,107,255,.3)';this.style.color='#A86BFF'" onmouseout="this.style.borderColor='rgba(255,255,255,.07)';this.style.color='rgba(255,255,255,.5)'">
              <i class="fas fa-star" style="font-size:.8rem;"></i> Star Repository
            </a>
          </div>

          <div style="margin-top:16px;background:rgba(0,216,255,.05);border:1px solid rgba(0,216,255,.12);border-radius:10px;padding:12px;">
            <p style="font-size:.72rem;color:rgba(255,255,255,.4);line-height:1.6;">Version: <span style="color:#00D8FF;">v1.0.0</span><br>Updated: <span style="color:#00D8FF;">March 2025</span></p>
          </div>
        </div>
      </div>

      <!-- Main Content -->
      <div class="lg:col-span-3">
        <!-- Header -->
        <div style="background:linear-gradient(135deg,rgba(0,216,255,.06),rgba(168,107,255,.06));border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:36px;margin-bottom:32px;position:relative;overflow:hidden;">
          <div class="orb" style="width:300px;height:300px;background:rgba(0,216,255,.04);top:-100px;right:-100px;"></div>
          <div style="position:relative;z-index:2;">
            <div style="display:flex;flex-wrap:wrap;gap:10px;align-items:center;margin-bottom:16px;">
              <div style="width:48px;height:48px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:12px;display:flex;align-items:center;justify-content:center;">
                <span style="font-family:'Poppins';font-weight:900;font-size:1.3rem;color:#080C14;">D</span>
              </div>
              <div>
                <h1 style="font-family:'Poppins';font-weight:900;font-size:1.6rem;">DaVinci AI <span class="gradient-text">Whitepaper</span></h1>
                <p style="color:rgba(255,255,255,.4);font-size:.82rem;margin-top:2px;">Official Document v1.0.0 · March 2025</p>
              </div>
            </div>
            <blockquote style="border-left:3px solid #00D8FF;padding-left:16px;color:rgba(255,255,255,.6);font-style:italic;font-size:1.05rem;line-height:1.7;">
              "Where Art Thinks." — A Web3 Creative Intelligence Platform on BNB Chain
            </blockquote>
            <div class="flex flex-wrap gap-3 mt-16">
              <a href="https://github.com/vinsenzo83/davinci-ai/blob/main/WHITEPAPER.md" target="_blank" class="btn-primary" style="font-size:.85rem;padding:10px 20px;"><i class="fab fa-github"></i> View on GitHub</a>
              <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-outline" style="font-size:.85rem;padding:9px 20px;"><i class="fab fa-telegram"></i> Community</a>
            </div>
          </div>
        </div>

        <!-- Sections -->
        ${[
          {
            id:'exec', num:'01', title:'Executive Summary', color:'#00D8FF',
            content: `<p>DaVinci AI is a next-generation Web3 creative intelligence platform inspired by Leonardo da Vinci's polymathic genius. Built natively on <strong style="color:#00D8FF;">BNB Chain</strong>, DaVinci AI unifies AI-powered art generation, gamified airdrop campaigns, and NFT ownership into a single cohesive ecosystem governed by the <strong style="color:#A86BFF;">$DAVINCI</strong> utility token.</p>
              <div class="grid grid-cols-2 md:grid-cols-4 gap-3 mt-5">
                ${[['8,888,888,888','Total Supply'],['BNB Chain','Blockchain'],['Q4 2025','TGE Target'],['4+','Core Products']].map(s => `
                  <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:14px;text-align:center;">
                    <div style="font-size:1rem;font-weight:700;color:#00D8FF;">${s[0]}</div>
                    <div style="font-size:.72rem;color:rgba(255,255,255,.35);margin-top:3px;">${s[1]}</div>
                  </div>`).join('')}
              </div>`
          },
          {
            id:'intro', num:'02', title:'Introduction', color:'#A86BFF',
            content: `<p>The convergence of artificial intelligence and blockchain technology is creating an entirely new paradigm for digital creativity and ownership. In 2024, the AI art market generated over <strong style="color:#A86BFF;">$3.2 billion</strong> in value, while NFT trading volume on BNB Chain exceeded <strong style="color:#A86BFF;">$800 million</strong>. Yet these ecosystems remain largely fragmented.</p>
              <p style="margin-top:14px;">DaVinci AI was founded on the principle that Leonardo da Vinci embodied — the seamless fusion of science, art, and human ingenuity. Just as da Vinci crossed boundaries between painting, engineering, and anatomy, DaVinci AI crosses the boundary between AI creativity, blockchain ownership, and community gaming.</p>
              <blockquote style="border-left:3px solid #A86BFF;padding-left:16px;margin-top:18px;color:rgba(255,255,255,.5);font-style:italic;">"Learning never exhausts the mind." — Leonardo da Vinci</blockquote>`
          },
          {
            id:'vision', num:'03', title:'Vision & Mission', color:'#00D8FF',
            content: `<div class="grid md:grid-cols-2 gap-4">
              <div style="background:rgba(0,216,255,.05);border:1px solid rgba(0,216,255,.15);border-radius:12px;padding:20px;">
                <h4 style="color:#00D8FF;font-weight:700;margin-bottom:10px;"><i class="fas fa-eye" style="margin-right:6px;"></i>Vision</h4>
                <p style="font-size:.875rem;color:rgba(255,255,255,.6);line-height:1.7;">To become the world's leading AI-native creative platform on Web3, where anyone can generate, own, and monetize digital art — powered by the community and governed by the DAO.</p>
              </div>
              <div style="background:rgba(168,107,255,.05);border:1px solid rgba(168,107,255,.15);border-radius:12px;padding:20px;">
                <h4 style="color:#A86BFF;font-weight:700;margin-bottom:10px;"><i class="fas fa-bullseye" style="margin-right:6px;"></i>Mission</h4>
                <ul style="font-size:.875rem;color:rgba(255,255,255,.6);line-height:1.8;list-style:none;">
                  <li>✦ Democratize AI creative tools</li>
                  <li>✦ Build gamified airdrop economy</li>
                  <li>✦ Establish NFT art marketplace</li>
                  <li>✦ Create DAO-governed community</li>
                </ul>
              </div>
            </div>`
          },
          {
            id:'market', num:'04', title:'Market Opportunity', color:'#A86BFF',
            content: `<div class="grid md:grid-cols-2 gap-4">
              ${[
                {label:'AI Art Market 2028',val:'$13.4B',sub:'CAGR 37.9%',color:'#00D8FF'},
                {label:'BNB Chain NFT Volume',val:'$850M',sub:'2023 Annual',color:'#A86BFF'},
                {label:'Web3 Gaming 2027',val:'$65B',sub:'P2E + GameFi',color:'#00FFB2'},
                {label:'Creator Economy',val:'$480B',sub:'2027 Projected',color:'#FFB800'}
              ].map(m => `
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:20px;display:flex;align-items:center;gap:14px;">
                  <div>
                    <div style="font-size:1.6rem;font-weight:700;color:${m.color};">${m.val}</div>
                    <div style="font-size:.82rem;font-weight:600;margin-top:2px;">${m.label}</div>
                    <div style="font-size:.72rem;color:rgba(255,255,255,.35);margin-top:2px;">${m.sub}</div>
                  </div>
                </div>`).join('')}
            </div>
            <div style="margin-top:16px;background:rgba(0,216,255,.05);border:1px solid rgba(0,216,255,.1);border-radius:12px;padding:16px;">
              <p style="font-size:.85rem;color:rgba(255,255,255,.6);">Total Addressable Market: <strong style="color:#00D8FF;">~$561B</strong> — DaVinci AI targets 0.5% SOM within 3 years, representing <strong style="color:#00D8FF;">~$2.8B</strong> in combined value creation.</p>
            </div>`
          },
          {
            id:'platform', num:'05', title:'Platform Architecture', color:'#00D8FF',
            content: `${[
              {name:'DaVinci Game Hub',icon:'fas fa-gamepad',color:'#00D8FF',desc:'Telegram & WebApp mini-games. Creative Credits system. Season-based airdrop campaigns with tiered rank rewards.',features:['Mini-Games','Creative Credits','Season Airdrops','Rank System']},
              {name:'AI Atelier',icon:'fas fa-palette',color:'#A86BFF',desc:'Unified AI creation tools: Stable Diffusion, Midjourney, KlingAI, HeyGen, Wrtn.AI, Nouvo.AI, OpenAI integration.',features:['Image Generation','AI Video','Avatar Creation','AI Copywriting']},
              {name:'NFT Renaissance',icon:'fas fa-gem',color:'#00D8FF',desc:'BEP-721 NFT minting with IPFS metadata, EIP-2981 royalties, marketplace with fixed price & auction mechanisms.',features:['BEP-721 Minting','IPFS Storage','Royalty System','Marketplace']},
              {name:'DaVinci Rewards',icon:'fas fa-star',color:'#A86BFF',desc:'Staking tiers (8-25% APY), DAO governance, treasury yield, creator licensing, artist grant fund.',features:['Staking 8-25% APY','DAO Governance','Creator Grants','Revenue Share']}
            ].map(p => `
              <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:20px;margin-bottom:12px;">
                <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                  <i class="${p.icon}" style="color:${p.color};font-size:1.1rem;"></i>
                  <h4 style="font-weight:700;color:${p.color};">${p.name}</h4>
                </div>
                <p style="font-size:.875rem;color:rgba(255,255,255,.55);line-height:1.7;margin-bottom:12px;">${p.desc}</p>
                <div class="flex flex-wrap gap-2">
                  ${p.features.map(f => `<span style="background:${p.color}10;border:1px solid ${p.color}20;border-radius:20px;padding:3px 10px;font-size:.7rem;color:${p.color};">${f}</span>`).join('')}
                </div>
              </div>`).join('')}`
          },
          {
            id:'tech', num:'06', title:'Technology Stack', color:'#A86BFF',
            content: `<div class="grid md:grid-cols-2 gap-4">
              ${[
                {title:'Blockchain',items:['BNB Smart Chain','PoSA Consensus','>3s Block Time','<$0.01 Gas Fee']},
                {title:'Smart Contracts',items:['Solidity ^0.8.20','BEP-20/721/1155','OpenZeppelin Proxy','CertiK + PeckShield Audit']},
                {title:'Backend',items:['Hono Framework','Cloudflare Workers','D1 + IPFS Storage','Node.js API Gateway']},
                {title:'AI Integration',items:['OpenAI GPT-4','Midjourney API','KlingAI Video','HeyGen Avatars']}
              ].map(s => `
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:18px;">
                  <h4 style="font-weight:700;font-size:.9rem;color:rgba(255,255,255,.7);margin-bottom:10px;">${s.title}</h4>
                  <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;">
                    ${s.items.map(i => `<li style="font-size:.82rem;color:rgba(255,255,255,.5);display:flex;align-items:center;gap:8px;"><span style="width:6px;height:6px;background:#A86BFF;border-radius:50%;flex-shrink:0;"></span>${i}</li>`).join('')}
                  </ul>
                </div>`).join('')}
            </div>`
          },
          {
            id:'tokenomics', num:'07', title:'$DAVINCI Tokenomics', color:'#00D8FF',
            content: `<div class="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
              ${[['$DAVINCI','Symbol'],['BEP-20','Standard'],['BNB Chain','Network'],['8,888,888,888','Total Supply'],['~5%','TGE Unlock'],['Q4 2025','TGE Date']].map(i => `
                <div style="background:rgba(0,216,255,.04);border:1px solid rgba(0,216,255,.12);border-radius:10px;padding:14px;text-align:center;">
                  <div style="font-weight:700;color:#00D8FF;font-size:.95rem;">${i[0]}</div>
                  <div style="font-size:.72rem;color:rgba(255,255,255,.35);margin-top:3px;">${i[1]}</div>
                </div>`).join('')}
            </div>
            <h4 style="font-weight:700;margin-bottom:12px;color:rgba(255,255,255,.7);">Allocation Breakdown</h4>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${[
                ['Community Rewards','45%','#00D8FF','4,000,000,000 tokens · Airdrops, Staking, Games'],
                ['Investors','15%','#A86BFF','1,333,333,333 tokens · 18-mo cliff, 3-yr vesting'],
                ['Ecosystem Growth','13%','#00FFB2','1,155,555,556 tokens · Partnerships & Integrations'],
                ['Team & Core Dev','12%','#FF6B6B','1,066,666,667 tokens · 12-mo cliff, 4-yr vesting'],
                ['Treasury','10%','#FFB800','888,888,889 tokens · DAO Controlled'],
                ['Artist Fund','5%','#FF8C00','444,444,444 tokens · Creator Grants']
              ].map(a => `
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:12px 16px;">
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:7px;">
                    <div style="display:flex;align-items:center;gap:8px;">
                      <div style="width:8px;height:8px;background:${a[2]};border-radius:2px;"></div>
                      <span style="font-size:.875rem;font-weight:600;">${a[0]}</span>
                    </div>
                    <span style="color:${a[2]};font-weight:700;">${a[1]}</span>
                  </div>
                  <div style="height:5px;background:rgba(255,255,255,.05);border-radius:3px;overflow:hidden;">
                    <div style="height:100%;width:${a[1]};background:${a[2]};border-radius:3px;"></div>
                  </div>
                  <div style="font-size:.72rem;color:rgba(255,255,255,.3);margin-top:5px;">${a[3]}</div>
                </div>`).join('')}
            </div>
            <h4 style="font-weight:700;margin:20px 0 12px;color:rgba(255,255,255,.7);">Vesting Schedule</h4>
            <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:20px;">
              <canvas id="wpVestingChart" style="max-height:240px;"></canvas>
            </div>`
          },
          {
            id:'revenue', num:'08', title:'Revenue Model', color:'#A86BFF',
            content: `<div class="grid md:grid-cols-2 gap-4">
              ${[
                {title:'Creative Pass Subscriptions',icon:'fas fa-id-card',val:'$2.4M',sub:'Year 1 (10K subscribers)',color:'#00D8FF'},
                {title:'NFT Marketplace Fees',icon:'fas fa-store',val:'$1M',sub:'2% of $50M volume',color:'#A86BFF'},
                {title:'Brand Collaborations',icon:'fas fa-handshake',val:'$500K',sub:'Year 1 target',color:'#00FFB2'},
                {title:'Treasury Staking Yield',icon:'fas fa-university',val:'$600K',sub:'6-10% on $10M AUM',color:'#FFB800'}
              ].map(r => `
                <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:18px;">
                  <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
                    <i class="${r.icon}" style="color:${r.color};font-size:1rem;"></i>
                    <h4 style="font-weight:600;font-size:.875rem;">${r.title}</h4>
                  </div>
                  <div style="font-size:1.4rem;font-weight:700;color:${r.color};">${r.val}</div>
                  <div style="font-size:.75rem;color:rgba(255,255,255,.35);margin-top:3px;">${r.sub}</div>
                </div>`).join('')}
            </div>`
          },
          {
            id:'roadmap', num:'09', title:'Roadmap', color:'#00D8FF',
            content: `<div class="flex flex-col gap-4">
              ${[
                {q:'Q1–Q2 2025',status:'✅ COMPLETED',color:'#00D8FF',items:['Project reveal & brand identity','AI Image Studio alpha','DaVinci Game Hub beta','Season 1 airdrop']},
                {q:'Q3 2025',status:'🔄 IN PROGRESS',color:'#A86BFF',items:['AI Video Lab beta (KlingAI)','NFT minting platform','Season 2 airdrop']},
                {q:'Q4 2025',status:'⏳ UPCOMING',color:'rgba(0,216,255,.6)',items:['Token Generation Event (TGE)','DEX/CEX listings','CertiK/PeckShield audit','Staking launch']},
                {q:'2026 H1',status:'📅 PLANNED',color:'rgba(168,107,255,.5)',items:['NFT Marketplace launch','Mobile app','DAO governance activation']},
                {q:'2026–2028',status:'🌐 VISION',color:'rgba(255,255,255,.3)',items:['Multi-chain expansion','3D & spatial AI tools','Global partnerships']}
              ].map(r => `
                <div style="display:flex;gap:16px;align-items:flex-start;">
                  <div style="min-width:90px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:8px;padding:8px;text-align:center;">
                    <div style="font-weight:700;font-size:.78rem;color:${r.color};">${r.q}</div>
                  </div>
                  <div style="flex:1;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:14px;">
                    <div style="font-size:.72rem;color:${r.color};font-weight:600;margin-bottom:8px;">${r.status}</div>
                    <ul style="list-style:none;display:flex;flex-direction:column;gap:5px;">
                      ${r.items.map(i => `<li style="font-size:.82rem;color:rgba(255,255,255,.5);">• ${i}</li>`).join('')}
                    </ul>
                  </div>
                </div>`).join('')}
            </div>`
          },
          {
            id:'team', num:'10', title:'Team', color:'#A86BFF',
            content: `<div style="background:rgba(168,107,255,.05);border:1px solid rgba(168,107,255,.15);border-radius:14px;padding:24px;text-align:center;">
              <i class="fas fa-user-secret" style="font-size:2.5rem;color:rgba(168,107,255,.4);margin-bottom:16px;display:block;"></i>
              <p style="color:rgba(255,255,255,.6);line-height:1.8;">The DaVinci AI team combines expertise in blockchain engineering, AI research, digital art, and Web3 community building. Core team details will be disclosed progressively in line with regulatory best practices.</p>
              <p style="color:rgba(255,255,255,.4);font-size:.85rem;margin-top:12px;"><strong style="color:#A86BFF;">Full team reveal: Q3 2025</strong></p>
            </div>`
          },
          {
            id:'legal', num:'11', title:'Legal Disclaimer', color:'#FF6B6B',
            content: `<div style="background:rgba(255,100,100,.05);border:1px solid rgba(255,100,100,.15);border-radius:14px;padding:24px;">
              <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
                <i class="fas fa-exclamation-triangle" style="color:#FF6B6B;font-size:1.1rem;"></i>
                <h4 style="font-weight:700;color:#FF6B6B;">Important Notice</h4>
              </div>
              <p style="font-size:.875rem;color:rgba(255,255,255,.6);line-height:1.8;margin-bottom:12px;">$DAVINCI is a <strong>utility token</strong> designed to provide access to the DaVinci AI platform features. It is <strong>NOT</strong> a security, investment contract, or financial instrument.</p>
              <ul style="list-style:none;display:flex;flex-direction:column;gap:6px;font-size:.82rem;color:rgba(255,255,255,.5);">
                <li>⚠️ Not registered with any financial regulatory authority</li>
                <li>⚠️ Does not grant equity, dividends, or profit-sharing rights</li>
                <li>⚠️ Cryptocurrency markets are highly volatile</li>
                <li>⚠️ Always conduct your own due diligence (DYOR)</li>
              </ul>
            </div>`
          }
        ].map(section => `
          <section id="${section.id}" style="margin-bottom:48px;scroll-margin-top:90px;" class="fade-up">
            <div style="display:flex;align-items:center;gap:12px;margin-bottom:20px;">
              <div style="background:${section.color}15;border:1px solid ${section.color}30;border-radius:10px;padding:6px 14px;font-size:.72rem;font-weight:700;color:${section.color};">${section.num}</div>
              <h2 style="font-family:'Poppins';font-weight:700;font-size:1.4rem;">${section.title}</h2>
            </div>
            <div style="font-size:.9rem;color:rgba(255,255,255,.65);line-height:1.9;">${section.content}</div>
            <div style="height:1px;background:rgba(255,255,255,.05);margin-top:40px;"></div>
          </section>`).join('')}

      </div>
    </div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
// Vesting chart
const months = [0,3,6,9,12,15,18,21,24,30,36,42,48,54,60];
const community = [1,2,4,6,8,10,13,16,20,27,34,38,42,44,45];
const investors =  [0,0,0,0,0,0,0.5,1.5,3,6,9,11,13,14,15];
const team =       [0,0,0,0,0.5,1,1.5,2,3,5,7,9,11,12,12];
const ecosystem =  [1.5,2,2,2,2,3,3.5,4.5,5.5,7,9,10,11,12,13];
const total =      months.map((_,i)=>(community[i]||0)+(investors[i]||0)+(team[i]||0)+(ecosystem[i]||0)+5);

const wpCtx = document.getElementById('wpVestingChart');
if (wpCtx) {
  new Chart(wpCtx.getContext('2d'), {
    type:'line',
    data:{
      labels:months.map(m=>m===0?'TGE':m+'mo'),
      datasets:[
        {label:'Community',data:community,borderColor:'#00D8FF',backgroundColor:'rgba(0,216,255,.06)',fill:true,tension:.4,borderWidth:2,pointRadius:2},
        {label:'Investors',data:investors,borderColor:'#A86BFF',backgroundColor:'rgba(168,107,255,.04)',fill:true,tension:.4,borderWidth:2,pointRadius:2},
        {label:'Team',data:team,borderColor:'#FF6B6B',backgroundColor:'rgba(255,107,107,.03)',fill:true,tension:.4,borderWidth:2,pointRadius:2},
        {label:'Total',data:total,borderColor:'#FFB800',fill:false,tension:.4,borderWidth:2.5,borderDash:[5,3],pointRadius:2}
      ]
    },
    options:{
      responsive:true,
      plugins:{legend:{labels:{color:'rgba(255,255,255,.5)',font:{size:11},usePointStyle:true}},tooltip:{backgroundColor:'rgba(8,12,20,.95)',borderColor:'rgba(0,216,255,.2)',borderWidth:1}},
      scales:{
        x:{grid:{color:'rgba(255,255,255,.04)'},ticks:{color:'rgba(255,255,255,.35)',font:{size:10}}},
        y:{grid:{color:'rgba(255,255,255,.04)'},ticks:{color:'rgba(255,255,255,.35)',font:{size:10},callback:v=>v+'%'},min:0,max:75}
      }
    }
  });
}

// TOC active state on scroll
const sections = document.querySelectorAll('section[id]');
const tocLinks = document.querySelectorAll('.toc-link');
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      tocLinks.forEach(l => {
        const isActive = l.dataset.section === e.target.id;
        l.style.background = isActive ? 'rgba(0,216,255,.1)' : '';
        l.style.color = isActive ? '#00D8FF' : 'rgba(255,255,255,.45)';
        if (isActive) l.classList.add('active'); else l.classList.remove('active');
      });
    }
  });
}, {threshold:0.3,rootMargin:'-80px 0px -70% 0px'});
sections.forEach(s => observer.observe(s));
</script>
`

export const whitepaperPage = layout('Whitepaper', whitepaperContent)
