import { useState } from "react";
import { PlusIcon } from "@heroicons/react/24/solid";
import "../index.css";

const CustomForm = ({ addTask }) => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addTask({
      name: task,
      checked: false,
      id: Date.now(),
    });
    setTask("");
  };

  const handleChange = (e) => {
    setTask(e.target.value);
  };

  const [task, setTask] = useState("");

  return (
    <form className="todo" onSubmit={handleFormSubmit}>
      <div className="wrapper">
        <input
          type="text"
          id="task"
          className="input"
          value={task}
          onChange={handleChange}
          required
          autoFocus
          maxLength={60}
          placeholder="Enter Task"
        />
        {/* <label htmlFor="task" className="label1">
          ENTER TASK
        </label> */}
      </div>
      <button className="btn" aria-label="Add Task" type="submit">
        <PlusIcon />
      </button>
    </form>
  );
};

export default CustomForm;
