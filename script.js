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
    for (let [i, book] of myLibrary.entries()){
            console.log(i, book)
            let currentTitle = book.title
            let currentAuthor = book.author
            let currentPages = book.pages

            const div = document.createElement("div");
            const main = document.querySelector('.main');
            const ul = document.createElement("ul")
            const listTitle = document.createElement("li")
            const listAuthor = document.createElement("li")
            const listPages = document.createElement("li")
            const removeBtn = document.createElement("button")


            listTitle.textContent += `"${currentTitle}"`;
            listTitle.classList.add('listTitle')
            listAuthor.textContent += `Author: ${currentAuthor}`;
            listPages.textContent += `Pages: ${currentPages}`;
            removeBtn.textContent += 'Remove book'
            removeBtn.addEventListener('click', function() {
                myLibrary.splice(i,1)
                document.querySelector(`[data-position = "${i}"]`).remove()
            })

            ul.append(listTitle, listAuthor, listPages)
            div.append(ul, removeBtn)
            div.classList.add('bookListed')
            div.dataset.position = i;
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
