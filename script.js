const task = document.querySelector(".task");
const list = document.querySelector("ul");

let taskList = [];

task.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    taskList.push(task.value);
    console.log(taskList);
    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const input = document.createElement("input");
    const span = document.createElement("span");

    p.innerHTML = task.value;
    span.innerHTML = "X";
    input.type = "checkbox";
    div.classList.add("buttons-wrapper");
    div.appendChild(input);
    div.appendChild(span);
    li.appendChild(p);
    li.appendChild(div);
    list.appendChild(li);
    task.value = " ";
  }
});
