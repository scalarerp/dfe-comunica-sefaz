import React from 'react'

const TopNavBar = () => {
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          Dfe Comunica Sefaz
        </a>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-md-0">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Inicio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/carregaCertificado">
                Carrega Certificado
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default TopNavBar
