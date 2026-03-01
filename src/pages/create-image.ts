import { layout } from './layout'
import { galleryImages } from '../data/gallery-data'

const imgContent = `
<div style="min-height:100vh;background:#080C14;">

  <!-- Header -->
  <section style="padding:50px 0 30px;background:linear-gradient(135deg,#05080F,#0B1525);border-bottom:1px solid rgba(255,255,255,.06);">
    <div class="max-w-7xl mx-auto px-6">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:8px;">
        <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,rgba(0,216,255,.2),rgba(168,107,255,.2));border:1px solid rgba(0,216,255,.3);display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-wand-magic-sparkles" style="color:#00D8FF;font-size:1.1rem;"></i>
        </div>
        <div>
          <h1 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.8rem;">AI Image <span class="gradient-text">Studio</span></h1>
          <p style="font-size:.82rem;color:rgba(255,255,255,.4);">Generate stunning AI artwork with the world's best models</p>
        </div>
        <div style="margin-left:auto;display:flex;gap:8px;align-items:center;">
          <div style="background:rgba(0,216,255,.08);border:1px solid rgba(0,216,255,.2);border-radius:50px;padding:6px 16px;font-size:.75rem;color:#00D8FF;">
            <i class="fas fa-coins" style="margin-right:6px;"></i>Credits: 850
          </div>
          <a href="/login" class="btn-primary" style="padding:8px 20px;font-size:.82rem;"><i class="fas fa-wallet"></i> Connect Wallet</a>
        </div>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-6 py-8">
    <div class="grid lg:grid-cols-3 gap-6">

      <!-- ===== LEFT: Generation Panel ===== -->
      <div style="grid-column:span 1;">
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.08);border-radius:20px;padding:24px;position:sticky;top:90px;">

          <!-- Model Selection -->
          <div style="margin-bottom:20px;">
            <label style="font-size:.8rem;color:rgba(255,255,255,.5);font-weight:600;margin-bottom:10px;display:block;letter-spacing:.05em;">AI MODEL</label>
            <div class="grid grid-cols-2 gap-2" id="modelGrid">
              ${[
                {id:'midjourney',name:'Midjourney v6',icon:'fas fa-wand-magic-sparkles',color:'#9B59B6',desc:'Best quality'},
                {id:'dalle3',name:'DALL-E 3',icon:'fas fa-robot',color:'#10a37f',desc:'Most accurate'},
                {id:'sdxl',name:'Stable Diffusion XL',icon:'fas fa-layer-group',color:'#3498DB',desc:'Open source'},
                {id:'kling',name:'KlingAI',icon:'fas fa-sparkles',color:'#E74C3C',desc:'Asian style'},
              ].map((m,i)=>`
                <button onclick="selectModel('${m.id}',this)" id="model-${m.id}" style="padding:12px;border-radius:12px;border:1px solid ${i===0?m.color:'rgba(255,255,255,.1)'};background:${i===0?m.color+'15':'transparent'};cursor:pointer;text-align:left;transition:all .2s;">
                  <i class="${m.icon}" style="font-size:1rem;color:${m.color};display:block;margin-bottom:4px;"></i>
                  <div style="font-size:.78rem;font-weight:700;color:${i===0?'#FDFDFD':'rgba(255,255,255,.6)'};">${m.name}</div>
                  <div style="font-size:.65rem;color:${i===0?m.color:'rgba(255,255,255,.3)'};">${m.desc}</div>
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Prompt -->
          <div style="margin-bottom:16px;">
            <label style="font-size:.8rem;color:rgba(255,255,255,.5);font-weight:600;margin-bottom:8px;display:block;letter-spacing:.05em;">PROMPT</label>
            <textarea id="promptInput" placeholder="Describe your vision... e.g. 'A cyberpunk samurai standing on a neon-lit rooftop in Neo Tokyo, cinematic lighting, 8K'" style="min-height:110px;resize:vertical;"></textarea>
            <!-- Quick prompts -->
            <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;">
              ${['Cyberpunk city','Space nebula','Fantasy dragon','Abstract neon','AI portrait','Crystal cave'].map(p=>`
                <button onclick="addToPrompt('${p}')" style="font-size:.68rem;padding:4px 10px;border-radius:50px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.03);color:rgba(255,255,255,.5);cursor:pointer;transition:all .2s;" onmouseover="this.style.borderColor='#00D8FF';this.style.color='#00D8FF'" onmouseout="this.style.borderColor='rgba(255,255,255,.1)';this.style.color='rgba(255,255,255,.5)'">${p}</button>
              `).join('')}
            </div>
          </div>

          <!-- Negative Prompt -->
          <div style="margin-bottom:16px;">
            <label style="font-size:.8rem;color:rgba(255,255,255,.5);font-weight:600;margin-bottom:8px;display:block;letter-spacing:.05em;">NEGATIVE PROMPT <span style="opacity:.5;font-weight:400;">(optional)</span></label>
            <textarea id="negPromptInput" placeholder="blurry, low quality, watermark, text..." style="min-height:60px;resize:vertical;"></textarea>
          </div>

          <!-- Style & Settings -->
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Style</label>
              <select>
                <option>Photorealistic</option>
                <option>Anime</option>
                <option>Cyberpunk</option>
                <option>Oil Painting</option>
                <option>Watercolor</option>
                <option>3D Render</option>
                <option>Pixel Art</option>
                <option>Sketch</option>
              </select>
            </div>
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Ratio</label>
              <select>
                <option>1:1 Square</option>
                <option>16:9 Landscape</option>
                <option>9:16 Portrait</option>
                <option>4:3 Classic</option>
                <option>3:2 Photo</option>
              </select>
            </div>
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Quality</label>
              <select>
                <option>Standard (1 credit)</option>
                <option>High (2 credits)</option>
                <option>Ultra (5 credits)</option>
              </select>
            </div>
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Variations</label>
              <select>
                <option>1 image</option>
                <option>2 images</option>
                <option>4 images</option>
              </select>
            </div>
          </div>

          <!-- Advanced Settings -->
          <details style="margin-bottom:16px;">
            <summary style="font-size:.78rem;color:rgba(255,255,255,.4);cursor:pointer;margin-bottom:10px;">⚙ Advanced Settings</summary>
            <div style="display:flex;flex-direction:column;gap:10px;padding-top:8px;">
              <div>
                <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">CFG Scale: <span id="cfgVal">7</span></label>
                <input type="range" min="1" max="20" value="7" oninput="document.getElementById('cfgVal').textContent=this.value" style="width:100%;accent-color:#00D8FF;">
              </div>
              <div>
                <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Steps: <span id="stepsVal">30</span></label>
                <input type="range" min="10" max="50" value="30" oninput="document.getElementById('stepsVal').textContent=this.value" style="width:100%;accent-color:#A86BFF;">
              </div>
              <div>
                <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Seed (blank = random)</label>
                <input type="number" placeholder="e.g. 42">
              </div>
            </div>
          </details>

          <!-- Generate Button -->
          <button onclick="startGeneration()" id="generateBtn" class="btn-primary" style="width:100%;justify-content:center;padding:15px;font-size:1rem;">
            <i class="fas fa-wand-magic-sparkles"></i> Generate Image
          </button>

          <div id="genProgress" style="display:none;margin-top:14px;">
            <div style="font-size:.8rem;color:rgba(255,255,255,.5);margin-bottom:8px;text-align:center;">
              <i class="fas fa-spinner fa-spin" style="color:#00D8FF;margin-right:6px;"></i>
              <span id="genStatus">Initializing AI model...</span>
            </div>
            <div style="height:4px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden;">
              <div id="genBar" style="height:100%;width:0%;background:linear-gradient(90deg,#00D8FF,#A86BFF);border-radius:2px;transition:width .5s;"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- ===== RIGHT: Gallery ===== -->
      <div style="grid-column:span 2;">

        <!-- Generated Result (hidden by default) -->
        <div id="resultCard" style="display:none;background:rgba(0,216,255,.06);border:1px solid rgba(0,216,255,.25);border-radius:20px;padding:24px;margin-bottom:20px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <i class="fas fa-check-circle" style="color:#2ECC71;font-size:1.1rem;"></i>
            <span style="font-weight:700;">Generation Complete!</span>
            <span style="margin-left:auto;font-size:.78rem;color:rgba(255,255,255,.4);">Cost: 1 credit</span>
          </div>
          <div class="grid grid-cols-2 gap-3">
            ${galleryImages.slice(0, 4).map(img=>`
              <div style="position:relative;border-radius:14px;overflow:hidden;cursor:pointer;" onclick="viewFull('${img.url}','${img.title}')">
                <img src="${img.thumb}" style="width:100%;display:block;">
                <div style="position:absolute;bottom:0;left:0;right:0;padding:10px;background:linear-gradient(to top,rgba(0,0,0,.9),transparent);display:flex;justify-content:space-between;align-items:center;">
                  <button onclick="event.stopPropagation();mintNFT('${img.title}')" style="font-size:.68rem;padding:5px 12px;border-radius:8px;border:1px solid rgba(168,107,255,.5);background:rgba(168,107,255,.2);color:#A86BFF;cursor:pointer;"><i class="fas fa-gem" style="margin-right:3px;"></i>Mint</button>
                  <button onclick="event.stopPropagation()" style="font-size:.68rem;padding:5px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.15);background:rgba(255,255,255,.07);color:rgba(255,255,255,.7);cursor:pointer;"><i class="fas fa-download"></i></button>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Community Gallery -->
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
            <h2 style="font-weight:700;font-size:1.05rem;">Community Gallery <span style="color:rgba(255,255,255,.4);font-weight:400;font-size:.85rem;">(100 artworks)</span></h2>
            <div style="display:flex;gap:8px;flex-wrap:wrap;">
              ${['All','Cyberpunk','Space Art','Abstract','Fantasy','Portrait'].map((f,i)=>`
                <button onclick="filterImg('${f}',this)" style="font-size:.75rem;padding:6px 14px;border-radius:50px;border:1px solid ${i===0?'#00D8FF':'rgba(255,255,255,.1)'};background:${i===0?'rgba(0,216,255,.12)':'transparent'};color:${i===0?'#00D8FF':'rgba(255,255,255,.4)'};cursor:pointer;">${f}</button>
              `).join('')}
            </div>
          </div>

          <!-- Masonry grid for all 100 images -->
          <div id="imgGallery" style="columns:2;column-gap:10px;" class="md:columns-3 lg:columns-4">
            ${galleryImages.map(img=>`
              <div class="img-card" data-style="${img.style}" data-tags="${img.tags.join(',')}" style="break-inside:avoid;margin-bottom:10px;border-radius:14px;overflow:hidden;cursor:pointer;position:relative;background:#0D1829;border:1px solid rgba(255,255,255,.06);" onclick="viewFull('${img.url}','${img.title}','${img.model}','${img.artist}','${img.price||'Unlisted'}')">
                <img src="${img.thumb}" alt="${img.title}" loading="lazy" style="width:100%;display:block;transition:transform .3s;" onmouseover="this.style.transform='scale(1.03)'" onmouseout="this.style.transform='scale(1)'">
                <div class="img-hover-info" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,.9) 0%,transparent 50%);opacity:0;transition:opacity .25s;display:flex;flex-direction:column;justify-content:flex-end;padding:12px;">
                  <div style="font-size:.78rem;font-weight:700;">${img.title}</div>
                  <div style="display:flex;justify-content:space-between;align-items:center;margin-top:4px;">
                    <span style="font-size:.65rem;color:rgba(0,216,255,.8);">${img.model}</span>
                    ${img.minted?`<span style="font-size:.7rem;color:#A86BFF;font-weight:700;">${img.price}</span>`:`<span style="font-size:.65rem;color:rgba(255,255,255,.4);">Unminted</span>`}
                  </div>
                </div>
                ${img.minted?`<div style="position:absolute;top:8px;right:8px;background:rgba(168,107,255,.85);border-radius:6px;padding:2px 7px;font-size:.6rem;font-weight:700;">NFT</div>`:''}
                <div style="position:absolute;top:8px;left:8px;background:rgba(0,0,0,.7);border-radius:5px;padding:2px 7px;font-size:.6rem;"><i class="fas fa-heart" style="color:#E0245E;margin-right:2px;"></i>${img.likes}</div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Full Image Modal -->
<div id="fullModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:1000;align-items:center;justify-content:center;" onclick="if(event.target===this)closeModal()">
  <button onclick="closeModal()" style="position:absolute;top:16px;right:16px;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#FDFDFD;cursor:pointer;font-size:1rem;"><i class="fas fa-times"></i></button>
  <div style="max-width:860px;width:95%;max-height:92vh;overflow-y:auto;">
    <img id="modalImg" src="" style="width:100%;border-radius:16px;display:block;margin-bottom:14px;">
    <div style="background:rgba(255,255,255,.04);border-radius:12px;padding:18px;display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;">
      <div>
        <div id="modalTitle" style="font-weight:700;font-size:1rem;margin-bottom:4px;"></div>
        <div id="modalMeta" style="font-size:.78rem;color:rgba(255,255,255,.4);"></div>
      </div>
      <div style="display:flex;gap:8px;flex-wrap:wrap;">
        <button onclick="alert('Minting NFT... Connect wallet first!')" class="btn-primary" style="font-size:.82rem;padding:9px 20px;"><i class="fas fa-gem"></i> Mint NFT</button>
        <button style="padding:9px 20px;border-radius:50px;border:1px solid rgba(255,255,255,.15);background:transparent;color:rgba(255,255,255,.6);font-size:.82rem;cursor:pointer;"><i class="fas fa-heart"></i> Like</button>
        <button style="padding:9px 20px;border-radius:50px;border:1px solid rgba(255,255,255,.15);background:transparent;color:rgba(255,255,255,.6);font-size:.82rem;cursor:pointer;"><i class="fas fa-download"></i> Save</button>
      </div>
    </div>
  </div>
</div>

<script>
// Model selection
const modelColors = {midjourney:'#9B59B6',dalle3:'#10a37f',sdxl:'#3498DB',kling:'#E74C3C'};
function selectModel(id,btn){
  document.querySelectorAll('#modelGrid button').forEach(b=>{
    b.style.borderColor='rgba(255,255,255,.1)';
    b.style.background='transparent';
    b.querySelectorAll('div')[0].style.color='rgba(255,255,255,.6)';
  });
  const color=modelColors[id];
  btn.style.borderColor=color;
  btn.style.background=color+'15';
  btn.querySelectorAll('div')[0].style.color='#FDFDFD';
}

// Quick prompt tags
function addToPrompt(text){
  const inp=document.getElementById('promptInput');
  inp.value=(inp.value?inp.value+', ':'')+text;
  inp.focus();
}

// Image hover
document.querySelectorAll('.img-card').forEach(card=>{
  const info=card.querySelector('.img-hover-info');
  if(info){
    card.addEventListener('mouseover',()=>info.style.opacity='1');
    card.addEventListener('mouseout',()=>info.style.opacity='0');
  }
});

// Filter
function filterImg(style,btn){
  document.querySelectorAll('[onclick^="filterImg"]').forEach(b=>{b.style.borderColor='rgba(255,255,255,.1)';b.style.background='transparent';b.style.color='rgba(255,255,255,.4)';});
  btn.style.borderColor='#00D8FF';btn.style.background='rgba(0,216,255,.12)';btn.style.color='#00D8FF';
  document.querySelectorAll('.img-card').forEach(card=>{
    if(style==='All'){card.style.display='block';return;}
    const tags=(card.dataset.tags||'').toLowerCase();
    const s=(card.dataset.style||'').toLowerCase();
    card.style.display=(tags.includes(style.toLowerCase())||s.includes(style.toLowerCase()))?'block':'none';
  });
}

// View full
function viewFull(url,title,model,artist,price){
  document.getElementById('modalImg').src=url;
  document.getElementById('modalTitle').textContent=title||'AI Artwork';
  document.getElementById('modalMeta').textContent=(model?model+' · ':'')+(artist?'by '+artist+' · ':'')+((price&&price!=='Unlisted')?price+' BNB':'Unlisted');
  document.getElementById('fullModal').style.display='flex';
  document.body.style.overflow='hidden';
}
function closeModal(){
  document.getElementById('fullModal').style.display='none';
  document.body.style.overflow='';
}
function mintNFT(title){alert('NFT Minting: "'+title+'"\\nConnect your MetaMask wallet to proceed.');}

// Generation
const genSteps=['Initializing AI model...','Processing prompt...','Generating base image...','Applying style refinements...','Upscaling resolution...','Finalizing output...','Complete!'];
function startGeneration(){
  const prompt=document.getElementById('promptInput').value.trim();
  if(!prompt){document.getElementById('promptInput').focus();return;}
  const btn=document.getElementById('generateBtn');
  btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Generating...';
  document.getElementById('genProgress').style.display='block';
  document.getElementById('resultCard').style.display='none';
  let step=0;
  const interval=setInterval(()=>{
    step++;
    const pct=Math.round((step/genSteps.length)*100);
    document.getElementById('genBar').style.width=pct+'%';
    document.getElementById('genStatus').textContent=genSteps[Math.min(step,genSteps.length-1)];
    if(step>=genSteps.length){
      clearInterval(interval);
      setTimeout(()=>{
        document.getElementById('genProgress').style.display='none';
        document.getElementById('resultCard').style.display='block';
        btn.disabled=false;
        btn.innerHTML='<i class="fas fa-wand-magic-sparkles"></i> Generate Image';
        document.getElementById('resultCard').scrollIntoView({behavior:'smooth',block:'start'});
      },500);
    }
  },500);
}
</script>
`

export const createImagePage = layout('AI Image Studio | DaVinci AI', imgContent)
