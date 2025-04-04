import { ContainerWaveBottom } from "../../styles/GlobalStyles";
import { SeparadorContainer, TextContainer } from "./separador-styles";

export const Separador = () => {
  return (
    <>
      <SeparadorContainer>
        <img
          src="assets/imgs/img/ambraco-wave-03.svg"
          alt="imágen de separador de contenedores"
        />
      </SeparadorContainer>
      <TextContainer>
        <p>
          Nos encanta ver historias de crecimiento real. Cada proyecto que
          tomamos inicia con una reunión en la que te escuchamos. A partir de
          ahí, planificamos y ejecutamos. Estos son algunos ejemplos de cómo
          nuestras estrategias se convierten en resultados concretos.
        </p>
      </TextContainer>
      <ContainerWaveBottom>
        <img
          src="assets/imgs/img/ambraco-wave-04.svg"
          alt="imágen de separador de contenedores"
        />
      </ContainerWaveBottom>
    </>
  );
};
