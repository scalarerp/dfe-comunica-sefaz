import axios from 'axios'
import https from 'https'
import { type IHttpSoap } from 'lib/types/httpSpoap'
import { envelopeSoap } from 'lib/utils/xml/xmlHelper'

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

/**
 * Cadeia de Certificados da NF-e (www1.nfe.fazenda.gov.br)
 * Página Principal > Documentos > Diversos > Cadeia de Certificados do www1 (atualizada em 04/08/2021)
 * https://www.nfe.fazenda.gov.br/portal/exibirArquivo.aspx?conteudo=JuhROOiTOPA=
 */
const CA = [
  '-----BEGIN CERTIFICATE-----\r\nMIIHAjCCBOqgAwIBAgIJAJVIeKgiEmNTMA0GCSqGSIb3DQEBDQUAMIGYMQswCQYD\r\nVQQGEwJCUjETMBEGA1UECgwKSUNQLUJyYXNpbDE9MDsGA1UECww0SW5zdGl0dXRv\r\nIE5hY2lvbmFsIGRlIFRlY25vbG9naWEgZGEgSW5mb3JtYWNhbyAtIElUSTE1MDMG\r\nA1UEAwwsQXV0b3JpZGFkZSBDZXJ0aWZpY2Fkb3JhIFJhaXogQnJhc2lsZWlyYSB2\r\nMTAwHhcNMjAwMzEyMTkzMTQyWhcNMzIwNzAxMTIwMDU5WjCBjDELMAkGA1UEBhMC\r\nQlIxEzARBgNVBAoMCklDUC1CcmFzaWwxNTAzBgNVBAsMLEF1dG9yaWRhZGUgQ2Vy\r\ndGlmaWNhZG9yYSBSYWl6IEJyYXNpbGVpcmEgdjEwMTEwLwYDVQQDDChBdXRvcmlk\r\nYWRlIENlcnRpZmljYWRvcmEgZG8gU0VSUFJPIFNTTHYxMIICIjANBgkqhkiG9w0B\r\nAQEFAAOCAg8AMIICCgKCAgEA61jQVBX27GVzyZkJuyrEezqjBGdLSJDFRyGdwxbm\r\n8Ntr0AA8blhDaN5ASDOjqDESMA7xF38znfkZWBMLxJ3Ob0271W6G9bqgTwp/svhZ\r\ns91UcbZW6sB7gyxzMTGWLxcFMeBrurM0QpMVsp8hDH5Suv5rfP0YB9brz60k104u\r\nHG625rAcbRKHn7XsWJ1ZUQcwRzx1g0L1NlUKpsk0+eOAxTcVSVRTO33k+n6Gve83\r\n4MXMiG6Orved4isnEvQnl4AecCXOuUuM3vXZ+kdJGTpNy1HOy0coFdKCJSSCxU/y\r\nTbTiAiRJTc8rbvor3I7k7wR4ZDR8alDbW/Sbw1JEMtbQqMOXEOV7iEUIub0/uNT2\r\ng0oM4pu8DAxhIwy2YQCpjfCbzYu2bf1nabuOEQ2B4mFt/zgoxa5FLsM+0IjpCi8u\r\nz9RqLvYFo9pIy5BTi7JMkVfbgqcOv7vkQf3xF7sODdInCVRIbB0R6xpHm+bpitx9\r\nt5ip+Sf24QFlKbjy0gwVAnaEyf/iQF+t8qgcFBO65kyfH/2vs6iYg5TNhFKtjpqQ\r\niTyI7YkRkfTbLFdcgZbiRUUs5TFi0BkS4PAWupO1GgV9sJdk9gm3Z+KNZDgoAnu7\r\nCvhq1JXt6t7qO96WzBx9q9hi7T6eld1VFrV5Ya5kxM9Lgh+XcBDwfnDLI1Yoozbd\r\nMbkCAwEAAaOCAVcwggFTMIGtBgNVHSAEgaUwgaIwTwYGYEwBAYEJMEUwQwYIKwYB\r\nBQUHAgEWN2h0dHBzOi8vcmVwb3NpdG9yaW8uc2VycHJvLmdvdi5ici9kb2NzL2Rw\r\nY3NlcnByb3NzbC5wZGYwTwYGYEwBAgFpMEUwQwYIKwYBBQUHAgEWN2h0dHBzOi8v\r\ncmVwb3NpdG9yaW8uc2VycHJvLmdvdi5ici9kb2NzL2RwY3NlcnByb3NzbC5wZGYw\r\nQAYDVR0fBDkwNzA1oDOgMYYvaHR0cDovL2FjcmFpei5pY3BicmFzaWwuZ292LmJy\r\nL0xDUmFjcmFpenYxMC5jcmwwHwYDVR0jBBgwFoAUdPN+//yfU3rxfOurPqSm2hi6\r\nRWMwHQYDVR0OBBYEFK0WT0vxDL7CiqKFGNcNRiWTIuPNMA8GA1UdEwEB/wQFMAMB\r\nAf8wDgYDVR0PAQH/BAQDAgGGMA0GCSqGSIb3DQEBDQUAA4ICAQCDvWkOYakalAHB\r\n3ZcifI9yLyuTtjR8eYXlfDesYr7zMFVlmduVghCgueBMZxmht9BpLq9/ceBWu1q8\r\nsKge5oNNyySPmBJFe+CLjtB7Z1Ljk0Q/7A59lMCDZajojJlSEnH6pdhxA1JD58E0\r\ndGsom3SufuBWxdNfgsvpQNXDoKp48VlkyL4DKFCdJExtzuR5IlcQbB1FrmB5m2zo\r\nGG6j7UdoevmikIv01la+8kyn7CF5aNubRE0cfwxulik5LNM1uLIwfUVwYbbQiB8z\r\nbaLUOS2lU/pYr+seLQ7VBPHps/guGB9hKei/Df49KWjDVplu3+AuZhBHqiK533VJ\r\nf9Uwv3Rvx8FCobT54OCrAVfnFs8F6sM3dPh1u7AbW3Ddpeo4oBH5kBA0feLvLk7v\r\nmOnOq64oPMMoj+g6x0B0v7tGqOrNBZK486MaU/uaJi+omx+Le9EfyIz39BbRYGdV\r\nJvO/9P8vn5XnNXsmqziw08ENLjHcrro48tRm3YX0/BUgoitjMUqyzlKTgQ8UOpfi\r\nXeJzqvxvUMO/HgZK9aknN3WQXWXxIFG01OHsEOTd2Nddqbrth5qmZE+1IxwEH+ys\r\nQQzlV0pnPL5K0bRuPCqvH4Jr0CmwV2PqD6dkjI/Sy77XDkTP8adAuYjIEynBoQ0b\r\ntqY/0rJPT3dztepWAwRHhKbvO1yYkA==\r\n-----END CERTIFICATE-----\r\n',
  '-----BEGIN CERTIFICATE-----\r\nMIIGrDCCBJSgAwIBAgIJANLVi0S/gZNCMA0GCSqGSIb3DQEBDQUAMIGYMQswCQYD\r\nVQQGEwJCUjETMBEGA1UECgwKSUNQLUJyYXNpbDE9MDsGA1UECww0SW5zdGl0dXRv\r\nIE5hY2lvbmFsIGRlIFRlY25vbG9naWEgZGEgSW5mb3JtYWNhbyAtIElUSTE1MDMG\r\nA1UEAwwsQXV0b3JpZGFkZSBDZXJ0aWZpY2Fkb3JhIFJhaXogQnJhc2lsZWlyYSB2\r\nMTAwHhcNMTkwNzAxMTkxNTU5WhcNMzIwNzAxMTIwMDU5WjCBmDELMAkGA1UEBhMC\r\nQlIxEzARBgNVBAoMCklDUC1CcmFzaWwxPTA7BgNVBAsMNEluc3RpdHV0byBOYWNp\r\nb25hbCBkZSBUZWNub2xvZ2lhIGRhIEluZm9ybWFjYW8gLSBJVEkxNTAzBgNVBAMM\r\nLEF1dG9yaWRhZGUgQ2VydGlmaWNhZG9yYSBSYWl6IEJyYXNpbGVpcmEgdjEwMIIC\r\nIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAk3AxKl1ZtP0pNyjChqO7qNkn\r\n+/sClZeqiV/Kd7KnnbkDbI2y3VWcUG7feCE/deIxot6GH6JXncRG794UZl+4doD0\r\nD0/cEwBd4DvrDSZm0RT40xhmYYOTxZDJxv+coTHdmsT5aNmSkktfjzYX4HQHh/7M\r\nem+kTOpT/3E4K6B7KVs9HkOT7nXx5yU1qYbVWqI0qpJM9mOTSFx8C9HiKcHvLCvt\r\n1ioXKPAmFuHPkayOcXP2MXeb+VRNjWKU4E+L2t5uZPKVx1M/9i1DztlLb4K8OfYg\r\nGaPDUSF1sxnoGk5qZHLleO6KjCpmuQepmgsBvxi2YNO7X2YUwQQx1AXNSolgtkAR\r\n5gt+1WzxhbFUhItQqlhqxgWHefLmiT5T/Ctz/P2v+zSO4efkkIzsi1iwD+ypZvM2\r\nlnIvB24RcSN6jzmCahLPX4CwjwIK6JsSoMVxIhpZHCguUP4LXqP8IWUZ6WgS/4zB\r\n7B9E0EICl2rM1PRy+6ulv+ZOW256e8a0pijUB+hXM1msUq9L92476FAAX8va3sP7\r\n+Uut94+bGHmubcTLImWUPrxNT7QyrvE3FyHicfiHioeFL2oV4cXTLZrEq2wS8R4P\r\nKPdSzNn5Z9e2uMEGYQaSNO+OwvVycpIhOBOqrm12wJ9ZhWKtM5UOo34/o37r5ZBI\r\nTYXAGbhqQDB9mWXwH+0CAwEAAaOB9jCB8zBOBgNVHSAERzBFMEMGBWBMAQEAMDow\r\nOAYIKwYBBQUHAgEWLGh0dHA6Ly9hY3JhaXouaWNwYnJhc2lsLmdvdi5ici9EUENh\r\nY3JhaXoucGRmMEAGA1UdHwQ5MDcwNaAzoDGGL2h0dHA6Ly9hY3JhaXouaWNwYnJh\r\nc2lsLmdvdi5ici9MQ1JhY3JhaXp2MTAuY3JsMB8GA1UdIwQYMBaAFHTzfv/8n1N6\r\n8Xzrqz6kptoYukVjMB0GA1UdDgQWBBR0837//J9TevF866s+pKbaGLpFYzAPBgNV\r\nHRMBAf8EBTADAQH/MA4GA1UdDwEB/wQEAwIBBjANBgkqhkiG9w0BAQ0FAAOCAgEA\r\neCNhBSuy/Ih/T+1VOtAJju85SrtoE3vET1qXASpmjQllDHG/ph7VFNRAkC+gha+B\r\nCbjoA5oJ/8wwl+Qdp1KGz6nXXFTLx3osU+kjm0srmBf9nyXHPqvFyvBeB0A7sYb7\r\nTmII9GKD20oCxsdkccR/oE/JuTaNnGq0GYZ2aDb5v62uLi21Y6P9UBiTxZqQ4ojW\r\nET6kXNjlK238jpXv17FR8Sg3VusCvX7Q8eJkavvHHZDeWck2fSA+ycAc2JeL2Z0B\r\nMSxGWpH32WM9J8+6XqCJUXHiWEV0zCE8wDYiYC+047pTxQI/gB/FcU7jvylh98DJ\r\nkQPHd/Tp6Og3ynlDA9n9uBbxYHVRZs9vsZ/7xTFaxRe+zk8dhgKgZ/3RrcMFB570\r\n2t8LFbyuUE/kQVY6rZ0QJ9qMWQ7VPLRwRhiMeU3k8WDJb/tBbOXHBqldTbWyQ+mp\r\nMEDWhbrzE/IED82wAuO23Tb05cYk2xC7+Izef8fSc3XdJDuPSbcDpWukzyCDtSEH\r\nisLiGEtIbYRiPsF3czlQPsnIEVoTTCWxHCH1zYR6zScSv18Qh69qVe2J40K5jZoP\r\nGEOhq/oKhVJQAdvAFW5Odp7mF3Tk9nivjjsctJSxY26LFiV5GRV+07SSse4ti0aO\r\njO5PLg5SWjfcOtBG2rz02EIvQAmLcb0kGBtfdj0lW/w=\r\n-----END CERTIFICATE-----\r\n',
]

const getHttpAgent = (certificado: string, senha: string): https.Agent => {
  const httpsAgent = new https.Agent({
    rejectUnauthorized: true,
    cert: certificado,
    key: senha,
    ca: CA,
  })
  return httpsAgent
}

export const soapXmlPost = async (options: IHttpSoap) => {
  const { url, xmlBody, certificado, senha, envelopSoap = true } = options

  const body = envelopSoap ? envelopeSoap(xmlBody) : xmlBody

  const result = await axios.post(url, body, {
    headers: {
      //'User-Agent': `scalar-comunica-dfe/0-1`,
      // 'User-Agent': `scalar-comunica-dfe/${VERSION}`,
      //'Content-Type': 'application/soap+xml;charset=utf-8',
      //'Access-Control-Allow-Origin': '*',
      // 'Access-Control-Allow-Credentials': true,
      //'Access-Control-Allow-Headers': 'Content-Type',
      //'Access-Control-Allow-Methods': 'GET,POST',
    },
    timeout: 300000,
    httpsAgent: getHttpAgent(certificado, senha),
  })

  console.log(result)
  return result
}

//CONSULTAR: <consSitNFe versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>1</tpAmb><xServ>CONSULTAR</xServ><chNFe>43231092554054000117550020000251851001718068</chNFe></consSitNFe>
//<?xml version="1.0" encoding="utf-8"?><soap12:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap12="http://www.w3.org/2003/05/soap-envelope"><soap12:Body><nfeDadosMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeConsultaProtocolo4"><consSitNFe versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>1</tpAmb><xServ>CONSULTAR</xServ><chNFe>43231092554054000117550020000251851001718068</chNFe></consSitNFe></nfeDadosMsg></soap12:Body></soap12:Envelope>

// httpWr.Timeout = timeOut == 0 ? 2000 : timeOut
// httpWr.ContentLength = Encoding.UTF8.GetBytes(xmlSoap).Length
// httpWr.ClientCertificates.Add(certificadoDigital)
// httpWr.ComposeContentType('application/soap+xml', Encoding.UTF8, actionUrn)
// httpWr.Method = 'POST'
// {
//   System.Security.Cryptography.X509Certificates.X509CertificateCollection
// }

// contentType: application / soap + xml
// charset = utf - 8
// action = 'http://www.portalfiscal.inf.br/nfe/wsdl/NFeConsultaProtocolo4/nfeConsultaNF'

// xmlRetorno: '<?xml version="1.0" encoding="utf-8"?><soap:Envelope xmlns:soap="http://www.w3.org/2003/05/soap-envelope" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema"><soap:Body><nfeResultMsg xmlns="http://www.portalfiscal.inf.br/nfe/wsdl/NFeConsultaProtocolo4"><retConsSitNFe versao="4.00" xmlns="http://www.portalfiscal.inf.br/nfe"><tpAmb>1</tpAmb><verAplic>RS202308181530</verAplic><cStat>100</cStat><xMotivo>Autorizado o uso da NF-e</xMotivo><cUF>43</cUF><dhRecbto>2023-10-18T11:06:15-03:00</dhRecbto><chNFe>4323109255</chNFe><protNFe versao="4.00"><infProt Id="ID143230"><tpAmb>1</tpAmb><verAplic>RS202310161514</verAplic><chNFe>432310925540548</chNFe><dhRecbto>2023-10-17T09:01:44-03:00</dhRecbto><nProt>143</nProt><digVal>99Kh3jqazSzs94=</digVal><cStat>100</cStat><xMotivo>Autorizado o uso da NF-e</xMotivo></infProt></protNFe></retConsSitNFe></nfeResultMsg></soap:Body></soap:Envelope>'
