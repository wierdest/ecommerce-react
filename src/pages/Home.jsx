import { useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { LogadoContext } from '../context/LogadoContext';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';

function Home() {
  const { estaLogado } = useContext(LogadoContext);
  const history = useHistory();

  useEffect(() => {
    if (!estaLogado) {
      history.push('/login');
    }
  }, [estaLogado, history]);

  return (
    <>
      <Navbar />
      <div>
        <img
          src="https://media.discordapp.net/attachments/1211771660508733471/1248731657658437632/image.png?ex=6664bb7b&is=666369fb&hm=ed43213a54919e9e2fd29f3ad96d35b0614fb1bbab4b23fa25282d6c9ecd3739&=&format=webp&quality=lossless"
          alt=""
          height="100%"
          width="100%"
          display="flex"
        />
      </div>
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        backgroundImage="https://img.freepik.com/fotos-gratis/conceito-de-marketing-de-midia-social-para-marketing-com-aplicativos_23-2150063168.jpg?w=740&t=st=1717800434~exp=1717801034~hmac=de629bcd9f7a4e9cfe465f86d7e342c7dc0992b37814bab774a2b2172f980e9a"
        backgroundSize="cover"
        backgroundPosition="center"
      ></Box>
    </>
  );
}

export default Home;
