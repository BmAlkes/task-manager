import React, { useState } from "react";
import axios from "axios";
import { Form, Container } from "./styles";
import { useAlert } from "react-alert";
import { AiOutlinePlusSquare } from "react-icons/ai";
import TaskItem from "../../Components/taskItem/TaskItem";

const Index = ({ tasks, setTask, fetchTask }) => {
  const [name, setName] = useState("");

  const handleChange = (event) => {
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
      await fetchTask();
      setTask({ ...tasks, name });
      alert.success("tarefa adiciona com sucesso");
      setName("");
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
            <TaskItem key={task.id} task={task} />
          ))}
        </ul>
      </Container>
    </>
  );
};

export default Index;
