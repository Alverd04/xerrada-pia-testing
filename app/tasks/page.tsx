"use client";

import CreateTaskModal from "@/components/Modals/CreateTaskModal";
import React, { useState } from "react";

const TaskPage = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const handleCreateTask = (e: React.BaseSyntheticEvent) => {
    e.preventDefault();
    console.log("Creating task...");
    const task = e.target.elements.task.value;
    const date = e.target.elements.date.value;

    const previousTasks = JSON.parse(localStorage?.getItem("tasks") || "[]");
    const newTask = { task, date };
    const updatedTasks = [...previousTasks, newTask];
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    setShowAddTask(false);
  };

  return (
    <div className="bg-gray-800 min-h-screen">
      <CreateTaskModal
        handleCreateTask={handleCreateTask}
        showModal={showAddTask}
        setShowModal={setShowAddTask}
      />
      <div className="h-20 bg-gray-900 flex justify-between items-center p-2">
        <h1 className="text-3xl font-bold text-center">Task List</h1>
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:bg-gradient-to-r hover:from-green-500 hover:to-blue-600 text-white font-semibold py-3 px-6 rounded-lg"
          onClick={() => setShowAddTask(!showAddTask)}
        >
          Add Task
        </button>
      </div>

      <div className="p-4">
        <div className="flex justify-center items-center">
          <div className="bg-gray-700 p-4 rounded-lg">
            <h2 className="text-2xl font-bold text-center">Tasks</h2>
            <ul className="mt-4">
              {/* {JSON.parse(localStorage?.getItem("tasks") || "[]").map(
                (task: any, index: number) => (
                  <li
                    key={index}
                    className="bg-gray-800 p-2 rounded-lg mb-2 flex justify-between items-center"
                  >
                    <p>{task.task}</p>
                    <p>{task.date}</p>
                  </li>
                )
              )} */}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
