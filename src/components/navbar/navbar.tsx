"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/logo";
import ScrollTracker from "./scroll-tracker";
import NavbarLink from "./navbar-link";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [zeroed, setZeroed] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      setZeroed(scrollY < 5);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      style={{ background: zeroed ? "transparent" : undefined }}
      className={styles.navbar}
    >
      <ScrollTracker visible={!zeroed} />
      <div className={styles.content}>
        <NavbarLink href="/">
          <Logo size={110} />
        </NavbarLink>
        <div className={styles.links}>
          <NavbarLink href="/team">Команда</NavbarLink>
          <NavbarLink href="/gallery">Галлерея</NavbarLink>
        </div>
      </div>
    </nav>
  );
};

//navbar.Link = navbarLink;

export default NavBar;
