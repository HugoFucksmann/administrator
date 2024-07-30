import React from "react";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.colors.card};
  border-radius: 8px;
  padding: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h3`
  color: ${(props) => props.theme.colors.text};
  margin-top: 0;
`;

const Description = styled.p`
  color: ${(props) => props.theme.colors.text};
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
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
`;

const TaskCard = ({ task, onEdit, onDelete }) => {
  return (
    <Card>
      <Title>{task.title}</Title>
      <Description>{task.description}</Description>
      <ButtonGroup>
        <Button onClick={onEdit}>Editar</Button>
        <Button onClick={onDelete}>Eliminar</Button>
      </ButtonGroup>
    </Card>
  );
};

export default TaskCard;
