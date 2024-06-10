import { Flex, Heading} from '@chakra-ui/react';

function MensagemVazia({ nome, mensagem }) {
  return (
    <>
        <Flex
            direction="column"
            height="100vh"
            w="200vh"
            justifyContent="center"
            alignItems="center"
            p={4}
            >
            <Heading as="h1" mb={6} textAlign="center">
            {nome}, {mensagem} 
            </Heading>
        </Flex>
      
    </>
  );
}

export default MensagemVazia;
