
var tasks = new TaskManager()
console.log(tasks);

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
      tasks.addTask(name, description, assignedTo, dueDate);
      tasks.render();
      form.reset();
    }




    //end of submit event listener
  })


  //end of window load event listener
})