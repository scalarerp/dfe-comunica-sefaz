// import { UfEmi } from 'types/uf'

// const getContentType = (ufEmi: UfEmi): string => {
//   switch (ufEmi) {
//     case 'GO':
//       return 'application/soap+xml'
//     default:
//       return 'text/xml;charset=utf-8'
//   }
// }

export const nfe4_0Mod55WS = [
  {
    sigla: 'AM',
    homologacao: {
      NfeStatusServico: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeStatusServico4',
      NfeAutorizacao: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4',
      NfeConsultaProtocolo: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeConsulta4',
      NfeInutilizacao: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4',
      NfeRetAutorizacao: 'https://homnfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4',
      RecepcaoEvento: 'https://homnfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4',
      NfeConsultaCadastro: '',
    },
    producao: {
      NfeStatusServico: 'https://nfe.sefaz.am.gov.br/services2/services/NfeStatusServico4',
      NfeAutorizacao: 'https://nfe.sefaz.am.gov.br/services2/services/NfeAutorizacao4',
      NfeConsultaProtocolo: 'https://nfe.sefaz.am.gov.br/services2/services/NfeConsulta4',
      NfeInutilizacao: 'https://nfe.sefaz.am.gov.br/services2/services/NfeInutilizacao4',
      NfeRetAutorizacao: 'https://nfe.sefaz.am.gov.br/services2/services/NfeRetAutorizacao4',
      RecepcaoEvento: 'https://nfe.sefaz.am.gov.br/services2/services/RecepcaoEvento4',
      NfeConsultaCadastro: '',
    },
  },
  {
    sigla: 'AN',
    homologacao: {
      RecepcaoEvento: 'https://hom1.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeDistribuicaoDFe:
        'https://hom1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
      NfeConsultaDest: 'https://hom.nfe.fazenda.gov.br/NFeConsultaDest/NFeConsultaDest.asmx',
      NfeDownloadNF: 'https://hom.nfe.fazenda.gov.br/NfeDownloadNF/NfeDownloadNF.asmx',
      RecepcaoEPEC: 'https://hom.nfe.fazenda.gov.br/RecepcaoEvento/RecepcaoEvento.asmx',
    },
    producao: {
      RecepcaoEvento: 'https://www.nfe.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeDistribuicaoDFe:
        'https://www1.nfe.fazenda.gov.br/NFeDistribuicaoDFe/NFeDistribuicaoDFe.asmx',
      NfeConsultaDest: 'https://www.nfe.fazenda.gov.br/NFeConsultaDest/NFeConsultaDest.asmx',
      NfeDownloadNF: 'https://www.nfe.fazenda.gov.br/NfeDownloadNF/NfeDownloadNF.asmx',
      RecepcaoEPEC: 'https://www.nfe.fazenda.gov.br/RecepcaoEvento/RecepcaoEvento.asmx',
    },
  },
  {
    sigla: 'BA',
    homologacao: {
      NfeStatusServico:
        'https://hnfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx',
      NfeAutorizacao:
        'https://hnfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://hnfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
      NfeInutilizacao:
        'https://hnfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://hnfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
      RecepcaoEvento:
        'https://hnfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeConsultaCadastro:
        'https://hnfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx',
    },
    producao: {
      NfeStatusServico:
        'https://nfe.sefaz.ba.gov.br/webservices/NFeStatusServico4/NFeStatusServico4.asmx',
      NfeAutorizacao:
        'https://nfe.sefaz.ba.gov.br/webservices/NFeAutorizacao4/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://nfe.sefaz.ba.gov.br/webservices/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
      NfeInutilizacao:
        'https://nfe.sefaz.ba.gov.br/webservices/NFeInutilizacao4/NFeInutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://nfe.sefaz.ba.gov.br/webservices/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
      RecepcaoEvento:
        'https://nfe.sefaz.ba.gov.br/webservices/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeConsultaCadastro:
        'https://nfe.sefaz.ba.gov.br/webservices/CadConsultaCadastro4/CadConsultaCadastro4.asmx',
    },
  },
  {
    sigla: 'GO',
    homologacao: {
      NfeStatusServico: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeStatusServico4',
      NfeAutorizacao: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://homolog.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://homolog.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4',
    },
    producao: {
      NfeStatusServico: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeStatusServico4',
      NfeAutorizacao: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://nfe.sefaz.go.gov.br/nfe/services/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://nfe.sefaz.go.gov.br/nfe/services/CadConsultaCadastro4',
    },
  },
  {
    sigla: 'MG',
    homologacao: {
      NfeStatusServico: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4',
      NfeAutorizacao: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://hnfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4',
    },
    producao: {
      NfeStatusServico: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeStatusServico4',
      NfeAutorizacao: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://nfe.fazenda.mg.gov.br/nfe2/services/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://nfe.fazenda.mg.gov.br/nfe2/services/CadConsultaCadastro4',
    },
  },
  {
    sigla: 'MS',
    homologacao: {
      NfeStatusServico: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeStatusServico4',
      NfeAutorizacao: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://hom.nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://hom.nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4',
    },
    producao: {
      NfeStatusServico: 'https://nfe.sefaz.ms.gov.br/ws/NFeStatusServico4',
      NfeAutorizacao: 'https://nfe.sefaz.ms.gov.br/ws/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://nfe.sefaz.ms.gov.br/ws/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://nfe.sefaz.ms.gov.br/ws/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://nfe.sefaz.ms.gov.br/ws/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://nfe.sefaz.ms.gov.br/ws/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://nfe.sefaz.ms.gov.br/ws/CadConsultaCadastro4',
    },
  },
  {
    sigla: 'MT',
    homologacao: {
      NfeStatusServico: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4',
      NfeAutorizacao: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4',
      NfeConsultaProtocolo: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4',
      NfeInutilizacao: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4',
      NfeRetAutorizacao: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4',
      RecepcaoEvento: 'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4',
      NfeConsultaCadastro:
        'https://homologacao.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4',
    },
    producao: {
      NfeStatusServico: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeStatusServico4',
      NfeAutorizacao: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeAutorizacao4',
      NfeConsultaProtocolo: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeConsulta4',
      NfeInutilizacao: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeInutilizacao4',
      NfeRetAutorizacao: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/NfeRetAutorizacao4',
      RecepcaoEvento: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/RecepcaoEvento4',
      NfeConsultaCadastro: 'https://nfe.sefaz.mt.gov.br/nfews/v2/services/CadConsultaCadastro4',
    },
  },
  {
    sigla: 'PE',
    homologacao: {
      NfeStatusServico: 'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4',
      NfeAutorizacao: 'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4',
      NfeConsultaProtocolo:
        'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4',
      NfeRetAutorizacao:
        'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4',
      NfeConsultaCadastro:
        'https://nfehomolog.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4',
    },
    producao: {
      NfeStatusServico: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeStatusServico4',
      NfeAutorizacao: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeAutorizacao4',
      NfeConsultaProtocolo:
        'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://nfe.sefaz.pe.gov.br/nfe-service/services/CadConsultaCadastro4',
    },
  },
  {
    sigla: 'PR',
    homologacao: {
      NfeStatusServico: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeStatusServico4',
      NfeAutorizacao: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://homologacao.nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4',
    },
    producao: {
      NfeStatusServico: 'https://nfe.sefa.pr.gov.br/nfe/NFeStatusServico4',
      NfeAutorizacao: 'https://nfe.sefa.pr.gov.br/nfe/NFeAutorizacao4',
      NfeConsultaProtocolo: 'https://nfe.sefa.pr.gov.br/nfe/NFeConsultaProtocolo4',
      NfeInutilizacao: 'https://nfe.sefa.pr.gov.br/nfe/NFeInutilizacao4',
      NfeRetAutorizacao: 'https://nfe.sefa.pr.gov.br/nfe/NFeRetAutorizacao4',
      RecepcaoEvento: 'https://nfe.sefa.pr.gov.br/nfe/NFeRecepcaoEvento4',
      NfeConsultaCadastro: 'https://nfe.sefa.pr.gov.br/nfe/CadConsultaCadastro4',
    },
  },
  {
    sigla: 'RS',
    homologacao: {
      NfeStatusServico:
        'https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
      NfeAutorizacao:
        'https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx',
      NfeInutilizacao:
        'https://nfe-homologacao.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://nfe-homologacao.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
      RecepcaoEvento:
        'https://nfe-homologacao.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx',
      NfeConsultaCadastro:
        'https://cad.sefazrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx',
    },
    producao: {
      NfeStatusServico: 'https://nfe.sefazrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
      NfeAutorizacao: 'https://nfe.sefazrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo: 'https://nfe.sefazrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx',
      NfeInutilizacao: 'https://nfe.sefazrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://nfe.sefazrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
      RecepcaoEvento: 'https://nfe.sefazrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx',
      NfeConsultaCadastro:
        'https://cad.sefazrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx',
    },
  },
  {
    sigla: 'SP',
    homologacao: {
      NfeStatusServico: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx',
      NfeAutorizacao: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx',
      NfeInutilizacao: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx',
      NfeRetAutorizacao: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
      RecepcaoEvento: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx',
      NfeConsultaCadastro: 'https://homologacao.nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx',
    },
    producao: {
      NfeStatusServico: 'https://nfe.fazenda.sp.gov.br/ws/nfestatusservico4.asmx',
      NfeAutorizacao: 'https://nfe.fazenda.sp.gov.br/ws/nfeautorizacao4.asmx',
      NfeConsultaProtocolo: 'https://nfe.fazenda.sp.gov.br/ws/nfeconsultaprotocolo4.asmx',
      NfeInutilizacao: 'https://nfe.fazenda.sp.gov.br/ws/nfeinutilizacao4.asmx',
      NfeRetAutorizacao: 'https://nfe.fazenda.sp.gov.br/ws/nferetautorizacao4.asmx',
      RecepcaoEvento: 'https://nfe.fazenda.sp.gov.br/ws/nferecepcaoevento4.asmx',
      NfeConsultaCadastro: 'https://nfe.fazenda.sp.gov.br/ws/cadconsultacadastro4.asmx',
    },
  },
  {
    sigla: 'SVAN',
    homologacao: {
      NfeStatusServico:
        'https://hom.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
      NfeAutorizacao:
        'https://hom.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://hom.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
      NfeInutilizacao:
        'https://hom.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://hom.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
      RecepcaoEvento:
        'https://hom.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeConsultaCadastro: '',
    },
    producao: {
      NfeStatusServico:
        'https://www.sefazvirtual.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
      NfeAutorizacao:
        'https://www.sefazvirtual.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://www.sefazvirtual.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
      NfeInutilizacao:
        'https://www.sefazvirtual.fazenda.gov.br/NFeInutilizacao4/NFeInutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://www.sefazvirtual.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
      RecepcaoEvento:
        'https://www.sefazvirtual.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeConsultaCadastro: '',
    },
  },
  {
    sigla: 'SVRS',
    homologacao: {
      NfeStatusServico:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
      NfeAutorizacao:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx',
      NfeInutilizacao:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
      RecepcaoEvento:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx',
      NfeConsultaCadastro: '',
    },
    producao: {
      NfeStatusServico: 'https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
      NfeAutorizacao: 'https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo: 'https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx',
      NfeInutilizacao: 'https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx',
      NfeRetAutorizacao: 'https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
      RecepcaoEvento: 'https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx',
      NfeConsultaCadastro:
        'https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx',
    },
  },
  {
    sigla: 'SVCAN',
    homologacao: {
      NfeStatusServico: 'https://hom.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
      NfeAutorizacao: 'https://hom.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://hom.svc.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
      NfeInutilizacao: '',
      NfeRetAutorizacao:
        'https://hom.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
      RecepcaoEvento: 'https://hom.svc.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeConsultaCadastro: '',
    },
    producao: {
      NfeStatusServico: 'https://www.svc.fazenda.gov.br/NFeStatusServico4/NFeStatusServico4.asmx',
      NfeAutorizacao: 'https://www.svc.fazenda.gov.br/NFeAutorizacao4/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://www.svc.fazenda.gov.br/NFeConsultaProtocolo4/NFeConsultaProtocolo4.asmx',
      NfeInutilizacao: '',
      NfeRetAutorizacao:
        'https://www.svc.fazenda.gov.br/NFeRetAutorizacao4/NFeRetAutorizacao4.asmx',
      RecepcaoEvento: 'https://www.svc.fazenda.gov.br/NFeRecepcaoEvento4/NFeRecepcaoEvento4.asmx',
      NfeConsultaCadastro: '',
    },
  },
  {
    sigla: 'SVCRS',
    homologacao: {
      NfeStatusServico:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
      NfeAutorizacao:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx',
      NfeInutilizacao:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx',
      NfeRetAutorizacao:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
      RecepcaoEvento:
        'https://nfe-homologacao.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx',
      NfeConsultaCadastro: '',
    },
    producao: {
      NfeStatusServico: 'https://nfe.svrs.rs.gov.br/ws/NfeStatusServico/NfeStatusServico4.asmx',
      NfeAutorizacao: 'https://nfe.svrs.rs.gov.br/ws/NfeAutorizacao/NFeAutorizacao4.asmx',
      NfeConsultaProtocolo: 'https://nfe.svrs.rs.gov.br/ws/NfeConsulta/NfeConsulta4.asmx',
      NfeInutilizacao: 'https://nfe.svrs.rs.gov.br/ws/nfeinutilizacao/nfeinutilizacao4.asmx',
      NfeRetAutorizacao: 'https://nfe.svrs.rs.gov.br/ws/NfeRetAutorizacao/NFeRetAutorizacao4.asmx',
      RecepcaoEvento: 'https://nfe.svrs.rs.gov.br/ws/recepcaoevento/recepcaoevento4.asmx',
      NfeConsultaCadastro:
        'https://cad.svrs.rs.gov.br/ws/cadconsultacadastro/cadconsultacadastro4.asmx',
    },
  },
]
