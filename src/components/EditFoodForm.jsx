import { useEffect } from "react";
import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import placeholderImage from "../assets/placeholder.png";
import styles from "./EditFoodForm.module.css";
import useTranslate from "../hooks/useTranslate";

function EditFoodForm({ initialValue, onSubmit }) {
  const t = useTranslate();

  const inputRef = useRef(null);

  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <form className={styles.form} action={submit}>
      <div className={styles.container}>
        <img className={styles.image} src={placeholderImage} alt="image" />
        <div className={styles.inputContainer}>
          <div className={styles.titleContainer}>
            <Input
              className={styles.title}
              name="title"
              ref={inputRef}
              defaultValue={initialValue.title}
              placeholder={t("review title placeholder")}
            />
            <Input
              className={styles.calorie}
              name="calorie"
              type="number"
              defaultValue={initialValue.calorie}
              placeholder={t("review calorie placeholder")}
            />
          </div>
          <Textarea
            className={styles.content}
            name="content"
            defaultValue={initialValue.content}
            placeholder={t("review content placeholder")}
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button>작성</Button>
      </div>
    </form>
  );
}

export default EditFoodForm;
