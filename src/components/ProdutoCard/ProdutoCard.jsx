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

function ProdutoCard({product}) {
  const {imgUrl, nome, descricao, preco, categoria, quantidade} = product;
  return ( 
    <Card maxW="sm">
      <CardBody>
        <Image
          src={imgUrl}
          alt={descricao}
          borderRadius="lg"
        
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
          <Button variant="solid" colorScheme="blue">
            Buy now
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
