import { layout } from './layout'

const createImageContent = `
<section style="min-height:calc(100vh - 72px);background:#080C14;padding:48px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center gap-4 mb-8">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,rgba(0,216,255,.2),rgba(0,216,255,.05));border:1px solid rgba(0,216,255,.3);border-radius:12px;display:flex;align-items:center;justify-content:center;">
        <i class="fas fa-image" style="color:#00D8FF;font-size:1.1rem;"></i>
      </div>
      <div>
        <h1 style="font-family:'Poppins';font-weight:800;font-size:1.8rem;">AI <span class="gradient-text">Image Studio</span></h1>
        <p style="color:rgba(255,255,255,.4);font-size:.85rem;margin-top:2px;">Generate stunning AI artwork powered by top models</p>
      </div>
      <div style="margin-left:auto;display:flex;align-items:center;gap:8px;background:rgba(0,216,255,.08);border:1px solid rgba(0,216,255,.2);border-radius:50px;padding:6px 14px;">
        <i class="fas fa-coins" style="color:#00D8FF;font-size:.8rem;"></i>
        <span style="font-size:.82rem;color:#00D8FF;font-weight:600;" id="creditDisplay">250 Credits</span>
      </div>
    </div>

    <div class="grid lg:grid-cols-5 gap-6">
      <!-- Controls Panel -->
      <div class="lg:col-span-2 flex flex-col gap-4">
        <!-- Prompt -->
        <div class="card-glass p-5">
          <label style="font-weight:600;font-size:.875rem;color:rgba(255,255,255,.7);display:block;margin-bottom:10px;"><i class="fas fa-pencil-alt" style="color:#00D8FF;margin-right:6px;"></i>Prompt</label>
          <textarea id="promptInput" rows="4" placeholder="A cyberpunk portrait of Leonardo da Vinci in neon Tokyo, ultra-detailed, 8K, masterpiece..." style="resize:vertical;min-height:100px;"></textarea>
          <div class="flex flex-wrap gap-2 mt-3">
            ${['Renaissance portrait','Cyberpunk city','Abstract art','Nature surreal','Space odyssey','Dark fantasy'].map(s => 
              `<button onclick="document.getElementById('promptInput').value='${s}, ultra detailed, cinematic lighting, 8K resolution, masterpiece'" style="background:rgba(0,216,255,.06);border:1px solid rgba(0,216,255,.15);border-radius:20px;padding:4px 12px;font-size:.72rem;color:rgba(0,216,255,.8);cursor:pointer;font-family:inherit;transition:all .2s;" onmouseover="this.style.background='rgba(0,216,255,.15)'" onmouseout="this.style.background='rgba(0,216,255,.06)'">${s}</button>`).join('')}
          </div>
        </div>

        <!-- Negative Prompt -->
        <div class="card-glass p-5">
          <label style="font-weight:600;font-size:.875rem;color:rgba(255,255,255,.7);display:block;margin-bottom:10px;"><i class="fas fa-ban" style="color:#FF6B6B;margin-right:6px;"></i>Negative Prompt</label>
          <textarea id="negPromptInput" rows="2" placeholder="blurry, low quality, watermark, text, ugly..." style="resize:none;"></textarea>
        </div>

        <!-- Settings -->
        <div class="card-glass p-5">
          <label style="font-weight:600;font-size:.875rem;color:rgba(255,255,255,.7);display:block;margin-bottom:14px;"><i class="fas fa-sliders-h" style="color:#00D8FF;margin-right:6px;"></i>Settings</label>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">AI Model</label>
              <select id="modelSelect">
                <option value="midjourney">Midjourney v6</option>
                <option value="sd-xl">Stable Diffusion XL</option>
                <option value="dalle3">DALL-E 3</option>
                <option value="openai">OpenAI GPT-Image</option>
              </select>
            </div>
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">Aspect Ratio</label>
              <select id="ratioSelect">
                <option value="1:1">1:1 Square</option>
                <option value="16:9">16:9 Landscape</option>
                <option value="9:16">9:16 Portrait</option>
                <option value="4:3">4:3 Classic</option>
              </select>
            </div>
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">Style</label>
              <select id="styleSelect">
                <option value="realistic">Photorealistic</option>
                <option value="artistic">Artistic</option>
                <option value="anime">Anime</option>
                <option value="3d">3D Render</option>
                <option value="watercolor">Watercolor</option>
                <option value="oil">Oil Painting</option>
              </select>
            </div>
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">Quality</label>
              <select id="qualitySelect">
                <option value="standard">Standard (5 cr)</option>
                <option value="hd">HD 1024px (15 cr)</option>
                <option value="4k">4K (40 cr)</option>
              </select>
            </div>
          </div>

          <!-- Steps slider -->
          <div style="margin-top:16px;">
            <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:flex;justify-content:space-between;margin-bottom:6px;">
              <span>Inference Steps</span><span id="stepsVal" style="color:#00D8FF;">30</span>
            </label>
            <input type="range" id="stepsRange" min="20" max="80" value="30" oninput="document.getElementById('stepsVal').textContent=this.value" style="width:100%;background:rgba(255,255,255,.05);-webkit-appearance:none;height:4px;border-radius:2px;outline:none;">
          </div>

          <!-- Guidance slider -->
          <div style="margin-top:12px;">
            <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:flex;justify-content:space-between;margin-bottom:6px;">
              <span>Guidance Scale</span><span id="guidanceVal" style="color:#00D8FF;">7.5</span>
            </label>
            <input type="range" id="guidanceRange" min="1" max="20" value="7.5" step="0.5" oninput="document.getElementById('guidanceVal').textContent=this.value" style="width:100%;background:rgba(255,255,255,.05);-webkit-appearance:none;height:4px;border-radius:2px;outline:none;">
          </div>
        </div>

        <!-- Generate Button -->
        <button onclick="generateImage()" id="generateBtn" class="btn-primary" style="width:100%;justify-content:center;padding:16px;font-size:1rem;">
          <i class="fas fa-wand-magic-sparkles"></i> Generate Image
        </button>
        <p style="text-align:center;font-size:.75rem;color:rgba(255,255,255,.3);">Cost: <span id="costDisplay" style="color:#00D8FF;">5 credits</span> per generation</p>
      </div>

      <!-- Output Panel -->
      <div class="lg:col-span-3">
        <!-- Canvas area -->
        <div id="outputArea" style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:20px;min-height:480px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;margin-bottom:16px;">
          <!-- Placeholder -->
          <div id="placeholder" style="text-align:center;padding:48px;">
            <div style="width:80px;height:80px;background:rgba(0,216,255,.06);border:1px dashed rgba(0,216,255,.2);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
              <i class="fas fa-wand-magic-sparkles" style="color:rgba(0,216,255,.4);font-size:2rem;"></i>
            </div>
            <p style="color:rgba(255,255,255,.3);font-size:.95rem;">Your generated image will appear here</p>
            <p style="color:rgba(255,255,255,.2);font-size:.8rem;margin-top:8px;">Enter a prompt and click Generate</p>
          </div>

          <!-- Loading overlay -->
          <div id="loadingOverlay" style="display:none;position:absolute;inset:0;background:rgba(8,12,20,.8);flex-direction:column;align-items:center;justify-content:center;gap:16px;">
            <div style="width:60px;height:60px;border:3px solid rgba(0,216,255,.2);border-top-color:#00D8FF;border-radius:50%;animation:spin 1s linear infinite;"></div>
            <p style="color:#00D8FF;font-weight:600;">Generating your masterpiece...</p>
            <div id="progressBar" style="width:200px;height:4px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden;">
              <div id="progressFill" style="height:100%;width:0%;background:linear-gradient(90deg,#00D8FF,#A86BFF);border-radius:2px;transition:width .3s;"></div>
            </div>
            <p id="progressText" style="color:rgba(255,255,255,.4);font-size:.8rem;">Initializing model...</p>
          </div>

          <!-- Generated Image -->
          <div id="generatedResult" style="display:none;width:100%;height:100%;"></div>
        </div>

        <!-- Action buttons (hidden until generated) -->
        <div id="imageActions" style="display:none;" class="flex flex-wrap gap-3">
          <button onclick="mintNFT()" class="btn-primary" style="flex:1;justify-content:center;">
            <i class="fas fa-gem"></i> Mint as NFT
          </button>
          <button onclick="downloadImage()" class="btn-outline" style="flex:1;justify-content:center;">
            <i class="fas fa-download"></i> Download
          </button>
          <button onclick="regenerate()" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:50px;padding:12px 20px;color:rgba(255,255,255,.7);cursor:pointer;font-family:inherit;font-size:.875rem;display:flex;align-items:center;gap:8px;transition:all .3s;" onmouseover="this.style.background='rgba(255,255,255,.1)'" onmouseout="this.style.background='rgba(255,255,255,.05)'">
            <i class="fas fa-redo"></i> Regenerate
          </button>
        </div>

        <!-- Recent Generations -->
        <div style="margin-top:24px;">
          <h3 style="font-weight:600;font-size:.9rem;color:rgba(255,255,255,.5);margin-bottom:12px;"><i class="fas fa-history" style="margin-right:6px;color:#00D8FF;"></i>Recent Generations</h3>
          <div class="grid grid-cols-4 gap-3" id="recentGrid">
            ${Array.from({length:4}).map((_,i) => `
              <div style="aspect-ratio:1;border-radius:10px;background:linear-gradient(135deg,${['#0a0522,#2d1b69','#021a22,#065566','#0a2a1a,#1a4a2a','#2a1a00,#4a3000'][i]});border:1px solid rgba(255,255,255,.06);cursor:pointer;overflow:hidden;transition:all .3s;" onmouseover="this.style.borderColor='rgba(0,216,255,.4)'" onmouseout="this.style.borderColor='rgba(255,255,255,.06)'">
                <div style="width:100%;height:100%;display:flex;align-items:flex-end;">
                  <div style="padding:6px;font-size:.6rem;color:rgba(255,255,255,.4);background:linear-gradient(to top,rgba(0,0,0,.6),transparent);width:100%;">Sample ${i+1}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
// Update cost based on quality
document.getElementById('qualitySelect').addEventListener('change', function() {
  const costs = { standard:5, hd:15, '4k':40 };
  document.getElementById('costDisplay').textContent = (costs[this.value]||5) + ' credits';
});

let isGenerating = false;

async function generateImage() {
  if (isGenerating) return;
  const prompt = document.getElementById('promptInput').value.trim();
  if (!prompt) {
    document.getElementById('promptInput').style.borderColor = 'rgba(255,100,100,.5)';
    document.getElementById('promptInput').focus();
    setTimeout(() => document.getElementById('promptInput').style.borderColor = '', 1500);
    return;
  }
  isGenerating = true;

  const model = document.getElementById('modelSelect').value;
  const ratio = document.getElementById('ratioSelect').value;
  const style = document.getElementById('styleSelect').value;
  const quality = document.getElementById('qualitySelect').value;
  const costs = { standard:5, hd:15, '4k':40 };
  const cost = costs[quality] || 5;

  // Show loading
  document.getElementById('placeholder').style.display = 'none';
  document.getElementById('generatedResult').style.display = 'none';
  document.getElementById('imageActions').style.display = 'none';
  const overlay = document.getElementById('loadingOverlay');
  overlay.style.display = 'flex';
  document.getElementById('generateBtn').disabled = true;
  document.getElementById('generateBtn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

  // Progress simulation
  const steps = ['Initializing model...', 'Encoding prompt...', 'Generating latents...', 'Upscaling image...', 'Applying style...', 'Finalizing...'];
  let step = 0;
  const interval = setInterval(() => {
    const pct = Math.min((step+1) / steps.length * 100, 95);
    document.getElementById('progressFill').style.width = pct + '%';
    document.getElementById('progressText').textContent = steps[step] || steps[steps.length-1];
    step++;
    if (step >= steps.length) clearInterval(interval);
  }, 600);

  // Simulate generation (2.5 - 4s)
  await new Promise(r => setTimeout(r, 2500 + Math.random()*1500));
  clearInterval(interval);
  document.getElementById('progressFill').style.width = '100%';

  // Show result with gradient art simulation
  const palettes = [
    'linear-gradient(135deg,#1a0533 0%,#2d1b69 40%,#00D8FF20 100%)',
    'linear-gradient(135deg,#0a2233 0%,#1a4455 40%,#00FFB220 100%)',
    'linear-gradient(135deg,#2a1a00 0%,#4a3a00 40%,#FFB80020 100%)',
    'linear-gradient(135deg,#1a0022 0%,#3a0044 40%,#A86BFF30 100%)',
    'linear-gradient(135deg,#002a1a 0%,#004a2a 40%,#00D8FF25 100%)',
    'linear-gradient(135deg,#220a00 0%,#441500 40%,#FF6B6B20 100%)'
  ];
  const palette = palettes[Math.floor(Math.random()*palettes.length)];

  const resultDiv = document.getElementById('generatedResult');
  resultDiv.innerHTML = \`
    <div style="width:100%;height:100%;min-height:460px;background:\${palette};display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;">
      <div style="text-align:center;padding:40px;">
        <div style="font-size:4rem;margin-bottom:16px;filter:drop-shadow(0 0 20px rgba(0,216,255,.5));">🎨</div>
        <div style="font-family:'Poppins';font-weight:700;font-size:1.1rem;color:rgba(255,255,255,.9);margin-bottom:8px;">AI Generated Artwork</div>
        <div style="font-size:.8rem;color:rgba(255,255,255,.5);max-width:320px;line-height:1.6;">\${prompt.slice(0,80)}\${prompt.length>80?'...':''}</div>
      </div>
      <div style="position:absolute;bottom:16px;left:16px;background:rgba(0,0,0,.6);border-radius:8px;padding:6px 12px;font-size:.72rem;color:rgba(255,255,255,.6);">
        <i class="fas fa-robot" style="margin-right:5px;color:#00D8FF;"></i>\${document.getElementById('modelSelect').options[document.getElementById('modelSelect').selectedIndex].text} · \${ratio} · \${style}
      </div>
      <div style="position:absolute;top:16px;right:16px;background:rgba(0,216,255,.15);border:1px solid rgba(0,216,255,.3);border-radius:8px;padding:5px 12px;font-size:.72rem;color:#00D8FF;">
        \${quality.toUpperCase()}
      </div>
    </div>
  \`;

  overlay.style.display = 'none';
  resultDiv.style.display = 'block';
  document.getElementById('imageActions').style.display = 'flex';
  document.getElementById('generateBtn').disabled = false;
  document.getElementById('generateBtn').innerHTML = '<i class="fas fa-wand-magic-sparkles"></i> Generate Image';

  // Deduct credits (demo)
  const curCredits = parseInt(document.getElementById('creditDisplay').textContent);
  document.getElementById('creditDisplay').textContent = Math.max(0, curCredits - cost) + ' Credits';
  isGenerating = false;
}

function mintNFT() {
  const wallet = localStorage.getItem('dv_wallet');
  if (!wallet) {
    if (confirm('You need to connect your wallet to mint NFTs. Go to login page?')) {
      window.location.href = '/login';
    }
    return;
  }
  alert('🎨 NFT Minting\\n\\nYour artwork will be minted as BEP-721 NFT on BNB Chain.\\n\\nMinting fee: 0.001 BNB + gas\\n\\nFeature launching Q4 2025 with TGE!');
}

function downloadImage() {
  alert('📥 Download feature will be enabled for Creator Pass holders (500 $DAVINCI/month)');
}

function regenerate() {
  generateImage();
}
</script>
`

export const createImagePage = layout('AI Image Studio', createImageContent)
