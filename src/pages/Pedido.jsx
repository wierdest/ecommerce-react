import { Button, Box, useToast } from '@chakra-ui/react';
import { useContext } from 'react';
import { CarrinhoContext } from '../context/CarrinhoContext';
import ItemCarrinho from '../components/ItemCarrinho/ItemCarrinho';
import { api } from '../api/api';
import { LogadoContext } from '../context/LogadoContext';
import { useHistory } from 'react-router-dom';

function Pedido() {

  const history = useHistory()
  const {carrinho, setCarrinho} = useContext(CarrinhoContext)
  const {id} = useContext(LogadoContext)
  const toast = useToast()

  const handleComprar = async () => {
    console.log('cadastrando um pedido no database')
    var valorTotal = 0;
    var itensPedido = [];
    carrinho.map((itemCarrinho) => {
      valorTotal += itemCarrinho.preco
      itensPedido.push(
        {
          idProduto: itemCarrinho.id,
          quantidade: itemCarrinho.quantidadePedido,
        }
      )
         
    }) 

    toast({
      title: 'Compra Finalizada com sucesso',
      description: "Pedido encaminhado!",
      status: 'success',
      duration: 3000,
      isClosable: true,
    }) 

    try {
      const response = await api.post('/pedido/',
          {
              valorTotal: parseFloat(valorTotal).toFixed(2),
              idUser: id,
              itens: itensPedido 
          }
      )
      if(response.status == 201) {
          console.log('Pedido efetuado com sucesso!');
          history.push('/finalizar-compra')
      }

  } catch (error) {
      console.error('Erro ao fazer o post de cadastro!', error);
  }
  }

  return (
    <>
      
      <Box flexDirection='column' height="100vh" display="flex" justifyContent="center" alignItems="center">
      <h1>Seu Pedido: </h1>
      {carrinho.map((itemCarrinho, index) => (
                <ItemCarrinho
                  key={index}
                  imgUrl={itemCarrinho.imgUrl}
                  nome={itemCarrinho.nome}
                  preco={itemCarrinho.preco}
                />
              ))}
          <Button onClick={handleComprar}>
          Finalizar Compra
        </Button>

      </Box>
    </>
  )
}
  
  export default Pedido