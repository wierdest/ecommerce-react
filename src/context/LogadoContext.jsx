import { createContext, useState, useEffect } from "react";

const LogadoContext = createContext();

const LogadoProvider = ({children}) => {
    
    const [estaLogado, setEstaLogado] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    // useEffect(() => {
    //     const logado = localStorage.getItem('estaLogado');
    //     if (logado === 'true') {
    //         console.log("LOGADO");
    //         setEstaLogado(true);
    //     } else {
    //         console.log('NAO LOGADO')
    //     }
    // }, []);
    return(
        <LogadoContext.Provider value={{estaLogado, nome, email, setEstaLogado, setNome, setEmail}}>
            {children}
        </LogadoContext.Provider>
    )
}

export { LogadoContext, LogadoProvider }