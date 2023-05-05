import { useState, useEffect } from "react";
import { CheckIcon } from "@heroicons/react/24/solid";

const EditForm = ({ editedTask, updateTask, closeEditMode }) => {
  const [updatedTask, setUpdatedTask] = useState(editedTask.name);

  useEffect(() => {
    const closeModalIfEscaped = (e) => {
      e.key == "Escape" && closeEditMode();
    };

    window.addEventListener("keydown", closeModalIfEscaped);

    return () => {
      window.removeEventListener("keydown", closeModalIfEscaped);
    };
  }, [closeEditMode]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    updateTask({ ...editedTask, name: updatedTask });
  };

  const handleChange = (e) => {
    setUpdatedTask(e.target.value);
  };

  return (
    <div role="dialog" areia-aria-labelledby="editTask">
      <form className="todo" onSubmit={handleFormSubmit}>
        <div className="wrapper">
          <input
            type="text"
            id="editTask"
            className="input"
            value={updatedTask}
            onChange={handleChange}
            required
            autoFocus
            maxLength={60}
            placeholder="Update Task"
          />
        </div>
        <button className="btn" aria-label="Update task" type="submit">
          <CheckIcon strokeWidth={2} width={24} height={24} />
        </button>
      </form>
    </div>
  );
};

export default EditForm;
