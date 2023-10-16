// https://www.sefaz.rs.gov.br/NFE/NFE-VAL.aspx

import { getNfeURL } from 'lib/autorizadores'
import { soapXmlPost } from 'lib/https'
import { type ModeloDocumento, type TipoAmbiente, TipoServicoNFe } from 'lib/types/nfe/basicTypes'
import { type UfEmi } from 'lib/types/uf'
import { xmlnamespace, versao4 } from 'lib/utils/constants'
import { getUfIbge } from 'lib/utils/uf/ufHelper'

export const consultaStatusServico = async (
  ufEmi: UfEmi,
  modeloDocumento: ModeloDocumento,
  tipoAmbiente: TipoAmbiente
) => {
  const url = getNfeURL(ufEmi, modeloDocumento, tipoAmbiente, TipoServicoNFe.NfeStatusServico)
  const ufIbge = getUfIbge(ufEmi)
  const xmlBody = `<consStatServ ${xmlnamespace} ${versao4}><xServ>STATUS</xServ><cUF>${ufIbge}</cUF><tpAmb>${tipoAmbiente}</tpAmb></consStatServ>`
  const result = await soapXmlPost(url, xmlBody)
  return result
}
