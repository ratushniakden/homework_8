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
  if (isNaN(event.target.value)) {
    console.error("Input should be an integer value!");
  }
  if (event.target.value < 0) {
    console.error("Your input is less than zero!");
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
}

function hasClass() {
  return elem.classList.contains("www");
}

function addOrRemoveClass() {
  if (hasClass()) {
    elem.classList.toggle("www");
  } else {
    elem.classList.toggle("www");
  }
}

//Task 3

const array = [
  { id: 1, title: "first", description: "text1" },
  { id: 2, title: "second", description: "text2" },
  { id: 3, title: "third", description: "text3" },
];

array.map(function (item) {
  const deleteButton = document.createElement("input");
  const h1 = document.createElement("h1");
  const p = document.createElement("p");
  const li = document.createElement("li");
  li.classList.add("liPinkColor");

  ul.appendChild(li);

  liColorHandler(li);
  liTextHandler(li, item, h1, p);
  liButtonHandler(li, deleteButton);
  deleteButtonHandler(deleteButton, li);
});

function liColorHandler(li) {
  li.addEventListener("click", () => {
    li.classList.toggle("liLightBlueColor");
  });
}

function liButtonHandler(li, deleteButton) {
  deleteButton.setAttribute("type", "button");
  deleteButton.setAttribute("value", "delete");
  deleteButton.setAttribute("class", "deleteButton");

  li.appendChild(deleteButton);
}

function liTextHandler(li, item, h1, p) {
  h1.textContent = item.title;
  p.textContent = item.description;

  li.appendChild(h1);
  li.appendChild(p);
}

function deleteButtonHandler(deleteButton, li) {
  deleteButton.addEventListener("click", () => {
    console.log(ul.removeChild(li));
  });
}

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
