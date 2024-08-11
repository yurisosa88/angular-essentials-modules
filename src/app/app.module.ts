import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { TaskModule } from "./tasks/task.module";
import { SharedModule } from "./shared/Shared.module";

import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { UserComponent } from "./user/user.component";


 @NgModule({
    declarations: [AppComponent,
        HeaderComponent,
        UserComponent],
    imports: [BrowserModule,TaskModule,SharedModule],
    bootstrap: [AppComponent]
 })
export class AppModule {}