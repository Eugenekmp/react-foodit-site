import styles from "./Input.module.css";

function Input({ className, variant = "default", ...props }) {
  const classNames = `${styles.input} ${styles[variant]} ${className}`;
  return <input className={classNames} {...props} />;
}

export default Input;
