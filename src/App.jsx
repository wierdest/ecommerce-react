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
import Pedidos from './pages/Pedidos'
import ProdutoEspecifico from './pages/ProdutoEspecifico'
import { CarrinhoProvider } from './context/CarrinhoContext'
import FinalizarCompra from './pages/FinalizarCompra'
import ProdutosCategoria from './pages/ProdutosCategoria'


function App() {
  return (
    <>
      <LogadoProvider>
        <CarrinhoProvider>
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/cadastro" component={Cadastro} />
            <Route exact path="/produtos" component={Produtos} />
            <Route path="/produtos/:id" component={ProdutoEspecifico} />
            <Route path="/produtos-por-categoria/:categoria" component={ProdutosCategoria} />
            <Route exact path="/pedido" component={Pedido} />
            <Route exact path="/finalizar-compra" component={FinalizarCompra}/>
            <Route exact path="/pedidos" component={Pedidos} />
            <Route exact path="/" component={Home}/>
            <Route path="*" component={Erro404} />
          </Switch>
        </CarrinhoProvider>
      </LogadoProvider>
    </>
  );
}

export default App;
