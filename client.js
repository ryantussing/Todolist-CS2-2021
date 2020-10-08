console.log("hello world")

// create variable for button element
let button = document.getElementById('addTodo')
let textBox = document.getElementById('userInput')
let list = document.getElementById('list')
let completed = document.getElementById('completed')
// link the button to the action of the function
button.onclick = addTodo

function addTodo() {
    console.log("button clicked")
    // button.style.backgroundColor = 'red'
    // get new text from textbox
    let newTodoText = textBox.value
    if (newTodoText != ' ' && newTodoText != '') {
        //create new list item
        let newTodo = document.createElement('li')
        newTodo.innerHTML = `${newTodoText} <button id='taskButton' onclick='markAsDone(event)'>Done</button> 
        <button id='deleteButton' onclick='deleteTodo(event)'>Delete</button>`
        //put list item in list
        list.append(newTodo)
        textBox.value = ''
    }
}

// variable for h1
let h1 = document.getElementById('h1')
// connect changeColor function as click handler
h1.onclick = changeColor
// define changecolor function
function changeColor() {
    // set color of text to yellow
    h1.style.color = 'yellow'
}

function markAsDone (event) {
    console.log('todo done')
    let todo = event.target.parentElement
    todo.style.color = 'darkgrey'
    todo.innerHTML = `<button id='deleteButton' onclick='deleteTodo(event)'>Delete</button>`
    completed.append(todo)
    let doneButton = event.target
    doneButton.remove()

}

function deleteTodo(event) {
    console.log('hello')
    let deleteButton = event.target.parentElement
    deleteButton.remove()
}