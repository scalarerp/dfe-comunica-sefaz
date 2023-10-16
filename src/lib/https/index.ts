import axios from 'axios'
import https from 'https'
import { envelopeSoap } from 'lib/utils/xml/xmlHelper'

const httpsAgent = new https.Agent({
  rejectUnauthorized: false,
  cert: 'Certificate',
  key: '123',
  ca: 'aaa',
})

// let cert_file = fs.readFileSync('./ssl/my_self_signed_certificate.crt')
// let ca_file = fs.readFileSync('./ssl/my_self_signed_certificate_ca.crt')
// const agent = new https.Agent({
//   cert: cert_file,
//   ca: ca_file,
// })
// const CA = '-----BEGIN CERTIFICATE-----$$$$$-----END CERTIFICATE-----'
// const url = 'bla'
// const httpsAgent = new https.Agent({
//   ca: CA,
// })

export const soapXmlPost = async (url: string, xmlBody: string, envelopSoap = true) => {
  const body = envelopSoap ? envelopeSoap(xmlBody) : xmlBody

  const result = await axios.post(url, body, {
    headers: {
      'User-Agent': `scalar-comunica-dfe/0-1`,
      // 'User-Agent': `scalar-comunica-dfe/${VERSION}`,
      'Content-Type': 'application/soap+xml; charset=utf-8',
    },
    timeout: 60000,
    httpsAgent: httpsAgent,
  })
  console.log(result)
  return result
}
