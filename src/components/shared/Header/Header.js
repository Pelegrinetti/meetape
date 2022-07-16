import Container from "../Container";
import Logo from "./logo.svg";
import styles from "./Header.module.css";
import Image from "next/image";

const Header = () => (
  <Container as="header" className={styles.Header}>
    <Image src={Logo} alt="Meetapê logotipo" width="230" height="50" />
    <menu>
      <li>
        <a href="#">O Evento</a>
      </li>
      <li>
        <a href="#">Palestrantes</a>
      </li>
      <li>
        <a href="#">Apoiadores</a>
      </li>
    </menu>
  </Container>
);

export default Header;
