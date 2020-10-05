console.log('There is no try, only do')

//add click event handler on button
let $button = document.getElementById('addTodo')
let $textBox = document.getElementById('userInput')
let $list = document.getElementById('list')
$button.onclick = addTodo

//define the button click handler
function addTodo(event) {
    //console.log("button was clicked")
    //$button.style.backgroundColor = 'red'

    //get text from textBox
    let newTodoText = $textBox.value
    console.log(newTodoText)
    //create new list item
    let $newTodoItem = document.createElement('li')
    $newTodoItem.innerHTML = newTodoText
    //put list item in list
    $list.append($newTodoItem)
}