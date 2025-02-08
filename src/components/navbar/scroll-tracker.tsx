"use client";

import { useEffect, useState } from "react";
import styles from "./scroll-tracker.module.css";

const ScrollTracker: React.FC<{ visible: boolean }> = ({ visible }) => {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setWidth((scrollY / height) * 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0 }} className={styles.tracker}>
      <div className={styles.progress} style={{ width: `${width}%` }} />
    </div>
  );
};

export default ScrollTracker;
