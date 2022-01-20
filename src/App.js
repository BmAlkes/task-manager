import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import axios from "axios";
import Home from "./pages/Home";
import Edit from "./pages/Edit";
import "./styles/style.css";

const App = () => {
  const [tasks, setTasks] = useState([]);

  const fetchTask = async () => {
    try {
      const { data } = await axios.get(`http://localhost:5000/tasks`);
      setTasks(data);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    fetchTask();
  }, []);
  return (
    <>
      <h1 className="title">Task Manager</h1>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home tasks={tasks} setTasks={setTasks} fetchTask={fetchTask} />
            }
          />
          <Route path="edit/:id" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
