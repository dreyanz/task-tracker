import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './components/button/button.component';
import { TaskComponent } from './components/task/task.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { HeaderComponent } from './components/header/header.component';
import { HighlightDirective } from './highlight.directive';
import { TaskItemDetailsComponent } from './components/task-item-details/task-item-details.component';


@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    TaskComponent,
    TaskItemComponent,
    AddTaskComponent,
    HeaderComponent,
    HighlightDirective,
    TaskItemDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
