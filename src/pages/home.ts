import { layout } from './layout'
import { galleryImages, galleryVideos } from '../data/gallery-data'

// Pick featured images for homepage showcase
const featuredImages = galleryImages.slice(0, 12)
const showcaseImages = galleryImages.slice(0, 24)
const featuredVideos = galleryVideos.slice(0, 6)

const homeContent = `
<!-- ===== HERO ===== -->
<section style="min-height:100vh;background:linear-gradient(135deg,#050810 0%,#0B1525 40%,#0F1C35 70%,#080C14 100%);display:flex;align-items:center;position:relative;overflow:hidden;">
  <div class="grid-overlay"></div>
  <div class="orb" style="width:800px;height:800px;background:rgba(0,216,255,.04);top:-300px;left:-300px;"></div>
  <div class="orb" style="width:700px;height:700px;background:rgba(168,107,255,.04);bottom:-200px;right:-200px;"></div>
  <div class="orb" style="width:400px;height:400px;background:rgba(0,216,255,.03);top:50%;right:10%;"></div>

  <div class="max-w-7xl mx-auto px-6 py-28 w-full" style="position:relative;z-index:2;">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <!-- Live badge -->
        <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(0,216,255,.08);border:1px solid rgba(0,216,255,.2);border-radius:50px;padding:8px 20px;margin-bottom:28px;">
          <span style="width:8px;height:8px;background:#00D8FF;border-radius:50%;animation:pulse-glow 2s infinite;display:block;flex-shrink:0;"></span>
          <span style="font-size:.78rem;color:#00D8FF;font-weight:600;letter-spacing:.06em;">BNB CHAIN · WEB3 AI CREATIVE PLATFORM · LIVE</span>
        </div>

        <h1 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(3rem,6vw,5.2rem);line-height:1.02;margin-bottom:16px;">
          Where<br><span class="gradient-text">Art Thinks.</span>
        </h1>
        <p style="font-size:1.05rem;color:rgba(0,216,255,.7);font-weight:500;letter-spacing:.04em;margin-bottom:20px;">Intelligence Meets Imagination.</p>
        <p style="font-size:1rem;color:rgba(253,253,253,.6);line-height:1.9;max-width:540px;margin-bottom:40px;">
          The world's first AI-native creative intelligence platform on Web3 — inspired by Leonardo da Vinci's genius. Generate AI art, earn $DAVINCI tokens, mint NFTs, play in our Game Hub, and govern the future of creativity through DAO.
        </p>

        <div class="flex flex-wrap gap-4 mb-12">
          <a href="/create/image" class="btn-primary" style="font-size:1rem;padding:15px 32px;"><i class="fas fa-wand-magic-sparkles"></i> Start Creating Free</a>
          <a href="/whitepaper" class="btn-outline" style="font-size:1rem;padding:14px 32px;"><i class="fas fa-file-alt"></i> Read Whitepaper</a>
          <a href="https://x.com" target="_blank" style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:50px;padding:14px 28px;font-size:.95rem;font-weight:600;color:#FDFDFD;text-decoration:none;transition:all .3s;" onmouseover="this.style.background='rgba(255,255,255,.12)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
            <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#FDFDFD;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Follow on X
          </a>
        </div>

        <!-- Live Stats Row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div style="background:rgba(0,216,255,.05);border:1px solid rgba(0,216,255,.12);border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.4rem;font-weight:800;color:#00D8FF;" class="counter" data-target="100">0</div>
            <div style="font-size:.68rem;color:rgba(255,255,255,.4);margin-top:3px;">AI Artworks</div>
          </div>
          <div style="background:rgba(168,107,255,.05);border:1px solid rgba(168,107,255,.12);border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.4rem;font-weight:800;color:#A86BFF;" class="counter" data-target="8888">0</div>
            <div style="font-size:.68rem;color:rgba(255,255,255,.4);margin-top:3px;">Community</div>
          </div>
          <div style="background:rgba(0,216,255,.05);border:1px solid rgba(0,216,255,.12);border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.4rem;font-weight:800;color:#00D8FF;">8.88B</div>
            <div style="font-size:.68rem;color:rgba(255,255,255,.4);margin-top:3px;">$DAVINCI Supply</div>
          </div>
          <div style="background:rgba(168,107,255,.05);border:1px solid rgba(168,107,255,.12);border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.4rem;font-weight:800;color:#A86BFF;">Q4 2025</div>
            <div style="font-size:.68rem;color:rgba(255,255,255,.4);margin-top:3px;">TGE Launch</div>
          </div>
        </div>
      </div>

      <!-- Hero NFT Card Visual -->
      <div style="position:relative;display:flex;justify-content:center;align-items:center;">
        <div style="position:relative;width:340px;height:420px;">
          <!-- Floating glow rings -->
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:320px;height:320px;border-radius:50%;border:1px solid rgba(0,216,255,.1);animation:spin 20s linear infinite;"></div>
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:370px;height:370px;border-radius:50%;border:1px solid rgba(168,107,255,.07);animation:spin 30s linear infinite reverse;"></div>
          <!-- Card 3 (back) -->
          <div style="position:absolute;top:30px;left:5px;width:280px;height:340px;border-radius:20px;background:linear-gradient(135deg,#1a0533,#2d1b69);border:1px solid rgba(168,107,255,.2);transform:rotate(-8deg);overflow:hidden;">
            <img src="${featuredImages[2]?.thumb}" style="width:100%;height:100%;object-fit:cover;opacity:.4;" onerror="this.style.display='none'">
          </div>
          <!-- Card 2 (middle) -->
          <div style="position:absolute;top:15px;left:18px;width:280px;height:340px;border-radius:20px;background:linear-gradient(135deg,#0a2233,#1a4455);border:1px solid rgba(0,216,255,.25);transform:rotate(-3deg);overflow:hidden;">
            <img src="${featuredImages[8]?.thumb}" style="width:100%;height:100%;object-fit:cover;opacity:.55;" onerror="this.style.display='none'">
          </div>
          <!-- Card 1 (front) -->
          <div style="position:absolute;top:0;left:30px;width:280px;height:340px;border-radius:20px;background:linear-gradient(135deg,#1a0533,#2d1b69);border:1px solid rgba(0,216,255,.5);overflow:hidden;box-shadow:0 25px 70px rgba(0,0,0,.6),0 0 50px rgba(0,216,255,.12);">
            <img src="${featuredImages[34]?.thumb}" style="width:100%;height:100%;object-fit:cover;" onerror="this.style.background='linear-gradient(135deg,#1a0533,#00D8FF20)'">
            <div style="position:absolute;bottom:0;left:0;right:0;padding:16px;background:linear-gradient(to top,rgba(0,0,0,.95),transparent);">
              <div style="font-size:.82rem;font-weight:700;">${featuredImages[34]?.title || 'Rainbow Matrix'}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-top:6px;">
                <span style="font-size:.68rem;color:rgba(0,216,255,.8);">Midjourney v6</span>
                <span style="font-size:.75rem;color:#A86BFF;font-weight:700;">0.16 BNB</span>
              </div>
            </div>
            <div style="position:absolute;top:12px;right:12px;background:rgba(168,107,255,.3);border:1px solid rgba(168,107,255,.6);border-radius:8px;padding:4px 10px;font-size:.68rem;color:#A86BFF;font-weight:600;"><i class="fas fa-gem" style="margin-right:4px;"></i>NFT</div>
          </div>
          <!-- Floating badge -->
          <div style="position:absolute;bottom:-30px;right:-10px;background:rgba(8,12,20,.95);border:1px solid rgba(0,216,255,.3);border-radius:14px;padding:12px 16px;backdrop-filter:blur(10px);">
            <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-bottom:3px;">Latest Sale</div>
            <div style="font-size:.9rem;font-weight:700;color:#00D8FF;">0.22 BNB <span style="color:rgba(255,255,255,.3);font-size:.68rem;">($80)</span></div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);text-align:center;z-index:2;">
    <div style="font-size:.7rem;color:rgba(255,255,255,.25);letter-spacing:.12em;margin-bottom:8px;">SCROLL TO EXPLORE</div>
    <div style="width:1px;height:40px;background:linear-gradient(to bottom,rgba(0,216,255,.5),transparent);margin:0 auto;animation:pulse-glow 2s infinite;"></div>
  </div>
</section>

<!-- ===== TRUST BAR ===== -->
<section style="background:#05080F;padding:36px 0;border-top:1px solid rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.04);">
  <div class="max-w-7xl mx-auto px-6">
    <div style="display:flex;flex-wrap:wrap;gap:0;justify-content:center;align-items:center;">
      ${[
        {val:'100+',label:'AI Artworks Created',icon:'fas fa-images'},
        {val:'8,888+',label:'Community Members',icon:'fas fa-users'},
        {val:'$1M+',label:'Projected NFT Volume',icon:'fas fa-chart-line'},
        {val:'4',label:'AI Ecosystem Tools',icon:'fas fa-tools'},
        {val:'BEP-20',label:'BNB Chain Native',icon:'fas fa-link'},
        {val:'8.88B',label:'Total Token Supply',icon:'fas fa-coins'},
      ].map((s,i)=>`
        <div style="flex:1;min-width:140px;padding:20px;text-align:center;border-right:1px solid rgba(255,255,255,.05);">
          <i class="${s.icon}" style="font-size:1.4rem;background:linear-gradient(135deg,#00D8FF,#A86BFF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;display:block;"></i>
          <div style="font-size:1.3rem;font-weight:800;color:#FDFDFD;">${s.val}</div>
          <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:3px;">${s.label}</div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== X TWITTER COMMUNITY (TOP PRIORITY) ===== -->
<section style="background:linear-gradient(135deg,#050810,#080C14);padding:80px 0;position:relative;overflow:hidden;">
  <div class="orb" style="width:500px;height:500px;background:rgba(0,216,255,.03);top:-200px;right:-100px;"></div>
  <div class="max-w-5xl mx-auto px-6 text-center fade-up">
    <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(0,0,0,.5);border:1px solid rgba(255,255,255,.15);border-radius:50px;padding:10px 24px;margin-bottom:40px;">
      <svg viewBox="0 0 24 24" style="width:20px;height:20px;fill:#FDFDFD;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
      <span style="font-size:.82rem;font-weight:600;letter-spacing:.06em;">JOIN THE CONVERSATION ON X</span>
    </div>

    <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3.2rem);margin-bottom:20px;">
      Be Part of the <span class="gradient-text">Creative Revolution</span>
    </h2>
    <p style="font-size:1.05rem;color:rgba(253,253,253,.55);max-width:600px;margin:0 auto 40px;">
      Join 8,888+ artists, creators, and collectors reshaping the future of AI art and Web3. Follow us on X for alpha drops, NFT launches, and community rewards.
    </p>

    <!-- X Feed Mock Cards -->
    <div class="grid md:grid-cols-3 gap-4 mb-10">
      ${[
        { handle:'@DaVinciAI_Official', time:'2h ago', text:'🎨 Exciting news! Our AI Atelier just hit 100+ artworks generated by the community. The future of creative intelligence is here. #DaVinciAI #Web3Art #NFT', likes:'842', rt:'234' },
        { handle:'@DaVinciAI_Official', time:'1d ago', text:'🚀 DAVINCI token TGE approaching Q4 2025! Community rewards pool: 45% of 8.88B tokens goes DIRECTLY to creators and early supporters. Are you ready? #DAVINCI #BNBChain', likes:'1.2K', rt:'445' },
        { handle:'@DaVinciAI_Official', time:'3d ago', text:'🔥 Game Hub beta is LIVE! Play to earn $DAVINCI while competing in AI art creation challenges. First 1,000 players get Genesis NFT badges. #GameFi #Play2Earn', likes:'2.1K', rt:'789' },
      ].map(t=>`
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:20px;text-align:left;transition:all .3s;" onmouseover="this.style.borderColor='rgba(0,216,255,.3)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)'">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:14px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#00D8FF,#A86BFF);display:flex;align-items:center;justify-content:center;font-weight:800;font-size:.9rem;color:#080C14;flex-shrink:0;">D</div>
            <div>
              <div style="font-weight:700;font-size:.88rem;">${t.handle}</div>
              <div style="font-size:.72rem;color:rgba(255,255,255,.35);">${t.time}</div>
            </div>
            <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:rgba(255,255,255,.5);margin-left:auto;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
          <p style="font-size:.85rem;color:rgba(253,253,253,.7);line-height:1.7;margin-bottom:14px;">${t.text}</p>
          <div style="display:flex;gap:20px;">
            <span style="font-size:.78rem;color:rgba(255,255,255,.35);"><i class="fas fa-heart" style="color:#E0245E;margin-right:4px;"></i>${t.likes}</span>
            <span style="font-size:.78rem;color:rgba(255,255,255,.35);"><i class="fas fa-retweet" style="color:#00D8FF;margin-right:4px;"></i>${t.rt}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="flex flex-wrap justify-center gap-4">
      <a href="https://x.com" target="_blank" class="btn-primary" style="font-size:1rem;padding:14px 36px;">
        <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#080C14;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Follow @DaVinciAI_Official
      </a>
      <a href="https://t.me" target="_blank" class="btn-outline" style="font-size:1rem;padding:13px 32px;">
        <i class="fab fa-telegram"></i> Join Telegram
      </a>
    </div>
  </div>
</section>

<!-- ===== ECOSYSTEM ===== -->
<section id="ecosystem" style="padding:100px 0;background:#080C14;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">THE DAVINCI ECOSYSTEM</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        Four Pillars of <span class="gradient-text">Creative Intelligence</span>
      </h2>
      <div class="section-divider"></div>
      <p style="font-size:1rem;color:rgba(253,253,253,.5);max-width:600px;margin:20px auto 0;">An integrated Web3 ecosystem that puts AI creativity at the center of everything — art, gaming, ownership, and rewards.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${[
        { icon:'fas fa-gamepad', title:'DaVinci Game Hub', color:'#00D8FF', desc:'Compete in AI art creation challenges, play blockchain games, and earn $DAVINCI rewards. P2E mechanics meet AI creativity in our signature gaming arena.', tags:['Play-to-Earn','AI Challenges','Leaderboard'], link:'/create/image' },
        { icon:'fas fa-palette', title:'AI Atelier', color:'#A86BFF', desc:'Studio-grade AI generation powered by Midjourney, Stable Diffusion, DALL-E 3, and KlingAI. Transform prompts into gallery-worthy masterpieces.', tags:['Midjourney','DALL-E 3','SD XL'], link:'/create/image' },
        { icon:'fas fa-gem', title:'NFT Renaissance', color:'#00D8FF', desc:'Mint your AI creations as BEP-20 NFTs on BNB Chain. Trade, collect, and showcase in our curated marketplace with provenance on-chain.', tags:['BNB Chain','Mint','Marketplace'], link:'/create/image' },
        { icon:'fas fa-trophy', title:'DaVinci Rewards', color:'#A86BFF', desc:'45% of all $DAVINCI tokens allocated to community rewards. Earn through creation, curation, staking, referrals, and DAO governance participation.', tags:['Staking','Referral','DAO'], link:'/mypage' },
      ].map(e=>`
        <div class="card-glass fade-up" style="padding:28px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:-20px;right:-20px;width:100px;height:100px;border-radius:50%;background:${e.color};opacity:.05;"></div>
          <div style="width:54px;height:54px;border-radius:15px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
            <i class="${e.icon}" style="font-size:1.4rem;color:${e.color};"></i>
          </div>
          <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.05rem;margin-bottom:12px;">${e.title}</h3>
          <p style="font-size:.85rem;color:rgba(253,253,253,.55);line-height:1.7;margin-bottom:16px;">${e.desc}</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;">
            ${e.tags.map(t=>`<span style="font-size:.68rem;padding:3px 10px;border-radius:50px;background:rgba(255,255,255,.05);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.08);">${t}</span>`).join('')}
          </div>
          <a href="${e.link}" style="font-size:.82rem;color:${e.color};font-weight:600;text-decoration:none;">Explore <i class="fas fa-arrow-right" style="font-size:.75rem;margin-left:4px;"></i></a>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== AI IMAGE GALLERY ===== -->
<section style="padding:100px 0;background:#05080F;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:50px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">AI ARTWORK GALLERY</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        <span class="gradient-text">100+ AI Artworks</span> by Our Community
      </h2>
      <div class="section-divider"></div>
      <p style="font-size:.95rem;color:rgba(253,253,253,.5);max-width:560px;margin:20px auto 0;">Each piece is generated with cutting-edge AI models and can be minted as an NFT on BNB Chain.</p>
    </div>

    <!-- Filter tabs -->
    <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:36px;" id="galleryFilters">
      ${['All','Cyberpunk','Space Art','Abstract','Fantasy','Portrait','Tech Art'].map((f,i)=>`
        <button onclick="filterGallery('${f}')" id="filter-${f.replace(' ','-')}" style="padding:8px 20px;border-radius:50px;border:1px solid ${i===0?'#00D8FF':'rgba(255,255,255,.12)'};background:${i===0?'rgba(0,216,255,.15)':'transparent'};color:${i===0?'#00D8FF':'rgba(255,255,255,.5)'};font-size:.8rem;font-weight:600;cursor:pointer;transition:all .2s;">${f}</button>
      `).join('')}
    </div>

    <!-- Image Grid -->
    <div id="imageGrid" style="columns:2;column-gap:12px;" class="md:columns-3 lg:columns-4">
      ${showcaseImages.map((img, i) => `
        <div class="gallery-item fade-up" data-tags="${img.tags.join(',')}" data-style="${img.style}" style="break-inside:avoid;margin-bottom:12px;cursor:pointer;position:relative;border-radius:16px;overflow:hidden;background:#0D1829;" onclick="openLightbox('${img.url}','${img.title}','${img.model}','${img.price || 'Not Listed'}','${img.artist}')">
          <img src="${img.thumb}" alt="${img.title}" loading="lazy" style="width:100%;display:block;transition:transform .4s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
          <div style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.85) 0%,transparent 50%);opacity:0;transition:opacity .3s;" class="img-overlay"></div>
          <div style="position:absolute;bottom:0;left:0;right:0;padding:14px;opacity:0;transition:opacity .3s;" class="img-info">
            <div style="font-size:.8rem;font-weight:700;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${img.title}</div>
            <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;">
              <span style="font-size:.68rem;color:rgba(0,216,255,.8);">${img.model}</span>
              ${img.minted ? `<span style="font-size:.68rem;color:#A86BFF;font-weight:700;">${img.price}</span>` : `<span style="font-size:.68rem;color:rgba(255,255,255,.4);">Unminted</span>`}
            </div>
          </div>
          ${img.minted ? `<div style="position:absolute;top:10px;right:10px;background:rgba(168,107,255,.8);border-radius:6px;padding:3px 8px;font-size:.62rem;color:#fff;font-weight:700;">NFT</div>` : ''}
          <div style="position:absolute;top:10px;left:10px;background:rgba(0,0,0,.7);border-radius:6px;padding:3px 8px;font-size:.62rem;color:rgba(255,255,255,.7);">
            <i class="fas fa-heart" style="color:#E0245E;margin-right:3px;"></i>${img.likes}
          </div>
        </div>
      `).join('')}
    </div>

    <div class="text-center" style="margin-top:40px;">
      <a href="/create/image" class="btn-primary" style="font-size:1rem;padding:14px 36px;">
        <i class="fas fa-images"></i> View All 100+ Artworks
      </a>
    </div>
  </div>
</section>

<!-- ===== AI VIDEO GALLERY ===== -->
<section style="padding:100px 0;background:#080C14;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:50px;">
      <p style="font-size:.78rem;color:#A86BFF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">AI VIDEO CREATIONS</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        Motion <span class="gradient-text">Intelligence</span> in Action
      </h2>
      <div class="section-divider"></div>
      <p style="font-size:.95rem;color:rgba(253,253,253,.5);max-width:580px;margin:20px auto 0;">Generate stunning AI videos powered by KlingAI, HeyGen, and Nouvo.AI. Every video can be tokenized as an NFT.</p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${featuredVideos.map(v => `
        <div class="card-glass fade-up" style="overflow:hidden;cursor:pointer;" onclick="openVideoModal('${v.videoUrl}','${v.title}')">
          <div style="position:relative;padding-bottom:56.25%;background:#0D1829;overflow:hidden;">
            <img src="${v.thumb}" alt="${v.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .4s;" onmouseover="this.style.transform='scale(1.05)'" onmouseout="this.style.transform='scale(1)'">
            <div style="position:absolute;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;">
              <div style="width:56px;height:56px;border-radius:50%;background:rgba(0,216,255,.2);border:2px solid rgba(0,216,255,.6);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);transition:all .3s;" onmouseover="this.style.background='rgba(0,216,255,.4)'" onmouseout="this.style.background='rgba(0,216,255,.2)'">
                <i class="fas fa-play" style="color:#00D8FF;font-size:1.1rem;margin-left:3px;"></i>
              </div>
            </div>
            <div style="position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,.8);border-radius:6px;padding:4px 8px;font-size:.72rem;font-weight:700;">${v.duration}</div>
            <div style="position:absolute;top:10px;left:10px;background:rgba(168,107,255,.8);border-radius:6px;padding:3px 8px;font-size:.65rem;font-weight:700;">${v.model}</div>
          </div>
          <div style="padding:16px;">
            <h3 style="font-weight:700;font-size:.95rem;margin-bottom:6px;">${v.title}</h3>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:.78rem;color:rgba(255,255,255,.4);">${v.artist}</span>
              <span style="font-size:.78rem;color:rgba(255,255,255,.4);"><i class="fas fa-eye" style="margin-right:4px;"></i>${v.views.toLocaleString()}</span>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:4px;margin-top:10px;">
              ${v.tags.map(t=>`<span style="font-size:.62rem;padding:2px 8px;border-radius:50px;background:rgba(0,216,255,.08);color:rgba(0,216,255,.7);border:1px solid rgba(0,216,255,.1);">#${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="text-center" style="margin-top:40px;">
      <a href="/create/video" class="btn-primary" style="font-size:1rem;padding:14px 36px;background:linear-gradient(135deg,#A86BFF,#6B3FBF);">
        <i class="fas fa-video"></i> Explore All AI Videos
      </a>
    </div>
  </div>
</section>

<!-- ===== ABOUT / FEATURES ===== -->
<section id="about" style="padding:100px 0;background:#05080F;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">WHY DAVINCI AI</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        Built for the <span class="gradient-text">Next Generation</span> of Creators
      </h2>
      <div class="section-divider"></div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${[
        { icon:'fas fa-brain', title:'Multi-Model AI Engine', color:'#00D8FF', desc:'Access Midjourney v6, DALL-E 3, Stable Diffusion XL, KlingAI, HeyGen and more from a single unified platform. Always best-in-class generation.' },
        { icon:'fas fa-shield-halved', title:'Blockchain-Verified Ownership', color:'#A86BFF', desc:'Every creation is immutably recorded on BNB Chain. Provenance, authenticity, and ownership — all verifiable on-chain forever.' },
        { icon:'fas fa-coins', title:'Creator Monetization', color:'#00D8FF', desc:'Monetize your creativity directly. Earn $DAVINCI tokens, royalties from NFT sales, staking yields, and DAO governance rewards.' },
        { icon:'fas fa-users', title:'DAO Governance', color:'#A86BFF', desc:'$DAVINCI holders vote on platform features, fund allocations, partner integrations, and treasury decisions. True community-owned platform.' },
        { icon:'fas fa-lock', title:'Enterprise Security', color:'#00D8FF', desc:'Multi-signature smart contracts, third-party audits, cold storage treasury, and battle-tested security protocols protecting every transaction.' },
        { icon:'fas fa-globe', title:'Multi-Chain Expansion', color:'#A86BFF', desc:'BNB Chain first — then Ethereum, Polygon, Solana, and beyond. DaVinci AI is architected for a multi-chain creative future.' },
        { icon:'fas fa-robot', title:'AI Model Marketplace', color:'#00D8FF', desc:'Browse, license, and deploy community-built AI models. Creators earn royalties when their fine-tuned models are used by others.' },
        { icon:'fas fa-layer-group', title:'NFT Layering System', color:'#A86BFF', desc:'Compose complex NFTs with AI-generated layers. Mix styles, merge artworks, and create generative collections with on-chain randomness.' },
        { icon:'fas fa-chart-bar', title:'Real-time Analytics', color:'#00D8FF', desc:'Track floor prices, trading volume, creator earnings, and platform metrics in real-time. Full transparency for every participant.' },
      ].map(f=>`
        <div class="card-glass fade-up" style="padding:28px;">
          <div style="display:flex;align-items:center;gap:14px;margin-bottom:16px;">
            <div style="width:46px;height:46px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <i class="${f.icon}" style="font-size:1.2rem;color:${f.color};"></i>
            </div>
            <h3 style="font-weight:700;font-size:.95rem;">${f.title}</h3>
          </div>
          <p style="font-size:.85rem;color:rgba(253,253,253,.55);line-height:1.75;">${f.desc}</p>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== TOKENOMICS ===== -->
<section id="tokenomics" style="padding:100px 0;background:#080C14;position:relative;overflow:hidden;">
  <div class="orb" style="width:600px;height:600px;background:rgba(168,107,255,.04);top:-200px;right:-150px;"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#A86BFF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">$DAVINCI TOKEN</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        Tokenomics & <span class="gradient-text">Value Architecture</span>
      </h2>
      <div class="section-divider"></div>
    </div>

    <!-- Token Overview Cards -->
    <div class="grid md:grid-cols-4 gap-4 mb-12 fade-up">
      ${[
        { label:'Total Supply', value:'8,888,888,888', icon:'fas fa-coins', color:'#00D8FF' },
        { label:'Network', value:'BNB Chain', icon:'fas fa-link', color:'#F0B90B' },
        { label:'Token Standard', value:'BEP-20', icon:'fas fa-file-code', color:'#A86BFF' },
        { label:'TGE Date', value:'Q4 2025', icon:'fas fa-calendar', color:'#00D8FF' },
      ].map(t=>`
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;text-align:center;">
          <i class="${t.icon}" style="font-size:1.6rem;color:${t.color};margin-bottom:12px;display:block;"></i>
          <div style="font-size:1.2rem;font-weight:800;color:${t.color};">${t.value}</div>
          <div style="font-size:.75rem;color:rgba(255,255,255,.4);margin-top:4px;">${t.label}</div>
        </div>
      `).join('')}
    </div>

    <!-- Allocation Chart + Details -->
    <div class="grid lg:grid-cols-2 gap-12 items-center">
      <div class="fade-up" style="display:flex;justify-content:center;">
        <div style="position:relative;width:320px;height:320px;">
          <canvas id="tokenomicsChart" width="320" height="320"></canvas>
          <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);text-align:center;">
            <div style="font-size:1.8rem;font-weight:800;color:#FDFDFD;">8.88B</div>
            <div style="font-size:.75rem;color:rgba(255,255,255,.4);">Total Supply</div>
          </div>
        </div>
      </div>

      <div class="fade-up">
        <div style="display:flex;flex-direction:column;gap:12px;">
          ${[
            { label:'Community Rewards', pct:45, val:'4,000,000,000', color:'#00D8FF' },
            { label:'Investors', pct:15, val:'1,333,333,333', color:'#A86BFF' },
            { label:'Ecosystem Growth', pct:13, val:'1,155,555,556', color:'#3DCFFF' },
            { label:'Team & Advisors', pct:12, val:'1,066,666,667', color:'#7B5FBF' },
            { label:'Treasury', pct:10, val:'888,888,889', color:'#00A8CC' },
            { label:'Artist Fund', pct:5, val:'444,444,444', color:'#D4A0FF' },
          ].map(a=>`
            <div>
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:6px;">
                <div style="display:flex;align-items:center;gap:10px;">
                  <div style="width:10px;height:10px;border-radius:50%;background:${a.color};flex-shrink:0;"></div>
                  <span style="font-size:.88rem;font-weight:600;">${a.label}</span>
                </div>
                <div style="text-align:right;">
                  <span style="font-size:.95rem;font-weight:800;color:${a.color};">${a.pct}%</span>
                  <span style="font-size:.7rem;color:rgba(255,255,255,.35);margin-left:8px;">${(parseInt(a.val.replace(/,/g,''))/1e9).toFixed(3)}B</span>
                </div>
              </div>
              <div style="height:6px;background:rgba(255,255,255,.07);border-radius:3px;">
                <div style="height:100%;width:${a.pct}%;background:${a.color};border-radius:3px;transition:width 1s ease-in-out;" class="bar-fill"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Vesting Policy Section -->
    <div class="fade-up" style="margin-top:80px;">
      <div class="text-center" style="margin-bottom:40px;">
        <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.6rem;margin-bottom:12px;">Vesting Schedule & <span class="gradient-text">Token Unlock Timeline</span></h3>
        <p style="font-size:.9rem;color:rgba(253,253,253,.5);">Designed for long-term sustainability — all insider allocations are locked to prevent dumping.</p>
      </div>

      <!-- Vesting Chart -->
      <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:32px;margin-bottom:32px;">
        <canvas id="vestingChart" height="120"></canvas>
      </div>

      <!-- Vesting Table -->
      <div style="overflow-x:auto;">
        <table style="width:100%;border-collapse:collapse;font-size:.85rem;">
          <thead>
            <tr style="border-bottom:1px solid rgba(255,255,255,.1);">
              <th style="text-align:left;padding:12px 16px;color:rgba(255,255,255,.5);font-weight:600;">Allocation</th>
              <th style="text-align:center;padding:12px 16px;color:rgba(255,255,255,.5);font-weight:600;">%</th>
              <th style="text-align:center;padding:12px 16px;color:rgba(255,255,255,.5);font-weight:600;">TGE Unlock</th>
              <th style="text-align:center;padding:12px 16px;color:rgba(255,255,255,.5);font-weight:600;">Cliff</th>
              <th style="text-align:center;padding:12px 16px;color:rgba(255,255,255,.5);font-weight:600;">Vesting Duration</th>
            </tr>
          </thead>
          <tbody>
            ${[
              { name:'Community Rewards', pct:'45%', tge:'10%', cliff:'None', vest:'36 months linear', color:'#00D8FF' },
              { name:'Investors', pct:'15%', tge:'5%', cliff:'12 months', vest:'24 months linear', color:'#A86BFF' },
              { name:'Ecosystem Growth', pct:'13%', tge:'8%', cliff:'6 months', vest:'30 months linear', color:'#3DCFFF' },
              { name:'Team & Advisors', pct:'12%', tge:'0%', cliff:'18 months', vest:'36 months linear', color:'#7B5FBF' },
              { name:'Treasury', pct:'10%', tge:'5%', cliff:'6 months', vest:'48 months linear', color:'#00A8CC' },
              { name:'Artist Fund', pct:'5%', tge:'10%', cliff:'3 months', vest:'24 months linear', color:'#D4A0FF' },
            ].map((r,i)=>`
              <tr style="border-bottom:1px solid rgba(255,255,255,.05);${i%2===0?'background:rgba(255,255,255,.01)':''}">
                <td style="padding:14px 16px;display:flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:${r.color};display:inline-block;flex-shrink:0;"></span>${r.name}</td>
                <td style="padding:14px 16px;text-align:center;font-weight:700;color:${r.color};">${r.pct}</td>
                <td style="padding:14px 16px;text-align:center;">${r.tge}</td>
                <td style="padding:14px 16px;text-align:center;color:rgba(255,255,255,.6);">${r.cliff}</td>
                <td style="padding:14px 16px;text-align:center;color:rgba(255,255,255,.6);">${r.vest}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</section>

<!-- ===== ROADMAP ===== -->
<section id="roadmap" style="padding:100px 0;background:#05080F;position:relative;overflow:hidden;">
  <div class="orb" style="width:500px;height:500px;background:rgba(0,216,255,.03);bottom:-100px;left:-100px;"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">ROADMAP 2025–2027</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        The Path to <span class="gradient-text">Creative Infinity</span>
      </h2>
      <div class="section-divider"></div>
    </div>

    <div style="position:relative;">
      <!-- Center line -->
      <div class="hidden lg:block" style="position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,transparent,rgba(0,216,255,.3) 10%,rgba(0,216,255,.3) 90%,transparent);transform:translateX(-50%);"></div>

      <div style="display:flex;flex-direction:column;gap:32px;">
        ${[
          { phase:'Phase 1', period:'Q1–Q2 2025', status:'completed', title:'Genesis & Foundation', items:['Project reveal & whitepaper release','Website v1.0 launch','Community building (X, Telegram)','AI model integrations (Midjourney, DALL-E 3)','Core team expansion'] },
          { phase:'Phase 2', period:'Q3–Q4 2025', status:'current', title:'Platform Launch & TGE', items:['AI Atelier beta launch','DaVinci Game Hub soft launch','NFT minting engine live','$DAVINCI TGE on BNB Chain','Initial DEX listing (PancakeSwap)','Smart contract audit complete'] },
          { phase:'Phase 3', period:'Q1–Q2 2026', status:'upcoming', title:'Ecosystem Expansion', items:['NFT Marketplace public launch','DAO governance activation','Staking & yield farming live','Video generation (KlingAI, HeyGen)','Mobile app beta (iOS & Android)','10,000+ community milestone'] },
          { phase:'Phase 4', period:'Q3–Q4 2026', status:'upcoming', title:'Multi-Chain & Scale', items:['Ethereum & Polygon bridge','AI Model Marketplace launch','Layer 2 integration for gas optimization','Creator royalty automation','100,000+ users milestone','Enterprise partnership program'] },
          { phase:'Phase 5', period:'2027+', status:'future', title:'The Renaissance Protocol', items:['Decentralized AI training platform','DaVinci L2 blockchain research','Cross-chain NFT portability','AI DAO autonomous governance','Global artist residency program','1M+ creators onboarded'] },
        ].map((r, i)=>`
          <div class="fade-up grid lg:grid-cols-2 gap-8 items-center" style="${i%2===1?'direction:rtl;':''}" >
            <!-- Content -->
            <div style="${i%2===1?'direction:ltr;':''}">
              <div style="background:rgba(255,255,255,.02);border:1px solid ${r.status==='completed'?'rgba(0,216,255,.3)':r.status==='current'?'rgba(168,107,255,.4)':'rgba(255,255,255,.08)'};border-radius:20px;padding:28px;position:relative;overflow:hidden;">
                ${r.status==='current'?`<div style="position:absolute;top:0;left:0;right:0;height:2px;background:linear-gradient(90deg,#A86BFF,#00D8FF);"></div>`:''}
                <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;flex-wrap:wrap;">
                  <span style="font-size:.7rem;font-weight:700;padding:4px 12px;border-radius:50px;background:${r.status==='completed'?'rgba(0,216,255,.15)':r.status==='current'?'rgba(168,107,255,.2)':'rgba(255,255,255,.07)'};color:${r.status==='completed'?'#00D8FF':r.status==='current'?'#A86BFF':'rgba(255,255,255,.4)'};">
                    ${r.status==='completed'?'✓ COMPLETED':r.status==='current'?'🔄 IN PROGRESS':'◯ UPCOMING'}
                  </span>
                  <span style="font-size:.8rem;color:rgba(255,255,255,.4);">${r.period}</span>
                </div>
                <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.15rem;margin-bottom:16px;">${r.phase}: ${r.title}</h3>
                <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
                  ${r.items.map(item=>`
                    <li style="display:flex;align-items:center;gap:10px;font-size:.85rem;color:rgba(253,253,253,.7);">
                      <i class="fas fa-${r.status==='completed'?'check-circle" style="color:#00D8FF':r.status==='current'?'circle-dot" style="color:#A86BFF':'circle" style="color:rgba(255,255,255,.2)'};" style="font-size:.8rem;flex-shrink:0;"></i>
                      ${item}
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
            <!-- Phase label (center) -->
            <div class="hidden lg:flex" style="${i%2===1?'direction:ltr;justify-content:flex-end;':'justify-content:flex-start;'}align-items:center;">
              <div style="background:rgba(8,12,20,.9);border:2px solid ${r.status==='completed'?'#00D8FF':r.status==='current'?'#A86BFF':'rgba(255,255,255,.15)'};border-radius:16px;padding:20px 28px;text-align:center;min-width:160px;">
                <div style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.3rem;color:${r.status==='completed'?'#00D8FF':r.status==='current'?'#A86BFF':'rgba(255,255,255,.3)'};">${r.phase}</div>
                <div style="font-size:.75rem;color:rgba(255,255,255,.35);margin-top:4px;">${r.period}</div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  </div>
</section>

<!-- ===== TEAM ===== -->
<section style="padding:100px 0;background:#080C14;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#A86BFF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">CORE TEAM</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        The <span class="gradient-text">Visionaries</span> Behind DaVinci AI
      </h2>
      <div class="section-divider"></div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${[
        { name:'Leonardo Chen', role:'CEO & Co-Founder', bg:'#00D8FF', icon:'fas fa-crown', desc:'Former AI Research Lead at DeepMind. 10+ years building generative AI systems. Blockchain architect since 2017.', x:'@LeonardoChenAI' },
        { name:'Aria Nakamoto', role:'CTO & Co-Founder', bg:'#A86BFF', icon:'fas fa-code', desc:'Ex-Ethereum core contributor. Solidity expert with 5 deployed DeFi protocols. Smart contract security specialist.', x:'@AriaNakamoto' },
        { name:'Marcus Rivera', role:'Chief Creative Officer', bg:'#00D8FF', icon:'fas fa-palette', desc:'Award-winning digital artist. First NFT collection sold for $2.4M. Collaborator with Beeple and Pak.', x:'@MarcusRiveraArt' },
        { name:'Yuki Tanaka', role:'Head of Partnerships', bg:'#A86BFF', icon:'fas fa-handshake', desc:'Built partnerships at Binance NFT and Opensea. Connected with 50+ VC funds and 200+ Web3 projects globally.', x:'@YukiTanakaWeb3' },
      ].map(m=>`
        <div class="card-glass fade-up" style="padding:28px;text-align:center;">
          <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,${m.bg}22,${m.bg}44);border:2px solid ${m.bg}44;display:flex;align-items:center;justify-content:center;margin:0 auto 16px;">
            <i class="${m.icon}" style="font-size:1.8rem;color:${m.bg};"></i>
          </div>
          <h3 style="font-weight:700;font-size:1rem;margin-bottom:4px;">${m.name}</h3>
          <p style="font-size:.78rem;color:rgba(0,216,255,.7);margin-bottom:12px;">${m.role}</p>
          <p style="font-size:.8rem;color:rgba(253,253,253,.5);line-height:1.65;margin-bottom:16px;">${m.desc}</p>
          <a href="https://x.com" target="_blank" style="font-size:.78rem;color:rgba(255,255,255,.4);text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:color .2s;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.4)'">
            <svg viewBox="0 0 24 24" style="width:14px;height:14px;fill:currentColor;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            ${m.x}
          </a>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== PARTNERS ===== -->
<section id="partners" style="padding:100px 0;background:#05080F;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">POWERED BY</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        World-Class <span class="gradient-text">AI & Web3 Partners</span>
      </h2>
      <div class="section-divider"></div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
      ${[
        { name:'OpenAI', icon:'fas fa-robot', color:'#10a37f', desc:'DALL-E 3' },
        { name:'Midjourney', icon:'fas fa-wand-magic-sparkles', color:'#9B59B6', desc:'v6 API' },
        { name:'KlingAI', icon:'fas fa-video', color:'#E74C3C', desc:'Video Gen' },
        { name:'HeyGen', icon:'fas fa-film', color:'#3498DB', desc:'Avatar AI' },
        { name:'Wrtn.AI', icon:'fas fa-pen-nib', color:'#2ECC71', desc:'Creative AI' },
        { name:'Nouvo.AI', icon:'fas fa-sparkles', color:'#F39C12', desc:'Video Tools' },
        { name:'BNB Chain', icon:'fas fa-link', color:'#F0B90B', desc:'Infrastructure' },
      ].map(p=>`
        <div class="card-glass fade-up" style="padding:20px;text-align:center;cursor:pointer;" onmouseover="this.style.borderColor='rgba(0,216,255,.3)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)'">
          <div style="width:48px;height:48px;border-radius:12px;background:${p.color}18;border:1px solid ${p.color}33;display:flex;align-items:center;justify-content:center;margin:0 auto 12px;">
            <i class="${p.icon}" style="font-size:1.2rem;color:${p.color};"></i>
          </div>
          <div style="font-size:.85rem;font-weight:700;">${p.name}</div>
          <div style="font-size:.7rem;color:rgba(255,255,255,.35);margin-top:3px;">${p.desc}</div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== FAQ ===== -->
<section style="padding:100px 0;background:#080C14;position:relative;">
  <div class="max-w-3xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">FREQUENTLY ASKED</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        Got <span class="gradient-text">Questions?</span>
      </h2>
      <div class="section-divider"></div>
    </div>

    <div style="display:flex;flex-direction:column;gap:12px;">
      ${[
        { q:'What is $DAVINCI token and how can I earn it?', a:'$DAVINCI is a BEP-20 utility and governance token on BNB Chain with a total supply of 8,888,888,888. You can earn $DAVINCI by creating AI art, winning Game Hub challenges, participating in NFT marketplace activities, staking tokens, referring new users, and voting in DAO governance.' },
        { q:'When is the Token Generation Event (TGE)?', a:'The TGE is scheduled for Q4 2025. Early community members will receive priority access. 45% of total supply (4B tokens) is allocated to community rewards with a 10% TGE unlock and 36-month linear vesting.' },
        { q:'Do I need crypto experience to use DaVinci AI?', a:'No! DaVinci AI is designed for both Web3 natives and traditional artists. You can log in with Google and start creating AI art immediately. You only need a crypto wallet (MetaMask) when you want to mint NFTs or claim $DAVINCI tokens.' },
        { q:'What AI models are available on the platform?', a:'DaVinci AI integrates Midjourney v6, DALL-E 3, Stable Diffusion XL, KlingAI, HeyGen, Wrtn.AI, and Nouvo.AI. New models are continuously added based on community governance votes.' },
        { q:'How does NFT minting work on DaVinci AI?', a:'After generating an AI artwork, you can mint it as a BEP-20 NFT on BNB Chain with one click. The minting fee is paid in BNB, and your artwork becomes a verifiable on-chain asset with full provenance history. You retain full IP rights.' },
        { q:'What is the DaVinci DAO and how do I participate?', a:'DaVinci DAO is our community governance system launching in Q2 2026. $DAVINCI holders vote on platform upgrades, treasury allocations, new AI model integrations, and partnership decisions. 1 $DAVINCI = 1 vote.' },
        { q:'Is the smart contract audited?', a:'Yes. DaVinci AI smart contracts undergo third-party security audits before mainnet deployment. Audit reports will be published on our GitHub and website. We use multi-signature wallets for treasury management.' },
      ].map((item, i) => `
        <div class="faq-item fade-up" style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:16px;overflow:hidden;">
          <button onclick="toggleFaq(${i})" style="width:100%;padding:20px 24px;text-align:left;background:none;border:none;color:#FDFDFD;font-family:inherit;cursor:pointer;display:flex;justify-content:space-between;align-items:center;gap:12px;">
            <span style="font-weight:600;font-size:.95rem;">${item.q}</span>
            <i class="fas fa-chevron-down faq-icon-${i}" style="color:rgba(0,216,255,.7);transition:transform .3s;flex-shrink:0;"></i>
          </button>
          <div id="faq-answer-${i}" style="max-height:0;overflow:hidden;transition:max-height .4s ease-out;">
            <div style="padding:0 24px 20px;font-size:.88rem;color:rgba(253,253,253,.6);line-height:1.8;">${item.a}</div>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== CTA ===== -->
<section style="padding:100px 0;background:linear-gradient(135deg,#0B1525,#0F1C35);position:relative;overflow:hidden;">
  <div class="orb" style="width:600px;height:600px;background:rgba(0,216,255,.06);top:-200px;left:-200px;"></div>
  <div class="orb" style="width:600px;height:600px;background:rgba(168,107,255,.06);bottom:-200px;right:-200px;"></div>
  <div class="max-w-4xl mx-auto px-6 text-center fade-up" style="position:relative;z-index:2;">
    <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:20px;">JOIN THE MOVEMENT</p>
    <h2 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(2.5rem,5vw,4rem);line-height:1.1;margin-bottom:24px;">
      The Future of Art<br><span class="gradient-text">Starts With You</span>
    </h2>
    <p style="font-size:1.05rem;color:rgba(253,253,253,.6);max-width:560px;margin:0 auto 44px;line-height:1.8;">
      Don't just witness the AI art revolution — be part of it. Create, earn, own, and govern with DaVinci AI.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="/create/image" class="btn-primary" style="font-size:1.05rem;padding:16px 40px;"><i class="fas fa-wand-magic-sparkles"></i> Start Creating Free</a>
      <a href="https://x.com" target="_blank" class="btn-outline" style="font-size:1.05rem;padding:15px 36px;">
        <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#00D8FF;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Join on X
      </a>
      <a href="https://t.me" target="_blank" class="btn-outline" style="font-size:1.05rem;padding:15px 36px;border-color:rgba(168,107,255,.4);color:#A86BFF;">
        <i class="fab fa-telegram"></i> Telegram
      </a>
    </div>
  </div>
</section>

<!-- ===== FOOTER ===== -->
<footer style="background:#03050A;padding:60px 0 30px;border-top:1px solid rgba(255,255,255,.05);">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-8 mb-12">
      <!-- Brand -->
      <div>
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:10px;display:flex;align-items:center;justify-content:center;">
            <span style="font-family:'Poppins',sans-serif;font-weight:900;font-size:.95rem;color:#080C14;">D</span>
          </div>
          <span style="font-family:'Poppins',sans-serif;font-weight:700;">DaVinci <span class="gradient-text">AI</span></span>
        </div>
        <p style="font-size:.82rem;color:rgba(255,255,255,.4);line-height:1.7;margin-bottom:16px;">Where Art Thinks.<br>Intelligence Meets Imagination.</p>
        <div style="display:flex;gap:10px;">
          <a href="https://x.com" target="_blank" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;transition:all .2s;text-decoration:none;" onmouseover="this.style.background='rgba(255,255,255,.15)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
            <svg viewBox="0 0 24 24" style="width:15px;height:15px;fill:#FDFDFD;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </a>
          <a href="https://t.me" target="_blank" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;transition:all .2s;text-decoration:none;" onmouseover="this.style.background='rgba(255,255,255,.15)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
            <i class="fab fa-telegram" style="color:#FDFDFD;font-size:.85rem;"></i>
          </a>
          <a href="https://discord.com" target="_blank" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;transition:all .2s;text-decoration:none;" onmouseover="this.style.background='rgba(255,255,255,.15)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
            <i class="fab fa-discord" style="color:#FDFDFD;font-size:.85rem;"></i>
          </a>
          <a href="https://github.com/vinsenzo83/davinci-ai" target="_blank" style="width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.06);display:flex;align-items:center;justify-content:center;transition:all .2s;text-decoration:none;" onmouseover="this.style.background='rgba(255,255,255,.15)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
            <i class="fab fa-github" style="color:#FDFDFD;font-size:.85rem;"></i>
          </a>
        </div>
      </div>

      <!-- Platform -->
      <div>
        <h4 style="font-weight:700;font-size:.9rem;margin-bottom:16px;">Platform</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
          ${[
            {label:'AI Image Studio',href:'/create/image'},
            {label:'AI Video Lab',href:'/create/video'},
            {label:'NFT Marketplace',href:'/create/image'},
            {label:'Game Hub',href:'/'},
            {label:'Staking & Rewards',href:'/mypage'},
            {label:'DAO Governance',href:'/'},
          ].map(l=>`<li><a href="${l.href}" style="font-size:.83rem;color:rgba(255,255,255,.4);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.4)'">${l.label}</a></li>`).join('')}
        </ul>
      </div>

      <!-- Resources -->
      <div>
        <h4 style="font-weight:700;font-size:.9rem;margin-bottom:16px;">Resources</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
          ${[
            {label:'Whitepaper',href:'/whitepaper'},
            {label:'GitHub Docs',href:'https://github.com/vinsenzo83/davinci-ai'},
            {label:'Token Contract',href:'#'},
            {label:'Audit Report',href:'#'},
            {label:'Brand Kit',href:'#'},
            {label:'Developer API',href:'#'},
          ].map(l=>`<li><a href="${l.href}" target="${l.href.startsWith('http')?'_blank':'_self'}" style="font-size:.83rem;color:rgba(255,255,255,.4);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='#A86BFF'" onmouseout="this.style.color='rgba(255,255,255,.4)'">${l.label}</a></li>`).join('')}
        </ul>
      </div>

      <!-- Community -->
      <div>
        <h4 style="font-weight:700;font-size:.9rem;margin-bottom:16px;">Community</h4>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:10px;">
          ${[
            {label:'X (Twitter)',href:'https://x.com',icon:'fab fa-x-twitter'},
            {label:'Telegram',href:'https://t.me',icon:'fab fa-telegram'},
            {label:'Discord',href:'https://discord.com',icon:'fab fa-discord'},
            {label:'Medium Blog',href:'#',icon:'fab fa-medium'},
            {label:'YouTube',href:'#',icon:'fab fa-youtube'},
            {label:'Reddit',href:'#',icon:'fab fa-reddit'},
          ].map(l=>`<li><a href="${l.href}" target="_blank" style="font-size:.83rem;color:rgba(255,255,255,.4);text-decoration:none;transition:color .2s;display:flex;align-items:center;gap:8px;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.4)'"><i class="${l.icon}"></i>${l.label}</a></li>`).join('')}
        </ul>
      </div>
    </div>

    <div style="border-top:1px solid rgba(255,255,255,.05);padding-top:24px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
      <p style="font-size:.78rem;color:rgba(255,255,255,.25);">© 2025 DaVinci AI. All rights reserved. Built on BNB Chain.</p>
      <div style="display:flex;gap:16px;">
        ${['Privacy Policy','Terms of Service','Cookie Policy'].map(l=>`<a href="#" style="font-size:.75rem;color:rgba(255,255,255,.25);text-decoration:none;transition:color .2s;" onmouseover="this.style.color='rgba(255,255,255,.6)'" onmouseout="this.style.color='rgba(255,255,255,.25)'">${l}</a>`).join('')}
      </div>
      <div style="font-size:.72rem;color:rgba(255,255,255,.15);">$DAVINCI is not a security. Not financial advice.</div>
    </div>
  </div>
</footer>

<!-- ===== LIGHTBOX MODAL ===== -->
<div id="lightboxModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:1000;align-items:center;justify-content:center;backdrop-filter:blur(10px);">
  <button onclick="closeLightbox()" style="position:absolute;top:20px;right:20px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:50%;width:44px;height:44px;color:#FDFDFD;font-size:1.1rem;cursor:pointer;"><i class="fas fa-times"></i></button>
  <div style="max-width:800px;width:90%;max-height:90vh;overflow-y:auto;">
    <img id="lightboxImg" src="" alt="" style="width:100%;border-radius:16px;display:block;margin-bottom:16px;">
    <div style="background:rgba(255,255,255,.05);border-radius:12px;padding:20px;">
      <div style="display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:12px;">
        <div>
          <h3 id="lightboxTitle" style="font-weight:700;font-size:1.1rem;margin-bottom:4px;"></h3>
          <p id="lightboxArtist" style="font-size:.8rem;color:rgba(255,255,255,.4);"></p>
        </div>
        <div style="text-align:right;">
          <div id="lightboxPrice" style="font-size:1.1rem;font-weight:800;color:#A86BFF;margin-bottom:4px;"></div>
          <a href="/create/image" class="btn-primary" style="font-size:.82rem;padding:8px 20px;"><i class="fas fa-gem"></i> Mint as NFT</a>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- ===== VIDEO MODAL ===== -->
<div id="videoModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.92);z-index:1000;align-items:center;justify-content:center;backdrop-filter:blur(10px);">
  <button onclick="closeVideoModal()" style="position:absolute;top:20px;right:20px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:50%;width:44px;height:44px;color:#FDFDFD;font-size:1.1rem;cursor:pointer;"><i class="fas fa-times"></i></button>
  <div style="max-width:900px;width:90%;">
    <h3 id="videoModalTitle" style="font-weight:700;font-size:1.1rem;margin-bottom:12px;text-align:center;"></h3>
    <video id="videoModalPlayer" controls style="width:100%;border-radius:16px;background:#000;" src=""></video>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
// ===== COUNTER ANIMATION =====
function animateCounters(){
  document.querySelectorAll('.counter').forEach(el=>{
    const target=+el.dataset.target;
    let count=0;
    const step=Math.ceil(target/80);
    const timer=setInterval(()=>{
      count=Math.min(count+step,target);
      el.textContent=count.toLocaleString();
      if(count>=target)clearInterval(timer);
    },20);
  });
}

// ===== FADE UP OBSERVER =====
const observer=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      e.target.classList.add('visible');
      // hover effects for image cards
      const overlay=e.target.querySelector('.img-overlay');
      const info=e.target.querySelector('.img-info');
      if(overlay){ e.target.addEventListener('mouseover',()=>{overlay.style.opacity='1';info.style.opacity='1';}); e.target.addEventListener('mouseout',()=>{overlay.style.opacity='0';info.style.opacity='0';}); }
    }
  });
},{threshold:0.1});
document.querySelectorAll('.fade-up').forEach(el=>observer.observe(el));

// ===== BAR FILL ANIMATION =====
const barObserver=new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting) e.target.querySelectorAll('.bar-fill').forEach(b=>b.style.width=b.style.width);
  });
},{threshold:0.3});

// ===== TOKENOMICS CHART =====
window.addEventListener('load', ()=>{
  animateCounters();
  const ctx=document.getElementById('tokenomicsChart')?.getContext('2d');
  if(ctx){
    new Chart(ctx,{
      type:'doughnut',
      data:{
        labels:['Community Rewards','Investors','Ecosystem Growth','Team','Treasury','Artist Fund'],
        datasets:[{
          data:[45,15,13,12,10,5],
          backgroundColor:['#00D8FF','#A86BFF','#3DCFFF','#7B5FBF','#00A8CC','#D4A0FF'],
          borderColor:'#080C14',
          borderWidth:3,
          hoverOffset:8
        }]
      },
      options:{
        responsive:false,
        cutout:'72%',
        plugins:{
          legend:{display:false},
          tooltip:{
            callbacks:{label:ctx=>ctx.label+': '+ctx.parsed+'%'}
          }
        }
      }
    });
  }

  // ===== VESTING CHART =====
  const vCtx=document.getElementById('vestingChart')?.getContext('2d');
  if(vCtx){
    const months=[...Array(61).keys()];
    const community=months.map(m=>{ if(m===0)return 10; if(m<1)return 10; return Math.min(10+(m/36)*90,100); });
    const investors=months.map(m=>{ if(m<12)return 5; return Math.min(5+((m-12)/24)*95,100); });
    const team=months.map(m=>{ if(m<18)return 0; return Math.min(((m-18)/36)*100,100); });
    const ecosystem=months.map(m=>{ if(m<6)return 8; return Math.min(8+((m-6)/30)*92,100); });
    new Chart(vCtx,{
      type:'line',
      data:{
        labels:months.map(m=>m===0?'TGE':m%12===0?'Month '+m:''),
        datasets:[
          {label:'Community (45%)',data:community,borderColor:'#00D8FF',backgroundColor:'rgba(0,216,255,.08)',fill:true,tension:.4,pointRadius:0},
          {label:'Investors (15%)',data:investors,borderColor:'#A86BFF',backgroundColor:'rgba(168,107,255,.06)',fill:true,tension:.4,pointRadius:0},
          {label:'Team (12%)',data:team,borderColor:'#7B5FBF',backgroundColor:'rgba(123,95,191,.05)',fill:true,tension:.4,pointRadius:0},
          {label:'Ecosystem (13%)',data:ecosystem,borderColor:'#3DCFFF',backgroundColor:'rgba(61,207,255,.05)',fill:true,tension:.4,pointRadius:0},
        ]
      },
      options:{
        responsive:true,
        plugins:{
          legend:{labels:{color:'rgba(255,255,255,.6)',font:{size:11}}},
          tooltip:{mode:'index',intersect:false}
        },
        scales:{
          x:{ticks:{color:'rgba(255,255,255,.3)',font:{size:10}},grid:{color:'rgba(255,255,255,.04)'}},
          y:{ticks:{color:'rgba(255,255,255,.3)',font:{size:10},callback:v=>v+'%'},grid:{color:'rgba(255,255,255,.04)'},min:0,max:100}
        }
      }
    });
  }
});

// ===== GALLERY FILTER =====
function filterGallery(style){
  const allBtns=document.querySelectorAll('#galleryFilters button');
  allBtns.forEach(b=>{
    b.style.borderColor='rgba(255,255,255,.12)';
    b.style.background='transparent';
    b.style.color='rgba(255,255,255,.5)';
  });
  const activeBtn=document.getElementById('filter-'+style.replace(' ','-'));
  if(activeBtn){
    activeBtn.style.borderColor='#00D8FF';
    activeBtn.style.background='rgba(0,216,255,.15)';
    activeBtn.style.color='#00D8FF';
  }
  document.querySelectorAll('.gallery-item').forEach(item=>{
    if(style==='All'){ item.style.display='block'; return; }
    const tags=(item.dataset.tags||'').toLowerCase();
    const itemStyle=(item.dataset.style||'').toLowerCase();
    const show=tags.includes(style.toLowerCase())||itemStyle.toLowerCase().includes(style.toLowerCase());
    item.style.display=show?'block':'none';
  });
}

// ===== LIGHTBOX =====
function openLightbox(url,title,model,price,artist){
  document.getElementById('lightboxImg').src=url;
  document.getElementById('lightboxTitle').textContent=title;
  document.getElementById('lightboxArtist').textContent='by '+artist+' · '+model;
  document.getElementById('lightboxPrice').textContent=price==='Not Listed'?'Not Listed':price+' BNB';
  const modal=document.getElementById('lightboxModal');
  modal.style.display='flex';
  document.body.style.overflow='hidden';
}
function closeLightbox(){
  document.getElementById('lightboxModal').style.display='none';
  document.body.style.overflow='';
}

// ===== VIDEO MODAL =====
function openVideoModal(url,title){
  document.getElementById('videoModalTitle').textContent=title;
  document.getElementById('videoModalPlayer').src=url;
  document.getElementById('videoModalPlayer').play();
  const modal=document.getElementById('videoModal');
  modal.style.display='flex';
  document.body.style.overflow='hidden';
}
function closeVideoModal(){
  const player=document.getElementById('videoModalPlayer');
  player.pause();
  player.src='';
  document.getElementById('videoModal').style.display='none';
  document.body.style.overflow='';
}

// ===== FAQ =====
function toggleFaq(i){
  const answer=document.getElementById('faq-answer-'+i);
  const icon=document.querySelector('.faq-icon-'+i);
  const isOpen=answer.style.maxHeight!=='0px'&&answer.style.maxHeight!=='';
  // close all
  document.querySelectorAll('[id^="faq-answer-"]').forEach(el=>el.style.maxHeight='0px');
  document.querySelectorAll('[class^="faq-icon-"]').forEach(el=>el.style.transform='rotate(0deg)');
  if(!isOpen){
    answer.style.maxHeight=answer.scrollHeight+'px';
    icon.style.transform='rotate(180deg)';
  }
}

// ===== CLOSE ON BACKDROP =====
document.getElementById('lightboxModal').addEventListener('click',function(e){if(e.target===this)closeLightbox();});
document.getElementById('videoModal').addEventListener('click',function(e){if(e.target===this)closeVideoModal();});
</script>
`

export const homePage = layout('Home — DaVinci AI: Where Art Thinks', homeContent, `
<meta name="description" content="DaVinci AI: The world's first AI-native creative intelligence platform on Web3. Generate AI art, earn $DAVINCI tokens, mint NFTs, and govern with DAO on BNB Chain.">
<meta property="og:title" content="DaVinci AI — Where Art Thinks">
<meta property="og:description" content="AI-powered NFT creation platform on BNB Chain. 8.88B $DAVINCI tokens. Generate, earn, own.">
<style>
  @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  .fade-up { opacity:0; transform:translateY(30px); transition:opacity .7s, transform .7s; }
  .fade-up.visible { opacity:1; transform:translateY(0); }
</style>
`)
