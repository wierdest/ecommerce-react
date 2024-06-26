import { Flex } from '@chakra-ui/react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { api } from '../api/api';
import Navbar from '../components/Navbar/Navbar';


function ProdutoEspecifico() {
  
  const { id } = useParams()

  const [produto, setProduto] = useState({})

  const obterProdutoPorId = async() => {
    try {
        const response = await api.get(`/produto/${id}`)
        console.log(response.data)
        setProduto(response.data);
      } catch (error) {
        console.error('Não foi possível encontrar esse produto específico.' + id, error)
    }
  }

  useEffect(() => {
    obterProdutoPorId();
  }) 


  return ( 
    <>
       <Navbar/>
       <Flex w='100vw'  justifyContent='center' >
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
          especifico
        />
       </Flex>
       
    
    </>
   
  );
}

export default ProdutoEspecifico;
