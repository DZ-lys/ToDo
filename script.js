{
  /* <div class="todoList">
        <div class="title">
          <div class="circle"></div>
          <h2>To do</h2>
          <p class="count">5</p>
        </div>
        <div class="list">
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
          <div class="listItem">
            <p>[loan-managament] - Add card component</p>
            <select name="" id="">
              <option value="">In progress</option>
              <option value="">Done</option>
            </select>
            <img src="./trash.svg" alt="" />
          </div>
        </div>
      </div> */
}

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
    title: "Geree tseverleh",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Shine jildee yvah",
    date: "2024-12-09",
    state: "todo",
  },
  {
    title: "Huvtssaa beldeh",
    date: "2024-12-09",
    state: "todo",
  },
];

function addTaskList(title, color, count, id) {
  const taskContainer2 = document.querySelector("#taskContainer");
  const todoList = document.createElement("div");
  todoList.setAttribute("class", "todoList");
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
  para.innerText = count
  titleDiv.appendChild(para)
}

containerItems.map((item) => {
  addTaskList(item.title, item.color, item.count);
});

