import { React, useContext, useState  } from 'react';
import { useHistory } from "react-router-dom";
import { Button, Input, FormControl, FormLabel, Heading, Box, Text } from '@chakra-ui/react';
import { LogadoContext } from '../context/LogadoContext';
import { api } from '../api/api'


function Login() {
    const {nome, email, setEstaLogado, setNome, setEmail, setId} = useContext(LogadoContext)
    const history = useHistory()
    // esses estados são locais, só da pagina de login, certo?
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await api.get('/users/', {
                params: {
                    email,
                    senha
                }
            })
            if(response.status == 200) {
                const usuarios = response.data
                if (usuarios.length > 0) {
                    const usuario = usuarios[0]
                    console.log('Usuário encontrado:', usuario)
                    setNome(usuario.nome)
                    setEmail(usuario.email)
                    setId(usuario.id)
                    
                    localStorage.setItem('estaLogado', true)
                    setEstaLogado(true);
                    history.push("/")
                    setMessage("Login bem-sucedido!");
                } else {
                    console.log('Usuário não encontrado');
                    setMessage("Email ou senha incorretos.");
                }
            }

        } catch (error) {
            console.error('Erro ao buscar usuario', error);
        }
      
    };
    return (
      <Box height="100vh" display="flex" justifyContent="center" alignItems="center">
        <Box maxW="sm" w="100%" p={6} borderWidth={1} borderRadius="md" boxShadow="lg">
          <Heading as="h2" size="lg" textAlign="center" mb={6}>Login</Heading>
          <form onSubmit={handleSubmit}>
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
            <Button colorScheme="blue" type="submit" width="full">Login</Button>
          </form>
          <br/>
          <Button onClick={() => history.push("/cadastro") } colorScheme="green" width="full">Cadastrar</Button>
          {message && <Text mt={4} color="red.500">{message}</Text>}
        </Box>
      </Box>
    );
}
  
  export default Login;