import { serve } from '@hono/node-server'
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get('/projects', async (c) => {
  const response = await fetch('http://localhost:3000', {method: 'GET'});
  const dataFromServer: string | any[] = []
  if(!dataFromServer.length) return
  return [dataFromServer];
})


async function fetchJokes() {
  // Fetch data fra server og legg det til i listen over
 

}
const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
