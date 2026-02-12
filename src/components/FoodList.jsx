import FoodListItem from "./FoodListItem";
import styles from "./FoodList.module.css";

function FoodList({ items, onDelete, onUpdate }) {
  return (
    <ul className={styles.foodList}>
      {items.map((item) => (
        <li key={item.id}>
          <FoodListItem item={item} onDelete={onDelete} onUpdate={onUpdate} />
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
