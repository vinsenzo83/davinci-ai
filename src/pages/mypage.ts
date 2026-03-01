import { layout } from './layout'
import { galleryImages, galleryVideos } from '../data/gallery-data'

const myImages = galleryImages.filter(img => img.minted).slice(0, 8)
const myVids = galleryVideos.slice(0, 3)

const myContent = `
<div style="min-height:100vh;background:#080C14;padding:40px 0;">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Profile Header -->
    <div style="background:linear-gradient(135deg,rgba(0,216,255,.06),rgba(168,107,255,.06));border:1px solid rgba(0,216,255,.15);border-radius:24px;padding:32px;margin-bottom:32px;position:relative;overflow:hidden;">
      <div style="position:absolute;top:-50px;right:-50px;width:200px;height:200px;border-radius:50%;background:rgba(0,216,255,.04);"></div>
      <div class="grid md:grid-cols-3 gap-6 items-center">
        <!-- Avatar -->
        <div style="display:flex;align-items:center;gap:16px;">
          <div style="position:relative;">
            <div style="width:80px;height:80px;border-radius:50%;background:linear-gradient(135deg,#00D8FF,#A86BFF);display:flex;align-items:center;justify-content:center;font-size:2rem;font-weight:900;color:#080C14;">D</div>
            <div style="position:absolute;bottom:2px;right:2px;width:18px;height:18px;background:#00D8FF;border-radius:50%;border:3px solid #080C14;"></div>
          </div>
          <div>
            <div style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;">0xA1b2...c3d4</div>
            <div style="font-size:.78rem;color:rgba(255,255,255,.4);margin-bottom:6px;">Renaissance Creator · Level 7</div>
            <div style="display:flex;gap:6px;">
              <span style="font-size:.68rem;padding:3px 10px;border-radius:50px;background:rgba(0,216,255,.1);color:#00D8FF;border:1px solid rgba(0,216,255,.2);">Verified</span>
              <span style="font-size:.68rem;padding:3px 10px;border-radius:50px;background:rgba(168,107,255,.1);color:#A86BFF;border:1px solid rgba(168,107,255,.2);">Genesis NFT Holder</span>
            </div>
          </div>
        </div>
        <!-- Quick Stats -->
        <div class="grid grid-cols-3 gap-3">
          ${[
            {label:'$DAVINCI',val:'24,500',color:'#00D8FF'},
            {label:'NFTs Owned',val:'12',color:'#A86BFF'},
            {label:'AI Creations',val:'87',color:'#00D8FF'},
          ].map(s=>`
            <div style="text-align:center;background:rgba(0,0,0,.3);border-radius:12px;padding:14px;">
              <div style="font-size:1.2rem;font-weight:800;color:${s.color};">${s.val}</div>
              <div style="font-size:.68rem;color:rgba(255,255,255,.4);margin-top:2px;">${s.label}</div>
            </div>
          `).join('')}
        </div>
        <!-- Actions -->
        <div style="display:flex;flex-wrap:wrap;gap:8px;justify-content:flex-end;">
          <a href="/create/image" class="btn-primary" style="font-size:.85rem;padding:10px 22px;"><i class="fas fa-plus"></i> Create</a>
          <button class="btn-outline" style="font-size:.85rem;padding:9px 20px;"><i class="fas fa-share-alt"></i> Share</button>
          <button class="btn-outline" style="font-size:.85rem;padding:9px 20px;"><i class="fas fa-cog"></i> Settings</button>
        </div>
      </div>
    </div>

    <!-- Tabs -->
    <div style="display:flex;gap:4px;background:rgba(255,255,255,.04);border-radius:14px;padding:4px;margin-bottom:28px;overflow-x:auto;">
      ${['Overview','My NFTs','My Videos','Staking','Activity','Rewards'].map((tab,i)=>`
        <button onclick="switchTab('${tab}')" id="tab-${tab}" style="flex:1;min-width:fit-content;padding:10px 16px;border-radius:10px;border:none;background:${i===0?'rgba(0,216,255,.12)':'transparent'};color:${i===0?'#00D8FF':'rgba(255,255,255,.4)'};font-size:.83rem;font-weight:600;cursor:pointer;white-space:nowrap;transition:all .2s;">${tab}</button>
      `).join('')}
    </div>

    <!-- ===== OVERVIEW TAB ===== -->
    <div id="content-Overview">
      <!-- Earnings & Stats -->
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        ${[
          {icon:'fas fa-coins',label:'Total Earned',val:'24,500 DAVINCI',change:'+12.5%',color:'#00D8FF'},
          {icon:'fas fa-chart-line',label:'NFT Sales Volume',val:'2.45 BNB ($890)',change:'+8.3%',color:'#A86BFF'},
          {icon:'fas fa-lock',label:'Staking Rewards',val:'1,240 DAVINCI',change:'+5.2%',color:'#00D8FF'},
          {icon:'fas fa-trophy',label:'Rank',val:'#142 Global',change:'↑ 23 places',color:'#A86BFF'},
        ].map(s=>`
          <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:20px;">
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
              <i class="${s.icon}" style="color:${s.color};font-size:1.1rem;"></i>
              <span style="font-size:.72rem;color:#2ECC71;background:rgba(46,204,113,.1);padding:3px 8px;border-radius:50px;">${s.change}</span>
            </div>
            <div style="font-size:1.1rem;font-weight:800;margin-bottom:4px;">${s.val}</div>
            <div style="font-size:.72rem;color:rgba(255,255,255,.4);">${s.label}</div>
          </div>
        `).join('')}
      </div>

      <!-- Recent Activity + Achievements -->
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Recent Activity -->
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
          <h3 style="font-weight:700;font-size:.95rem;margin-bottom:18px;"><i class="fas fa-history" style="color:#00D8FF;margin-right:8px;"></i>Recent Activity</h3>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${[
              {icon:'fas fa-image',action:'Generated AI artwork "Neon Tokyo v2"',time:'2 hours ago',color:'#00D8FF',reward:'+50 DAVINCI'},
              {icon:'fas fa-gem',action:'Minted NFT "Cosmic Nebula" #0042',time:'1 day ago',color:'#A86BFF',reward:'Cost: 0.002 BNB'},
              {icon:'fas fa-trophy',action:'Won Weekly Art Challenge #33',time:'2 days ago',color:'#F0B90B',reward:'+500 DAVINCI'},
              {icon:'fas fa-coins',action:'Staked 10,000 DAVINCI (12 mo)',time:'5 days ago',color:'#2ECC71',reward:'24% APY'},
              {icon:'fas fa-vote-yea',action:'Voted on Proposal: Add KlingAI v3',time:'1 week ago',color:'#00D8FF',reward:'+25 DAVINCI'},
              {icon:'fas fa-tag',action:'Sold "Galaxy Core" NFT',time:'2 weeks ago',color:'#A86BFF',reward:'+0.15 BNB'},
            ].map(a=>`
              <div style="display:flex;align-items:center;gap:12px;padding:10px;background:rgba(255,255,255,.02);border-radius:10px;">
                <div style="width:36px;height:36px;border-radius:50%;background:${a.color}18;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                  <i class="${a.icon}" style="color:${a.color};font-size:.85rem;"></i>
                </div>
                <div style="flex:1;min-width:0;">
                  <div style="font-size:.82rem;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${a.action}</div>
                  <div style="font-size:.7rem;color:rgba(255,255,255,.35);margin-top:2px;">${a.time}</div>
                </div>
                <div style="font-size:.75rem;color:${a.color};font-weight:700;white-space:nowrap;">${a.reward}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Achievements -->
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
          <h3 style="font-weight:700;font-size:.95rem;margin-bottom:18px;"><i class="fas fa-medal" style="color:#F0B90B;margin-right:8px;"></i>Achievements & Badges</h3>
          <div class="grid grid-cols-3 gap-3">
            ${[
              {icon:'fas fa-star',name:'Early Adopter',color:'#F0B90B',unlocked:true},
              {icon:'fas fa-gem',name:'NFT Pioneer',color:'#A86BFF',unlocked:true},
              {icon:'fas fa-crown',name:'Genesis Creator',color:'#00D8FF',unlocked:true},
              {icon:'fas fa-fire',name:'Hot Streak',color:'#FF6B6B',unlocked:true},
              {icon:'fas fa-robot',name:'AI Master',color:'#00D8FF',unlocked:false},
              {icon:'fas fa-vote-yea',name:'DAO Voter',color:'#2ECC71',unlocked:false},
              {icon:'fas fa-users',name:'Referral King',color:'#A86BFF',unlocked:false},
              {icon:'fas fa-trophy',name:'Champion',color:'#F0B90B',unlocked:false},
              {icon:'fas fa-infinity',name:'Legendary',color:'rgba(255,255,255,.2)',unlocked:false},
            ].map(b=>`
              <div style="text-align:center;padding:14px 8px;background:rgba(255,255,255,.02);border-radius:12px;border:1px solid ${b.unlocked?b.color+'33':'rgba(255,255,255,.05)'};opacity:${b.unlocked?'1':'.4'};">
                <i class="${b.icon}" style="font-size:1.4rem;color:${b.unlocked?b.color:'rgba(255,255,255,.2)'};margin-bottom:6px;display:block;"></i>
                <div style="font-size:.65rem;color:${b.unlocked?'rgba(255,255,255,.7)':'rgba(255,255,255,.3)'};">${b.name}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

    <!-- ===== MY NFTS TAB ===== -->
    <div id="content-My NFTs" style="display:none;">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:20px;flex-wrap:wrap;gap:12px;">
        <h2 style="font-weight:700;font-size:1.05rem;">My NFT Collection <span style="color:rgba(255,255,255,.4);font-size:.85rem;font-weight:400;">(12 items)</span></h2>
        <select style="padding:9px 16px;font-size:.83rem;" onchange="">
          <option>Sort: Recently Minted</option>
          <option>Sort: Highest Price</option>
          <option>Sort: Most Likes</option>
        </select>
      </div>
      <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        ${myImages.map(img=>`
          <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;transition:all .3s;" onmouseover="this.style.borderColor='rgba(168,107,255,.4)';this.style.transform='translateY(-3px)'" onmouseout="this.style.borderColor='rgba(255,255,255,.08)';this.style.transform='translateY(0)'">
            <div style="position:relative;padding-bottom:100%;overflow:hidden;">
              <img src="${img.thumb}" alt="${img.title}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;top:8px;right:8px;background:rgba(168,107,255,.8);border-radius:6px;padding:3px 8px;font-size:.62rem;font-weight:700;"><i class="fas fa-gem" style="margin-right:3px;"></i>MINTED</div>
            </div>
            <div style="padding:14px;">
              <div style="font-weight:700;font-size:.88rem;margin-bottom:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">${img.title}</div>
              <div style="font-size:.72rem;color:rgba(255,255,255,.4);margin-bottom:10px;">${img.model}</div>
              <div style="display:flex;justify-content:space-between;align-items:center;">
                <span style="font-size:.88rem;font-weight:700;color:#A86BFF;">${img.price}</span>
                <div style="display:flex;gap:6px;">
                  <button style="padding:6px 12px;font-size:.72rem;border-radius:8px;border:1px solid rgba(0,216,255,.3);background:transparent;color:#00D8FF;cursor:pointer;">List</button>
                  <button style="padding:6px 12px;font-size:.72rem;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.5);cursor:pointer;">Send</button>
                </div>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ===== MY VIDEOS TAB ===== -->
    <div id="content-My Videos" style="display:none;">
      <div style="margin-bottom:20px;">
        <h2 style="font-weight:700;font-size:1.05rem;">My AI Videos <span style="color:rgba(255,255,255,.4);font-size:.85rem;font-weight:400;">(${myVids.length} items)</span></h2>
      </div>
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
        ${myVids.map(v=>`
          <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;overflow:hidden;">
            <div style="position:relative;padding-bottom:56.25%;">
              <img src="${v.thumb}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;">
              <div style="position:absolute;inset:0;background:rgba(0,0,0,.4);display:flex;align-items:center;justify-content:center;">
                <div style="width:50px;height:50px;border-radius:50%;background:rgba(0,216,255,.2);border:2px solid rgba(0,216,255,.6);display:flex;align-items:center;justify-content:center;">
                  <i class="fas fa-play" style="color:#00D8FF;margin-left:3px;"></i>
                </div>
              </div>
              <div style="position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,.8);border-radius:5px;padding:3px 8px;font-size:.7rem;">${v.duration}</div>
            </div>
            <div style="padding:14px;">
              <div style="font-weight:700;margin-bottom:4px;">${v.title}</div>
              <div style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:10px;">${v.model} · ${v.views.toLocaleString()} views</div>
              <div style="display:flex;gap:6px;">
                <button style="flex:1;padding:8px;border-radius:8px;border:1px solid rgba(168,107,255,.3);background:transparent;color:#A86BFF;font-size:.75rem;cursor:pointer;"><i class="fas fa-gem" style="margin-right:4px;"></i>Mint NFT</button>
                <button style="padding:8px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.5);font-size:.75rem;cursor:pointer;"><i class="fas fa-share-alt"></i></button>
              </div>
            </div>
          </div>
        `).join('')}
      </div>
    </div>

    <!-- ===== STAKING TAB ===== -->
    <div id="content-Staking" style="display:none;">
      <div class="grid lg:grid-cols-2 gap-6">
        <!-- Staking Overview -->
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
          <h3 style="font-weight:700;font-size:.95rem;margin-bottom:20px;"><i class="fas fa-lock" style="color:#00D8FF;margin-right:8px;"></i>Active Stakes</h3>
          <div style="display:flex;flex-direction:column;gap:12px;">
            ${[
              {amount:'10,000',lock:'12 months',apy:'24%',earned:'1,240',color:'#00D8FF',days:180},
              {amount:'5,000',lock:'6 months',apy:'15%',earned:'375',color:'#A86BFF',days:45},
            ].map(s=>`
              <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:12px;padding:16px;">
                <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:12px;">
                  <div>
                    <div style="font-weight:800;font-size:1.1rem;color:${s.color};">${s.amount} DAVINCI</div>
                    <div style="font-size:.72rem;color:rgba(255,255,255,.4);">${s.lock} lock · ${s.apy} APY</div>
                  </div>
                  <div style="text-align:right;">
                    <div style="font-size:.8rem;color:#2ECC71;font-weight:700;">+${s.earned} earned</div>
                    <div style="font-size:.7rem;color:rgba(255,255,255,.35);">${s.days} days left</div>
                  </div>
                </div>
                <div style="height:5px;background:rgba(255,255,255,.07);border-radius:3px;">
                  <div style="height:100%;width:${100 - (s.days/(s.lock==='12 months'?365:180)*100)}%;background:${s.color};border-radius:3px;"></div>
                </div>
              </div>
            `).join('')}
          </div>
          <div style="margin-top:16px;padding:16px;background:rgba(0,216,255,.06);border-radius:12px;border:1px solid rgba(0,216,255,.15);">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <div>
                <div style="font-size:.8rem;color:rgba(255,255,255,.5);">Total Staked</div>
                <div style="font-size:1.1rem;font-weight:800;color:#00D8FF;">15,000 DAVINCI</div>
              </div>
              <div style="text-align:right;">
                <div style="font-size:.8rem;color:rgba(255,255,255,.5);">Total Rewards</div>
                <div style="font-size:1.1rem;font-weight:800;color:#2ECC71;">+1,615 DAVINCI</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Stake New -->
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
          <h3 style="font-weight:700;font-size:.95rem;margin-bottom:20px;"><i class="fas fa-plus-circle" style="color:#A86BFF;margin-right:8px;"></i>Stake $DAVINCI</h3>
          <div style="display:flex;flex-direction:column;gap:14px;">
            <div>
              <label style="font-size:.8rem;color:rgba(255,255,255,.5);margin-bottom:8px;display:block;">Amount to Stake</label>
              <div style="position:relative;">
                <input type="number" placeholder="Enter amount" value="1000">
                <span style="position:absolute;right:14px;top:50%;transform:translateY(-50%);font-size:.8rem;color:#00D8FF;font-weight:700;">DAVINCI</span>
              </div>
              <div style="font-size:.72rem;color:rgba(255,255,255,.35);margin-top:6px;">Available: 9,500 DAVINCI</div>
            </div>
            <div>
              <label style="font-size:.8rem;color:rgba(255,255,255,.5);margin-bottom:8px;display:block;">Lock Period</label>
              <div class="grid grid-cols-3 gap-3">
                ${[
                  {period:'1 Month',apy:'8%'},
                  {period:'3 Months',apy:'12%'},
                  {period:'6 Months',apy:'15%'},
                  {period:'12 Months',apy:'24%'},
                  {period:'24 Months',apy:'36%'},
                  {period:'48 Months',apy:'48%'},
                ].map((l,i)=>`
                  <button onclick="selectLock(this,'${l.apy}')" style="padding:12px 8px;border-radius:10px;border:1px solid ${i===3?'#00D8FF':'rgba(255,255,255,.1)'};background:${i===3?'rgba(0,216,255,.12)':'transparent'};cursor:pointer;text-align:center;">
                    <div style="font-size:.75rem;font-weight:700;color:${i===3?'#00D8FF':'rgba(255,255,255,.6)'};">${l.period}</div>
                    <div style="font-size:.65rem;color:${i===3?'#2ECC71':'rgba(255,255,255,.3)'};">${l.apy} APY</div>
                  </button>
                `).join('')}
              </div>
            </div>
            <div style="background:rgba(255,255,255,.03);border-radius:10px;padding:14px;font-size:.82rem;">
              <div style="display:flex;justify-content:space-between;margin-bottom:6px;">
                <span style="color:rgba(255,255,255,.4);">Estimated Annual Reward</span>
                <span style="color:#2ECC71;font-weight:700;" id="est-reward">240 DAVINCI</span>
              </div>
              <div style="display:flex;justify-content:space-between;">
                <span style="color:rgba(255,255,255,.4);">APY</span>
                <span style="color:#00D8FF;font-weight:700;" id="est-apy">24%</span>
              </div>
            </div>
            <button class="btn-primary" style="width:100%;justify-content:center;padding:14px;"><i class="fas fa-lock"></i> Stake Now</button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== ACTIVITY TAB ===== -->
    <div id="content-Activity" style="display:none;">
      <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
        <h3 style="font-weight:700;font-size:.95rem;margin-bottom:20px;">Transaction History</h3>
        <div style="display:flex;flex-direction:column;gap:8px;">
          ${[
            {type:'earn',icon:'fas fa-wand-magic-sparkles',desc:'Generated "Cyber Portrait v3"',hash:'0xab12...3456',amount:'+50 DAVINCI',time:'2025-03-01 14:22',color:'#00D8FF'},
            {type:'earn',icon:'fas fa-trophy',desc:'Won Weekly Art Challenge #33',hash:'0xbc23...4567',amount:'+500 DAVINCI',time:'2025-02-28 09:15',color:'#F0B90B'},
            {type:'mint',icon:'fas fa-gem',desc:'Minted NFT: Cosmic Nebula #0042',hash:'0xcd34...5678',amount:'-0.002 BNB',time:'2025-02-27 16:40',color:'#A86BFF'},
            {type:'sale',icon:'fas fa-tag',desc:'Sold: Galaxy Core #0018 → 0x9f8e...7d6c',hash:'0xde45...6789',amount:'+0.15 BNB',time:'2025-02-26 11:05',color:'#2ECC71'},
            {type:'stake',icon:'fas fa-lock',desc:'Staked 10,000 DAVINCI (12 months)',hash:'0xef56...7890',amount:'-10,000 DAVINCI',time:'2025-02-20 13:30',color:'#00D8FF'},
            {type:'earn',icon:'fas fa-vote-yea',desc:'DAO Vote: Add KlingAI v3',hash:'0xf067...8901',amount:'+25 DAVINCI',time:'2025-02-18 10:00',color:'#2ECC71'},
          ].map(tx=>`
            <div style="display:flex;align-items:center;gap:12px;padding:14px;background:rgba(255,255,255,.02);border-radius:10px;border:1px solid rgba(255,255,255,.05);">
              <div style="width:38px;height:38px;border-radius:50%;background:${tx.color}18;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                <i class="${tx.icon}" style="color:${tx.color};font-size:.85rem;"></i>
              </div>
              <div style="flex:1;min-width:0;">
                <div style="font-size:.85rem;font-weight:600;">${tx.desc}</div>
                <div style="font-size:.7rem;color:rgba(255,255,255,.3);font-family:monospace;">${tx.hash} · ${tx.time}</div>
              </div>
              <div style="font-size:.88rem;font-weight:700;color:${tx.type==='mint'||tx.type==='stake'?'rgba(255,100,100,.8)':tx.color};white-space:nowrap;">${tx.amount}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- ===== REWARDS TAB ===== -->
    <div id="content-Rewards" style="display:none;">
      <div class="grid lg:grid-cols-3 gap-6">
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
          <h3 style="font-weight:700;font-size:.95rem;margin-bottom:20px;"><i class="fas fa-gift" style="color:#00D8FF;margin-right:8px;"></i>Claimable Rewards</h3>
          <div style="text-align:center;padding:24px 0;">
            <div style="font-size:2.5rem;font-weight:900;color:#00D8FF;">1,240</div>
            <div style="font-size:.85rem;color:rgba(255,255,255,.4);">DAVINCI available</div>
            <div style="font-size:.8rem;color:rgba(255,255,255,.3);margin-top:4px;">≈ $0.31 USD</div>
          </div>
          <button class="btn-primary" style="width:100%;justify-content:center;padding:14px;"><i class="fas fa-hand-holding-dollar"></i> Claim All Rewards</button>
        </div>
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
          <h3 style="font-weight:700;font-size:.95rem;margin-bottom:20px;"><i class="fas fa-users" style="color:#A86BFF;margin-right:8px;"></i>Referral Program</h3>
          <div style="background:rgba(168,107,255,.08);border-radius:10px;padding:14px;margin-bottom:14px;">
            <div style="font-size:.72rem;color:rgba(255,255,255,.4);margin-bottom:4px;">Your Referral Link</div>
            <div style="font-size:.78rem;color:#A86BFF;font-family:monospace;">davinci.ai/ref/0xA1b2</div>
          </div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${[
              {label:'Total Referrals',val:'14 users'},
              {label:'Referral Earnings',val:'2,100 DAVINCI'},
              {label:'Pending Rewards',val:'350 DAVINCI'},
            ].map(r=>`
              <div style="display:flex;justify-content:space-between;font-size:.85rem;">
                <span style="color:rgba(255,255,255,.5);">${r.label}</span>
                <span style="font-weight:700;color:#A86BFF;">${r.val}</span>
              </div>
            `).join('')}
          </div>
        </div>
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;padding:24px;">
          <h3 style="font-weight:700;font-size:.95rem;margin-bottom:20px;"><i class="fas fa-chart-bar" style="color:#00D8FF;margin-right:8px;"></i>Reward Breakdown</h3>
          <div style="display:flex;flex-direction:column;gap:10px;">
            ${[
              {label:'Creation Rewards',val:'8,400',pct:34,color:'#00D8FF'},
              {label:'Staking Yields',val:'1,240',pct:5,color:'#A86BFF'},
              {label:'Challenge Wins',val:'9,000',pct:37,color:'#F0B90B'},
              {label:'Referral Bonuses',val:'2,100',pct:9,color:'#2ECC71'},
              {label:'DAO Governance',val:'375',pct:2,color:'#3DCFFF'},
              {label:'NFT Royalties',val:'3,385',pct:14,color:'#D4A0FF'},
            ].map(r=>`
              <div>
                <div style="display:flex;justify-content:space-between;font-size:.8rem;margin-bottom:4px;">
                  <span style="color:rgba(255,255,255,.6);">${r.label}</span>
                  <span style="color:${r.color};font-weight:600;">${r.val} DAVINCI</span>
                </div>
                <div style="height:4px;background:rgba(255,255,255,.07);border-radius:2px;">
                  <div style="height:100%;width:${r.pct}%;background:${r.color};border-radius:2px;"></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>

  </div>
</div>

<script>
function switchTab(name) {
  document.querySelectorAll('[id^="content-"]').forEach(el => el.style.display = 'none');
  document.getElementById('content-' + name).style.display = 'block';
  document.querySelectorAll('[id^="tab-"]').forEach(btn => {
    btn.style.background = 'transparent';
    btn.style.color = 'rgba(255,255,255,.4)';
  });
  document.getElementById('tab-' + name).style.background = 'rgba(0,216,255,.12)';
  document.getElementById('tab-' + name).style.color = '#00D8FF';
}
function selectLock(btn, apy) {
  document.querySelectorAll('#content-Staking button').forEach(b => {
    b.style.borderColor = 'rgba(255,255,255,.1)';
    b.style.background = 'transparent';
    b.querySelector('.text-apy')?.style && (b.querySelectorAll('div')[0].style.color = 'rgba(255,255,255,.6)');
  });
  btn.style.borderColor = '#00D8FF';
  btn.style.background = 'rgba(0,216,255,.12)';
  document.getElementById('est-apy').textContent = apy;
  const amount = parseFloat(document.querySelector('#content-Staking input').value) || 1000;
  document.getElementById('est-reward').textContent = Math.round(amount * parseFloat(apy) / 100) + ' DAVINCI';
}
</script>
`

export const myPage = layout('My Page | DaVinci AI', myContent)
