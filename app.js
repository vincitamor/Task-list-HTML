let form = document.getElementById('form');
let tasks = [];
showSavedTasks();

form.addEventListener('add-task', function(e) {
    e.defaultPrevented();
    let userTaskInput = document.getElementById('user-task-input').value;

    if (userTaskInput === ""){
       alert("Enter a valid task.");
    } else {
    //Displays tasks
    showTasks(userTaskInput);
    //Save task to local storage
    saveTasks(userTaskInput);
    document.getElementById('user-task-input').value = '';
    }
});

//function to store items in local storage
 function saveTasks(task){
    tasks.push(task);
    localStorage.setItem('task', JSON.stringify(tasks));
}

//Display items in DOM
function showTasks(userTaskInput){
    //creates an li tag for the element
    let addedTask = document.createElement('li');

    addedTask.innerHTML = `${userTaskInput} <div class="delete-item">Delete Task</div>`;
    //Display task
    let taskList = document.querySelector("ul");
    taskList.appendChild(addedTask);
}

function showSavedTasks(){
    let savedTasks = localStorage.getItem('task');
    
    if (savedTasks === null){
        tasks = [];
    } else {
        let checkLocalStorage = JSON.parse(savedTasks);
        checkLocalStorage.forEach(function(taskInStorage){
            showTasks(taskInStorage)
        });
    };
};

//Need logic to fix no task saving and add functionality to delete task(s).