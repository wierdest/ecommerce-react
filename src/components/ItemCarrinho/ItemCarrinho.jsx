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

function ItemCarrinho({imgUrl, nome, descricao, preco, quantidadePedido}) {
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
                  <BotaoExcluir />
              </HStack>
              <Text py='2'>
                  R$ {preco}
              </Text>
               
            </CardBody>

            <CardFooter>
                <SeletorQuantidade/>
            </CardFooter>
        </Stack>
        </Card>
      </>
    );
  }
  
export default ItemCarrinho;
  