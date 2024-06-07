import { createContext, useState } from "react";

const LogadoContext = createContext();

const LogadoProvider = ({children}) => {
    const [estaLogado, setEstaLogado] = useState(false)

    return(
        <LogadoContext.Provider value={{estaLogado, setEstaLogado}}>
            {children}
        </LogadoContext.Provider>
    )
}

export { LogadoContext, LogadoProvider }