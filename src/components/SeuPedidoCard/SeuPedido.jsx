import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Image,
    Heading,
    Text,
    IconButton,
    HStack,
    Flex
  } from '@chakra-ui/react';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import { useContext } from 'react';
import BotaoExcluir from '../BotaoExcluir/BotaoExcluir';
import ItemCarrinho from '../ItemCarrinho/ItemCarrinho';


function SeuPedido({index, id, imgUrl, nome, descricao, preco, quantidadeEstoque, quantidadePedido}) {

  const {carrinho, setCarrinho} = useContext(CarrinhoContext)

  const handleExcluirItem = () => {
    console.log("ID do item carrinho " + id)
    setCarrinho(carrinho.filter((item) => item.id != id))
  }

  return (
    <>
      <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        borderWidth={5}
        borderColor={'white'}
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={imgUrl}
            alt='Caffe Latte'
        />
        <Stack>
            <Flex>
                <CardBody>
                <HStack>
                    <Heading size='sm'>{nome}</Heading>
                </HStack>
                <Text fontSize='xl'>
                    Quantidade: {quantidadePedido}
                </Text>
                <Text py='2'>
                    R$ {preco}   
                </Text>
                </CardBody>
            </Flex> 
        </Stack>
        </Card>
    </>
  );
}

export default SeuPedido;
