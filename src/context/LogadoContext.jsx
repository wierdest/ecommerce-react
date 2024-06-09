import { createContext, useState, useEffect } from "react";
import { api } from '../api/api'

const LogadoContext = createContext();

const LogadoProvider = ({children}) => {
    const [estaLogado, setEstaLogado] = useState(() => {
        const logado = localStorage.getItem('estaLogado');
        return logado != null;
    })
    const [id, setId] = useState(() => {
        const logado = localStorage.getItem('estaLogado');
        return logado;
    })
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')

    async function fetchUserData() {
        if(estaLogado != null && id != null && id.length > 0) {
            console.log('pegando ', id)
            try {
                const response = await api.get('/users/', {
                    params: {
                        id: id,
                    }
                })
                if(response.status == 200) {
                    setId(response.data[0].id)
                    setNome(response.data[0].nome)
                    setEmail(response.data[0].email)
                    localStorage.setItem('estaLogado', response.data[0].id);

                    console.log("Sessão iniciada para usuário ", response.data[0].nome, " id: ", id)
                }
    
            } catch (error) {
                console.error('Erro ao pegar info do usuário!', error);
            }
        }
        
    }
    useEffect(() => {
       
        fetchUserData()
       
    }, [estaLogado]);

    
   
    
    return(
        <LogadoContext.Provider value={{estaLogado, nome, email, id, setEstaLogado, setNome, setEmail, setId}}>
            {children}
        </LogadoContext.Provider>
    )
}

export { LogadoContext, LogadoProvider } 