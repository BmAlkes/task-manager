import React from "react";
import { Container } from "./style";
import { AiFillCheckSquare, AiFillDelete } from "react-icons/ai";

const TaskItem = ({ task }) => {
  return (
    <Container>
      <div className="task-description">{task.name}</div>
      <div className="delete">
        <AiFillDelete size={28} />
        <AiFillCheckSquare size={28} />
      </div>
    </Container>
  );
};

export default TaskItem;
