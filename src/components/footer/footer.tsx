import Logo from "@ui/logo";
import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.main}>
      <Logo size={150} />
      <p className={styles.text}>ООО "НИКА" © 2025</p>
    </footer>
  );
};

export default Footer;
