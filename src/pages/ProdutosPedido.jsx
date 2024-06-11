import {
  Box,
  Flex,
  Heading,
  VStack,
  Divider,
} from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { api } from '../api/api';
import { useContext } from 'react';
import Navbar from '../components/Navbar/Navbar';
import SeuPedido from '../components/SeuPedidoCard/SeuPedido';
import Loading from '../components/Loading/Loading';
import { useHistory, useParams } from 'react-router-dom';
import { LogadoContext } from '../context/LogadoContext';

function ProdutosPedido() {
  const { id } = useParams();
  const [produtosPedido, setProdutosPedido] = useState([]);
  const [loading, setLoading] = useState(true);
  const history = useHistory();
  const { estaLogado } = useContext(LogadoContext);

  const fetchProdutosPedido = async (itensPedido) => {
    var produtos = [];
    itensPedido.forEach(async (itemPedido) => {
      var responseProduto = await api.get(`/produto/${itemPedido.idProduto}`);
      var produto = responseProduto.data;
      const produtoHistorico = {
        idProduto: itemPedido.idProduto,
        imgUrl: produto.imgUrl,
        nome: produto.nome,
        preco: produto.preco,
        quantidadePedido: itemPedido.quantidade,
      };

      produtos.push(produtoHistorico);
      setProdutosPedido(produtos);
    });
    console.log(produtos);
  };

  const fetchItensPedido = async () => {
    const response = await api.get(`/pedido/${id}`);
    var itensPedido = response.data.itens;
    // console.log(itensPedido)
    fetchProdutosPedido(itensPedido);
  };

  useEffect(() => {
    if (!estaLogado) {
      history.push('/login');
      return
    }
    try {
      fetchItensPedido();
    } finally {
      setLoading(false);
    }
  }, []);

  return (
    <>
      <Navbar />
      {loading ? (
        <Loading />
      ) : (
        <Flex
          direction="column"
          height="100vh"
          justifyContent="center"
          alignItems="center"
          pt={0}
        >
          <Heading as="h1" mb={6} textAlign="center">
            Seu Pedido: # {id}
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
                  id={produtoPedido.idProduto}
                  imgUrl={produtoPedido.imgUrl}
                  nome={produtoPedido.nome}
                  preco={produtoPedido.preco}
                  quantidadePedido={produtoPedido.quantidadePedido}
                  avaliacao
                />
                {index < produtosPedido.length - 1 && <Divider my={2} />}
              </Box>
            ))}
          </VStack>
        </Flex>
      )}
    </>
  );
}

export default ProdutosPedido;
