import React, { useState, useEffect } from "react";
import TaskTable from "./components/TaskTable";
import AddTaskModal from "./components/AddTaskModal";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import io from "socket.io-client";

const App = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const socket = io("http://localhost:5000"); // Replace with your backend URL
    toast.success("Welcome to Task Management Dashboard!");
    fetchTasks();

    socket.on("connect", () => {
      console.log("Connected to server");
    });

    socket.on("taskAdded", (task) => {
      debugger;
      console.log("Task added:", task);
    });

    // socket.on("taskUpdated", (updatedTask) => {
    //   setTasks((prevTasks) =>
    //     prevTasks.map((task) =>
    //       task.id === updatedTask.id ? updatedTask : task
    //     )
    //   );
    //   toast.info("Task updated!");
    // });

    // socket.on("taskDeleted", (taskId) => {
    //   setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    //   toast.error("Task deleted!");
    // });

    return () => socket.disconnect();
  }, []);

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  return (
    <div className="container mx-auto mt-4">
      <h1 className="text-2xl font-bold mb-4">Task Management Dashboard</h1>
      <TaskTable tasks={tasks} />
      <AddTaskModal fetch={fetchTasks} />
      <ToastContainer />
    </div>
  );
};

export default App;
