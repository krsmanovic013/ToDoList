import CustomForm from "./components/custom-form";
import TaskList from "./components/task-list";
import EditForm from "./components/edit-form";
import useLocalStorage from "./hooks/useLocalStorage";

import { useState } from "react";

const App = () => {
  const [tasks, setTasks] = useLocalStorage("react-todo", []);
  const [editedTask, setEditedTask] = useState(null);
  const [isEditing, setIsEditiing] = useState(false);
  const [previousFocusEl, setPreviousFocusEl] = useState(null);

  const addTask = (task) => {
    setTasks((prevState) => [...prevState, task]);
  };

  const deleteTask = (id) => {
    setTasks((prevState) => prevState.filter((a) => a.id != id));
  };

  const toggleTask = (id) => {
    setTasks((prevState) =>
      prevState.map((a) => (a.id == id ? { ...a, checked: !a.checked } : a))
    );
  };

  const updateTask = (task) => {
    setTasks((prevState) =>
      prevState.map((a) => (a.id == task.id ? { ...a, name: task.name } : a))
    );
    closeEditMode();
  };

  const closeEditMode = () => {
    setIsEditiing(false);
    previousFocusEl.focus();
  };

  const enterEditMode = (task) => {
    setEditedTask(task);
    setIsEditiing(true);
    setPreviousFocusEl(document.activeElement);
  };

  return (
    <div className="container">
      <header>
        <h1>My Task List</h1>
      </header>
      {isEditing && (
        <EditForm
          editedTask={editedTask}
          updateTask={updateTask}
          closeEditMode={closeEditMode}
        />
      )}
      <CustomForm addTask={addTask} />
      {tasks && (
        <TaskList
          tasks={tasks}
          deleteTask={deleteTask}
          toggleTask={toggleTask}
          enterEditMode={enterEditMode}
        />
      )}
    </div>
  );
};

export default App;
