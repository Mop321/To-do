const short = console.log;

const data = JSON.parse(localStorage.getItem("Data")) || [1];

const input = document.querySelector(".js-input-value");
const insert = document.querySelector(".submitButton");

function store() {
  localStorage.setItem("Data", JSON.stringify(data));
}

let list = "";
let fullList = document.querySelector(".list");

function appendTask() {
  insert.addEventListener("click", () => {
    let inputValue = input.value;
    data.push(inputValue);
    store();
  });
}
function renders(list) {
  fullList.innerHTML = list;
}
function render() {
  appendTask();
  data.forEach((task) => {
    short(data);
    if (task != undefined) {
      list += `<li class="task">${task}</li>`;
      renders(list);
    }
  });

}
render();
// localStorage.clear();
