let todoForm = document.querySelector("#todoForm");
let todoInput = document.querySelector("#todoInput");
let todoList = document.querySelector("#todoList");
let formBtn = document.querySelector("#formBtn");
let cancelEdit = document.querySelector("#cancelEdit");
let taskCount = document.querySelector("#taskCount");
let completeCount = document.querySelector("#completeCount");

let todos = [
  {
    id: Date.now() + 1,
    task: "go to gym",
    isCompleted: false,
  },
  {
    id: Date.now() + 2,
    task: "Revision Web Dev",
    isCompleted: false,
  },
  {
    id: Date.now() + 3,
    task: "Take Class",
    isCompleted: false,
  },
];

let editTodoId = null;
todoForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const todoValue = todoInput.value.trim();
  if(!todoInput){
    return;
  }

  if(editTodoId){
    todos = todos.map((todo) => {
        if (todo.id === Number(editTodoId)) {
            return {
                ...todo,
                task: todoValue
            }
        }
            return todo;
    })
  } else{
    let newTodo = {
        id: Date.now(),
        task: todoValue,
        isCompleted: false,
    };
    todos.push(newTodo);
    addTodo(newTodo);
  }
//   renderTodo();
});

function renderTodo(todos) {
  todoList.innerHTML = "";
  todos.forEach((todo) => {
    addTodo(todo);
  });
}
renderTodo(todos);

function addTodo(todo) {
  const li = document.createElement("li");
  li.className =
    "flex justify-between px-2 border border-gray-400 rounded-md py-1 mb-3";
  li.dataset.id = todo.id;
  li.innerHTML = `
        <div data-id="${todo.id}" class="flex gap-3 flex-1">
            <input type="checkbox" ${todo.isCompleted == true ? "checked" : ""} name="" id="">
            <p id="strike" class="text-gray-600">${todo.task}</p>
        </div>
        <div class="flex gap-3">
            <button class="text-amber-600 font-semibold text-md py-0.5 px-3 hover:bg-amber-200 transition-all duration-400 rounded-sm" data-id="${todo.id}" data-action="edit">Edit</button>
            <button class="text-red-600 font-semibold text-md py-0.5 px-3 hover:bg-red-200 transition-all duration-400 rounded-sm" data-id="${todo.id}  "data-action="delete">Delete</button>
        </div>
    `;
  todoList.append(li);
  taskCount.textContent = `Task : ${todos.length}`;
completeCount.textContent = `completed : ${todos.filter((todo) => todo.isCompleted.length)}`;
}

// event delegation
todoList.addEventListener("click", (e) => {
  e.stopPropagation();

  let li = e.target.closest("li");
  let btn = e.target.closest("button");
  let action = btn?.dataset.action;
  let id = li?.dataset?.id;
  let checkbox = e.target.closest('input[type="checkbox"]');
  let strike = e.target.parentElement.querySelector("#strike");

  if (action === "edit") {
    startEdit(id);
  }

  if (action === "delete") {
    deletTodo(e, id);
  }

  if (checkbox) {
    todos = todos.map((todo) => {
      if (todo.id === Number(id)) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      } 
      
      return todo;
    });
    // renderTodo();
  }

});

function deletTodo(e, id) {
  e.target.closest("li").remove();
  todos = todos.filter((todo) => {
    if (todo.id !== Number(id)) {
      return todos;
    }
    let tasks = todos.length - 1;
    taskCount.textContent = `Task : ${tasks}`;
  });
}

function startEdit(id) {
    editTodoId = id;
    let currentTodo = todos.find((todo) => {
      if (todo.id === Number(id)) {
        return todo;
      }
    });
    todoInput.value = currentTodo.task;
    formBtn.textContent = "Update";
    formBtn.style.backgroundColor = "#ebb734";
    cancelEdit.textContent = `cancel Edit`;
}

cancelEdit.addEventListener("click", (e) => {
    // let todoValue = todoInput.value;
    // let editTodo = {
    //     id: Date.now(),
    //     task: todoValue,
    //     isCompleted: false,
    // }
    // addTodo(editTodo);
    editTodoId = null;
    todoInput.value = "";
    formBtn.textContent = "Add";
    formBtn.style.backgroundColor = '#b134eb';
    cancelEdit.textContent = "";
})