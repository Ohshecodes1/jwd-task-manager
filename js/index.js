
var tasks = new TaskManager()
console.log(tasks);

window.addEventListener("load", () => {

  const form = document.querySelector(".form");
  const name = document.querySelector("#taskName").value;
  const assignedTo = document.querySelector("#taskAssign").value;
  const dueDate = document.querySelector("#taskDueDate").value;
  const description = document.querySelector("#taskDescription").value;

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    if (!name || !description || !assignedTo || !dueDate ) {
      alert("Please fill out all required fields")
    } else {
    


      tasks.addTask(name, description, assignedTo, dueDate);
    }

    tasks.render();

    form.reset();


    //end of submit event listener
  })


  //end of window load event listener
})