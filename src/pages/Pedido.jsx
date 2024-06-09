import { Button, Box, Flex, Heading, useToast, VStack, Divider, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import ItemCarrinho from '../components/ItemCarrinho/ItemCarrinho';
import { api } from '../api/api';
import { LogadoContext } from '../context/LogadoContext';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import SeuPedido from '../components/SeuPedidoCard/SeuPedido';


function Pedido() {
  const history = useHistory();
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);
  const { id } = useContext(LogadoContext);
  const toast = useToast();

  const atualizarEstoque = async (id, quantidadeEstoque, novaQuantidade) => {
    try {
        await api.patch(`/produto/${id}`, { quantidadeEstoque: (quantidadeEstoque - novaQuantidade) });
        console.log('Estoque atualizado com sucesso');
    } catch (error) {
        console.error('Erro ao atualizar estoque', error);
    }
};

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
        var itens = [...carrinho]
        console.log('Pedido efetuado com sucesso!');
        history.push('/finalizar-compra');
        console.log(carrinho)
        carrinho.forEach((item) => {
          atualizarEstoque(item.id, item.quantidadeEstoque, item.quantidadePedido);
        });
        //setar para ficar limpo apos a compra
        setCarrinho([])
      }
    } catch (error) {
      console.error('Erro ao fazer o post de cadastro!', error);
    }
  };

  return (
    <>
      <Navbar />
      <Flex
        direction="column"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        pt={0}
      >
        <Heading as="h1" mb={6} textAlign="center">
        </Heading>
        <VStack
          spacing={4}
          align="stretch"
          width="100%"
          maxWidth="800px"
          overflowY="auto"
          maxHeight="100vh"
          p={4}
          borderRadius="lg"
          boxShadow="lg"
        >
          {carrinho.map((itemCarrinho, index) => (
            <Box key={index} width="100%">
              <SeuPedido
                imgUrl={itemCarrinho.imgUrl}
                nome={itemCarrinho.nome}
                preco={itemCarrinho.preco}
                quantidadePedido={itemCarrinho.quantidadePedido}
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
          Finalizar  Compra
        </Button >
      </Flex>
    </>
  );
}

export default Pedido;
