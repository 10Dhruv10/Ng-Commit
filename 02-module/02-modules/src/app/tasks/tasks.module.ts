import { NgModule } from "@angular/core";
import { TaskComponent } from "./task/task.component";
import { TasksComponent } from "./tasks.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "../shared/card/shared.module";
import { FormsModule } from "@angular/forms";


@NgModule({

    declarations : [
        TaskComponent,
        TasksComponent, 
        NewTaskComponent
    ],

    imports : [FormsModule, BrowserModule, SharedModule],

    exports: [TasksComponent]
   
})

export class TasksModule {}

//imports means its importing these modules into this module
//exports means any module that imports this TasksModule will import this exported thing "TasksComponent" as well