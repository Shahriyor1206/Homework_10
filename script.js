let selectBox = document.querySelector(".selectBox");
let arrow = document.querySelector(".fa-chevron-right");
let text = document.querySelector(".text");
let listItem = document.querySelectorAll("li");
let list = document.querySelector("#list");

selectBox.onclick = () => {
  arrow.classList.toggle("rotate");
  list.classList.toggle("hide");
};

const handle = (e) => {
  text.innerHTML = e.target.textContent;
  arrow.classList.toggle("rotate");
  list.classList.toggle("hide");
};

listItem.forEach((el) => el.addEventListener("click", handle));
