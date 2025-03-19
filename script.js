const displayLibrary = document.getElementById('library-container');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

const myLibrary = [];

function addBookToLibrary(title, author, pages, read) {
  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
}

addBookToLibrary("To Kill a Mockingbird", "Harper Lee", 324, true);
addBookToLibrary("1984", "George Orwell", 328, false);
addBookToLibrary("The Great Gatsby", "F. Scott Fitzgerald", 180, true);
addBookToLibrary("Pride and Prejudice", "Jane Austen", 279, false);
addBookToLibrary("Moby Dick", "Herman Melville", 635, true);

// function displayBooks() {
//   myLibrary.forEach(book => {
//     const card = document.createElement('div');
//     card.classList.add('card'); // Use the correct variable name
//     card.innerHTML = `
//       <h3>
//         Title <br>
//         ${book.title}
//       </h3>
//     `;

//     displayLibrary.appendChild(card); // Append using the correct variable
//   });
// }

// // Call the function to display books
// displayBooks();

function createTable(){
  const tableBody = document.querySelector('#bookTable tbody');

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

createTable();
