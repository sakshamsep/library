const myLibrary = [];

function Book(title,author,pages,read_status)
{
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
    this.id = crypto.randomUUID;
    this.info = function() 
     {
         return (`${title} by ${author}, ${pages}, ${read_status}`);

    }
}

function addBookToLibrary(title,author,pages,read_status) {
    const book = new Book(title,author,pages,read_status);
    myLibrary.push(book);

}




const card = document.querySelector(".cards")
 card.textContent = myLibrary;
// function displayCards()
// {

//     const card = document.querySelector(".cards")
//     // for (currentbook of myLibrary)
//     // {
//     //     card.textContent = card.textContent + currentbook;
//     // }
//     card.textContent = myLibrary;
// }

const myDialog = document.querySelector(".myDialog")
const newBook = document.querySelector(".newbook")
const closeBtn = document.querySelector(".closeBtn")

newBook.addEventListener('click',() => {

    myDialog.showModal();
})

let nameOfBook;
let authorName;
let numberOfPages;
let readStatus;

// form.addEventListener('click',(e) => {
   
//      formData = new FormData(form);
//      nameOfBook = formData.get('nameOfBook');
//      authorName = formData.get('nameOfAuthor');
//      numberOfPages = formData.get('numberOfPages');
//      readStatus = formData.get('readStatus');
   
// })
// form.reset();;
const form = document.querySelector("form")
const submit = document.querySelector(".submit")

submit.addEventListener('click',(event) => {
    event.preventDefault();

  if (!form.checkValidity()) {
    form.reportValidity(); // show built-in browser validation messages
    return; // don't continue
  }

     formData = new FormData(form);
     nameOfBook = formData.get('nameOfBook');
     authorName = formData.get('nameOfAuthor');
     numberOfPages = formData.get('numberOfPages');
     readStatus = formData.get('readStatus');
   
form.reset();

    addBookToLibrary(`${nameOfBook}`,`${authorName}`,`${numberOfPages}`,`${readStatus}`);
    //  card.textContent = myLibrary;
    
const bookCard = document.createElement('div')
const bookHeading = document.createElement('h2')
const bookAuthor = document.createElement('p')
const bookPage = document.createElement('p')
const bookStatus = document.createElement('p')
const deleteBook = document.createElement('button');


bookCard.classList.add('book-card');
bookHeading.classList.add('book-heading');
bookAuthor.classList.add('book-author');
bookPage.classList.add('book-page');
bookStatus.classList.add('book-status');
deleteBook.classList.add('deleteBook');

bookHeading.textContent = nameOfBook;
bookAuthor.textContent = `by ${authorName}`;
bookPage.textContent = `${numberOfPages} Pages`;
bookStatus.textContent = readStatus;
deleteBook.textContent = "Delete Book";

bookCard.appendChild(bookHeading)
bookCard.appendChild(bookAuthor)
bookCard.appendChild(bookPage)
bookCard.appendChild(bookStatus)
bookCard.appendChild(deleteBook)

card.appendChild(bookCard);

deleteBook.addEventListener('click',() =>  {

    card.removeChild(bookCard)
    
    
})


})

const dialogClose = document.querySelector(".closeBtn");
dialogClose.addEventListener('click',() => {
    myDialog.close();
})
// addBookToLibrary("a","b","c","d");
// displayCards();
// for (currentBook of myLibrary)
// {

//     bookHeading.textContent = currentBook.title;
//     bookAuthor.textContent = currentBook.author;
//     bookPage.textContent = currentBook.pages;
//     bookStatus.textContent = currentBook.read_status

//     card.appendChild(bookCard);
// }

// const deleteBtn = document.querySelector(".deleteBook")