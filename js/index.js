
var tasks = new TaskManager()

console.log(tasks);

window.addEventListener("load",() =>{

    
    const form = document.querySelector(".form");
    const taskName = document.querySelector("#taskName"); 
    const taskStatus = document.querySelector("#taskStatus"); 
    const taskAssign = document.querySelector("#taskAssign"); 
    const taskDueDate = document.querySelector("#taskDueDate"); 
    const taskDescription = document.querySelector("#taskDescription"); 
    
    form.addEventListener("submit", (e) => {
      e.preventDefault();
    
    /*const enteredName = document.createElement("input");
    enteredName.classList.add(taskName);
    enteredName.type = "text";
    enteredName.value = taskName.input;
    enteredName.setattribute = "readonly","readonly";

    // append
    form.appenchild("enteredName");
    */
   if(taskName == null || taskName == null|| taskStatus == null || taskAssign == null || taskDueDate == null || taskDescription == null) {
    alert("Please fill out all required fields")
   } else{
    tasks.addTask();
   }
    
    
    
    
    
    form.reset();

    
      //end of submit event listener
    })


    //end of window load event listener
})