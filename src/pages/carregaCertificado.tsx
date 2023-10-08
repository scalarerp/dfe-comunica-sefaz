import { getNfeURL } from 'services/webservices/autorizadores'
import { ModeloDocumento, TipoAmbiente, TipoServicoNFe } from 'types/nfe/tipos'
import { UfEmi } from 'types/uf'

const CarregaCertificado = () => {
  const carregaXml = async () => {
    const result = getNfeURL(
      UfEmi.RS,
      ModeloDocumento.NFe,
      TipoAmbiente.Producao1,
      TipoServicoNFe.NfeStatusServico
    )

    console.log(result)
  }

  return (
    <div>
      <h3>teste status serviço</h3>
      <button className="btn" onClick={() => carregaXml()}>
        Status Serviço
      </button>
    </div>
  )
}

export default CarregaCertificado
