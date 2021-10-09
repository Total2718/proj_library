// let myLibrary = [];

// function Book(title) {
//   this.title = title;
//   addBookToLibrary(this.title);
// }

// function addBookToLibrary(title) {
//     myLibrary.push(title);
    
  
// }






let reg_title = "Title";
let reg_author = "Author";
let reg_pages = "Pages"

let bold
let card_container = document.getElementById("card_container");
let lib_card = document.getElementsByClassName("library_card");

for (let i = 0; i < lib_card.length; i++) {
    let book_title = document.createElement("div");
    let author = document.createElement("div");
    let pages = document.createElement("div");
    book_title.innerHTML = reg_title.bold() + ": HP and the Order of the Pheonix";
    author.innerHTML = reg_author.bold() + ": J.K. Rowling";
    pages.innerHTML = reg_pages.bold() + ": 455";

    lib_card[i].appendChild(book_title);
    lib_card[i].appendChild(author);
    lib_card[i].appendChild(pages);
  } 

  
