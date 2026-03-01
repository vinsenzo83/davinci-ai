import { layout } from './layout'
import { aiAgents, featuredAgents, platformStats, agentCategories } from '../data/agent-data'

const homeContent = `
<!-- ===== HERO ===== -->
<section style="min-height:100vh;background:linear-gradient(135deg,#050810 0%,#0B1525 40%,#0F1C35 70%,#080C14 100%);display:flex;align-items:center;position:relative;overflow:hidden;">
  <div class="grid-overlay"></div>
  <div class="orb" style="width:800px;height:800px;background:rgba(0,216,255,.04);top:-300px;left:-300px;"></div>
  <div class="orb" style="width:700px;height:700px;background:rgba(168,107,255,.04);bottom:-200px;right:-200px;"></div>

  <div class="max-w-7xl mx-auto px-6 py-28 w-full" style="position:relative;z-index:2;">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(0,216,255,.08);border:1px solid rgba(0,216,255,.2);border-radius:50px;padding:8px 20px;margin-bottom:28px;">
          <span style="width:8px;height:8px;background:#00D8FF;border-radius:50%;animation:pulse-glow 2s infinite;display:block;flex-shrink:0;"></span>
          <span style="font-size:.78rem;color:#00D8FF;font-weight:600;letter-spacing:.06em;">BNB CHAIN · AI AGENT PLATFORM · ${platformStats.liveAgents} LIVE AGENTS</span>
        </div>

        <h1 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(3rem,6vw,5.2rem);line-height:1.02;margin-bottom:16px;">
          Your AI<br><span class="gradient-text">Agent Studio.</span>
        </h1>
        <p style="font-size:1.05rem;color:rgba(0,216,255,.7);font-weight:500;letter-spacing:.04em;margin-bottom:20px;">Deploy. Create. Earn. Own.</p>
        <p style="font-size:1rem;color:rgba(253,253,253,.6);line-height:1.9;max-width:540px;margin-bottom:40px;">
          Access ${platformStats.totalAgents}+ specialized AI agents for art, video, music, writing, code, and Web3. Each agent is powered by state-of-the-art models — all integrated in one platform, rewarded with $DAVINCI tokens.
        </p>

        <div class="flex flex-wrap gap-4 mb-12">
          <a href="/agents" class="btn-primary" style="font-size:1rem;padding:15px 32px;"><i class="fas fa-robot"></i> Explore Agents</a>
          <a href="/whitepaper" class="btn-outline" style="font-size:1rem;padding:14px 32px;"><i class="fas fa-file-alt"></i> Whitepaper</a>
          <a href="https://x.com/DaVinciAiZ" target="_blank" style="display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.15);border-radius:50px;padding:14px 28px;font-size:.95rem;font-weight:600;color:#FDFDFD;text-decoration:none;transition:all .3s;" onmouseover="this.style.background='rgba(255,255,255,.12)'" onmouseout="this.style.background='rgba(255,255,255,.06)'">
            <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#FDFDFD;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            Follow on X
          </a>
        </div>

        <!-- Stats Row -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
          <div style="background:rgba(0,216,255,.05);border:1px solid rgba(0,216,255,.12);border-radius:12px;padding:16px;text-align:center;">
            <div style="font-size:1.4rem;font-weight:800;color:#00D8FF;">${platformStats.totalAgents}+</div>
            <div style="font-size:.68rem;color:rgba(255,255,255,.4);margin-top:3px;">AI Agents</div>
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

      <!-- Hero Visual: Agent Cards floating -->
      <div style="position:relative;display:flex;justify-content:center;align-items:center;min-height:460px;">
        <!-- background rings -->
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:420px;height:420px;border-radius:50%;border:1px solid rgba(0,216,255,.06);animation:spin 25s linear infinite;"></div>
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:340px;height:340px;border-radius:50%;border:1px solid rgba(168,107,255,.08);animation:spin 18s linear infinite reverse;"></div>

        <!-- Center glow hub -->
        <div style="position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#00D8FF22,#A86BFF22);border:2px solid rgba(0,216,255,.3);display:flex;align-items:center;justify-content:center;z-index:3;">
          <span style="font-family:'Poppins';font-weight:900;font-size:1.1rem;background:linear-gradient(135deg,#00D8FF,#A86BFF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">D</span>
        </div>

        <!-- Floating agent mini cards -->
        ${[
          {a:featuredAgents[0], top:'2%', left:'30%', delay:'0s'},
          {a:featuredAgents[1], top:'20%', left:'62%', delay:'.3s'},
          {a:featuredAgents[2], top:'55%', left:'65%', delay:'.6s'},
          {a:featuredAgents[3], top:'72%', left:'28%', delay:'.9s'},
          {a:featuredAgents[4], top:'38%', left:'-2%', delay:'1.2s'},
          {a:featuredAgents[5], top:'8%', left:'2%', delay:'1.5s'},
        ].map(({a,top,left,delay})=> a ? `
          <div style="position:absolute;top:${top};left:${left};background:rgba(8,12,20,.92);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:12px 16px;min-width:140px;backdrop-filter:blur(12px);animation:float-card 4s ease-in-out infinite;animation-delay:${delay};z-index:2;transition:all .3s;" onmouseover="this.style.borderColor='${a.accentColor}44';this.style.transform='scale(1.05)'" onmouseout="this.style.borderColor='rgba(255,255,255,.1)';this.style.transform='scale(1)'">
            <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
              <div style="width:32px;height:32px;border-radius:10px;background:${a.gradient};display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${a.icon}" style="font-size:.85rem;color:#fff;"></i>
              </div>
              <div>
                <div style="font-weight:700;font-size:.82rem;">${a.name}</div>
                <div style="font-size:.65rem;color:rgba(255,255,255,.4);">${a.category}</div>
              </div>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:.62rem;padding:2px 8px;border-radius:50px;background:${a.status==='live'?'rgba(0,216,255,.15)':a.status==='beta'?'rgba(168,107,255,.15)':'rgba(255,255,255,.07)'};color:${a.status==='live'?'#00D8FF':a.status==='beta'?'#A86BFF':'rgba(255,255,255,.3)'};">${a.status.toUpperCase()}</span>
              <span style="font-size:.68rem;color:rgba(255,255,255,.4);">${a.usageCount > 0 ? (a.usageCount/1000).toFixed(1)+'k' : '—'}</span>
            </div>
          </div>
        ` : '').join('')}
      </div>
    </div>
  </div>

  <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);text-align:center;z-index:2;">
    <div style="font-size:.7rem;color:rgba(255,255,255,.25);letter-spacing:.12em;margin-bottom:8px;">SCROLL TO EXPLORE</div>
    <div style="width:1px;height:40px;background:linear-gradient(to bottom,rgba(0,216,255,.5),transparent);margin:0 auto;animation:pulse-glow 2s infinite;"></div>
  </div>
</section>

<!-- ===== TRUST BAR ===== -->
<section style="background:#05080F;padding:32px 0;border-top:1px solid rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.04);">
  <div class="max-w-7xl mx-auto px-6">
    <div style="display:flex;flex-wrap:wrap;gap:0;justify-content:center;align-items:center;">
      ${[
        {val:`${platformStats.totalAgents}+`, label:'Specialized AI Agents', icon:'fas fa-robot'},
        {val:`${platformStats.liveAgents}`,   label:'Live Agents',            icon:'fas fa-circle-dot'},
        {val:`${(platformStats.totalUsage/1000).toFixed(0)}k+`, label:'Generations Completed', icon:'fas fa-wand-magic-sparkles'},
        {val:'8',                              label:'Agent Categories',       icon:'fas fa-layer-group'},
        {val:'BEP-20',                         label:'BNB Chain Native',       icon:'fas fa-link'},
        {val:'8.88B',                          label:'$DAVINCI Supply',        icon:'fas fa-coins'},
      ].map((s,i)=>`
        <div style="flex:1;min-width:140px;padding:20px;text-align:center;border-right:${i<5?'1px solid rgba(255,255,255,.05)':'none'};">
          <i class="${s.icon}" style="font-size:1.3rem;background:linear-gradient(135deg,#00D8FF,#A86BFF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;margin-bottom:8px;display:block;"></i>
          <div style="font-size:1.25rem;font-weight:800;color:#FDFDFD;">${s.val}</div>
          <div style="font-size:.7rem;color:rgba(255,255,255,.4);margin-top:3px;">${s.label}</div>
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== X TWITTER COMMUNITY ===== -->
<section style="background:linear-gradient(135deg,#050810,#080C14);padding:80px 0;position:relative;overflow:hidden;">
  <div class="orb" style="width:400px;height:400px;background:rgba(0,216,255,.03);top:-100px;right:-100px;"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:48px;">
      <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:50px;padding:8px 20px;margin-bottom:20px;">
        <svg viewBox="0 0 24 24" style="width:16px;height:16px;fill:#FDFDFD;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        <span style="font-size:.78rem;font-weight:600;letter-spacing:.1em;color:rgba(255,255,255,.7);">COMMUNITY FIRST</span>
      </div>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(1.8rem,3.5vw,2.8rem);margin-bottom:12px;">
        Join <span class="gradient-text">8,888+ Creators</span> Building the Future
      </h2>
      <p style="font-size:.95rem;color:rgba(253,253,253,.5);max-width:520px;margin:0 auto;">Follow along as we build the world's largest AI agent creative platform — openly, in public.</p>
    </div>

    <div class="grid md:grid-cols-3 gap-5 fade-up">
      ${[
        { handle:'@DaVinciAiZ', text:'🚀 Introducing Visio — our most powerful text-to-image agent yet. 48,000+ generations in beta. What will you create?', time:'2h ago', likes:'1.2k', rt:'384' },
        { handle:'@DaVinciAiZ', text:'⚡ Genesis agent just hit 10,000 NFT collections generated! The AI-native creator economy is here. $DAVINCI TGE Q4 2025 🎨', time:'8h ago', likes:'2.8k', rt:'891' },
        { handle:'@DaVinciAiZ', text:'🎵 Sonic agent drops today — compose original music tracks with AI. From lo-fi to orchestral. Powered by MusicGen + Suno v4. Try it now 👇', time:'1d ago', likes:'3.1k', rt:'1.1k' },
      ].map(t=>`
        <div class="card-glass" style="padding:24px;cursor:pointer;transition:all .3s;" onmouseover="this.style.borderColor='rgba(0,216,255,.25)';this.style.transform='translateY(-4px)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='translateY(0)'">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <div style="width:40px;height:40px;border-radius:50%;background:linear-gradient(135deg,#00D8FF22,#A86BFF22);border:1px solid rgba(0,216,255,.2);display:flex;align-items:center;justify-content:center;">
              <span style="font-family:'Poppins';font-weight:900;color:#00D8FF;font-size:.85rem;">D</span>
            </div>
            <div>
              <div style="font-weight:700;font-size:.88rem;">DaVinci AI</div>
              <div style="font-size:.75rem;color:rgba(255,255,255,.4);">${t.handle}</div>
            </div>
            <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#FDFDFD;margin-left:auto;opacity:.5;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
          </div>
          <p style="font-size:.88rem;line-height:1.7;color:rgba(253,253,253,.8);margin-bottom:16px;">${t.text}</p>
          <div style="display:flex;align-items:center;justify-content:space-between;padding-top:12px;border-top:1px solid rgba(255,255,255,.05);">
            <span style="font-size:.75rem;color:rgba(255,255,255,.35);">${t.time}</span>
            <div style="display:flex;gap:16px;">
              <span style="font-size:.75rem;color:rgba(255,255,255,.35);"><i class="fas fa-heart" style="color:#E0245E;margin-right:4px;"></i>${t.likes}</span>
              <span style="font-size:.75rem;color:rgba(255,255,255,.35);"><i class="fas fa-retweet" style="color:#17BF63;margin-right:4px;"></i>${t.rt}</span>
            </div>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="text-center fade-up" style="margin-top:36px;">
      <a href="https://x.com/DaVinciAiZ" target="_blank" class="btn-primary" style="font-size:1rem;padding:14px 36px;">
        <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#fff;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Follow @DaVinciAiZ
      </a>
    </div>
  </div>
</section>

<!-- ===== FEATURED AGENTS ===== -->
<section id="agents" style="padding:100px 0;background:#080C14;position:relative;">
  <div class="orb" style="width:600px;height:600px;background:rgba(168,107,255,.03);top:-100px;right:-200px;"></div>
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:56px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">AI AGENT MARKETPLACE</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        Meet Your <span class="gradient-text">AI Agents</span>
      </h2>
      <div class="section-divider"></div>
      <p style="font-size:.95rem;color:rgba(253,253,253,.5);max-width:580px;margin:20px auto 0;">
        Specialized AI agents for every creative need. Each powered by the best-in-class AI models — all in one platform.
      </p>
    </div>

    <!-- Category Filter -->
    <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:center;margin-bottom:44px;" id="agentFilters">
      <button onclick="filterAgents('All')" id="afilter-All" class="afilter-btn active-filter" style="padding:8px 20px;border-radius:50px;border:1px solid #00D8FF;background:rgba(0,216,255,.15);color:#00D8FF;font-size:.8rem;font-weight:600;cursor:pointer;transition:all .2s;">All</button>
      ${agentCategories.map(cat=>`
        <button onclick="filterAgents('${cat}')" id="afilter-${cat.replace(/[^a-zA-Z]/g,'-')}" class="afilter-btn" style="padding:8px 20px;border-radius:50px;border:1px solid rgba(255,255,255,.12);background:transparent;color:rgba(255,255,255,.5);font-size:.8rem;font-weight:600;cursor:pointer;transition:all .2s;">${cat}</button>
      `).join('')}
    </div>

    <!-- Agent Grid -->
    <div id="agentGrid" class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${aiAgents.map(agent=>`
        <div class="agent-card fade-up" data-category="${agent.category}" data-output="${agent.outputType}" style="background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:28px;cursor:pointer;transition:all .3s;position:relative;overflow:hidden;" 
          onmouseover="this.style.borderColor='${agent.accentColor}33';this.style.background='rgba(255,255,255,.04)';this.style.transform='translateY(-4px)'" 
          onmouseout="this.style.borderColor='rgba(255,255,255,.07)';this.style.background='rgba(255,255,255,.025)';this.style.transform='translateY(0)'">
          
          <!-- Top gradient line -->
          <div style="position:absolute;top:0;left:0;right:0;height:2px;background:${agent.gradient};opacity:${agent.status==='live'?'1':'0.4'};"></div>
          
          <!-- Header -->
          <div style="display:flex;align-items:flex-start;gap:14px;margin-bottom:16px;">
            <div style="width:52px;height:52px;border-radius:16px;background:${agent.gradient};display:flex;align-items:center;justify-content:center;flex-shrink:0;box-shadow:0 8px 24px ${agent.accentColor}22;">
              <i class="${agent.icon}" style="font-size:1.3rem;color:#fff;"></i>
            </div>
            <div style="flex:1;min-width:0;">
              <div style="display:flex;align-items:center;gap:8px;flex-wrap:wrap;">
                <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.05rem;">${agent.name}</h3>
                <span style="font-size:.62rem;padding:2px 9px;border-radius:50px;font-weight:700;background:${agent.status==='live'?'rgba(0,216,255,.12)':agent.status==='beta'?'rgba(168,107,255,.15)':'rgba(255,255,255,.06)'};color:${agent.status==='live'?'#00D8FF':agent.status==='beta'?'#A86BFF':'rgba(255,255,255,.35)'};">${agent.status==='live'?'● LIVE':agent.status==='beta'?'◐ BETA':'○ SOON'}</span>
              </div>
              <p style="font-size:.78rem;color:${agent.accentColor};font-weight:500;margin-top:2px;">${agent.tagline}</p>
            </div>
          </div>
          
          <!-- Description -->
          <p style="font-size:.84rem;color:rgba(253,253,253,.55);line-height:1.7;margin-bottom:16px;">${agent.description}</p>
          
          <!-- Capabilities -->
          <div style="display:flex;flex-wrap:wrap;gap:5px;margin-bottom:18px;">
            ${agent.capabilities.map(cap=>`<span style="font-size:.68rem;padding:3px 10px;border-radius:50px;background:rgba(255,255,255,.04);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.08);">${cap}</span>`).join('')}
          </div>
          
          <!-- Footer -->
          <div style="display:flex;justify-content:space-between;align-items:center;padding-top:14px;border-top:1px solid rgba(255,255,255,.05);">
            <div style="display:flex;align-items:center;gap:12px;">
              ${agent.usageCount > 0 ? `<span style="font-size:.75rem;color:rgba(255,255,255,.4);"><i class="fas fa-bolt" style="color:${agent.accentColor};margin-right:3px;font-size:.65rem;"></i>${(agent.usageCount/1000).toFixed(1)}k uses</span>` : ''}
              ${agent.rating > 0 ? `<span style="font-size:.75rem;color:rgba(255,255,255,.4);"><i class="fas fa-star" style="color:#F7C59F;margin-right:3px;font-size:.65rem;"></i>${agent.rating}</span>` : ''}
            </div>
            <span style="font-size:.72rem;color:rgba(255,255,255,.3);background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.07);border-radius:50px;padding:3px 10px;">${agent.model.split('+')[0].trim()}</span>
          </div>
        </div>
      `).join('')}
    </div>

    <div class="text-center fade-up" style="margin-top:50px;">
      <p style="font-size:.88rem;color:rgba(255,255,255,.35);margin-bottom:20px;">More agents launching every month — governed by the community</p>
      <a href="/agents" class="btn-primary" style="font-size:1rem;padding:14px 36px;"><i class="fas fa-robot"></i> View All ${platformStats.totalAgents} Agents</a>
    </div>
  </div>
</section>

<!-- ===== HOW IT WORKS ===== -->
<section style="padding:100px 0;background:#05080F;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#A86BFF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">SIMPLE AS 1-2-3</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        How <span class="gradient-text">DaVinci AI</span> Works
      </h2>
      <div class="section-divider"></div>
    </div>

    <div class="grid md:grid-cols-3 gap-8">
      ${[
        { step:'01', icon:'fas fa-robot', title:'Choose Your Agent', color:'#00D8FF', desc:'Browse 15+ specialized AI agents across art, video, music, code, and Web3. Each agent is purpose-built for peak performance in its domain.' },
        { step:'02', icon:'fas fa-wand-magic-sparkles', title:'Prompt & Generate', color:'#A86BFF', desc:'Describe your vision in natural language. Your chosen agent processes your request using state-of-the-art AI models to deliver stunning results.' },
        { step:'03', icon:'fas fa-gem', title:'Own & Earn', color:'#00D8FF', desc:'Mint your creations as NFTs on BNB Chain. Earn $DAVINCI tokens for every generation. Trade, stake, and govern the platform through DAO.' },
      ].map((s,i)=>`
        <div class="card-glass fade-up" style="padding:36px 28px;position:relative;overflow:hidden;">
          <div style="position:absolute;top:-30px;right:-20px;font-family:'Poppins';font-weight:900;font-size:6rem;color:rgba(255,255,255,.03);line-height:1;">${s.step}</div>
          <div style="width:60px;height:60px;border-radius:18px;background:linear-gradient(135deg,${s.color}22,${s.color}44);border:1px solid ${s.color}44;display:flex;align-items:center;justify-content:center;margin-bottom:24px;">
            <i class="${s.icon}" style="font-size:1.5rem;color:${s.color};"></i>
          </div>
          <div style="display:inline-block;font-size:.72rem;color:${s.color};font-weight:700;letter-spacing:.1em;margin-bottom:10px;">STEP ${s.step}</div>
          <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;margin-bottom:14px;">${s.title}</h3>
          <p style="font-size:.88rem;color:rgba(253,253,253,.55);line-height:1.75;">${s.desc}</p>
          ${i < 2 ? `<div style="position:absolute;right:-20px;top:50%;transform:translateY(-50%);font-size:1.5rem;color:rgba(0,216,255,.2);display:none;" class="md:block">→</div>` : ''}
        </div>
      `).join('')}
    </div>
  </div>
</section>

<!-- ===== ECOSYSTEM ===== -->
<section id="ecosystem" style="padding:100px 0;background:#080C14;position:relative;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center fade-up" style="margin-bottom:60px;">
      <p style="font-size:.78rem;color:#00D8FF;font-weight:700;letter-spacing:.15em;margin-bottom:12px;">THE DAVINCI ECOSYSTEM</p>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3rem);margin-bottom:16px;">
        <span class="gradient-text">Four Pillars</span> of Creative Intelligence
      </h2>
      <div class="section-divider"></div>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      ${[
        { icon:'fas fa-robot', title:'AI Agent Studio', color:'#00D8FF', desc:'15+ specialized agents for art, video, music, writing, and code. State-of-the-art models in one unified interface.', tags:['Art','Video','Music','Code','NFT'], link:'/agents' },
        { icon:'fas fa-gem', title:'NFT Marketplace', color:'#A86BFF', desc:'Mint, trade, and collect AI-generated NFTs on BNB Chain. Royalties automated on-chain. Full IP ownership.', tags:['Mint','Trade','Royalties','BNB'], link:'/create/image' },
        { icon:'fas fa-gamepad', title:'Creator Game Hub', color:'#00D8FF', desc:'Compete in AI art battles, earn $DAVINCI rewards, unlock rare NFT prizes, and climb the global creator leaderboard.', tags:['Battles','Rewards','Leaderboard'], link:'/' },
        { icon:'fas fa-landmark', title:'DAO Governance', color:'#A86BFF', desc:'$DAVINCI holders govern everything. Vote on new agents, treasury, and platform direction. True community ownership.', tags:['Voting','Treasury','Proposals'], link:'/' },
      ].map(e=>`
        <div class="card-glass fade-up" style="padding:28px;position:relative;overflow:hidden;cursor:pointer;" onclick="location.href='${e.link}'" onmouseover="this.style.borderColor='${e.color}33';this.style.transform='translateY(-4px)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='translateY(0)'">
          <div style="position:absolute;top:-20px;right:-20px;width:100px;height:100px;border-radius:50%;background:${e.color};opacity:.04;"></div>
          <div style="width:54px;height:54px;border-radius:15px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
            <i class="${e.icon}" style="font-size:1.4rem;color:${e.color};"></i>
          </div>
          <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.05rem;margin-bottom:12px;">${e.title}</h3>
          <p style="font-size:.85rem;color:rgba(253,253,253,.55);line-height:1.7;margin-bottom:16px;">${e.desc}</p>
          <div style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:18px;">
            ${e.tags.map(t=>`<span style="font-size:.68rem;padding:3px 10px;border-radius:50px;background:rgba(255,255,255,.05);color:rgba(255,255,255,.5);border:1px solid rgba(255,255,255,.08);">${t}</span>`).join('')}
          </div>
          <a style="font-size:.82rem;color:${e.color};font-weight:600;text-decoration:none;">Explore <i class="fas fa-arrow-right" style="font-size:.75rem;margin-left:4px;"></i></a>
        </div>
      `).join('')}
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
        { icon:'fas fa-brain', title:'Multi-Agent AI Engine', color:'#00D8FF', desc:'15+ specialized AI agents — each purpose-built for its domain. Art, Video, Music, Code, NFT, 3D, Analytics and more. Always best-in-class.' },
        { icon:'fas fa-shield-halved', title:'Blockchain-Verified Ownership', color:'#A86BFF', desc:'Every AI creation is immutably recorded on BNB Chain. Provenance, authenticity, and ownership — all verifiable on-chain forever.' },
        { icon:'fas fa-coins', title:'Creator Monetization', color:'#00D8FF', desc:'Earn $DAVINCI tokens for every generation. Sell NFTs, earn royalties, stake tokens, and get rewarded for DAO governance participation.' },
        { icon:'fas fa-users', title:'DAO Governance', color:'#A86BFF', desc:'$DAVINCI holders vote on new agent launches, treasury allocations, platform upgrades, and partner integrations. True community ownership.' },
        { icon:'fas fa-lock', title:'Enterprise Security', color:'#00D8FF', desc:'Multi-signature smart contracts, third-party audits, cold storage treasury, and battle-tested security protocols protecting every transaction.' },
        { icon:'fas fa-globe', title:'Multi-Chain Expansion', color:'#A86BFF', desc:'BNB Chain first — then Ethereum, Polygon, Solana, and beyond. DaVinci AI is architected for a multi-chain creative future.' },
        { icon:'fas fa-store', title:'Agent Marketplace', color:'#00D8FF', desc:'Community-built agents. License and deploy fine-tuned models. Creators earn royalties when their agents are used by the community.' },
        { icon:'fas fa-layer-group', title:'NFT Layering System', color:'#A86BFF', desc:'Compose complex NFTs with AI-generated layers. Mix styles, merge artworks, and create generative collections with on-chain randomness.' },
        { icon:'fas fa-graduation-cap', title:'Creator Academy', color:'#00D8FF', desc:'Learn AI-native creative skills. Tutorials, challenges, and workshops led by top creators. Earn credentials and $DAVINCI as you learn.' },
      ].map(f=>`
        <div class="card-glass fade-up" style="padding:28px;transition:all .3s;" onmouseover="this.style.borderColor='${f.color}33';this.style.transform='translateY(-2px)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='translateY(0)'">
          <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
            <div style="width:42px;height:42px;border-radius:12px;background:${f.color}18;border:1px solid ${f.color}33;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
              <i class="${f.icon}" style="font-size:1.1rem;color:${f.color};"></i>
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
            { label:'Strategic Investors', pct:15, val:'1,333,333,333', color:'#A86BFF' },
            { label:'Ecosystem & Marketing', pct:13, val:'1,155,555,555', color:'#3DCFFF' },
            { label:'Team & Core Dev', pct:12, val:'1,066,666,666', color:'#7B5FBF' },
            { label:'Treasury & Foundation', pct:10, val:'888,888,888', color:'#00A8CC' },
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
                <div style="height:100%;width:${a.pct}%;background:${a.color};border-radius:3px;" class="bar-fill"></div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <div class="fade-up" style="margin-top:80px;">
      <div class="text-center" style="margin-bottom:40px;">
        <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.6rem;margin-bottom:12px;">Vesting Schedule & <span class="gradient-text">Token Unlock Timeline</span></h3>
        <p style="font-size:.9rem;color:rgba(253,253,253,.5);">Designed for long-term sustainability — all insider allocations locked to prevent dumping.</p>
      </div>
      <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.07);border-radius:20px;padding:32px;margin-bottom:32px;">
        <canvas id="vestingChart" height="120"></canvas>
      </div>
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
              { name:'Community Rewards', pct:'45%', tge:'5%', cliff:'3 months', vest:'60 months (5 years)', color:'#00D8FF' },
              { name:'Strategic Investors', pct:'15%', tge:'10%', cliff:'9 months', vest:'36 months (3 years)', color:'#A86BFF' },
              { name:'Ecosystem & Marketing', pct:'13%', tge:'8%', cliff:'6 months', vest:'42 months (3.5 years)', color:'#3DCFFF' },
              { name:'Team & Core Dev', pct:'12%', tge:'0%', cliff:'18 months', vest:'48 months (4 years)', color:'#7B5FBF' },
              { name:'Treasury & Foundation', pct:'10%', tge:'0%', cliff:'12 months', vest:'60 months (5 years)', color:'#00A8CC' },
              { name:'Artist Fund', pct:'5%', tge:'10%', cliff:'0 months', vest:'36 months (3 years)', color:'#D4A0FF' },
            ].map((r,i)=>`
              <tr style="border-bottom:1px solid rgba(255,255,255,.05);${i%2===0?'background:rgba(255,255,255,.01)':''}">
                <td style="padding:14px 16px;"><span style="display:inline-flex;align-items:center;gap:8px;"><span style="width:8px;height:8px;border-radius:50%;background:${r.color};display:inline-block;"></span>${r.name}</span></td>
                <td style="padding:14px 16px;text-align:center;font-weight:700;color:${r.color};">${r.pct}</td>
                <td style="padding:14px 16px;text-align:center;">${r.tge}</td>
                <td style="padding:14px 16px;text-align:center;color:rgba(255,255,255,.6);">${r.cliff}</td>
                <td style="padding:14px 16px;text-align:center;color:rgba(255,255,255,.6);">${r.vest}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Monthly Vesting Schedule Table -->
      <div class="fade-up" style="margin-top:48px;">
        <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;margin-bottom:8px;">Monthly Cumulative Circulating Supply</h3>
        <p style="font-size:.82rem;color:rgba(255,255,255,.4);margin-bottom:20px;">Full unlock at Month 60 (5 years) — 100% of supply in circulation</p>
        <div style="overflow-x:auto;border-radius:12px;border:1px solid rgba(255,255,255,.07);">
          <table style="width:100%;border-collapse:collapse;font-size:.78rem;min-width:720px;">
            <thead style="background:rgba(0,216,255,.06);">
              <tr>
                <th style="padding:10px 12px;text-align:center;color:rgba(255,255,255,.5);font-weight:700;white-space:nowrap;">Month</th>
                <th style="padding:10px 12px;text-align:right;color:#00D8FF;font-weight:700;white-space:nowrap;">Community</th>
                <th style="padding:10px 12px;text-align:right;color:#3DCFFF;font-weight:700;white-space:nowrap;">Ecosystem</th>
                <th style="padding:10px 12px;text-align:right;color:#A86BFF;font-weight:700;white-space:nowrap;">Investors</th>
                <th style="padding:10px 12px;text-align:right;color:#7B5FBF;font-weight:700;white-space:nowrap;">Team</th>
                <th style="padding:10px 12px;text-align:right;color:#00A8CC;font-weight:700;white-space:nowrap;">Treasury</th>
                <th style="padding:10px 12px;text-align:right;color:#D4A0FF;font-weight:700;white-space:nowrap;">Artist Fund</th>
                <th style="padding:10px 12px;text-align:right;color:rgba(255,255,255,.7);font-weight:700;white-space:nowrap;">Total Circ.</th>
                <th style="padding:10px 12px;text-align:center;color:rgba(255,255,255,.7);font-weight:700;white-space:nowrap;">Circ. %</th>
              </tr>
            </thead>
            <tbody>
              ${[
                { m:1,  c:'200,000,000',   e:'92,444,444',   i:'133,333,333', t:'0',             tr:'0',           a:'44,444,444',   tot:'470,222,221',   pct:'5.29%'  },
                { m:3,  c:'333,333,333',   e:'92,444,444',   i:'133,333,333', t:'0',             tr:'0',           a:'88,888,889',   tot:'648,000,000',   pct:'7.29%'  },
                { m:6,  c:'533,333,333',   e:'115,555,556',  i:'133,333,333', t:'0',             tr:'0',           a:'155,555,556',  tot:'937,777,778',   pct:'10.56%' },
                { m:9,  c:'733,333,333',   e:'138,666,667',  i:'266,666,667', t:'0',             tr:'0',           a:'222,222,222',  tot:'1,360,888,889', pct:'15.30%' },
                { m:12, c:'933,333,333',   e:'161,777,778',  i:'400,000,000', t:'0',             tr:'0',           a:'288,888,889',  tot:'1,784,000,000', pct:'20.07%' },
                { m:18, c:'1,333,333,333', e:'208,000,000',  i:'666,666,667', t:'88,888,889',    tr:'88,888,889',  a:'422,222,222',  tot:'2,808,000,000', pct:'31.60%' },
                { m:24, c:'1,733,333,333', e:'254,222,222',  i:'933,333,333', t:'222,222,222',   tr:'88,888,889',  a:'422,222,222',  tot:'3,654,222,222', pct:'41.11%' },
                { m:30, c:'2,133,333,333', e:'346,666,667',  i:'1,066,666,667',t:'333,333,333',  tr:'177,777,778', a:'422,222,222',  tot:'4,479,999,999', pct:'50.40%' },
                { m:36, c:'2,533,333,333', e:'439,111,111',  i:'1,200,000,000',t:'444,444,444',  tr:'266,666,667', a:'444,444,444',  tot:'5,327,999,999', pct:'59.93%' },
                { m:48, c:'3,733,333,333', e:'575,111,111',  i:'1,333,333,333',t:'888,888,889',  tr:'444,444,444', a:'444,444,444',  tot:'7,419,555,554', pct:'83.51%' },
                { m:60, c:'4,000,000,000', e:'692,444,444',  i:'1,333,333,333',t:'1,066,666,666',tr:'888,888,888', a:'444,444,444',  tot:'8,888,888,888', pct:'100%'   },
              ].map((r,i)=>`
                <tr style="border-bottom:1px solid rgba(255,255,255,.05);${r.m===60?'background:rgba(0,216,255,.05);font-weight:700;':i%2===0?'background:rgba(255,255,255,.01)':''}">
                  <td style="padding:10px 12px;text-align:center;font-weight:600;color:${r.m===60?'#00D8FF':'rgba(255,255,255,.7)'};">${r.m===60?'60 ✓':''+r.m}</td>
                  <td style="padding:10px 12px;text-align:right;color:rgba(255,255,255,.75);">${r.c}</td>
                  <td style="padding:10px 12px;text-align:right;color:rgba(255,255,255,.75);">${r.e}</td>
                  <td style="padding:10px 12px;text-align:right;color:rgba(255,255,255,.75);">${r.i}</td>
                  <td style="padding:10px 12px;text-align:right;color:rgba(255,255,255,.75);">${r.t}</td>
                  <td style="padding:10px 12px;text-align:right;color:rgba(255,255,255,.75);">${r.tr}</td>
                  <td style="padding:10px 12px;text-align:right;color:rgba(255,255,255,.75);">${r.a}</td>
                  <td style="padding:10px 12px;text-align:right;font-weight:600;">${r.tot}</td>
                  <td style="padding:10px 12px;text-align:center;font-weight:700;color:${r.m===60?'#00D8FF':'rgba(255,255,255,.6)'};">${r.pct}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
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
      <div class="hidden lg:block" style="position:absolute;left:50%;top:0;bottom:0;width:2px;background:linear-gradient(to bottom,transparent,rgba(0,216,255,.3) 10%,rgba(0,216,255,.3) 90%,transparent);transform:translateX(-50%);"></div>
      <div style="display:flex;flex-direction:column;gap:32px;">
        ${[
          { phase:'Phase 1', period:'Q1–Q2 2025', status:'completed', title:'Genesis & Foundation', items:['Project reveal & whitepaper release','Website v1.0 launch','Community building (X, Telegram)','AI agent integrations (Visio, Prism)','Core team expansion'] },
          { phase:'Phase 2', period:'Q3–Q4 2025', status:'current', title:'Agent Platform Launch & TGE', items:['AI Agent Studio public launch (15 agents)','NFT minting engine live','$DAVINCI TGE on BNB Chain','Initial DEX listing (PancakeSwap)','Smart contract audit complete'] },
          { phase:'Phase 3', period:'Q1–Q2 2026', status:'upcoming', title:'Ecosystem Expansion', items:['NFT Marketplace public launch','DAO governance activation','Staking & yield farming live','Agent Marketplace (community agents)','Mobile app beta (iOS & Android)'] },
          { phase:'Phase 4', period:'Q3–Q4 2026', status:'upcoming', title:'Multi-Chain & Scale', items:['Ethereum & Polygon bridge','3D & XR agents (Sculptor, Realm)','Layer 2 gas optimization','Creator Academy launch','100,000+ users milestone'] },
          { phase:'Phase 5', period:'2027+', status:'future', title:'The Renaissance Protocol', items:['Decentralized AI training platform','DaVinci L2 blockchain research','Cross-chain agent portability','AI DAO autonomous governance','1M+ creators onboarded'] },
        ].map((r,i)=>`
          <div class="fade-up grid lg:grid-cols-2 gap-8 items-center" style="${i%2===1?'direction:rtl;':''}">
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
                      <i class="fas fa-${r.status==='completed'?'check-circle':r.status==='current'?'circle-dot':'circle'}" style="color:${r.status==='completed'?'#00D8FF':r.status==='current'?'#A86BFF':'rgba(255,255,255,.2)'};font-size:.8rem;flex-shrink:0;"></i>
                      ${item}
                    </li>
                  `).join('')}
                </ul>
              </div>
            </div>
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
          <a href="https://x.com/DaVinciAiZ" target="_blank" style="font-size:.78rem;color:rgba(255,255,255,.4);text-decoration:none;display:inline-flex;align-items:center;gap:6px;transition:color .2s;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.4)'">
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
        { name:'Suno', icon:'fas fa-music', color:'#FA709A', desc:'Music Gen' },
        { name:'BNB Chain', icon:'fas fa-link', color:'#F0B90B', desc:'Infrastructure' },
      ].map(p=>`
        <div class="card-glass fade-up" style="padding:20px;text-align:center;cursor:pointer;" onmouseover="this.style.borderColor='rgba(0,216,255,.3)';this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='translateY(0)'">
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
        { q:'What are AI Agents on DaVinci AI?', a:'AI Agents are specialized AI models purpose-built for specific creative tasks. Visio handles text-to-image art, Kinetic creates cinematic videos, Sonic composes music, Forge generates smart contracts — each optimized for peak performance in its domain. All accessible from one platform.' },
        { q:'What is $DAVINCI token and how can I earn it?', a:'$DAVINCI is a BEP-20 utility and governance token on BNB Chain with 8,888,888,888 total supply. Earn by using AI agents, winning Game Hub battles, NFT marketplace activities, staking, referring users, and DAO governance participation.' },
        { q:'When is the Token Generation Event (TGE)?', a:'The TGE is scheduled for Q4 2025. 45% of total supply is allocated to community rewards with 5% TGE unlock (3-month cliff), then 60-month linear vesting over 5 years. Strategic Investors receive 10% at TGE with a 9-month cliff and 36-month linear vesting. Early community members receive priority access.' },
        { q:'Do I need crypto experience to use DaVinci AI?', a:'No! Start creating with just a Google login. A crypto wallet (MetaMask) is only needed when you want to mint NFTs or claim $DAVINCI tokens.' },
        { q:'How many AI agents are available?', a:'Currently ${platformStats.liveAgents} live agents and ${platformStats.totalAgents} total (including beta and upcoming). Categories include Art & Design, Video & Motion, Writing, Music & Audio, Code & Dev, NFT & Web3, Analytics, and 3D & XR. New agents launch monthly via community governance votes.' },
        { q:'How does NFT minting work?', a:'After any AI agent generation, mint it as a BEP-20 NFT on BNB Chain with one click. The minting fee is paid in BNB. Your creation becomes a verifiable on-chain asset with full provenance history and you retain full IP rights.' },
        { q:'Is the smart contract audited?', a:'Yes. All DaVinci AI smart contracts undergo third-party security audits before mainnet deployment. Audit reports will be published on our GitHub. We use multi-signature wallets for treasury management.' },
      ].map((item,i)=>`
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
      Be Part of the<br><span class="gradient-text">Creative Revolution</span>
    </h2>
    <p style="font-size:1.05rem;color:rgba(253,253,253,.6);max-width:560px;margin:0 auto 44px;line-height:1.8;">
      ${platformStats.totalAgents}+ AI agents. 8,888+ creators. $8.88B token economy. The future of AI-native creative intelligence starts here.
    </p>
    <div class="flex flex-wrap justify-center gap-4">
      <a href="/agents" class="btn-primary" style="font-size:1.05rem;padding:16px 40px;"><i class="fas fa-robot"></i> Explore AI Agents</a>
      <a href="https://x.com/DaVinciAiZ" target="_blank" class="btn-outline" style="font-size:1.05rem;padding:15px 36px;">
        <svg viewBox="0 0 24 24" style="width:18px;height:18px;fill:#00D8FF;"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.74l7.73-8.835L1.254 2.25H8.08l4.259 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
        Join on X
      </a>
      <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-outline" style="font-size:1.05rem;padding:15px 36px;border-color:rgba(168,107,255,.4);color:#A86BFF;">
        <i class="fab fa-telegram"></i> Telegram
      </a>
    </div>
  </div>
</section>

<!-- ===== AGENT DETAIL MODAL ===== -->
<div id="agentModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.85);z-index:1000;align-items:center;justify-content:center;backdrop-filter:blur(12px);" onclick="if(event.target===this)closeAgentModal()">
  <div style="max-width:580px;width:90%;max-height:88vh;overflow-y:auto;background:#0D1829;border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:36px;">
    <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:24px;">
      <div style="display:flex;gap:14px;align-items:center;">
        <div id="modalIcon" style="width:56px;height:56px;border-radius:16px;display:flex;align-items:center;justify-content:center;flex-shrink:0;"></div>
        <div>
          <h2 id="modalName" style="font-family:'Poppins';font-weight:800;font-size:1.4rem;"></h2>
          <p id="modalTagline" style="font-size:.85rem;margin-top:2px;"></p>
        </div>
      </div>
      <button onclick="closeAgentModal()" style="background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.15);border-radius:50%;width:40px;height:40px;color:#FDFDFD;cursor:pointer;font-size:1rem;flex-shrink:0;"><i class="fas fa-times"></i></button>
    </div>
    <p id="modalDesc" style="font-size:.92rem;line-height:1.8;color:rgba(253,253,253,.7);margin-bottom:24px;"></p>
    <div id="modalCaps" style="display:flex;flex-wrap:wrap;gap:6px;margin-bottom:20px;"></div>
    <div id="modalMeta" style="background:rgba(255,255,255,.04);border-radius:12px;padding:16px;margin-bottom:24px;"></div>
    <a href="/create/image" class="btn-primary" style="width:100%;text-align:center;display:block;padding:14px;font-size:1rem;"><i class="fas fa-rocket"></i> Launch Agent</a>
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

// ===== AGENT FILTER =====
function filterAgents(cat){
  document.querySelectorAll('.afilter-btn').forEach(b=>{
    b.style.borderColor='rgba(255,255,255,.12)';
    b.style.background='transparent';
    b.style.color='rgba(255,255,255,.5)';
  });
  const id='afilter-'+cat.replace(/[^a-zA-Z]/g,'-');
  const btn=document.getElementById(id);
  if(btn){ btn.style.borderColor='#00D8FF'; btn.style.background='rgba(0,216,255,.15)'; btn.style.color='#00D8FF'; }

  document.querySelectorAll('.agent-card').forEach(card=>{
    if(cat==='All'){ card.style.display=''; return; }
    card.style.display=card.dataset.category===cat?'':'none';
  });
}

// ===== AGENT MODAL =====
function closeAgentModal(){
  document.getElementById('agentModal').style.display='none';
  document.body.style.overflow='';
}

// ===== FAQ =====
function toggleFaq(i){
  const answer=document.getElementById('faq-answer-'+i);
  const icon=document.querySelector('.faq-icon-'+i);
  const isOpen=answer.style.maxHeight!=='0px'&&answer.style.maxHeight!=='';
  document.querySelectorAll('[id^="faq-answer-"]').forEach(el=>el.style.maxHeight='0px');
  document.querySelectorAll('[class*="faq-icon-"]').forEach(el=>el.style.transform='rotate(0deg)');
  if(!isOpen){ answer.style.maxHeight=answer.scrollHeight+'px'; icon.style.transform='rotate(180deg)'; }
}

// ===== INIT =====
window.addEventListener('load',()=>{
  animateCounters();

  // Tokenomics Chart
  const ctx=document.getElementById('tokenomicsChart')?.getContext('2d');
  if(ctx){
    new Chart(ctx,{
      type:'doughnut',
      data:{
        labels:['Community Rewards','Strategic Investors','Ecosystem & Marketing','Team & Core Dev','Treasury & Foundation','Artist Fund'],
        datasets:[{
          data:[45,15,13,12,10,5],
          backgroundColor:['#00D8FF','#A86BFF','#3DCFFF','#7B5FBF','#00A8CC','#D4A0FF'],
          borderColor:'#080C14',borderWidth:3,hoverOffset:8
        }]
      },
      options:{ responsive:false, cutout:'72%', plugins:{ legend:{display:false}, tooltip:{callbacks:{label:c=>c.label+': '+c.parsed+'%'}} } }
    });
  }

  // Vesting Chart
  const vCtx=document.getElementById('vestingChart')?.getContext('2d');
  if(vCtx){
    const months=[...Array(61).keys()];
    new Chart(vCtx,{
      type:'line',
      data:{
        labels:months.map(m=>m===0?'TGE':m%12===0?'Month '+m:''),
        datasets:[
          {label:'Community (45%)',data:months.map(m=>m<3?5:Math.min(5+((m-3)/60)*95,100)),borderColor:'#00D8FF',backgroundColor:'rgba(0,216,255,.08)',fill:true,tension:.4,pointRadius:0},
          {label:'Investors (15%)',data:months.map(m=>m<9?10:Math.min(10+((m-9)/36)*90,100)),borderColor:'#A86BFF',backgroundColor:'rgba(168,107,255,.06)',fill:true,tension:.4,pointRadius:0},
          {label:'Team (12%)',data:months.map(m=>m<18?0:Math.min(((m-18)/48)*100,100)),borderColor:'#7B5FBF',backgroundColor:'rgba(123,95,191,.05)',fill:true,tension:.4,pointRadius:0},
          {label:'Ecosystem (13%)',data:months.map(m=>m<6?8:Math.min(8+((m-6)/42)*92,100)),borderColor:'#3DCFFF',backgroundColor:'rgba(61,207,255,.05)',fill:true,tension:.4,pointRadius:0},
        ]
      },
      options:{
        responsive:true,
        plugins:{ legend:{labels:{color:'rgba(255,255,255,.6)',font:{size:11}}}, tooltip:{mode:'index',intersect:false} },
        scales:{
          x:{ticks:{color:'rgba(255,255,255,.3)',font:{size:10}},grid:{color:'rgba(255,255,255,.04)'}},
          y:{ticks:{color:'rgba(255,255,255,.3)',font:{size:10},callback:v=>v+'%'},grid:{color:'rgba(255,255,255,.04)'},min:0,max:100}
        }
      }
    });
  }
});
</script>
`

export const homePage = layout('Home — DaVinci AI: AI Agent Creative Platform', homeContent, `
<meta name="description" content="DaVinci AI: The world's first AI agent creative platform on Web3. 15+ specialized AI agents for art, video, music, code, and NFTs. Earn $DAVINCI tokens on BNB Chain.">
<meta property="og:title" content="DaVinci AI — AI Agent Studio">
<meta property="og:description" content="15+ AI agents. Generate art, video, music, code & NFTs. Earn $DAVINCI tokens on BNB Chain.">
<style>
  @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
  @keyframes float-card {
    0%,100%{ transform:translateY(0px); }
    50%{ transform:translateY(-10px); }
  }
  .fade-up { opacity:0; transform:translateY(30px); transition:opacity .7s, transform .7s; }
  .fade-up.visible { opacity:1; transform:translateY(0); }
</style>
`)
