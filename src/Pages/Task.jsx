import styles from "../Styles/Task.module.scss";
import { Context } from "../../Context/AppProvider";
import { useContext, useEffect, useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const Task = () => {
  const { mode } = useContext(Context);
  const [task, setTask] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const response = localStorage.getItem("tasks");
    if (response) {
      setData(JSON.parse(response));
    }
  },[]);

  const handleAddData = () => {
    const newTask = { description: task, done: false };
    const updatedTasks = [...data, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setData(updatedTasks);
    setTask("");
  };

  const handleDone = (index) => {
    const updatedTasks = data.map((item, i) =>
      i === index ? { ...item, done: !item.done } : item
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setData(updatedTasks);
  };

  const handleRemove = (index) => {
    const remainingTasks = data.filter((_, i) => i !== index);
    localStorage.setItem("tasks", JSON.stringify(remainingTasks));
    setData(remainingTasks);
  };

  const handleRemoveAll = () => {
    localStorage.removeItem("tasks");
    setData([]);
  };

  return (
    <div className={styles.TaskCustom}>
      <div className={`${styles.Todo} ${mode === "dark" ? styles.bodyBlack : ""}`}>
        <div>
          <h1>ToDo</h1>
          <p>Hy there, Add task here !</p>
        </div>
      </div>
      <div className={`${styles.TaskWrapper} ${mode === "dark" ? styles.bodyBlack : styles.bodyWrapper}`}>
      <div className={`${styles.containerTask} ${mode === "dark" ? styles.bodyBlack : ""}`}>
        <input
        className={styles.AddTask}  
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a task"
        />
          <button className={`${styles.buttonTask} ${styles.buttonBlue}`} onClick={handleAddData}>Add Task</button>
        <ul className={styles.taskUlist}>
          {data.map((ele, index) => (
            <li className={styles.taskList} key={index}>
              <span>
              <input   
              className={styles.checkbox}
                type="checkbox"
                checked={ele.done}
                onChange={() => handleDone(index)}
              />
              <span className={styles.taskDone} style={{ textDecoration: ele.done ? "line-through" : "none" }}>
                {ele.description}
              </span>
              </span>
              <di className={`${styles.buttonTask} ${styles.buttonRed}`} onClick={() => handleRemove(index)}><DeleteIcon/></di>
            </li>
          ))}
        </ul>
      <button className={`${styles.buttonTask} ${styles.buttonBlue}`} onClick={handleRemoveAll}>Delete All</button>
      </div>
    
    </div>
    </div>
  );
};

export default Task;
