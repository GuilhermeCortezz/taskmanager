import React from 'react';
import { Task } from '../types';
import TaskItem from './Task';

interface TaskListProps {
    tasks: Task[];
    onComplete: (id: number) => void;
    onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onComplete, onDelete }) => {
    return (
        <ul>
            {tasks.map((task) => (
                <TaskItem key={task.id} task={task} onComplete={onComplete} onDelete={onDelete} />
            ))}
        </ul>
    );
};

export default TaskList;
