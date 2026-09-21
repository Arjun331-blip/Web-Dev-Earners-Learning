const actionForm = document.querySelector("#actionForm");
const inputTask = document.querySelector("#inputTask");
const addTaskBtn = document.querySelector("#addTaskBtn");
const errorInput = document.querySelector("#errorInput");
const cancelEdit = document.querySelector("#cancelEdit");
const taskCount = document.querySelector("#taskCount");
const CompleteCount = document.querySelector("#CompleteCount");
const displayTodoTask = document.querySelector("#displayTodoTask");

let todoTask = JSON.parse(localStorage.getItem("todoTask")) || [];
// let todoTask = [
//   { id: Date.now() + 1, task: "Go To College", isCompleted: false },
//   { id: Date.now() + 2, task: "Take Class", isCompleted: false },
//   { id: Date.now() + 3, task: "Study Web Dev", isCompleted: false },
// ];

let editId = null;
inputTask.addEventListener("focus", (e) => {
  errorInput.textContent = "";
});

actionForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const taskValue = inputTask.value.trim();
  if (taskValue === "") {
    errorInput.textContent = "please type in input";
    return;
  }

  if(editId !== null){
    todoTask = todoTask.map((todoValue) => {
      if(Number(editId) === todoValue.id){
        return {
          ...todoValue,
          task: taskValue,
        }
      }
      return todoValue;
    })
    localStorage.setItem("todoTask", JSON.stringify(todoTask));
    editId = null;
    inputTask.value = "";
    // cancelEditTodo();
    renderTodoTask();
    console.log(todoTask);
  } else {
      let newTask = {
            id: Date.now(),
            task: taskValue,
            isCompleted: false,
          };
      todoTask.push(newTask);
      addTodoTask(newTask);
      localStorage.setItem("todoTask", JSON.stringify(todoTask));
      inputTask.value = "";
  }
  updateCounts();
});

function addTodoTask(todo) {
  let div = document.createElement("div");
  div.className =
    "flex gap-2 justify-between align-middle border rounded-sm px-2 py-1 taskList";

  div.dataset.id = todo.id;
  div.innerHTML = `
        <input type="checkbox" name="" id="" class="w-3 h-3 self-center" data-id=${todo.id} data-action="toggle" ${todo.isCompleted === true ? "checked": ""}>
        <p class="flex-1 text-gray-500 text-sm self-center text-nowrap ${todo.isCompleted ? 'line-through text-green-600' : ''}" data-id=${todo.id}>${todo.task}</p>
        <button class="text-amber-600 self-center hover:bg-amber-200 px-3 rounded-sm duration-300 ease-linear" data-id=${todo.id} data-action="edit">Edit</button>
        <button class="text-red-600 self-center hover:bg-red-200 px-3 rounded-sm duration-300 ease-linear" data-id=${todo.id} data-action="delete">Delete</button>
    `;
  displayTodoTask.append(div);
  updateCounts();
}

function renderTodoTask() {
  displayTodoTask.textContent = "";
  todoTask.forEach((todoValue) => {
    addTodoTask(todoValue);
  });
}

renderTodoTask();

// Event Delegation

displayTodoTask.addEventListener("click", (e) => {
  let div = e.target.closest(".taskList");
  let btn = e.target.closest("button");
  let action = btn?.dataset.action;
  let id = div?.dataset?.id;
  let c = e.target.closest('input[type="checkbox"]');
  let check = c?.dataset?.action;

  if (action === "delete") {
    deleteTask(e, id);
    localStorage.setItem("todoTask", JSON.stringify(todoTask));
    updateCounts();
  }

  if (action === "edit") {
    startEdit(id);
    localStorage.setItem("todoTask", JSON.stringify(todoTask));
    editId = id;
  }
  if(check === "toggle"){
    toggleCheckbox(id);
    updateCounts();
  }
});

function toggleCheckbox(id){
  todoTask = todoTask.map((todoValue) => {
      if(todoValue.id === Number(id)){
        return {
          ...todoValue,
          isCompleted: !todoValue.isCompleted,
        }
      }
      return todoValue;
    })
    localStorage.setItem("todoTask", JSON.stringify(todoTask));
    renderTodoTask();
}

function deleteTask(e, id) {
  e.target.closest(".taskList").remove();
  todoTask = todoTask.filter((todoValue) => {
    if (todoValue.id !== Number(id)) {
      return todoTask;
    }
  });
  // taskCount.textContent = `task : ${todoTask.length+1 - 1}`;
}

function startEdit(id) {
  let currentTodo = todoTask.find((todoValue) => {
    if (todoValue.id === Number(id)) {
      return todoValue;
    }
  });
  inputTask.value = currentTodo.task;
  addTaskBtn.textContent = "update";
  addTaskBtn.style.backgroundColor = "#ebb734";
  cancelEdit.textContent = "Cancel Edit";
  // cancelEditTodo();
}

function updateCounts(){
  taskCount.textContent = `task : (${todoTask.length})`;
  CompleteCount.textContent = `completed : ${todoTask.filter((todo) => todo.isCompleted).length}`;
}

function cancelEditTodo(){
  inputTask.value = "";
  addTaskBtn.textContent = "Add";
  addTaskBtn.style.backgroundColor = "#7F22FE";
  cancelEdit.textContent = "";
}
cancelEdit.addEventListener("click", cancelEditTodo);