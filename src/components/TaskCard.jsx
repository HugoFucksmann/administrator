import React from "react";
import styles from "../styles/Task.module.css";

const TaskCard = ({ title, author, status }) => {
  return (
    <div className={styles.taskCard}>
      <div className={styles.taskHeader}>
        <span className={styles.taskTitle}>{title}</span>
        <span className={styles.taskAuthor}>- {author}</span>
      </div>
      <div className={styles.taskActions}>
        <button className={`${styles.btn} ${styles.viewBtn}`}>View</button>
        <button
          className={`${styles.btn} ${
            status === "On going" ? styles.ongoingBtn : styles.startBtn
          }`}
        >
          {status}
        </button>
      </div>
    </div>
  );
};

export default TaskCard;
