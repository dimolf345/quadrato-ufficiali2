type Ufficiale = {
  _id: string;
  grado: typeof gradi[number]
  nome: string;
  cognome: string;
  dataImbarco: Date;
  dataSbarco: Date;
  email: string;
  pt?: string;
  temporaneoImbarco: boolean;
  attivo: boolean
}


const gradi = [
  'A.S',
  'A.D.',
  'CA',
  'C.V.',
  'C.F.',
  'C.C.',
  'T.V.',
  'S.T.V.',
  'GM',
  'ASP GM'
]


export default Ufficiale