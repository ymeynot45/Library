let myLibrary = [
    {"title": "The Hobbit", "author": "J.R.R. Tolkien", "pageNumber": 295, "haveRead": false},
    {"title": "Flight from the Dark", "author": "Joe Denver", "pageNumber": 300, "haveRead": true},
    {"title": "Fire on the Water", "author": "Gary Chalk", "pageNumber": 350, "haveRead": false},
];

const Book = function (title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
}

// const addBookToLibrary = function (myLibrary, newBook) {
//     myLibrary.push(newBook);
//     return myLibrary
// }

const loadLibrary = function(library) {
    frame = document.getElementById("shelf");
    // myLibrary.forEach(book => {
        let book = document.createElement("li");
        book.setAttribute("class", "book");
        book.textContent = "Happy";
        frame.appendChild(book);
        console.log(library);
    // });

    // for (let i = 0; i < myLibrary.lenght; i++) {
    //     let bookSlot = document.createElement("li");
    //     bookSlot.className = "bookSlot";
    //     frame.appendChild(bookSlot);
    //     alert()
    // }
    // Not done either need to then post the data to each of the slots or fill the slots as I go.
    // most likely a myLibrary.forEach
}

document.body.onload = () => loadLibrary(myLibrary);