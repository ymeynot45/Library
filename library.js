let myLibrary = [];

const Book = function (title, author, pageNumber, haveRead) {
    this.title = title;
    this.author = author;
    this.pageNumber = pageNumber;
    this.haveRead = haveRead;
    return this
}

const bookInfo = function(book) {
    return `${book.title} - ${book.author} - ${book.pageNumber} - ${book.haveRead}   `
}

const setupTitleButtons = function() {
    const headers = ["Title", "Author", "Pages", "Have_Read"]
    let firstShelf = document.getElementById("firstShelf");
    let secondShelf = document.createElement("div");
    secondShelf.setAttribute("id", "secondShelf");
    firstShelf.appendChild(secondShelf);
    headers.forEach(createHeaderButton);
}

const createHeaderButton = function(keyWord){
    let frame = document.getElementById("secondShelf");
    let button = document.createElement("button");
    button.setAttribute("class", "headerButtons");
    button.setAttribute("id", `${keyWord}Button`);
    button.textContent = keyWord;
    frame.appendChild(button);
    button.addEventListener ("click", 
    function() {
        sortLibrary(keyWord);
    });
}


const sortLibrary = (keyWord) => {  //not currently working
    document.getElementById("thirdShelf").remove();
    let library = myLibrary;
    if(keyWord === "Title"){
        library = library.sort(compareTitle);
    }else if(keyWord === "Author"){
        library = library.sort(compareAuthor);
    }else if(keyWord == "Pages"){
        library = library.sort(comparePages);
    }else if(keyWord == "Have_Read"){
        library = library.sort(compareHave_Read);
    }else{
        alert("Sorting Error, unrecognized keyWord");
    }
    // let sortedLibrary = library.sort((kw1, kw2) => (kw1.title < kw2.title) ? 1 : (kW1.title > kw2.title) ? -1: 0);
    loadLibrary(library);
}

const compareTitle = function(a, b){
    let titleA = a.title.toUpperCase();
    let titleB = b.title.toUpperCase();

    let comparison = 0;
    if (titleA > titleB){
        comparison = 1;
    } else if (titleA < titleB){
        comparison = -1
    }
    return comparison;
}

const compareAuthor = function(a, b){
    let authorA = a.author.toUpperCase();
    let authorB = b.author.toUpperCase();

    let comparisonauthorA= 0;
    if (authorA > authorB){
        comparison = 1;
    } else if (authorA < authorB){
        comparison = -1
    }
    return comparison;
}

const comparePages = function(a, b){
    let pagesA = a.pageNumber;
    let pagesB = b.pageNumber;

    let comparison = 0;
    if (pagesA > pagesB){
        comparison = 1;
    } else if (pagesA < pagesB){
        comparison = -1
    }
    return comparison;
}

const compareHave_Read = function(a, b){
    let haveReadA = a.haveRead;
    let haveReadB = b.haveRead;

    let comparison = 0;
    if (haveReadA > haveReadB){
        comparison = 1;
    } else if (haveReadA < haveReadB){
        comparison = -1
    }
    return comparison;
}

const createBookSlot = function(book) {
    let bookSlot = document.createElement("li");
    bookSlot.setAttribute("class", "bookSlot");
    bookSlot.setAttribute("id", book.id);
    bookSlot.textContent = bookInfo(book);
    addReadButton(bookSlot);
    frame = document.getElementById("thirdShelf");
    frame.appendChild(bookSlot);
}

const loadLibrary = function(library) {
    let thirdShelf = document.createElement("ol");
    thirdShelf.setAttribute(`id`, `thirdShelf`);
    document.getElementById(`secondShelf`).appendChild(thirdShelf);
    library.forEach(book => {
        createBookSlot(book);
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
            addReadButton(location);
        });
};

const toggleHaveRead = function(id, bookSlot) {  // I have to refactor this badly.
    myLibrary.forEach(book => {
        if (book.id === id && book.haveRead === true){
            book.haveRead = false
            bookSlot.textContent = bookInfo(book);
            return book
        };
        if (book.id === id && book.haveRead === false){
            book.haveRead = true
            bookSlot.textContent = bookInfo(book);
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
    newTitleElement.setAttribute("name", "title");
    createform.appendChild(newTitleElement);

    let newTitleBreak = document.createElement('br');
    createform.appendChild(newTitleBreak);

    let authorLable = document.createElement('label'); 
    authorLable.innerHTML = "Who is the author: ";
    createform.appendChild(authorLable);

    let newAuthorElement = document.createElement('input');
    newAuthorElement.setAttribute("type", "text");
    newAuthorElement.setAttribute("name", "author");
    createform.appendChild(newAuthorElement);

    let newAuthorBreak = document.createElement('br');
    createform.appendChild(newAuthorBreak);

    let newPageCountLabel = document.createElement('label');
    newPageCountLabel.innerHTML = "Total Pages : ";
    createform.appendChild(newPageCountLabel);

    let newPageCountElement = document.createElement('input');
    newPageCountElement.setAttribute("type", "number");
    newPageCountElement.setAttribute("name", "pageNumber");
    createform.appendChild(newPageCountElement);

    let newPageCountBreak = document.createElement('br');
    createform.appendChild(newPageCountBreak);

    let haveReadLabel = document.createElement('label');
    haveReadLabel.innerHTML = "I Have Read This Book : ";
    createform.appendChild(haveReadLabel);

    let haveReadElementFalse = document.createElement("input");
    haveReadElementFalse.setAttribute("id", "haveReadRadioFalse");
    haveReadElementFalse.setAttribute("name", "haveRead");
    haveReadElementFalse.setAttribute("type", "radio");
    haveReadElementFalse.setAttribute("value", false);
    haveReadElementFalse.setAttribute("checked", "checked");
    let radioFalseLable = document.createElement('label');
    radioFalseLable.innerHTML = "False   "

    let haveReadElementTrue = document.createElement("input");
    haveReadElementTrue.setAttribute("id", "haveReadRadioTrue");
    haveReadElementTrue.setAttribute("name", "haveRead");
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
        e.preventDefault();
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        book = new Book(formProps.title, formProps.author, formProps.pageNumber, formProps.haveRead)
        addBookToLibrary(myLibrary, book);
        postBookToLibrary(book);
        clearForm();
}

const clearForm = function(){
    document.getElementById("newBookForm").reset();
};

const addBookToLibrary = function(myLibrary, newBook) {
    addIdToBook(newBook);
    myLibrary = myLibrary.push(newBook);
    findNextId();
    return myLibrary
}

const postBookToLibrary = function(newBook) {
    createBookSlot(newBook);
}

const addIdToBook = function(newbook) {
    nextBookId = findNextId()
    newbook['id'] = nextBookId
    return newbook
}

const findNextId = function() {
    nextId = Math.max(...myLibrary.map(book => book.id));
    if(nextId < 1){
        nextId = 1
    }
    else{
        ++nextId
    }
    return nextId
}

const loadPage = function() {
    addBookToLibrary(myLibrary, new Book("The Hobbit", "J.R.R. Tolkien", 295, false));
    addBookToLibrary(myLibrary, new Book("Flight from the Dark", "Joe Denver", 300, true));
    addBookToLibrary(myLibrary, new Book("Fire on the Water", "Gary Chalk", 350, false));
    setupTitleButtons();
    loadLibrary(myLibrary);
    addBookForm();
}


document.body.addEventListener("load", loadPage());
