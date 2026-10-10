
const TodoList = [];

renderTodoList();

function renderTodoList() {
    let TodoListHTML = ''; 

    for(let i = 0; i< TodoList.length; i++) {
        const todoObject = TodoList[i];
        const {name, dueDate} = todoObject;
        const html = `<div>${name}</div> <div>${dueDate}</div> <button class="delete-todo-button" onclick="
            TodoList.splice(${i}, 1);
            renderTodoList();
        ">Delete</button>`;
        TodoListHTML += html;
    }

    const ShowTodoList = document.querySelector('.js-todo-list');

    console.log(TodoListHTML);
    ShowTodoList.innerHTML = TodoListHTML;
}

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