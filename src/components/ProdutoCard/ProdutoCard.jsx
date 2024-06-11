import React, { useState, useEffect } from 'react';
import {
  Badge,
  Card,
  CardBody,
  CardFooter,
  Stack,
  Image,
  Heading,
  Text,
  Divider,
  ButtonGroup,
  Button,
  useToast,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CarrinhoContext } from '../../context/CarrinhoContext';

function ProdutoCard({id, imgUrl, nome, descricao, preco, categoria, quantidadeEstoque, quantidadePedido, avaliacao}) {
  const history = useHistory()
  const toast = useToast()

  const [estrelas, setEstrelas] = useState(0)

  const {carrinho, setCarrinho} = useContext(CarrinhoContext)

  useEffect(() => {
    const gerarEstrelasAleatorias = () => Math.floor(Math.random() * 5) + 1;
    setEstrelas(gerarEstrelasAleatorias());
  }, []);

  const handleComprar = () => {

    var itemCarrinho = {id, imgUrl, nome, descricao, preco, quantidadeEstoque, quantidadePedido}

    if(quantidadeEstoque <= 0) {
      toast({
        title: 'Quantidade excedida',
        status: 'error',
        duration: 1500,
        isClosable: true,
      })
      return;
    }

    var itens = [...carrinho]
    var itemAdicionarMaisUm = false
    var adicionar = true;
    
    itens.forEach((item) => {
      if(item.id == id) {
        var estoque = item.quantidadeEstoque - item.quantidadePedido
        console.log('Estoque ' + (quantidadeEstoque - item.quantidadePedido))
        if(estoque <= 0) {
          toast({
            title: 'Quantidade excedida',
            status: 'error',
            duration: 1500,
            isClosable: true,
          })
          itemAdicionarMaisUm = false
          adicionar = false;
        } else {
          item.quantidadePedido++
          itemAdicionarMaisUm = true
        } 
      }
    })

    if(itemAdicionarMaisUm) {
      console.log('Adicionando mais um!')
      setCarrinho([...itens])

    } else {
      if(adicionar) {
        setCarrinho([...itens, itemCarrinho])
        toast({
          title: 'Produto Adicionado ao Carrinho',
          status: 'success',
          duration: 1500,
          isClosable: true,
        }) 
      }

    }


   
  }
  return ( 
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imgUrl}
          alt={descricao}
          borderRadius="lg"
          boxSize="300px"
          objectFit="contain"
          display="block"
          mx="auto"
          mb="4"
        />
          <Badge mb="4" colorScheme='red'>{categoria}</Badge>
         <Heading size="md">{nome}</Heading>
      </CardBody>
      <Stack alignItems='center' mt="6" spacing="3">
         
          <Text>{descricao}</Text>
          <Text color="white.600" fontSize="2xl">
            {preco !== undefined
              ? `R$ ${preco.toFixed(2)}`
              : 'Preço não disponível'}
          </Text>
        </Stack>
        <Stack direction="row" spacing={1} justify="center" align="center" mb="4">
          {

            [...Array( avaliacao != null ? avaliacao : estrelas)].map((_, index) => (
              <StarIcon key={index} color="yellow.400" w={6} h={6} />
            ))
          
          }
        </Stack>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button
            variant="ghost"
            onClick={() => {
              {
                history.push(`/produtos/${id}`);
              }
            }}
            
            colorScheme="blue"
          >
            Saber Mais
          </Button>
          <Button onClick={handleComprar} variant="solid" >
            Comprar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProdutoCard;
