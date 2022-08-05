const addBtn = document.getElementById('addBtn')

let myLibrary = [
    {   title: "Harry Potter and the Philosoper's stone",
        author: "J. K. Rowling",
        pages: 223
    },
    {   title: "Harry Potter and Chamber of Secrets",
        author: "J. K. Rowling",
        pages: 347
    }
];

function showBooks() {
    for (let book of myLibrary){
            console.log(book)
            let currentTitle = book.title
            let currentAuthor = book.author
            let currentPages = book.pages


            const div = document.createElement("div");
            const main = document.querySelector('.main');
            const ul = document.createElement("ul")
            const listTitle = document.createElement("li")
            const listAuthor = document.createElement("li")
            const listPages = document.createElement("li")

            listTitle.textContent += `Title: ${currentTitle}`;
            listAuthor.textContent += `Author: ${currentAuthor}`;
            listPages.textContent += `Pages: ${currentPages}`;
            ul.append(listTitle, listAuthor, listPages)
            div.appendChild(ul)
            div.classList.add('bookListed');
            main.appendChild(div);   

    }
}

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {
    const title = document.getElementById('bookTitle').value
    const author = document.getElementById('author').value
    const pages = document.getElementById('pages').value

    let newBook = new Book(title, author, pages)
    myLibrary.push(newBook)
    return
}

function removeAllCards() {
    const allCards = document.querySelectorAll('div.bookListed');
    console.log("List of cards:", allCards)
    allCards.forEach (card => {card.remove();})   
    }

showBooks();


addBtn.addEventListener('click', function () {
    addBookToLibrary();
    removeAllCards()
    showBooks()
});
