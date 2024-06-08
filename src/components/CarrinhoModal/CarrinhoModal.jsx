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
    Flex
} from '@chakra-ui/react'
import { PiShoppingCart } from "react-icons/pi";
import { CarrinhoContext } from '../../context/CarrinhoContext';
import ItemCarrinho from '../ItemCarrinho/ItemCarrinho';
import { useHistory } from 'react-router-dom'

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
            <ModalHeader>Meu carrinho</ModalHeader>
            <ModalCloseButton />
            <ModalBody>

              {
                carrinho.length == 0
                ?
                <Flex justifyContent="center" alignItems="center" w="100%">
                  <PiShoppingCart fontSize={64} />
                </Flex>
                :

                carrinho.map((itemCarrinho, index) => (
                  <ItemCarrinho
                    key={index}
                    imgUrl={itemCarrinho.imgUrl}
                    nome={itemCarrinho.nome}
                    preco={itemCarrinho.preco}
                    quantidadePedido={itemCarrinho.quantidadePedido}
                  />
                ))
              }

            </ModalBody>
            <ModalFooter>
            <Flex w="100%" justifyContent="flex-end" gap={4}>
              <Button onClick={onClose}>Fechar</Button>
              {
                carrinho.length != 0 && <Button onClick={handleComprar}>Finalizar compra</Button>
              }

            </Flex>
              
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
export default CarrinhoModal;
