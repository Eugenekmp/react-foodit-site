import { useEffect } from "react";
import { useRef } from "react";
import Button from "./Button";
import Input from "./Input";
import Textarea from "./Textarea";
import styles from "./CreateFoodForm.module.css";
import placeholderImage from "../assets/placeholder.png";

function CreateFoodForm({ onSubmit }) {
  const inputRef = useRef(null);

  const submit = (formData) => {
    const data = Object.fromEntries(formData.entries());
    onSubmit(data);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

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
              placeholder="음식 이름"
            />
            <Input
              className={styles.calorie}
              name="calorie"
              type="number"
              placeholder="칼로리 (KCal)"
            />
          </div>
          <Textarea
            className={styles.content}
            name="content"
            placeholder="내용을 작성해 주세요."
          />
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <Button>작성</Button>
      </div>
    </form>
  );
}

export default CreateFoodForm;
