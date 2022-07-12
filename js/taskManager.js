
function createTaskHtml(name, description, assignedTo, dueDate, status) {
    const html = `
    <li class="list-group-item">
        <div class="d-flex w-100 mt-2 justify-content-between align-items-center">
            <h5>${name}</h5>
            <span class="badge ${status === 'TODO' ? 'badge-danger' : 'badge-success'}">${status}</span>
        </div>
        <div class="d-flex w-100 mb-3 justify-content-between">
            <small>Assigned To: ${assignedTo}</small>
            <small>Due: ${dueDate}</small>
        </div>
        <p>${description}</p>
        <button type="button" class="delete-button btn btn-danger">Delete this task</button>
        <button type="button" class="done-button btn btn-success ${status === 'TODO' ? 'visible' : 'invisible'}">Mark as done</button>
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
    addTask(name, description, assignedTo, dueDate) {
        this.currentId++
        const task = {
            id: this.currentId,
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
            const date = new Date(currentTask.dueDate);
            const formattedDate = (getDate.getMonth() + 1) + '/' + getDate.getDate() + '/' + getDate.getFullYear();

            var taskHtml = createTaskHtml(currentTask.name, currentTask.description, currentTask.assignedTo, formattedDate, currentTask.status);
            tasksHtmlList.push(taskHtml);

            var tasksHtml = tasksHtmlList.join('\n');
            var tasksList = document.querySelector('#tasksList');
            tasksList.innerHTML = tasksHtml;
        }
    }

}