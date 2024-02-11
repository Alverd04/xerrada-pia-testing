// components/TaskPage.js
import React, { useState } from "react";
import TaskList from "./TaskList";
import TaskForm from "./TaskForm";

const TaskPage = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (id, updatedTask) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, ...updatedTask };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-4">Main Tasks</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList
        tasks={tasks}
        onUpdateTask={updateTask}
        onDeleteTask={deleteTask}
      />
    </div>
  );
};

export default TaskPage;
