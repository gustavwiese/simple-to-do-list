"use strict";

window.addEventListener("load", start);

const newToDo = document.querySelector("#input-new-to-do");
const list = document.querySelector("#to-do-list");

function start() {
  document.querySelector("#btn-add-item").addEventListener("click", addToDo);
}

function addToDo() {
  const listElement = /*html*/ `
<li>
    <span>${newToDo.value}</span>
    <button class="btn-delete">Delete</button>
    <button class="btn-edit">Edit</button>
</li>
`;
  list.insertAdjacentHTML("beforeend", listElement);
  list.querySelector("li:last-child .btn-delete").addEventListener("click", removeToDo);
  list.querySelector("li:last-child .btn-edit").addEventListener("click", editToDo);
  //reset input
  newToDo.value = "";
  newToDo.focus();
}

function removeToDo() {
  this.parentNode.remove();
}

function editToDo() {
  console.log(this.parentNode);
}
