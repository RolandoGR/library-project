// Create the container div
const container = document.createElement("div");
container.classList.add("container");

// Create the hero div and its child elements
const hero = document.createElement("div");
hero.classList.add("hero");
const heroTitle = document.createElement("h1");
heroTitle.textContent = "Library.";
hero.appendChild(heroTitle);

// Create the main div and its child elements
const main = document.createElement("div");
main.classList.add("main");
const inputNew = document.createElement("div");
inputNew.classList.add("inputNew");
inputNew.setAttribute("method", "#");
inputNew.setAttribute("action", "#");
const titleInput = document.createElement("div");
titleInput.classList.add("titleInput");
const titleLabel = document.createElement("label");
titleLabel.setAttribute("for", "title");
titleLabel.textContent = "Title: ";
const titleInputField = document.createElement("input");
titleInputField.setAttribute("type", "text");
titleInputField.setAttribute("name", "title");
titleInputField.setAttribute("id", "bookTitle");
titleInputField.setAttribute("placeholder", "The Hobbit");
titleInput.appendChild(titleLabel);
titleInput.appendChild(titleInputField);

const authorInput = document.createElement("div");
authorInput.classList.add("authorInput");
const authorLabel = document.createElement("label");
authorLabel.setAttribute("for", "author");
authorLabel.textContent = "Author: ";
const authorInputField = document.createElement("input");
authorInputField.setAttribute("type", "text");
authorInputField.setAttribute("name", "author");
authorInputField.setAttribute("id", "author");
authorInputField.setAttribute("placeholder", "J.R.R. Tolkien");
authorInput.appendChild(authorLabel);
authorInput.appendChild(authorInputField);

const pagesInput = document.createElement("div");
pagesInput.classList.add("pagesInput");
const pagesLabel = document.createElement("label");
pagesLabel.setAttribute("for", "pages");
pagesLabel.textContent = "Pages: ";
const pagesInputField = document.createElement("input");
pagesInputField.setAttribute("type", "text");
pagesInputField.setAttribute("name", "pages");
pagesInputField.setAttribute("id", "pages");
pagesInputField.setAttribute("placeholder", "354");
pagesInput.appendChild(pagesLabel);
pagesInput.appendChild(pagesInputField);

const statusInput = document.createElement("div");
statusInput.classList.add("statusInput");
const statusText = document.createElement("div");
statusText.classList.add("statusText");
statusText.textContent = "Have you read this book?";
const switchAdd = document.createElement("input");
switchAdd.setAttribute("type", "checkbox");
switchAdd.setAttribute("id", "switchAdd");
const switchLabel = document.createElement("label");
switchLabel.setAttribute("for", "switchAdd");
statusInput.appendChild(statusText);
statusInput.appendChild(switchAdd);
statusInput.appendChild(switchLabel);

const addBtn = document.createElement("button");
addBtn.classList.add("addBtn");
addBtn.setAttribute("id", "addBtn");
addBtn.textContent = "+ Add book";

console.log("here");
addBtn.addEventListener("click", () => {
  console.log("here");
  addBookToLibrary();
  removeAllCards();
  showBooks();
});

let myLibrary = [
  {
    title: "Harry Potter and the Philosoper's stone",
    author: "J. K. Rowling",
    pages: 223,
    status: true,
  },
  {
    title: "Harry Potter and Chamber of Secrets",
    author: "J. K. Rowling",
    pages: 347,
    status: false,
  },
];

function Book(title, author, pages, status) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.status = status;
}

function addBookToLibrary() {
  const title = document.getElementById("bookTitle").value;
  const author = document.getElementById("author").value;
  const pages = document.getElementById("pages").value;
  let status = document.getElementById("switchAdd").checked;
  let newBook = new Book(title, author, pages, status);

  myLibrary.push(newBook);
  return;
}

function removeAllCards() {
  const allCards = document.querySelectorAll("div.bookListed");
  console.log("List of cards:", allCards);
  allCards.forEach((card) => {
    card.remove();
  });
}

function showBooks() {
  for (let [i, book] of myLibrary.entries()) {
    console.log(i, book);
    let currentTitle = book.title;
    let currentAuthor = book.author;
    let currentPages = book.pages;
    let currentStatus = book.status;

    const div = document.createElement("div");
    const main = document.querySelector(".main");
    const ul = document.createElement("ul");
    const listTitle = document.createElement("li");
    const listAuthor = document.createElement("li");
    const listPages = document.createElement("li");
    const listStatus = document.createElement("li");
    const removeBtn = document.createElement("button");
    const statusBtn = document.createElement("input");
    const statusLabel = document.createElement("label");

    listTitle.textContent += `"${currentTitle}"`;
    listTitle.classList.add("listTitle");
    listAuthor.textContent += `Author: ${currentAuthor}`;
    listPages.textContent += `Pages: ${currentPages}`;

    function createSwitch(currentStatus) {
      statusBtn.type = "checkbox";
      statusBtn.id = `"${i}"`;
      statusLabel.name = `"${currentTitle}"`;
      statusLabel.setAttribute("for", `"${i}"`);

      // Creating status text for card
      if (currentStatus === true) {
        listStatus.textContent += `Already read this book!`;
        listStatus.classList.add("readYes");
        statusBtn.checked = true;
      } else {
        listStatus.textContent += `Not read yet`;
        listStatus.classList.add("readNo");
      }
    }
    createSwitch(currentStatus);
    statusBtn.addEventListener("click", function () {
      if (currentStatus === true) {
        document.getElementById(`"${i}"`).className = "readNo";
        listStatus.textContent = `Not read yet`;
        listStatus.className = "readNo";
      } else {
        document.getElementById(`"${i}"`).className = "readYes";
        listStatus.textContent = `Already read this book!`;
        listStatus.className = "readYes";
      }
      myLibrary[i].status = !myLibrary[i].status;
      currentStatus = !currentStatus;
    });

    removeBtn.textContent += "Remove book";
    removeBtn.classList.add("removeBtn");
    removeBtn.addEventListener("click", function () {
      if (confirm("Are you sure you want to remove this book?")) {
        myLibrary.splice(i, 1);
        document.querySelector(`[data-position = "${i}"]`).remove();
      } else {
        return;
      }
    });

    ul.append(listTitle, listAuthor, listPages, listStatus);
    div.append(ul, statusBtn, statusLabel, removeBtn);
    div.classList.add("bookListed");
    div.dataset.position = i;
    main.appendChild(div);
  }
}

inputNew.appendChild(titleInput);
inputNew.appendChild(authorInput);
inputNew.appendChild(pagesInput);
inputNew.appendChild(statusInput);
inputNew.appendChild(addBtn);

main.appendChild(inputNew);

// Create the footer div and its child element
const footer = document.createElement("div");
footer.classList.add("footer");
footer.textContent = "Built by RolandoGR";

// Append all the created elements to the container div
container.appendChild(hero);
container.appendChild(main);
container.appendChild(footer);

// Add the container div to the document body
document.body.appendChild(container);

showBooks();
