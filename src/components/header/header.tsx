// header.tsx
"use client";

import { useEffect, useState } from "react";
import styles from "./header.module.css";

const scrollDown = () => {
  window.scrollBy({
    top: Math.max(window.innerHeight - window.scrollY, 0),
    behavior: "smooth",
  });
};

const Header = () => {
  const [currentText, setCurrentText] = useState("");
  const phrases = ["без преград", "без ограничений", "по всему миру"];
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 50 : 150;
    const targetText = phrases[currentPhrase];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < targetText.length) {
          setCurrentText(targetText.substring(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentPhrase((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentPhrase]);

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <h5 className={styles.subtitle}>
          Транспортная компания <b>NIKA</b>
        </h5>
        <h1 className={styles.title}>
          Перевозим гигантов мира: доставка негабаритных грузов <br />
          {currentText.length > 0 ? (
            <b className={styles.editable}>
              {currentText}
              {currentText.length > 0 && <span className={styles.cursor} />}
            </b>
          ) : (
            <br />
          )}
        </h1>
        <p className={styles.description}>
          Работаем по Китаю, России и странам СНГ
        </p>
      </div>
      <div className={styles.scrollArrow} onClick={scrollDown}>
        <svg viewBox="0 0 24 24" width="100" height="60">
          <path
            d="M7 10l7 5 7-5"
            stroke="#ffffff"
            strokeWidth="2"
            fill="none"
          />
        </svg>
      </div>
    </header>
  );
};

export default Header;
