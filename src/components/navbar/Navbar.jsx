import { useState } from "react";
import { HeaderContainer, ItemsContainer, NavContainer } from "./navbar-styles";
import { useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflowY = "auto"; // cleanup si el componente se desmonta
    };
  }, [isOpen]);
  return (
    <HeaderContainer>
      <NavContainer>
        <a href="#">
          <img
            src="assets/imgs/logo/ambraco-agencia-marketing-logo-header.svg"
            alt="Logo Ambraco"
          />
        </a>
        <ItemsContainer $isOpen={isOpen}>
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
      <div
        className={`nav__toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </HeaderContainer>
  );
};
