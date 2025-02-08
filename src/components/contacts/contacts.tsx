"use client";

import YMap from "@/components/ymap/ymap";
import styles from "./contacts.module.css";

const Contacts: React.FC = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h4 className={styles.title}>Контакты</h4>
          <div className={styles.info}>
            <a href="tel:+78005553535">+7 (800) 555 35 35</a>
            <a href="mailto:mail@brave.moscow">mail@brave.moscow</a>
            <span>Проспект Теста, 1337</span>
          </div>
        </div>
      </div>
      <YMap coordiantes={[55.749572, 37.537312]} className={styles.map} />
    </div>
  );
};

export default Contacts;
