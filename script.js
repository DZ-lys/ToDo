const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id:"todo",
    task: "Geree tseverleh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "In progress",
    count: 5,
    color: "yellow",
    id: "in-progress",
  },
  {
    title: "Done",
    count: 5,
    color: "green",
    id:"done",
  },
  {
    title: "Blocked",
    count: 5,
    color: "red",
    id:"blocked"
  },
];

const todoData = [
  {
    task: "Geree tseverleh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    task: "Shine jildee yvah",
    date: "2024-12-09",
    state: "todo",
  },
  {
    task: "Huvtssaa beldeh",
    date: "2024-12-09",
    state: "in-progress",
  },
];

function addTaskList(title, color, count, id) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  taskContainer2.appendChild(todoList);
  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;
  titleDiv.appendChild(para);
}

containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id);
});

