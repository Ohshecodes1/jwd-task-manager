function createTaskHtml(id, name, description, assignedTo, dueDate, status) {
    const html = `
    <li class="list-group-item" data-task-id="${id}">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <button type="button" class="delete-btn btn btn-danger">Delete this task</button>
        <button type="button" class="done-btn btn btn-success ${status === 'TODO' ? 'visible' : 'invisible'}">Mark as done</button>
    </li>
`;

    return html;
}

// const taskHtml = createTaskHtml('Take out the trash', 'Take out the trash to the front of the house', 'Nick', '2020-09-20', 'TODO');
// console.log(taskHtml);

class TaskManager {
    constructor(currentId = 0) {
        this.tasks = [];
        this.currentId = currentId;

    }
    addTask(id = 0, name, description, assignedTo, dueDate) {
        const task = {
            id: this.currentId++,
            name: name,
            description: description,
            assignedTo: assignedTo,
            dueDate: dueDate,
            status: 'TODO'
        };
        this.tasks.push(task);
    }

    render() {
        var tasksHtmlList = [];

        for (let i = 0; i < this.tasks.length; i++) {
            var currentTask = this.tasks[i];
            const getDate = new Date(currentTask.dueDate);
            const formattedDate = (getDate.getMonth() + 1) + '/' + getDate.getDate() + '/' + getDate.getFullYear();

            var taskHtml = createTaskHtml(currentTask.id, currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
            tasksHtmlList.push(taskHtml);

            var tasksHtml = tasksHtmlList.join('\n');
            var tasksList = document.querySelector('#tasksList');
            tasksList.innerHTML = tasksHtml;
        }
    }

    // Task 7, Step 4
    getTaskById(taskId) {
        let foundTask = taskId;

        for (let i = 0; i < this.tasks.length; i++) {
            var tasks = this.tasks[i];

            if (tasks.id === foundTask) {
                return tasks
            }
        }


    }
    
    //task 8 step 1:

    //adding save method
    save() {
        //we will save two keys (tasks and cuurentId) with their value
        var tasksJson = JSON.stringify(this.tasks);
        localStorage.setItem('tasks', tasksJson);
        var currentId = String(this.currentId);
        localStorage.setItem('currentId', currentId);
        //now go to index.js and call save()
    }
   
   //task 8 Step 2:

   //adding a load method so it will stay in the page even after refresh
   load() {
    if (localStorage.getItem('tasks')) {
        const tasksJson = localStorage.getItem('tasks');
        //converting taskJson string to array with JSON.parse() and storing in this.tasks
        this.tasks = JSON.parse(tasksJson);
    }
    //checking if the 'currentId' key is also stored, if so then load it 
    if (localStorage.getItem('currentId')) {
        const currentId = localStorage.getItem('currentId');
        this.currentId = Number(currentId);
    }
  }


}