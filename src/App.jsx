import { useState } from "react";
import FoodList from "./components/FoodList.jsx";
import mockItems from "./mock.json";
import Modal from "./components/Modal.jsx";
import CreateFoodForm from "./components/CreateFoodForm.jsx";
import Layout from "./components/Layout.jsx";
import styles from "./App.module.css";
import Input from "./components/Input";
import Button from "./components/Button";
import useTranslate from "./hooks/useTranslate.js";

function App() {
  const t = useTranslate();
  const [items, setItems] = useState(mockItems);
  const [order, setOrder] = useState("createdAt");
  const [keyword, setKeyword] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleUpdate = (id, data) => {
    const index = items.findIndex((item) => item.id === id);
    const now = new Date();
    const newItem = {
      ...items[index],
      ...data,
      updatedAt: now.valueOf(),
    };

    const newItems = [
      ...items.slice(0, index),
      newItem,
      ...items.slice(index + 1),
    ];
    setItems(newItems);
  };

  const handleCreate = (data) => {
    const now = new Date();
    const newItem = {
      id: items.length + 1,
      ...data,
      createdAt: now.valueOf(),
      updatedAt: now.valueOf(),
    };
    setItems([newItem, ...items]);
    setIsCreated(false);

    console.log(newItem);
  };

  const handleDelete = (id) => {
    const nextItems = items.filter((items) => items.id !== id);
    setItems(nextItems);
  };

  const resultItems = items
    .sort((a, b) => b[order] - a[order])
    .filter(
      (item) => item.title.includes(keyword) || item.content.includes(keyword),
    );

  const handleKeywordChange = (e) => setKeyword(e.target.value);

  return (
    <Layout>
      <div className={styles.header}>
        <Input
          variant="search"
          onChange={handleKeywordChange}
          placeholder={t("search")}
        />
        <div className={styles.buttonContainer}>
          <button
            className={`${styles.filter} ${
              order === "createdAt" ? styles.active : ""
            }`}
            onClick={() => setOrder("createdAt")}
          >
            {t("sort by latest")}
          </button>
          <button
            className={`${styles.filter} ${
              order === "calorie" ? styles.active : ""
            }`}
            onClick={() => setOrder("calorie")}
          >
            {t("sort by calorie")}
          </button>
          <Button onClick={() => setIsCreated(true)}>
            {t("create button")}
          </Button>
          <Modal
            title={t("create calorie title")}
            isOpen={isCreated}
            onClose={() => setIsCreated(false)}
          >
            <CreateFoodForm onSubmit={handleCreate} />
          </Modal>
        </div>
      </div>
      <FoodList
        items={resultItems}
        onDelete={handleDelete}
        onUpdate={handleUpdate}
      />
    </Layout>
  );
}

export default App;
