import { layout } from './layout'
import { galleryVideos } from '../data/gallery-data'

const vidContent = `
<div style="min-height:100vh;background:#080C14;">

  <!-- Header -->
  <section style="padding:50px 0 30px;background:linear-gradient(135deg,#08050F,#150B25);border-bottom:1px solid rgba(168,107,255,.1);">
    <div class="max-w-7xl mx-auto px-6">
      <div style="display:flex;align-items:center;gap:14px;margin-bottom:8px;">
        <div style="width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg,rgba(168,107,255,.2),rgba(0,216,255,.2));border:1px solid rgba(168,107,255,.3);display:flex;align-items:center;justify-content:center;">
          <i class="fas fa-video" style="color:#A86BFF;font-size:1.1rem;"></i>
        </div>
        <div>
          <h1 style="font-family:'Poppins',sans-serif;font-weight:800;font-size:1.8rem;">AI Video <span class="gradient-text">Lab</span></h1>
          <p style="font-size:.82rem;color:rgba(255,255,255,.4);">Create cinematic AI videos with KlingAI, HeyGen & Nouvo.AI</p>
        </div>
        <div style="margin-left:auto;display:flex;gap:8px;align-items:center;">
          <div style="background:rgba(168,107,255,.08);border:1px solid rgba(168,107,255,.2);border-radius:50px;padding:6px 16px;font-size:.75rem;color:#A86BFF;">
            <i class="fas fa-film" style="margin-right:6px;"></i>Credits: 32
          </div>
          <a href="/login" class="btn-primary" style="padding:8px 20px;font-size:.82rem;background:linear-gradient(135deg,#A86BFF,#6B3FBF);"><i class="fas fa-wallet"></i> Connect</a>
        </div>
      </div>
    </div>
  </section>

  <div class="max-w-7xl mx-auto px-6 py-8">
    <div class="grid lg:grid-cols-3 gap-6">

      <!-- ===== LEFT: Generation Panel ===== -->
      <div>
        <div style="background:rgba(255,255,255,.03);border:1px solid rgba(168,107,255,.15);border-radius:20px;padding:24px;position:sticky;top:90px;">

          <!-- Video Model Selection -->
          <div style="margin-bottom:20px;">
            <label style="font-size:.8rem;color:rgba(255,255,255,.5);font-weight:600;margin-bottom:10px;display:block;letter-spacing:.05em;">VIDEO MODEL</label>
            <div style="display:flex;flex-direction:column;gap:8px;">
              ${[
                {id:'kling',name:'KlingAI v2.0',icon:'fas fa-video',color:'#E74C3C',desc:'Best motion quality · 5 credits/video'},
                {id:'heygen',name:'HeyGen v3',icon:'fas fa-user-tie',color:'#3498DB',desc:'Avatar animation · 4 credits/video'},
                {id:'nouvo',name:'Nouvo.AI Pro',icon:'fas fa-sparkles',color:'#2ECC71',desc:'Creative effects · 3 credits/video'},
              ].map((m,i)=>`
                <button onclick="selectVidModel('${m.id}',this)" id="vmodel-${m.id}" style="padding:14px;border-radius:12px;border:1px solid ${i===0?m.color:'rgba(255,255,255,.1)'};background:${i===0?m.color+'15':'transparent'};cursor:pointer;text-align:left;display:flex;align-items:center;gap:12px;transition:all .2s;">
                  <div style="width:36px;height:36px;border-radius:10px;background:${m.color}18;display:flex;align-items:center;justify-content:center;flex-shrink:0;">
                    <i class="${m.icon}" style="color:${m.color};"></i>
                  </div>
                  <div>
                    <div style="font-size:.85rem;font-weight:700;color:${i===0?'#FDFDFD':'rgba(255,255,255,.6)'};">${m.name}</div>
                    <div style="font-size:.7rem;color:${i===0?m.color:'rgba(255,255,255,.3)'};">${m.desc}</div>
                  </div>
                  ${i===0?`<div style="margin-left:auto;font-size:.65rem;padding:3px 8px;border-radius:50px;background:${m.color}30;color:${m.color};">BEST</div>`:''}
                </button>
              `).join('')}
            </div>
          </div>

          <!-- Generation Type Tabs -->
          <div style="margin-bottom:16px;">
            <label style="font-size:.8rem;color:rgba(255,255,255,.5);font-weight:600;margin-bottom:10px;display:block;letter-spacing:.05em;">GENERATION TYPE</label>
            <div style="display:flex;gap:4px;background:rgba(255,255,255,.04);border-radius:10px;padding:3px;">
              ${['Text to Video','Image to Video','Video to Video'].map((t,i)=>`
                <button onclick="switchGenType('${t}',this)" style="flex:1;padding:8px;border-radius:8px;border:none;background:${i===0?'rgba(168,107,255,.2)':'transparent'};color:${i===0?'#A86BFF':'rgba(255,255,255,.4)'};font-size:.72rem;font-weight:600;cursor:pointer;transition:all .2s;white-space:nowrap;">${t}</button>
              `).join('')}
            </div>
          </div>

          <!-- Prompt -->
          <div style="margin-bottom:16px;">
            <label style="font-size:.8rem;color:rgba(255,255,255,.5);font-weight:600;margin-bottom:8px;display:block;letter-spacing:.05em;">VIDEO PROMPT</label>
            <textarea id="vidPromptInput" placeholder="Describe your video... e.g. 'A futuristic city at night with neon lights reflecting on rain-soaked streets, cinematic camera pan, 4K'" style="min-height:100px;resize:vertical;"></textarea>
            <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;">
              ${['Cinematic pan','Time lapse','Slow motion','Zoom in','Orbit shot','Fade in'].map(p=>`
                <button onclick="addVidPrompt('${p}')" style="font-size:.65rem;padding:3px 9px;border-radius:50px;border:1px solid rgba(168,107,255,.2);background:rgba(168,107,255,.05);color:rgba(168,107,255,.7);cursor:pointer;">${p}</button>
              `).join('')}
            </div>
          </div>

          <!-- Settings -->
          <div class="grid grid-cols-2 gap-3 mb-4">
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Duration</label>
              <select>
                <option>3 seconds</option>
                <option>5 seconds</option>
                <option>8 seconds</option>
                <option>15 seconds</option>
                <option>30 seconds</option>
              </select>
            </div>
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Resolution</label>
              <select>
                <option>720p HD</option>
                <option>1080p Full HD</option>
                <option>4K Ultra HD</option>
              </select>
            </div>
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Camera Motion</label>
              <select>
                <option>Static</option>
                <option>Pan Left/Right</option>
                <option>Zoom In</option>
                <option>Zoom Out</option>
                <option>Orbit</option>
                <option>Crane Up</option>
              </select>
            </div>
            <div>
              <label style="font-size:.75rem;color:rgba(255,255,255,.4);margin-bottom:6px;display:block;">Style</label>
              <select>
                <option>Cinematic</option>
                <option>Anime</option>
                <option>Documentary</option>
                <option>Surreal</option>
                <option>Nature</option>
              </select>
            </div>
          </div>

          <!-- Generate Button -->
          <button onclick="startVideoGen()" id="genVidBtn" style="width:100%;padding:15px;border-radius:50px;background:linear-gradient(135deg,#A86BFF,#6B3FBF);border:none;color:#FDFDFD;font-size:1rem;font-weight:700;cursor:pointer;display:flex;align-items:center;justify-content:center;gap:8px;transition:all .3s;" onmouseover="this.style.boxShadow='0 0 30px rgba(168,107,255,.4)'" onmouseout="this.style.boxShadow='none'">
            <i class="fas fa-film"></i> Generate Video
          </button>

          <div id="vidProgress" style="display:none;margin-top:14px;">
            <div style="font-size:.8rem;color:rgba(255,255,255,.5);margin-bottom:8px;text-align:center;">
              <i class="fas fa-spinner fa-spin" style="color:#A86BFF;margin-right:6px;"></i>
              <span id="vidStatus">Initializing video model...</span>
            </div>
            <div style="height:4px;background:rgba(255,255,255,.07);border-radius:2px;overflow:hidden;">
              <div id="vidBar" style="height:100%;width:0%;background:linear-gradient(90deg,#A86BFF,#00D8FF);border-radius:2px;transition:width .5s;"></div>
            </div>
            <div style="font-size:.72rem;color:rgba(255,255,255,.3);text-align:center;margin-top:6px;">Video generation takes 2–5 minutes</div>
          </div>

          <!-- Credits Info -->
          <div style="margin-top:16px;padding:14px;background:rgba(168,107,255,.06);border:1px solid rgba(168,107,255,.12);border-radius:12px;font-size:.78rem;color:rgba(255,255,255,.4);">
            <i class="fas fa-info-circle" style="color:#A86BFF;margin-right:6px;"></i>
            Video credits: 3–5 per generation. Earn credits by staking $DAVINCI or purchasing with BNB.
          </div>
        </div>
      </div>

      <!-- ===== RIGHT: Video Gallery ===== -->
      <div style="grid-column:span 2;">

        <!-- Result Preview (hidden) -->
        <div id="vidResultCard" style="display:none;background:rgba(168,107,255,.06);border:1px solid rgba(168,107,255,.25);border-radius:20px;padding:24px;margin-bottom:24px;">
          <div style="display:flex;align-items:center;gap:10px;margin-bottom:16px;">
            <i class="fas fa-check-circle" style="color:#2ECC71;font-size:1.1rem;"></i>
            <span style="font-weight:700;">Video Generated!</span>
            <span style="margin-left:auto;font-size:.78rem;color:rgba(255,255,255,.4);">Cost: 5 credits</span>
          </div>
          <div style="position:relative;padding-bottom:56.25%;background:#0D1829;border-radius:14px;overflow:hidden;margin-bottom:14px;">
            <video id="resultVideo" controls style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;" src="${galleryVideos[0]?.videoUrl}"></video>
          </div>
          <div style="display:flex;gap:8px;flex-wrap:wrap;">
            <button onclick="alert('NFT Mint: Connect wallet first!')" class="btn-primary" style="font-size:.85rem;padding:10px 22px;background:linear-gradient(135deg,#A86BFF,#6B3FBF);"><i class="fas fa-gem"></i> Mint as NFT</button>
            <button style="padding:10px 22px;border-radius:50px;border:1px solid rgba(255,255,255,.15);background:transparent;color:rgba(255,255,255,.6);font-size:.85rem;cursor:pointer;"><i class="fas fa-download"></i> Download MP4</button>
            <button style="padding:10px 22px;border-radius:50px;border:1px solid rgba(255,255,255,.15);background:transparent;color:rgba(255,255,255,.6);font-size:.85rem;cursor:pointer;"><i class="fas fa-share-alt"></i> Share</button>
          </div>
        </div>

        <!-- Community Videos -->
        <div>
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;flex-wrap:wrap;gap:10px;">
            <h2 style="font-weight:700;font-size:1.05rem;">Community Videos <span style="color:rgba(255,255,255,.4);font-weight:400;font-size:.85rem;">(10 videos)</span></h2>
            <select style="padding:8px 14px;font-size:.78rem;">
              <option>Sort: Most Viewed</option>
              <option>Sort: Newest</option>
              <option>Sort: Highest Rated</option>
            </select>
          </div>

          <div class="grid md:grid-cols-2 gap-4">
            ${galleryVideos.map(v=>`
              <div style="background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.07);border-radius:16px;overflow:hidden;transition:all .3s;" onmouseover="this.style.borderColor='rgba(168,107,255,.4)'" onmouseout="this.style.borderColor='rgba(255,255,255,.07)'">
                <div style="position:relative;cursor:pointer;" onclick="openVidModal('${v.videoUrl}','${v.title}')">
                  <div style="padding-bottom:56.25%;position:relative;overflow:hidden;">
                    <img src="${v.thumb}" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;transition:transform .3s;" onmouseover="this.style.transform='scale(1.04)'" onmouseout="this.style.transform='scale(1)'">
                  </div>
                  <div style="position:absolute;inset:0;background:rgba(0,0,0,.35);display:flex;align-items:center;justify-content:center;">
                    <div style="width:52px;height:52px;border-radius:50%;background:rgba(168,107,255,.2);border:2px solid rgba(168,107,255,.6);display:flex;align-items:center;justify-content:center;backdrop-filter:blur(10px);">
                      <i class="fas fa-play" style="color:#A86BFF;font-size:1.1rem;margin-left:3px;"></i>
                    </div>
                  </div>
                  <div style="position:absolute;bottom:8px;right:8px;background:rgba(0,0,0,.8);border-radius:5px;padding:3px 8px;font-size:.7rem;font-weight:700;">${v.duration}</div>
                  <div style="position:absolute;top:8px;left:8px;background:rgba(168,107,255,.85);border-radius:6px;padding:2px 8px;font-size:.62rem;font-weight:700;">${v.model}</div>
                  <div style="position:absolute;top:8px;right:8px;background:rgba(0,0,0,.7);border-radius:6px;padding:2px 8px;font-size:.62rem;"><i class="fas fa-eye" style="margin-right:3px;"></i>${v.views.toLocaleString()}</div>
                </div>
                <div style="padding:14px;">
                  <h3 style="font-weight:700;font-size:.9rem;margin-bottom:4px;">${v.title}</h3>
                  <div style="font-size:.72rem;color:rgba(255,255,255,.35);margin-bottom:10px;">${v.artist}</div>
                  <div style="display:flex;flex-wrap:wrap;gap:4px;margin-bottom:12px;">
                    ${v.tags.map(t=>`<span style="font-size:.62rem;padding:2px 8px;border-radius:50px;background:rgba(168,107,255,.08);color:rgba(168,107,255,.7);border:1px solid rgba(168,107,255,.12);">#${t}</span>`).join('')}
                  </div>
                  <div style="display:flex;gap:6px;">
                    <button onclick="alert('Mint NFT: Connect wallet first!')" style="flex:1;padding:7px;border-radius:8px;border:1px solid rgba(168,107,255,.3);background:rgba(168,107,255,.08);color:#A86BFF;font-size:.75rem;cursor:pointer;"><i class="fas fa-gem" style="margin-right:4px;"></i>Mint</button>
                    <button style="padding:7px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.4);font-size:.75rem;cursor:pointer;"><i class="fas fa-heart"></i></button>
                    <button style="padding:7px 12px;border-radius:8px;border:1px solid rgba(255,255,255,.1);background:transparent;color:rgba(255,255,255,.4);font-size:.75rem;cursor:pointer;"><i class="fas fa-share-alt"></i></button>
                  </div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<!-- Video Modal -->
<div id="vidModal" style="display:none;position:fixed;inset:0;background:rgba(0,0,0,.93);z-index:1000;align-items:center;justify-content:center;" onclick="if(event.target===this)closeVidModal()">
  <button onclick="closeVidModal()" style="position:absolute;top:16px;right:16px;width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);color:#FDFDFD;cursor:pointer;"><i class="fas fa-times"></i></button>
  <div style="max-width:900px;width:95%;">
    <h3 id="vidModalTitle" style="font-weight:700;margin-bottom:12px;text-align:center;"></h3>
    <video id="vidModalPlayer" controls style="width:100%;border-radius:16px;background:#000;" src=""></video>
  </div>
</div>

<script>
const vidColors = {kling:'#E74C3C',heygen:'#3498DB',nouvo:'#2ECC71'};

function selectVidModel(id, btn){
  document.querySelectorAll('[id^="vmodel-"]').forEach(b=>{
    b.style.borderColor='rgba(255,255,255,.1)';
    b.style.background='transparent';
  });
  const color=vidColors[id];
  btn.style.borderColor=color;
  btn.style.background=color+'15';
}

function switchGenType(type, btn){
  document.querySelectorAll('[onclick^="switchGenType"]').forEach(b=>{
    b.style.background='transparent';b.style.color='rgba(255,255,255,.4)';
  });
  btn.style.background='rgba(168,107,255,.2)';btn.style.color='#A86BFF';
}

function addVidPrompt(text){
  const inp=document.getElementById('vidPromptInput');
  inp.value=(inp.value?inp.value+', ':'')+text;inp.focus();
}

function openVidModal(url,title){
  document.getElementById('vidModalTitle').textContent=title;
  document.getElementById('vidModalPlayer').src=url;
  document.getElementById('vidModalPlayer').play();
  document.getElementById('vidModal').style.display='flex';
  document.body.style.overflow='hidden';
}

function closeVidModal(){
  const p=document.getElementById('vidModalPlayer');
  p.pause();p.src='';
  document.getElementById('vidModal').style.display='none';
  document.body.style.overflow='';
}

const vidGenSteps=['Initializing KlingAI engine...','Processing video prompt...','Generating first keyframes...','Computing motion trajectories...','Rendering frame sequence (50%)...','Applying cinematic effects...','Compositing final video...','Encoding & optimizing...','Complete!'];

function startVideoGen(){
  const prompt=document.getElementById('vidPromptInput').value.trim();
  if(!prompt){document.getElementById('vidPromptInput').focus();return;}
  const btn=document.getElementById('genVidBtn');
  btn.disabled=true;btn.innerHTML='<i class="fas fa-spinner fa-spin"></i> Generating...';
  document.getElementById('vidProgress').style.display='block';
  document.getElementById('vidResultCard').style.display='none';
  let step=0;
  const interval=setInterval(()=>{
    step++;
    const pct=Math.round((step/vidGenSteps.length)*100);
    document.getElementById('vidBar').style.width=pct+'%';
    document.getElementById('vidStatus').textContent=vidGenSteps[Math.min(step,vidGenSteps.length-1)];
    if(step>=vidGenSteps.length){
      clearInterval(interval);
      setTimeout(()=>{
        document.getElementById('vidProgress').style.display='none';
        document.getElementById('vidResultCard').style.display='block';
        btn.disabled=false;btn.innerHTML='<i class="fas fa-film"></i> Generate Video';
        document.getElementById('vidResultCard').scrollIntoView({behavior:'smooth',block:'start'});
      },500);
    }
  },700);
}
</script>
`

export const createVideoPage = layout('AI Video Lab | DaVinci AI', vidContent)
