import styles from '../Styles/Home.module.scss';
import taskCreation from "../../public/taskCreation.png"
import reminder from "../../public/reminder.png"
import popup from "../../public/popup.png"
import creation from "../../public/Creation.png"
import watching from "../../public/watching.png"
import progress from "../../public/progress.png"
import { Context } from '../../Context/AppProvider';
import { useContext } from 'react';
const Home = () => {
  const {mode}=useContext(Context)
  return (
    <div className={styles.Home}>
      <div className={`${styles.Todo} ${mode==="dark"?styles.bodyBlack:""}`}>
        <div>
          <h1>ToDo</h1>
          <p>ToDo is a task management tool that tracks, organizes,<br /> and prioritizes tasks and deadlines for efficient productivity.</p>
        </div>
      </div>
      
    {/* features */}


      <div className={`${styles.Features} ${mode==="dark"? styles.bodyBlack:""}`}>
        <div className={`${styles.feature} ${mode==="dark"? styles.featureBlack:""}`}>
          <img className={styles.Icon} src={taskCreation} />
          <h1>Task Creation</h1>
          <p>Allows users to create tasks with titles, descriptions, and deadlines, enabling organized and structured management of daily activities and responsibilities.</p>
        </div>
        <div className={`${styles.feature} ${mode==="dark"? styles.featureBlack:""}`}>
        <img className={styles.Icon} src={reminder} />
          <h1>Due Dates and Reminders</h1>
          <p>Set deadlines and receive notifications to ensure timely completion of tasks, helping users stay on track and manage their time effectively.</p>
        </div>
        <div className={`${styles.feature} ${mode==="dark"? styles.featureBlack:""}`}>
        <img className={styles.Icon} src={popup} />
          <h1> Task Categorization</h1>
          <p>Organize tasks into categories or projects for better management, making it easier to focus on specific areas and track progress in different aspects of life or work</p>
        </div>
        <div className={`${styles.feature} ${mode==="dark"? styles.featureBlack:""}`}>
        <img className={styles.Icon} src={watching} />
          <h1>Completion Tracking</h1>
          <p>Mark tasks as completed and monitor progress, providing a clear view of what has been achieved and what remains to be done, enhancing productivity..</p>
        </div>
        <div className={`${styles.feature} ${mode==="dark"? styles.featureBlack:""}`}>
        <img className={styles.Icon} src={creation} />
          <h1> Search and Filter</h1>
          <p>Quickly locate tasks using search functions and filters based on criteria such as due date, priority, or category, streamlining task management and organization.</p>
        </div>
        <div className={`${styles.feature} ${mode==="dark"? styles.featureBlack:""}`}>
        <img className={styles.Icon} src={progress} />
          <h1>Task Creation</h1>
          <p>Set deadlines and receive notifications to ensure timely completion of tasks, helping users stay on track and manage their time effectively.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
