import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
const config = {
    initialColorMode: "dark",
    useSystemColorMode: false,
    //aqui podemos aprimorar a estilizacao, eh uma boa mermo
  };
  
  export const serrashop = extendTheme(
    { config },
    withDefaultColorScheme({
      colorScheme:"purple",
      components: ['Button']
    })
  );