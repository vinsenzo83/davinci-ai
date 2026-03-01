export const layout = (title: string, content: string, extraHead = '') => `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title} | DaVinci AI</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet">
  ${extraHead}
  <style>
    :root { --cyan:#00D8FF; --violet:#A86BFF; --bg:#080C14; }
    * { margin:0; padding:0; box-sizing:border-box; }
    html { scroll-behavior:smooth; }
    body { font-family:'Space Grotesk',sans-serif; background:#080C14; color:#FDFDFD; overflow-x:hidden; }

    .gradient-text { background:linear-gradient(135deg,#00D8FF,#A86BFF); -webkit-background-clip:text; -webkit-text-fill-color:transparent; background-clip:text; }
    .btn-primary { background:linear-gradient(135deg,#00D8FF,#A86BFF); color:#080C14; font-weight:700; padding:12px 28px; border-radius:50px; font-size:0.9rem; cursor:pointer; border:none; transition:all .3s; display:inline-flex; align-items:center; gap:8px; text-decoration:none; }
    .btn-primary:hover { transform:translateY(-2px); box-shadow:0 0 30px rgba(0,216,255,.4); }
    .btn-outline { border:1px solid rgba(0,216,255,.5); color:#00D8FF; font-weight:600; padding:11px 28px; border-radius:50px; font-size:0.9rem; cursor:pointer; background:transparent; transition:all .3s; display:inline-flex; align-items:center; gap:8px; text-decoration:none; }
    .btn-outline:hover { background:rgba(0,216,255,.1); }
    .card-glass { background:rgba(255,255,255,.03); border:1px solid rgba(255,255,255,.08); border-radius:20px; backdrop-filter:blur(10px); transition:all .3s; }
    .card-glass:hover { border-color:rgba(0,216,255,.3); transform:translateY(-3px); box-shadow:0 20px 40px rgba(0,0,0,.3); }
    .navbar { position:fixed; top:0; left:0; right:0; z-index:100; background:rgba(8,12,20,.9); backdrop-filter:blur(20px); border-bottom:1px solid rgba(0,216,255,.1); }
    .nav-link { color:rgba(253,253,253,.7); transition:color .2s; font-size:.875rem; font-weight:500; text-decoration:none; }
    .nav-link:hover { color:#00D8FF; }
    .orb { position:absolute; border-radius:50%; filter:blur(60px); pointer-events:none; }
    .grid-overlay { position:absolute; inset:0; background-image:linear-gradient(rgba(0,216,255,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(0,216,255,.04) 1px,transparent 1px); background-size:50px 50px; pointer-events:none; }
    .fade-up { opacity:0; transform:translateY(30px); transition:opacity .6s,transform .6s; }
    .fade-up.visible { opacity:1; transform:translateY(0); }
    .section-divider { width:60px; height:3px; background:linear-gradient(90deg,#00D8FF,#A86BFF); border-radius:2px; margin:16px auto 0; }
    input, textarea, select { background:rgba(255,255,255,.05); border:1px solid rgba(255,255,255,.1); border-radius:12px; color:#FDFDFD; padding:12px 16px; width:100%; font-family:inherit; font-size:.9rem; transition:border-color .2s; outline:none; }
    input:focus, textarea:focus, select:focus { border-color:rgba(0,216,255,.5); box-shadow:0 0 0 3px rgba(0,216,255,.1); }
    input::placeholder, textarea::placeholder { color:rgba(255,255,255,.3); }
    option { background:#0D1829; }
    @keyframes spin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
    @keyframes pulse-glow { 0%,100%{opacity:.6;transform:scale(1)} 50%{opacity:1;transform:scale(1.05)} }
    @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
  </style>
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <a href="/" class="flex items-center gap-3">
      <div style="width:38px;height:38px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:10px;display:flex;align-items:center;justify-content:center;">
        <span style="font-family:'Poppins',sans-serif;font-weight:900;font-size:1rem;color:#080C14;">D</span>
      </div>
      <span style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;">Da<span class="gradient-text">Vinci</span><span style="color:rgba(255,255,255,.3);font-weight:300;font-size:.7rem;margin-left:4px;">AI</span></span>
    </a>
    <div class="hidden md:flex items-center gap-7">
      <a href="/#about" class="nav-link">About</a>
      <a href="/#ecosystem" class="nav-link">Ecosystem</a>
      <a href="/create/image" class="nav-link">AI Studio</a>
      <a href="/#tokenomics" class="nav-link">Tokenomics</a>
      <a href="/whitepaper" class="nav-link">Whitepaper</a>
    </div>
    <div class="hidden md:flex items-center gap-3">
      <a href="/mypage" class="nav-link" style="color:rgba(255,255,255,.5);font-size:.85rem;"><i class="fas fa-user-circle mr-1"></i>My Page</a>
      <a href="/login" class="btn-primary" style="padding:9px 22px;font-size:.85rem;">
        <i class="fas fa-wallet"></i> Connect Wallet
      </a>
    </div>
    <button onclick="document.getElementById('mobileMenu').classList.toggle('hidden')" class="md:hidden" style="background:none;border:none;color:#00D8FF;font-size:1.3rem;cursor:pointer;">
      <i class="fas fa-bars"></i>
    </button>
  </div>
  <div id="mobileMenu" class="hidden md:hidden px-6 pb-4 flex flex-col gap-4" style="border-top:1px solid rgba(0,216,255,.1);padding-top:16px;">
    <a href="/" class="nav-link">Home</a>
    <a href="/create/image" class="nav-link">AI Image</a>
    <a href="/create/video" class="nav-link">AI Video</a>
    <a href="/whitepaper" class="nav-link">Whitepaper</a>
    <a href="/login" class="btn-primary" style="justify-content:center;"><i class="fas fa-wallet"></i> Connect Wallet</a>
  </div>
</nav>

<!-- CONTENT -->
<main style="padding-top:72px;">
${content}
</main>

<!-- FOOTER -->
<footer style="background:#05080F;padding:48px 0 24px;border-top:1px solid rgba(255,255,255,.05);">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-4 gap-8 mb-10">
      <div>
        <div class="flex items-center gap-3 mb-4">
          <div style="width:36px;height:36px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:9px;display:flex;align-items:center;justify-content:center;">
            <span style="font-family:'Poppins';font-weight:900;font-size:.9rem;color:#080C14;">D</span>
          </div>
          <span style="font-family:'Poppins';font-weight:700;">DaVinci <span class="gradient-text">AI</span></span>
        </div>
        <p style="color:rgba(255,255,255,.35);font-size:.8rem;line-height:1.7;">Web3 Creative Intelligence Platform on BNB Chain.</p>
      </div>
      <div>
        <h4 style="font-weight:600;margin-bottom:14px;font-size:.85rem;color:rgba(255,255,255,.6);">Platform</h4>
        <div class="flex flex-col gap-3">
          <a href="/create/image" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'">AI Image Studio</a>
          <a href="/create/video" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'">AI Video Lab</a>
          <a href="/#ecosystem" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'">NFT Marketplace</a>
          <a href="/mypage" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'">My Gallery</a>
        </div>
      </div>
      <div>
        <h4 style="font-weight:600;margin-bottom:14px;font-size:.85rem;color:rgba(255,255,255,.6);">Resources</h4>
        <div class="flex flex-col gap-3">
          <a href="/whitepaper" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'">Whitepaper</a>
          <a href="/whitepaper#tokenomics" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'">Tokenomics</a>
          <a href="/whitepaper#roadmap" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'">Roadmap</a>
          <a href="https://github.com/vinsenzo83/davinci-ai" target="_blank" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'"><i class="fab fa-github mr-1"></i>GitHub</a>
        </div>
      </div>
      <div>
        <h4 style="font-weight:600;margin-bottom:14px;font-size:.85rem;color:rgba(255,255,255,.6);">Community</h4>
        <div class="flex flex-col gap-3">
          <a href="https://t.me/DaVinciAiZ" target="_blank" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;display:flex;align-items:center;gap:6px;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'"><i class="fab fa-telegram"></i> Telegram</a>
          <a href="https://x.com/DaVinciAiZ" target="_blank" style="color:rgba(255,255,255,.35);font-size:.82rem;text-decoration:none;display:flex;align-items:center;gap:6px;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,.35)'"><i class="fab fa-x-twitter"></i> X (Twitter)</a>
        </div>
        <p style="margin-top:20px;font-size:.72rem;color:rgba(255,255,255,.2);line-height:1.6;">⚠️ Not financial advice. DYOR.</p>
      </div>
    </div>
    <div style="border-top:1px solid rgba(255,255,255,.05);padding-top:20px;display:flex;flex-wrap:wrap;gap:10px;justify-content:space-between;align-items:center;">
      <p style="color:rgba(255,255,255,.2);font-size:.78rem;">© 2025 DaVinci AI. All rights reserved.</p>
      <p style="color:rgba(255,255,255,.15);font-size:.75rem;">Built on <span style="color:#F3BA2F;">BNB Chain</span></p>
    </div>
  </div>
</footer>

<script>
const obs = new IntersectionObserver((e) => e.forEach(x => { if(x.isIntersecting){x.target.classList.add('visible');obs.unobserve(x.target);} }), {threshold:.1});
document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  nav.style.background = window.scrollY > 50 ? 'rgba(8,12,20,.97)' : 'rgba(8,12,20,.9)';
});
</script>
</body>
</html>`
