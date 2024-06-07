import { useContext, useEffect } from "react";
import { Redirect, useHistory } from "react-router-dom";
import { LogadoContext } from "../context/LogadoContext";
import {  Box } from '@chakra-ui/react';


function Home() {
    const { estaLogado } = useContext(LogadoContext)
    const history = useHistory()
    
    useEffect(() => {
        if(!estaLogado) {
            console.log('NAO LOGADO')
            history.push('/login')
        }
    },[] )
    return (
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <h1>HOME  PAGE</h1>
      </Box>
     
    )
  }
  
  export default Home
  