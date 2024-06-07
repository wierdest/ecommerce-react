import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import { LogadoProvider, LogadoContext } from './context/LogadoContext'
import Cadastro from './pages/Cadastro'
import Produtos from './pages/Produtos'
import Pedidos from './pages/Pedidos'


function App() {
  return (
    <>
      <Switch>
        <LogadoProvider>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/produtos" component={Produtos} />
          <Route exact path="/pedidos" component={Pedidos} />
          <Route exact path="/" component={Home} />
          <Route path="*" component={Erro404} />
          
        </LogadoProvider>
        
      </Switch>
    </>
  )
}

export default App
