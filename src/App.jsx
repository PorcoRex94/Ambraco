import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
    </>
  );
}

export default App;
