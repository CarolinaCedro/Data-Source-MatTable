//{
//   "email": "dep.abiliobrunini@camara.leg.br",
//   "id": 220593,
//   "idLegislatura": 57,
//   "nome": "Abilio Brunini",
//   "siglaPartido": "PL",
//   "siglaUf": "MT",
//   "uri": "https://dadosabertos.camara.leg.br/api/v2/deputados/220593",
//   "uriPartido": "https://dadosabertos.camara.leg.br/api/v2/partidos/37906"
// }

export interface Deputado {

  dados: []
  email: string
  id: string
  idLegislatura: number
  nome: string
  siglaPartido: string
  siglaUf: string
  uri: string
  uriPartido: string


}
