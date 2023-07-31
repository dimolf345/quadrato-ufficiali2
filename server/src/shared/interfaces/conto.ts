import { Schema } from "mongoose"

type Conto = {
  _id: Schema.Types.ObjectId
  saldoIniziale: number;
  dataInizio: Date;
  dataFine: Date | undefined;
  saldoAttuale: number;
  attivo: boolean;
  movimenti: [Schema.Types.ObjectId]
  errore: boolean
}

export default Conto