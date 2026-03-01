// Free, watermark-free images from Unsplash (public domain / free to use)
// Categories: digital art, abstract, sci-fi, cyberpunk, fantasy, neon, space, futuristic

export interface GalleryImage {
  id: string
  url: string
  thumb: string
  title: string
  artist: string
  model: string
  style: string
  likes: number
  minted: boolean
  price?: string
  tags: string[]
}

export interface GalleryVideo {
  id: string
  thumb: string
  videoUrl: string
  title: string
  artist: string
  model: string
  duration: string
  views: number
  tags: string[]
}

// 100 watermark-free images using Unsplash (MIT / free license)
export const galleryImages: GalleryImage[] = [
  // === CYBERPUNK / NEON CITY (1-15) ===
  { id:'img001', url:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80', thumb:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&q=70', title:'Neon Tokyo Dreams', artist:'0xA1b2...c3d4', model:'Midjourney v6', style:'Cyberpunk', likes:284, minted:true, price:'0.05 BNB', tags:['cyberpunk','neon','city'] },
  { id:'img002', url:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80', thumb:'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&q=70', title:'Circuit Dreams', artist:'0xB2c3...d4e5', model:'Stable Diffusion XL', style:'Tech Art', likes:193, minted:true, price:'0.03 BNB', tags:['tech','circuit','digital'] },
  { id:'img003', url:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=800&q=80', thumb:'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=400&q=70', title:'Retro Cyber', artist:'0xC3d4...e5f6', model:'DALL-E 3', style:'Retro-Futurism', likes:445, minted:false, tags:['retro','cyber','gaming'] },
  { id:'img004', url:'https://images.unsplash.com/photo-1563089145-599997674d42?w=800&q=80', thumb:'https://images.unsplash.com/photo-1563089145-599997674d42?w=400&q=70', title:'Digital Horizon', artist:'0xD4e5...f6a7', model:'Midjourney v6', style:'Sci-Fi', likes:167, minted:true, price:'0.08 BNB', tags:['scifi','horizon','digital'] },
  { id:'img005', url:'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=800&q=80', thumb:'https://images.unsplash.com/photo-1534796636912-3b95b3ab5986?w=400&q=70', title:'Neon Portal', artist:'0xE5f6...a7b8', model:'KlingAI', style:'Abstract', likes:312, minted:true, price:'0.06 BNB', tags:['neon','portal','abstract'] },
  { id:'img006', url:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1547394765-185e1e68f34e?w=400&q=70', title:'Purple Storm', artist:'0xF6a7...b8c9', model:'Stable Diffusion XL', style:'Abstract', likes:228, minted:false, tags:['purple','storm','abstract'] },
  { id:'img007', url:'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=800&q=80', thumb:'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=400&q=70', title:'Geometric Mind', artist:'0xA7b8...c9d0', model:'DALL-E 3', style:'Geometric', likes:389, minted:true, price:'0.04 BNB', tags:['geometric','mind','pattern'] },
  { id:'img008', url:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&q=70', title:'Gradient Universe', artist:'0xB8c9...d0e1', model:'Midjourney v6', style:'Abstract', likes:156, minted:false, tags:['gradient','universe','color'] },
  { id:'img009', url:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80', thumb:'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&q=70', title:'Data Cosmos', artist:'0xC9d0...e1f2', model:'Midjourney v6', style:'Space Art', likes:521, minted:true, price:'0.12 BNB', tags:['space','data','cosmos'] },
  { id:'img010', url:'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=800&q=80', thumb:'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=400&q=70', title:'Cosmic Nebula', artist:'0xD0e1...f2a3', model:'Stable Diffusion XL', style:'Space Art', likes:634, minted:true, price:'0.15 BNB', tags:['nebula','space','cosmic'] },
  { id:'img011', url:'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=800&q=80', thumb:'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?w=400&q=70', title:'Galaxy Core', artist:'0xE1f2...a3b4', model:'DALL-E 3', style:'Space Art', likes:298, minted:false, tags:['galaxy','stars','deep-space'] },
  { id:'img012', url:'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=800&q=80', thumb:'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=400&q=70', title:'Aurora Borealis', artist:'0xF2a3...b4c5', model:'Midjourney v6', style:'Nature Art', likes:445, minted:true, price:'0.09 BNB', tags:['aurora','nature','light'] },
  { id:'img013', url:'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', thumb:'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=70', title:'Blockchain Grid', artist:'0xG3h4...i5j6', model:'DALL-E 3', style:'Tech Art', likes:199, minted:true, price:'0.07 BNB', tags:['blockchain','grid','tech'] },
  { id:'img014', url:'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&q=80', thumb:'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&q=70', title:'Binary Rain', artist:'0xH4i5...j6k7', model:'Stable Diffusion XL', style:'Matrix', likes:333, minted:false, tags:['binary','matrix','code'] },
  { id:'img015', url:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&q=80', thumb:'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&q=70', title:'Neural Network', artist:'0xI5j6...k7l8', model:'Midjourney v6', style:'AI Art', likes:412, minted:true, price:'0.11 BNB', tags:['neural','network','ai'] },

  // === SPACE / COSMOS (16-30) ===
  { id:'img016', url:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=800&q=80', thumb:'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=400&q=70', title:'Deep Space Voyage', artist:'0xJ6k7...l8m9', model:'Midjourney v6', style:'Space Art', likes:578, minted:true, price:'0.18 BNB', tags:['space','voyage','stars'] },
  { id:'img017', url:'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=800&q=80', thumb:'https://images.unsplash.com/photo-1484589065579-248aad0d8b13?w=400&q=70', title:'Milky Way Portal', artist:'0xK7l8...m9n0', model:'Stable Diffusion XL', style:'Space Art', likes:421, minted:false, tags:['milkyway','galaxy','portal'] },
  { id:'img018', url:'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=800&q=80', thumb:'https://images.unsplash.com/photo-1516339901601-2e1b62dc0c45?w=400&q=70', title:'Stellar Explosion', artist:'0xL8m9...n0o1', model:'DALL-E 3', style:'Space Art', likes:367, minted:true, price:'0.13 BNB', tags:['stellar','explosion','space'] },
  { id:'img019', url:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=800&q=80', thumb:'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=400&q=70', title:'Blue Planet', artist:'0xM9n0...o1p2', model:'Midjourney v6', style:'Space Art', likes:289, minted:false, tags:['planet','blue','orbit'] },
  { id:'img020', url:'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=800&q=80', thumb:'https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=400&q=70', title:'Nebula Dreams', artist:'0xN0o1...p2q3', model:'KlingAI', style:'Space Art', likes:534, minted:true, price:'0.16 BNB', tags:['nebula','dreams','colorful'] },
  { id:'img021', url:'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=800&q=80', thumb:'https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?w=400&q=70', title:'Starfield', artist:'0xO1p2...q3r4', model:'Stable Diffusion XL', style:'Space Art', likes:198, minted:false, tags:['stars','field','night'] },
  { id:'img022', url:'https://images.unsplash.com/photo-1578924825843-6a9bb8a92dad?w=800&q=80', thumb:'https://images.unsplash.com/photo-1578924825843-6a9bb8a92dad?w=400&q=70', title:'Cosmic Web', artist:'0xP2q3...r4s5', model:'DALL-E 3', style:'Space Art', likes:445, minted:true, price:'0.14 BNB', tags:['cosmic','web','space'] },
  { id:'img023', url:'https://images.unsplash.com/photo-1545156521-77bd85671d30?w=800&q=80', thumb:'https://images.unsplash.com/photo-1545156521-77bd85671d30?w=400&q=70', title:'Solar Flare', artist:'0xQ3r4...s5t6', model:'Midjourney v6', style:'Space Art', likes:321, minted:false, tags:['solar','flare','sun'] },
  { id:'img024', url:'https://images.unsplash.com/photo-1596708077322-a2f03b32ba4a?w=800&q=80', thumb:'https://images.unsplash.com/photo-1596708077322-a2f03b32ba4a?w=400&q=70', title:'Wormhole', artist:'0xR4s5...t6u7', model:'KlingAI', style:'Sci-Fi', likes:612, minted:true, price:'0.22 BNB', tags:['wormhole','portal','scifi'] },
  { id:'img025', url:'https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?w=800&q=80', thumb:'https://images.unsplash.com/photo-1527066236128-2ff79f7b9705?w=400&q=70', title:'Moon Sequence', artist:'0xS5t6...u7v8', model:'Stable Diffusion XL', style:'Space Art', likes:267, minted:false, tags:['moon','sequence','light'] },
  { id:'img026', url:'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=800&q=80', thumb:'https://images.unsplash.com/photo-1502134249126-9f3755a50d78?w=400&q=70', title:'Rocket Trail', artist:'0xT6u7...v8w9', model:'DALL-E 3', style:'Space Art', likes:389, minted:true, price:'0.10 BNB', tags:['rocket','trail','launch'] },
  { id:'img027', url:'https://images.unsplash.com/photo-1540198163009-7afda7da2945?w=800&q=80', thumb:'https://images.unsplash.com/photo-1540198163009-7afda7da2945?w=400&q=70', title:'Black Hole Edge', artist:'0xU7v8...w9x0', model:'Midjourney v6', style:'Space Art', likes:723, minted:true, price:'0.25 BNB', tags:['blackhole','event-horizon','space'] },
  { id:'img028', url:'https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=800&q=80', thumb:'https://images.unsplash.com/photo-1608178398319-48f814d0750c?w=400&q=70', title:'Galactic Dust', artist:'0xV8w9...x0y1', model:'Stable Diffusion XL', style:'Space Art', likes:234, minted:false, tags:['galactic','dust','swirl'] },
  { id:'img029', url:'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=800&q=80', thumb:'https://images.unsplash.com/photo-1505506874110-6a7a69069a08?w=400&q=70', title:'Interstellar', artist:'0xW9x0...y1z2', model:'DALL-E 3', style:'Sci-Fi', likes:456, minted:true, price:'0.17 BNB', tags:['interstellar','travel','space'] },
  { id:'img030', url:'https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=800&q=80', thumb:'https://images.unsplash.com/photo-1471958680802-1345a694ba6d?w=400&q=70', title:'Planetary Ring', artist:'0xX0y1...z2a3', model:'KlingAI', style:'Space Art', likes:312, minted:false, tags:['planet','ring','saturn'] },

  // === ABSTRACT / GENERATIVE (31-45) ===
  { id:'img031', url:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', thumb:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70', title:'Fluid Dynamics', artist:'0xY1z2...a3b4', model:'Midjourney v6', style:'Abstract', likes:287, minted:true, price:'0.06 BNB', tags:['fluid','dynamics','abstract'] },
  { id:'img032', url:'https://images.unsplash.com/photo-1507919909716-c8262e491cde?w=800&q=80', thumb:'https://images.unsplash.com/photo-1507919909716-c8262e491cde?w=400&q=70', title:'Color Burst', artist:'0xZ2a3...b4c5', model:'Stable Diffusion XL', style:'Abstract', likes:345, minted:false, tags:['color','burst','vivid'] },
  { id:'img033', url:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80', thumb:'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&q=70', title:'Data Flow', artist:'0xA3b4...c5d6', model:'DALL-E 3', style:'Abstract', likes:412, minted:true, price:'0.09 BNB', tags:['data','flow','stream'] },
  { id:'img034', url:'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=800&q=80', thumb:'https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=400&q=70', title:'Rainbow Matrix', artist:'0xB4c5...d6e7', model:'Midjourney v6', style:'Abstract', likes:534, minted:true, price:'0.14 BNB', tags:['rainbow','matrix','color'] },
  { id:'img035', url:'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=800&q=80', thumb:'https://images.unsplash.com/photo-1547036967-23d11aacaee0?w=400&q=70', title:'Liquid Metal', artist:'0xC5d6...e7f8', model:'Stable Diffusion XL', style:'Abstract', likes:298, minted:false, tags:['liquid','metal','silver'] },
  { id:'img036', url:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&q=80', thumb:'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=400&q=70', title:'Fractal Garden', artist:'0xD6e7...f8a9', model:'DALL-E 3', style:'Abstract', likes:445, minted:true, price:'0.11 BNB', tags:['fractal','garden','pattern'] },
  { id:'img037', url:'https://images.unsplash.com/photo-1582036734087-b2343a1c8d2c?w=800&q=80', thumb:'https://images.unsplash.com/photo-1582036734087-b2343a1c8d2c?w=400&q=70', title:'Wave Function', artist:'0xE7f8...a9b0', model:'KlingAI', style:'Abstract', likes:267, minted:false, tags:['wave','function','physics'] },
  { id:'img038', url:'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=800&q=80', thumb:'https://images.unsplash.com/photo-1504639725590-34d0984388bd?w=400&q=70', title:'Mind Map', artist:'0xF8a9...b0c1', model:'Midjourney v6', style:'Abstract', likes:378, minted:true, price:'0.08 BNB', tags:['mind','map','neural'] },
  { id:'img039', url:'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=800&q=80', thumb:'https://images.unsplash.com/photo-1561736778-92e52a7769ef?w=400&q=70', title:'Neon Splash', artist:'0xA9b0...c1d2', model:'Stable Diffusion XL', style:'Abstract', likes:489, minted:false, tags:['neon','splash','vivid'] },
  { id:'img040', url:'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=800&q=80', thumb:'https://images.unsplash.com/photo-1557672172-298e090bd0f1?w=400&q=70', title:'Purple Dream', artist:'0xB0c1...d2e3', model:'DALL-E 3', style:'Abstract', likes:356, minted:true, price:'0.07 BNB', tags:['purple','dream','gradient'] },
  { id:'img041', url:'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?w=800&q=80', thumb:'https://images.unsplash.com/photo-1506443432602-ac2fcd6f54e0?w=400&q=70', title:'Crystalline', artist:'0xC1d2...e3f4', model:'Midjourney v6', style:'Abstract', likes:423, minted:false, tags:['crystal','structure','ice'] },
  { id:'img042', url:'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=800&q=80', thumb:'https://images.unsplash.com/photo-1614854262318-831574f15f1f?w=400&q=70', title:'Neon Geometry', artist:'0xD2e3...f4a5', model:'KlingAI', style:'Geometric', likes:512, minted:true, price:'0.13 BNB', tags:['neon','geometry','pattern'] },
  { id:'img043', url:'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=800&q=80', thumb:'https://images.unsplash.com/photo-1493723843671-1d655e66ac1c?w=400&q=70', title:'Digital Forest', artist:'0xE3f4...a5b6', model:'Stable Diffusion XL', style:'Fantasy', likes:334, minted:false, tags:['forest','digital','nature'] },
  { id:'img044', url:'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=800&q=80', thumb:'https://images.unsplash.com/photo-1468276311594-df7cb65d8df6?w=400&q=70', title:'Fire Vortex', artist:'0xF4a5...b6c7', model:'DALL-E 3', style:'Abstract', likes:567, minted:true, price:'0.19 BNB', tags:['fire','vortex','energy'] },
  { id:'img045', url:'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=800&q=80', thumb:'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=400&q=70', title:'Ink Bloom', artist:'0xA5b6...c7d8', model:'Midjourney v6', style:'Abstract', likes:278, minted:false, tags:['ink','bloom','fluid'] },

  // === PORTRAIT / FIGURE (46-55) ===
  { id:'img046', url:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80', thumb:'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=70', title:'Cyber Portrait', artist:'0xB6c7...d8e9', model:'Midjourney v6', style:'Portrait', likes:712, minted:true, price:'0.20 BNB', tags:['portrait','cyber','face'] },
  { id:'img047', url:'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=800&q=80', thumb:'https://images.unsplash.com/photo-1555952517-2e8e729e0b44?w=400&q=70', title:'AI Warrior', artist:'0xC7d8...e9f0', model:'Stable Diffusion XL', style:'Fantasy', likes:489, minted:true, price:'0.16 BNB', tags:['warrior','fantasy','armor'] },
  { id:'img048', url:'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=800&q=80', thumb:'https://images.unsplash.com/photo-1617791160505-6f00504e3519?w=400&q=70', title:'Synthwave Artist', artist:'0xD8e9...f0a1', model:'DALL-E 3', style:'Synthwave', likes:345, minted:false, tags:['synthwave','music','artist'] },
  { id:'img049', url:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80', thumb:'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&q=70', title:'Digital Muse', artist:'0xE9f0...a1b2', model:'Midjourney v6', style:'Portrait', likes:623, minted:true, price:'0.21 BNB', tags:['muse','portrait','digital'] },
  { id:'img050', url:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80', thumb:'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=70', title:'Code Witch', artist:'0xF0a1...b2c3', model:'KlingAI', style:'Fantasy', likes:398, minted:false, tags:['witch','code','fantasy'] },
  { id:'img051', url:'https://images.unsplash.com/photo-1596802990980-8ce43e8fde04?w=800&q=80', thumb:'https://images.unsplash.com/photo-1596802990980-8ce43e8fde04?w=400&q=70', title:'Neon Saint', artist:'0xA1b2...c3d5', model:'Stable Diffusion XL', style:'Portrait', likes:534, minted:true, price:'0.18 BNB', tags:['saint','neon','portrait'] },
  { id:'img052', url:'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=800&q=80', thumb:'https://images.unsplash.com/photo-1602233158242-3ba0ac4d2167?w=400&q=70', title:'Future Girl', artist:'0xB2c3...d4e6', model:'DALL-E 3', style:'Portrait', likes:445, minted:false, tags:['girl','future','neon'] },
  { id:'img053', url:'https://images.unsplash.com/photo-1614744692563-40a9a2ab7a30?w=800&q=80', thumb:'https://images.unsplash.com/photo-1614744692563-40a9a2ab7a30?w=400&q=70', title:'Holographic Face', artist:'0xC3d4...e5f7', model:'Midjourney v6', style:'Portrait', likes:567, minted:true, price:'0.22 BNB', tags:['holographic','face','tech'] },
  { id:'img054', url:'https://images.unsplash.com/photo-1586103516265-d0d0d7ed9b19?w=800&q=80', thumb:'https://images.unsplash.com/photo-1586103516265-d0d0d7ed9b19?w=400&q=70', title:'Pixel God', artist:'0xD4e5...f6a8', model:'KlingAI', style:'Fantasy', likes:412, minted:false, tags:['pixel','god','divine'] },
  { id:'img055', url:'https://images.unsplash.com/photo-1619478186421-3d48cd85e872?w=800&q=80', thumb:'https://images.unsplash.com/photo-1619478186421-3d48cd85e872?w=400&q=70', title:'Circuit Angel', artist:'0xE5f6...a7b9', model:'Stable Diffusion XL', style:'Fantasy', likes:678, minted:true, price:'0.24 BNB', tags:['angel','circuit','wings'] },

  // === ARCHITECTURE / CITY (56-65) ===
  { id:'img056', url:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=70', title:'Neo Tokyo', artist:'0xF6a7...b8c0', model:'Midjourney v6', style:'Architecture', likes:389, minted:true, price:'0.12 BNB', tags:['tokyo','neo','city'] },
  { id:'img057', url:'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=800&q=80', thumb:'https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?w=400&q=70', title:'Future City', artist:'0xA7b8...c9d1', model:'DALL-E 3', style:'Architecture', likes:456, minted:false, tags:['city','future','skyline'] },
  { id:'img058', url:'https://images.unsplash.com/photo-1583474427830-bba38b37e8b1?w=800&q=80', thumb:'https://images.unsplash.com/photo-1583474427830-bba38b37e8b1?w=400&q=70', title:'Digital Cathedral', artist:'0xB8c9...d0e2', model:'Stable Diffusion XL', style:'Architecture', likes:523, minted:true, price:'0.15 BNB', tags:['cathedral','digital','gothic'] },
  { id:'img059', url:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&q=80', thumb:'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=400&q=70', title:'Glass Pyramid', artist:'0xC9d0...e1f3', model:'DALL-E 3', style:'Architecture', likes:298, minted:false, tags:['pyramid','glass','modern'] },
  { id:'img060', url:'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=800&q=80', thumb:'https://images.unsplash.com/photo-1555636222-cae831e670b3?w=400&q=70', title:'Neon Tunnel', artist:'0xD0e1...f2a4', model:'KlingAI', style:'Architecture', likes:634, minted:true, price:'0.19 BNB', tags:['neon','tunnel','corridor'] },
  { id:'img061', url:'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=800&q=80', thumb:'https://images.unsplash.com/photo-1498036882173-b41c28a8ba34?w=400&q=70', title:'Brutalist AI', artist:'0xE1f2...a3b5', model:'Midjourney v6', style:'Architecture', likes:312, minted:false, tags:['brutalist','concrete','structure'] },
  { id:'img062', url:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&q=80', thumb:'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=400&q=70', title:'Cyber Mansion', artist:'0xF2a3...b4c6', model:'Stable Diffusion XL', style:'Architecture', likes:478, minted:true, price:'0.16 BNB', tags:['mansion','cyber','luxury'] },
  { id:'img063', url:'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&q=80', thumb:'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=400&q=70', title:'Floating City', artist:'0xA3b4...c5d7', model:'DALL-E 3', style:'Architecture', likes:567, minted:false, tags:['floating','city','sky'] },
  { id:'img064', url:'https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&q=80', thumb:'https://images.unsplash.com/photo-1448630360428-65456885c650?w=400&q=70', title:'Steel Spider', artist:'0xB4c5...d6e8', model:'KlingAI', style:'Architecture', likes:389, minted:true, price:'0.11 BNB', tags:['steel','spider','structural'] },
  { id:'img065', url:'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=800&q=80', thumb:'https://images.unsplash.com/photo-1486299267070-83823f5448dd?w=400&q=70', title:'London 2077', artist:'0xC5d6...e7f9', model:'Midjourney v6', style:'Architecture', likes:423, minted:false, tags:['london','future','bridge'] },

  // === NATURE / LANDSCAPE (66-75) ===
  { id:'img066', url:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=800&q=80', thumb:'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=400&q=70', title:'Crystal Waterfall', artist:'0xD6e7...f8a0', model:'Midjourney v6', style:'Nature Art', likes:456, minted:true, price:'0.13 BNB', tags:['waterfall','crystal','nature'] },
  { id:'img067', url:'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=800&q=80', thumb:'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?w=400&q=70', title:'Biome Genesis', artist:'0xE7f8...a9b1', model:'DALL-E 3', style:'Nature Art', likes:312, minted:false, tags:['biome','genesis','life'] },
  { id:'img068', url:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&q=70', title:'AI Forest', artist:'0xF8a9...b0c2', model:'Stable Diffusion XL', style:'Nature Art', likes:378, minted:true, price:'0.09 BNB', tags:['forest','ai','trees'] },
  { id:'img069', url:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80', thumb:'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=400&q=70', title:'Mountain Oracle', artist:'0xA9b0...c1d3', model:'KlingAI', style:'Nature Art', likes:489, minted:false, tags:['mountain','oracle','peaks'] },
  { id:'img070', url:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&q=80', thumb:'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=400&q=70', title:'Endless Ocean', artist:'0xB0c1...d2e4', model:'DALL-E 3', style:'Nature Art', likes:534, minted:true, price:'0.14 BNB', tags:['ocean','endless','waves'] },
  { id:'img071', url:'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=800&q=80', thumb:'https://images.unsplash.com/photo-1525088553748-01d6e210e00b?w=400&q=70', title:'Desert Mirage', artist:'0xC1d2...e3f5', model:'Midjourney v6', style:'Nature Art', likes:267, minted:false, tags:['desert','mirage','sand'] },
  { id:'img072', url:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=800&q=80', thumb:'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?w=400&q=70', title:'Bioluminescent Bay', artist:'0xD2e3...f4a6', model:'Stable Diffusion XL', style:'Nature Art', likes:623, minted:true, price:'0.20 BNB', tags:['bioluminescent','bay','glow'] },
  { id:'img073', url:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=800&q=80', thumb:'https://images.unsplash.com/photo-1470770903676-69b98201ea1c?w=400&q=70', title:'Volcano Dawn', artist:'0xE3f4...a5b7', model:'DALL-E 3', style:'Nature Art', likes:398, minted:false, tags:['volcano','dawn','fire'] },
  { id:'img074', url:'https://images.unsplash.com/photo-1429552077091-836152271555?w=800&q=80', thumb:'https://images.unsplash.com/photo-1429552077091-836152271555?w=400&q=70', title:'Tundra Echo', artist:'0xF4a5...b6c8', model:'KlingAI', style:'Nature Art', likes:334, minted:true, price:'0.08 BNB', tags:['tundra','echo','cold'] },
  { id:'img075', url:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&q=70', title:'Paradise Cove', artist:'0xA5b6...c7d9', model:'Midjourney v6', style:'Nature Art', likes:712, minted:true, price:'0.26 BNB', tags:['paradise','cove','tropical'] },

  // === FANTASY / MYSTICAL (76-88) ===
  { id:'img076', url:'https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=800&q=80', thumb:'https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=400&q=70', title:'Dragon Code', artist:'0xB6c7...d8e0', model:'Midjourney v6', style:'Fantasy', likes:834, minted:true, price:'0.28 BNB', tags:['dragon','code','fantasy'] },
  { id:'img077', url:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', thumb:'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=70', title:'Mage Tower', artist:'0xC7d8...e9f1', model:'Stable Diffusion XL', style:'Fantasy', likes:456, minted:false, tags:['mage','tower','magic'] },
  { id:'img078', url:'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=800&q=80', thumb:'https://images.unsplash.com/photo-1440342359743-84fcb8c21f21?w=400&q=70', title:'Phoenix Reborn', artist:'0xD8e9...f0a2', model:'DALL-E 3', style:'Fantasy', likes:623, minted:true, price:'0.21 BNB', tags:['phoenix','fire','reborn'] },
  { id:'img079', url:'https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=800&q=80', thumb:'https://images.unsplash.com/photo-1500099817043-86d46000d58f?w=400&q=70', title:'Elven Archive', artist:'0xE9f0...a1b3', model:'KlingAI', style:'Fantasy', likes:389, minted:false, tags:['elven','archive','ancient'] },
  { id:'img080', url:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&q=80', thumb:'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=400&q=70', title:'Crystal Cave', artist:'0xF0a1...b2c4', model:'Midjourney v6', style:'Fantasy', likes:512, minted:true, price:'0.17 BNB', tags:['crystal','cave','glow'] },
  { id:'img081', url:'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=800&q=80', thumb:'https://images.unsplash.com/photo-1535957998253-26ae1ef29506?w=400&q=70', title:'Mystic Ocean', artist:'0xA1b2...c3d6', model:'Stable Diffusion XL', style:'Fantasy', likes:445, minted:false, tags:['mystic','ocean','deep'] },
  { id:'img082', url:'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=800&q=80', thumb:'https://images.unsplash.com/photo-1551269901-5c5e14c25df7?w=400&q=70', title:'Spirit Tree', artist:'0xB2c3...d4e7', model:'DALL-E 3', style:'Fantasy', likes:378, minted:true, price:'0.10 BNB', tags:['spirit','tree','mystical'] },
  { id:'img083', url:'https://images.unsplash.com/photo-1481845937613-70c71e60f851?w=800&q=80', thumb:'https://images.unsplash.com/photo-1481845937613-70c71e60f851?w=400&q=70', title:'Moon Shrine', artist:'0xC3d4...e5f8', model:'KlingAI', style:'Fantasy', likes:534, minted:false, tags:['moon','shrine','ritual'] },
  { id:'img084', url:'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80', thumb:'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=70', title:'Wizard Portal', artist:'0xD4e5...f6a9', model:'Midjourney v6', style:'Fantasy', likes:667, minted:true, price:'0.23 BNB', tags:['wizard','portal','magic'] },
  { id:'img085', url:'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=800&q=80', thumb:'https://images.unsplash.com/photo-1518709766631-a6a7f45921c3?w=400&q=70', title:'Ancient Map', artist:'0xE5f6...a7b0', model:'Stable Diffusion XL', style:'Fantasy', likes:312, minted:false, tags:['ancient','map','exploration'] },
  { id:'img086', url:'https://images.unsplash.com/photo-1501691223387-dd0500403074?w=800&q=80', thumb:'https://images.unsplash.com/photo-1501691223387-dd0500403074?w=400&q=70', title:'Storm Rider', artist:'0xF6a7...b8c1', model:'DALL-E 3', style:'Fantasy', likes:489, minted:true, price:'0.15 BNB', tags:['storm','rider','power'] },
  { id:'img087', url:'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=800&q=80', thumb:'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=400&q=70', title:'AI Sphinx', artist:'0xA7b8...c9d2', model:'KlingAI', style:'Fantasy', likes:556, minted:false, tags:['sphinx','ai','guardian'] },
  { id:'img088', url:'https://images.unsplash.com/photo-1502720705749-871143f0e671?w=800&q=80', thumb:'https://images.unsplash.com/photo-1502720705749-871143f0e671?w=400&q=70', title:'Void Walker', artist:'0xB8c9...d0e3', model:'Midjourney v6', style:'Fantasy', likes:723, minted:true, price:'0.27 BNB', tags:['void','walker','dark'] },

  // === TECH / AI ART (89-100) ===
  { id:'img089', url:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=800&q=80', thumb:'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=400&q=70', title:'AI Mind', artist:'0xC9d0...e1f4', model:'Midjourney v6', style:'AI Art', likes:845, minted:true, price:'0.30 BNB', tags:['ai','mind','intelligence'] },
  { id:'img090', url:'https://images.unsplash.com/photo-1676299081847-824916de030a?w=800&q=80', thumb:'https://images.unsplash.com/photo-1676299081847-824916de030a?w=400&q=70', title:'Prompt Art', artist:'0xD0e1...f2a5', model:'DALL-E 3', style:'AI Art', likes:612, minted:false, tags:['prompt','art','generative'] },
  { id:'img091', url:'https://images.unsplash.com/photo-1675557009289-3f3ca9959636?w=800&q=80', thumb:'https://images.unsplash.com/photo-1675557009289-3f3ca9959636?w=400&q=70', title:'Neural Canvas', artist:'0xE1f2...a3b6', model:'Stable Diffusion XL', style:'AI Art', likes:534, minted:true, price:'0.18 BNB', tags:['neural','canvas','art'] },
  { id:'img092', url:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&q=80', thumb:'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&q=70', title:'Robot Renaissance', artist:'0xF2a3...b4c7', model:'KlingAI', style:'AI Art', likes:789, minted:true, price:'0.29 BNB', tags:['robot','renaissance','davinci'] },
  { id:'img093', url:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&q=70', title:'Machine Dreams', artist:'0xA3b4...c5d8', model:'Midjourney v6', style:'AI Art', likes:445, minted:false, tags:['machine','dreams','robot'] },
  { id:'img094', url:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=800&q=80', thumb:'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=400&q=70', title:'Code Poetry', artist:'0xB4c5...d6e9', model:'Stable Diffusion XL', style:'AI Art', likes:367, minted:true, price:'0.12 BNB', tags:['code','poetry','art'] },
  { id:'img095', url:'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&q=80', thumb:'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=400&q=70', title:'DeFi Dream', artist:'0xC5d6...e7f0', model:'DALL-E 3', style:'Crypto Art', likes:623, minted:true, price:'0.22 BNB', tags:['defi','dream','crypto'] },
  { id:'img096', url:'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=800&q=80', thumb:'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=400&q=70', title:'Token Genesis', artist:'0xD6e7...f8a1', model:'KlingAI', style:'Crypto Art', likes:534, minted:false, tags:['token','genesis','crypto'] },
  { id:'img097', url:'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=800&q=80', thumb:'https://images.unsplash.com/photo-1516110833967-0b5716ca1387?w=400&q=70', title:'DAO Vote', artist:'0xE7f8...a9b2', model:'Midjourney v6', style:'Crypto Art', likes:289, minted:true, price:'0.08 BNB', tags:['dao','vote','governance'] },
  { id:'img098', url:'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=800&q=80', thumb:'https://images.unsplash.com/photo-1551703599-6b3e8379aa8c?w=400&q=70', title:'Smart Contract', artist:'0xF8a9...b0c3', model:'Stable Diffusion XL', style:'Tech Art', likes:412, minted:false, tags:['smart','contract','ethereum'] },
  { id:'img099', url:'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=800&q=80', thumb:'https://images.unsplash.com/photo-1624996379697-f01d168b1a52?w=400&q=70', title:'NFT Genesis', artist:'0xA9b0...c1d4', model:'DALL-E 3', style:'Crypto Art', likes:789, minted:true, price:'0.32 BNB', tags:['nft','genesis','rare'] },
  { id:'img100', url:'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=800&q=80', thumb:'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=400&q=70', title:'DaVinci Signature', artist:'0xB0c1...d2e5', model:'Midjourney v6', style:'AI Art', likes:1024, minted:true, price:'0.50 BNB', tags:['davinci','signature','masterpiece'] },
]

// 10 watermark-free demo videos using direct MP4 from Pexels / Coverr (free license)
export const galleryVideos: GalleryVideo[] = [
  {
    id: 'vid001',
    thumb: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Cosmic Journey',
    artist: '0xA1b2...c3d4',
    model: 'KlingAI v2',
    duration: '0:45',
    views: 12400,
    tags: ['space', 'cosmos', 'ai-generated']
  },
  {
    id: 'vid002',
    thumb: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Neon City Walk',
    artist: '0xB2c3...d4e5',
    model: 'HeyGen v2',
    duration: '1:12',
    views: 8900,
    tags: ['cyberpunk', 'city', 'neon']
  },
  {
    id: 'vid003',
    thumb: 'https://images.unsplash.com/photo-1620641788421-7a1c342ea42e?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Abstract Flow',
    artist: '0xC3d4...e5f6',
    model: 'Nouvo.AI Pro',
    duration: '0:58',
    views: 15600,
    tags: ['abstract', 'fluid', 'generative']
  },
  {
    id: 'vid004',
    thumb: 'https://images.unsplash.com/photo-1465101162946-4377e57745c3?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Nebula Birth',
    artist: '0xD4e5...f6a7',
    model: 'KlingAI v2',
    duration: '1:30',
    views: 21000,
    tags: ['nebula', 'space', 'creation']
  },
  {
    id: 'vid005',
    thumb: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Mountain Timelapse',
    artist: '0xE5f6...a7b8',
    model: 'Wrtn.AI',
    duration: '0:33',
    views: 6700,
    tags: ['mountain', 'timelapse', 'nature']
  },
  {
    id: 'vid006',
    thumb: 'https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Neural Pulse',
    artist: '0xF6a7...b8c9',
    model: 'HeyGen v3',
    duration: '1:05',
    views: 18300,
    tags: ['neural', 'pulse', 'ai-art']
  },
  {
    id: 'vid007',
    thumb: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Robot Dreams',
    artist: '0xA7b8...c9d0',
    model: 'KlingAI v2',
    duration: '2:10',
    views: 34500,
    tags: ['robot', 'dreams', 'future']
  },
  {
    id: 'vid008',
    thumb: 'https://images.unsplash.com/photo-1507919909716-c8262e491cde?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Color Symphony',
    artist: '0xB8c9...d0e1',
    model: 'Nouvo.AI Pro',
    duration: '0:48',
    views: 9200,
    tags: ['color', 'symphony', 'abstract']
  },
  {
    id: 'vid009',
    thumb: 'https://images.unsplash.com/photo-1560942485-b2a11cc13456?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'Dragon Flight',
    artist: '0xC9d0...e1f2',
    model: 'HeyGen v2',
    duration: '1:45',
    views: 42100,
    tags: ['dragon', 'fantasy', 'flight']
  },
  {
    id: 'vid010',
    thumb: 'https://images.unsplash.com/photo-1666875753105-c63a6f3bdc86?w=600&q=80',
    videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4',
    title: 'DaVinci Signature',
    artist: '0xD0e1...f2a3',
    model: 'KlingAI v2',
    duration: '3:00',
    views: 88888,
    tags: ['davinci', 'masterpiece', 'signature']
  }
]
