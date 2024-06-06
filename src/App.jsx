import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Login from './pages/Login'
import { Switch, Route } from 'react-router-dom'
import Erro404 from './pages/Erro404'
function App() {

  return (
    <>
    
    <Switch>
          <Route exact path="/login" component={Login}/>
          <Route path="*" component={Erro404}/>
      </Switch>

    </>
  )
}

export default App
