import React from "react";
import CustomForm from "./components/custom-form";

const App = () => {
  const addTask = (task) => {
    console.log(task);
  };

  return (
    <div className="App">
      <header>
        <h1>My Task List</h1>
      </header>
      <CustomForm addTask={addTask} />
    </div>
  );
};

export default App;
