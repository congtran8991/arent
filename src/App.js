import "./App.css";
import Router from "./Router";
import Header from "./Component/Header";
import Footer from "./Component/Footer";
import { ChakraProvider, Box } from "@chakra-ui/react";
function App() {
  // eslint-disable-next-line react/react-in-jsx-scope
  return (
    <ChakraProvider>
      <Header />
      <Box marginTop={"64px"}>
        <Router />
      </Box>
      <Footer />
    </ChakraProvider>
  );
}
export default App;
