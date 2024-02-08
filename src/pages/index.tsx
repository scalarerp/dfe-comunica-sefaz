'use client'
import { consultaStatusServico } from 'lib/services/consultaStatusServico'
import Head from 'next/head'
import { useState, type ChangeEvent } from 'react'
import { UfEmi } from 'lib/types/uf'
import { ModeloDocumento, TipoAmbiente } from 'lib/types/nfe/basicTypes'
import { type IConsultaStatusServico } from 'lib/types/httpSpoap'
import { ufEmiList } from 'lib/utils/uf/ufHelper'

export default function Home() {
  const [certA1, setCertA1] = useState<string>('')
  const [certSenha, setCertSenha] = useState<string>('31353631')
  const [ufEmi, setUfEmi] = useState<UfEmi>(UfEmi.RS)

  const consultaAsync = async () => {
    const options: IConsultaStatusServico = {
      ufEmi: ufEmi,
      modeloDocumento: ModeloDocumento.NFe,
      tipoAmbiente: TipoAmbiente.Homologacao2,
      certificado: certA1,
      senha: certSenha,
    }

    const result = await consultaStatusServico(options)
    console.log(result)
  }

  return (
    <>
      <Head>
        <title>Comunica sefaz</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h5>Certificado A1</h5>
      <input
        type="file"
        id="file"
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files.length > 0) {
            const file = e.target.files[0]
            if (file) {
              const reader = new FileReader()

              reader.onload = () => {
                console.log(reader.result)
                setCertA1(reader.result as string)
              }
              reader.readAsDataURL(file)
            }
          }
        }}
      />
      <h5>Senha</h5>
      <input
        value={certSenha}
        onBlur={(e) => {
          setCertSenha(e.target.value)
        }}
      />
      <h5>UF</h5>
      <select value={ufEmi} onChange={(e) => setUfEmi(e.target.value as UfEmi)}>
        {ufEmiList.map((x) => (
          <option key={x}>{x}</option>
        ))}
      </select>

      <hr />

      <button type="button" onClick={() => consultaAsync()}>
        ConsultaStatusServico
      </button>
    </>
  )
}
