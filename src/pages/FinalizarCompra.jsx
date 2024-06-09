import { Box } from "@chakra-ui/react"
import ShowConfetti from "../components/ShowConfetti/ShowConfetti"

function FinalizarCompra() {
    return (
        <>
        <Box flexDirection='column' height="100vh" display="flex" justifyContent="center" alignItems="center">
        <h1>Compra Finalizada Com Sucesso ♡( ◡‿◡ )</h1>
        <ShowConfetti/>
        </Box>
        </>
    )
}
export default FinalizarCompra