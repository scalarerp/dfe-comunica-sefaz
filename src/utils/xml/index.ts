import * as xml2js from 'xml2js'

// let qrCodeXml = XmlHelper.serializeXml(qrCodeObj, 'infNFeSupl')
//   .replace('>]]>', ']]>')
//   .replace('<![CDATA[<', '<![CDATA[')
// let xmlLote = XmlHelper.serializeXml(enviNFe, 'enviNFe')

export const serializeXml = (obj: any, rootTag: string) => {
  let builder = new xml2js.Builder({
    rootName: rootTag,
    headless: true,
    renderOpts: {
      pretty: false,
    },
    cdata: true,
  })
  return builder.buildObject(obj)
}

// if (!nfeObj) {
//     let xmlObj = XmlHelper.deserializeXml(xmlLote, { explicitArray: false })
//     result.nfe = Object(xmlObj).enviNFe.NFe
// }
// const nfe_enviada = Object(
//   XmlHelper.deserializeXml(result.envioNF.xml_enviado, { explicitArray: false })
// )

export const deserializeXml = (xml: string, options?: xml2js.OptionsV2) => {
  let resultObj

  if (!options) {
    options = {
      mergeAttrs: true,
      ignoreAttrs: true,
      explicitArray: false,
    }
  }

  let parser = new xml2js.Parser(options)

  parser.parseString(xml, function (err: any, result: any) {
    if (err) {
      throw new Error('Erro ao deserializar XML' + err)
    }
    resultObj = result
  })

  return resultObj
}
