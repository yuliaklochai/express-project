const express = require('express');
const app = express();

const port = 3000;

const booksRouter = require('./routes/books.routes');
const errorHandler = require('./middleware/errorHandler.middleware');

app.use(express.json());

app.use('/books', booksRouter);

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));