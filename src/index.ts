import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import taskRoutes from './routes/tasks';

const app = express();
const port = 3000;

// Middleware para analisar JSON
app.use(bodyParser.json());

// Rotas para tarefas
app.use('/tasks', taskRoutes);

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
