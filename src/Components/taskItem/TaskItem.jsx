import React, { useState, useEffect } from "react";
import { Container } from "./style";
import { AiFillCheckSquare, AiFillDelete } from "react-icons/ai";
import axios from "axios";

const TaskItem = ({ task, fetchTask }) => {
  const [done, setDone] = useState(null);

  const handleEndTask = (e) => {
    setDone(!done);
  };
  const handleDeleteTask = (e) => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/tasks/${task.id}`);
    console.log(task.id);
    fetchTask();
  };

  return (
    <Container key={task.id}>
      <div className={`task-description  ${done}`}>{task.name}</div>
      <div className="delete">
        <AiFillDelete size={28} onClick={handleDeleteTask} />
        <AiFillCheckSquare size={28} onClick={handleEndTask} />
      </div>
    </Container>
  );
};

export default TaskItem;
