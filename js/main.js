//Define UI Vars

const form = document.querySelector('#task-form');

// Add task events

form.addEventListener('submit', function f(e) {
  const taskInput = document.querySelector('#task');
  if (taskInput.value === '') {
    alert('Tasks must have a name')
  } else {
    // Add task to list

    const li = document.createElement('li');

    // Add class to list item

    li.className = 'collection-item';

    li.innerHTML = `<label><input type="checkbox" id="check" /><span>${taskInput.value}</span></label>`;
    // Append task name to element


    const link = document.createElement('a');

    link.className = 'delete-item secondary-content';

    link.innerHTML = '<i class="material-icons">cancel</i>';

    li.appendChild(link);

    //Append the task to list

    const taskList = document.querySelector('.collection');

    taskList.appendChild(li);

    // Clear input
    taskInput.value = '';
  }

  e.preventDefault()
});

document.addEventListener('click', function f() {
  const count = document.getElementById("list").childElementCount;
  document.getElementById("taskTotal").innerText = `Total Tasks: ${count}`;
  const done = document.querySelectorAll('input[type="checkbox"]:checked').length;
  document.getElementById("taskDone").innerHTML = `Tasks Done: ${done}`;

});

// Remove tasks

const taskList = document.querySelector('.collection');

taskList.addEventListener('click', function (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
    }
  }

});

// Filter tasks

const filter = document.querySelector('#filter');

filter.addEventListener('keyup', function (e) {
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function (task) {
    const item = task.firstChild.textContent;

    if (item.toLowerCase().indexOf(text) != -1) {
      task.style.display = 'block';
    }
    else {
      task.style.display = 'none';
    }
  })
});





