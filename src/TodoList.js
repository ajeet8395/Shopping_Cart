import React, { useState } from "react";
import "./App.css"; // Import the external CSS file

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Function to add a new task
  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { name: newTask, completed: false }]);
      setNewTask("");
    }
  };

  // Function to mark a task as completed
  const completeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = true;
    setTasks(updatedTasks);
  };

  // Function to remove a task
  const removeTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="container">
      <h2 className="title">To-Do List</h2>

      <div className="input-container">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="task-input"
        />
        <button onClick={addTask} className="add-button">
          Add Task
        </button>
      </div>

      <ul className="task-list">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`task-item ${task.completed ? "completed" : ""}`}
          >
            {task.name}
            {!task.completed && (
              <button
                onClick={() => completeTask(index)}
                className="complete-button"
              >
                Complete
              </button>
            )}
            <button onClick={() => removeTask(index)} className="remove-button">
              Remove
            </button>
          </li>
        ))}
      </ul>

      <p className="task-summary">Total tasks: {tasks.length}</p>
      <p className="task-summary">
        Completed tasks: {tasks.filter((task) => task.completed).length}
      </p>
    </div>
  );
}

export default TodoList;
