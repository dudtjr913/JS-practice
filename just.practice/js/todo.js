const toDoForm = document.querySelector(".js-todo"),
  toDoInput = toDoForm.querySelector("input"),
  toDoList = document.querySelector("ul");

const USER_TODO = "toDo";
let TODOS = [];

function handleClick(event) {
  const delList = event.target.parentNode;
  toDoList.removeChild(delList);
  const cleanToDo = TODOS.filter(function (todo) {
    return todo.id !== parseInt(delList.id);
  });
  TODOS = cleanToDo;
  saveToDo();
}

function saveToDo() {
  localStorage.setItem(USER_TODO, JSON.stringify(TODOS));
}

function paintToDo(value) {
  const li = document.createElement("li"),
    delBtn = document.createElement("button"),
    span = document.createElement("span"),
    getId = TODOS.length + 1;
  delBtn.innerText = "❌";
  delBtn.addEventListener("click", handleClick);
  span.innerText = value;
  li.appendChild(delBtn);
  li.appendChild(span);
  toDoList.appendChild(li);
  li.id = getId;
  toDoObj = {
    value: value,
    id: getId,
  };
  TODOS.push(toDoObj);
  saveToDo();
}
function handleSubmit(event) {
  event.preventDefault();
  const value = toDoInput.value;
  paintToDo(value);
  toDoInput.value = "";
}
function getToDo() {
  const currentToDo = localStorage.getItem(USER_TODO);
  if (currentToDo !== null) {
    const parsedToDo = JSON.parse(currentToDo);
    parsedToDo.forEach(function (each) {
      paintToDo(each.value);
    });
  }
}

function init() {
  getToDo();
  toDoForm.addEventListener("submit", handleSubmit);
}
init();
