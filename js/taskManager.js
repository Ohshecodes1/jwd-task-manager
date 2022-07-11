class TaskManager {
    constructor(currentId = 0){
      this.tasks = [];
      this.currentId = currentId;

    }
    addTask(name,description,assignedTo,dueDate,status){
        this.currentId++
        const task1 = {
            id: this.currentId,
            name: 'Take out the trash',
            description: 'Take out the trash to the front of the house',
            assignedTo: 'Nick',
            dueDate: '2020-09-20',
            status: 'TODO'
        };
        this.tasks.push(task1);
    }

}





