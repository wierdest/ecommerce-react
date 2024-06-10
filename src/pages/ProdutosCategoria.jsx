import {
  SimpleGrid,
  Input,
  Box,
  Flex,
  Heading
} from '@chakra-ui/react';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { useEffect, useState, useContext } from 'react';
import { LogadoContext } from '../context/LogadoContext';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';
import { useHistory, useParams } from 'react-router-dom';
import Loading from '../components/Loading/Loading';

function ProdutosCategoria() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(true);
  const { estaLogado } = useContext(LogadoContext);
  const history = useHistory();
  const { categoria } = useParams();

  useEffect(() => {
    if (!estaLogado) {
      history.push('/login');
    }
    obterTodos();
  }, [estaLogado, history]);

  const obterTodos = async () => {
    try {
      const response = await api.get('/produto');
      var produtosFiltrados = response.data.filter(
        (produto) => produto.quantidade > 0 && produto.categoria === categoria
      );
      console.log(produtosFiltrados);
      setProdutos(produtosFiltrados);
    } catch (erro) {
      console.error(
        'Ocorreu um erro obtendo os produtos da categoria ',
        categoria,
        erro
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="2rem"
      ></Box>
      {loading ? 
        <Loading/>
      : produtos.length > 0 ? (
        <SimpleGrid spacing={4} templateColumns="repeat(3, 1fr)">
          {produtos.map((produto) => (
            <ProdutoCard
              key={produto.id}
              id={produto.id}
              imgUrl={produto.imgUrl}
              nome={produto.nome}
              preco={produto.preco}
              categoria={produto.categoria}
              quantidadeEstoque={produto.quantidade}
              quantidadePedido={1}
            />
          ))}
        </SimpleGrid>
      ) : (
        <Flex
          direction="column"
          height="100vh"
          w="100vw"
          justifyContent="center"
          alignItems="center"
          p={4}
        >
          <Heading as="h1" mb={6} textAlign="center">
            Não temos mais nenhum produto nessa categoria! <br /> Volte amanhã!
          </Heading>
        </Flex>
      )}
    </>
  );
}

export default ProdutosCategoria;