const myLibrary = ["b","c","d"];

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
    myLibrary.push(book.title);

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
form.addEventListener('click',() => {
     formData = new FormData(form);
     nameOfBook = formData.get('nameOfBook');
     authorName = formData.get('nameOfAuthor');
     numberOfPages = formData.get('numberOfPages');
     readStatus = formData.get('readStatus');

})

const submit = document.querySelector(".submit")
submit.addEventListener('click',(event) => {
    // event.preventDefault();
    addBookToLibrary(`${nameOfBook}`,`${authorName}`,`${numberOfPages}`,`${readStatus}`);
     card.textContent = myLibrary;
})
// addBookToLibrary("a","b","c","d");
// displayCards();