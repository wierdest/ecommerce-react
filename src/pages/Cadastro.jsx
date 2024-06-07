import { React, useContext, useState  } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Input, FormControl, FormLabel, Heading, Box, Text } from '@chakra-ui/react';
import { LogadoContext } from "../context/LogadoContext"
import { api } from '../api/api'

function Cadastro() {

    const {nome, email, setNome, setEmail, setEstaLogado} = useContext(LogadoContext)
    const [senha, setSenha] = useState('')
    const history = useHistory()

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.post('/users/',
                {
                    nome: nome,
                    email : email,
                    senha: senha,
                }
            )
            if(response.status == 201) {
                console.log('Cadastrou com sucesso!');
                // joga usuario para o home
                setEstaLogado(true)
                history.push('/')
            }

        } catch (error) {
            console.error('Erro ao fazer o post de cadastro!', error);
        }
    };

    return (
        <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Box maxW="sm" w="100%" p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
          <Heading as="h2" size="lg" textAlign="center" mb={6}>Cadastro</Heading>
          <form onSubmit={handleSubmit}>
          <FormControl id="nome" mb={4}>
              <FormLabel>Nome:</FormLabel>
              <Input
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" mb={4}>
              <FormLabel>Email:</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="senha" mb={4}>
              <FormLabel>Senha:</FormLabel>
              <Input
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="green" type="submit" width="full">Cadastrar</Button>
          </form>
          <br/>
        </Box>
      </Box>
    )
  }
  
export default Cadastro
  