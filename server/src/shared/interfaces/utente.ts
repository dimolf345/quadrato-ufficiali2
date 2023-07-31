import { Schema } from "mongoose"

type Utente = {
  _id: Schema.Types.ObjectId
  email: string;
  password: string;
  admin: boolean;
}

export default Utente