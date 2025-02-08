import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.about}>
      <span className={styles.mini}>О компании</span>
      <h1 className={styles.content}>
        Ника - это компания, предстовляющая услуги логистики{" "}
        <b>крупнотоннажных мультимодальных</b> и <b>негабаритных</b> грузов.
      </h1>
    </div>
  );
};

export default About;
