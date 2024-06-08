import { Box } from "@chakra-ui/react"
import { useEffect } from "react"
import { useHistory } from 'react-router-dom'

function FinalizarCompra() {
    const history = useHistory()

    useEffect(() => {
        setTimeout(() => {
            history.push('/')
        }, 2800)
    })

    return (
        <>
        <Box flexDirection='column' height="100vh" display="flex" justifyContent="center" alignItems="center">
        <h1>Compra Finalizada Com Sucesso ♡( ◡‿◡ )</h1>
        </Box>
        </>
    )
}
export default FinalizarCompra