import React from 'react';
import { Task } from '../types';

interface TaskProps {
    task: Task;
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskProps> = ({ task, onComplete, onDelete }) => {
    return (
        <li className={task.completed ? 'completed' : ''}>
            <span>{task.title}</span>
            <button onClick={() => onComplete(task.id)}>Complete</button>
            <button onClick={() => onDelete(task.id)} className="delete">Delete</button>
        </li>
    );
};

export default TaskItem;
