import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LogadoContext } from '../context/LogadoContext';
import { Box, Image } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';

function Home() {
  const { estaLogado, id } = useContext(LogadoContext);
  const history = useHistory();

  useEffect(() => {
    if (!estaLogado) {
      history.push('/login');
    }
  }, [estaLogado, history]);

  return (
    <>
      <Navbar />
      <Box
        p={'20px'}
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        alt="Descrição da imagem"
        backgroundImage="https://img.freepik.com/fotos-gratis/conceito-de-marketing-de-midia-social-para-marketing-com-aplicativos_23-2150063168.jpg?w=740&t=st=1717800434~exp=1717801034~hmac=de629bcd9f7a4e9cfe465f86d7e342c7dc0992b37814bab774a2b2172f980e9a"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
    </>
  );
}

export default Home;
