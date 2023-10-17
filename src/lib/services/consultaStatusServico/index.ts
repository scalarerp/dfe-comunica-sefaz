// https://www.sefaz.rs.gov.br/NFE/NFE-VAL.aspx

import { getNfeURL } from 'lib/autorizadores'
import { soapXmlPost } from 'lib/https'
import { type IConsultaStatusServico } from 'lib/types/httpSpoap'
import { TipoServicoNFe } from 'lib/types/nfe/basicTypes'
import { xmlnamespace, versao4 } from 'lib/utils/constants'
import { getUfIbge } from 'lib/utils/uf/ufHelper'
import { type IHttpSoap } from 'lib/types/httpSpoap'

export const consultaStatusServico = async (options: IConsultaStatusServico) => {
  const { ufEmi, modeloDocumento, tipoAmbiente, certificado, senha } = options

  console.log(options)

  const url = getNfeURL(ufEmi, modeloDocumento, tipoAmbiente, TipoServicoNFe.NfeStatusServico)
  const ufIbge = getUfIbge(ufEmi)
  const xmlBody = `<consStatServ ${xmlnamespace} ${versao4}><tpAmb>${tipoAmbiente}</tpAmb><cUF>${ufIbge}</cUF><xServ>STATUS</xServ></consStatServ>`

  const soapOptions: IHttpSoap = {
    url: url,
    xmlBody: xmlBody,
    certificado: certificado,
    senha: senha,
  }
  console.log(soapOptions)

  const result = await soapXmlPost(soapOptions)

  return result
}
