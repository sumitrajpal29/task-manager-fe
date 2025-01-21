import React, { useState } from "react";
import axios from "axios";

const AddTaskModal = ({ fetch }) => {
    const [taskName, setTaskName] = useState("");
    const [status, setStatus] = useState("Pending");

    const handleSubmit = async () => {
        const response = await axios.post("http://localhost:5000/tasks", {
            name: taskName,
            // shorthand notation for status: status
            status,
        });
        setTaskName("");
        setStatus("Pending");
        // replace it using socket io
        fetch();
    };

    return (
        <div className="mt-3">
            <h2 className="text-xl font-bold mb-4">Add New Task</h2>
            <input
                type="text"
                value={taskName}
                onChange={(e) => setTaskName(e.target.value)}
                placeholder="Task Name"
                className="border p-2 mb-4 w-full"
            />
            <select value={status} onChange={(e) => setStatus(e.target.value)} className="border p-2 mb-4 w-full">
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
            <button className="btn btn-primary" onClick={handleSubmit} className="bg-blue-500 text-white px-4 py-2 rounded">
                Add Task
            </button>
        </div>
    );
};

export default AddTaskModal;
