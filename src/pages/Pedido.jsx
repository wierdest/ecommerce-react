import { Button, Box, Flex, Heading, useToast, VStack, Divider } from '@chakra-ui/react';
import { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import ItemCarrinho from '../components/ItemCarrinho/ItemCarrinho';
import { api } from '../api/api';
import { LogadoContext } from '../context/LogadoContext';
import { useHistory } from 'react-router-dom';

function Pedido() {
  const history = useHistory();
  const { carrinho } = useContext(CarrinhoContext);
  const { id } = useContext(LogadoContext);
  const toast = useToast();

  const handleComprar = async () => {
    console.log('cadastrando um pedido no database');
    let valorTotal = 0;
    const itensPedido = [];

    carrinho.forEach((itemCarrinho) => {
      valorTotal += itemCarrinho.preco;
      itensPedido.push({
        idProduto: itemCarrinho.id,
        quantidade: itemCarrinho.quantidadePedido,
      });
    });

    toast({
      title: 'Compra Finalizada com sucesso',
      description: 'Pedido encaminhado!',
      status: 'success',
      duration: 3000,
      isClosable: true,
    });

    try {
      const response = await api.post('/pedido/', {
        valorTotal: parseFloat(valorTotal).toFixed(2),
        idUser: id,
        itens: itensPedido,
      });
      if (response.status === 201) {
        console.log('Pedido efetuado com sucesso!');
        history.push('/finalizar-compra');
      }
    } catch (error) {
      console.error('Erro ao fazer o post de cadastro!', error);
    }
  };

  return (
    <>
   
      <Flex
        direction="column"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        p={4}
        bg=""
      >
        <Heading as="h1" mb={6} textAlign="center">
          - Seu Pedido -
        </Heading>
        <VStack
          spacing={4}
          align="stretch"
          width="100%"
          maxWidth="800px"
          overflowY="auto"
          maxHeight="100vh"
          p={4}
          bg="  "
          borderRadius="lg"
          boxShadow="lg"
        >
          {carrinho.map((itemCarrinho, index) => (
            <Box key={index} width="100%">
              <ItemCarrinho
                imgUrl={itemCarrinho.imgUrl}
                nome={itemCarrinho.nome}
                preco={itemCarrinho.preco}
              />
              {index < carrinho.length - 1 && <Divider my={2} />}
            </Box>
          ))}
        </VStack>
        <Button
          onClick={handleComprar}
          mt={2}
          height={100}
          colorScheme="green"
          size="lg"
          width="100%"
          maxWidth="700px"
        >
          Finalizar Compra
        </Button>
      </Flex>
    </>
  );
}

export default Pedido;
