import { useState } from "react";
import Modal from "./Modal";
import styles from "./FoodListItem.module.css";
import EditFoodForm from "./EditFoodForm";
import Button from "./Button";
import placeholderImage from "../assets/placeholder.png";
import useTranslate from "../hooks/useTranslate";

function FoodListItem({ item, onDelete, onUpdate }) {
  const t = useTranslate();

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const { imgUrl, title, calorie, content } = item;

  const handleEditFormSubmit = (data) => {
    onUpdate(item.id, data);
    setIsEditModalOpen(false);
  };

  return (
    <div className={styles.foodListItem}>
      <img
        className={styles.image}
        src={imgUrl ?? placeholderImage}
        alt={title}
      />
      <div className={styles.container}>
        <div className={styles.titleContainer}>
          <span className={styles.title}>{title}</span>
          <span className={styles.calorie}>{calorie}kcal</span>
        </div>
        <div className={styles.content}>{content}</div>
        <div className={styles.footer}>
          <div className={styles.date}>
            {new Date(item.updatedAt).toLocaleDateString()}
          </div>
          <div className={styles.buttonContainer}>
            <Button
              variant="outlinePrimary"
              onClick={() => setIsEditModalOpen(true)}
            >
              {t("edit button")}
            </Button>
            <Modal
              title={t("edit calorie title")}
              isOpen={isEditModalOpen}
              onClose={() => setIsEditModalOpen(false)}
            >
              <EditFoodForm
                initialValue={item}
                onSubmit={handleEditFormSubmit}
              />
            </Modal>
            <Button
              variant="outlineSecondary"
              onClick={() => onDelete(item.id)}
            >
              {t("delete button")}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodListItem;
