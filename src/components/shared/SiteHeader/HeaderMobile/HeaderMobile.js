import Image from "next/image";
import styles from "./HeaderMobile.module.css";

const HeaderMobile = () => (
  <div className={styles.Header}>
    <div className={styles.Logo}>
      <Image
        src="/assets/images/logo.svg"
        alt="Meetapê logotipo"
        width="230"
        height="50"
      />
    </div>
    <button className={styles.HamburgerButton}>
      <Image
        role="icon"
        src="/assets/icons/bars-solid.svg"
        width="40"
        height="40"
        alt="Ícone de barras para acesso ao menu."
      />
    </button>
  </div>
);

export default HeaderMobile;
