import React from "react";
import TaskCard from "./TaskCard";
import styles from "../styles/Task.module.css";

const TaskGroup = ({ title, tasks }) => {
  return (
    <div className={styles.taskGroup}>
      <div className={styles.taskGroupHeader}>
        <span className={styles.taskGroupTitle}>{title}</span>
        <span className={styles.taskGroupDate}>
          {new Date().toLocaleDateString()}
        </span>
      </div>
      <div className={styles.taskGroupBody}>
        {tasks.map((task, index) => (
          <TaskCard key={index} {...task} />
        ))}
      </div>
    </div>
  );
};

export default TaskGroup;
