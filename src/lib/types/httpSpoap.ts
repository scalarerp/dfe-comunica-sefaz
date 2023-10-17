import { type ModeloDocumento, type TipoAmbiente } from './nfe/basicTypes'
import { type UfEmi } from './uf'

export interface IHttpSoap {
  url: string
  xmlBody: string
  certificado: string
  senha: string
  envelopSoap?: boolean
}

export interface IConsultaStatusServico {
  ufEmi: UfEmi
  modeloDocumento: ModeloDocumento
  tipoAmbiente: TipoAmbiente
  certificado: string
  senha: string
}
