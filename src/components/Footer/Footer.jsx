import React from 'react';
import { Box, Text, Link, VStack, HStack, IconButton, Divider } from '@chakra-ui/react';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { SiGithub } from "react-icons/si";
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <Box as="footer" py="10" bg="gray.800" color="white">
      <VStack spacing="4">
        <HStack spacing="6">
          <Link href="https://www.facebook.com" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebook />}
              bg="white"
              _hover={{ bg: 'gray.500' }}
            />
          </Link>
          <Link href="https://www.twitter.com" isExternal>
            <IconButton
              aria-label="Twitter"
              icon={<FaTwitter />}
              bg="white"
              _hover={{ bg: 'purple.500' }}
            />
          </Link>
          <Link href="https://www.instagram.com" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              bg="white"
              _hover={{ bg: 'purple.500' }}
            />
          </Link>
          <Link href="https://github.com/wierdest/ecommerce-react" isExternal>
            <IconButton
              aria-label="GitHub"
              icon={<SiGithub />}
              bg="white"
              _hover={{ bg: 'purple.500' }}
            />
          </Link>
          
        </HStack>
        <Divider />
        <Text fontSize="sm">&copy; {new Date().getFullYear()} SerraShop - Todos os direitos reservados.</Text>
        <HStack spacing="4">
          <Link 
            as={NavLink}
            to='/sobre'
            href="/sobre">Sobre Nós</Link>
          <Link href="/contato">Contato</Link>
          <Link href="/privacidade">Política de Privacidade</Link>
        </HStack>
      </VStack>
    </Box>
  );
};

export default Footer;
