import React, { useState, useEffect } from 'react';
import { Box } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import Confetti from 'react-confetti';

function ShowConfetti() {
  const history = useHistory();
  const [showConfetti, setShowConfetti] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowConfetti(false);
      history.push('/pedidos');
    }, 3800);
    return () => clearTimeout(timer);
  }, [history]);

  return (
    <>
      {showConfetti && <Confetti />}
      <Box
        flexDirection="column"
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
      ></Box>
    </>
  );
}

export default ShowConfetti;