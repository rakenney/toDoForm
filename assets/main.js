var form = document.getElementById('toDoForm')
var toDoTextField = document.getElementById('toDoTextField')
var toDos = []
var toDoContainer = document.getElementById('toDos')

form.addEventListener('submit', function(e) {
    e.preventDefault()
    var toDo = toDoTextField.value 
    toDos.push(toDo)
    console.log(toDos)
    renderToDos()
})

function renderToDos() {
    toDoContainer.innerHTML = toDos.map(renderToDo).join('')

}

function renderToDo(toDo){
    return `
        <p>${toDo}</p>
    `
}