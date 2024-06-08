import { DeleteIcon } from '@chakra-ui/icons';
import { IconButton } from '@chakra-ui/react'

function BotaoExcluir() {
    return (
      <>
        <IconButton
            isRound={true}
            variant='solid'
            colorScheme='red'
            aria-label='Done'
            fontSize='18px'
            size="sm"
            icon={<DeleteIcon />}
        />
      
      </>
    );
  }
  
export default BotaoExcluir;
  