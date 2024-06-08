import { useContext } from 'react';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import {
    Card,
    CardBody,
    CardFooter,
    Stack,
    Image,
    Heading,
    Text,
    IconButton,
    HStack
  } from '@chakra-ui/react';
import SeletorQuantidade from '../SeletorQuantidade/SeletorQuantidade';
import BotaoExcluir from '../BotaoExcluir/BotaoExcluir';

function ItemCarrinho({index, id, imgUrl, nome, descricao, preco, quantidadeEstoque, quantidadePedido}) {
    
    const {carrinho, setCarrinho} = useContext(CarrinhoContext)

    const handleExcluir = () => {
      console.log("ID do item carrinho " + id)
      setCarrinho(carrinho.filter((item) => item.id != id))
    }

    const handleAlteracaoQuantidade = (novaQuantidade ) => {

      var itens = [...carrinho]
      var item = itens[index]
      console.log('Alterando quantidade do item ', index, 'que é ', item.quantidadePedido,  'para ', novaQuantidade)
      console.log('Item nome ', itens[index].nome)
      item.quantidadePedido = novaQuantidade
      setCarrinho(itens)
    
    }

    return (
      <>
        <Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        variant='outline'
        >
        <Image
            objectFit='cover'
            maxW={{ base: '100%', sm: '200px' }}
            src={imgUrl}
            alt='Caffe Latte'
        />
        <Stack>
            <CardBody>
              <HStack>
                  <Heading size='sm'>{nome}</Heading>
                  <BotaoExcluir handleExcluir={handleExcluir} />
              </HStack>
              <Text py='2'>
                  R$ {preco}
              </Text>
            </CardBody>

            <CardFooter>
                <SeletorQuantidade 
                  quantidadeInicial={quantidadePedido} 
                  quantidadeMaxima={quantidadeEstoque}
                  setQuantidadePedido={handleAlteracaoQuantidade}
                />
            </CardFooter>
        </Stack>
        </Card>
      </>
    );
  }
  
export default ItemCarrinho;
  