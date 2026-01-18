import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() close = new EventEmitter<void>();

  onCancel(){
    this.close.emit();
  }

  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';

  @Input({required:true}) userId !: string;
  private tasksService = inject(TasksService)

  onSubmit(){
    this.tasksService.addTask(
      {
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
      },
      this.userId);
      
      this.close.emit();
  }
}
