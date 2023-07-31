import { Schema } from "mongoose";

type Quota = {
  _id?: Schema.Types.ObjectId;
  creatoDa: Schema.Types.ObjectId;
  assegnatoA: Date;
  dataRiferimento: Date
  causale: string;
  pagata: boolean;
  importo: number;
  note: string;
}


export default Quota