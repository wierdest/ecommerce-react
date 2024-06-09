import { Button, Box, Flex, Heading, useToast, VStack, Divider, Text } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import ItemCarrinho from '../components/ItemCarrinho/ItemCarrinho';
import { api } from '../api/api';
import { LogadoContext } from '../context/LogadoContext';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import SeuPedido from '../components/SeuPedidoCard/SeuPedido';


function ProdutosPedido() {
    const { id } = useParams();
    const [produtosPedido, setProdutosPedido] = useState([])

    const fetchProdutosPedido = async (itensPedido) => {
        var produtos = []
        itensPedido.forEach(async (itemPedido) => {
            var responseProduto = await api.get(`/produto/${itemPedido.idProduto}`)
            var produto = responseProduto.data
            const produtoHistorico = { 
                imgUrl: produto.imgUrl, 
                nome: produto.nome,
                preco: produto.preco,
                quantidadePedido: itemPedido.quantidade
            }
        
            produtos.push(produtoHistorico)
            setProdutosPedido(produtos)
        })
        console.log(produtos)
        
    }

    const fetchItensPedido = async () => {
        const response = await api.get(`/pedido/${id}`);
        var itensPedido = response.data.itens;
        // console.log(itensPedido)
        fetchProdutosPedido(itensPedido)
    }

    useEffect(() => {
        fetchItensPedido()
    }, [])

    return (
      <>
        <Navbar />
        <Flex
          direction="column"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          pt={0}
        >
          <Heading as="h1" mb={6} textAlign="center">
          </Heading>
          <VStack
            spacing={4}
            align="stretch"
            width="100%"
            maxWidth="800px"
            overflowY="auto"
            maxHeight="100vh"
            p={4}
            borderRadius="lg"
            boxShadow="lg"
          >
            {produtosPedido.map((produtoPedido, index) => (

              <Box key={index} width="100%">
                <SeuPedido
                  imgUrl={produtoPedido.imgUrl}
                  nome={produtoPedido.nome}
                  preco={produtoPedido.preco}
                  quantidadePedido={produtoPedido.quantidadePedido}
                />
                {index < produtosPedido.length - 1 && <Divider my={2} />}
              </Box>
            ))}
          </VStack>
        </Flex>
      </>
    );
  }
  
export default ProdutosPedido;
  