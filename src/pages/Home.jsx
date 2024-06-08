import { useContext, useEffect } from "react";
import { Redirect, useHistory } from 'react-router-dom';
import { LogadoContext } from '../context/LogadoContext';
import { Box, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import myImage from '../assets/img/logoserrashop.png'


function Home() {
  const { estaLogado } = useContext(LogadoContext);
  const history = useHistory();

  useEffect(() => {
    if (!estaLogado) {
      history.push('/login');
    }
  }, []);
  return (
    <>
      <Box marginRight='30px'>
      <Image
        src={myImage}
        width='30%'
   
      />
      </Box>
      <Navbar   />
      {/* aqui entrara a categoria dos itens e o filter de cada um, se der tempo */}
      <Box as="li">
        <Image
          borderRadius='full'
          boxSize='250px'
          src=''/>
        <Image
          borderRadius='full'
          boxSize='250px'
          src=''
        />
        <Image
          borderRadius='full'
          boxSize='250px'
          src=''
        />
      </Box>
    </>
  );
}

export default Home;
