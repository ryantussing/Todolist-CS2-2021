console.log('There is no try, only do')

//create variables for page elements
let $button = document.getElementById('addTodo')
let $textBox = document.getElementById('userInput')
let $list = document.getElementById('list')
let $completed = document.getElementById('completed')
//add click event handler on button
$button.onclick = addTodo

//define the button click handler
function addTodo(event) {
    console.log("button was clicked")
    $button.style.backgroundColor = 'red'

    //get text from textBox
    let newTodoText = $textBox.value
    console.log(newTodoText)
    //create new list item
    let $newTodoItem = document.createElement('li')
    //use String template with backticks
    $newTodoItem.innerHTML = `<li>${newTodoText}<button onclick='taskDone(event)'>Done</button></li>`
    //put list item in list
    $list.append($newTodoItem)
}

function taskDone(event) {
    //event.target is the element that was clicked
    console.log(event.target)
    $completed.append(event.target)
}

//1. variable for heading element
let $head = document.querySelector('h1')
//2. set 'changeColor' function as click handler on heading
$head.onclick = changeColor
//3.a define 'changeColor' function
function changeColor() {
    //3.b. set color (text) of heading to red
    $head.style.color = 'red'
}