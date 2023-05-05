import "./task-list-module.css";
import { CheckIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";

import { useState } from "react";

const TaskItem = ({ task, deleteTask, toggleTask, enterEditMode }) => {
  const [isChecked, setIsChecked] = useState(task.checked);

  const handlerOnChange = (e) => {
    setIsChecked(!isChecked);
    toggleTask(task.id);
  };

  return (
    <li className="task">
      <div className="task-group">
        <input
          type="checkbox"
          className="checkbox"
          checked={task.checked}
          onChange={handlerOnChange}
          name={task.name}
          id={task.id}
        />
        <label htmlFor={task.id} className="label">
          {task.name}
          <p className="checkmark">
            <CheckIcon strokeWidth={2} width={24} height={24} />
          </p>
        </label>
      </div>
      <div className="task-group">
        <button
          className="btn"
          aria-label={`Update ${task.name} task`}
          onClick={() => enterEditMode(task)}
        >
          <PencilIcon width={24} height={24} />
        </button>

        <button
          className={`btn delete`}
          aria-label={`Delete ${task.name} task`}
          onClick={() => deleteTask(task.id)}
        >
          <TrashIcon width={24} height={24} />
        </button>
      </div>
    </li>
  );
};
export default TaskItem;
