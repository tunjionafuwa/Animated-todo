/* Selectors */
const todoInput = document.querySelector('.todo-input')
const btnTodo = document.querySelector('.btn-todo')
const todoList = document.querySelector('.todo-list')

/* Event Listerners */
btnTodo.addEventListener('click', addTodo)
todoList.addEventListener('click', deleteCheck)

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
        todo.remove()
    }
    
}