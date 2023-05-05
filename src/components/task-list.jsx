import TaskItem from "./task-item";
// import styles from "./task-list-module.css";
import "./task-list-module.css";

const TaskList = ({ tasks, deleteTask, toggleTask, enterEditMode }) => {
  return (
    <ul className="tasks">
      {tasks
        .sort((a, b) => b.id - a.id)
        .map((t) => (
          <TaskItem
            key={t.id}
            task={t}
            deleteTask={deleteTask}
            toggleTask={toggleTask}
            enterEditMode={enterEditMode}
          />
        ))}
    </ul>
  );
};

export default TaskList;
