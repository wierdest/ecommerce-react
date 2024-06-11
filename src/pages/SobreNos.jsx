import { Flex, Box, Heading } from "@chakra-ui/react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";


function SobreNos() {
  return (
    <>
      <Navbar />
      <Flex justifyContent='center'>
        <Box fontSize='lg' fontFamily='Roboto'>
            <div>
                <Heading>
                    Grupo 3: Trabalho Ecommerce React
                    <hr />
              
                    <p>- André Luiz</p>
                    <p>- Jonathan Cardoso</p>
                    <p>- Daniel Ribeiro</p>
                    <p>- Evelyn Chamorro</p>
                    <p>- Luís Fernando</p>
                    <p>- Andressa Rodrigues</p>

                </Heading>  
                
            </div>
        </Box>
      </Flex>
    </>
  );
}

export default SobreNos;
