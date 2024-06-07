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
import { StarIcon } from '@chakra-ui/icons';
import { useHistory } from 'react-router-dom';

function ProdutoCard({id, imgUrl, nome, descricao, preco, categoria, quantidade}) {
  const history = useHistory()
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
            R$ {preco}
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
          <Button variant="ghost" colorScheme="blue">
            Add to cart
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export default ProdutoCard;
