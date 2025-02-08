import Image from "next/image";
import styles from "./service-item.module.css";

interface ServiceItemProps extends React.PropsWithChildren {
  title: React.ReactNode;
  src: string;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ src, children, title }) => {
  return (
    <div className={styles.normal}>
      <Image
        className={styles.image}
        src={src}
        alt="Услуга"
        width={560}
        height={340}
      />
      <h4 className={styles.title}>{title}</h4>
      <p className={styles.text}>{children}</p>
    </div>
  );
};

export default ServiceItem;
