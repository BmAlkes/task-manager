import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container } from "./style";
import { AiFillCheckSquare, AiFillDelete } from "react-icons/ai";
import axios from "axios";

const TaskItem = ({ task, fetchTask }) => {
  const [done, setDone] = useState(null);

  const handleEndTask = () => {
    setDone(!done);
  };
  const handleDeleteTask = async (id) => {
    await axios.delete(`http://localhost:5000/tasks/${task.id}`);
    fetchTask((prevState) => prevState.filter((task) => task.id !== id));
  };

  return (
    <Container>
      <nav>
        <Link to={`edit/${task.id}`}>
          <div className={`task-description  ${done}`}>{task.name}</div>
        </Link>
      </nav>
      <div className="delete">
        <AiFillDelete size={28} onClick={handleDeleteTask} />
        <AiFillCheckSquare size={28} onClick={handleEndTask} />
      </div>
    </Container>
  );
};

export default TaskItem;
