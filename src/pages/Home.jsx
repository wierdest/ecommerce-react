import { useContext, useEffect } from 'react';
import { Redirect, useHistory } from 'react-router-dom';
import { LogadoContext } from '../context/LogadoContext';
import { Box } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import ProdutoCard from '../components/ProdutoCard/ProdutoCard';

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
      <Navbar />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <h1>HOME PAGE</h1>
        <ProdutoCard />
      </Box>
    </>
  );
}

export default Home;
