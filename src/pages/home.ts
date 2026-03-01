import { layout } from './layout'

const homeContent = `
<!-- ===== HERO ===== -->
<section style="min-height:100vh;background:linear-gradient(135deg,#080C14 0%,#0D1829 40%,#111835 70%,#0A0F1E 100%);display:flex;align-items:center;position:relative;overflow:hidden;padding-top:0;">
  <div class="grid-overlay"></div>
  <div class="orb" style="width:600px;height:600px;background:rgba(0,216,255,.06);top:-150px;left:-150px;"></div>
  <div class="orb" style="width:500px;height:500px;background:rgba(168,107,255,.06);bottom:-100px;right:-100px;"></div>

  <div class="max-w-7xl mx-auto px-6 py-24 w-full" style="position:relative;z-index:2;">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(0,216,255,.08);border:1px solid rgba(0,216,255,.2);border-radius:50px;padding:8px 20px;margin-bottom:28px;">
          <span style="width:8px;height:8px;background:#00D8FF;border-radius:50%;animation:pulse-glow 2s infinite;display:block;"></span>
          <span style="font-size:.78rem;color:#00D8FF;font-weight:600;letter-spacing:.06em;">BNB CHAIN · WEB3 AI PLATFORM</span>
        </div>
        <h1 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(2.8rem,5.5vw,5rem);line-height:1.05;margin-bottom:24px;">
          Where<br><span class="gradient-text">Art Thinks.</span>
        </h1>
        <p style="font-size:1.05rem;color:rgba(253,253,253,.65);line-height:1.8;max-width:520px;margin-bottom:36px;">
          DaVinci AI merges Leonardo da Vinci's genius with cutting-edge AI — a revolutionary Web3 platform where creativity, gaming, and NFT ownership converge on BNB Chain.
        </p>
        <div class="flex flex-wrap gap-4 mb-12">
          <a href="/create/image" class="btn-primary"><i class="fas fa-wand-magic-sparkles"></i> Start Creating</a>
          <a href="/whitepaper" class="btn-outline"><i class="fas fa-file-alt"></i> Read Whitepaper</a>
        </div>
        <div class="grid grid-cols-3 gap-4">
          <div style="background:linear-gradient(135deg,rgba(27,42,73,.6),rgba(0,216,255,.05));border:1px solid rgba(0,216,255,.15);border-radius:14px;text-align:center;padding:24px 16px;">
            <div style="font-size:1.5rem;font-weight:700;" class="gradient-text">8.88B</div>
            <div style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:4px;">Total Supply</div>
          </div>
          <div style="background:linear-gradient(135deg,rgba(27,42,73,.6),rgba(0,216,255,.05));border:1px solid rgba(0,216,255,.15);border-radius:14px;text-align:center;padding:24px 16px;">
            <div style="font-size:1.5rem;font-weight:700;" class="gradient-text">6+</div>
            <div style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:4px;">AI Tools</div>
          </div>
          <div style="background:linear-gradient(135deg,rgba(27,42,73,.6),rgba(0,216,255,.05));border:1px solid rgba(0,216,255,.15);border-radius:14px;text-align:center;padding:24px 16px;">
            <div style="font-size:1.5rem;font-weight:700;" class="gradient-text">BNB</div>
            <div style="font-size:.72rem;color:rgba(255,255,255,.45);margin-top:4px;">Chain</div>
          </div>
        </div>
      </div>

      <!-- Hero Visual -->
      <div style="display:flex;justify-content:center;">
        <div style="position:relative;width:360px;height:360px;">
          <div style="position:absolute;inset:0;border:2px solid rgba(0,216,255,.2);border-radius:50%;animation:spin 14s linear infinite;"></div>
          <div style="position:absolute;inset:25px;border:2px dashed rgba(168,107,255,.2);border-radius:50%;animation:spin 20s linear infinite reverse;"></div>
          <div style="position:absolute;inset:50px;border:1px solid rgba(0,216,255,.1);border-radius:50%;animation:spin 28s linear infinite;"></div>
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
            <div style="width:190px;height:190px;background:linear-gradient(135deg,rgba(0,216,255,.12),rgba(168,107,255,.12));border-radius:50%;border:1px solid rgba(0,216,255,.25);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);">
              <div style="text-align:center;">
                <div style="font-family:'Poppins';font-weight:900;font-size:2.8rem;" class="gradient-text">DV</div>
                <div style="font-size:.65rem;color:rgba(255,255,255,.4);letter-spacing:.12em;margin-top:4px;">AI · NFT · WEB3</div>
              </div>
            </div>
          </div>
          <!-- Nodes -->
          <div style="position:absolute;top:8px;left:50%;transform:translateX(-50%);width:44px;height:44px;background:rgba(0,216,255,.12);border:1px solid rgba(0,216,255,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;"><i class="fas fa-brain" style="color:#00D8FF;"></i></div>
          <div style="position:absolute;bottom:8px;left:50%;transform:translateX(-50%);width:44px;height:44px;background:rgba(168,107,255,.12);border:1px solid rgba(168,107,255,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;"><i class="fas fa-gem" style="color:#A86BFF;"></i></div>
          <div style="position:absolute;left:8px;top:50%;transform:translateY(-50%);width:44px;height:44px;background:rgba(0,216,255,.12);border:1px solid rgba(0,216,255,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;"><i class="fas fa-gamepad" style="color:#00D8FF;"></i></div>
          <div style="position:absolute;right:8px;top:50%;transform:translateY(-50%);width:44px;height:44px;background:rgba(168,107,255,.12);border:1px solid rgba(168,107,255,.4);border-radius:50%;display:flex;align-items:center;justify-content:center;"><i class="fas fa-palette" style="color:#A86BFF;"></i></div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ===== AI CREATIONS SHOWCASE ===== -->
<section id="showcase" style="background:#080C14;padding:100px 0;position:relative;overflow:hidden;">
  <div class="orb" style="width:500px;height:500px;background:rgba(168,107,255,.05);top:-100px;right:-100px;"></div>
  <div class="max-w-7xl mx-auto px-6" style="position:relative;z-index:2;">
    <div class="text-center mb-16 fade-up">
      <span style="font-size:.78rem;color:#A86BFF;letter-spacing:.15em;font-weight:600;">AI CREATIONS</span>
      <h2 style="font-family:'Poppins';font-weight:800;font-size:clamp(1.8rem,3.5vw,2.8rem);margin-top:10px;">
        See What's <span class="gradient-text">Possible</span>
      </h2>
      <div class="section-divider"></div>
      <p style="margin-top:18px;color:rgba(255,255,255,.5);font-size:.95rem;">AI-generated images and videos created by our community</p>
    </div>

    <!-- Image Gallery Grid -->
    <div class="mb-8 fade-up">
      <div class="flex items-center gap-3 mb-6">
        <div style="width:36px;height:36px;background:rgba(0,216,255,.15);border:1px solid rgba(0,216,255,.3);border-radius:10px;display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-image" style="color:#00D8FF;font-size:.9rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.1rem;">AI Images</h3>
        <a href="/create/image" style="margin-left:auto;font-size:.82rem;color:#00D8FF;text-decoration:none;display:flex;align-items:center;gap:6px;">Create yours <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
        <!-- Simulated AI-generated image cards with gradients -->
        <div style="aspect-ratio:1;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(0,216,255,.15);transition:all .3s;" onmouseover="this.style.transform='scale(1.03)';this.style.borderColor='rgba(0,216,255,.5)'" onmouseout="this.style.transform='scale(1)';this.style.borderColor='rgba(0,216,255,.15)'">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a0533,#2d1b69,#00D8FF20);display:flex;align-items:flex-end;">
            <div style="padding:12px;background:linear-gradient(to top,rgba(0,0,0,.8),transparent);width:100%;">
              <div style="font-size:.72rem;color:rgba(255,255,255,.6);">Cyber Renaissance</div>
              <div style="font-size:.65rem;color:rgba(0,216,255,.7);margin-top:2px;display:flex;align-items:center;gap:4px;"><i class="fas fa-robot" style="font-size:.6rem;"></i> Midjourney</div>
            </div>
          </div>
          <div style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.5);border-radius:6px;padding:3px 8px;font-size:.65rem;color:#A86BFF;"><i class="fas fa-gem" style="font-size:.6rem;"></i> NFT</div>
        </div>
        <div style="aspect-ratio:1;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(168,107,255,.15);transition:all .3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#0a2a1a,#1a4a2a,#00FFB240);display:flex;align-items:flex-end;">
            <div style="padding:12px;background:linear-gradient(to top,rgba(0,0,0,.8),transparent);width:100%;">
              <div style="font-size:.72rem;color:rgba(255,255,255,.6);">Digital Nature</div>
              <div style="font-size:.65rem;color:rgba(0,216,255,.7);margin-top:2px;"><i class="fas fa-robot" style="font-size:.6rem;"></i> Stable Diffusion</div>
            </div>
          </div>
        </div>
        <div style="aspect-ratio:1;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(0,216,255,.15);transition:all .3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#2a1a00,#4a3000,#FFB80040);display:flex;align-items:flex-end;">
            <div style="padding:12px;background:linear-gradient(to top,rgba(0,0,0,.8),transparent);width:100%;">
              <div style="font-size:.72rem;color:rgba(255,255,255,.6);">Golden Vinci</div>
              <div style="font-size:.65rem;color:rgba(0,216,255,.7);margin-top:2px;"><i class="fas fa-robot" style="font-size:.6rem;"></i> DALL-E 3</div>
            </div>
          </div>
          <div style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.5);border-radius:6px;padding:3px 8px;font-size:.65rem;color:#FFB800;"><i class="fas fa-fire" style="font-size:.6rem;"></i> Hot</div>
        </div>
        <div style="aspect-ratio:1;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(168,107,255,.15);transition:all .3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
          <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a0035,#350060,#A86BFF40);display:flex;align-items:flex-end;">
            <div style="padding:12px;background:linear-gradient(to top,rgba(0,0,0,.8),transparent);width:100%;">
              <div style="font-size:.72rem;color:rgba(255,255,255,.6);">Violet Dreams</div>
              <div style="font-size:.65rem;color:rgba(168,107,255,.7);margin-top:2px;"><i class="fas fa-robot" style="font-size:.6rem;"></i> Midjourney</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Video Gallery -->
    <div class="fade-up">
      <div class="flex items-center gap-3 mb-6">
        <div style="width:36px;height:36px;background:rgba(168,107,255,.15);border:1px solid rgba(168,107,255,.3);border-radius:10px;display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-film" style="color:#A86BFF;font-size:.9rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.1rem;">AI Videos</h3>
        <a href="/create/video" style="margin-left:auto;font-size:.82rem;color:#A86BFF;text-decoration:none;display:flex;align-items:center;gap:6px;">Create yours <i class="fas fa-arrow-right"></i></a>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div style="aspect-ratio:16/9;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(168,107,255,.2);transition:all .3s;background:linear-gradient(135deg,#0a0522,#1a0d44,#2a1a66);" onmouseover="this.style.borderColor='rgba(168,107,255,.6)'" onmouseout="this.style.borderColor='rgba(168,107,255,.2)'">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
            <div style="width:50px;height:50px;background:rgba(168,107,255,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid rgba(168,107,255,.6);">
              <i class="fas fa-play" style="color:#A86BFF;font-size:1.1rem;margin-left:4px;"></i>
            </div>
          </div>
          <div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(to top,rgba(0,0,0,.9),transparent);">
            <div style="font-size:.78rem;font-weight:600;">Neon City Dreams</div>
            <div style="font-size:.65rem;color:rgba(168,107,255,.8);margin-top:3px;display:flex;align-items:center;gap:6px;"><i class="fas fa-clock"></i> 15s · KlingAI</div>
          </div>
          <div style="position:absolute;top:10px;right:10px;background:rgba(0,0,0,.6);border-radius:6px;padding:3px 8px;font-size:.65rem;color:#00FFB2;"><i class="fas fa-circle" style="font-size:.5rem;"></i> NEW</div>
        </div>
        <div style="aspect-ratio:16/9;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(0,216,255,.2);transition:all .3s;background:linear-gradient(135deg,#021a22,#043344,#065566);" onmouseover="this.style.borderColor='rgba(0,216,255,.6)'" onmouseout="this.style.borderColor='rgba(0,216,255,.2)'">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
            <div style="width:50px;height:50px;background:rgba(0,216,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid rgba(0,216,255,.5);">
              <i class="fas fa-play" style="color:#00D8FF;font-size:1.1rem;margin-left:4px;"></i>
            </div>
          </div>
          <div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(to top,rgba(0,0,0,.9),transparent);">
            <div style="font-size:.78rem;font-weight:600;">Ocean of Data</div>
            <div style="font-size:.65rem;color:rgba(0,216,255,.8);margin-top:3px;"><i class="fas fa-clock"></i> 10s · HeyGen</div>
          </div>
        </div>
        <div style="aspect-ratio:16/9;border-radius:16px;overflow:hidden;position:relative;cursor:pointer;border:1px solid rgba(168,107,255,.2);transition:all .3s;background:linear-gradient(135deg,#220520,#441040,#661a60);" onmouseover="this.style.borderColor='rgba(168,107,255,.6)'" onmouseout="this.style.borderColor='rgba(168,107,255,.2)'">
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
            <div style="width:50px;height:50px;background:rgba(168,107,255,.2);border-radius:50%;display:flex;align-items:center;justify-content:center;border:2px solid rgba(168,107,255,.5);">
              <i class="fas fa-play" style="color:#A86BFF;font-size:1.1rem;margin-left:4px;"></i>
            </div>
          </div>
          <div style="position:absolute;bottom:0;left:0;right:0;padding:14px;background:linear-gradient(to top,rgba(0,0,0,.9),transparent);">
            <div style="font-size:.78rem;font-weight:600;">Cosmic Ballet</div>
            <div style="font-size:.65rem;color:rgba(168,107,255,.8);margin-top:3px;"><i class="fas fa-clock"></i> 20s · Nouvo.AI</div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA -->
    <div class="text-center mt-12 fade-up">
      <a href="/create/image" class="btn-primary" style="font-size:1rem;padding:16px 40px;margin-right:16px;"><i class="fas fa-wand-magic-sparkles"></i> Generate Image</a>
      <a href="/create/video" class="btn-outline" style="font-size:1rem;padding:15px 40px;"><i class="fas fa-film"></i> Generate Video</a>
    </div>
  </div>
</section>

<!-- ===== ABOUT ===== -->
<section id="about" style="background:#0A0F1E;padding:100px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-up">
      <span style="font-size:.78rem;color:#00D8FF;letter-spacing:.15em;font-weight:600;">ABOUT DAVINCI AI</span>
      <h2 style="font-family:'Poppins';font-weight:800;font-size:clamp(1.8rem,3.5vw,2.8rem);margin-top:10px;">Intelligence Meets <span class="gradient-text">Imagination</span></h2>
      <div class="section-divider"></div>
    </div>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      ${['fas fa-brain:#00D8FF:AI Creative Studio:Access Stable Diffusion, Midjourney, KlingAI, HeyGen and more in one unified platform.',
        'fas fa-gamepad:#A86BFF:Gamified Ecosystem:Earn Creative Credits through mini-games, climb the leaderboard, and join Season airdrops.',
        'fas fa-gem:#00D8FF:NFT Renaissance:Mint and trade AI-generated art as BEP-721 NFTs on BNB Chain with marketplace integration.',
        'fas fa-coins:#A86BFF:$DAVINCI Token:BEP-20 utility token for DAO governance, staking rewards, and Creative Pass subscriptions.',
        'fas fa-shield-alt:#00D8FF:Audited & Secure:Smart contracts audited by CertiK and PeckShield. Transparent tokenomics and multi-sig.',
        'fas fa-vote-yea:#A86BFF:DAO Governance:Community-owned platform. Token holders vote on treasury, roadmap, and upgrades.']
        .map(item => {
          const [icon, color, title, desc] = item.split(':')
          return `<div class="card-glass p-7 fade-up">
            <div style="width:52px;height:52px;background:${color === '#00D8FF' ? 'rgba(0,216,255,.12)' : 'rgba(168,107,255,.12)'};border:1px solid ${color === '#00D8FF' ? 'rgba(0,216,255,.25)' : 'rgba(168,107,255,.25)'};border-radius:13px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;">
              <i class="${icon}" style="color:${color};font-size:1.3rem;"></i>
            </div>
            <h3 style="font-weight:700;font-size:1.05rem;margin-bottom:10px;">${title}</h3>
            <p style="color:rgba(255,255,255,.5);font-size:.875rem;line-height:1.7;">${desc}</p>
          </div>`
        }).join('')}
    </div>
  </div>
</section>

<!-- ===== ECOSYSTEM ===== -->
<section id="ecosystem" style="background:#080C14;padding:100px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-up">
      <span style="font-size:.78rem;color:#A86BFF;letter-spacing:.15em;font-weight:600;">THE ECOSYSTEM</span>
      <h2 style="font-family:'Poppins';font-weight:800;font-size:clamp(1.8rem,3.5vw,2.8rem);margin-top:10px;">Four Pillars of <span class="gradient-text">Creation</span></h2>
      <div class="section-divider"></div>
    </div>
    <div class="grid md:grid-cols-2 gap-6">
      ${[
        {icon:'fas fa-gamepad',color:'#00D8FF',bg:'rgba(0,216,255,.08)',border:'rgba(0,216,255,.2)',title:'DaVinci Game Hub',desc:'Telegram & WebApp mini-games with rank system and Creative Credits. Earn rewards through fun gameplay.',tags:['Mini-Games','Leaderboard','Season Airdrops']},
        {icon:'fas fa-palette',color:'#A86BFF',bg:'rgba(168,107,255,.08)',border:'rgba(168,107,255,.2)',title:'AI Atelier',desc:'Professional AI creation tools powered by Stable Diffusion, Midjourney, KlingAI, HeyGen, Wrtn.AI and Nouvo.AI.',tags:['Image Gen','AI Video','Text & Audio']},
        {icon:'fas fa-image',color:'#00D8FF',bg:'rgba(0,216,255,.08)',border:'rgba(0,216,255,.2)',title:'NFT Renaissance',desc:'BEP-721 NFT minting on BNB Chain with marketplace integration. 2% fee — 25% directed to DAO treasury.',tags:['BEP-721','Marketplace','DAO Revenue']},
        {icon:'fas fa-star',color:'#A86BFF',bg:'rgba(168,107,255,.08)',border:'rgba(168,107,255,.2)',title:'DaVinci Rewards',desc:'$DAVINCI token staking, DAO voting rights, treasury yield, and exclusive creator licensing.',tags:['Staking','DAO Voting','Creator Fund']}
      ].map(e => `
        <div style="background:${e.bg};border:1px solid ${e.border};border-radius:20px;padding:28px;transition:all .3s;" class="fade-up" onmouseover="this.style.transform='translateY(-4px)'" onmouseout="this.style.transform='none'">
          <div class="flex items-start gap-5">
            <div style="width:60px;height:60px;min-width:60px;background:${e.bg};border:1px solid ${e.border};border-radius:14px;display:flex;align-items:center;justify-content:center;">
              <i class="${e.icon}" style="color:${e.color};font-size:1.5rem;"></i>
            </div>
            <div>
              <h3 style="font-family:'Poppins';font-weight:700;font-size:1.2rem;color:${e.color};margin-bottom:8px;">${e.title}</h3>
              <p style="color:rgba(255,255,255,.55);font-size:.875rem;line-height:1.7;margin-bottom:14px;">${e.desc}</p>
              <div class="flex flex-wrap gap-2">
                ${e.tags.map(t => `<span style="background:${e.bg};border:1px solid ${e.border};border-radius:20px;padding:3px 12px;font-size:.72rem;color:${e.color};">${t}</span>`).join('')}
              </div>
            </div>
          </div>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- ===== TOKENOMICS ===== -->
<section id="tokenomics" style="background:#0A0F1E;padding:100px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-16 fade-up">
      <span style="font-size:.78rem;color:#00D8FF;letter-spacing:.15em;font-weight:600;">$DAVINCI TOKEN</span>
      <h2 style="font-family:'Poppins';font-weight:800;font-size:clamp(1.8rem,3.5vw,2.8rem);margin-top:10px;">Tokenomics <span class="gradient-text">Architecture</span></h2>
      <div class="section-divider"></div>
      <p style="margin-top:18px;color:rgba(255,255,255,.4);font-size:.9rem;">Total Supply: <span style="color:#00D8FF;font-weight:700;">8,888,888,888 $DAVINCI</span> · BEP-20 · BNB Chain</p>
    </div>
    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Donut Chart -->
      <div class="fade-up" style="display:flex;flex-direction:column;align-items:center;">
        <div style="position:relative;width:100%;max-width:360px;margin:0 auto;">
          <canvas id="tokenChart"></canvas>
        </div>
      </div>
      <!-- Bars -->
      <div class="fade-up flex flex-col gap-4">
        ${[
          {label:'Community Rewards',pct:45,color:'#00D8FF',tokens:'4,000,000,000',note:'Airdrops, Staking, Games'},
          {label:'Investors',pct:15,color:'#A86BFF',tokens:'1,333,333,333',note:'18-mo cliff, 3-yr vesting'},
          {label:'Ecosystem Growth',pct:13,color:'#00FFB2',tokens:'1,155,555,556',note:'Partnerships & Integrations'},
          {label:'Team & Core Dev',pct:12,color:'#FF6B6B',tokens:'1,066,666,667',note:'12-mo cliff, 4-yr vesting'},
          {label:'Treasury',pct:10,color:'#FFB800',tokens:'888,888,889',note:'DAO Controlled'},
          {label:'Artist Fund',pct:5,color:'#FF8C00',tokens:'444,444,444',note:'Creator Grants'}
        ].map(a => `
          <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:13px;padding:16px 18px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;">
              <div style="display:flex;align-items:center;gap:9px;">
                <div style="width:10px;height:10px;background:${a.color};border-radius:3px;"></div>
                <span style="font-weight:600;font-size:.9rem;">${a.label}</span>
              </div>
              <span style="color:${a.color};font-weight:700;">${a.pct}%</span>
            </div>
            <div style="height:6px;border-radius:3px;background:rgba(255,255,255,.05);overflow:hidden;margin-bottom:6px;">
              <div style="height:100%;width:${a.pct}%;background:${a.color};border-radius:3px;transition:width 1s ease;"></div>
            </div>
            <div style="font-size:.75rem;color:rgba(255,255,255,.35);">${a.tokens} · ${a.note}</div>
          </div>`).join('')}
      </div>
    </div>

    <!-- Vesting Chart -->
    <div class="mt-16 fade-up">
      <h3 style="font-family:'Poppins';font-weight:700;font-size:1.4rem;margin-bottom:8px;text-align:center;">Vesting <span class="gradient-text">Schedule</span></h3>
      <p style="text-align:center;color:rgba(255,255,255,.4);font-size:.85rem;margin-bottom:24px;">Cumulative token unlock over 60 months (% of total supply)</p>
      <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:20px;padding:28px;">
        <canvas id="vestingChart" style="max-height:300px;"></canvas>
      </div>
    </div>

    <div class="text-center mt-10 fade-up">
      <a href="/whitepaper#tokenomics" class="btn-outline"><i class="fas fa-file-alt"></i> Full Tokenomics Details</a>
    </div>
  </div>
</section>

<!-- ===== ROADMAP ===== -->
<section id="roadmap" style="background:#080C14;padding:100px 0;">
  <div class="max-w-5xl mx-auto px-6">
    <div class="text-center mb-16 fade-up">
      <span style="font-size:.78rem;color:#A86BFF;letter-spacing:.15em;font-weight:600;">ROADMAP</span>
      <h2 style="font-family:'Poppins';font-weight:800;font-size:clamp(1.8rem,3.5vw,2.8rem);margin-top:10px;">The Path to <span class="gradient-text">Renaissance</span></h2>
      <div class="section-divider"></div>
    </div>
    <div class="grid md:grid-cols-2 gap-5">
      ${[
        {q:'Q1 2025',color:'#00D8FF',status:'COMPLETED ✓',items:['Project reveal & brand identity','AI Image Studio alpha','Community building & Telegram'],done:true},
        {q:'Q2 2025',color:'#A86BFF',status:'COMPLETED ✓',items:['Mini-game beta & Season 1 airdrop','Telegram Game Hub launch','Creative Credits system'],done:true},
        {q:'Q3 2025',color:'#00D8FF',status:'IN PROGRESS',items:['AI Video Lab beta (KlingAI)','NFT minting platform launch','Season 2 airdrop campaign'],done:false},
        {q:'Q4 2025',color:'#A86BFF',status:'UPCOMING',items:['Token Generation Event (TGE)','DEX/CEX exchange listings','CertiK / PeckShield audit'],done:false},
        {q:'2026 H1',color:'rgba(0,216,255,.6)',status:'PLANNED',items:['NFT Marketplace full launch','Mobile app (iOS + Android)','DAO governance activation'],done:false},
        {q:'2026–2028',color:'rgba(168,107,255,.5)',status:'VISION',items:['Multi-chain expansion','3D & spatial AI tools','Global artist partnerships'],done:false}
      ].map(r => `
        <div class="card-glass p-6 fade-up" style="border-left:3px solid ${r.color};">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
            <div style="background:${r.done ? `${r.color}20` : 'rgba(255,255,255,.04)'};border:1px solid ${r.done ? r.color : 'rgba(255,255,255,.1)'};border-radius:8px;padding:5px 13px;">
              <span style="font-weight:700;font-size:.82rem;color:${r.color};">${r.q}</span>
            </div>
            <span style="font-size:.7rem;color:${r.done ? r.color : 'rgba(255,255,255,.35)'};font-weight:600;">${r.status}</span>
          </div>
          <ul style="list-style:none;display:flex;flex-direction:column;gap:7px;">
            ${r.items.map(i => `<li style="display:flex;gap:8px;font-size:.85rem;color:rgba(255,255,255,${r.done ? '.7' : '.45'});">
              <i class="${r.done ? 'fas fa-check-circle' : 'fas fa-clock'}" style="color:${r.color};margin-top:2px;flex-shrink:0;font-size:.75rem;"></i>${i}
            </li>`).join('')}
          </ul>
        </div>`).join('')}
    </div>
  </div>
</section>

<!-- ===== PARTNERS ===== -->
<section id="partners" style="background:#0A0F1E;padding:90px 0;">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-14 fade-up">
      <span style="font-size:.78rem;color:#00D8FF;letter-spacing:.15em;font-weight:600;">POWERED BY</span>
      <h2 style="font-family:'Poppins';font-weight:800;font-size:clamp(1.8rem,3.5vw,2.6rem);margin-top:10px;">World-Class <span class="gradient-text">AI Partners</span></h2>
      <div class="section-divider"></div>
    </div>
    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 fade-up">
      ${[
        {name:'OpenAI',icon:'fa-robot',color:'#00D8FF',url:'https://openai.com/'},
        {name:'Midjourney',icon:'fa-magic',color:'#A86BFF',url:'https://www.midjourney.com/'},
        {name:'KlingAI',icon:'fa-film',color:'#00D8FF',url:'https://app.klingai.com/'},
        {name:'HeyGen',icon:'fa-video',color:'#A86BFF',url:'https://www.heygen.com/'},
        {name:'Wrtn.AI',icon:'fa-pen-nib',color:'#00D8FF',url:'https://wrtn.ai/'},
        {name:'Nouvo.AI',icon:'fa-star',color:'#A86BFF',url:'https://www.nouvo.ai/'}
      ].map(p => `
        <a href="${p.url}" target="_blank" style="display:flex;flex-direction:column;align-items:center;justify-content:center;gap:8px;padding:16px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;text-decoration:none;color:rgba(255,255,255,.45);font-size:.82rem;font-weight:600;transition:all .3s;" onmouseover="this.style.borderColor='rgba(0,216,255,.3)';this.style.color='#FDFDFD'" onmouseout="this.style.borderColor='rgba(255,255,255,.07)';this.style.color='rgba(255,255,255,.45)'">
          <i class="fas ${p.icon}" style="font-size:1.4rem;color:${p.color};"></i>
          ${p.name}
        </a>`).join('')}
    </div>
    <div style="margin-top:40px;text-align:center;" class="fade-up">
      <div style="display:inline-flex;align-items:center;gap:12px;background:rgba(243,186,47,.06);border:1px solid rgba(243,186,47,.2);border-radius:50px;padding:12px 28px;">
        <div style="width:26px;height:26px;background:#F3BA2F;border-radius:50%;display:flex;align-items:center;justify-content:center;"><span style="font-weight:900;font-size:.75rem;color:#080C14;">B</span></div>
        <span style="font-weight:600;color:rgba(255,255,255,.8);font-size:.9rem;">Built on BNB Chain</span>
        <span style="font-size:.78rem;color:rgba(243,186,47,.7);">BEP-20 · BEP-721</span>
      </div>
    </div>
  </div>
</section>

<!-- ===== CTA ===== -->
<section style="background:linear-gradient(135deg,#0D1829,#111835,#0A0F1E);padding:110px 0;position:relative;overflow:hidden;">
  <div class="grid-overlay" style="opacity:.4;"></div>
  <div class="orb" style="width:600px;height:600px;background:rgba(0,216,255,.05);top:-200px;left:50%;transform:translateX(-50%);"></div>
  <div class="max-w-4xl mx-auto px-6 text-center" style="position:relative;z-index:2;">
    <div class="fade-up">
      <h2 style="font-family:'Poppins';font-weight:900;font-size:clamp(2rem,5vw,3.8rem);line-height:1.1;margin-bottom:18px;">
        Join the Creative<br><span class="gradient-text">Revolution</span>
      </h2>
      <p style="color:rgba(253,253,253,.55);font-size:1.05rem;max-width:520px;margin:0 auto 36px;line-height:1.8;">
        Create AI art, earn $DAVINCI, mint NFTs, and shape the future of Web3 creativity.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="/login" class="btn-primary" style="font-size:1rem;padding:15px 36px;"><i class="fas fa-wallet"></i> Connect Wallet</a>
        <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-outline" style="font-size:1rem;padding:14px 36px;"><i class="fab fa-telegram"></i> Join Telegram</a>
      </div>
    </div>
  </div>
</section>

<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
// Donut Chart
new Chart(document.getElementById('tokenChart').getContext('2d'), {
  type: 'doughnut',
  data: {
    labels: ['Community Rewards','Investors','Ecosystem Growth','Team & Dev','Treasury','Artist Fund'],
    datasets: [{
      data: [45,15,13,12,10,5],
      backgroundColor: ['rgba(0,216,255,.85)','rgba(168,107,255,.85)','rgba(0,255,178,.85)','rgba(255,107,107,.85)','rgba(255,184,0,.85)','rgba(255,140,0,.85)'],
      borderColor: 'rgba(8,12,20,.8)', borderWidth:3, hoverOffset:8
    }]
  },
  options: { responsive:true, cutout:'65%', plugins:{ legend:{display:false}, tooltip:{ backgroundColor:'rgba(8,12,20,.95)', borderColor:'rgba(0,216,255,.3)', borderWidth:1, titleColor:'#FDFDFD', bodyColor:'rgba(255,255,255,.7)', callbacks:{ label: ctx => ' '+ctx.label+': '+ctx.parsed+'%' } } } }
});

// Vesting Area Chart
const months = [0,3,6,9,12,15,18,21,24,30,36,42,48,54,60];
const communityData = [1,2,4,6,8,10,13,16,20,27,34,38,42,44,45];
const investorData =  [0,0,0,0,0,0,0.5,1.5,3,6,9,11,13,14,15];
const teamData =      [0,0,0,0,0.5,1,1.5,2,3,5,7,9,11,12,12];
const ecosystemData = [1.5,2,2,2,2,3,3.5,4.5,5.5,7,9,10,11,12,13];
const total = months.map((_,i) => (communityData[i]||0)+(investorData[i]||0)+(teamData[i]||0)+(ecosystemData[i]||0)+5);

new Chart(document.getElementById('vestingChart').getContext('2d'), {
  type:'line',
  data:{
    labels: months.map(m => m===0?'TGE':m+'mo'),
    datasets:[
      {label:'Community',data:communityData,borderColor:'#00D8FF',backgroundColor:'rgba(0,216,255,.08)',fill:true,tension:.4,borderWidth:2,pointRadius:3},
      {label:'Investors',data:investorData,borderColor:'#A86BFF',backgroundColor:'rgba(168,107,255,.06)',fill:true,tension:.4,borderWidth:2,pointRadius:3},
      {label:'Team',data:teamData,borderColor:'#FF6B6B',backgroundColor:'rgba(255,107,107,.05)',fill:true,tension:.4,borderWidth:2,pointRadius:3},
      {label:'Total Unlocked',data:total,borderColor:'#FFB800',backgroundColor:'rgba(255,184,0,.04)',fill:false,tension:.4,borderWidth:2.5,borderDash:[6,3],pointRadius:3}
    ]
  },
  options:{
    responsive:true,
    plugins:{ legend:{ labels:{ color:'rgba(255,255,255,.6)', font:{size:12}, usePointStyle:true } }, tooltip:{ backgroundColor:'rgba(8,12,20,.95)', borderColor:'rgba(0,216,255,.3)', borderWidth:1, callbacks:{ label: ctx => ' '+ctx.dataset.label+': '+ctx.parsed.y+'%' } } },
    scales:{
      x:{ grid:{ color:'rgba(255,255,255,.05)' }, ticks:{ color:'rgba(255,255,255,.4)', font:{size:11} } },
      y:{ grid:{ color:'rgba(255,255,255,.05)' }, ticks:{ color:'rgba(255,255,255,.4)', font:{size:11}, callback: v => v+'%' }, min:0, max:80 }
    }
  }
});
</script>
`

export const homePage = layout('Home — Where Art Thinks', homeContent, '<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>')
