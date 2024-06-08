import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { Box, Button, Flex, Link, Spacer, IconButton } from "@chakra-ui/react";
import { LogadoContext } from '../../context/LogadoContext';
import CarrinhoModal from '../CarrinhoModal/CarrinhoModal';
import { FiLogOut } from 'react-icons/fi';

function Navbar() {

  const { setEstaLogado } = useContext(LogadoContext)

  const handleLogout = () => {

    setEstaLogado(false)
    localStorage.setItem('estaLogado', false)
    window.location.reload()
  }

  return (
    <Box as="nav" bg="blue.500" color="white" p={4} >
    <Flex as="ul" listStyleType="none" m={0} p={0} alignItems="center" gap={10}>
      <Box as="li">
        <Link as={NavLink} to="/" _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
          Home
        </Link>
      </Box>
      <Box as="li">
        <Link as={NavLink} to="/cadastro" _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
          Cadastro
        </Link>
      </Box>
      <Box as="li">
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
      <Box as="li">
        <CarrinhoModal/>
      </Box>
      <Box as="li">
        <IconButton onClick={handleLogout} icon={<FiLogOut/>} aria-label="Logout" colorScheme='black'/>
      </Box>

    </Flex>
  </Box>
  );
}

export default Navbar;