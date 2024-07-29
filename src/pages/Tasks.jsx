import React, { useState, useEffect } from "react";
import TaskGroup from "../components/TaskGroup";
import styles from "../styles/Task.module.css";

const Tasks = () => {
  const [tasks, setTasks] = useState({
    today: [],
    thisWeek: [],
    thisMonth: [],
  });

  useEffect(() => {
    // Obtener las tareas almacenadas en localStorage o usar el valor por defecto
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || {
      today: [],
      thisWeek: [],
      thisMonth: [],
    };
    setTasks({
      today: Array.isArray(storedTasks.today) ? storedTasks.today : [],
      thisWeek: Array.isArray(storedTasks.thisWeek) ? storedTasks.thisWeek : [],
      thisMonth: Array.isArray(storedTasks.thisMonth)
        ? storedTasks.thisMonth
        : [],
    });
  }, []);

  const addTask = () => {
    const title = prompt("Enter task title");
    const author = prompt("Enter author name");
    const status = "Start"; // Default status
    const newTask = { title, author, status };

    // Crear una nueva lista de tareas
    const newTasks = { ...tasks, today: [...tasks.today, newTask] };

    // Actualizar el estado y localStorage
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  return (
    <div className={styles.tasksPage}>
      <div className={styles.tasksHeader}>
        <h1>Tasks</h1>
        <button className={styles.addGroupBtn} onClick={addTask}>
          Add New Group
        </button>
        <select className={styles.sortBySelect}>
          <option>Schedule</option>
          <option>Priority</option>
        </select>
      </div>
      <TaskGroup title="Today" tasks={tasks.today} />
      <TaskGroup title="This week" tasks={tasks.thisWeek} />
      <TaskGroup title="This month" tasks={tasks.thisMonth} />
    </div>
  );
};

export default Tasks;
