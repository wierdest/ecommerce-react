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
import { useHistory } from 'react-router-dom'

function CarrinhoModal() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const history = useHistory()
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
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis porro iusto nostrum mollitia explicabo qui odio quas perspiciatis minus? At commodi magnam in corrupti hic dignissimos a error pariatur quae!
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