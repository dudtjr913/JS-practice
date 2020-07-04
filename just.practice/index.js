const title = document.querySelector(".title");

function handleClick() {
  if (title.style.color === "black") {
    title.style.color = "blue";
  } else {
    title.style.color = "black";
  }
}

document.addEventListener("click", handleClick);
