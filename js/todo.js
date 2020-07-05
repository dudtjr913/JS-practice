const toDoForm = document.querySelector(".js-todo"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector(".js-todolist");

const TODO_LIST = "todo";
let toDo = [];

function deleteList(del) {
  const deleteBtn = del.target.parentNode;
  toDoList.removeChild(deleteBtn);
  const cleanToDo = toDo.filter(function (todo) {
    return todo.id !== parseInt(deleteBtn.id);
  });
  toDo = cleanToDo;
  saveToDos();
}

function saveToDos() {
  localStorage.setItem(TODO_LIST, JSON.stringify(toDo));
}

function paintToDos(text) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span"),
    getId = toDo.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", deleteList);
  span.innerText = text;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = getId;
  const toDoObj = {
    text: text,
    id: getId,
  };
  toDo.push(toDoObj);
  saveToDos();
}

function handleSubmit(event) {
  event.preventDefault();
  const value = toDoInput.value;
  paintToDos(value);
  toDoInput.value = "";
}

function myToDos() {
  const currentToDos = localStorage.getItem(TODO_LIST);
  if (currentToDos !== null) {
    const parsedToDos = JSON.parse(currentToDos);
    parsedToDos.forEach(function (todo) {
      paintToDos(todo.text);
    });
  }
}

function init() {
  myToDos();
  toDoForm.addEventListener("submit", handleSubmit);
}

init();
