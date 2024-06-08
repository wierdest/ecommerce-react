import {
    Button,
    HStack,
    Input,
    useNumberInput
  } from '@chakra-ui/react'


function SeletorQuantidade() {
    const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
      useNumberInput({
        step: 1,
        defaultValue: 1,
        min: 1,
      })
  
    const inc = getIncrementButtonProps()
    const dec = getDecrementButtonProps()
    const input = getInputProps()
  
    return (
      <HStack maxW='200px'>
        <Button {...inc}>+</Button>
        <Input {...input} />
        <Button {...dec}>-</Button>
      </HStack>
    )
}

export default SeletorQuantidade