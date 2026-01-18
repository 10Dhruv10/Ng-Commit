import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task.model";

@Injectable({providedIn: "root"})

export class TasksService{
    private tasks = [
        {
            id: 't1',
            userId: 'u1',
            title: 'Master Angular',
            summary:
            'Learn all the basic and advanced features of Angular & how to apply them.',
            dueDate: '2025-12-31',
        },
        {
            id: 't2',
            userId: 'u3',
            title: 'Build first prototype',
            summary: 'Build a first prototype of the online shop website',
            dueDate: '2024-05-31',
        },
        {
            id: 't3',
            userId: 'u3',
            title: 'Prepare issue template',
            summary:
            'Prepare and describe an issue template which will help with project management',
            dueDate: '2024-06-15',
        },
    ]

    //Issue: If i reload website the completed tasks are back
    //Solution: Store tasks in localstorage, reflect added/removed task in storage, for every new session retrieve localstorage tasks using constructor()

    //I added tasks under a tasks name in local storage of my website/chrome?
    private saveTasks(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
    
    // Now i am trying to look for that string tasks in storage and convert it into JSON form for my original 
    // private tasks JSON, whenever TaskService is initialized
    constructor(){

        const alltasks = localStorage.getItem('tasks');

        if (alltasks){
            this.tasks = JSON.parse(alltasks);
        }          

    }

    

    getUserTasks(userId: string){
        return this.tasks.filter((task) => task.userId === userId);
    }

    addTask(taskData: NewTaskData, userId: string){
        this.tasks.unshift(
        {
            id: new Date().getTime().toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.date
        }
        )

        this.saveTasks();
    }

    removeTask(id: string){
        this.tasks = this.tasks.filter((task) => task.id != id)
        
        this.saveTasks();
    }

   


    
}
