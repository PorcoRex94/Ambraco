import { HeaderContainer, ItemsContainer, NavContainer } from "./navbar-styles";

export const Navbar = () => {
  return (
    <HeaderContainer>
      <NavContainer>
        <a href="#">
          <img
            src="assets/imgs/logo/ambraco-agencia-marketing-logo-header.svg"
            alt="Logo Ambraco"
          />
        </a>
        <ItemsContainer>
          <li>
            <a href="">Incio</a>
          </li>
          <li>
            <a href="#servicios">Servicios</a>
          </li>
          <li>
            <a href="#contacto">Contacto</a>
          </li>
          <li>
            <a href="" className="li__diferente">
              Reservar Cita
            </a>
          </li>
        </ItemsContainer>
      </NavContainer>
    </HeaderContainer>
  );
};
