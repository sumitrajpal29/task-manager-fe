import React from 'react';
import { FaTrash } from 'react-icons/fa';
import axios from 'axios';

const TaskRow = ({ task, fetchTasks }) => {

    const handleDelete = async () => {
        try {
            await axios.delete(`http://localhost:5000/tasks/${task.id}`);
            // fetchTasks(); // Refresh the task list after deletion
        } catch (error) {
            console.error("There was an error deleting the task!", error);
        }
    };

    return (
        <tr key={task.id} className="border-b">
            <td className="py-2">{task.id}</td>
            <td className="py-2">{task.name}</td>
            <td className="py-2">{task.status}</td>
            <td className="py-2">{new Date(task.created_at).toLocaleString()}</td>
            <td className="py-2">
                <button onClick={handleDelete} className="text-red-500 hover:text-red-700">
                    <FaTrash />
                </button>
            </td>
        </tr>
    );
}

export default TaskRow;