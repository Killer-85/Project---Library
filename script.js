const displayLibrary = document.getElementById('library-container');
const dialog = document.getElementById('dialog');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

let myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("Moby Dick", "Herman Melville", 635, true);

createTable();

function createTable(){
  const tableBody = document.querySelector('#book-table tbody');
  tableBody.innerHTML = "";

  myLibrary.forEach((Book,index) =>{
    const row = document.createElement('tr');
    

    row.innerHTML = `
      <td>${Book.title}</td>
      <td>${Book.author}</td>
      <td>${Book.pages}</td>
      <td>${Book.read ? 'Yes' : 'No'}</td>
      <td><button id="delete" data-id="${Book.id}">Delete</button></td>
      <td><button id="change" data-id="${Book.id}">Change Read Status</button></td>
    `;
    tableBody.appendChild(row);
  });
}

//Add New Book Button
const addBookBtn = document.getElementById('add-book');


addBookBtn.addEventListener('click',() =>{
  dialog.show();
})

//Submit Button

const submitBtn = document.getElementById('submit-btn');

submitBtn.addEventListener('click',(e) =>{
  e.preventDefault();
  
  const title = document.getElementById('title');
  const author = document.getElementById('author');
  const pages = document.getElementById('pages');
  const read = document.getElementById('read').checked;

  addBookToLibrary(title.value,author.value,pages.value,read);

  dialog.close();

  createTable();

  title.value = "";
  author.value = "";
  pages.value = "";
  read.checked = false;
})

//Cancel Button
const cancelBtn = document.getElementById('cancel-btn');
cancelBtn.addEventListener('click',() =>{
  dialog.close();
})

//Delete button
function deleteBook(dataID){
  myLibrary = myLibrary.filter(book => book.id !== dataID);
}

const bookTable = document.querySelector('#book-table');bookTable.addEventListener('click', (e) => {
  if(e.target && e.target.id === 'delete'){
    const deleteId = e.target.getAttribute('data-id');
    deleteBook(deleteId);
    createTable();
  }

  Book.prototype.changeStatus = function () {
    this.read = !this.read;
  }

  //Change statust

  if(e.target && e.target.id ==='change'){
    const changeId = e.target.getAttribute('data-id');
    const book = myLibrary.find(b => b.id === changeId);
    if(book){
      book.changeStatus();
      createTable();
    } 
  }
});