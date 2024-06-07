import { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { LogadoContext } from "../context/LogadoContext";

function Home() {
    const { estaLogado } = useContext(LogadoContext)
    const history = useHistory()
    
    useEffect(() => {
        if(!estaLogado) {
            history.push('/login')
        }
    },[] )
    return (
      <>
        <div>Home Page</div>
      </>
     
    )
  }
  
  export default Home
  