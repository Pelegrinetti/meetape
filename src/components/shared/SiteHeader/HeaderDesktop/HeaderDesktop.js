import Image from "next/image";
import Container from "../../Container";
import styles from "./HeaderDesktop.module.css";

const SiteHeader = () => (
  <Container as="header" className={styles.Header}>
    <Image
      src="/assets/images/logo.svg"
      alt="Meetapê logotipo"
      width="230"
      height="50"
    />
    <nav>
      <a href="#">O Evento</a>
      <a href="#">Palestrantes</a>
      <a href="#">Apoiadores</a>
    </nav>
  </Container>
);

export default SiteHeader;
