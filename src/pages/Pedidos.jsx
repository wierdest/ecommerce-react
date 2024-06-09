import React, { useState, useEffect } from 'react';
import { Flex, Heading, VStack, Divider, IconButton } from '@chakra-ui/react';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';
import { FaStar } from 'react-icons/fa';

function Avaliacao({ onChange, defaultValue }) {
  const [rating, setRating] = useState(defaultValue || 0);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  return (
    <Flex>
      {[...Array(5)].map((_, index) => (
        <IconButton
          key={index}
          icon={<FaStar color={index < rating ? 'green.500' : 'gray.300'} />}
          onClick={() => handleClick(index + 1)}
        />
      ))}
    </Flex>
  );
}

function Pedidos() {
  const [pedidos, setPedidos] = useState([]);

  useEffect(() => {
    const fetchPedidos = async () => {
      try {
        const response = await api.get('/pedido/');
        setPedidos(response.data); // Supondo que a resposta contenha os pedidos do usuário
      } catch (error) {
        console.error('Erro ao buscar pedidos:', error);
      }
    };

    fetchPedidos();
  }, []);

  const handleAvaliacaoChange = (index, value) => {
    console.log(`Pedido #${index} avaliado com ${value} estrelas`);
  };

  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        height="100vh"
        w="200vh"
        justifyContent="center"
        alignItems="center"
        p={4}
      >
        <Heading as="h1" mb={6} textAlign="center">
          - Meus Pedidos -
        </Heading>
        <VStack
          spacing={4}
          align="content"
          width="100%"
          maxWidth="700px"
          overflowY="auto"
          border="1px solid white"
        >
          {pedidos.map((pedido, index) => (
            <Flex
              key={index}
              justify="space-between"
              alignItems="center"
              borderBottom="1px solid"
              borderColor="gray.200"
              pb={2}
              ml={4}
              mr={4}
            >
              <span>{`Pedido #${pedido.id}`}</span>
              <span>{`Valor Total: R$ ${pedido.valorTotal}`}</span>
              <Avaliacao
                onChange={(value) => handleAvaliacaoChange(index, value)} // Passando o índice do pedido
                defaultValue={pedido.avaliacao} // Se houver uma avaliação prévia, passa como valor padrão
              />
            </Flex>
          ))}
        </VStack>
      </Flex>
    </>
  );
}

export default Pedidos;
