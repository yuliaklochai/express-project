const express = require('express');
const app = express();

const port = 3000;

const booksRouter = require('./routes/books.routes');
const errorHandler = require('./middleware/errorHandler.middleware');

app.use(express.json());

app.use('/books', booksRouter);

app.use('*', (req, res) => {
    res.status(404).send({message: "This route doesn't exist"});
})

app.use(errorHandler);

app.listen(port, () => console.log(`Listening on port ${port}`));