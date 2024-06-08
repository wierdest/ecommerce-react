import { React, useContext, useState, useEffect  } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Input, FormControl, FormLabel, Heading, Box, Text, useToast } from '@chakra-ui/react';
import { LogadoContext } from "../context/LogadoContext"
import { api } from '../api/api'

function Cadastro() {

    const {nome, email,  estaLogado, setNome, setEmail, setEstaLogado, setId} = useContext(LogadoContext)
    const [senha, setSenha] = useState('')
    const [message, setMessage] = useState('');
    const history = useHistory()
    const toast = useToast()

    useEffect(() => {
        if(estaLogado) {
            console.log('JÁ ESTÁ LOGADO')
            history.push('/')
        }
    },[] )
    
    const handleSubmit = async (e) => {
        e.preventDefault();
        if(nome == "") {
            setMessage("Por favor informe um nome válido")
            return;
        }
        if(email == "") {
            setMessage("Por favor informe um email válido")
            return;
        }
        if(senha == "") {
            setMessage("Por favor informe uma senha válida!")
            return;
        }
    
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
                setId(response.data.id)
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
                autoComplete='new-password'
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
              />
            </FormControl>
            <Button colorScheme="green" type="submit" width="full" onClick={() => {
              toast({
                title: 'Conta criada.',
                description: "Todos os dados salvos!",
                status: 'success',
                duration: 3000,
                isClosable: true,
              })
            }}>Cadastrar</Button>
          </form>
          {message && <Text mt={4} color="red.500">{message}</Text>}
          <br/>
        </Box>
      </Box>
    )
  }
  
export default Cadastro
  