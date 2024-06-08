import { React, useRef, useContext } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  Flex,
} from '@chakra-ui/react';
import { useHistory } from 'react-router-dom';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import ItemCarrinho from '../ItemCarrinho/ItemCarrinho';

function CarrinhoModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const history = useHistory();
  const { carrinho, setCarrinho } = useContext(CarrinhoContext);

  const handleComprar = () => {
    console.log('Comprou!!');
    history.push('/pedido');
  };

  const btnRef = useRef(null);

  return (
    <>
      <Button ref={btnRef} onClick={onOpen}>
        Carrinho
      </Button>

      <Modal
        onClose={onClose}
        finalFocusRef={btnRef}
        isOpen={isOpen}
        scrollBehavior={'inside'}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Meu carrinho</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {carrinho.map((itemCarrinho, index) => (
              <ItemCarrinho
                key={index}
                imgUrl={itemCarrinho.imgUrl}
                nome={itemCarrinho.nome}
                preco={itemCarrinho.preco}
                quantidadePedido={itemCarrinho.quantidadePedido}
              />
            ))}
          </ModalBody>
          <ModalFooter>
            <Flex w="100%" justifyContent="flex-end" gap={4}>
              <Button colorScheme="red" onClick={onClose}>
                Fechar
              </Button>
              <Button colorScheme="blue" onClick={handleComprar}>
                Finalizar compra
              </Button>
            </Flex>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default CarrinhoModal;
