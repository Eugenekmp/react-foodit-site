import inputStyles from "./Input.module.css";

function Textarea({ className, ...props }) {
  const classNames = `${inputStyles.input} ${className}`;
  return <textarea className={classNames} {...props} />;
}

export default Textarea;
