import styles from "./Button.module.css";

function Button({ className, variant = "primary", children, ...props }) {
  const classNames = `${styles.button} ${styles[variant]} ${className}`;
  return (
    <button className={classNames} {...props}>
      {children}
    </button>
  );
}

export default Button;
