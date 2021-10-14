let myLibrary = [];

function Book(title, author, pages, read) {
  
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  addBookToLibrary(this);
  
}

function addBookToLibrary(book) {
    myLibrary.push(book);
    update_lib_display();
}

let form_back_cover = document.getElementById('cover');
let add_book_form = document.getElementById('pop_up_form');

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
  if (submitted_read == true){
    submitted_read = 'Already Read';
  } else {
    submitted_read = 'Need to Read';
  }
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

form_disappear();
}

let reg_title = "Title";
let reg_author = "Author";
let reg_pages = "Pages";

let card_container = document.getElementById("card_container");

function update_lib_display(){
  for (let i = 0; i < myLibrary.length; i++){
   let current_title = myLibrary[i].title;
   let current_author = myLibrary[i].author;
   let current_pages = myLibrary[i].pages;
   let current_read = myLibrary[i].read;

    let book_title_div = document.createElement("div");
    let author_div = document.createElement("div");
    let pages_div = document.createElement("div");
    let read_div = document.createElement('div');
    book_title_div.innerHTML = reg_title.bold() + ": " + current_title;
    author_div.innerHTML = reg_author.bold() + ": " + current_author;
    pages_div.innerHTML = reg_pages.bold() + ": " + current_pages;
    read_div.innerHTML = current_read;

    let new_lib_card = document.createElement("div");
    new_lib_card.classList.add('library_card');
    new_lib_card.appendChild(book_title_div);
    new_lib_card.appendChild(author_div);
    new_lib_card.appendChild(pages_div);
    new_lib_card.appendChild(read_div);
    card_container.appendChild(new_lib_card);

    
  }

}




