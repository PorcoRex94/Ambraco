import { Btn } from "../../styles/GlobalStyles";
import {
  FirstContainer,
  GlobalContainer,
  HeroContainer,
  SecondGlobalContainer,
} from "./hero-styles";

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
      <SecondGlobalContainer>
        <h3>ESCUCHAR, CREAR, CRECER</h3>
        <p>
          Sabemos lo desgastante que puede ser invertir en marketing y no ver
          resultados concretos. Por eso, en Ambraco combinamos marketing digital
          y tradicional para darte la solución que realmente necesitás. Primero
          comprendemos tu situación; luego trabajamos codo a codo con vos para
          potenciar tu negocio donde más lo necesite.
        </p>
        <p>
          ¿Empezamos? <a href="#">Reservá tu cita</a> y contanos tu caso.
        </p>
      </SecondGlobalContainer>
    </HeroContainer>
  );
};
