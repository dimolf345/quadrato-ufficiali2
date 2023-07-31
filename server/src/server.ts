import 'dotenv/config'
import http from 'http'
import app from './app'
import { connettiDB } from "./db/connettiDB";


const PORT = process.env.PORT || 8000

const server = http.createServer(app)

async function avviaServer() {
  try {
    await connettiDB()
    server.listen(PORT, async() => {
      console.log(`Server avviato su porta ${PORT}`)
    })
  }
  catch(err) {
    console.log(err)
  }
}

avviaServer()



process.on('unhandledRejection', (stringaErr: string)=> {
  throw new Error(stringaErr)
} )

process.on('uncaughtException', (err)=> {
  console.log('UNCAUGHT EXCEPTION, riavvio il server')
  console.log(err)
  server.close(()=> {process.exit(1)})
} )