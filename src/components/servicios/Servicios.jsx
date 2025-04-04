import { ContainerWave } from "../../styles/GlobalStyles";
import { ServiciosContainer } from "./servicios-styles";

export const Servicios = () => {
  return (
    <>
      <ContainerWave>
        <img
          src="assets/imgs/img/ambraco-wave-01.svg"
          alt="imágen efecto ola"
        />
      </ContainerWave>
      <ServiciosContainer>
        <h2>SERVICIOS DESTACADOS</h2>
        <div>
          <div>
            <div>
              <img
                src="assets/imgs/img/visibilidad-marketing-digital.svg"
                alt="visibilidad marketing digital"
              />
              <h4></h4>
              <p></p>
            </div>
            <div>
              <img
                src="assets/imgs/img/diseño-desarrollo-sitio-web.svg"
                alt="desarrollo sitio web"
              />
              <h4></h4>
              <p></p>
            </div>
            <div>
              <img
                src="assets/imgs/img/branding-poderoso-identidad-de-marca.svg"
                alt="branding poderoso identidad de marca"
              />
              <h4></h4>
              <p></p>
            </div>
          </div>
          <div>
            <div>
              <img
                src="assets/imgs/img/posicionamiento-organico-seo.svg"
                alt="posicionamiento orgainico seo"
              />
              <h4></h4>
              <p></p>
            </div>
            <div>
              <img
                src="assets/imgs/img/plantillas-web-economicas.svg"
                alt="plantillas web económicas"
              />
              <h4></h4>
              <p></p>
            </div>
            <div>
              <img
                src="assets/imgs/img/marketing-tradicional-campañas-eventos.svg"
                alt="marketing tradicional campañas eventos"
              />
              <h4></h4>
              <p></p>
            </div>
          </div>
        </div>
      </ServiciosContainer>
    </>
  );
};
