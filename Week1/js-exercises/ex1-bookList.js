/**
  
 ** Exercise 1: The book list **
  I 'd like to display my three favorite books inside a nice webpage!
  1. Iterate through the array of books.
  2. For each book, create a `<p>`
  element with the book title and author and append it to the page.
  3. Use a `<ul>`  and `<li>` to display the books.
  4. Add an `<img>` to each book that links to a URL of the book cover.
  5. Change the style of the book depending on whether you have read it(green) or not(red).
  The end result should look something like this:
  https: //hyf-js2-week1-makeme-ex1-demo.herokuapp.com/
  */

function createBookList(books) {
  // your code goes in here, return the ul element
  let bookUl = document.createElement('ul');
  bookUl.style.display ='flex';
  bookUl.style.justifyContent = 'space-between';
  bookUl.style.padding = '30px';
  bookUl.style.margin = '10px';
  bookUl.style.listStyle = 'none';

  for (let i=0 ; i< books.length ;i++){
    let bookAuthorAndTitle = document.createElement('p');
    bookAuthorAndTitle.innerText = books[i].title + ' by '+books[i].author;


    let bookListItem = document.createElement('li');
    bookListItem.appendChild(bookAuthorAndTitle);
    bookListItem.style.width = '30%';
    bookListItem.style.textAlign = 'center';


    let addImgs = document.createElement('img');
    addImgs.src = 'book' + (i+1) + '.jpg';
    bookListItem.appendChild(addImgs);
    addImgs.style.width = '30%';
    addImgs.style.margin= '10%'

    if (books[i].alreadyRead){
      bookListItem.style.backgroundColor = 'green';
    } else {
      bookListItem.style.backgroundColor = 'red';
    }
      bookUl.appendChild(bookListItem);
  }
  return bookUl;
}

const books = [{
  title: 'The Design of Everyday Things',
  author: 'Don Norman',
  alreadyRead: false
},
{
  title: 'The Most Human Human',
  author: 'Brian Christian',
  alreadyRead: true
},
{
  title: 'The Pragmatic Programmer',
  author: 'Andrew Hunt',
  alreadyRead: true
}
];
let ulElement = createBookList(books);
document.querySelector('div').appendChild(ulElement);