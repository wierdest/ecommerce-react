import { React, useContext, useState  } from 'react';
import { useHistory } from "react-router-dom";

import { Button, Input, FormControl, FormLabel, Heading, Box, Text } from '@chakra-ui/react';
import { LogadoContext } from '../context/LogadoContext';


function Login() {
    const {setEstaLogado} = useContext(LogadoContext)
    const history = useHistory()
    // esses estados são locais, só da pagina de login, certo?
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === "usuario@exemplo.com" && senha === "senha123") {
            setEstaLogado(true);
            setMessage("Login bem-sucedido!");
            history.push("/")
        } else {
            setMessage("Email ou senha incorretos.");
        }
    };
    return (
      <Box display="flex" justifyContent="center" alignItems="center">
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
          {message && <Text mt={4} color="red.500">{message}</Text>}
        </Box>
      </Box>
    );
}
  
  export default Login;