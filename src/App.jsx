import { Carousel } from "./components/carousel/Carousel";
import { CarouselBottom } from "./components/carousel/CarouselBottom";
import { Hero } from "./components/hero/Hero";
import { Navbar } from "./components/navbar/Navbar";
import { Separador } from "./components/separador/Separador";
import { Servicios } from "./components/servicios/Servicios";
import { GlobalStyles } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <Navbar />
      <Hero />
      <Servicios />
      <Carousel title="PLANTILLAS WEB" />
      <Separador />
      <CarouselBottom />
    </>
  );
}

export default App;
