var tasks = new TaskManager()
console.log(tasks);
//task8 step 2 calling load()
tasks.load();
tasks.render();


window.addEventListener("load", () => {

  var form = document.querySelector(".form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    var name = document.querySelector("#taskName").value;
    var assignedTo = document.querySelector("#taskAssign").value;
    var dueDate = document.querySelector("#taskDueDate").value;
    var description = document.querySelector("#taskDescription").value;

    if (!name || !description || !assignedTo || !dueDate) {
      alert("Please fill out all required fields");
    } else {
      tasks.addTask(tasks.id, name, description, assignedTo, dueDate);
      tasks.render();
      form.reset();
      //after adding save()method in taskmanager.js we gonna call it below
      tasks.save()
      //now it is stored in the local browser but will go away with refresh from your page,however, will still be stored in localstorage.
    }
    //end of submit event listener
  })


  //end of window load event listener
})

// Task 7: Step 2
var tasksList = document.querySelector('#tasksList');

tasksList.addEventListener('click', (e) => {
  if (e.target.classList.contains('done-btn')) {
    const parentTask = e.target.parentElement;
    // console.log(parentTask);

    let taskId = Number(parentTask.dataset.taskId)
    let task = tasks.getTaskById(taskId);
    task.status = 'DONE';
    tasks.render();
  }



  if (e.target.classList.contains('delete-btn')) {
    const parentTask = e.target.parentElement;
    const taskId = Number(parentTask.dataset.taskId);
    tasks.deleteTask(taskId);
    tasks.save();
    tasks.render();
  }


})

