const todoList =
  [{
    name: 'make dinner',
    dueDate: '2022-12-22'
  },
  {
    name: 'wash dishes',
    dueDate: '2022-12-22'
  }];

renderTodolist();

function renderTodolist() {


  let todoListHTML = '';
  todoList.forEach((todoObject, index) => {
    const name = todoObject.name;
    const dueDate = todoObject.dueDate;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div>
    <button onclick="
    todoList.splice(${index}, 1);
    renderTodolist();
    "
    class="delete-todo-button js-delete-todo-button">
    delete</button>
    `;
    //above one is just a string so to put it on webpage we write queryselector in
    //below, and also use All to select all
    todoListHTML += html;

  });

  //console.log(todoListHTML);
  document.querySelector('.js-todo-list')
    .innerHTML = todoListHTML;


  document.querySelectorAll('.js-delete-todo-button')
    .forEach((deleteButton, index) => {
      deleteButton.addEventListener('click', () => {
        console.log(index);//closure
        todoList.splice(index, 1);
        renderTodolist();
      });


    });



}

document.querySelector('.js-add-todo-button')
  .addEventListener('click', () => {
    addTodo();
  });

function addTodo() {
  const inputElement = document.querySelector('.js-name-input');
  const name = inputElement.value;

  const dateInputElement = document.querySelector('.js-due-date-input');
  const dueDate = dateInputElement.value;
  todoList.push({
    name: name,
    dueDate: dueDate
  });
  //console.log(todoList);
  inputElement.value = '';

  renderTodolist();
}