# Express project

Simple server for "Books and reviews for books" application using Express.js.

To get the server running locally:
* clone this repo
* `npm install` to install all required dependencies
* `npm start` to start the local server. Server starts on *http://localhost:3000/*

Routes, which you can use:
* **GET**  `/books` - Listing all books
* **GET**   `/books/bookId` - Getting a book by id
* **POST**  `/books` - Creating a book
* **PUT**  `/books/bookId` - Updating a book
* **GET**  `/books/bookId/reviews` - Listening all reviews of a book
* **POST** `/books/bookId/reviews` - Creating review to a book
* **DELETE**  `/books/bookId/reviews/reviewId` - Deleting review in a book