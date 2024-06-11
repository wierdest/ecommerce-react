import React from 'react';
import {
  Box,
  Container,
  Heading,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

const PoliticasDePrivacidade = () => {
  // Utilizando o hook useColorModeValue para ajustar as cores de fundo e texto
  const bg = useColorModeValue('gray.800', 'gray.700'); // fundo escuro
  const color = useColorModeValue('white', 'gray.100'); // texto claro

  return (
    <Container maxW="container.lg" py="8">
      <Box bg={bg} color={color} p="6" borderRadius="md" boxShadow="md">
        <Heading as="h1" size="xl" mb="6" textAlign="center">
          Políticas de Privacidade
        </Heading>
        <VStack spacing="4" align="start">
          <Text fontSize="lg">
            Sua privacidade é importante para nós. Esta política de privacidade
            explica quais informações pessoais coletamos e como as usamos.
          </Text>

          <Heading as="h2" size="md">
            Coleta de Informações
          </Heading>
          <Text>
            Coletamos informações quando você se registra em nosso site, faz um
            pedido, se inscreve em nossa newsletter ou preenche um formulário.
            As informações coletadas incluem seu nome, endereço de e-mail,
            endereço para correspondência e número de telefone.
          </Text>

          <Heading as="h2" size="md">
            Uso das Informações
          </Heading>
          <Text>
            Qualquer informação que coletamos de você pode ser usada para:
          </Text>
          <Box as="ul" pl="5" styleType="disc">
            <Box as="li">Personalizar sua experiência de navegação</Box>
            <Box as="li">Melhorar nosso site</Box>
            <Box as="li">Melhorar o atendimento ao cliente</Box>
            <Box as="li">Processar transações</Box>
            <Box as="li">Enviar e-mails periódicos</Box>
          </Box>

          <Heading as="h2" size="md">
            Proteção das Informações
          </Heading>
          <Text>
            Implementamos uma variedade de medidas de segurança para manter a
            segurança de suas informações pessoais. Utilizamos criptografia
            avançada para proteger informações sensíveis transmitidas online.
            Apenas funcionários autorizados têm acesso a informações pessoais.
          </Text>

          <Heading as="h2" size="md">
            Consentimento
          </Heading>
          <Text>
            Ao utilizar nosso site, você concorda com nossa política de
            privacidade.
          </Text>

          <Heading as="h2" size="md">
            Alterações na Política de Privacidade
          </Heading>
          <Text>
            Reservamos o direito de modificar esta política de privacidade a
            qualquer momento. Qualquer alteração será publicada nesta página.
          </Text>
        </VStack>
      </Box>
    </Container>
  );
};

export default PoliticasDePrivacidade;
