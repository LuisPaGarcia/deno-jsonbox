// Import the oak utils for app and router. Oak works similar than Express in Node
import { Application, Router } from 'https://deno.land/x/oak/mod.ts'
import { logger1 } from './methods/logger.ts'
import { logger2 } from './methods/logger.ts'
import { get } from './methods/jsonbox/get.ts'
import { post } from './methods/jsonbox/post.ts'

// Let use the host parameters, but we set default values
const PORT = 8000
const HOST = 'localhost'

// Start instances of app and router
const app = new Application()
const router = new Router()

// Log in console all interactions
app.use(logger1)
app.use(logger2)

// This API will have only an get method
router.get('/get', get)
router.post('/post', post)

// We let the app use the routes define above
app.use(router.routes())
app.use(router.allowedMethods())

// Start the app in the host and the port setted
const HOST_PORT = `${HOST}:${PORT}`
console.log(`Listen on ${HOST_PORT}`)
app.listen(HOST_PORT)
