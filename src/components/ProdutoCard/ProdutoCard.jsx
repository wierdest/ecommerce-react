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
  useToast,
} from '@chakra-ui/react';
import { StarIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { CarrinhoContext } from '../../context/CarrinhoContext';

function ProdutoCard({id, imgUrl, nome, descricao, preco, categoria, quantidade}) {
  const history = useHistory()
  const toast = useToast()
  const {carrinho, setCarrinho} = useContext(CarrinhoContext)
  const handleComprar = () => {
    var itemCarrinho = {id, imgUrl, nome, descricao, preco}
    setCarrinho([...carrinho, itemCarrinho])
    toast({
      title: 'Produto Adicionado ao Carrinho',
      status: 'success',
      duration: 1500,
      isClosable: true,
    }) 
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
        />
        <Stack mt="6" spacing="3">
          <Heading size="md">{nome}</Heading>
          <Text>
            {descricao}
          </Text>
          <Text color="blue.600" fontSize="2xl">
           {preco !== undefined ? `R$ ${preco.toFixed(2)}` : 'Preço não disponível'}
          </Text>
        </Stack>
        <Stack direction="row" spacing={1} justify="center" align="center">
            {[1, 2, 3, 4, 5].map((_, index) => (
              <StarIcon key={index} color="yellow.400" w={6} h={6} />
            ))}
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={() => {
            {history.push(`/produtos/${id}`)}
          }} variant="solid" colorScheme="blue">
            Saber Mais
          </Button>
          <Button onClick={handleComprar} variant="ghost" colorScheme="blue">
            Comprar
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProdutoCard;
