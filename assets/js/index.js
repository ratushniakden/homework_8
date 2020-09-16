"use strict";

const rootDiv = document.getElementById("rootDiv");
const div = document.createElement("div");
const input = document.createElement("input");
const inputResult = document.createElement("input");
const elem = document.createElement("div");
const ul = document.createElement("ul");

input.setAttribute("placeholder", "Input number");
inputResult.setAttribute("disabled", "disabled");

rootDiv.append(div, elem, ul);
div.append(input, inputResult);

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
  elem.classList.toggle("www");
}

//Task 3

const responseObjArray = [
  { id: 1, title: "first", description: "text1" },
  { id: 2, title: "second", description: "text2" },
  { id: 3, title: "third", description: "text3" },
];

const listItems = responseObjArray.map((item) => {
  const li = document.createElement("li");
  li.classList.add("liPinkColor");

  const headingOptions = {
    tagName: "h1",
    textContent: item.title,
  };

  const paragraphOptions = {
    textContent: item.description,
  };

  const buttonOptions = {
    className: "deleteButton",
    textContent: "delete",
  };

  const h1 = createHeading(headingOptions);
  const p = createParagraph(paragraphOptions);
  const btn = createButton(buttonOptions);

  li.addEventListener("click", () => {
    li.classList.toggle("liLightBlueColor");
  });

  btn.addEventListener("click", () => {
    li.parentNode.removeChild(li);
  });

  li.append(h1, p, btn);
  return li;
});

ul.append(...listItems);

function createHeading({ tagName = "h1", textContent = "Title" } = options) {
  const headingElement = document.createElement(tagName);
  headingElement.textContent = textContent;
  return headingElement;
}

function createParagraph({ textContent = "description" } = options) {
  const pElement = document.createElement("p");
  pElement.textContent = textContent;
  return pElement;
}

function createButton({ className = "btn", textContent = "click" } = options) {
  const btn = document.createElement("button");
  btn.classList.add(className);
  btn.textContent = textContent;
  return btn;
}

//Task 4
class Elem {
  constructor(selector) {
    this._element = document.querySelector(selector);
  }

  html(string) {
    this._element.textContent = string;
    return this;
  }

  append(string) {
    this._element.append(string);
    return this;
  }

  prepend(string) {
    this._element.prepend(string);
    return this;
  }

  attr(attribute, value) {
    this._element.setAttribute(attribute, value);
    return this;
  }
}
