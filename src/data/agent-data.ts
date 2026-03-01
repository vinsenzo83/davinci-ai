// DaVinci AI — Agent Platform Data
// All agents are AI-powered, no external image dependencies

export interface AIAgent {
  id: string
  name: string
  tagline: string
  description: string
  category: AgentCategory
  icon: string          // FontAwesome class
  gradient: string      // CSS gradient
  accentColor: string
  capabilities: string[]
  model: string         // underlying AI model
  status: 'live' | 'beta' | 'soon'
  usageCount: number
  rating: number
  tags: string[]
  outputType: 'image' | 'video' | 'text' | 'audio' | 'multi'
  featured: boolean
}

export type AgentCategory = 
  | 'Art & Design'
  | 'Video & Motion'
  | 'Writing & Story'
  | 'Music & Audio'
  | 'Code & Dev'
  | 'Analytics'
  | 'NFT & Web3'
  | '3D & XR'

export const agentCategories: AgentCategory[] = [
  'Art & Design',
  'Video & Motion',
  'Writing & Story',
  'Music & Audio',
  'Code & Dev',
  'Analytics',
  'NFT & Web3',
  '3D & XR',
]

export const aiAgents: AIAgent[] = [
  // ── Art & Design ──────────────────────────────
  {
    id: 'visio',
    name: 'Visio',
    tagline: 'Text-to-Masterpiece',
    description: 'Generate photorealistic and stylized AI artwork from natural language prompts. Powered by the latest diffusion models with style transfer and ControlNet.',
    category: 'Art & Design',
    icon: 'fas fa-wand-magic-sparkles',
    gradient: 'linear-gradient(135deg,#00D8FF,#0090FF)',
    accentColor: '#00D8FF',
    capabilities: ['Text-to-Image', 'Style Transfer', 'ControlNet', 'Inpainting', 'Upscale 4x'],
    model: 'SDXL + ControlNet',
    status: 'live',
    usageCount: 48200,
    rating: 4.9,
    tags: ['image', 'art', 'design'],
    outputType: 'image',
    featured: true,
  },
  {
    id: 'prism',
    name: 'Prism',
    tagline: 'Style DNA Transfer',
    description: 'Analyze any artwork\'s visual DNA and apply it to your creations. From Monet to cyberpunk — blend, morph, and evolve artistic styles seamlessly.',
    category: 'Art & Design',
    icon: 'fas fa-palette',
    gradient: 'linear-gradient(135deg,#A86BFF,#FF6B9D)',
    accentColor: '#A86BFF',
    capabilities: ['Style Blending', 'Artist DNA', 'Color Theory', 'Texture Mapping'],
    model: 'StyleGAN3 + CLIP',
    status: 'live',
    usageCount: 31700,
    rating: 4.8,
    tags: ['style', 'art', 'transfer'],
    outputType: 'image',
    featured: true,
  },
  {
    id: 'pixel',
    name: 'Pixel',
    tagline: 'Generative Pixel Art',
    description: 'Create stunning pixel art and retro-game assets. Perfect for NFT collections, game devs, and nostalgic aesthetics with AI-driven precision.',
    category: 'Art & Design',
    icon: 'fas fa-chess-board',
    gradient: 'linear-gradient(135deg,#FF6B35,#F7C59F)',
    accentColor: '#FF6B35',
    capabilities: ['Pixel Art', 'Sprite Sheets', '8-bit / 16-bit', 'Animation Frames'],
    model: 'Custom Pixel Diffusion',
    status: 'live',
    usageCount: 19400,
    rating: 4.7,
    tags: ['pixel', 'retro', 'game'],
    outputType: 'image',
    featured: false,
  },
  {
    id: 'architect',
    name: 'Architect',
    tagline: 'Space & Structure AI',
    description: 'Generate architectural concepts, interior designs, and spatial layouts from sketches or text. From concept to render in seconds.',
    category: 'Art & Design',
    icon: 'fas fa-drafting-compass',
    gradient: 'linear-gradient(135deg,#43E97B,#38F9D7)',
    accentColor: '#43E97B',
    capabilities: ['Interior Design', 'Floor Plans', 'Exterior Concepts', 'Material Viz'],
    model: 'Architecture-Tuned SDXL',
    status: 'beta',
    usageCount: 8900,
    rating: 4.6,
    tags: ['architecture', '3d', 'design'],
    outputType: 'image',
    featured: false,
  },

  // ── Video & Motion ─────────────────────────────
  {
    id: 'kinetic',
    name: 'Kinetic',
    tagline: 'Text-to-Cinematic Video',
    description: 'Transform text prompts into breathtaking short-form videos. Cinematic camera moves, dynamic lighting, and story-driven sequences powered by KlingAI.',
    category: 'Video & Motion',
    icon: 'fas fa-film',
    gradient: 'linear-gradient(135deg,#F093FB,#F5576C)',
    accentColor: '#F093FB',
    capabilities: ['Text-to-Video', 'Camera Control', '4K Output', 'Scene Transitions'],
    model: 'KlingAI v2',
    status: 'live',
    usageCount: 27600,
    rating: 4.9,
    tags: ['video', 'cinema', 'motion'],
    outputType: 'video',
    featured: true,
  },
  {
    id: 'morpho',
    name: 'Morpho',
    tagline: 'Image-to-Video Magic',
    description: 'Breathe life into still images. Add motion, parallax depth, weather effects, and cinematic movement to any photo or AI artwork.',
    category: 'Video & Motion',
    icon: 'fas fa-play-circle',
    gradient: 'linear-gradient(135deg,#4FACFE,#00F2FE)',
    accentColor: '#4FACFE',
    capabilities: ['Img-to-Video', 'Depth Motion', 'Loop Animation', 'VFX Layer'],
    model: 'Stable Video Diffusion',
    status: 'live',
    usageCount: 22100,
    rating: 4.7,
    tags: ['video', 'animation', 'motion'],
    outputType: 'video',
    featured: false,
  },
  {
    id: 'avatar',
    name: 'Avatar',
    tagline: 'AI Talking Head Creator',
    description: 'Clone any appearance and voice to create realistic talking-head videos. Powered by HeyGen for lifelike lip-sync and expression control.',
    category: 'Video & Motion',
    icon: 'fas fa-user-astronaut',
    gradient: 'linear-gradient(135deg,#667EEA,#764BA2)',
    accentColor: '#667EEA',
    capabilities: ['Lip Sync', 'Voice Clone', 'Emotion Control', 'Multi-language'],
    model: 'HeyGen v3',
    status: 'beta',
    usageCount: 14300,
    rating: 4.8,
    tags: ['avatar', 'voice', 'talking'],
    outputType: 'video',
    featured: true,
  },

  // ── Writing & Story ────────────────────────────
  {
    id: 'chronicle',
    name: 'Chronicle',
    tagline: 'World-Building AI Writer',
    description: 'Build entire fictional universes — characters, lore, plot arcs, and dialogue. From short stories to full novels, Chronicle brings your vision to life.',
    category: 'Writing & Story',
    icon: 'fas fa-feather-alt',
    gradient: 'linear-gradient(135deg,#F6D365,#FDA085)',
    accentColor: '#FDA085',
    capabilities: ['Story Generation', 'Character Dev', 'Lore Building', 'Script Writing'],
    model: 'GPT-4o + Fine-tuned',
    status: 'live',
    usageCount: 35800,
    rating: 4.8,
    tags: ['writing', 'story', 'creative'],
    outputType: 'text',
    featured: false,
  },
  {
    id: 'cipher',
    name: 'Cipher',
    tagline: 'NFT Description & Lore AI',
    description: 'Auto-generate rich NFT metadata, collection descriptions, rarity traits, and community lore. Make every NFT tell a story that collectors love.',
    category: 'Writing & Story',
    icon: 'fas fa-scroll',
    gradient: 'linear-gradient(135deg,#96FBC4,#F9F586)',
    accentColor: '#96FBC4',
    capabilities: ['NFT Metadata', 'Rarity Traits', 'Collection Lore', 'Twitter Copy'],
    model: 'Claude 3 + Web3 Fine-tune',
    status: 'live',
    usageCount: 18200,
    rating: 4.7,
    tags: ['nft', 'writing', 'web3'],
    outputType: 'text',
    featured: false,
  },

  // ── Music & Audio ──────────────────────────────
  {
    id: 'sonic',
    name: 'Sonic',
    tagline: 'AI Music Composer',
    description: 'Compose original music tracks, soundscapes, and ambient audio for your NFTs and projects. Full genre control from lo-fi to epic orchestral.',
    category: 'Music & Audio',
    icon: 'fas fa-music',
    gradient: 'linear-gradient(135deg,#FA709A,#FEE140)',
    accentColor: '#FA709A',
    capabilities: ['Music Gen', 'SFX Creation', 'Vocal Synthesis', 'Loop Export'],
    model: 'MusicGen + Suno v4',
    status: 'live',
    usageCount: 21500,
    rating: 4.8,
    tags: ['music', 'audio', 'sound'],
    outputType: 'audio',
    featured: true,
  },
  {
    id: 'echo',
    name: 'Echo',
    tagline: 'Voice Clone & Narration',
    description: 'Clone any voice with 3 seconds of audio. Generate narrations, character voices, and multilingual dubs for videos and NFT experiences.',
    category: 'Music & Audio',
    icon: 'fas fa-microphone-alt',
    gradient: 'linear-gradient(135deg,#A18CD1,#FBC2EB)',
    accentColor: '#A18CD1',
    capabilities: ['Voice Cloning', 'Narration', '30+ Languages', 'Emotion Control'],
    model: 'ElevenLabs + Custom',
    status: 'beta',
    usageCount: 9700,
    rating: 4.9,
    tags: ['voice', 'audio', 'clone'],
    outputType: 'audio',
    featured: false,
  },

  // ── Code & Dev ─────────────────────────────────
  {
    id: 'forge',
    name: 'Forge',
    tagline: 'Smart Contract Generator',
    description: 'Generate, audit, and deploy Solidity smart contracts for NFT collections, DeFi protocols, and DAO governance. No Solidity experience needed.',
    category: 'Code & Dev',
    icon: 'fas fa-code',
    gradient: 'linear-gradient(135deg,#0BA360,#3CBA92)',
    accentColor: '#3CBA92',
    capabilities: ['ERC-721 / 1155', 'Contract Audit', 'Gas Optimizer', 'BEP-20 Deploy'],
    model: 'CodeLlama + GPT-4',
    status: 'live',
    usageCount: 12600,
    rating: 4.7,
    tags: ['code', 'solidity', 'web3'],
    outputType: 'text',
    featured: false,
  },
  {
    id: 'nexus',
    name: 'Nexus',
    tagline: 'dApp UI Generator',
    description: 'Describe your Web3 app and Nexus generates the full frontend — React components, wallet integration, and responsive design in minutes.',
    category: 'Code & Dev',
    icon: 'fas fa-layer-group',
    gradient: 'linear-gradient(135deg,#30CFD0,#330867)',
    accentColor: '#30CFD0',
    capabilities: ['React Gen', 'Wallet UI', 'Component Lib', 'Mobile Ready'],
    model: 'GPT-4 + UI Fine-tune',
    status: 'soon',
    usageCount: 0,
    rating: 0,
    tags: ['code', 'ui', 'dapp'],
    outputType: 'text',
    featured: false,
  },

  // ── NFT & Web3 ─────────────────────────────────
  {
    id: 'genesis',
    name: 'Genesis',
    tagline: 'NFT Collection Builder',
    description: 'Generate entire NFT collections with layered traits, rarity distributions, and metadata. From 10 to 10,000 pieces — all unique, all yours.',
    category: 'NFT & Web3',
    icon: 'fas fa-gem',
    gradient: 'linear-gradient(135deg,#F857A6,#FF5858)',
    accentColor: '#F857A6',
    capabilities: ['Trait Layering', 'Rarity Engine', 'Batch Mint', 'IPFS Upload'],
    model: 'Visio + Genesis Engine',
    status: 'live',
    usageCount: 29300,
    rating: 4.9,
    tags: ['nft', 'collection', 'mint'],
    outputType: 'multi',
    featured: true,
  },
  {
    id: 'oracle',
    name: 'Oracle',
    tagline: 'NFT Market Intelligence',
    description: 'Real-time NFT market analytics, floor price predictions, whale wallet tracking, and rarity scoring. Make smarter decisions with AI-powered insights.',
    category: 'Analytics',
    icon: 'fas fa-chart-line',
    gradient: 'linear-gradient(135deg,#11998E,#38EF7D)',
    accentColor: '#38EF7D',
    capabilities: ['Price Prediction', 'Whale Tracker', 'Rarity Score', 'Trend Alerts'],
    model: 'Custom Forecasting ML',
    status: 'live',
    usageCount: 16800,
    rating: 4.6,
    tags: ['analytics', 'nft', 'market'],
    outputType: 'multi',
    featured: false,
  },

  // ── 3D & XR ────────────────────────────────────
  {
    id: 'sculptor',
    name: 'Sculptor',
    tagline: 'Text-to-3D Asset',
    description: 'Generate 3D models, textures, and assets from text prompts. Export to GLB, OBJ, or FBX for use in games, metaverses, and AR/VR experiences.',
    category: '3D & XR',
    icon: 'fas fa-cube',
    gradient: 'linear-gradient(135deg,#F7971E,#FFD200)',
    accentColor: '#F7971E',
    capabilities: ['Text-to-3D', 'PBR Textures', 'GLB Export', 'Metaverse Ready'],
    model: 'Shap-E + Point-E',
    status: 'beta',
    usageCount: 7400,
    rating: 4.5,
    tags: ['3d', 'metaverse', 'xr'],
    outputType: 'multi',
    featured: true,
  },
  {
    id: 'realm',
    name: 'Realm',
    tagline: 'Metaverse World Builder',
    description: 'Design and populate entire metaverse environments. Terrain, buildings, NPCs, and interactive objects — all generated by AI and deployable on-chain.',
    category: '3D & XR',
    icon: 'fas fa-globe',
    gradient: 'linear-gradient(135deg,#1A1A2E,#16213E,#0F3460)',
    accentColor: '#E94560',
    capabilities: ['World Gen', 'NPC AI', 'On-chain Deploy', 'Multi-user'],
    model: 'Custom World Engine',
    status: 'soon',
    usageCount: 0,
    rating: 0,
    tags: ['metaverse', '3d', 'world'],
    outputType: 'multi',
    featured: false,
  },
]

// Featured agents for homepage spotlight
export const featuredAgents = aiAgents.filter(a => a.featured)

// Get agents by category
export const getAgentsByCategory = (cat: AgentCategory) =>
  aiAgents.filter(a => a.category === cat)

// Stats
export const platformStats = {
  totalAgents: aiAgents.length,
  liveAgents: aiAgents.filter(a => a.status === 'live').length,
  totalUsage: aiAgents.reduce((s, a) => s + a.usageCount, 0),
  avgRating: +(aiAgents.filter(a => a.rating > 0).reduce((s, a) => s + a.rating, 0) / aiAgents.filter(a => a.rating > 0).length).toFixed(1),
}
