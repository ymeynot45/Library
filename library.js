document.onload = () => loadLibrary();
let myLibrary = [
    {"title": "The Hobbit", "author": "J.R.R. Tolkien", "pageNumber": 295, "haveRead": false},
    {"title": "Flight from the Dark", "author": "Joe Denver", "pageNumber": 300, "haveRead": true},
    {"title": "Fire on the Water", "author": "Gary Chalk", "pageNumber": 350, "haveRead": false},
];

function Book(title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
}

function addBookToLibrary() {

}

function loadLibrary() {

}