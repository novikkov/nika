import ServiceItem from "./service-item";
import styles from "./services.module.css";

const Services = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Наши услуги</h2>
      <div className={styles.content}>
        <ServiceItem
          src="/special_transport.jpg"
          title={
            <>
              Перевозка <b>строительной техники</b>
            </>
          }
        >
          Мы предлагаем услугу по перевозке строительной техники, включая
          экскаваторы, бульдозеры и грузовые краны. Наша задача - максимально
          удовлетворить потребности клиента в перевозке строительного
          оборудования.
        </ServiceItem>
        <ServiceItem
          src="/support_transport.webp"
          title={
            <>
              Сопровождение <b>вашего груза</b>
            </>
          }
        >
          Наша компания предоставляет профессиональное сопровождение груза на
          всем протяжении маршрута. Команда специально обученных сопровождающих
          обеспечивает безопасность и эффективность перевозки груза.
        </ServiceItem>
        <ServiceItem
          src="/multi_transport.webp"
          title={
            <>
              Перевозки <b>Авиа</b>, <b>ЖД</b> и{" "}
              <b>водными видами транспорта</b>
            </>
          }
        >
          Мы предлагаем услуги по перевозке грузов на всех видах транспорта,
          используя авиаперевозки, железнодорожные перевозки и перевозки по
          воде.
        </ServiceItem>
        <ServiceItem
          src="/earth.jpg"
          title={
            <>
              <b>Международные</b> грузоперевозки
            </>
          }
        >
          Наша компания специализируется на международных перевозках грузов и
          предлагает качественные услуги по перевозке грузов по всему миру. Мы
          имеем многолетний опыт работы в этой области и имеем высокую репутацию
          среди наших клиентов.
        </ServiceItem>
      </div>
    </div>
  );
};

export default Services;
