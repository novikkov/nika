import styles from "./checkbox.module.css";

interface CheckBoxProps extends React.PropsWithChildren {
  name?: string;
  required?: boolean;
}

const Checkbox: React.FC<CheckBoxProps> = ({
  children,
  name,
  required = false,
}) => {
  return (
    <div className={styles.normal}>
      <input
        className={styles.checkbox}
        type="checkbox"
        name={name}
        required={required}
      />
      {children}
    </div>
  );
};

export default Checkbox;
