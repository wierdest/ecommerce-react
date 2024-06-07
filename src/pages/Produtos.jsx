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
      console.log(response.data)
    } catch (erro) {
      console.error('Ocorreu um erro obtendo os produtos', erro);
    }
  };

  const obterProdutoPorId = async() => {
    try {
      const response = await api.get(`/produto/${id}`);
      setProdutos([response.data]);
        } catch (error) {
      console.error('Não foi possível encontrar esse produto específico.')
    }
  }
  useEffect(() => {
    obterTodos();
  }, []);
  return (
    <>
      <SimpleGrid spacing={4} templateColumns="repeat(3,1fr)">
        {produtos.map((product) => (
        <ProdutoCard key={product.id} product={product} />
        )

        )}
        
      </SimpleGrid>
    </>
  );
}

export default Produtos;

