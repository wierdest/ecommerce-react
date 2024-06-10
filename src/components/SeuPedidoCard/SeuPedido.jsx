import {
    Card,
    CardBody,
    Stack,
    Image,
    Heading,
    Text,
    HStack,
    Flex
  } from '@chakra-ui/react';
import Avaliacao from '../Avaliacao/Avaliacao';
import { api } from '../../api/api';


function SeuPedido({index, id, imgUrl, nome, descricao, preco, quantidadeEstoque, quantidadePedido, avaliacao}) {

  const handleAvaliacaoChange = async (value) => {
    const response = await api.patch(`/produto/${id}`, { avaliacao: value});
    if(response.status == 200) {
      console.log("Produto avaliado com ", response.data.avaliacao, " estrelas!")
    } else {
      console.log("Erro ao avaliar o produto!");
    }
  };

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
                {
                  avaliacao && <Avaliacao
                      onChange={(value) => handleAvaliacaoChange(value)} 
                      defaultValue={0}
                      />
                }
                
                </CardBody>
            </Flex> 
        </Stack>
        </Card>
    </>
  );
}

export default SeuPedido;
