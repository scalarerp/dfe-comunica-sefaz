import React from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Layout from 'pages/index'
import Home from 'pages/home'
import CarregaCertificado from 'pages/carregaCertificado'

export const navigationRef: any = React.createRef()

export const Router = () => {
  navigationRef.current = {
    navigate: useNavigate(),
  }

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/carregaCertificado" element={<CarregaCertificado />} />
      </Route>
    </Routes>
  )
}
