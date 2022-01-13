let myLibrary = [];

const Book = function (title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
    myLibrary.push(this);
}

// const addBookToLibrary = function (myLibrary, newBook) {
//     myLibrary.push(newBook);
//     return myLibrary
// }

const loadLibrary = function(library) {  //puting this aside for the moment to actually use the constructor
    frame = document.getElementById("shelf");
    library.forEach(book => {
        let bookSlot = document.createElement("li");
        bookSlot.setAttribute("class", "book");
        bookSlot.textContent = Object.getOwnPropertyNames(book);
        frame.appendChild(bookSlot);
    });

    // Not done either need to then post the data to each of the slots or fill the slots as I go.
    // most likely a myLibrary.forEach
}

// {"title": "The Hobbit" , "author": "J.R.R. Tolkien", "pageNumber": 295, "haveRead": false},
// {"title": "Flight from the Dark", "author": "Joe Denver", "pageNumber": 300, "haveRead": true},
// {"title": "Fire on the Water", "author": "Gary Chalk", "pageNumber": 350, "haveRead": false},

Book("The Hobbit", "J.R.R. Tolkien", 295, false);
Book("Flight from the Dark", "Joe Denver", 300, true);
Book("Fire on the Water", "Gary Chalk", 350, false);



document.body.onload = () => loadLibrary(myLibrary);