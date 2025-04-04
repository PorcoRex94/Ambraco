import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Servicios } from "./components/servicios/Servicios";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Servicios />
    </>
  );
}

export default App;
