import { Component,  Input, output } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from './task/task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [ TaskComponent, NewTaskComponent ],
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({ required: true }) name !: string;  // '?:' means "TS, i'm aware name can be undefined also"

  @Input({ required: true }) userId !: string;
  
  //dependency injection
  constructor(private tasksService: TasksService){

  }

  get SelectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }
  

  onCompleteTask(id: string){
  }
  

  isAddingTask = false;
  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}

/*
Why we use constructor with dependency injection:

If I want to use the same service in multiple components (for example,
a TaskService that stores a task list), without DI I would have to
initialize it manually using `new TaskService()`.

When I do that in each component A and B, I need to create separate instance 
of the service for each component.

This means:
- Component A has its own TaskService instance
- Component B has its own different TaskService instance

So, when I add a task from Component B, the new task will update ONLY the
instance inside B, not the one used by A.


Using constructor-based dependency injection:

constructor(private taskService: TaskService) {}

Angular creates ONE shared instance (singleton) of TaskService and injects
the SAME instance into every component that needs it.

Therefore, adding a task in any component updates the same shared service.
*/
