/* Selectors */
const todoInput = document.querySelector('.todo-input')
const btnTodo = document.querySelector('.btn-todo')
const todoList = document.querySelector('.todo-list')
const filterOption = document.querySelector('.filter-todo')

/* Event Listerners */
document.addEventListener('DOMContentLoaded', getTodos)
btnTodo.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)
filterOption.addEventListener('click', filterTodo)

/* Functions */
function addTodo(e){
    // Prevent form from submitting
    e.preventDefault()


    // Create TODO Div
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')

    // Create todo li-item
    const newTodo = document.createElement('li')
    newTodo.classList.add('todo-item')
    newTodo.innerText = todoInput.value
    todoDiv.appendChild(newTodo)

    saveLocalTodos(todoInput.value)

    // Check button
    const btnComplete = document.createElement('button')
    btnComplete.classList.add('btn-complete')

    const i = document.createElement('i')
    i.classList.add('fas', 'fa-check')
    i.classList.add()
    btnComplete.appendChild(i)
    // btnComplete.innerHTML = '<i class="fas fa-check"></i>'

    todoDiv.appendChild(btnComplete)

    // Check button
    const btnTrash =  document.createElement('button')
    btnTrash.classList.add('btn-trash')
    btnTrash.innerHTML = '<i class="fas fa-trash"></i>'
    todoDiv.appendChild(btnTrash)

    // Append todo
    todoList.appendChild(todoDiv)
    todoInput.value = ""
}


function deleteCheck(e){
    const item = e.target

    if (item.classList[0] === 'btn-trash'){
        const todo = item.parentElement
        todo.classList.add('fall')
        removeLocalTodos(todo)
        todo.addEventListener('transitionend', function(){
            todo.remove()
        })
    }

    if (item.classList[0] === 'btn-complete'){
        const todo = item.parentElement
        liChild = todo.children[0]
        liChild.classList.toggle('completed')
    }
    
}


function filterTodo(e){
    const todos = todoList.childNodes
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = "flex"
                break;
            case 'completed':
                if (todo.children[0].classList.contains("completed")){
                    todo.style.display = 'flex'
                    console.log(todo)
                } else {
                    todo.style.display = "none"
                }
                break;
            case 'in-progress':
                if (!todo.children[0].classList.contains("completed")){
                    todo.style.display = 'flex'
                } else {
                    todo.style.display = "none"
                }
                break;
        }
    })
}


const saveLocalTodos = (todo) =>{
    let todos

    if (localStorage.getItem('todos') === null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos))
}

function getTodos(){
    let todos

    if (localStorage.getItem('todos') === null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    todos.forEach(function(todo){
        const todoDiv = document.createElement('div')
        todoDiv.classList.add('todo')

        // Create todo li-item
        const newTodo = document.createElement('li')
        newTodo.classList.add('todo-item')
        newTodo.innerText = todo
        todoDiv.appendChild(newTodo)

        // Check button
        const btnComplete = document.createElement('button')
        btnComplete.classList.add('btn-complete')

        const i = document.createElement('i')
        i.classList.add('fas', 'fa-check')
        i.classList.add()
        btnComplete.appendChild(i)
        // btnComplete.innerHTML = '<i class="fas fa-check"></i>'

        todoDiv.appendChild(btnComplete)

        // Check button
        const btnTrash =  document.createElement('button')
        btnTrash.classList.add('btn-trash')
        btnTrash.innerHTML = '<i class="fas fa-trash"></i>'
        todoDiv.appendChild(btnTrash)

        // Append todo
        todoList.appendChild(todoDiv)

    })
}


const removeLocalTodos = (todo) =>{
    let todos

    if (localStorage.getItem('todos') === null){
        todos = []
    } else {
        todos = JSON.parse(localStorage.getItem('todos'))
    }

    const todoIndex = todo.children[0].innerText
    todos.splice(todos.indexOf(todoIndex), 1)
    localStorage.setItem('todos', JSON.stringify(todos))
}