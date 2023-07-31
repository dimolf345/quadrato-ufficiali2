import 'dotenv/config'
import mongoose from "mongoose";

export async function connettiDB() {
  const dbURI = risolviDBURI()  
  if(!dbURI) throw new Error('Impossibile connettere al DB. Indirizzo mancante')
  // per risolvere eventuali problemi di retrocompatibilità
  mongoose.set('strictQuery', false)

  mongoose.connection.once('open', () => {
    console.log(`Connesso a MongoDB. Env -${process.env.NODE_ENV}`)
  })

  mongoose.connection.on('error', (err) => {
    console.error(err)
  })
  await mongoose.connect(dbURI)
}


function risolviDBURI(): string {
  const env = process.env.NODE_ENV
  let dbURI= ''
  switch(env) {
    case 'development':
    dbURI = process.env.MONGO_LOCAL_URI || ''
    break;
    case 'test':
    dbURI = process.env.MONGO_TEST_URI || ''
    break;
    default:
    dbURI = process.env.MONGO_CLOUD_URI || ''
  }
  return dbURI
}