import styles from "./input.module.css";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  mode?: "normal";
}

const Input: React.FC<InputProps> = ({ mode = "normal", ...props }) => {
  return <input {...props} className={styles[mode]} />;
};

export default Input;
