import { SimpleGrid, Input, Box } from '@chakra-ui/react';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { useEffect, useState, useContext } from 'react';
import { LogadoContext } from '../context/LogadoContext';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';
import { useHistory } from 'react-router-dom';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('');

  const { estaLogado } = useContext(LogadoContext);
  const history = useHistory();

  useEffect(() => {
    if (!estaLogado) {
      history.push('/login');
    }
  }, [estaLogado, history]);

  const obterTodos = async () => {
    try {
      const response = await api.get('/produto');

      setProdutos(response.data.filter((produto) => produto.quantidade > 0));
    } catch (erro) {
      console.error('Ocorreu um erro obtendo os produtos', erro);
    }
  };

  useEffect(() => {
    obterTodos();
  }, []);

  const filtrarProdutos = () => {
    return produtos.filter((produto) =>
      produto.nome.toLowerCase().includes(filtro.toLowerCase())
    );
  };

  

  return (
    <>
      <Navbar />
      <Box
        display="flex"
        alignItems="center"
        p={'20px'}
      >
        <Input
          placeholder="Pesquisar produto..."
          value={filtro}
          onChange={(e) => setFiltro(e.target.value)}
          mb={4}
          sx={{
            width: '350px',
            fontSize: 'sm',
            padding: '1rem 1rem',
          }}
        />
      </Box>

      <SimpleGrid p={'20px'} spacing={4} templateColumns="repeat(4, 1fr)">
        {filtrarProdutos().map((produto) => (
          <ProdutoCard
            key={produto.id}
            id={produto.id}
            imgUrl={produto.imgUrl}
            nome={produto.nome}
            preco={produto.preco}
            categoria={produto.categoria}
            quantidadeEstoque={produto.quantidade}
            quantidadePedido={1}
            avaliacao={produto.avaliacao != null ? produto.avaliacao : null}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Produtos;
