import React, { useState, useEffect } from "react";
import { Container } from "./styles";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { AiFillCheckSquare } from "react-icons/ai";
import { useAlert } from "react-alert";

const Index = ({ tasks, setTasks, fetchTask }) => {
  const params = useParams();

  const [data, setData] = useState([]);
  const [text, setTexts] = useState(null);
  const [checkbox, setCheckbox] = useState(null);

  const alert = useAlert();
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:5000/tasks/${params.id}`).then((response) => {
      setData(response.data);
      setCheckbox(response.data.complete);
    });
  }, [params.id]);

  const handleChange = (event) => {
    event.preventDefault();
    setTexts(event.target.value);
  };
  const handleCheckbox = (event) => {
    event.preventDefault();
    setCheckbox(!checkbox);
  };

  const handleEditTask = async (event) => {
    event.preventDefault();
    try {
      const { data } = await axios.patch(
        `http://localhost:5000/tasks/${params.id}`,
        {
          name: text,
          complete: checkbox,
        }
      );
      setTasks(
        tasks.map((task) =>
          task.id === params.id ? { ...task, ...data } : task
        )
      );
      fetchTask();
      navigate("/");
    } catch (e) {
      alert.error("something wrong");
    }
  };
  return (
    <Container>
      <div className="data">
        <h1>Edite sua Tarefa</h1>
        <form onSubmit={handleEditTask}>
          <div className="campo1">
            <label>ID:</label>
            <span>{data.id}</span>
          </div>
          <div className="campo2">
            <p>Tarefa :</p>
            <input
              type="text"
              placeholder={data.name}
              onChange={handleChange}
            />
          </div>
          <div className="campo3">
            <p>
              Completar:{" "}
              <AiFillCheckSquare
                className={`icon ${checkbox}`}
                size={28}
                onClick={handleCheckbox}
              />
            </p>
          </div>

          <button>Editar</button>
        </form>
      </div>
    </Container>
  );
};

export default Index;
