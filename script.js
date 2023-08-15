const task = document.querySelector(".task");
const list = document.querySelector("ul");

let index = -1;

task.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    index++;
    const li = document.createElement("li");
    const p = document.createElement("p");
    const div = document.createElement("div");
    const input = document.createElement("input");
    const span = document.createElement("span");
    span.setAttribute("index", index);
    input.setAttribute("index", index);

    input.addEventListener("click", () => {
      if (li.children[0].style.textDecoration === "") {
        li.children[0].style.textDecoration = "line-through";
      } else {
        li.children[0].style.textDecoration = "";
      }
    });

    span.addEventListener("click", () => {
      index--;
      list.children[Number(span.getAttribute("index"))].remove();
      const close = document.querySelectorAll("span");
      for (let index = 0; index < close.length; index++) {
        close[index].setAttribute("index", index);
      }
    });

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

//text-decoration: line-through
