const short = console.log;

function clearInput() {
  input.value = "";
}
const data = JSON.parse(localStorage.getItem("Data")) || [];

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
    clearInput();
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
// localStorage.clear();

render();
renders(list);

const tasks = document.querySelectorAll(".task");
tasks.forEach((task) => {
  task.addEventListener("click", () => {
    data.forEach((value, index) => {
      let newarr = data;
      if (value == task.textContent) {
        newarr.splice(index, 1);
        store();
        task.remove();
        short(newarr);
      }
    });
  });
});
