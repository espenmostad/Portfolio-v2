import { serve } from '@hono/node-server'
import { readFile } from "node:fs/promises";
import { Hono } from 'hono'

const app = new Hono()

app.get('/', (c) => {
  return c.text('Hello Hono!')
})

app.get("/projects", async (c: { json: (arg0: any) => any; }) => {
  const data = await readFile("./src/data.json", "utf-8");
  //return c.json(data);
  return c.json(JSON.parse(data));
  //return c.json({"id": 1});
});

async function fetchJokes() {
  // Fetch data fra server og legg det til i listen over
 

}
const port = 3000
console.log(`Server is running on port ${port}`)

serve({
  fetch: app.fetch,
  port
})
