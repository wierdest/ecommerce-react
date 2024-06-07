import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import { LogadoProvider, LogadoContext } from './context/LogadoContext'
import Cadastro from './pages/Cadastro'
import Produtos from './pages/Produtos'
import Pedido from './pages/Pedido'
import ProdutoEspecifico from './pages/ProdutoEspecifico'


function App() {
  return (
    <>
      <LogadoProvider>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastro" component={Cadastro} />
          <Route exact path="/produtos" component={Produtos} />
          <Route path="/produtos/:id" component={ProdutoEspecifico} />
          <Route exact path="/pedido" component={Pedido} />
          <Route exact path="/" component={Home}/>
          <Route path="*" component={Erro404} />
        </Switch>
      </LogadoProvider>
    </>
  );
}

export default App;
