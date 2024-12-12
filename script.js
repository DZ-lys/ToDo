const containerItems = [
  {
    title: "To do",
    count: 5,
    color: "white",
    id:"todo",
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
    title: "clean my flat",
    state: "todo",
  },
  {
    title: "attend the christmas party",
    state: "todo",
  },
  {
    title: "prepare my outfit",
    state: "in-progress",
  },
  {
    title: "take a shower",
    state: "done",
  },
  {
    title: "sleep",
    state: "blocked",
  },
];

const options = ["done", "in-progress", "done", "blocked"];

const clearContainers = () => {
  const container1 = document.getElementById("todo");
  const container2 = document.getElementById("in-progress");
  const container3 = document.getElementById("done");
  const container4 = document.getElementById("blocked");
  container1.innerHTML = null;
  container2.innerHTML = null;
  container3.innerHTML = null;
  container4.innerHTML = null;
};

function renderContainers(title, color, count, id) {
  const taskContainer = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  const listItemParent = document.createElement("div");
  listItemParent.setAttribute("id", id);
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  todoList.appendChild(titleDiv);
  todoList.appendChild(listItemParent);
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);
  taskContainer.appendChild(todoList);
}

containerItems.map((item) => {
  renderContainers(item.title, item.color, item.count, item.id);
});

const deleteTodo = (index) => {
  todoData.splice(index, 1);
  clearContainers();
  todoData.map((item, index) => {
    renderTodoItems(item.title, item.state, index);
  });
};

const renderTodoItems = (title, state, index) => {
  console.log(title, index);
  const container = document.getElementById(state);
  const listItem = document.createElement("div");
  const text = document.createElement("p");
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "x";
  deleteButton.setAttribute("id", index);
  deleteButton.addEventListener("click", () => {
    deleteTodo(index);
  });
  listItem.appendChild(deleteButton);
  text.innerText = title;
  listItem.appendChild(text);
  listItem.setAttribute("class", "listItem");
  listItem.setAttribute("id", "listItem");
  container.appendChild(listItem);
  const select = document.createElement("select");
  options.map((text) => {
    const option = document.createElement("option");
    option.innerText = text;
    select.appendChild(option);
  }) 
  listItem.appendChild(select);
};

todoData.map((item, index) => {
  renderTodoItems(item.title, item.state, index);
});

const addTask = () => {
  if (input.value) {
    todoData.push({
      title: input.value,
      state: "todo",
    });
    input.value = null;
    clearContainers();
    todoData.map((item, index) => {
      renderTodoItems(item.title, item.state, index);
    });
  }
};

const input = document.getElementById("input");
const addButton = document.getElementById("button");
addButton.addEventListener("click", addTask);
