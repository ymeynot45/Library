let myLibrary = [];

const Book = function (title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
    console.log(this);  // delete later
    return this
}

// const addBookToLibrary = function (myLibrary, newBook) {
//     myLibrary.push(newBook);
//     return myLibrary
// }

const loadLibrary = function(library) {  //puting this aside for the moment to actually use the constructor
    frame = document.getElementById("shelf");
    library.forEach(book => {
        spacer = " - "
        let bookSlot = document.createElement("li");
        bookSlot.setAttribute("class", "bookSlot");
        bookSlot.textContent = book.title + spacer + book.author + spacer + book.pageNumber + spacer + book.haveRead;
        frame.appendChild(bookSlot);
    });

    // Not done either need to then post the data to each of the slots or fill the slots as I go.
    // most likely a myLibrary.forEach
}

myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
myLibrary.push(new Book("Flight from the Dark", "Joe Denver", 300, true));
myLibrary.push(new Book("Fire on the Water", "Gary Chalk", 350, false));
console.log(myLibrary);

document.body.onload = () => loadLibrary(myLibrary);