console.log("hello world")

// create variable for button element
let button = document.getElementById('addTodo')
// link the button to the action of the function
button.onclick = addTodo

let textBox = document.getElementById('userInput')
let list = document.getElementById('list')
let completed = document.getElementById('completed')


function addTodo() {
    console.log("button clicked")
    // button.style.backgroundColor = 'red'
    // get new text from textbox
    let newTodoText = textBox.value
    //create new list item
    let newTodo = document.createElement('li')
    newTodo.innerHTML = newTodoText
    //put list item in list
    if (textBox.value = ' ' || textBox.value = '' ) {
        list.append(newTodo)
    }
    textBox.value = ''
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