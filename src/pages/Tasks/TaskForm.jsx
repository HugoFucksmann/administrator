import React, { useState, useEffect } from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.border};
`;

const TextArea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: 1px solid ${(props) => props.theme.colors.border};
  resize: vertical;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px;
`;

const Button = styled.button`
  background-color: ${(props) => props.theme.colors.primary};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
`;

const TaskForm = ({ task, onSubmit, onCancel }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (task) {
      setTitle(task.title);
      setDescription(task.description);
    }
  }, [task]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ id: task?.id, title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Título de la tarea"
          required
        />
        <TextArea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descripción de la tarea"
          required
        />
        <ButtonGroup>
          <Button type="submit">{task ? "Actualizar" : "Crear"}</Button>
          <Button type="button" onClick={onCancel}>
            Cancelar
          </Button>
        </ButtonGroup>
      </Form>
    </FormContainer>
  );
};

export default TaskForm;
