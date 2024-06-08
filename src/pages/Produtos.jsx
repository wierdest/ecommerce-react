import { SimpleGrid, Input, Box } from '@chakra-ui/react';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { useEffect, useState } from 'react';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
  const [filtro, setFiltro] = useState('');

  const obterTodos = async () => {
    try {
      const response = await api.get('/produto');
      setProdutos(response.data);
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
        justifyContent="flex-start"
        alignItems="center"
        paddingLeft="2rem"
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
      <SimpleGrid spacing={4} templateColumns="repeat(3,1fr)">
        {filtrarProdutos().map((produto) => (
          <ProdutoCard
            key={produto.id}
            id={produto.id}
            imgUrl={produto.imgUrl}
            nome={produto.nome}
            preco={produto.preco}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Produtos;
