import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import {
  ContainerFooterBottom,
  ContainerFooterTop,
  ContainerIcon,
  Copyright,
  UlContainer,
} from "./footer-styles";

export const Footer = () => {
  return (
    <footer>
      <ContainerFooterTop>
        <img
          src="assets/imgs/logo/ambraco-marketing-agencia-logo-footer.svg"
          alt="Logo Ambraco"
        />
        <UlContainer>
          <li>
            <a href="">INICIO</a>
          </li>
          <li>
            <a href="">SERVICIOS</a>
          </li>
          <li>
            <a href="">RESERVAR CITA</a>
          </li>
          <li>
            <a href="">CONTACTO</a>
          </li>
          <li>
            <a href="">POLÍTICA DE PRIVACIDAD</a>
          </li>
        </UlContainer>
        <ContainerFooterBottom>
          <a href="tel:+549116672-2521">+54 9 11 6672-2521</a>
          <a href="mailto:info@ambraco.com.ar">info@ambraco.com.ar</a>
          <ContainerIcon>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
            <a href="">
              <FaWhatsapp />
            </a>
          </ContainerIcon>
        </ContainerFooterBottom>
      </ContainerFooterTop>
      <Copyright>
        <p>
          Copyright © 2025 Ambraco - Developed by <span>Ambraco</span>.
        </p>
      </Copyright>
    </footer>
  );
};
