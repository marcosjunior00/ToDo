import { useEffect, useState } from "react";
import * as C from "./styles/globalStyles";

const App = () => {
  const [task, setTask] = useState("");
  const [listTasks, setListTasks] = useState([]);
  const [dataLoaded, setDataLoaded] = useState();

  useEffect(() => {
    const storedTasks = localStorage.getItem("task");
    if (storedTasks) {
      setListTasks(JSON.parse(storedTasks));
      setDataLoaded(true);
    }
  }, []);

  useEffect(() => {
    if (dataLoaded) {
      localStorage.setItem("task", JSON.stringify(listTasks));
    }
  }, [listTasks, dataLoaded]);

  const addTask = () => {
    if (!task) return alert("A tarefa deve ter um valor verdadeiro!");
    const newTask = {
      id: Math.random(),
      task: task,
      checked: false,
    };

    setListTasks([...listTasks, newTask]);
    setTask("");
  };

  const removeTask = (id) => {
    const newList = listTasks.filter((task) => task.id !== id);
    setListTasks(newList);
  };

  const check = (id, checked) => {
    const index = listTasks.findIndex((task) => task.id == id);
    const newList = listTasks;
    newList[index].checked = !checked;
    setListTasks([...newList]);
  };

  const removeTodo = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <C.Container>
      <C.BtnClear alt="limpar todo" onClick={removeTodo} onMouseEnter={() => {
        const container = document.getElementsByClassName('bx-trash')[0];
        container.classList.add('bx-tada');
      }} onMouseLeave={() => {
        const container = document.getElementsByClassName('bx-trash')[0];
        container.classList.remove('bx-tada');
      }}>
        <i className="bx bx-trash"></i>
      </C.BtnClear>

      <C.Title>TO DO LIST</C.Title>
      <br />
      <C.InputGroup>
        <C.Input
          type="text"
          value={task}
          placeholder="Digite sua tarefa"
          onChange={(e) => setTask(e.target.value)}
        />
        <C.Button onClick={addTask}>Enviar</C.Button>
      </C.InputGroup>

      <br />

      <ul>
        {listTasks.map((task) => (
          <C.Item checked={task.checked} key={task.id}>
            <p>{task.task}</p>
            <C.IconsGroup>
              <button onClick={() => removeTask(task.id)}>
                <i className="bx bx-trash"></i>
              </button>
              <button onClick={() => check(task.id, task.checked)}>
                <i className="bx bx-check"></i>
              </button>
            </C.IconsGroup>
          </C.Item>
        ))}
      </ul>
    </C.Container>
  );
}

export default App;
