let todos = [
{
    text:"geree tseverleh",
    state:"todo"
}, 
{
    text:"kino uzh",
    state:"todo"
}, {
    text:"unt",
    state:"todo"
}, {
    text:"ser",
    state:"done"
}, 
];
const button = document.getElementById("button");
const input = document.getElementById("input");
let inVal;
input.addEventListener("input", (event) => {
  inVal = event.target.value;
});
button.addEventListener("click", () => {
  todos.push({text:inVal, state:"todo"});
  renderTodos();
  input.value = null;
});

function renderTodos() {
  const tasklist = document.getElementById("tasklist");
  tasklist.innerHTML = null;
  const filterTodo = todos.filter((id) => {
    return id.state == "todo";
  });
  filterTodo.sort().map((todo) => {
    const p = document.createElement("p");
    p.innerText = todo.text;
    tasklist.appendChild(p);
  });
}
renderTodos(todos);