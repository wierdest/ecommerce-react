import { SimpleGrid } from '@chakra-ui/react';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { useEffect, useState } from 'react';
import { api } from '../api/api';

function Produtos() {
  const [produtos, setProdutos] = useState([]);
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
  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(3,1fr)">
        <ProdutoCard />
        <ProdutoCard />
        <ProdutoCard />
      </SimpleGrid>
    </>
  );
}

export default Produtos;

