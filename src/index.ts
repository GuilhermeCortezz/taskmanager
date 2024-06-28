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

// Servir arquivos estáticos do React (opcional, se você precisar servir a aplicação React com o backend)
// app.use(express.static(path.join(__dirname, '../public')));

// Pega qualquer solicitação que não esteja na API e retorna o index.html do React (opcional)
// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public', 'index.html'));
// });

// Inicia o servidor na porta especificada
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
