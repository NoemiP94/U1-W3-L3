const form = document.getElementById('tasklist')

form.addEventListener('submit', function (e) {
  e.preventDefault() //azzera comportamento di default del form

  //recupero il valore input
  const mainInput = document.getElementById('main-input')
  const newTaskText = mainInput.value

  //creare HTML da aggiungere
  const newTaskCard = document.createElement('div')
  newTaskCard.classList.add('task-element')
  newTaskCard.innerHTML = `<span on click='markAsDone(event)'>${newTaskText}</span>
    <button onclick='deleteTask(event)'>ELIMINA</button>`

  //appendere il nuovo div alla sezione 'tasks'
  const tasks = document.getElementById('tasks')
  tasks.appendChild(newTaskCard)
})

const markAsDone = function (e) {
  const clickedSpan = e.target
  clickedSpan.style.textDecoration = 'line-through'
}

const deleteTask = function (e) {
  e.target.parentElement.remove()
}
