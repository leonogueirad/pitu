import app from './app';
import database from './database';

// inicializa o banco de dados
database.sync();

// inicializa o servidor http
app.listen(3001);

console.log('Servidor executando na porta 3001');