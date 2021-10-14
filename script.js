let myLibrary = [];

function Book(title, author, pages, read) {
  
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  addBookToLibrary(this);
  // let submission_form = document.getElementById("submit_button");
  // let submitted_title = submission_form[0];
  // let submitted_author = submission_form[1];
  // let submitted_pages = submission_form[2];
  // let submitted_read = submission_form[3];
  // let new_book = {title: submitted_title };
  
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    
  
}






let reg_title = "Title";
let reg_author = "Author";
let reg_pages = "Pages";


let card_container = document.getElementById("card_container");
let lib_card = document.getElementsByClassName("library_card");

let form_back_cover = document.getElementById('cover');
let add_book_form = document.getElementById('pop_up_form');


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
 

//this is an event listener to make the pop up form appear
let add_book_button = document.getElementById('add_book');

add_book_button.addEventListener("click", make_form_appear);

function make_form_appear(){
  add_book_form.classList.add('active');
  form_back_cover.classList.add('active');
}

form_back_cover.addEventListener('click', form_disappear);

function form_disappear(){
  form_back_cover.classList.remove('active');
  add_book_form.classList.remove('active');
  add_book_form.reset();

}


let submit_button_a = document.getElementById("submit_button")
submit_button_a.addEventListener("click", check_book);
function check_book(){
  let submitted_title = document.getElementById('title_input_box').value;
  let submitted_author = document.getElementById('author_input').value;
  let submitted_pages = document.getElementById('pages_input').value;
  let submitted_read = document.getElementById('read_input').checked;
  let title_flag = false;
  
  for (let i = 0; i < myLibrary.length; i++){
    if (myLibrary[i].title == submitted_title){
      title_flag = true;
      alert("You already have this book in your library!");
    }
  }
  if (title_flag == false){
    const new_book = new Book(submitted_title, submitted_author, submitted_pages, submitted_read);
  }
console.log(myLibrary);
form_disappear();
}




