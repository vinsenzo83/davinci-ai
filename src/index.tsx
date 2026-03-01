import { Hono } from 'hono'
import { serveStatic } from 'hono/cloudflare-workers'
import { homePage } from './pages/home'
import { loginPage } from './pages/login'
import { myPage } from './pages/mypage'
import { createImagePage } from './pages/create-image'
import { createVideoPage } from './pages/create-video'
import { whitepaperPage } from './pages/whitepaper'

const app = new Hono()

app.use('/static/*', serveStatic({ root: './' }))

app.get('/', (c) => c.html(homePage))
app.get('/login', (c) => c.html(loginPage))
app.get('/mypage', (c) => c.html(myPage))
app.get('/create/image', (c) => c.html(createImagePage))
app.get('/create/video', (c) => c.html(createVideoPage))
app.get('/whitepaper', (c) => c.html(whitepaperPage))

export default app
