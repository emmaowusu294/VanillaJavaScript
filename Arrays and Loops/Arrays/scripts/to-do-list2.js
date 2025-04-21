/* VERSION 1
const todoList = []; 


function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    // console.log(name);

    todoList.push(name);

    console.log(todoList);


    inputElement.value = '';
}
*/


/* VERSION 2

const todoList = ['make dinner', 'wash dishes']; 

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    // console.log(name);

    todoList.push(name);

    console.log(todoList);


    inputElement.value = '';


    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html = `<p>${todo}</p>`;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;
}

*/


/*
// VERSION 3 Making delete button work
const todoList = ['make dinner', 'wash dishes']; 

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    // console.log(name);

    todoList.push(name);

    console.log(todoList);


    inputElement.value = '';


    renderTodoList();
}

function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todo = todoList[i];
        const html =
            `<p>
                ${todo} 
                <button onclick = "
                todoList.splice(${i}, 1);
                renderTodoList();
                ">Delete</button>
            </p>`;
        todoListHTML += html;
    }

    console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}


//Allowing enter key press to add the todo list to the list
function addTodoKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}

*/


/*
// Version 4 Adding the time and date on the page
const todoList = [{
    name :'make dinner', 
    dueDateTime :'26/03/2025 09:37 pm'
}, {
    name :'wash dishes', 
    dueDateTime :'27/04/2025 09:37 pm'
}]; 

renderTodoList();

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
    let formattedDate = dateInputElement.value.replace("T", ""); // ✅ Fixed

    const dueDateTime = formattedDate;

    todoList.push({ name, dueDateTime });

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();
}


function renderTodoList() {
    let todoListHTML = '';

    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDateTime = todoObject.dueDateTime;

        const { name, dueDateTime } = todoObject;
        const html =
            `<p>
                ${name} ${dueDateTime} 
                <button onclick = "
                todoList.splice(${i}, 1);
                renderTodoList();
                ">Delete</button>
            </p>`;
        todoListHTML += html;
    }

    // console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;

}


//Allowing enter key press to add the todo list to the list
function addTodoKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}
    */


// VERSION 5 Adding css
const todoList = JSON.parse(localStorage.getItem('activeTodoList')) || []; 

renderTodoList();


document.querySelector('.js-add-todo-button')
    .addEventListener('click', () => {
        addTodo();
    });

function addTodo() {
    const inputElement = document.querySelector('.js-name-input');
    const name = inputElement.value;

    const dateInputElement = document.querySelector('.js-due-date-input');
 

    const dueDateTime = dateInputElement.value;

    todoList.push({ name, dueDateTime });

    inputElement.value = '';
    dateInputElement.value = '';

    renderTodoList();

    saveToStorage();
}

function deleteTodo(index) {
    todoList.splice(index, 1);
    renderTodoList();
    saveToStorage();
}


function renderTodoList() {
    let todoListHTML = '';

    todoList.forEach((todoObject, index) => {
        
        const { name, dueDateTime } = todoObject;
        const html =
            `<div>${name}</div>
             <div>${dueDateTime}</div>
             <button class = "delete-todo-button js-delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    });
/*
    for (let i = 0; i < todoList.length; i++) {
        const todoObject = todoList[i];
        // const name = todoObject.name;
        // const dueDateTime = todoObject.dueDateTime;

        const { name, dueDateTime } = todoObject;
        const html =
            `<div>${name}</div>
             <div>${dueDateTime}</div>
             <button onclick = "
            deleteTodo();
             "class = "delete-todo-button">Delete</button>
            `;
        todoListHTML += html;
    }
        */

    // console.log(todoListHTML);

    document.querySelector('.js-todo-list')
        .innerHTML = todoListHTML;


    document.querySelectorAll('.js-delete-todo-button')
        .forEach((deleteButton, index) => {
            deleteButton.addEventListener('click', () => {
                todoList.splice(index, 1);
                renderTodoList();
            }) 
        })

}
 

//Allowing enter key press to add the todo list to the list
function addTodoKeydown(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
}


function saveToStorage() {
    localStorage.setItem('activeTodoList', JSON.stringify(todoList));
}

// time -- 10:08