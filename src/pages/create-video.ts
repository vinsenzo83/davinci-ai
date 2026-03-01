import { layout } from './layout'

const createVideoContent = `
<section style="min-height:calc(100vh - 72px);background:#080C14;padding:48px 0;">
  <div class="max-w-7xl mx-auto px-6">
    <div class="flex items-center gap-4 mb-8">
      <div style="width:44px;height:44px;background:linear-gradient(135deg,rgba(168,107,255,.2),rgba(168,107,255,.05));border:1px solid rgba(168,107,255,.3);border-radius:12px;display:flex;align-items:center;justify-content:center;">
        <i class="fas fa-film" style="color:#A86BFF;font-size:1.1rem;"></i>
      </div>
      <div>
        <h1 style="font-family:'Poppins';font-weight:800;font-size:1.8rem;">AI <span class="gradient-text">Video Lab</span></h1>
        <p style="color:rgba(255,255,255,.4);font-size:.85rem;margin-top:2px;">Generate cinematic AI videos with KlingAI, HeyGen & Nouvo.AI</p>
      </div>
      <div style="margin-left:auto;display:flex;align-items:center;gap:8px;background:rgba(168,107,255,.08);border:1px solid rgba(168,107,255,.2);border-radius:50px;padding:6px 14px;">
        <i class="fas fa-coins" style="color:#A86BFF;font-size:.8rem;"></i>
        <span style="font-size:.82rem;color:#A86BFF;font-weight:600;" id="videoCreditDisplay">250 Credits</span>
      </div>
    </div>

    <div class="grid lg:grid-cols-5 gap-6">
      <!-- Controls -->
      <div class="lg:col-span-2 flex flex-col gap-4">
        <!-- Mode Tabs -->
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:6px;display:flex;gap:4px;">
          <button id="tabText" onclick="switchMode('text')" style="flex:1;padding:10px;border-radius:10px;border:none;background:linear-gradient(135deg,#00D8FF,#A86BFF);color:#080C14;font-weight:700;font-size:.82rem;cursor:pointer;font-family:inherit;transition:all .3s;">
            <i class="fas fa-keyboard" style="margin-right:5px;"></i>Text to Video
          </button>
          <button id="tabImage" onclick="switchMode('image')" style="flex:1;padding:10px;border-radius:10px;border:none;background:transparent;color:rgba(255,255,255,.5);font-weight:600;font-size:.82rem;cursor:pointer;font-family:inherit;transition:all .3s;">
            <i class="fas fa-image" style="margin-right:5px;"></i>Image to Video
          </button>
        </div>

        <!-- Text Mode -->
        <div id="textMode" class="card-glass p-5">
          <label style="font-weight:600;font-size:.875rem;color:rgba(255,255,255,.7);display:block;margin-bottom:10px;"><i class="fas fa-pencil-alt" style="color:#A86BFF;margin-right:6px;"></i>Video Prompt</label>
          <textarea id="videoPrompt" rows="4" placeholder="A futuristic cityscape at night with flying cars and neon lights, cinematic camera movement, ultra HD..." style="resize:vertical;min-height:100px;"></textarea>
          <div class="flex flex-wrap gap-2 mt-3">
            ${['Neon cityscape','Ocean waves','Fantasy forest','Space nebula','Time lapse sky','Abstract flow'].map(s =>
              `<button onclick="document.getElementById('videoPrompt').value='${s}, cinematic motion, ultra HD, photorealistic'" style="background:rgba(168,107,255,.06);border:1px solid rgba(168,107,255,.15);border-radius:20px;padding:4px 10px;font-size:.7rem;color:rgba(168,107,255,.8);cursor:pointer;font-family:inherit;transition:all .2s;" onmouseover="this.style.background='rgba(168,107,255,.15)'" onmouseout="this.style.background='rgba(168,107,255,.06)'">${s}</button>`).join('')}
          </div>
        </div>

        <!-- Image Mode (hidden by default) -->
        <div id="imageMode" style="display:none;" class="card-glass p-5">
          <label style="font-weight:600;font-size:.875rem;color:rgba(255,255,255,.7);display:block;margin-bottom:10px;"><i class="fas fa-upload" style="color:#A86BFF;margin-right:6px;"></i>Reference Image</label>
          <div id="dropZone" onclick="document.getElementById('fileInput').click()" style="border:2px dashed rgba(168,107,255,.3);border-radius:12px;padding:32px;text-align:center;cursor:pointer;transition:all .3s;" onmouseover="this.style.borderColor='rgba(168,107,255,.6)'" onmouseout="this.style.borderColor='rgba(168,107,255,.3)'">
            <i class="fas fa-cloud-upload-alt" style="font-size:2rem;color:rgba(168,107,255,.4);margin-bottom:10px;display:block;"></i>
            <p style="color:rgba(255,255,255,.4);font-size:.85rem;">Drop image or click to upload</p>
            <p style="color:rgba(255,255,255,.25);font-size:.75rem;margin-top:4px;">JPG, PNG up to 10MB</p>
          </div>
          <input type="file" id="fileInput" accept="image/*" style="display:none;" onchange="handleFileUpload(this)">
          <textarea id="imageVideoPrompt" rows="2" placeholder="Motion description: Camera slowly pulls back, revealing..." style="resize:none;margin-top:10px;"></textarea>
        </div>

        <!-- Settings -->
        <div class="card-glass p-5">
          <label style="font-weight:600;font-size:.875rem;color:rgba(255,255,255,.7);display:block;margin-bottom:14px;"><i class="fas fa-sliders-h" style="color:#A86BFF;margin-right:6px;"></i>Video Settings</label>
          <div class="grid grid-cols-2 gap-4">
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">AI Model</label>
              <select id="videoModel">
                <option value="kling">KlingAI v1.5</option>
                <option value="heygen">HeyGen Avatar</option>
                <option value="nouvo">Nouvo.AI</option>
                <option value="wan">Wan Video</option>
              </select>
            </div>
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">Duration</label>
              <select id="videoDuration" onchange="updateVideoCost()">
                <option value="5">5 seconds (50 cr)</option>
                <option value="10">10 seconds (90 cr)</option>
                <option value="15">15 seconds (130 cr)</option>
                <option value="30">30 seconds (240 cr)</option>
              </select>
            </div>
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">Resolution</label>
              <select id="videoRes">
                <option value="720p">720p HD</option>
                <option value="1080p">1080p Full HD</option>
                <option value="4k">4K Ultra HD</option>
              </select>
            </div>
            <div>
              <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:block;margin-bottom:6px;">Style</label>
              <select id="videoStyle">
                <option value="cinematic">Cinematic</option>
                <option value="anime">Anime</option>
                <option value="realistic">Photorealistic</option>
                <option value="artistic">Artistic</option>
              </select>
            </div>
          </div>

          <!-- Motion slider -->
          <div style="margin-top:16px;">
            <label style="font-size:.78rem;color:rgba(255,255,255,.45);display:flex;justify-content:space-between;margin-bottom:6px;">
              <span>Motion Intensity</span><span id="motionVal" style="color:#A86BFF;">5</span>
            </label>
            <input type="range" id="motionRange" min="1" max="10" value="5" oninput="document.getElementById('motionVal').textContent=this.value" style="width:100%;background:rgba(255,255,255,.05);-webkit-appearance:none;height:4px;border-radius:2px;outline:none;">
          </div>
        </div>

        <!-- Generate Button -->
        <button onclick="generateVideo()" id="videoGenBtn" style="width:100%;background:linear-gradient(135deg,#A86BFF,#00D8FF);color:#080C14;font-weight:700;padding:16px;border-radius:50px;font-size:1rem;cursor:pointer;border:none;font-family:inherit;display:flex;align-items:center;justify-content:center;gap:10px;transition:all .3s;">
          <i class="fas fa-film"></i> Generate Video
        </button>
        <p style="text-align:center;font-size:.75rem;color:rgba(255,255,255,.3);">Cost: <span id="videoCostDisplay" style="color:#A86BFF;">50 credits</span> · ~2-5 min generation</p>
      </div>

      <!-- Output Panel -->
      <div class="lg:col-span-3">
        <!-- Video Canvas -->
        <div id="videoOutputArea" style="background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.06);border-radius:20px;aspect-ratio:16/9;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;margin-bottom:16px;">
          <div id="videoPlaceholder" style="text-align:center;padding:40px;">
            <div style="width:80px;height:80px;background:rgba(168,107,255,.06);border:1px dashed rgba(168,107,255,.2);border-radius:20px;display:flex;align-items:center;justify-content:center;margin:0 auto 20px;">
              <i class="fas fa-film" style="color:rgba(168,107,255,.4);font-size:2rem;"></i>
            </div>
            <p style="color:rgba(255,255,255,.3);font-size:.95rem;">Your AI video will appear here</p>
            <p style="color:rgba(255,255,255,.2);font-size:.8rem;margin-top:8px;">Generation takes 2-5 minutes</p>
          </div>

          <!-- Loading -->
          <div id="videoLoadingOverlay" style="display:none;position:absolute;inset:0;background:rgba(8,12,20,.85);flex-direction:column;align-items:center;justify-content:center;gap:14px;">
            <div style="width:70px;height:70px;border:3px solid rgba(168,107,255,.2);border-top-color:#A86BFF;border-radius:50%;animation:spin 1s linear infinite;"></div>
            <p style="color:#A86BFF;font-weight:600;font-size:1rem;">Generating your video...</p>
            <div style="width:240px;height:4px;background:rgba(255,255,255,.1);border-radius:2px;overflow:hidden;">
              <div id="videoProgressFill" style="height:100%;width:0%;background:linear-gradient(90deg,#A86BFF,#00D8FF);border-radius:2px;transition:width .5s;"></div>
            </div>
            <p id="videoProgressText" style="color:rgba(255,255,255,.35);font-size:.8rem;">Queued...</p>
            <p style="font-size:.75rem;color:rgba(255,255,255,.25);">⏱ Est. 2-5 minutes remaining</p>
          </div>

          <!-- Video Result -->
          <div id="videoResult" style="display:none;width:100%;height:100%;"></div>
        </div>

        <!-- Video Actions -->
        <div id="videoActions" style="display:none;" class="flex flex-wrap gap-3 mb-6">
          <button onclick="mintVideoNFT()" class="btn-primary" style="flex:1;justify-content:center;background:linear-gradient(135deg,#A86BFF,#00D8FF);">
            <i class="fas fa-gem"></i> Mint Video NFT
          </button>
          <button class="btn-outline" style="flex:1;justify-content:center;border-color:rgba(168,107,255,.5);color:#A86BFF;">
            <i class="fas fa-download"></i> Download
          </button>
          <button onclick="generateVideo()" style="background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:50px;padding:12px 20px;color:rgba(255,255,255,.7);cursor:pointer;font-family:inherit;font-size:.875rem;display:flex;align-items:center;gap:8px;">
            <i class="fas fa-redo"></i> Regenerate
          </button>
        </div>

        <!-- Example Videos -->
        <div>
          <h3 style="font-weight:600;font-size:.9rem;color:rgba(255,255,255,.5);margin-bottom:12px;"><i class="fas fa-star" style="margin-right:6px;color:#A86BFF;"></i>Featured Community Videos</h3>
          <div class="grid grid-cols-3 gap-3">
            ${[
              {title:'Neon City Dreams',duration:'15s',model:'KlingAI',bg:'#0a0522,#2d1b69'},
              {title:'Ocean of Data',duration:'10s',model:'HeyGen',bg:'#021a22,#065566'},
              {title:'Cosmic Ballet',duration:'20s',model:'Nouvo.AI',bg:'#220520,#441040'}
            ].map(v => `
              <div style="aspect-ratio:16/9;border-radius:12px;background:linear-gradient(135deg,${v.bg});border:1px solid rgba(168,107,255,.15);cursor:pointer;position:relative;overflow:hidden;transition:all .3s;" onmouseover="this.style.borderColor='rgba(168,107,255,.5)'" onmouseout="this.style.borderColor='rgba(168,107,255,.15)'">
                <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
                  <div style="width:32px;height:32px;background:rgba(168,107,255,.3);border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(168,107,255,.5);">
                    <i class="fas fa-play" style="color:#A86BFF;font-size:.7rem;margin-left:2px;"></i>
                  </div>
                </div>
                <div style="position:absolute;bottom:0;left:0;right:0;padding:8px;background:linear-gradient(to top,rgba(0,0,0,.8),transparent);">
                  <div style="font-size:.65rem;font-weight:600;">${v.title}</div>
                  <div style="font-size:.58rem;color:rgba(168,107,255,.7);">${v.duration} · ${v.model}</div>
                </div>
              </div>`).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
function switchMode(mode) {
  const isText = mode === 'text';
  document.getElementById('textMode').style.display = isText ? 'block' : 'none';
  document.getElementById('imageMode').style.display = isText ? 'none' : 'block';
  document.getElementById('tabText').style.background = isText ? 'linear-gradient(135deg,#00D8FF,#A86BFF)' : 'transparent';
  document.getElementById('tabText').style.color = isText ? '#080C14' : 'rgba(255,255,255,.5)';
  document.getElementById('tabImage').style.background = isText ? 'transparent' : 'linear-gradient(135deg,#A86BFF,#00D8FF)';
  document.getElementById('tabImage').style.color = isText ? 'rgba(255,255,255,.5)' : '#080C14';
}

function updateVideoCost() {
  const costs = {'5':50,'10':90,'15':130,'30':240};
  const dur = document.getElementById('videoDuration').value;
  document.getElementById('videoCostDisplay').textContent = (costs[dur]||50) + ' credits';
}

function handleFileUpload(input) {
  const file = input.files[0];
  if (!file) return;
  const zone = document.getElementById('dropZone');
  zone.innerHTML = '<i class="fas fa-check-circle" style="font-size:1.8rem;color:#00FFB2;margin-bottom:8px;display:block;"></i><p style="color:rgba(255,255,255,.6);font-size:.85rem;">' + file.name + '</p>';
}

let isVideoGenerating = false;

async function generateVideo() {
  if (isVideoGenerating) return;
  const prompt = document.getElementById('videoPrompt').value.trim();
  if (!prompt) {
    document.getElementById('videoPrompt').style.borderColor = 'rgba(255,100,100,.5)';
    document.getElementById('videoPrompt').focus();
    setTimeout(() => document.getElementById('videoPrompt').style.borderColor = '', 1500);
    return;
  }
  isVideoGenerating = true;
  document.getElementById('videoPlaceholder').style.display = 'none';
  document.getElementById('videoResult').style.display = 'none';
  document.getElementById('videoActions').style.display = 'none';
  const overlay = document.getElementById('videoLoadingOverlay');
  overlay.style.display = 'flex';
  document.getElementById('videoGenBtn').disabled = true;
  document.getElementById('videoGenBtn').innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating...';

  const steps = ['Queued...', 'Loading model...', 'Processing prompt...', 'Generating frames...', 'Rendering motion...', 'Applying style...', 'Encoding video...', 'Finalizing...'];
  let step = 0;
  const interval = setInterval(() => {
    const pct = Math.min((step+1)/steps.length*100, 92);
    document.getElementById('videoProgressFill').style.width = pct + '%';
    document.getElementById('videoProgressText').textContent = steps[step]||steps[steps.length-1];
    step++;
    if (step >= steps.length) clearInterval(interval);
  }, 500);

  await new Promise(r => setTimeout(r, 4000 + Math.random()*2000));
  clearInterval(interval);
  document.getElementById('videoProgressFill').style.width = '100%';

  const model = document.getElementById('videoModel').options[document.getElementById('videoModel').selectedIndex].text;
  const dur = document.getElementById('videoDuration').value;
  const res = document.getElementById('videoRes').value;

  const resultDiv = document.getElementById('videoResult');
  resultDiv.innerHTML = \`
    <div style="width:100%;height:100%;background:linear-gradient(135deg,#1a0533 0%,#2d1b69 50%,#00D8FF10 100%);display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;">
      <div style="text-align:center;">
        <div style="font-size:3.5rem;margin-bottom:12px;filter:drop-shadow(0 0 20px rgba(168,107,255,.6));">🎬</div>
        <div style="font-family:'Poppins';font-weight:700;font-size:1rem;color:rgba(255,255,255,.9);margin-bottom:6px;">AI Generated Video</div>
        <div style="font-size:.75rem;color:rgba(255,255,255,.4);max-width:300px;line-height:1.5;">\${prompt.slice(0,70)}\${prompt.length>70?'...':''}</div>
      </div>
      <div style="position:absolute;bottom:16px;left:16px;background:rgba(0,0,0,.6);border-radius:8px;padding:6px 12px;font-size:.72rem;color:rgba(255,255,255,.6);">
        <i class="fas fa-film" style="margin-right:5px;color:#A86BFF;"></i>\${model} · \${dur}s · \${res}
      </div>
      <div style="position:absolute;top:16px;right:16px;display:flex;align-items:center;gap:6px;background:rgba(0,0,0,.6);border-radius:8px;padding:6px 12px;">
        <div style="width:8px;height:8px;background:#A86BFF;border-radius:50%;animation:pulse-glow 1.5s infinite;"></div>
        <span style="font-size:.7rem;color:#A86BFF;font-weight:600;">READY</span>
      </div>
    </div>
  \`;

  overlay.style.display = 'none';
  resultDiv.style.display = 'block';
  document.getElementById('videoActions').style.display = 'flex';
  document.getElementById('videoGenBtn').disabled = false;
  document.getElementById('videoGenBtn').innerHTML = '<i class="fas fa-film"></i> Generate Video';
  isVideoGenerating = false;
}

function mintVideoNFT() {
  alert('🎬 Video NFT Minting\\n\\nYour video will be stored on IPFS and minted as BEP-721 NFT.\\n\\nFeature launching Q4 2025!');
}
</script>
`

export const createVideoPage = layout('AI Video Lab', createVideoContent)
