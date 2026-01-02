import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";
import { BrowserModule } from "@angular/platform-browser";
import { SharedModule } from "./shared/card/shared.module";
import { TasksModule } from "./tasks/tasks.module";

@NgModule({

    declarations: [
        AppComponent,
        HeaderComponent,
        UserComponent,
    ],

    bootstrap: [AppComponent],   //load this 1st when application starts
    imports: [BrowserModule, SharedModule, TasksModule]

})

export class AppModule {}


// Turned All standlaone components to False first,
// imported all Modules here, declared components here instead of importing components in components.ts
// changed main.ts to be module oriented and not component oriented

//Main Use: Lazy Loading, components dont support lazy-loading