"use strict";

const rootDiv = document.getElementById("rootDiv");
const div = document.createElement("div");
const input = document.createElement("input");
const inputResult = document.createElement("input");
const elem = document.createElement("div");
const ul = document.createElement("ul");

input.setAttribute("placeholder", "Input number");
inputResult.setAttribute("disabled", "disabled");

rootDiv.appendChild(div);
rootDiv.appendChild(elem);
rootDiv.appendChild(ul);

div.appendChild(input);
div.appendChild(inputResult);

//Task 1

input.addEventListener("input", (event) => {
  if (event.target.value < 0) {
    return;
  }

  if (event.target.value === "") {
    inputResult.value = event.target.value;
  }

  if (Number(event.target.value)) {
    inputResult.value = (4 / 3) * 3.14 * event.target.value ** 3;
  }
});

//Task 2

function addClass() {
  elem.classList.add("www");
}

function removeCalss() {
  elem.classList.remove("www");
  elem.removeAttribute("class");
  console.dir(elem);
}

function hasClass() {
  return elem.className === "www";
}

function addOrRemoveClass() {
  if (hasClass()) {
    removeCalss();
  } else {
    addClass();
  }
}

//Task 3

const array = [
  { id: 1, title: "first", description: "text1" },
  { id: 2, title: "second", description: "text2" },
  { id: 3, title: "third", description: "text3" },
];

array.forEach((element) => {
  const li = document.createElement("li");
  const deleteButton = document.createElement("input");

  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "delete");
  deleteButton.setAttribute("class", "deleteButton");

  const h1 = document.createElement("h1");
  const p = document.createElement("p");

  h1.textContent = element.title;
  p.textContent = element.description;

  ul.appendChild(li);
  li.appendChild(h1);
  li.appendChild(p);
  li.appendChild(deleteButton);
});

const li = document.querySelectorAll("li");
const deleteButton = document.querySelectorAll(".deleteButton");

deleteButton.forEach((button) => {
  button.addEventListener("click", deleteButtonHandler);
});

li.forEach((liElement) => {
  liElement.addEventListener("click", liColorHandler);
});

function liColorHandler() {
  if (this.style.backgroundColor === "pink") {
    this.style.backgroundColor = "lightBlue";
  } else {
    this.style.backgroundColor = "pink";
  }
}

function deleteButtonHandler() {
  ul.removeChild(this.parentNode);
  this.parentNode.removeChild(this);
}

ul.prepend;

//Task 4
class Elem {
  constructor(selector) {
    this.selector = document.querySelector(selector);
  }

  html(string) {
    this.selector.textContent = string;
    return this;
  }

  append(string) {
    this.selector.append(string);
    return this;
  }

  prepend(string) {
    this.selector.prepend(string);
    return this;
  }

  attr(attribute, value) {
    this.selector.setAttribute(attribute, value);
    return this;
  }
}
