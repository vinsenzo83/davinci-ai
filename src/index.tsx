import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => {
  return c.html(html)
})

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>DaVinci AI – Where Art Thinks</title>
  <script src="https://cdn.tailwindcss.com"></script>
  <link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700;800;900&display=swap');

    :root {
      --blue: #1B2A49;
      --cyan: #00D8FF;
      --violet: #A86BFF;
      --ivory: #FDFDFD;
    }

    * { margin: 0; padding: 0; box-sizing: border-box; }

    html { scroll-behavior: smooth; }

    body {
      font-family: 'Space Grotesk', sans-serif;
      background: #080C14;
      color: #FDFDFD;
      overflow-x: hidden;
    }

    /* Animated gradient background */
    .hero-bg {
      background: linear-gradient(135deg, #080C14 0%, #0D1829 40%, #111835 70%, #0A0F1E 100%);
      position: relative;
      overflow: hidden;
    }

    .hero-bg::before {
      content: '';
      position: absolute;
      top: -40%;
      left: -20%;
      width: 80%;
      height: 130%;
      background: radial-gradient(ellipse, rgba(0,216,255,0.08) 0%, transparent 65%);
      animation: pulse-glow 6s ease-in-out infinite;
    }

    .hero-bg::after {
      content: '';
      position: absolute;
      bottom: -30%;
      right: -15%;
      width: 70%;
      height: 110%;
      background: radial-gradient(ellipse, rgba(168,107,255,0.08) 0%, transparent 65%);
      animation: pulse-glow 8s ease-in-out infinite reverse;
    }

    @keyframes pulse-glow {
      0%, 100% { opacity: 0.6; transform: scale(1); }
      50% { opacity: 1; transform: scale(1.05); }
    }

    /* Grid overlay */
    .grid-overlay {
      position: absolute;
      inset: 0;
      background-image:
        linear-gradient(rgba(0,216,255,0.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(0,216,255,0.04) 1px, transparent 1px);
      background-size: 50px 50px;
      pointer-events: none;
    }

    /* Navbar */
    .navbar {
      position: fixed;
      top: 0; left: 0; right: 0;
      z-index: 100;
      background: rgba(8, 12, 20, 0.85);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(0,216,255,0.1);
      transition: all 0.3s ease;
    }

    .nav-link {
      color: rgba(253,253,253,0.7);
      transition: color 0.2s;
      font-size: 0.875rem;
      font-weight: 500;
      letter-spacing: 0.03em;
    }

    .nav-link:hover { color: #00D8FF; }

    /* Buttons */
    .btn-primary {
      background: linear-gradient(135deg, #00D8FF, #A86BFF);
      color: #080C14;
      font-weight: 700;
      padding: 14px 32px;
      border-radius: 50px;
      font-size: 0.95rem;
      letter-spacing: 0.03em;
      cursor: pointer;
      border: none;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }

    .btn-primary:hover {
      transform: translateY(-2px);
      box-shadow: 0 0 30px rgba(0,216,255,0.4), 0 0 60px rgba(168,107,255,0.2);
    }

    .btn-outline {
      border: 1px solid rgba(0,216,255,0.5);
      color: #00D8FF;
      font-weight: 600;
      padding: 13px 32px;
      border-radius: 50px;
      font-size: 0.95rem;
      cursor: pointer;
      background: transparent;
      transition: all 0.3s ease;
      display: inline-flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
    }

    .btn-outline:hover {
      background: rgba(0,216,255,0.1);
      border-color: #00D8FF;
      box-shadow: 0 0 20px rgba(0,216,255,0.2);
    }

    /* Glow text */
    .glow-cyan { color: #00D8FF; text-shadow: 0 0 20px rgba(0,216,255,0.5); }
    .glow-violet { color: #A86BFF; text-shadow: 0 0 20px rgba(168,107,255,0.5); }

    .gradient-text {
      background: linear-gradient(135deg, #00D8FF 0%, #A86BFF 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
    }

    /* Cards */
    .card-glass {
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      backdrop-filter: blur(10px);
      transition: all 0.3s ease;
    }

    .card-glass:hover {
      background: rgba(255,255,255,0.06);
      border-color: rgba(0,216,255,0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.3), 0 0 30px rgba(0,216,255,0.1);
    }

    .card-cyan {
      background: linear-gradient(135deg, rgba(0,216,255,0.08), rgba(0,216,255,0.02));
      border: 1px solid rgba(0,216,255,0.2);
      border-radius: 20px;
    }

    .card-violet {
      background: linear-gradient(135deg, rgba(168,107,255,0.08), rgba(168,107,255,0.02));
      border: 1px solid rgba(168,107,255,0.2);
      border-radius: 20px;
    }

    /* Section divider */
    .section-divider {
      width: 60px;
      height: 3px;
      background: linear-gradient(90deg, #00D8FF, #A86BFF);
      border-radius: 2px;
      margin: 16px auto 0;
    }

    /* Tokenomics chart container */
    .chart-container {
      position: relative;
      width: 100%;
      max-width: 380px;
      margin: 0 auto;
    }

    /* Timeline */
    .timeline-item {
      position: relative;
      padding-left: 32px;
    }

    .timeline-item::before {
      content: '';
      position: absolute;
      left: 0;
      top: 8px;
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: linear-gradient(135deg, #00D8FF, #A86BFF);
      box-shadow: 0 0 12px rgba(0,216,255,0.5);
    }

    .timeline-item::after {
      content: '';
      position: absolute;
      left: 5px;
      top: 20px;
      width: 2px;
      height: calc(100% + 16px);
      background: linear-gradient(to bottom, rgba(0,216,255,0.3), transparent);
    }

    .timeline-item:last-child::after { display: none; }

    /* Stat counter */
    .stat-card {
      background: linear-gradient(135deg, rgba(27,42,73,0.6), rgba(0,216,255,0.05));
      border: 1px solid rgba(0,216,255,0.15);
      border-radius: 16px;
      text-align: center;
      padding: 28px 20px;
    }

    /* Particle dots */
    .particle {
      position: absolute;
      width: 4px;
      height: 4px;
      border-radius: 50%;
      background: rgba(0,216,255,0.6);
      animation: float-particle linear infinite;
    }

    @keyframes float-particle {
      0% { transform: translateY(100vh) scale(0); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(-100px) scale(1.5); opacity: 0; }
    }

    /* Partner logo */
    .partner-logo {
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 16px 28px;
      background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07);
      border-radius: 12px;
      transition: all 0.3s ease;
      text-decoration: none;
      color: rgba(253,253,253,0.5);
      font-weight: 600;
      font-size: 0.875rem;
    }

    .partner-logo:hover {
      border-color: rgba(0,216,255,0.3);
      color: #FDFDFD;
      background: rgba(0,216,255,0.05);
    }

    /* Token allocation bar */
    .alloc-bar {
      height: 8px;
      border-radius: 4px;
      background: linear-gradient(90deg, #00D8FF, #A86BFF);
    }

    /* Floating orb */
    .orb {
      position: absolute;
      border-radius: 50%;
      filter: blur(60px);
      pointer-events: none;
    }

    /* Mobile menu */
    .mobile-menu {
      display: none;
    }

    @media (max-width: 768px) {
      .desktop-nav { display: none; }
      .mobile-menu-btn { display: block; }
    }

    /* Scroll animation */
    .fade-up {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.6s ease, transform 0.6s ease;
    }

    .fade-up.visible {
      opacity: 1;
      transform: translateY(0);
    }

    /* NFT card preview */
    .nft-card {
      background: linear-gradient(135deg, #1a1a2e, #16213e);
      border-radius: 16px;
      overflow: hidden;
      border: 1px solid rgba(168,107,255,0.3);
      transition: all 0.3s ease;
    }

    .nft-card:hover {
      transform: scale(1.03);
      box-shadow: 0 20px 40px rgba(168,107,255,0.2);
    }
  </style>
</head>
<body>

<!-- Particles Background -->
<div id="particles" style="position:fixed;inset:0;pointer-events:none;z-index:0;overflow:hidden;"></div>

<!-- ======================== NAVBAR ======================== -->
<nav class="navbar">
  <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
    <!-- Logo -->
    <a href="#" class="flex items-center gap-3">
      <div style="width:40px;height:40px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:10px;display:flex;align-items:center;justify-content:center;">
        <span style="font-family:'Poppins',sans-serif;font-weight:900;font-size:1.1rem;color:#080C14;">D</span>
      </div>
      <span style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.2rem;">
        Da<span class="gradient-text">Vinci</span><span style="color:rgba(255,255,255,0.4);font-weight:300;font-size:0.75rem;margin-left:4px;vertical-align:middle;">AI</span>
      </span>
    </a>

    <!-- Desktop Nav -->
    <div class="desktop-nav hidden md:flex items-center gap-8">
      <a href="#about" class="nav-link">About</a>
      <a href="#ecosystem" class="nav-link">Ecosystem</a>
      <a href="#tokenomics" class="nav-link">Tokenomics</a>
      <a href="#roadmap" class="nav-link">Roadmap</a>
      <a href="#partners" class="nav-link">Partners</a>
    </div>

    <!-- CTA -->
    <div class="hidden md:flex items-center gap-3">
      <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-outline" style="padding:10px 22px;font-size:0.85rem;">
        <i class="fab fa-telegram"></i> Join Community
      </a>
      <a href="https://x.com/DaVinciAiZ" target="_blank" class="btn-primary" style="padding:10px 22px;font-size:0.85rem;">
        Launch App <i class="fas fa-arrow-right"></i>
      </a>
    </div>

    <!-- Mobile menu btn -->
    <button class="mobile-menu-btn md:hidden" onclick="toggleMobile()" style="color:#00D8FF;background:none;border:none;cursor:pointer;font-size:1.4rem;">
      <i class="fas fa-bars"></i>
    </button>
  </div>

  <!-- Mobile Menu -->
  <div id="mobileMenu" style="display:none;padding:16px 24px 24px;border-top:1px solid rgba(0,216,255,0.1);">
    <div class="flex flex-col gap-4">
      <a href="#about" class="nav-link" onclick="toggleMobile()">About</a>
      <a href="#ecosystem" class="nav-link" onclick="toggleMobile()">Ecosystem</a>
      <a href="#tokenomics" class="nav-link" onclick="toggleMobile()">Tokenomics</a>
      <a href="#roadmap" class="nav-link" onclick="toggleMobile()">Roadmap</a>
      <a href="#partners" class="nav-link" onclick="toggleMobile()">Partners</a>
      <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-primary" style="text-align:center;justify-content:center;">
        <i class="fab fa-telegram"></i> Join Community
      </a>
    </div>
  </div>
</nav>

<!-- ======================== HERO ======================== -->
<section class="hero-bg min-h-screen flex items-center pt-20" style="position:relative;">
  <div class="grid-overlay"></div>

  <!-- Orbs -->
  <div class="orb" style="width:500px;height:500px;background:rgba(0,216,255,0.06);top:-100px;left:-100px;"></div>
  <div class="orb" style="width:400px;height:400px;background:rgba(168,107,255,0.06);bottom:-80px;right:-80px;"></div>

  <div class="max-w-7xl mx-auto px-6 py-20 w-full" style="position:relative;z-index:2;">
    <div class="grid lg:grid-cols-2 gap-16 items-center">
      <!-- Left -->
      <div>
        <div style="display:inline-flex;align-items:center;gap:10px;background:rgba(0,216,255,0.08);border:1px solid rgba(0,216,255,0.2);border-radius:50px;padding:8px 20px;margin-bottom:28px;">
          <span style="width:8px;height:8px;background:#00D8FF;border-radius:50%;animation:pulse-glow 2s infinite;"></span>
          <span style="font-size:0.8rem;color:#00D8FF;font-weight:600;letter-spacing:0.05em;">BNB CHAIN · WEB3 AI PLATFORM</span>
        </div>

        <h1 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(2.8rem,6vw,5rem);line-height:1.05;margin-bottom:24px;">
          Where<br>
          <span class="gradient-text">Art Thinks.</span>
        </h1>

        <p style="font-size:1.1rem;color:rgba(253,253,253,0.65);line-height:1.8;max-width:520px;margin-bottom:36px;">
          DaVinci AI merges the genius of Leonardo da Vinci with cutting-edge artificial intelligence —
          creating a revolutionary Web3 platform where creativity, gaming, and NFT ownership converge on BNB Chain.
        </p>

        <div class="flex flex-wrap gap-4 mb-12">
          <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-primary">
            <i class="fab fa-telegram"></i> Join the Revolution
          </a>
          <a href="#tokenomics" class="btn-outline">
            <i class="fas fa-coins"></i> View Tokenomics
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-3 gap-4">
          <div class="stat-card">
            <div style="font-size:1.6rem;font-weight:700;" class="gradient-text">8.88B</div>
            <div style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-top:4px;">Total Supply</div>
          </div>
          <div class="stat-card">
            <div style="font-size:1.6rem;font-weight:700;" class="gradient-text">BNB</div>
            <div style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-top:4px;">Chain</div>
          </div>
          <div class="stat-card">
            <div style="font-size:1.6rem;font-weight:700;" class="gradient-text">4</div>
            <div style="font-size:0.75rem;color:rgba(255,255,255,0.5);margin-top:4px;">Ecosystems</div>
          </div>
        </div>
      </div>

      <!-- Right – Visual -->
      <div style="position:relative;display:flex;justify-content:center;align-items:center;">
        <!-- Central orb -->
        <div style="position:relative;width:340px;height:340px;">
          <!-- Rotating ring 1 -->
          <div style="position:absolute;inset:0;border:2px solid rgba(0,216,255,0.2);border-radius:50%;animation:spin 12s linear infinite;"></div>
          <!-- Rotating ring 2 -->
          <div style="position:absolute;inset:20px;border:2px dashed rgba(168,107,255,0.2);border-radius:50%;animation:spin 18s linear infinite reverse;"></div>
          <!-- Rotating ring 3 -->
          <div style="position:absolute;inset:40px;border:1px solid rgba(0,216,255,0.1);border-radius:50%;animation:spin 24s linear infinite;"></div>

          <!-- Center -->
          <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
            <div style="width:180px;height:180px;background:linear-gradient(135deg,rgba(0,216,255,0.15),rgba(168,107,255,0.15));border-radius:50%;border:1px solid rgba(0,216,255,0.3);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);">
              <div style="text-align:center;">
                <div style="font-family:'Poppins',sans-serif;font-weight:900;font-size:2.5rem;background:linear-gradient(135deg,#00D8FF,#A86BFF);-webkit-background-clip:text;-webkit-text-fill-color:transparent;">DV</div>
                <div style="font-size:0.7rem;color:rgba(255,255,255,0.5);letter-spacing:0.1em;margin-top:4px;">AI · NFT · WEB3</div>
              </div>
            </div>
          </div>

          <!-- Floating nodes -->
          <div style="position:absolute;top:10px;left:50%;transform:translateX(-50%);width:44px;height:44px;background:rgba(0,216,255,0.15);border:1px solid rgba(0,216,255,0.4);border-radius:50%;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-brain" style="color:#00D8FF;font-size:0.9rem;"></i>
          </div>
          <div style="position:absolute;bottom:10px;left:50%;transform:translateX(-50%);width:44px;height:44px;background:rgba(168,107,255,0.15);border:1px solid rgba(168,107,255,0.4);border-radius:50%;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-gem" style="color:#A86BFF;font-size:0.9rem;"></i>
          </div>
          <div style="position:absolute;left:10px;top:50%;transform:translateY(-50%);width:44px;height:44px;background:rgba(0,216,255,0.15);border:1px solid rgba(0,216,255,0.4);border-radius:50%;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-gamepad" style="color:#00D8FF;font-size:0.9rem;"></i>
          </div>
          <div style="position:absolute;right:10px;top:50%;transform:translateY(-50%);width:44px;height:44px;background:rgba(168,107,255,0.15);border:1px solid rgba(168,107,255,0.4);border-radius:50%;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-palette" style="color:#A86BFF;font-size:0.9rem;"></i>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div style="position:absolute;bottom:32px;left:50%;transform:translateX(-50%);text-align:center;z-index:2;">
    <div style="font-size:0.75rem;color:rgba(255,255,255,0.3);letter-spacing:0.1em;margin-bottom:8px;">SCROLL TO EXPLORE</div>
    <div style="width:1px;height:40px;background:linear-gradient(to bottom,rgba(0,216,255,0.5),transparent);margin:0 auto;animation:pulse-glow 2s infinite;"></div>
  </div>
</section>

<!-- ======================== ABOUT ======================== -->
<section id="about" style="background:#0A0F1E;padding:120px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <!-- Header -->
    <div class="text-center mb-20 fade-up">
      <span style="font-size:0.8rem;color:#00D8FF;letter-spacing:0.15em;font-weight:600;">ABOUT DAVINCI AI</span>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3.2rem);margin-top:12px;">
        Intelligence Meets <span class="gradient-text">Imagination</span>
      </h2>
      <div class="section-divider"></div>
      <p style="max-width:600px;margin:24px auto 0;color:rgba(253,253,253,0.6);font-size:1.05rem;line-height:1.8;">
        Inspired by Leonardo da Vinci's timeless genius, we're building the world's first AI-native creative intelligence platform on Web3.
      </p>
    </div>

    <!-- Feature grid -->
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <!-- Card 1 -->
      <div class="card-glass p-8 fade-up">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,rgba(0,216,255,0.2),rgba(0,216,255,0.05));border:1px solid rgba(0,216,255,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <i class="fas fa-brain" style="color:#00D8FF;font-size:1.4rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.15rem;margin-bottom:12px;">AI Creative Studio</h3>
        <p style="color:rgba(255,255,255,0.55);font-size:0.9rem;line-height:1.7;">
          Access state-of-the-art AI tools — Stable Diffusion, Midjourney, KlingAI, HeyGen, and more — in one unified platform.
        </p>
      </div>

      <!-- Card 2 -->
      <div class="card-glass p-8 fade-up">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,rgba(168,107,255,0.2),rgba(168,107,255,0.05));border:1px solid rgba(168,107,255,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <i class="fas fa-gamepad" style="color:#A86BFF;font-size:1.4rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.15rem;margin-bottom:12px;">Gamified Ecosystem</h3>
        <p style="color:rgba(255,255,255,0.55);font-size:0.9rem;line-height:1.7;">
          Earn Creative Credits through mini-games, climb the leaderboard, and participate in Season airdrops via the Telegram Game Hub.
        </p>
      </div>

      <!-- Card 3 -->
      <div class="card-glass p-8 fade-up">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,rgba(0,216,255,0.2),rgba(0,216,255,0.05));border:1px solid rgba(0,216,255,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <i class="fas fa-gem" style="color:#00D8FF;font-size:1.4rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.15rem;margin-bottom:12px;">NFT Renaissance</h3>
        <p style="color:rgba(255,255,255,0.55);font-size:0.9rem;line-height:1.7;">
          Mint, own, and trade AI-generated art as BEP-721 NFTs on BNB Chain with seamless marketplace integration.
        </p>
      </div>

      <!-- Card 4 -->
      <div class="card-glass p-8 fade-up">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,rgba(168,107,255,0.2),rgba(168,107,255,0.05));border:1px solid rgba(168,107,255,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <i class="fas fa-coins" style="color:#A86BFF;font-size:1.4rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.15rem;margin-bottom:12px;">$DAVINCI Token</h3>
        <p style="color:rgba(255,255,255,0.55);font-size:0.9rem;line-height:1.7;">
          BEP-20 utility token enabling DAO governance, staking rewards, marketplace fees, and Creative Pass subscriptions.
        </p>
      </div>

      <!-- Card 5 -->
      <div class="card-glass p-8 fade-up">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,rgba(0,216,255,0.2),rgba(0,216,255,0.05));border:1px solid rgba(0,216,255,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <i class="fas fa-shield-alt" style="color:#00D8FF;font-size:1.4rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.15rem;margin-bottom:12px;">Audited & Secure</h3>
        <p style="color:rgba(255,255,255,0.55);font-size:0.9rem;line-height:1.7;">
          Smart contracts audited by CertiK and PeckShield. Fully transparent tokenomics and multi-sig treasury management.
        </p>
      </div>

      <!-- Card 6 -->
      <div class="card-glass p-8 fade-up">
        <div style="width:56px;height:56px;background:linear-gradient(135deg,rgba(168,107,255,0.2),rgba(168,107,255,0.05));border:1px solid rgba(168,107,255,0.3);border-radius:14px;display:flex;align-items:center;justify-content:center;margin-bottom:20px;">
          <i class="fas fa-vote-yea" style="color:#A86BFF;font-size:1.4rem;"></i>
        </div>
        <h3 style="font-weight:700;font-size:1.15rem;margin-bottom:12px;">DAO Governance</h3>
        <p style="color:rgba(255,255,255,0.55);font-size:0.9rem;line-height:1.7;">
          Community-owned platform. Token holders vote on treasury allocation, feature roadmap, and protocol upgrades.
        </p>
      </div>
    </div>
  </div>
</section>

<!-- ======================== ECOSYSTEM ======================== -->
<section id="ecosystem" style="background:linear-gradient(180deg,#0A0F1E 0%,#080C14 100%);padding:120px 0;position:relative;overflow:hidden;">
  <div class="orb" style="width:600px;height:600px;background:rgba(168,107,255,0.04);top:-100px;right:-200px;"></div>

  <div class="max-w-7xl mx-auto px-6" style="position:relative;z-index:2;">
    <div class="text-center mb-20 fade-up">
      <span style="font-size:0.8rem;color:#A86BFF;letter-spacing:0.15em;font-weight:600;">THE ECOSYSTEM</span>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3.2rem);margin-top:12px;">
        Four Pillars of <span class="gradient-text">Creation</span>
      </h2>
      <div class="section-divider"></div>
    </div>

    <!-- Ecosystem cards -->
    <div class="grid md:grid-cols-2 gap-8">

      <!-- Game Hub -->
      <div class="card-cyan p-8 fade-up" style="position:relative;overflow:hidden;">
        <div style="position:absolute;top:-20px;right:-20px;width:120px;height:120px;background:radial-gradient(circle,rgba(0,216,255,0.1),transparent);border-radius:50%;"></div>
        <div class="flex items-start gap-5">
          <div style="width:64px;height:64px;min-width:64px;background:rgba(0,216,255,0.15);border:1px solid rgba(0,216,255,0.3);border-radius:16px;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-gamepad" style="color:#00D8FF;font-size:1.6rem;"></i>
          </div>
          <div>
            <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.3rem;color:#00D8FF;margin-bottom:8px;">DaVinci Game Hub</h3>
            <p style="color:rgba(255,255,255,0.6);font-size:0.9rem;line-height:1.7;margin-bottom:16px;">
              Telegram & WebApp mini-games with rank system and Creative Credits. Earn rewards through fun, competitive gameplay.
            </p>
            <div class="flex flex-wrap gap-2">
              <span style="background:rgba(0,216,255,0.1);border:1px solid rgba(0,216,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#00D8FF;">Mini-Games</span>
              <span style="background:rgba(0,216,255,0.1);border:1px solid rgba(0,216,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#00D8FF;">Leaderboard</span>
              <span style="background:rgba(0,216,255,0.1);border:1px solid rgba(0,216,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#00D8FF;">Season Airdrops</span>
            </div>
          </div>
        </div>
      </div>

      <!-- AI Atelier -->
      <div class="card-violet p-8 fade-up" style="position:relative;overflow:hidden;">
        <div style="position:absolute;top:-20px;right:-20px;width:120px;height:120px;background:radial-gradient(circle,rgba(168,107,255,0.1),transparent);border-radius:50%;"></div>
        <div class="flex items-start gap-5">
          <div style="width:64px;height:64px;min-width:64px;background:rgba(168,107,255,0.15);border:1px solid rgba(168,107,255,0.3);border-radius:16px;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-palette" style="color:#A86BFF;font-size:1.6rem;"></i>
          </div>
          <div>
            <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.3rem;color:#A86BFF;margin-bottom:8px;">AI Atelier</h3>
            <p style="color:rgba(255,255,255,0.6);font-size:0.9rem;line-height:1.7;margin-bottom:16px;">
              Professional AI creation tools powered by Stable Diffusion, Midjourney, KlingAI, HeyGen, Wrtn.AI and Nouvo.AI.
            </p>
            <div class="flex flex-wrap gap-2">
              <span style="background:rgba(168,107,255,0.1);border:1px solid rgba(168,107,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#A86BFF;">Image Gen</span>
              <span style="background:rgba(168,107,255,0.1);border:1px solid rgba(168,107,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#A86BFF;">AI Video</span>
              <span style="background:rgba(168,107,255,0.1);border:1px solid rgba(168,107,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#A86BFF;">Text & Audio</span>
            </div>
          </div>
        </div>
      </div>

      <!-- NFT Renaissance -->
      <div class="card-cyan p-8 fade-up" style="position:relative;overflow:hidden;">
        <div class="flex items-start gap-5">
          <div style="width:64px;height:64px;min-width:64px;background:rgba(0,216,255,0.15);border:1px solid rgba(0,216,255,0.3);border-radius:16px;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-image" style="color:#00D8FF;font-size:1.6rem;"></i>
          </div>
          <div>
            <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.3rem;color:#00D8FF;margin-bottom:8px;">NFT Renaissance</h3>
            <p style="color:rgba(255,255,255,0.6);font-size:0.9rem;line-height:1.7;margin-bottom:16px;">
              BEP-721 NFT minting on BNB Chain with marketplace integration. 2% fee — 25% directed to DAO treasury.
            </p>
            <div class="flex flex-wrap gap-2">
              <span style="background:rgba(0,216,255,0.1);border:1px solid rgba(0,216,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#00D8FF;">BEP-721</span>
              <span style="background:rgba(0,216,255,0.1);border:1px solid rgba(0,216,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#00D8FF;">Marketplace</span>
              <span style="background:rgba(0,216,255,0.1);border:1px solid rgba(0,216,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#00D8FF;">DAO Revenue</span>
            </div>
          </div>
        </div>
      </div>

      <!-- DaVinci Rewards -->
      <div class="card-violet p-8 fade-up" style="position:relative;overflow:hidden;">
        <div class="flex items-start gap-5">
          <div style="width:64px;height:64px;min-width:64px;background:rgba(168,107,255,0.15);border:1px solid rgba(168,107,255,0.3);border-radius:16px;display:flex;align-items:center;justify-content:center;">
            <i class="fas fa-star" style="color:#A86BFF;font-size:1.6rem;"></i>
          </div>
          <div>
            <h3 style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.3rem;color:#A86BFF;margin-bottom:8px;">DaVinci Rewards</h3>
            <p style="color:rgba(255,255,255,0.6);font-size:0.9rem;line-height:1.7;margin-bottom:16px;">
              $DAVINCI token staking, DAO voting rights, treasury yield, and exclusive creator licensing opportunities.
            </p>
            <div class="flex flex-wrap gap-2">
              <span style="background:rgba(168,107,255,0.1);border:1px solid rgba(168,107,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#A86BFF;">Staking</span>
              <span style="background:rgba(168,107,255,0.1);border:1px solid rgba(168,107,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#A86BFF;">DAO Voting</span>
              <span style="background:rgba(168,107,255,0.1);border:1px solid rgba(168,107,255,0.2);border-radius:20px;padding:4px 12px;font-size:0.75rem;color:#A86BFF;">Creator Fund</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======================== TOKENOMICS ======================== -->
<section id="tokenomics" style="background:#0A0F1E;padding:120px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="text-center mb-20 fade-up">
      <span style="font-size:0.8rem;color:#00D8FF;letter-spacing:0.15em;font-weight:600;">$DAVINCI TOKEN</span>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3.2rem);margin-top:12px;">
        Tokenomics <span class="gradient-text">Architecture</span>
      </h2>
      <div class="section-divider"></div>
      <p style="margin-top:20px;color:rgba(255,255,255,0.5);font-size:0.95rem;">
        Total Supply: <span style="color:#00D8FF;font-weight:700;">8,888,888,888 $DAVINCI</span> · BEP-20 on BNB Chain
      </p>
    </div>

    <div class="grid lg:grid-cols-2 gap-12 items-start">
      <!-- Chart -->
      <div class="fade-up" style="display:flex;flex-direction:column;align-items:center;">
        <div class="chart-container">
          <canvas id="tokenomicsChart"></canvas>
        </div>
      </div>

      <!-- Allocation list -->
      <div class="fade-up">
        <div style="display:flex;flex-direction:column;gap:16px;">

          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:12px;height:12px;background:#00D8FF;border-radius:3px;"></div>
                <span style="font-weight:600;font-size:0.95rem;">Community Rewards</span>
              </div>
              <span style="color:#00D8FF;font-weight:700;">45%</span>
            </div>
            <div class="alloc-bar" style="width:45%;background:linear-gradient(90deg,#00D8FF,#00a8cc);"></div>
            <div style="font-size:0.8rem;color:rgba(255,255,255,0.4);margin-top:6px;">4,000,000,000 tokens · Airdrops, Staking, Games</div>
          </div>

          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:12px;height:12px;background:#A86BFF;border-radius:3px;"></div>
                <span style="font-weight:600;font-size:0.95rem;">Investors</span>
              </div>
              <span style="color:#A86BFF;font-weight:700;">15%</span>
            </div>
            <div class="alloc-bar" style="width:15%;background:linear-gradient(90deg,#A86BFF,#8a50d4);"></div>
            <div style="font-size:0.8rem;color:rgba(255,255,255,0.4);margin-top:6px;">1,333,333,333 tokens · 18-month cliff, 3-year vesting</div>
          </div>

          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:12px;height:12px;background:#00FFB2;border-radius:3px;"></div>
                <span style="font-weight:600;font-size:0.95rem;">Ecosystem Growth</span>
              </div>
              <span style="color:#00FFB2;font-weight:700;">13%</span>
            </div>
            <div class="alloc-bar" style="width:13%;background:linear-gradient(90deg,#00FFB2,#00cc8e);"></div>
            <div style="font-size:0.8rem;color:rgba(255,255,255,0.4);margin-top:6px;">1,155,555,556 tokens · Partnerships & Integrations</div>
          </div>

          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:12px;height:12px;background:#FF6B6B;border-radius:3px;"></div>
                <span style="font-weight:600;font-size:0.95rem;">Team & Core Dev</span>
              </div>
              <span style="color:#FF6B6B;font-weight:700;">12%</span>
            </div>
            <div class="alloc-bar" style="width:12%;background:linear-gradient(90deg,#FF6B6B,#cc5555);"></div>
            <div style="font-size:0.8rem;color:rgba(255,255,255,0.4);margin-top:6px;">1,066,666,667 tokens · 12-month cliff, 4-year vesting</div>
          </div>

          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:12px;height:12px;background:#FFB800;border-radius:3px;"></div>
                <span style="font-weight:600;font-size:0.95rem;">Treasury & Foundation</span>
              </div>
              <span style="color:#FFB800;font-weight:700;">10%</span>
            </div>
            <div class="alloc-bar" style="width:10%;background:linear-gradient(90deg,#FFB800,#cc9200);"></div>
            <div style="font-size:0.8rem;color:rgba(255,255,255,0.4);margin-top:6px;">888,888,889 tokens · DAO Treasury</div>
          </div>

          <div style="background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.07);border-radius:14px;padding:18px 20px;">
            <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">
              <div style="display:flex;align-items:center;gap:10px;">
                <div style="width:12px;height:12px;background:#FF8C00;border-radius:3px;"></div>
                <span style="font-weight:600;font-size:0.95rem;">Artist Fund</span>
              </div>
              <span style="color:#FF8C00;font-weight:700;">5%</span>
            </div>
            <div class="alloc-bar" style="width:5%;background:linear-gradient(90deg,#FF8C00,#cc7000);"></div>
            <div style="font-size:0.8rem;color:rgba(255,255,255,0.4);margin-top:6px;">444,444,444 tokens · Creator Grants & Licensing</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

<!-- ======================== ROADMAP ======================== -->
<section id="roadmap" style="background:#080C14;padding:120px 0;position:relative;overflow:hidden;">
  <div class="orb" style="width:500px;height:500px;background:rgba(0,216,255,0.04);bottom:-100px;left:-150px;"></div>

  <div class="max-w-5xl mx-auto px-6" style="position:relative;z-index:2;">
    <div class="text-center mb-20 fade-up">
      <span style="font-size:0.8rem;color:#A86BFF;letter-spacing:0.15em;font-weight:600;">ROADMAP</span>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(2rem,4vw,3.2rem);margin-top:12px;">
        The Path to <span class="gradient-text">Renaissance</span>
      </h2>
      <div class="section-divider"></div>
    </div>

    <!-- Timeline grid -->
    <div class="grid md:grid-cols-2 gap-6">

      <!-- Q1 2025 -->
      <div class="card-glass p-6 fade-up" style="border-left:3px solid #00D8FF;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="background:rgba(0,216,255,0.15);border:1px solid rgba(0,216,255,0.3);border-radius:8px;padding:6px 14px;">
            <span style="font-weight:700;font-size:0.85rem;color:#00D8FF;">Q1 2025</span>
          </div>
          <div style="width:8px;height:8px;background:#00D8FF;border-radius:50%;box-shadow:0 0 10px rgba(0,216,255,0.8);"></div>
          <span style="font-size:0.75rem;color:rgba(0,216,255,0.7);font-weight:600;">COMPLETED ✓</span>
        </div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-check-circle" style="color:#00D8FF;margin-top:2px;flex-shrink:0;"></i>Project reveal & brand identity
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-check-circle" style="color:#00D8FF;margin-top:2px;flex-shrink:0;"></i>AI Image Studio alpha launch
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-check-circle" style="color:#00D8FF;margin-top:2px;flex-shrink:0;"></i>Community building & Telegram
          </li>
        </ul>
      </div>

      <!-- Q2 2025 -->
      <div class="card-glass p-6 fade-up" style="border-left:3px solid #A86BFF;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="background:rgba(168,107,255,0.15);border:1px solid rgba(168,107,255,0.3);border-radius:8px;padding:6px 14px;">
            <span style="font-weight:700;font-size:0.85rem;color:#A86BFF;">Q2 2025</span>
          </div>
          <div style="width:8px;height:8px;background:#A86BFF;border-radius:50%;box-shadow:0 0 10px rgba(168,107,255,0.8);"></div>
          <span style="font-size:0.75rem;color:rgba(168,107,255,0.7);font-weight:600;">COMPLETED ✓</span>
        </div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-check-circle" style="color:#A86BFF;margin-top:2px;flex-shrink:0;"></i>Mini-game beta & Season 1 airdrop
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-check-circle" style="color:#A86BFF;margin-top:2px;flex-shrink:0;"></i>Telegram Game Hub launch
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-check-circle" style="color:#A86BFF;margin-top:2px;flex-shrink:0;"></i>Creative Credits system
          </li>
        </ul>
      </div>

      <!-- Q3 2025 -->
      <div class="card-glass p-6 fade-up" style="border-left:3px solid #00D8FF;">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="background:rgba(0,216,255,0.15);border:1px solid rgba(0,216,255,0.3);border-radius:8px;padding:6px 14px;">
            <span style="font-weight:700;font-size:0.85rem;color:#00D8FF;">Q3 2025</span>
          </div>
          <div style="width:8px;height:8px;background:#00D8FF;border-radius:50%;animation:pulse-glow 1.5s infinite;"></div>
          <span style="font-size:0.75rem;color:rgba(255,255,255,0.5);font-weight:600;">IN PROGRESS</span>
        </div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-circle-notch fa-spin" style="color:#00D8FF;margin-top:2px;flex-shrink:0;font-size:0.75rem;"></i>AI Video Lab beta
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-circle-notch fa-spin" style="color:#00D8FF;margin-top:2px;flex-shrink:0;font-size:0.75rem;"></i>NFT minting platform
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.7);">
            <i class="fas fa-circle-notch fa-spin" style="color:#00D8FF;margin-top:2px;flex-shrink:0;font-size:0.75rem;"></i>Season 2 airdrop campaign
          </li>
        </ul>
      </div>

      <!-- Q4 2025 -->
      <div class="card-glass p-6 fade-up" style="border-left:3px solid rgba(168,107,255,0.4);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="background:rgba(168,107,255,0.08);border:1px solid rgba(168,107,255,0.2);border-radius:8px;padding:6px 14px;">
            <span style="font-weight:700;font-size:0.85rem;color:rgba(168,107,255,0.8);">Q4 2025</span>
          </div>
        </div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.5);">
            <i class="fas fa-clock" style="color:rgba(168,107,255,0.5);margin-top:2px;flex-shrink:0;"></i>Token Generation Event (TGE)
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.5);">
            <i class="fas fa-clock" style="color:rgba(168,107,255,0.5);margin-top:2px;flex-shrink:0;"></i>Exchange listings (DEX & CEX)
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.5);">
            <i class="fas fa-clock" style="color:rgba(168,107,255,0.5);margin-top:2px;flex-shrink:0;"></i>CertiK / PeckShield audit
          </li>
        </ul>
      </div>

      <!-- 2026 -->
      <div class="card-glass p-6 fade-up" style="border-left:3px solid rgba(0,216,255,0.3);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="background:rgba(0,216,255,0.06);border:1px solid rgba(0,216,255,0.15);border-radius:8px;padding:6px 14px;">
            <span style="font-weight:700;font-size:0.85rem;color:rgba(0,216,255,0.7);">2026 H1</span>
          </div>
        </div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.45);">
            <i class="fas fa-clock" style="color:rgba(0,216,255,0.4);margin-top:2px;flex-shrink:0;"></i>NFT Marketplace launch
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.45);">
            <i class="fas fa-clock" style="color:rgba(0,216,255,0.4);margin-top:2px;flex-shrink:0;"></i>Mobile app release
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.45);">
            <i class="fas fa-clock" style="color:rgba(0,216,255,0.4);margin-top:2px;flex-shrink:0;"></i>DAO activation & governance
          </li>
        </ul>
      </div>

      <!-- 2026-2028 -->
      <div class="card-glass p-6 fade-up" style="border-left:3px solid rgba(168,107,255,0.2);">
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="background:rgba(168,107,255,0.05);border:1px solid rgba(168,107,255,0.1);border-radius:8px;padding:6px 14px;">
            <span style="font-weight:700;font-size:0.85rem;color:rgba(168,107,255,0.6);">2026–2028</span>
          </div>
        </div>
        <ul style="list-style:none;display:flex;flex-direction:column;gap:8px;">
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.4);">
            <i class="fas fa-clock" style="color:rgba(168,107,255,0.3);margin-top:2px;flex-shrink:0;"></i>Multi-chain expansion
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.4);">
            <i class="fas fa-clock" style="color:rgba(168,107,255,0.3);margin-top:2px;flex-shrink:0;"></i>3D & spatial AI tools
          </li>
          <li style="display:flex;gap:8px;align-items:flex-start;font-size:0.88rem;color:rgba(255,255,255,0.4);">
            <i class="fas fa-clock" style="color:rgba(168,107,255,0.3);margin-top:2px;flex-shrink:0;"></i>Global artist partnerships
          </li>
        </ul>
      </div>

    </div>
  </div>
</section>

<!-- ======================== PARTNERS ======================== -->
<section id="partners" style="background:#0A0F1E;padding:100px 0;">
  <div class="max-w-6xl mx-auto px-6">
    <div class="text-center mb-16 fade-up">
      <span style="font-size:0.8rem;color:#00D8FF;letter-spacing:0.15em;font-weight:600;">POWERED BY</span>
      <h2 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:clamp(1.8rem,3.5vw,2.8rem);margin-top:12px;">
        World-Class <span class="gradient-text">AI Partners</span>
      </h2>
      <div class="section-divider"></div>
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 fade-up">
      <a href="https://openai.com/" target="_blank" class="partner-logo flex-col gap-2" style="flex-direction:column;">
        <i class="fas fa-robot" style="font-size:1.4rem;color:#00D8FF;"></i>
        <span>OpenAI</span>
      </a>
      <a href="https://www.midjourney.com/" target="_blank" class="partner-logo flex-col gap-2" style="flex-direction:column;">
        <i class="fas fa-magic" style="font-size:1.4rem;color:#A86BFF;"></i>
        <span>Midjourney</span>
      </a>
      <a href="https://app.klingai.com/" target="_blank" class="partner-logo flex-col gap-2" style="flex-direction:column;">
        <i class="fas fa-film" style="font-size:1.4rem;color:#00D8FF;"></i>
        <span>KlingAI</span>
      </a>
      <a href="https://www.heygen.com/" target="_blank" class="partner-logo flex-col gap-2" style="flex-direction:column;">
        <i class="fas fa-video" style="font-size:1.4rem;color:#A86BFF;"></i>
        <span>HeyGen</span>
      </a>
      <a href="https://wrtn.ai/" target="_blank" class="partner-logo flex-col gap-2" style="flex-direction:column;">
        <i class="fas fa-pen-nib" style="font-size:1.4rem;color:#00D8FF;"></i>
        <span>Wrtn.AI</span>
      </a>
      <a href="https://www.nouvo.ai/" target="_blank" class="partner-logo flex-col gap-2" style="flex-direction:column;">
        <i class="fas fa-sparkles" style="font-size:1.4rem;color:#A86BFF;"></i>
        <span>Nouvo.AI</span>
      </a>
    </div>

    <!-- BNB Chain badge -->
    <div style="margin-top:48px;text-align:center;" class="fade-up">
      <div style="display:inline-flex;align-items:center;gap:12px;background:rgba(243,186,47,0.06);border:1px solid rgba(243,186,47,0.2);border-radius:50px;padding:12px 28px;">
        <div style="width:28px;height:28px;background:#F3BA2F;border-radius:50%;display:flex;align-items:center;justify-content:center;">
          <span style="font-weight:900;font-size:0.8rem;color:#080C14;">B</span>
        </div>
        <span style="font-weight:600;color:rgba(255,255,255,0.8);">Built on BNB Chain</span>
        <span style="font-size:0.8rem;color:rgba(243,186,47,0.7);">BEP-20 · BEP-721</span>
      </div>
    </div>
  </div>
</section>

<!-- ======================== CTA SECTION ======================== -->
<section style="background:linear-gradient(135deg,#0D1829 0%,#111835 50%,#0A0F1E 100%);padding:120px 0;position:relative;overflow:hidden;">
  <div class="orb" style="width:600px;height:600px;background:rgba(0,216,255,0.05);top:-200px;left:50%;transform:translateX(-50%);"></div>
  <div class="grid-overlay" style="opacity:0.5;"></div>

  <div class="max-w-4xl mx-auto px-6 text-center" style="position:relative;z-index:2;">
    <div class="fade-up">
      <h2 style="font-family:'Poppins',sans-serif;font-weight:900;font-size:clamp(2rem,5vw,4rem);line-height:1.1;margin-bottom:20px;">
        Join the Creative<br><span class="gradient-text">Revolution</span>
      </h2>
      <p style="color:rgba(253,253,253,0.6);font-size:1.1rem;max-width:560px;margin:0 auto 40px;line-height:1.8;">
        Be part of the next generation of AI-powered creativity. Earn rewards, mint NFTs, and shape the future of Web3 art.
      </p>
      <div class="flex flex-wrap gap-4 justify-center">
        <a href="https://t.me/DaVinciAiZ" target="_blank" class="btn-primary" style="font-size:1rem;padding:16px 36px;">
          <i class="fab fa-telegram"></i> Join Telegram
        </a>
        <a href="https://x.com/DaVinciAiZ" target="_blank" class="btn-outline" style="font-size:1rem;padding:16px 36px;">
          <i class="fab fa-x-twitter"></i> Follow on X
        </a>
      </div>
    </div>
  </div>
</section>

<!-- ======================== FOOTER ======================== -->
<footer style="background:#05080F;padding:60px 0 32px;border-top:1px solid rgba(255,255,255,0.05);">
  <div class="max-w-7xl mx-auto px-6">
    <div class="grid md:grid-cols-3 gap-12 mb-12">
      <!-- Brand -->
      <div>
        <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
          <div style="width:40px;height:40px;background:linear-gradient(135deg,#00D8FF,#A86BFF);border-radius:10px;display:flex;align-items:center;justify-content:center;">
            <span style="font-family:'Poppins',sans-serif;font-weight:900;font-size:1.1rem;color:#080C14;">D</span>
          </div>
          <span style="font-family:'Poppins',sans-serif;font-weight:700;font-size:1.1rem;">DaVinci <span class="gradient-text">AI</span></span>
        </div>
        <p style="color:rgba(255,255,255,0.4);font-size:0.85rem;line-height:1.7;max-width:260px;">
          Web3 creative intelligence platform merging AI art, gamified airdrops, and NFT ownership on BNB Chain.
        </p>
      </div>

      <!-- Links -->
      <div>
        <h4 style="font-weight:600;margin-bottom:16px;font-size:0.9rem;color:rgba(255,255,255,0.7);">Platform</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="#ecosystem" style="color:rgba(255,255,255,0.4);text-decoration:none;font-size:0.85rem;transition:color 0.2s;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">Game Hub</a>
          <a href="#ecosystem" style="color:rgba(255,255,255,0.4);text-decoration:none;font-size:0.85rem;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">AI Atelier</a>
          <a href="#ecosystem" style="color:rgba(255,255,255,0.4);text-decoration:none;font-size:0.85rem;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">NFT Renaissance</a>
          <a href="#tokenomics" style="color:rgba(255,255,255,0.4);text-decoration:none;font-size:0.85rem;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">$DAVINCI Token</a>
        </div>
      </div>

      <!-- Community -->
      <div>
        <h4 style="font-weight:600;margin-bottom:16px;font-size:0.9rem;color:rgba(255,255,255,0.7);">Community</h4>
        <div style="display:flex;flex-direction:column;gap:10px;">
          <a href="https://t.me/DaVinciAiZ" target="_blank" style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.4);text-decoration:none;font-size:0.85rem;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">
            <i class="fab fa-telegram" style="width:16px;"></i> Telegram
          </a>
          <a href="https://x.com/DaVinciAiZ" target="_blank" style="display:flex;align-items:center;gap:8px;color:rgba(255,255,255,0.4);text-decoration:none;font-size:0.85rem;" onmouseover="this.style.color='#00D8FF'" onmouseout="this.style.color='rgba(255,255,255,0.4)'">
            <i class="fab fa-x-twitter" style="width:16px;"></i> X (Twitter)
          </a>
        </div>

        <div style="margin-top:24px;">
          <p style="font-size:0.75rem;color:rgba(255,255,255,0.25);line-height:1.6;">
            ⚠️ $DAVINCI is a utility token. Not financial advice. Always DYOR.
          </p>
        </div>
      </div>
    </div>

    <div style="border-top:1px solid rgba(255,255,255,0.05);padding-top:24px;display:flex;flex-wrap:wrap;gap:12px;justify-content:space-between;align-items:center;">
      <p style="color:rgba(255,255,255,0.25);font-size:0.8rem;">© 2025 DaVinci AI. All rights reserved.</p>
      <p style="color:rgba(255,255,255,0.2);font-size:0.75rem;">Built on <span style="color:#F3BA2F;">BNB Chain</span> · Powered by <span class="gradient-text">AI</span></p>
    </div>
  </div>
</footer>

<!-- ======================== SCRIPTS ======================== -->
<script>
// ---- Particles ----
function createParticles() {
  const container = document.getElementById('particles');
  const colors = ['rgba(0,216,255,0.6)', 'rgba(168,107,255,0.5)', 'rgba(0,216,255,0.3)'];
  for (let i = 0; i < 25; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.left = Math.random() * 100 + '%';
    p.style.animationDuration = (8 + Math.random() * 16) + 's';
    p.style.animationDelay = (Math.random() * 10) + 's';
    p.style.background = colors[Math.floor(Math.random() * colors.length)];
    p.style.width = p.style.height = (2 + Math.random() * 3) + 'px';
    container.appendChild(p);
  }
}
createParticles();

// ---- Mobile menu ----
function toggleMobile() {
  const m = document.getElementById('mobileMenu');
  m.style.display = m.style.display === 'none' ? 'block' : 'none';
}

// ---- Scroll animations ----
const obs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      obs.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));

// ---- Tokenomics Chart ----
const ctx = document.getElementById('tokenomicsChart').getContext('2d');
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Community Rewards', 'Investors', 'Ecosystem Growth', 'Team & Dev', 'Treasury', 'Artist Fund'],
    datasets: [{
      data: [45, 15, 13, 12, 10, 5],
      backgroundColor: [
        'rgba(0,216,255,0.85)',
        'rgba(168,107,255,0.85)',
        'rgba(0,255,178,0.85)',
        'rgba(255,107,107,0.85)',
        'rgba(255,184,0,0.85)',
        'rgba(255,140,0,0.85)'
      ],
      borderColor: 'rgba(8,12,20,0.8)',
      borderWidth: 3,
      hoverBorderColor: '#FDFDFD',
      hoverBorderWidth: 2,
      hoverOffset: 8
    }]
  },
  options: {
    responsive: true,
    cutout: '65%',
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        backgroundColor: 'rgba(8,12,20,0.95)',
        borderColor: 'rgba(0,216,255,0.3)',
        borderWidth: 1,
        titleColor: '#FDFDFD',
        bodyColor: 'rgba(255,255,255,0.7)',
        padding: 12,
        callbacks: {
          label: function(ctx) {
            return ' ' + ctx.label + ': ' + ctx.parsed + '%';
          }
        }
      }
    }
  }
});

// ---- CSS spin animation ----
const style = document.createElement('style');
style.textContent = '@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }';
document.head.appendChild(style);

// ---- Navbar scroll effect ----
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.navbar');
  if (window.scrollY > 50) {
    nav.style.background = 'rgba(8,12,20,0.97)';
    nav.style.boxShadow = '0 4px 30px rgba(0,0,0,0.4)';
  } else {
    nav.style.background = 'rgba(8,12,20,0.85)';
    nav.style.boxShadow = 'none';
  }
});
</script>

</body>
</html>`

export default app
