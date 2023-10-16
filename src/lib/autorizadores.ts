import { nfe4_0Mod55WS } from './nfe4_0Mod55WS'
import { nfe4_0Mod65WS } from './nfe4_0Mod65WS'
import { ModeloDocumento, TipoAmbiente, TipoServicoNFe } from './types/nfe/basicTypes'
import { type UfEmi, type IAutorizador } from './types/uf'

export const getNfeURL = (
  ufEmi: UfEmi,
  modeloDocumento: ModeloDocumento,
  tipoAmbiente: TipoAmbiente,
  tipoServicoNFe: TipoServicoNFe
) => {
  const autorizador =
    modeloDocumento === ModeloDocumento.NFe
      ? getAutorizadorNFEByUF(ufEmi)
      : getAutorizadorNFCEByUF(ufEmi)

  const _urlTudo =
    modeloDocumento === ModeloDocumento.NFe
      ? nfe4_0Mod55WS.find((x) => x.sigla === autorizador)
      : nfe4_0Mod65WS.find((x) => x.sigla === autorizador)

  const _u = tipoAmbiente === TipoAmbiente.Producao1 ? _urlTudo?.producao : _urlTudo?.homologacao

  let result = ''

  if (_u) {
    switch (tipoServicoNFe) {
      case TipoServicoNFe.NfeAutorizacao:
        result = _u.NfeAutorizacao!
        break
      case TipoServicoNFe.NfeRetAutorizacao:
        result = _u.NfeRetAutorizacao!
        break
      case TipoServicoNFe.NfeInutilizacao:
        result = _u.NfeInutilizacao!
        break
      case TipoServicoNFe.NfeConsultaProtocolo:
        result = _u.NfeConsultaProtocolo!
        break
      case TipoServicoNFe.NfeStatusServico:
        result = _u.NfeStatusServico!
        break
      case TipoServicoNFe.RecepcaoEvento:
        result = _u.RecepcaoEvento!
        break
      // case TipoServicoNFe.CscNFCe:
      //   result = _u?.CscNFCe!
      //   break
      default:
        break
    }
  }

  if (!result || result === '') {
    throw new Error(
      `getNfeURL NFCE não encontrado para   UfEmi: ${ufEmi} ModeloDocumento: ${modeloDocumento} TipoAmbiente: ${tipoAmbiente} TipoServicoNFe: ${tipoServicoNFe}`
    )
  }
  return result
}

const getAutorizadorNFEByUF = (ufEmi: UfEmi): IAutorizador => {
  switch (ufEmi) {
    case 'AC':
    case 'AL':
    case 'AP':
    case 'DF':
    case 'ES':
    case 'PB':
    case 'PI':
    case 'RJ':
    case 'RN':
    case 'RO':
    case 'RR':
    case 'SC':
    case 'SE':
    case 'TO':
      return 'SVRS'

    case 'AM':
      return 'AM'
    case 'BA':
      return 'BA'
    case 'CE':
      return 'CE'
    case 'GO':
      return 'GO'
    case 'MG':
      return 'MG'
    case 'MS':
      return 'MS'
    case 'MT':
      return 'MT'
    case 'PE':
      return 'PE'
    case 'PR':
      return 'PR'
    case 'RS':
      return 'RS'
    case 'SP':
      return 'SP'
    case 'MA':
    case 'PA':
      return 'SVAN'

    default:
      throw new Error('Autorizador NFE não encontrado!')
  }
}

const getAutorizadorNFCEByUF = (ufEmi: UfEmi): IAutorizador => {
  switch (ufEmi) {
    case 'AC':
    case 'AL':
    case 'AP':
    case 'BA':
    case 'DF':
    case 'ES':
    case 'MA':
    case 'PA':
    case 'PB':
    case 'PE':
    case 'PI':
    case 'RJ':
    case 'RN':
    case 'RO':
    case 'RR':
    case 'SE':
    case 'TO':
      return 'SVRS'

    case 'AM':
      return 'AM'
    case 'CE':
      return 'CE'
    case 'GO':
      return 'GO'
    case 'MT':
      return 'MT'
    case 'MS':
      return 'MS'
    case 'MG':
      return 'MG'
    case 'PR':
      return 'PR'
    case 'RS':
      return 'RS'
    case 'SP':
      return 'SP'

    default:
      throw new Error('Autorizador NFCE não encontrado!')
  }
}
