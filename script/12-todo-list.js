
const TodoList = [];

renderTodoList();

function renderTodoList() {
    let TodoListHTML = ''; 

    TodoList.forEach(function(todoObject, index) {
        const {name, dueDate} = todoObject;
        const html = `<div>${name}</div> <div>${dueDate}</div> <button class="delete-todo-button js-delete-button" 
        >Delete</button>`;
        TodoListHTML += html;
    });

    const ShowTodoList = document.querySelector('.js-todo-list');

    console.log(TodoListHTML);
    ShowTodoList.innerHTML = TodoListHTML;

    document.querySelectorAll('.js-delete-button').forEach((deleteButton, index) => {
        deleteButton.addEventListener('click', ()=>{
            TodoList.splice(index, 1);
            renderTodoList();
        })
    })
    
}

document.querySelector('.js-add-button').addEventListener('click', ()=>{
    AddTodoList();
})

function AddTodoList() { 
    const nameElement = document.querySelector('.js-input-todo');
    const dueDateElement = document.querySelector('.js-dueDate-todo');

    const ObjectInput = {
        name:nameElement.value,
        dueDate:dueDateElement.value
    }

    TodoList.push(ObjectInput);
    console.log(TodoList);
    
    nameElement.value = '';

    renderTodoList();
}