import express, { Express, Request, Response } from 'express'
import dotenv from 'dotenv'

// Configuration the .env file
dotenv.config()

//  Create Express APP
const app: Express = express()
// Esto haría que nuestra aplicación se despliegue en el puerto 800
const port: string | number = process.env.PORT || 8000

// Define the first Route of APP
// Por defecto un get devuelve un 200
app.get('/', (req: Request, res: Response) => {
  // Send Hello Wo    rld
  res.send('Welcome to API Restful Express + Nodemon + Jest + TS + Swagger')
})

app.get('/hello', (req: Request, res: Response) => {
  // Send Hello World
  res.send('Welcome to GET Route: ¡Hello World!')
})

app.get('/bye', (req: Request, res: Response) => {
  // Send Hello World
  res.send('Good bye world')
})

// Execute APP and Listen Request to PORT
app.listen(port, () => {
  console.log(`Express SERVER: Running at http://localhost:${port}`)
})
