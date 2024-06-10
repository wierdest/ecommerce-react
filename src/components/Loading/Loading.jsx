import { Flex, Spinner } from "@chakra-ui/react"

function Loading() {
    return(
        <Flex
            direction="column"
            height="100vh"
            w="100vw"
            justifyContent="center"
            alignItems="center"
            p={4}
            >
            <Spinner size="xl" />
        </Flex>
    )
        
}

export default Loading