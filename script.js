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
    task: "Tidy the flat",
    state: "todo",
  },
  {
    task: "Attend the new years event",
    state: "todo",
  },
  {
    task: "Get ready to dress",
    state: "in-progress",
  },
  {
    task: "go to class",
    state: "done",
  },
  {
    task: "get some sleep",
    state: "blocked",
  },
];

function addButton () {
  const addTask = document.getElementById("addTask");
  const input = document.createElement("input")
  const addButton = document.createElement("button");
  input.setAttribute("class", "inputTask");
  input.setAttribute("id", "input");
  addButton.setAttribute("class", "addButton");
  addButton.setAttribute("id", "button");
  addButton.innerText = "Add task";
  addTask.appendChild(input);
  addTask.appendChild(addButton);
}

addButton();

function addTaskList(title, color, count, id) {
  const taskContainer = document.getElementById("taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
  todoList.setAttribute("id", id);
  const titleDiv = document.createElement("div");
  titleDiv.setAttribute("class", "title");
  const h2 = document.createElement("h2");
  h2.innerText = title;
  const cirlce = document.createElement("div");
  cirlce.setAttribute("class", "circle");
  cirlce.style.backgroundColor = color;
  const para = document.createElement("p");
  para.setAttribute("class", "count");
  para.innerText = count;
  taskContainer.appendChild(todoList);
  todoList.appendChild(titleDiv);
  titleDiv.appendChild(cirlce);
  titleDiv.appendChild(h2);
  titleDiv.appendChild(para);
}

containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count, item.id);
});

function addTasksTodo(task) {
  const todo = document.getElementById("todo");
  const tasks = document.createElement("div");
  tasks.setAttribute("class", "tasks");
  const p = document.createElement("p");
  p.setAttribute("class", "task");
  p.innerText = task;
  todo.appendChild(tasks)
  tasks.appendChild(p);
}

function addTaskInProgress(task) {
  const todo = document.getElementById("in-progress");
  const tasks = document.createElement("div");
  tasks.setAttribute("class", "tasks");
  const p = document.createElement("p");
  p.innerText = task;
  todo.appendChild(tasks)
  tasks.appendChild(p);
}

function addTasksDone(task) {
  const todo = document.getElementById("done");
  const tasks = document.createElement("div");
  tasks.setAttribute("class", "tasks");
  const p = document.createElement("p");
  p.setAttribute("class", "task");
  p.innerText = task;
  todo.appendChild(tasks)
  tasks.appendChild(p);
}

function addTaskInBlocked(task) {
  const todo = document.getElementById("blocked");
  const tasks = document.createElement("div");
  tasks.setAttribute("class", "tasks");
  const p = document.createElement("p");
  p.setAttribute("class", "task");
  p.innerText = task;
  todo.appendChild(tasks)
  tasks.appendChild(p);
}

const todo = todoData.filter((task) => {
  return task.state === "todo";
});

const inProgress = todoData.filter((task) => {
  return task.state === "in-progress";
});

const done = todoData.filter((task) => {
  return task.state === "done";
});

const blocked = todoData.filter((task) => {
  return task.state === "blocked";
});

todo.map((task) => {
  addTasksTodo(task.task);
});

inProgress.map((task) => {
  addTaskInProgress(task.task);
});

done.map((task) => {
  addTasksDone(task.task);
});

blocked.map((task) => {
  addTaskInBlocked(task.task);
});

function input() {
  const input = document.getElementById("input");
  const button = document.getElementById("button");
  let inputVal;
  input.addEventListener("input", (e) => {
    inputVal = e.target.value;
  });
  button.addEventListener("click", () => {
    todoData.push({task:inputVal, state:"todo"});
    addNewTask();
    input.value = null;
  })
  function addNewTask() {
    const todo = document.getElementById("todo");
    todo.innerHTML = null;
    const filteredInput = todoData.filter((state) => {
      return state.state === "todo";
    });
    filteredInput.map((task) => {
      const newTask = document.createElement("div");
      newTask.setAttribute("class", "tasks");
      const p = document.createElement("p");
      p.setAttribute("class", "task");
      p.innerText = task.task;
      todo.appendChild(newTask);
      newTask.appendChild(p);
    })
  }
}
input();