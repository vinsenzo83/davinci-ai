import { layout } from './layout'

const mypageContent = `
<section style="min-height:calc(100vh - 72px);background:#080C14;padding:48px 0;">
  <div class="max-w-7xl mx-auto px-6">

    <!-- Profile Header -->
    <div style="background:linear-gradient(135deg,rgba(0,216,255,.05),rgba(168,107,255,.05));border:1px solid rgba(255,255,255,.07);border-radius:24px;padding:32px;margin-bottom:28px;position:relative;overflow:hidden;" id="profileHeader">
      <div class="orb" style="width:300px;height:300px;background:rgba(0,216,255,.04);top:-100px;right:-50px;"></div>
      <div style="display:flex;flex-wrap:wrap;gap:20px;align-items:center;position:relative;z-index:2;">
        <!-- Avatar -->
        <div style="width:80px;height:80px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:50%;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
          <span style="font-family:'Poppins';font-weight:900;font-size:2rem;color:#080C14;" id="avatarLetter">?</span>
        </div>
        <!-- Info -->
        <div style="flex:1;min-width:200px;">
          <div style="display:flex;align-items:center;gap:10px;flex-wrap:wrap;">
            <h1 style="font-family:'Poppins';font-weight:700;font-size:1.4rem;" id="profileName">Connect Wallet</h1>
            <div style="background:rgba(0,216,255,.12);border:1px solid rgba(0,216,255,.25);border-radius:20px;padding:3px 12px;">
              <span style="font-size:.72rem;color:#00D8FF;font-weight:600;" id="rankBadge">Apprentice</span>
            </div>
          </div>
          <p style="color:rgba(255,255,255,.35);font-size:.82rem;margin-top:4px;" id="walletAddr">---</p>
          <p style="color:rgba(255,255,255,.25);font-size:.75rem;margin-top:2px;" id="authMethod">Not connected</p>
        </div>
        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4">
          ${[
            {label:'Credits',val:'250',color:'#00D8FF',id:'statCredits'},
            {label:'NFTs',val:'0',color:'#A86BFF',id:'statNFTs'},
            {label:'$DAVINCI',val:'0',color:'#FFB800',id:'statTokens'}
          ].map(s => `
            <div style="text-align:center;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:14px 20px;">
              <div style="font-size:1.4rem;font-weight:700;color:${s.color};" id="${s.id}">${s.val}</div>
              <div style="font-size:.72rem;color:rgba(255,255,255,.4);margin-top:3px;">${s.label}</div>
            </div>`).join('')}
        </div>
        <!-- Connect Button (shown if not connected) -->
        <a href="/login" id="connectBtn" class="btn-primary" style="padding:12px 24px;font-size:.875rem;">
          <i class="fas fa-wallet"></i> Connect Wallet
        </a>
      </div>
    </div>

    <!-- Tabs -->
    <div style="display:flex;gap:4px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:14px;padding:5px;margin-bottom:24px;overflow-x:auto;">
      ${[
        {id:'tab-gallery',label:'NFT Gallery',icon:'fas fa-image'},
        {id:'tab-history',label:'Creation History',icon:'fas fa-history'},
        {id:'tab-staking',label:'Staking',icon:'fas fa-coins'},
        {id:'tab-rewards',label:'Rewards',icon:'fas fa-star'},
        {id:'tab-settings',label:'Settings',icon:'fas fa-cog'}
      ].map((t,i) => `
        <button id="${t.id}" onclick="switchTab('${t.id.split('-')[1]}')" style="flex:1;min-width:110px;padding:10px;border-radius:10px;border:none;background:${i===0?'linear-gradient(135deg,#00D8FF,#A86BFF)':'transparent'};color:${i===0?'#080C14':'rgba(255,255,255,.5)'};font-weight:${i===0?'700':'500'};font-size:.82rem;cursor:pointer;font-family:inherit;transition:all .3s;white-space:nowrap;">
          <i class="${t.icon}" style="margin-right:5px;"></i>${t.label}
        </button>`).join('')}
    </div>

    <!-- ===== TAB: Gallery ===== -->
    <div id="panel-gallery">
      <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;">
        <h2 style="font-weight:700;font-size:1.1rem;">My NFT Gallery <span style="color:rgba(255,255,255,.3);font-size:.85rem;font-weight:400;">(0 items)</span></h2>
        <div class="flex gap-2">
          <a href="/create/image" class="btn-primary" style="padding:9px 18px;font-size:.82rem;"><i class="fas fa-plus"></i> Create</a>
        </div>
      </div>
      <!-- Empty State -->
      <div style="background:rgba(255,255,255,.02);border:1px dashed rgba(255,255,255,.08);border-radius:20px;padding:80px 40px;text-align:center;">
        <div style="width:80px;height:80px;background:rgba(0,216,255,.06);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
          <i class="fas fa-image" style="color:rgba(0,216,255,.4);font-size:2rem;"></i>
        </div>
        <h3 style="font-weight:600;font-size:1.05rem;margin-bottom:8px;">No NFTs Yet</h3>
        <p style="color:rgba(255,255,255,.35);font-size:.875rem;max-width:360px;margin:0 auto 24px;line-height:1.7;">Create AI art and mint it as an NFT on BNB Chain. Your collection will appear here.</p>
        <a href="/create/image" class="btn-primary"><i class="fas fa-wand-magic-sparkles"></i> Start Creating</a>
      </div>

      <!-- Sample NFT cards (appear after minting) -->
      <div class="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6" id="nftGrid" style="display:none;">
        ${Array.from({length:4}).map((_,i) => `
          <div style="border-radius:16px;overflow:hidden;background:linear-gradient(135deg,${['#1a0533,#2d1b69','#021a22,#065566','#0a2a1a,#1a4a2a','#2a1a00,#4a3000'][i]});border:1px solid rgba(0,216,255,.12);cursor:pointer;transition:all .3s;" onmouseover="this.style.borderColor='rgba(0,216,255,.4)'" onmouseout="this.style.borderColor='rgba(0,216,255,.12)'">
            <div style="aspect-ratio:1;display:flex;align-items:flex-end;padding:12px;">
              <div>
                <div style="font-size:.75rem;font-weight:600;">DaVinci #${i+1}</div>
                <div style="font-size:.65rem;color:rgba(0,216,255,.6);margin-top:2px;">0.005 BNB</div>
              </div>
            </div>
            <div style="padding:10px 12px;border-top:1px solid rgba(255,255,255,.06);">
              <div style="font-size:.7rem;color:rgba(255,255,255,.4);">Owned · BNB Chain</div>
            </div>
          </div>`).join('')}
      </div>
    </div>

    <!-- ===== TAB: History ===== -->
    <div id="panel-history" style="display:none;">
      <h2 style="font-weight:700;font-size:1.1rem;margin-bottom:16px;">Creation History</h2>
      <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:16px;overflow:hidden;">
        <table style="width:100%;border-collapse:collapse;">
          <thead>
            <tr style="border-bottom:1px solid rgba(255,255,255,.06);">
              <th style="padding:14px 20px;text-align:left;font-size:.8rem;color:rgba(255,255,255,.4);font-weight:600;">TYPE</th>
              <th style="padding:14px 20px;text-align:left;font-size:.8rem;color:rgba(255,255,255,.4);font-weight:600;">PROMPT</th>
              <th style="padding:14px 20px;text-align:left;font-size:.8rem;color:rgba(255,255,255,.4);font-weight:600;">MODEL</th>
              <th style="padding:14px 20px;text-align:right;font-size:.8rem;color:rgba(255,255,255,.4);font-weight:600;">CREDITS</th>
              <th style="padding:14px 20px;text-align:right;font-size:.8rem;color:rgba(255,255,255,.4);font-weight:600;">DATE</th>
            </tr>
          </thead>
          <tbody id="historyTable">
            <tr>
              <td colspan="5" style="padding:60px;text-align:center;color:rgba(255,255,255,.25);font-size:.875rem;">
                <i class="fas fa-history" style="font-size:1.5rem;display:block;margin-bottom:10px;color:rgba(255,255,255,.15);"></i>
                No creation history yet
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- ===== TAB: Staking ===== -->
    <div id="panel-staking" style="display:none;">
      <h2 style="font-weight:700;font-size:1.1rem;margin-bottom:16px;">$DAVINCI Staking</h2>
      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        ${[
          {tier:'Apprentice',req:'10,000',apy:'8%',perks:'+10% credits, Early Access',color:'#00D8FF'},
          {tier:'Artist',req:'50,000',apy:'12%',perks:'+25% credits, Governance Vote',color:'#A86BFF'},
          {tier:'Master',req:'200,000',apy:'18%',perks:'+50% credits, DAO Committee',color:'#00FFB2'},
          {tier:'Da Vinci',req:'1,000,000',apy:'25%',perks:'Full Governance, Revenue Share',color:'#FFB800'}
        ].map(t => `
          <div style="background:rgba(255,255,255,.02);border:1px solid ${t.color}20;border-radius:16px;padding:20px;transition:all .3s;" onmouseover="this.style.borderColor='${t.color}60'" onmouseout="this.style.borderColor='${t.color}20'">
            <div style="font-weight:700;color:${t.color};font-size:.95rem;margin-bottom:6px;">${t.tier}</div>
            <div style="font-size:1.5rem;font-weight:700;margin-bottom:4px;">${t.apy} <span style="font-size:.75rem;color:rgba(255,255,255,.4);font-weight:400;">APY</span></div>
            <div style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:10px;">Stake: ${t.req} DAVINCI</div>
            <div style="font-size:.72rem;color:rgba(255,255,255,.5);line-height:1.5;">${t.perks}</div>
          </div>`).join('')}
      </div>
      <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:16px;padding:28px;text-align:center;">
        <p style="color:rgba(255,255,255,.35);font-size:.875rem;margin-bottom:20px;">Staking goes live at TGE (Q4 2025). Connect wallet to get notified.</p>
        <a href="/login" class="btn-primary"><i class="fas fa-bell"></i> Get Notified</a>
      </div>
    </div>

    <!-- ===== TAB: Rewards ===== -->
    <div id="panel-rewards" style="display:none;">
      <h2 style="font-weight:700;font-size:1.1rem;margin-bottom:16px;">Rewards & Airdrops</h2>
      <div class="grid md:grid-cols-2 gap-4 mb-6">
        <div style="background:linear-gradient(135deg,rgba(0,216,255,.06),rgba(0,216,255,.02));border:1px solid rgba(0,216,255,.15);border-radius:16px;padding:24px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
            <i class="fas fa-trophy" style="color:#00D8FF;font-size:1.2rem;"></i>
            <h3 style="font-weight:700;">Season 1 Airdrop</h3>
            <span style="margin-left:auto;background:rgba(0,255,100,.1);border:1px solid rgba(0,255,100,.2);border-radius:20px;padding:3px 10px;font-size:.7rem;color:#00FF64;">LIVE</span>
          </div>
          <p style="color:rgba(255,255,255,.5);font-size:.85rem;line-height:1.7;margin-bottom:16px;">Earn points by playing games, creating art, and inviting friends. Top 50% get $DAVINCI airdrop at TGE.</p>
          <div style="display:flex;justify-content:space-between;align-items:center;">
            <div>
              <div style="font-size:.75rem;color:rgba(255,255,255,.35);">Your points</div>
              <div style="font-size:1.3rem;font-weight:700;color:#00D8FF;">0</div>
            </div>
            <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-outline" style="padding:9px 18px;font-size:.8rem;"><i class="fab fa-telegram"></i> Join</a>
          </div>
        </div>
        <div style="background:linear-gradient(135deg,rgba(168,107,255,.06),rgba(168,107,255,.02));border:1px solid rgba(168,107,255,.15);border-radius:16px;padding:24px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:14px;">
            <i class="fas fa-users" style="color:#A86BFF;font-size:1.2rem;"></i>
            <h3 style="font-weight:700;">Referral Program</h3>
          </div>
          <p style="color:rgba(255,255,255,.5);font-size:.85rem;line-height:1.7;margin-bottom:16px;">Invite friends and earn 100 credits per referral + 10% of their first month's creation activity.</p>
          <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:10px;padding:10px 14px;display:flex;align-items:center;justify-content:space-between;">
            <span style="font-size:.8rem;color:rgba(255,255,255,.35);" id="referralCode">Connect wallet to get code</span>
            <button onclick="copyReferral()" style="background:none;border:none;color:#A86BFF;cursor:pointer;font-size:.8rem;"><i class="fas fa-copy"></i></button>
          </div>
        </div>
      </div>
    </div>

    <!-- ===== TAB: Settings ===== -->
    <div id="panel-settings" style="display:none;">
      <h2 style="font-weight:700;font-size:1.1rem;margin-bottom:16px;">Account Settings</h2>
      <div class="grid md:grid-cols-2 gap-4">
        <div class="card-glass p-6">
          <h3 style="font-weight:600;margin-bottom:16px;color:rgba(255,255,255,.7);">Profile</h3>
          <div class="flex flex-col gap-4">
            <div><label style="font-size:.78rem;color:rgba(255,255,255,.4);display:block;margin-bottom:6px;">Display Name</label>
              <input type="text" placeholder="Da Vinci Artist" id="displayName"></div>
            <div><label style="font-size:.78rem;color:rgba(255,255,255,.4);display:block;margin-bottom:6px;">Bio</label>
              <textarea rows="3" placeholder="AI artist and Web3 explorer..." style="resize:none;"></textarea></div>
            <button class="btn-primary" style="width:100%;justify-content:center;"><i class="fas fa-save"></i> Save Changes</button>
          </div>
        </div>
        <div class="card-glass p-6">
          <h3 style="font-weight:600;margin-bottom:16px;color:rgba(255,255,255,.7);">Notifications</h3>
          ${[
            {label:'Airdrop Alerts',sub:'New season & reward notifications'},
            {label:'NFT Sales',sub:'When your NFTs are sold'},
            {label:'Price Alerts',sub:'$DAVINCI price movements'},
            {label:'Weekly Report',sub:'Your creation summary'}
          ].map(n => `
            <div style="display:flex;justify-content:space-between;align-items:center;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.05);">
              <div>
                <div style="font-size:.88rem;font-weight:500;">${n.label}</div>
                <div style="font-size:.75rem;color:rgba(255,255,255,.35);margin-top:2px;">${n.sub}</div>
              </div>
              <label style="position:relative;display:inline-block;width:44px;height:24px;cursor:pointer;">
                <input type="checkbox" checked style="opacity:0;width:0;height:0;">
                <span style="position:absolute;inset:0;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:12px;transition:.3s;"></span>
                <span style="position:absolute;width:18px;height:18px;background:white;border-radius:50%;top:3px;left:3px;transition:.3s;"></span>
              </label>
            </div>`).join('')}
          <div style="margin-top:16px;"><button style="background:rgba(255,100,100,.08);border:1px solid rgba(255,100,100,.2);border-radius:12px;padding:10px 18px;color:#FF6B6B;font-size:.82rem;cursor:pointer;font-family:inherit;transition:all .3s;display:flex;align-items:center;gap:8px;" onmouseover="this.style.background='rgba(255,100,100,.15)'" onmouseout="this.style.background='rgba(255,100,100,.08)'">
            <i class="fas fa-sign-out-alt"></i> Disconnect Wallet
          </button></div>
        </div>
      </div>
    </div>

  </div>
</section>

<script>
// Load user data
function loadProfile() {
  const wallet = localStorage.getItem('dv_wallet');
  const auth = localStorage.getItem('dv_auth');
  const user = JSON.parse(localStorage.getItem('dv_user')||'{}');

  if (wallet) {
    const short = wallet.slice(0,6)+'...'+wallet.slice(-4);
    document.getElementById('profileName').textContent = short;
    document.getElementById('avatarLetter').textContent = wallet.slice(2,3).toUpperCase();
    document.getElementById('walletAddr').textContent = wallet;
    document.getElementById('authMethod').textContent = 'MetaMask · BNB Chain';
    document.getElementById('connectBtn').style.display = 'none';
  } else if (auth === 'google' && user.name) {
    document.getElementById('profileName').textContent = user.name;
    document.getElementById('avatarLetter').textContent = user.name[0].toUpperCase();
    document.getElementById('walletAddr').textContent = user.email || '';
    document.getElementById('authMethod').textContent = 'Google Account';
    document.getElementById('connectBtn').style.display = 'none';
  }

  // Load history from localStorage
  const history = JSON.parse(localStorage.getItem('dv_history')||'[]');
  if (history.length > 0) {
    const tbody = document.getElementById('historyTable');
    tbody.innerHTML = history.map(h => \`
      <tr style="border-bottom:1px solid rgba(255,255,255,.04);">
        <td style="padding:12px 20px;"><span style="background:rgba(0,216,255,.1);border-radius:6px;padding:3px 10px;font-size:.72rem;color:#00D8FF;">\${h.type}</span></td>
        <td style="padding:12px 20px;font-size:.82rem;color:rgba(255,255,255,.6);">\${h.prompt.slice(0,40)}...</td>
        <td style="padding:12px 20px;font-size:.78rem;color:rgba(255,255,255,.4);">\${h.model}</td>
        <td style="padding:12px 20px;font-size:.82rem;color:#FF6B6B;text-align:right;">-\${h.credits}</td>
        <td style="padding:12px 20px;font-size:.75rem;color:rgba(255,255,255,.3);text-align:right;">\${h.date}</td>
      </tr>
    \`).join('');
  }
}

function switchTab(tab) {
  const tabs = ['gallery','history','staking','rewards','settings'];
  tabs.forEach(t => {
    const btn = document.getElementById('tab-'+t);
    const panel = document.getElementById('panel-'+t);
    const active = t === tab;
    if(btn) { btn.style.background = active ? 'linear-gradient(135deg,#00D8FF,#A86BFF)' : 'transparent'; btn.style.color = active ? '#080C14' : 'rgba(255,255,255,.5)'; btn.style.fontWeight = active ? '700' : '500'; }
    if(panel) panel.style.display = active ? 'block' : 'none';
  });
}

function copyReferral() {
  const code = 'DAVINCI-' + Math.random().toString(36).substr(2,8).toUpperCase();
  navigator.clipboard?.writeText('https://davinci.ai?ref='+code).then(() => alert('Referral link copied!'));
}

loadProfile();
</script>
`

export const myPage = layout('My Page', mypageContent)
