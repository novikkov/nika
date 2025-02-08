import styles from "./button.module.css";

interface ButtonProps extends React.PropsWithChildren {
  type?: "button" | "submit" | "reset";
}

const Button: React.FC<ButtonProps> = ({ children, type = "button" }) => {
  return (
    <button type={type} className={styles.normal}>
      {children}
    </button>
  );
};

export default Button;
