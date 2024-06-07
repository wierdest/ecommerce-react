import { useState } from 'react'
import './App.css'
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom'
import Erro404 from './pages/Erro404'
import Home from './pages/Home'
import { LogadoProvider, LogadoContext } from './context/LogadoContext'


function App() {

  return (
    <>
      <Switch>
        <LogadoProvider>
          <Route exact path="/login" component={Login} />
          <Route exact path="/" component={Home} />
        </LogadoProvider>
          <Route path="*" component={Erro404} />
      </Switch>
    </>
   
  )
}

export default App
