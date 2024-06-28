import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types';
import './App.css';

const App: React.FC = () => {
  const [tasks, setTasks] = useState<Task[]>([]);

  // Função para buscar tarefas da API
  const fetchTasks = async () => {
    const response = await axios.get<Task[]>('/tasks');
    setTasks(response.data);
  };

  // Função para adicionar uma nova tarefa
  const addTask = async (title: string) => {
    const response = await axios.post<Task>('/tasks', { title });
    setTasks([...tasks, response.data]);
  };

  // Função para marcar uma tarefa como concluída
  const completeTask = async (id: number) => {
    await axios.patch(`/tasks/${id}`);
    setTasks(tasks.map(task => task.id === id ? { ...task, completed: true } : task));
  };

  // Função para deletar uma tarefa
  const deleteTask = async (id: number) => {
    await axios.delete(`/tasks/${id}`);
    setTasks(tasks.filter(task => task.id !== id));
  };

  // Busca as tarefas quando o componente é montado
  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <TaskForm onAddTask={addTask} />
      <TaskList tasks={tasks} onComplete={completeTask} onDelete={deleteTask} />
    </div>
  );
};

export default App;
