import { React, useRef } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button
  } from '@chakra-ui/react'
import { useContext } from 'react';
import { CarrinhoContext } from '../../context/CarrinhoContext';
import { useHistory } from 'react-router-dom'
import ItemCarrinho from '../ItemCarrinho/ItemCarrinho';

function CarrinhoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history = useHistory()
    const {carrinho, setCarrinho} = useContext(CarrinhoContext)
    //usar o set carrinho para atualizar a quantidade de cada produto no pedido
    const handleComprar = () => {
      console.log("Comprou!!")
      history.push("/pedido")
    }
    
    
    const btnRef = useRef(null)
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
            <ModalHeader>Modal Title</ModalHeader>
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
              <Button onClick={onClose}>Close</Button>
              <Button onClick={handleComprar}>Finalizar compra</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default CarrinhoModal;