let form = document.getElementById('form');
let tasks = [];
showSavedTasks();

form.addEventListener('submit', (e) => {

    e.preventDefault();
    
    let userTaskInput = document.getElementById('userTaskInput').value;

    if(userTaskInput === '') {
        alert('Not a valid entry.')
        
    } else {
        //display items
        showTasks(userTaskInput)
        //save userTaskInput into local storage
        saveTasks(userTaskInput)
        document.getElementById('userTaskInput').value;
    }
     

});

//store tasks in local storage
 function saveTasks(task){
    //push task into task array
    tasks.push(task);
    localStorage.setItem('task', JSON.Stringify(tasks));
}

//Display items in DOM
function showTasks(a){
    //li tag for the element
    let addedTask = document.createElement('li');

    addedTask.innerHTML = `${a}<div class="delete-item">Delete Task</div>`;
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
        checkLocalStorage.forEach((taskInStorage) => {
            showTasks(taskInStorage)
        });
    };
};

//Worked around tasks not adding and showing
//Need logic to add functionality to delete task(s).