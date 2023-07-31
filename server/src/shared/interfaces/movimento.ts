import { Schema } from "mongoose"

type Movimento = {
  _id: Schema.Types.ObjectId
  creatoDa: Schema.Types.ObjectId
  dataMovimento: Date
  importo: number 
  categoria: typeof categorie[number]
}

categorie = [
  'alcolici',
  'regali',
  'gamella',
  'caffè',
  'rappresentanza',
  'altro'
]