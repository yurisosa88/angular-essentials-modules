import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { TasksComponent } from "./tasks.component";
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { FormsModule } from "@angular/forms";
import { SharedModule } from "../shared/Shared.module";
import { CommonModule } from "@angular/common";

@NgModule({
    declarations: [
        TasksComponent,
        TaskComponent,
        NewTaskComponent],
        imports: [CommonModule,FormsModule,SharedModule],
    exports: [TasksComponent]
})
export class TaskModule {}