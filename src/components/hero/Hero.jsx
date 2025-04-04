import { Btn } from "../../styles/GlobalStyles";
import { FirstContainer, GlobalContainer, HeroContainer } from "./hero-styles";

export const Hero = () => {
  return (
    <HeroContainer>
      <GlobalContainer>
        <FirstContainer>
          <h1>¿TE CUESTA ATRAER NUEVOS CLIENTES?</h1>
          <p className="first__p">
            En Ambraco te escuchamos primero para entender los desafíos de tu
            negocio. Después, diseñamos estrategias de marketing que aumentan
            tus ventas y te hacen destacar en un mercado saturado.
          </p>
          <Btn>AGENDÁ TU ASESORÍA SIN COSTO</Btn>
        </FirstContainer>
        <img src="assets/imgs/img/ambraco-agencia-web.svg" alt="" />
      </GlobalContainer>
    </HeroContainer>
  );
};
