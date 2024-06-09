import React, { useState } from 'react';
import { Flex, IconButton, useStyleConfig } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

function Avaliacao({ onChange, defaultValue }) {
  const [rating, setRating] = useState(defaultValue || 0);
  const [hoverValue, setHoverValue] = useState(null);

  const handleClick = (value) => {
    setRating(value);
    if (onChange) {
      onChange(value);
    }
  };

  const handleMouseEnter = (value) => {
    setHoverValue(value);
  };

  const handleMouseLeave = () => {
    setHoverValue(null);
  };

  const styles = useStyleConfig('IconButton');

  return (
    <Flex>
      {[...Array(5)].map((_, index) => (
        <IconButton
          key={index}
          icon={<FaStar />}
          onClick={() => handleClick(index + 1)}
          onMouseEnter={() => handleMouseEnter(index + 1)}
          onMouseLeave={handleMouseLeave}
          color={
            index < rating || index < hoverValue ? 'yellow.500' : 'gray.300'
          }
          variant="unstyled"
          sx={{
            '&:hover': {
              color: 'yellow.500',
            },
          }}
          __css={
            index < rating || index < hoverValue
              ? styles.starActive
              : styles.starInactive
          }
        />
      ))}
    </Flex>
  );
}

export default Avaliacao;