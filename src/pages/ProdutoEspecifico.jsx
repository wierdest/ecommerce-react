import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
} from '@chakra-ui/react';
import { px } from 'framer-motion';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';
import { api } from '../api/api';

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
    <ProdutoCard 
    key={id} 
    imgUrl={produto.imgUrl} 
    nome={produto.nome}
    descricao={produto.descricao}
    preco ={produto.preco}
  
    />
  );
}

export default ProdutoEspecifico;
