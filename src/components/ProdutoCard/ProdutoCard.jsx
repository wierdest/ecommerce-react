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
import { px } from 'framer-motion';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function ProdutoCard({product}) {
  const {imgUrl, nome, descricao, preco, categoria, quantidade} = product;
  const history = useHistory()
  const {id} = useParams()

  useEffect(() => {
    
  }, []);


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
            {preco}
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <ButtonGroup spacing="2">
          <Button onClick={() => {
            {history.push("/produto-especifico")}
          }} variant="solid" colorScheme="blue">
            Saber Mais
          </Button>
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProdutoCard;
