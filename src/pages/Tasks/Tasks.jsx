import React, { useState, useEffect } from "react";
import styled from "styled-components";
import TaskCard from "./TaskCard";
import TaskForm from "./TaskForm";
import useDateUtils from "../../hooks/useDateUtil";

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.h1`
  color: ${(props) => props.theme.colors.text};
`;

const CreateButton = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const TaskGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
`;

const DateSection = styled.div`
  margin-top: 20px;
  margin-bottom: 10px;
`;

const DateTitle = styled.h2`
  color: ${(props) => props.theme.colors.text};
  border-bottom: 1px solid ${(props) => props.theme.colors.border};
  padding-bottom: 5px;
`;

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  /*  const {
    formatDate,
    formatDateForGrouping,
    compareDates,
    isToday,
    toLocalISOString,
  } = useDateUtils(); */

  const handleCreateTask = (newTask) => {
    console.log("NEW TASK", newTask);
    setTasks([
      ...tasks,
      { ...newTask, id: Date.now(), createdAt: toLocalISOString(new Date()) },
    ]);
    setIsFormOpen(false);
  };

  const handleEditTask = (editedTask) => {
    setTasks(
      tasks.map((task) =>
        task.id === editedTask.id
          ? { ...editedTask, createdAt: task.createdAt }
          : task
      )
    );
    setEditingTask(null);
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const groupTasksByDate = () => {
    const grouped = {};
    tasks.forEach((task) => {
      const dateStr = formatDateForGrouping(task.createdAt);
      if (!grouped[dateStr]) {
        grouped[dateStr] = [];
      }
      grouped[dateStr].push(task);
    });
    return Object.entries(grouped).sort((a, b) => compareDates(a[0], b[0]));
  };

  return (
    <>
      <Header>
        <Title>Tareas</Title>
        <CreateButton onClick={() => setIsFormOpen(true)}>
          Crear Nueva Tarea
        </CreateButton>
      </Header>
      {isFormOpen && (
        <TaskForm
          onSubmit={handleCreateTask}
          onCancel={() => setIsFormOpen(false)}
        />
      )}
      {editingTask && (
        <TaskForm
          task={editingTask}
          onSubmit={handleEditTask}
          onCancel={() => setEditingTask(null)}
        />
      )}
      {groupTasksByDate().map(([date, dateTasks]) => (
        <DateSection key={date}>
          <DateTitle>{isToday(date) ? "Hoy" : formatDate(date)}</DateTitle>
          <TaskGrid>
            {dateTasks.map((task) => (
              <TaskCard
                key={task.id}
                task={task}
                onEdit={() => setEditingTask(task)}
                onDelete={() => handleDeleteTask(task.id)}
              />
            ))}
          </TaskGrid>
        </DateSection>
      ))}
    </>
  );
};

export default TaskPage;
