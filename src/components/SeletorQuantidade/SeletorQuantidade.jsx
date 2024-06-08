import {
    Button,
    HStack,
    Input,
    useNumberInput
  } from '@chakra-ui/react'


function SeletorQuantidade( { quantidadeInicial, quantidadeMaxima, setQuantidadePedido }) {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: quantidadeInicial,
        min: 1,
        max: quantidadeMaxima
    })

    
    
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()

    const alterarQuantidade = (e) => {
      e.preventDefault()
      setQuantidadePedido(input.value)
    }

    return (
      <HStack maxW='200px'>
        <Button onClick={(e) => alterarQuantidade(e)} {...inc}>+</Button>
        <Input {...input}  />
        <Button onClick={(e) => alterarQuantidade(e)} {...dec}>-</Button>
      </HStack>
    )
}

export default SeletorQuantidade