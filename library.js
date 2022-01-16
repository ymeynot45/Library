let myLibrary = [];
let nextBookId = 4;

const Book = function (id, title, author, pageNumber, haveRead) {
    this.id = id;
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
    return this
}

const loadLibrary = function(library) {
    frame = document.getElementById("shelf");
    library.forEach(book => {
        spacer = " - "
        let bookSlot = document.createElement("li");
        bookSlot.setAttribute("class", "bookSlot");
        bookSlot.setAttribute("id", book.id);
        bookSlot.textContent = book.title + spacer + book.author + spacer + book.pageNumber + spacer + book.haveRead + "   ";
        addReadButton(bookSlot);
        frame.appendChild(bookSlot);
    });
}

const addReadButton = function(location) { // I know I should break this up into multiple functions.
    let button = document.createElement("button");
    button.setAttribute("class", "readButton");
    button.innerHTML = "Finished Book?"
    location.appendChild(button);
    button.addEventListener ("click", 
        function() {
            toggleHaveRead(parseInt(location.id), location);
            addReadButton(location); //re-adding the button after making a change
        });
};

const toggleHaveRead = function(id, bookSlot) {  // I have to refactor this badly.
    myLibrary.forEach(book => {
        if (book.id === id && book.haveRead === true){
            book.haveRead = false
            bookSlot.textContent = book.title + spacer + book.author + spacer + book.pageNumber + spacer + book.haveRead + "   ";
            return book
        };
        if (book.id === id && book.haveRead === false){
            book.haveRead = true
            bookSlot.textContent = book.title + spacer + book.author + spacer + book.pageNumber + spacer + book.haveRead + "   ";
            return book
        };
    });
}

const addBookForm = function () {
    frame = document.getElementById("newBookEntry")  // frame name
    
    let createform = document.createElement('form');
    createform.setAttribute("action", "");
    createform.setAttribute("method", "post");
    createform.setAttribute("id", "newBookForm");  //form name
    frame.appendChild(createform);
    console.log(createform);

    let heading = document.createElement('h4');
    heading.innerHTML = "Add new book ";
    createform.appendChild(heading);

    let line = document.createElement('hr'); 
    createform.appendChild(line);

    let linebreak = document.createElement('br');
    createform.appendChild(linebreak);

    let newBookTitle = document.createElement('newBookTitle'); 
    newBookTitle.innerHTML = "New Book Title : "; 
    createform.appendChild(newBookTitle);

    let newTitleElement = document.createElement('input');
    newTitleElement.setAttribute("id", "newTitle"); 
    newTitleElement.setAttribute("type", "text");
    newTitleElement.setAttribute("name", "newTitle");
    createform.appendChild(newTitleElement);

    let newTitleBreak = document.createElement('br');
    createform.appendChild(newTitleBreak);

    let authorLable = document.createElement('label'); 
    authorLable.innerHTML = "Who is the author: ";
    createform.appendChild(authorLable);

    let newAuthorElement = document.createElement('input');
    newAuthorElement.setAttribute("type", "text");
    newAuthorElement.setAttribute("name", "newAuthor");
    createform.appendChild(newAuthorElement);

    let newAuthorBreak = document.createElement('br');
    createform.appendChild(newAuthorBreak);

    let newPageCountLabel = document.createElement('label');
    newPageCountLabel.innerHTML = "Total Pages : ";
    createform.appendChild(newPageCountLabel);

    let newPageCountElement = document.createElement('input');
    newPageCountElement.setAttribute("type", "number");
    newPageCountElement.setAttribute("name", "newPageCountElement");
    createform.appendChild(newPageCountElement);

    let newPageCountBreak = document.createElement('br');
    createform.appendChild(newPageCountBreak);

    let haveReadLabel = document.createElement('label');
    haveReadLabel.innerHTML = "I Have Read This Book : ";
    createform.appendChild(haveReadLabel);

    let haveReadElementFalse = document.createElement("input");
    haveReadElementFalse.setAttribute("id", "haveReadRadioFalse");
    haveReadElementFalse.setAttribute("name", "haveReadElement");
    haveReadElementFalse.setAttribute("type", "radio");
    haveReadElementFalse.setAttribute("value", false);
    haveReadElementFalse.setAttribute("checked", "checked");
    let radioFalseLable = document.createElement('label');
    radioFalseLable.innerHTML = "False   "

    let haveReadElementTrue = document.createElement("input");
    haveReadElementTrue.setAttribute("id", "haveReadRadioTrue");
    haveReadElementTrue.setAttribute("name", "haveReadElement");
    haveReadElementTrue.setAttribute("type", "radio");
    haveReadElementTrue.setAttribute("value", true);
    let radioTrueLable = document.createElement('label');
    radioTrueLable.innerHTML = "True"

    createform.appendChild(haveReadElementFalse);
    createform.appendChild(radioFalseLable);
    createform.appendChild(haveReadElementTrue);
    createform.appendChild(radioTrueLable);

    let haveReadBreak = document.createElement('br');
    createform.appendChild(haveReadBreak);


    let submitElement = document.createElement('input'); // Append Submit Button
    submitElement.setAttribute("id", "newBookSubmitButton");
    submitElement.setAttribute("type", "submit");
    submitElement.setAttribute("name", "newBookSubmit");
    submitElement.setAttribute("value", "Submit");
    createform.appendChild(submitElement);

    newBookForm.addEventListener ("submit", handleSubmit);
}

const handleSubmit = function(e) {
        console.log("I found the button");
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        addIdToBook(formProps);
        console.log(formProps);
        addBookToLibrary(myLibrary, formProps);
        clearForm();
        console.log(myLibrary);
}

const clearForm = function(){
    document.getElementById("newBookForm").reset();
};

const findBookInLibrary = function(myLibrary, id) {  //currently un attached
    let book = myLibrary.filter(book => book.id === id);
    return book[0]
}

const addBookToLibrary = function(myLibrary, newBook) {
    myLibrary = myLibrary.push(newBook);
    return myLibrary
}

const addIdToBook = function(newbook) {
    newbook['id'] = nextBookId
    console.log(`${nextBookId} before addition`)
    ++nextBookId
    console.log(`${nextBookId} after addition`)
    return newbook
}

myLibrary.push(new Book(1, "The Hobbit", "J.R.R. Tolkien", 295, false));
myLibrary.push(new Book(2, "Flight from the Dark", "Joe Denver", 300, true));
myLibrary.push(new Book(3, "Fire on the Water", "Gary Chalk", 350, false));

// console.log(myLibrary);

document.body.addEventListener("load", loadLibrary(myLibrary));
document.body.addEventListener("load", addBookForm());  


