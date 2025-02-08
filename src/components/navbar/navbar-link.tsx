import Link from "next/link";
import styles from "./navbar-link.module.css";

interface NavbarLinkProps extends React.PropsWithChildren {
  href: string;
}

const NavbarLink: React.FC<NavbarLinkProps> = ({ children, href }) => {
  return (
    <Link className={styles.link} href={href}>
      {children}
    </Link>
  );
};

export default NavbarLink;
