import {
  ContainerWaveBottom,
  ContainerWaveTop,
} from "../../styles/GlobalStyles";
import {
  Card,
  CardImage,
  CardText,
  CardTitle,
  GridContainer,
  ServiciosContainer,
} from "./servicios-styles";

export const Servicios = () => {
  return (
    <>
      <ContainerWaveTop>
        <img
          src="assets/imgs/img/ambraco-wave-01.svg"
          alt="imágen efecto ola"
        />
      </ContainerWaveTop>
      <ServiciosContainer>
        <h2>SERVICIOS DESTACADOS</h2>
        <GridContainer>
          <Card>
            <CardImage
              src="assets/imgs/img/visibilidad-marketing-digital.svg"
              alt="visibilidad marketing digital"
            />
            <CardTitle>GENERÁ MÁS VISIBILIDAD CON MARKETING DIGITAL</CardTitle>
            <CardText>
              Alcanzá a tu público ideal en redes sociales, Google Ads y más.
              Multiplicá tus prospectos y convertí la inversión en resultados
              reales.
            </CardText>
          </Card>
          <Card>
            <CardImage
              src="assets/imgs/img/diseño-desarrollo-sitio-web.svg"
              alt="desarrollo sitio web"
            />
            <CardTitle>CONSEGUÍ UN SITIO WEB QUE VENDA</CardTitle>
            <CardText>
              Diseñamos sitios y tiendas online pensando en tu cliente, para que
              cada visita se convierta en una oportunidad de venta.
            </CardText>
          </Card>
          <Card>
            <CardImage
              src="assets/imgs/img/branding-poderoso-identidad-de-marca.svg"
              alt="branding poderoso identidad de marca"
            />
            <CardTitle>DIFERENCIATE CON UN BRANDING PODEROSO</CardTitle>
            <CardText>
              Creamos identidades de marca que transmiten tus valores, generando
              reconocimiento y confianza en tu audiencia.
            </CardText>
          </Card>
          <Card>
            <CardImage
              src="assets/imgs/img/posicionamiento-organico-seo.svg"
              alt="posicionamiento orgainico seo"
            />
            <CardTitle>SUBÍ AL TOP DE LAS BÚSQUEDAS CON SEO</CardTitle>
            <CardText>
              Diseñamos sitios y tiendas online pensando en tu cliente, para que
              cada visita se convierta en una oportunidad de venta.
            </CardText>
          </Card>
          <Card>
            <CardImage
              src="assets/imgs/img/plantillas-web-economicas.svg"
              alt="plantillas web económicas"
            />
            <CardTitle>PLANTILLAS WEB ECONÓMICAS</CardTitle>
            <CardText>
              ¿Buscás un diseño rápido, económico y funcional? Contamos con
              plantillas prediseñadas adaptables a distintos rubros.
            </CardText>
          </Card>
          <Card>
            <CardImage
              src="assets/imgs/img/marketing-tradicional-campañas-eventos.svg"
              alt="marketing tradicional campañas eventos"
            />
            <CardTitle>CONECTÁ CON MARKETING TRADICIONAL</CardTitle>
            <CardText>
              Si tu público también está fuera de lo digital, hacemos eventos y
              campañas clásicas para que tu marca esté donde tiene que estar.
            </CardText>
          </Card>
        </GridContainer>
        <p className="last__p">
          ¿No sabés por dónde empezar? <a href="">Reservá una asesoría</a> y
          contanos qué te preocupa.
        </p>
      </ServiciosContainer>
      <ContainerWaveBottom>
        <img
          src="assets/imgs/img/ambraco-wave-02.svg"
          alt="imágen efecto ola"
        />
      </ContainerWaveBottom>
    </>
  );
};
