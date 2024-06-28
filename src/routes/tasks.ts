import { Router } from 'express';

interface Task {
    id: number;
    title: string;
    completed: boolean;
}

// Armazena as tarefas em memória
const tasks: Task[] = [];
let nextId = 1;

const router = Router();

// Criar uma nova tarefa
router.post('/', (req, res) => {
    const { title } = req.body;
    const newTask: Task = { id: nextId++, title, completed: false };
    tasks.push(newTask);
    res.status(201).json(newTask);
});

// Listar todas as tarefas
router.get('/', (req, res) => {
    res.json(tasks);
});

// Marcar uma tarefa como concluída
router.patch('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = true;
        res.json(task);
    } else {
        res.status(404).send('Task not found');
    }
});

// Excluir uma tarefa
router.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex >= 0) {
        tasks.splice(taskIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Task not found');
    }
});

export default router;
