import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
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
        variant='ghost'
      >Categorias</MenuButton>
      <MenuList>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[0])} icon={<AddIcon />}>
          Eletrônicos
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[1])} icon={<ExternalLinkIcon />}>
          Pets
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[2])} icon={<RepeatIcon />}>
          Automotivo
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[3])} icon={<EditIcon />}>
          Alimentos
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[4])} icon={<AddIcon />}>
          Calçados
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[5])} icon={<ExternalLinkIcon />}>
          Papelaria
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[6])} icon={<RepeatIcon />}>
          Jogos
        </MenuItem>
        <MenuItem onClick={(e) => handleNavegacaoCategoria(e, categorias[7])}icon={<EditIcon />}>
          Livros
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
  
export default MenuCategoria;
  