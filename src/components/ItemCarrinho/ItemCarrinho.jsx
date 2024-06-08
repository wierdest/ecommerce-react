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
            <Heading size='md'>{nome}</Heading>

            <Text py='2'>
                {preco}
            </Text>
            </CardBody>

            <CardFooter>
            <Button variant='solid' colorScheme='blue'>
                Buy Latte
            </Button>
            </CardFooter>
        </Stack>
        </Card>
      </>
    );
  }
  
export default ItemCarrinho;
  