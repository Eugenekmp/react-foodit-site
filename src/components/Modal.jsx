import { createPortal } from "react-dom";
import styles from "./Modal.module.css";
import closeIcon from "../assets/close.svg";

function Modal({ title, isOpen, onClose, children }) {
  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <span className={styles.title}>{title}</span>
          <img
            className={styles.closeButton}
            src={closeIcon}
            alt="close"
            onClick={onClose}
          />
        </div>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root"),
  );
}

export default Modal;
