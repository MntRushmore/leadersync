import { Hono } from 'hono'
import { handle } from '@hono/node-server/vercel'
import { renderer } from '../src/renderer'
import { LandingPage } from '../src/pages/landing'
import { LoginPage } from '../src/pages/login'
import { RegisterPage } from '../src/pages/register'
import { AboutPage } from '../src/pages/about'
import { RoleSelectPage } from '../src/pages/role-select'

const app = new Hono()

app.use(renderer)

app.get('/', (c) => c.render(<LandingPage />))
app.get('/login', (c) => c.render(<LoginPage />))
app.get('/register', (c) => c.render(<RegisterPage />))
app.get('/about', (c) => c.render(<AboutPage />))
app.get('/role-select', (c) => c.render(<RoleSelectPage />))

app.all('*', (c) => c.redirect('/'))

export const config = {
  runtime: 'nodejs',
  maxDuration: 30,
}

export default handle(app)
