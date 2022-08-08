const addBtn = document.getElementById('addBtn')

addBtn.addEventListener('click', function () {
    addBookToLibrary();
    removeAllCards()
    showBooks()

});

let myLibrary = [
    {   title: "Harry Potter and the Philosoper's stone",
        author: "J. K. Rowling",
        pages: 223,
        status: true,

    },
    {   title: "Harry Potter and Chamber of Secrets",
        author: "J. K. Rowling",
        pages: 347,
        status: false,

    }
];

function Book(title, author, pages, status) {
    this.title = title
    this.author = author
    this.pages = pages
    this.status = status
}

function addBookToLibrary() {
    const title = document.getElementById('bookTitle').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    let status = document.getElementById('switchAdd').checked;
    let newBook = new Book(title, author, pages, status)

    myLibrary.push(newBook)
    return
}

function removeAllCards() {
    const allCards = document.querySelectorAll('div.bookListed');
    console.log("List of cards:", allCards)
    allCards.forEach (card => {card.remove();})   
    }





function showBooks() {
    for (let [i, book] of myLibrary.entries()){
            console.log(i, book)
            let currentTitle = book.title
            let currentAuthor = book.author
            let currentPages = book.pages
            let currentStatus = book.status

            const div = document.createElement("div");
            const main = document.querySelector('.main');
            const ul = document.createElement("ul")
            const listTitle = document.createElement("li")
            const listAuthor = document.createElement("li")
            const listPages = document.createElement("li")
            const listStatus = document.createElement("li")
            const removeBtn = document.createElement("button")
            const statusBtn = document.createElement("input")
            const statusLabel = document.createElement("label")


            listTitle.textContent += `"${currentTitle}"`;
            listTitle.classList.add('listTitle')
            listAuthor.textContent += `Author: ${currentAuthor}`;
            listPages.textContent += `Pages: ${currentPages}`;
            
            function createSwitch(currentStatus){
                statusBtn.type = "checkbox";
                statusBtn.id = `"${i}"`;
                statusLabel.name = `"${currentTitle}"`;
                statusLabel.setAttribute("for",`"${i}"`);

                // Creating status text for card
                if (currentStatus === true) {
                    listStatus.textContent += `Already read this book!`;
                    listStatus.classList.add('readYes');
                    } else {
                        listStatus.textContent += `Not read yet`;
                        listStatus.classList.add('readNo');
                    } 

            }
            createSwitch(currentStatus)
            statusBtn.addEventListener('click', function() {
                if (currentStatus === true) {
                    document.getElementById(`"${i}"`).className ='readNo';
                    listStatus.textContent = `Not read yet`;
                    listStatus.className ='readNo';
                    } else {
                        document.getElementById(`"${i}"`).className = 'readYes';;
                        listStatus.textContent = `Already read this book!`;
                        listStatus.className = 'readYes';
                    }                
                    currentStatus = !currentStatus
                })  

            removeBtn.textContent += 'Remove book'
            removeBtn.classList.add('removeBtn')
            removeBtn.addEventListener('click', function() {
                if (confirm("Are you sure you want to remove this book?")) {
                    myLibrary.splice(i,1)
                    document.querySelector(`[data-position = "${i}"]`).remove()    
                  } else {
                    return
                  }
            })

            ul.append(listTitle, listAuthor, listPages, listStatus)
            div.append(ul, statusBtn, statusLabel, removeBtn)
            div.classList.add('bookListed')
            div.dataset.position = i;
            main.appendChild(div);   

    }
}


showBooks();

