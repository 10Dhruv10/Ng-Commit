import { Component, Input } from '@angular/core';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: false,
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({ required: true }) name !: string; 
  @Input({ required: true }) userId !: string;
  
  constructor(private tasksService: TasksService){}

  get SelectedUserTasks(){
    return this.tasksService.getUserTasks(this.userId);
  }
  
  isAddingTask = false;
  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCloseAddTask(){
    this.isAddingTask = false;
  }

}

