import React, { useState } from "react";
import axios from "axios";
import { Form, Container } from "./styles";
import { useAlert } from "react-alert";
import { AiOutlinePlusSquare } from "react-icons/ai";
import TaskItem from "../../Components/taskItem/TaskItem";
import { contextTypes } from "react-addons-css-transition-group";

const Index = ({ tasks, setTasks, fetchTask }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setName(event.target.value);
  };
  const alert = useAlert();

  const handleTaskAddition = async () => {
    try {
      if (name.length === 0) {
        return alert.error("Task need a description to be add");
      }
      await axios.post(`http://localhost:5000/tasks`, {
        name,
        complete: false,
      });
      setTasks([...tasks, { name, complete: false }]);
      alert.success("tarefa adiciona com sucesso");
    } catch (e) {
      alert.error("something wrong");
    }
  };
  return (
    <>
      <Form>
        <h1> Adicione uma Tarefa</h1>
        <div>
          <input
            value={name}
            onChange={handleChange}
            placeholder="Adicione a tarefa"
          />
          <AiOutlinePlusSquare className="icon" onClick={handleTaskAddition} />
        </div>
      </Form>
      <Container>
        <ul>
          {tasks.map((task) => (
            <TaskItem task={task} fetchTask={fetchTask} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Index;
