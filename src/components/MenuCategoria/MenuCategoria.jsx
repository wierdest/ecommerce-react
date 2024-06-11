import { ChevronRightIcon} from '@chakra-ui/icons';
import { Menu, MenuButton, MenuList, MenuItem, IconButton } from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';

function MenuCategoria() {
  const history = useHistory()
  const handleNavegacaoCategoria = (event, categoria) => {
    event.preventDefault()
    history.push(`/produtos-por-categoria/${categoria}`)
    window.location.reload()
  }
  const categorias = [
    "eletronicos", "pets", 
    "automotivo", "alimentos", 
    "calcados", "papelaria", 
    "jogos", "livros"
  ]
  return (
      <Menu>
      <MenuButton
        as={IconButton}
        aria-label='Options'
        variant='outline'
      >Categorias</MenuButton>
      <MenuList>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[0])} icon={<ChevronRightIcon />}>
          Eletrônicos
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[1])} icon={<ChevronRightIcon />}>
          Pets
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[2])} icon={<ChevronRightIcon />}>
          Automotivo
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[3])} icon={<ChevronRightIcon />}>
          Alimentos
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[4])} icon={<ChevronRightIcon />}>
          Calçados
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[5])} icon={<ChevronRightIcon />}>
          Papelaria
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[6])} icon={<ChevronRightIcon />}>
          Jogos
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[7])}icon={<ChevronRightIcon />}>
          Livros
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
  
export default MenuCategoria;
  