import React from 'react';
import TaskRow from './TaskRow';

const TaskTable = ({ tasks, fetchTasks }) => {
    return (
        <table className="min-w-full bg-white">
            <thead>
                <tr>
                    <th className="py-2">ID</th>
                    <th className="py-2">Name</th>
                    <th className="py-2">Status</th>
                    <th className="py-2">Created At</th>
                    <th className="py-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                {tasks.map(task => (
                    <TaskRow key={task.id} task={task} />
                ))}
            </tbody>
        </table>
    );
}

export default TaskTable;