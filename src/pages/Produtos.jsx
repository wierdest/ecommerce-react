import { SimpleGrid } from '@chakra-ui/react';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { useEffect, useState } from 'react';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';

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

  useEffect(() => {
    obterTodos();
  }, []);
  
  return (
    <>
      <Navbar />
      <SimpleGrid spacing={4} templateColumns="repeat(3,1fr)">
        {produtos.map((produto) => (
          <ProdutoCard 
            key={produto.id} 
            id={produto.id}
            imgUrl={produto.imgUrl} 
            nome={produto.nome}
            preco ={produto.preco}
          />
        ))}
      </SimpleGrid>
    </>
  );
}

export default Produtos;

