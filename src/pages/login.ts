import { layout } from './layout'

const loginContent = `
<section style="min-height:calc(100vh - 72px);background:linear-gradient(135deg,#080C14,#0D1829,#080C14);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;padding:60px 24px;">
  <div class="grid-overlay" style="opacity:.5;"></div>
  <div class="orb" style="width:500px;height:500px;background:rgba(0,216,255,.06);top:-150px;left:-150px;"></div>
  <div class="orb" style="width:400px;height:400px;background:rgba(168,107,255,.06);bottom:-100px;right:-100px;"></div>

  <div style="position:relative;z-index:2;width:100%;max-width:460px;">
    <!-- Logo -->
    <div style="text-align:center;margin-bottom:40px;">
      <a href="/" style="display:inline-flex;align-items:center;gap:10px;text-decoration:none;">
        <div style="width:52px;height:52px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:14px;display:flex;align-items:center;justify-content:center;">
          <span style="font-family:'Poppins';font-weight:900;font-size:1.4rem;color:#080C14;">D</span>
        </div>
        <span style="font-family:'Poppins';font-weight:700;font-size:1.4rem;">Da<span class="gradient-text">Vinci</span> AI</span>
      </a>
      <p style="color:rgba(255,255,255,.4);font-size:.9rem;margin-top:12px;">Connect your wallet to start creating</p>
    </div>

    <!-- Card -->
    <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:36px;backdrop-filter:blur(20px);">
      <h2 style="font-family:'Poppins';font-weight:700;font-size:1.4rem;text-align:center;margin-bottom:8px;">Welcome Back</h2>
      <p style="color:rgba(255,255,255,.4);font-size:.85rem;text-align:center;margin-bottom:32px;">Sign in to access AI Studio, NFT Gallery, and your rewards</p>

      <!-- MetaMask Button -->
      <button onclick="connectMetaMask()" style="width:100%;background:rgba(245,130,30,.08);border:1px solid rgba(245,130,30,.4);border-radius:14px;padding:16px 20px;color:#FDFDFD;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px;transition:all .3s;font-family:inherit;" onmouseover="this.style.background='rgba(245,130,30,.15)';this.style.borderColor='rgba(245,130,30,.7)'" onmouseout="this.style.background='rgba(245,130,30,.08)';this.style.borderColor='rgba(245,130,30,.4)'">
        <svg width="26" height="24" viewBox="0 0 318.6 318.6" fill="none">
          <path d="M274.1 35.5l-99.5 73.9L193 98.7z" fill="#E2761B" stroke="#E2761B" stroke-width="0.5"/>
          <path d="M44.4 35.5l98.7 74.6-17.5-11.4zM238.3 206.8l-26.5 40.6 56.7 15.6 16.3-55.3zM33.9 207.7L50.1 263l56.7-15.6-26.5-40.6z" fill="#E4761B" stroke="#E4761B" stroke-width="0.5"/>
          <path d="M103.6 138.2l-15.8 23.9 56.3 2.5-2-60.5zM214.9 138.2l-39.2-34.8-2.7 61.2 56.2-2.5zM106.8 247.4l33.8-16.5-29.2-22.8zM177.9 230.9l33.9 16.5-4.7-39.3z" fill="#E4761B" stroke="#E4761B" stroke-width="0.5"/>
        </svg>
        Connect with MetaMask
      </button>

      <!-- WalletConnect Button -->
      <button onclick="connectWalletConnect()" style="width:100%;background:rgba(59,153,252,.08);border:1px solid rgba(59,153,252,.4);border-radius:14px;padding:16px 20px;color:#FDFDFD;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:14px;transition:all .3s;font-family:inherit;" onmouseover="this.style.background='rgba(59,153,252,.15)'" onmouseout="this.style.background='rgba(59,153,252,.08)'">
        <svg width="26" height="16" viewBox="0 0 300 185" fill="none">
          <path d="M61.4 36.3c48.9-47.9 128.3-47.9 177.2 0l5.9 5.8a6.1 6.1 0 0 1 0 8.7l-20.1 19.7a3.2 3.2 0 0 1-4.4 0l-8.1-7.9c-34.1-33.4-89.4-33.4-123.5 0l-8.7 8.5a3.2 3.2 0 0 1-4.4 0L54.2 51.4a6.1 6.1 0 0 1 0-8.7zm218.9 40.8l17.9 17.5a6.1 6.1 0 0 1 0 8.7l-80.7 79a6.3 6.3 0 0 1-8.9 0l-57.3-56.1a1.6 1.6 0 0 0-2.2 0l-57.2 56.1a6.3 6.3 0 0 1-8.9 0l-80.7-79a6.1 6.1 0 0 1 0-8.7l17.9-17.5a6.3 6.3 0 0 1 8.9 0l57.3 56.1c.6.6 1.6.6 2.2 0L184.4 77c2.4-2.4 6.4-2.4 8.9 0l57.2 56.1c.6.6 1.6.6 2.2 0l57.3-56.1a6.3 6.3 0 0 1 8.9 0z" fill="#3B99FC"/>
        </svg>
        Connect with WalletConnect
      </button>

      <!-- Divider -->
      <div style="display:flex;align-items:center;gap:12px;margin:20px 0;">
        <div style="flex:1;height:1px;background:rgba(255,255,255,.08);"></div>
        <span style="color:rgba(255,255,255,.3);font-size:.8rem;">or continue with</span>
        <div style="flex:1;height:1px;background:rgba(255,255,255,.08);"></div>
      </div>

      <!-- Google Button -->
      <button onclick="connectGoogle()" style="width:100%;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.12);border-radius:14px;padding:16px 20px;color:#FDFDFD;font-size:.95rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:12px;margin-bottom:20px;transition:all .3s;font-family:inherit;" onmouseover="this.style.background='rgba(255,255,255,.08)'" onmouseout="this.style.background='rgba(255,255,255,.04)'">
        <svg width="22" height="22" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        Continue with Google
      </button>

      <!-- Status message -->
      <div id="loginStatus" style="display:none;text-align:center;padding:14px;border-radius:12px;font-size:.875rem;margin-bottom:16px;"></div>

      <p style="text-align:center;font-size:.78rem;color:rgba(255,255,255,.25);line-height:1.6;">
        By connecting, you agree to our <a href="#" style="color:rgba(0,216,255,.7);text-decoration:none;">Terms of Service</a> and <a href="#" style="color:rgba(0,216,255,.7);text-decoration:none;">Privacy Policy</a>
      </p>
    </div>

    <!-- Features below -->
    <div class="grid grid-cols-3 gap-3 mt-6">
      ${[
        {icon:'fas fa-image',label:'Create AI Art'},
        {icon:'fas fa-gem',label:'Mint NFTs'},
        {icon:'fas fa-coins',label:'Earn $DAVINCI'}
      ].map(f => `
        <div style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:12px;padding:14px 10px;text-align:center;">
          <i class="${f.icon}" style="color:#00D8FF;font-size:1.1rem;margin-bottom:6px;display:block;"></i>
          <div style="font-size:.72rem;color:rgba(255,255,255,.4);">${f.label}</div>
        </div>`).join('')}
    </div>
  </div>
</section>

<script>
function showStatus(msg, isError=false) {
  const el = document.getElementById('loginStatus');
  el.style.display = 'block';
  el.style.background = isError ? 'rgba(255,100,100,.1)' : 'rgba(0,216,255,.1)';
  el.style.border = '1px solid ' + (isError ? 'rgba(255,100,100,.3)' : 'rgba(0,216,255,.3)');
  el.style.color = isError ? '#FF6B6B' : '#00D8FF';
  el.innerHTML = msg;
}

async function connectMetaMask() {
  if (typeof window.ethereum === 'undefined') {
    showStatus('<i class="fas fa-exclamation-triangle" style="margin-right:8px;"></i>MetaMask not detected. <a href="https://metamask.io/download/" target="_blank" style="color:#FF8C00;text-decoration:underline;">Install MetaMask</a>', true);
    return;
  }
  try {
    showStatus('<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i>Connecting to MetaMask...');
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const addr = accounts[0];
    const short = addr.slice(0,6) + '...' + addr.slice(-4);
    
    // Switch to BNB Chain
    try {
      await window.ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x38' }]
      });
    } catch(e) {
      if (e.code === 4902) {
        await window.ethereum.request({
          method: 'wallet_addEthereumChain',
          params: [{
            chainId: '0x38',
            chainName: 'BNB Smart Chain',
            nativeCurrency: { name: 'BNB', symbol: 'BNB', decimals: 18 },
            rpcUrls: ['https://bsc-dataseed.binance.org/'],
            blockExplorerUrls: ['https://bscscan.com/']
          }]
        });
      }
    }
    
    localStorage.setItem('dv_wallet', addr);
    localStorage.setItem('dv_auth', 'metamask');
    showStatus('<i class="fas fa-check-circle" style="margin-right:8px;"></i>Connected: ' + short + ' <span style="color:rgba(255,255,255,.5);font-size:.8rem;">(BNB Chain)</span>');
    setTimeout(() => window.location.href = '/mypage', 1500);
  } catch(e) {
    showStatus('<i class="fas fa-times-circle" style="margin-right:8px;"></i>' + (e.message || 'Connection rejected'), true);
  }
}

function connectWalletConnect() {
  showStatus('<i class="fas fa-info-circle" style="margin-right:8px;"></i>WalletConnect integration coming in v1.1');
}

function connectGoogle() {
  showStatus('<i class="fas fa-spinner fa-spin" style="margin-right:8px;"></i>Connecting with Google...');
  // Simulated Google OAuth
  const mockUser = { name: 'Da Vinci User', email: 'user@davinci.ai', photo: '' };
  localStorage.setItem('dv_user', JSON.stringify(mockUser));
  localStorage.setItem('dv_auth', 'google');
  setTimeout(() => {
    showStatus('<i class="fas fa-check-circle" style="margin-right:8px;"></i>Welcome, ' + mockUser.name + '! Redirecting...');
    setTimeout(() => window.location.href = '/mypage', 1000);
  }, 1200);
}

// Check if already logged in
if (localStorage.getItem('dv_wallet') || localStorage.getItem('dv_auth')) {
  document.querySelector('[onclick="connectMetaMask()"]').style.borderColor = 'rgba(0,216,255,.5)';
}
</script>
`

export const loginPage = layout('Login — Connect Wallet', loginContent)
