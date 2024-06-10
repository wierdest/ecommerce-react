import React, { useState, useEffect, useContext } from 'react';
import { Flex, Heading, VStack, Link } from '@chakra-ui/react';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';
import Avaliacao from '../components/Avaliacao/Avaliacao';
import { LogadoContext } from '../context/LogadoContext';
import { useHistory } from 'react-router-dom';
import MensagemVazia from '../components/MensagemVazia/MensagemVazia';
import Loading from '../components/Loading/Loading';


function HistoricoPedidos() {
  const [pedidos, setPedidos] = useState([]);
  const {nome, id } = useContext(LogadoContext)
  const [loading, setLoading] = useState(true);
  const history = useHistory()

  const handleNavegacaoProdutosPedido = (event, id) => {
    event.preventDefault()
    history.push(`/pedidos/${id}`)

  }

  const fetchPedidos = async () => {
    try {
      const response = await api.get('/pedido/');
      var pedidos = response.data.filter((pedido) => pedido.idUser == id).reverse();
      setPedidos(pedidos);
    } catch (error) {
      console.error('Erro ao buscar pedidos:', error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchPedidos();
  }, []);

  const handleAvaliacaoChange = (index, value) => {
    console.log(`Pedido #${index} avaliado com ${value} estrelas`);
  };

  return (
    <>
      <Navbar />
      {
        loading ? 
        
        <Loading/>
        :
        pedidos.length > 0 
        ?
            <Flex
            direction="column"
            height="100vh"
            justifyContent="center"
            alignItems="center"
            >
            <Heading as="h1" mb={6} textAlign="center">
              {nome}, confira seu histórico de pedidos:
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
                  <Link onClick={(e) => handleNavegacaoProdutosPedido(e, pedido.id) }  _hover={{ textDecoration: 'underline' }} _activeLink={{ color: 'blue.300' }}>
                      {`Pedido #${pedido.id}`}
                    </Link>
                  {/* <span>{`Pedido #${pedido.id}`}</span> */}
                  <span>{`Valor Total: R$ ${pedido.valorTotal}`}</span>
                  <Avaliacao
                    onChange={(value) => handleAvaliacaoChange(index, value)}
                    defaultValue={pedido.avaliacao}
                  />
                  
                </Flex>
              ))}
            </VStack>
            </Flex>
        :
          <MensagemVazia 
            nome={nome}
            mensagem={"vc ainda não comprou nada!"}
          
          />
      }

    </>
  );
}

export default HistoricoPedidos;
