import { createContext, useState } from "react";

const LogadoContext = createContext();

const LogadoProvider = ({children}) => {

    const [estaLogado, setEstaLogado] = useState(false)
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    return(
        <LogadoContext.Provider value={{estaLogado, nome, email, setEstaLogado, setNome, setEmail}}>
            {children}
        </LogadoContext.Provider>
    )
}

export { LogadoContext, LogadoProvider }