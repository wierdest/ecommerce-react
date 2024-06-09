import { SimpleGrid, Input, Box } from '@chakra-ui/react';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { useEffect, useState, useContext } from 'react';
import { LogadoContext } from '../context/LogadoContext';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';
import { useHistory, useParams } from 'react-router-dom';

function ProdutosCategoria() {

  const [produtos, setProdutos] = useState([]);
  const { estaLogado } = useContext(LogadoContext);
  const history = useHistory();
  const { categoria } = useParams()

  useEffect(() => {
    if (!estaLogado) {
      history.push('/login');
    }
  }, [estaLogado, history]);

  const obterTodos = async () => {
    try {
      const response = await api.get('/produto');
      var produtosFiltrados = response.data.filter((produto) => produto.categoria == categoria);
      console.log(produtosFiltrados)
      setProdutos(produtosFiltrados);

    } catch (erro) {
      console.error('Ocorreu um erro obtendo os produtos da categoria ', categoria, erro);
    }
  };

  useEffect(() => {
    obterTodos();
  }, []);

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="2rem"
      >
      </Box>
      <SimpleGrid spacing={4} templateColumns="repeat(3,1fr)">
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
    </>
  );
}

export default ProdutosCategoria;