let myLibrary = [];

const Book = function (title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
    console.log(this);  // delete later
    return this
}

const addBookForm = function () {
    frame = document.getElementById("newBookEntry")
    console.log(frame.textContent);
    
    // Fetching HTML Elements in Variables by ID.
    let createform = document.createElement('form'); // Create New Element Form
    createform.setAttribute("action", ""); // Setting Action Attribute on Form
    createform.setAttribute("method", "post"); // Setting Method Attribute on Form
    frame.appendChild(createform);

    let heading = document.createElement('h4'); // Heading of Form
    heading.innerHTML = "Add new book ";
    createform.appendChild(heading);

    let line = document.createElement('hr'); // Giving Horizontal Row After Heading
    createform.appendChild(line);

    let linebreak = document.createElement('br');
    createform.appendChild(linebreak);


    let newBookTitle = document.createElement('newBookTitle'); // Create Label for New Title Field
    newBookTitle.innerHTML = "New Book Title : "; // Set Field Labels
    createform.appendChild(newBookTitle);

    let newTitleElement = document.createElement('input'); // Create Input Field for New Title
    newTitleElement.setAttribute("type", "text");
    newTitleElement.setAttribute("newBookTitle", "newTitle");
    createform.appendChild(newTitleElement);

    let newTitleBreak = document.createElement('br');
    createform.appendChild(newTitleBreak);

    let authorLable = document.createElement('label'); // Create Label for New Author field
    authorLable.innerHTML = "Who is the author: ";
    createform.appendChild(authorLable);

    let newAuthorElement = document.createElement('input'); // Create Input Field for New Author
    newAuthorElement.setAttribute("type", "text");
    newAuthorElement.setAttribute("name", "newAuthor");
    createform.appendChild(newAuthorElement);

    let newAuthorBreak = document.createElement('br');
    createform.appendChild(newAuthorBreak);

    let newPageCountLabel = document.createElement('label'); // Create Label for Page Count field
    newPageCountLabel.innerHTML = "Total Pages : ";
    createform.appendChild(newPageCountLabel);

    let newPageCountElement = document.createElement('input');  // currently broken
    newPageCountElement.setAttribute("type", "number");
    newPageCountElement.setAttribute("name", "newPageCountElement");
    createform.appendChild(newPageCountElement);

    let newPageCountBreak = document.createElement('br');
    createform.appendChild(newPageCountBreak);

    let haveReadLabel = document.createElement('label');  // Create Label for Have Read field
    haveReadLabel.innerHTML = "I Have Read This Book :";
    createform.appendChild(haveReadLabel);

    let haveReadElement = document.createElement("input");  //currently broken
    haveReadElement.setAttribute("type", "checkbox");
    haveReadElement.setAttribute("id", "haveReadCheckbox");
    haveReadElement.setAttribute("name", "haveReadElement");
    haveReadElement.setAttribute("value", true);
    createform.appendChild(haveReadElement);

    let haveReadBreak = document.createElement('br');
    createform.appendChild(haveReadBreak);


    let submitElement = document.createElement('input'); // Append Submit Button
    submitElement.setAttribute("type", "submit");
    submitElement.setAttribute("name", "newBookSubmit");
    submitElement.setAttribute("value", "Submit");
    createform.appendChild(submitElement);


}


const addBookToLibrary = function (myLibrary, newBook) {
    myLibrary.push(newBook);
    console.log(myLibrary);
    return myLibrary
}

const loadLibrary = function(library) {  //puting this aside for the moment to actually use the constructor
    frame = document.getElementById("shelf");
    library.forEach(book => {
        spacer = " - "
        let bookSlot = document.createElement("li");
        bookSlot.setAttribute("class", "bookSlot");
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
            alert("I read this!");
            // later to change the status of if the book has been read.
        });
};


myLibrary.push(new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
myLibrary.push(new Book("Flight from the Dark", "Joe Denver", 300, true));
myLibrary.push(new Book("Fire on the Water", "Gary Chalk", 350, false));
console.log(myLibrary);

document.body.addEventListener("load", loadLibrary(myLibrary));
document.body.addEventListener("load", addBookForm());  
