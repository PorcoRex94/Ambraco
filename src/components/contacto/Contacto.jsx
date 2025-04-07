import {
  ContainerWaveBottom,
  ContainerWaveTop,
} from "../../styles/GlobalStyles";
import {
  FirstContainer,
  GlobalSection,
  InputContainer,
  SecondContainer,
} from "./contacto-styles";

export const Contacto = () => {
  return (
    <>
      <ContainerWaveTop>
        <img
          src="assets/imgs/img/ambraco-wave-05.svg"
          alt="Imágen simulación de ola"
        />
      </ContainerWaveTop>
      <ContainerWaveTop>
        <img
          src="assets/imgs/img/ambraco-wave-03.svg"
          alt="Imágen simulación de ola"
        />
      </ContainerWaveTop>
      <GlobalSection>
        <FirstContainer>
          <h2>¡CONTACTANOS!</h2>
          <div>
            <p>¿Te quedaron dudas?</p>
            <p>¿Querés saber cómo te podemos ayudar puntualmente?</p>
            <p>
              Dejanos tu mensaje acá o escribinos por WhatsApp. Amamos charlar
              con quienes nos consultan y encontrar la mejor solución.
            </p>
          </div>
        </FirstContainer>
        <SecondContainer action="">
          <InputContainer>
            <input type="text" placeholder="Nombre" required />
            <input type="text" placeholder="Apellido" required />
          </InputContainer>
          <InputContainer>
            <input type="text" placeholder="Nombre de tu negocio" required />
            <input type="tel" placeholder="Teléfono" required />
          </InputContainer>
          <InputContainer>
            <input type="email" placeholder="Correo electrónico" required />
            <input
              type="text"
              placeholder="País/Localidad"
              required
              list="sugerencias"
            />
            <datalist id="sugerencias">
              <option value="México, CDMX" />
              <option value="Argentina, Buenos Aires" />
              <option value="España, Madrid" />
            </datalist>
          </InputContainer>
          <textarea
            name=""
            id=""
            placeholder="Dejanos tu mensaje..."
            required
          ></textarea>
          <button>¡ENVIAR!</button>
        </SecondContainer>
      </GlobalSection>
      <ContainerWaveBottom>
        <img
          src="assets/imgs/img/ambraco-wave-06.svg"
          alt="Imágen simulación de ola"
        />
      </ContainerWaveBottom>
    </>
  );
};
