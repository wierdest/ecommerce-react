import { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
  Box,
  Flex,
  Link,
  Spacer,
  IconButton,
  Image,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';
import { LogadoContext } from '../../context/LogadoContext';
import CarrinhoModal from '../CarrinhoModal/CarrinhoModal';
import { FiLogOut } from 'react-icons/fi';
import MenuCategoria from '../MenuCategoria/MenuCategoria';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import logo from '../../assets/img/logo.png'

function Navbar() {
  const { estaLogado, setEstaLogado, nome } = useContext(LogadoContext);
  const { carrinho } = useContext(CarrinhoContext);
  const history = useHistory();

  const handleLogout = () => {
    localStorage.removeItem('estaLogado');
    window.location.reload();
  };

  return (
    <Box
      className="navBarClass"
      as="nav"
      bg="black.200"
      color="white"
      p={5}
      w="100vw"
    >
      <Flex
        as={UnorderedList}
        listStyleType="none"
        m={0}
        p={0}
        alignItems="center"
        gap={10}
      >
        <ListItem>
          <Image
            borderRadius="full"
            boxSize="150px"
            src={logo}
            
          />
        </ListItem>
        <Box as="li" display="flex" alignItems="center">
          <MenuCategoria />
        </Box>
        <Box as="li">
          <Link
            as={NavLink}
            to="/"
            _hover={{ textDecoration: 'underline' }}
            _activeLink={{ color: 'white.300' }}
          >
            Home
          </Link>
        </Box>

        {!estaLogado && (
          <Box as="li">
            <Link
              as={NavLink}
              to="/cadastro"
              _hover={{ textDecoration: 'underline' }}
              _activeLink={{ color: 'purple.300' }}
            >
              Cadastro
            </Link>
          </Box>
        )}
        <Box as="li">
          <Link
            as={NavLink}
            to="/produtos"
            _hover={{ textDecoration: 'underline' }}
            _activeLink={{ color: 'purple.300' }}
          >
            Produtos
          </Link>
        </Box>
        {estaLogado && (
          <Box as="li">
            <Link
              as={NavLink}
              to="/pedidos"
              _hover={{ textDecoration: 'underline' }}
              _activeLink={{ color: 'purple.300' }}
            >
              Pedidos
            </Link>
          </Box>
        )}

        <Spacer />
        {carrinho.length > 0 && (
          <Box as="li">
            {' '}
            <CarrinhoModal />{' '}
          </Box>
        )}

        <Box as="li">
          <IconButton
            onClick={handleLogout}
            icon={<FiLogOut />}
            aria-label="Logout"
          />
        </Box>
      </Flex>
    </Box>
  );
}

export default Navbar;