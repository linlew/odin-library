const addBookBtn = document.getElementById("new-book-btn");
const submitBookBtn = document.getElementById("submit-book-btn");
const updateSubmitBookBtn = document.getElementById("update-submit-book-btn");
const cancelSubmit = document.getElementById("cancel-submit-btn");
const updateCancelSubmit = document.getElementById("update-cancel-submit-btn");
const bookForm = document.getElementById("new-book-form");
const updateBookForm = document.getElementById("update-book-form");
const bookFormContent = document.querySelector(".form");

const bName = document.getElementById("book-name");
const bookTitle = document.getElementById("book-title");
const bookAuthor = document.getElementById("book-author");
const bookPages = document.getElementById("book-pages");
const bookReadStatus = document.getElementById("read-check");

const updateBookTitle = document.getElementById("update-book-title");
const updateBookAuthor = document.getElementById("update-book-author");
const updateBookPages = document.getElementById("update-book-pages");
const updateBookReadStatus = document.getElementById("update-read-check");

const mainContainer = document.querySelector(".main-container");
let counter = 1;

addBookBtn.addEventListener("click", () => {
    bookForm.showModal();
});

cancelSubmit.addEventListener("click", () => {
    bookForm.close();
});

submitBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    const newBook = createBookObject(`book-${counter++}`);
    createBookDiv(newBook);
    bookFormContent.reset();
    bookForm.close();
});

updateSubmitBookBtn.addEventListener("click", (event) => {
    event.preventDefault();
    updateBookForm.close();
});


function createBookDiv(bookObj) {
    //sets up variables for all of the divs
    const bookDiv = document.createElement("div");
    bookDiv.classList.add('book');
    bookDiv.classList.add(bookObj.bookName);
    const editDiv = document.createElement("div");
    editDiv.classList.add('edit');
    const editTextDiv = document.createElement("div");
    editTextDiv.classList.add('edit-text');
    editTextDiv.classList.add(bookObj.bookName);
    editTextDiv.textContent = 'Edit';
    editTextDiv.addEventListener('click', (event) => {
        tClass = event.target.classList[1];
        const updateBook = updateBookObject(tClass);
        updateBookForm.showModal();
        // updateBookDiv(updateBook);
        // console.log(event);
    });
    const titleDiv = document.createElement("div");
    titleDiv.classList.add('title');
    const authorDiv = document.createElement("div");
    authorDiv.classList.add('author');
    const pagesDiv = document.createElement("div");
    pagesDiv.classList.add('pages');
    const readBarDiv = document.createElement("div");
    readBarDiv.classList.add('read-bar');
    
    //adds the content to the divs
    if (bookObj.title === "") {
        titleDiv.textContent = "Untitled"
    }
    else {
        titleDiv.textContent = `${bookObj.title}`;
    }
    authorDiv.textContent = `By: ${bookObj.author}`;
    pagesDiv.textContent = `Pages: ${bookObj.pages}`;
    if (bookObj.read) {
        readBarDiv.classList.add('read');
    }
    else {
        readBarDiv.classList.remove('read');
    }

    //creates the div in the webpage
    mainContainer.appendChild(bookDiv);
    bookDiv.appendChild(editDiv);
    editDiv.appendChild(editTextDiv);
    bookDiv.appendChild(titleDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readBarDiv);
}



//creates a object for the book
function createBookObject(bName) {
    let book = {
        bookName: bName,
        title: bookTitle.value,
        author: bookAuthor.value,
        pages: bookPages.value,
        read: bookReadStatus.checked
    }
    return book
}

function updateBookObject(bName) {
    console.log(`${bName}`);
    titleDiv = document.querySelector(`div.${bName} div.title`);
    authorDiv = document.querySelector(`div.${bName} div.author`);
    pagesDiv = document.querySelector(`div.${bName} div.pages`);
    updateBookTitle.value = titleDiv.textContent;
    updateBookAuthor.value = authorDiv.textContent.substr(4);
    updateBookPages.value = parseInt(pagesDiv.textContent.substr(7));

    console.log(titleDiv.textContent);
}

// function updateBookDiv(newBook) {

// }