import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Box, Button, Flex, Link, Spacer } from "@chakra-ui/react";
import { LogadoContext } from '../../context/LogadoContext';

function Navbar() {

  const { setEstaLogado } = useContext(LogadoContext)

  const handleLogout = () => {

    setEstaLogado(false)
    localStorage.setItem('estaLogado', false)
    window.location.reload()
  }

  return (
    <Box as="nav" bg="blue.500" color="white" p={4} width="90vw" >
    <Flex as="ul" listStyleType="none" m={0} p={0} alignItems="center">
      <Box as="li" mr={6}>
        <Link as={NavLink} to="/" _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
          Home
        </Link>
      </Box>
      <Box as="li" mr={6}>
        <Link as={NavLink} to="/cadastro" _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
          Cadastro
        </Link>
      </Box>
      <Box as="li" mr={6}>
        <Link as={NavLink} to="/produtos" _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
          Produtos
        </Link>
      </Box>
      <Box as="li">
        <Link as={NavLink} to="/pedidos" _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
          Pedidos
        </Link>
        </Box>
      <Spacer/>
      <Box as="li" mr={6}>
  <Button as={Link} to="/carrinho" _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
    Carrinho
  </Button>
      </Box>
      <Box as="li">
        <Button onClick={handleLogout} colorScheme="black" width="full">Logout</Button>
      </Box>

    </Flex>
  </Box>
  );
}

export default Navbar;