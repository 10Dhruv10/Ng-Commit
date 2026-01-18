import { Injectable, signal, inject } from "@angular/core";
import { Task, TaskStatus } from "./task.model";
import { LoggingService } from "../logging.service";

@Injectable({ providedIn: 'root' })
export class TasksService{

    private tasks = signal<Task[]>( [] );
    // ( [] ) means [] is initital value, 
    // Task[] means it will be a list of Task object   

    addTask(taskData: {title: string, description: string}){
        const newTask: Task = {
            title: taskData.title,
            description: taskData.description,
            id: Math.random().toString(),
            status: 'OPEN'
        };

        this.tasks.update((oldTasks) => [...oldTasks, newTask]);
        //changes oldTasks to oldTasks + newTask, oldTask is nothing but this.tasks() entire list
    }

    allTasks(){
        return this.tasks.asReadonly();
    }

    updateTaskSerice(taskId: string, newStatus: TaskStatus){
        this.tasks.update((oldTasks) => 
            oldTasks.map((task) => task.id === taskId ? { ...task, status: newStatus} : task));
        //this iterate through every task and check if its id matches with taskId, changes its object to { other task values + newStatus }
        //we dont have any way to directly go through every task in update() of signals() so we resort to using .map() and have to pass entire tasks as oldTasks
    }


    private loggingService = inject(LoggingService);

}

