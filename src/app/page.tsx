'use client'
import Image from "next/image";
import creation from "../../public/Creation.png";
import popup from "../../public/popup.png";
import progress from "../../public/progress.png";
import taskCreation from "../../public/taskCreation.png";
import watching from "../../public/watching.png";
import { useCoreContext } from "../Context/AppProvider";
import styles from "Todo/styles/Home.module.scss";
import { useEffect } from "react";
const Home = () => {
  const { mode } = useCoreContext();
  console.log({mode})
  useEffect(()=>{
    console.log({mode})
  },[mode])
  return (
    <div>

    <div className={styles.Home}>
      <div
        className={`${styles.Todo} ${mode === "dark" ? styles.bodyBlack : ""}`}
        >
        <div>
          <h1>ToDo</h1>
          <p>
            ToDo is a task management tool that tracks, organizes,
            <br /> and prioritizes tasks and deadlines for efficient
            productivity.
          </p>
        </div>
      </div>

      {/* features */}

      <div
        className={`${styles.Features} ${
          mode === "dark" ? styles.bodyBlack : ""
        }`}
        >
        <div
          className={`${styles.feature} ${
            mode === "dark" ? styles.featureBlack : ""
          }`}
          >
          <Image
            className={styles.Icon}
            src={taskCreation}
            alt="Task Creation"
            width={350}
            height={350}
            />
          <h1>Task Creation</h1>
          <p>
            Allows users to create tasks with titles, descriptions, and
            deadlines, enabling organized and structured management of daily
            activities and responsibilities.
          </p>
        </div>
        <div
          className={`${styles.feature} ${
            mode === "dark" ? styles.featureBlack : ""
          }`}
          >
          <Image
            className={styles.Icon}
            src={"/reminder.png"}
            alt="Due Dates and Reminders"
            width={350}
            height={350}

          />
          <h1>Due Dates and Reminders</h1>
          <p>
            Set deadlines and receive notifications to ensure timely completion
            of tasks, helping users stay on track and manage their time
            effectively.
          </p>
        </div>
        <div
          className={`${styles.feature} ${
            mode === "dark" ? styles.featureBlack : ""
          }`}
          >
          <Image
            className={styles.Icon}
            src={popup}
            alt={"Task Categorization"}
            width={350}
            height={350}
            />
          <h1> Task Categorization</h1>
          <p>
            Organize tasks into categories or projects for better management,
            making it easier to focus on specific areas and track progress in
            different aspects of life or work
          </p>
        </div>
        <div
          className={`${styles.feature} ${
            mode === "dark" ? styles.featureBlack : ""
          }`}
          >
          <Image
            className={styles.Icon}
            src={watching}
            alt={"Completion Tracking"}
            width={350}
            height={350}
            />
          <h1>Completion Tracking</h1>
          <p>
            Mark tasks as completed and monitor progress, providing a clear view
            of what has been achieved and what remains to be done, enhancing
            productivity..
          </p>
        </div>
        <div
          className={`${styles.feature} ${
            mode === "dark" ? styles.featureBlack : ""
          }`}
          >
          <Image
            className={styles.Icon}
            src={creation}
            alt={"Search and Filter"}
                 width={350}
            height={350}
          />
          <h1> Search and Filter</h1>
          <p>
            Quickly locate tasks using search functions and filters based on
            criteria such as due date, priority, or category, streamlining task
            management and organization.
          </p>
        </div>
        <div
          className={`${styles.feature} ${
            mode === "dark" ? styles.featureBlack : ""
          }`}
          >
          <Image className={styles.Icon} src={progress}  alt={"Task Creation"}  
               width={350}
               height={350}
               />
          <h1>Task Creation</h1>
          <p>
            Set deadlines and receive notifications to ensure timely completion
            of tasks, helping users stay on track and manage their time
            effectively.
          </p>
        </div>
      </div>
    </div>
               </div>
  );
};

export default Home;
