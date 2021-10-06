let myLibrary = ['A', 'B', 'C', 'D'];

function Book(title) {
  this.title = title;
  addBookToLibrary(this.title);
}

function addBookToLibrary(title) {
    myLibrary.push(title);
    
  
}

