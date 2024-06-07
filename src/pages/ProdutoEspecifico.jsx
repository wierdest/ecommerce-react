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
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';


function ProdutoEspecifico() {
  
  const {id} = useParams()
  const {produto, setProduto} = useState({})
  
  useEffect(() => {
    obterProdutoPorId();
  }) 

  const obterProdutoPorId = async() => {
    try {
      const response = await api.get(`/produto/${id}`);
      setProduto([response.data]);
        } catch (error) {
      console.error('Não foi possível encontrar esse produto específico.')
    }
  }

  return ( 
    <ProdutoCard key={produto.id} product={produto} />
  );
}

export default ProdutoEspecifico;
