import { getNfeURL } from './autorizadores'
import axios from 'axios'
import https from 'https'
import { type ModeloDocumento, type TipoAmbiente, TipoServicoNFe } from './types/nfe/tipos'
import { type UfEmi } from './types/uf'
import { getUfIbge } from './utils/uf/ufHelper'

const httpsAgent = new https.Agent({ rejectUnauthorized: false })
const xmlns = `xmlns = 'http://www.portalfiscal.inf.br/nfe'`
const versao4 = `versao="4.00"`

export const enveloparSoap = (xml: string): string => {
  return `<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body>${xml}</soap12:Body></soap12:Envelope>`
}

// https://www.sefaz.rs.gov.br/NFE/NFE-VAL.aspx

export const getNfeStatusServico = async (
  ufEmi: UfEmi,
  modeloDocumento: ModeloDocumento,
  tipoAmbiente: TipoAmbiente
) => {
  const url = getNfeURL(ufEmi, modeloDocumento, tipoAmbiente, TipoServicoNFe.NfeStatusServico)
  const ufIbge = getUfIbge(ufEmi)
  const xmls = `<consStatServ ${xmlns} ${versao4}><xServ>STATUS</xServ><cUF>${ufIbge}</cUF><tpAmb>${tipoAmbiente}</tpAmb></consStatServ>`
  const body = enveloparSoap(xmls)
  const result = await axios.post(url, body, {
    headers: {
      //'User-Agent': `node-mde/${VERSION}`,
      'Content-Type': 'application/soap+xml; charset=utf-8',
    },
    httpsAgent: httpsAgent,
  })
  console.log(result)
  return result
}
