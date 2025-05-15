"use client";
import { useEffect, useState } from "react";
import { MdDelete } from "react-icons/md";
import { Button } from "Todo/Components/ui/button";
import { useCoreContext } from "Todo/Context/AppProvider";
import styles from "Todo/styles/Task.module.scss";
const Task = () => {
  const { mode } = useCoreContext();
  const [task, setTask] = useState<any>("");
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    const response = localStorage.getItem("tasks");
    if (response) {
      setData(JSON.parse(response));
    }
  }, []);

  const handleAddData = () => {
    if (task.length) {
      const newTask = { description: task, done: false };
      const updatedTasks = [...data, newTask];
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
      setData(updatedTasks);
      setTask("");
    }
  };

  const handleDone = (index: number) => {
    const updatedTasks = data.map((item: any, i: number) =>
      i === index ? { ...item, done: !item.done } : item
    );
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setData(updatedTasks);
  };

  const handleRemove = (index: number) => {
    const remainingTasks = data.filter((_: any, i: number) => i !== index);
    localStorage.setItem("tasks", JSON.stringify(remainingTasks));
    setData(remainingTasks);
  };

  const handleRemoveAll = () => {
    localStorage.removeItem("tasks");
    setData([]);
  };

  return (
    <div className={styles.TaskCustom}>
      <div
        className={`${styles.Todo} ${mode === "dark" ? styles.bodyBlack : ""}`}
      >
        <div>
          <h1>ToDo</h1>
          <p>Hy there, Add task here !</p>
        </div>
      </div>
      <div
        className={`${styles.TaskWrapper} ${
          mode === "dark" ? styles.bodyBlack : styles.bodyWrapper
        }`}
      >
        <div
          className={`${styles.containerTask} ${
            mode === "dark" ? styles.bodyBlack : ""
          }`}
        >
          <input
            className={styles.AddTask}
            type="text"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            placeholder="Enter a task"
          />
          <Button
            // className={`${styles.buttonTask} ${styles.buttonBlue}`}
            onClick={handleAddData}
          >
            Add Task
          </Button>
          <ul className={styles.taskUlist}>
            {data.map((ele: any, index: number) => (
              <li className={styles.taskList} key={index}>
                <span>
                  <input
                    className={styles.checkbox}
                    type="checkbox"
                    checked={ele.done}
                    onChange={() => handleDone(index)}
                  />
                  <span
                    className={styles.taskDone}
                    style={{
                      textDecoration: ele.done ? "line-through" : "none",
                    }}
                  >
                    {ele.description}
                  </span>
                </span>
                <div
                  className={`${styles.buttonTask} ${styles.buttonRed}`}
                  onClick={() => handleRemove(index)}
                >
                  <MdDelete size={25} />
                </div>
              </li>
            ))}
          </ul>
          <Button
            // className={`${styles.buttonTask} ${styles.buttonBlue}`}
            onClick={handleRemoveAll}
          >
            Delete All
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Task;
