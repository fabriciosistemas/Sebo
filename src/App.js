import logo from "./logo.svg";
import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import Formulario from "./components/Formulario";

function App() {
  return (
    <>
      <ChakraProvider>
        <Formulario />
      </ChakraProvider>
    </>
  );
}

export default App;
