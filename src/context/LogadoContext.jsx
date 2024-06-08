import { createContext, useState, useEffect } from "react";

const LogadoContext = createContext();

const LogadoProvider = ({children}) => {
    
    const [estaLogado, setEstaLogado] = useState(() => {
        const logado = localStorage.getItem('estaLogado');
        return logado === 'true';
    })
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [id, setId] = useState('')

    useEffect(() => {
        localStorage.setItem('estaLogado', estaLogado);
    }, [estaLogado]);
    
    return(
        <LogadoContext.Provider value={{estaLogado, nome, email, id, setEstaLogado, setNome, setEmail, setId}}>
            {children}
        </LogadoContext.Provider>
    )
}

export { LogadoContext, LogadoProvider } 