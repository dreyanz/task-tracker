import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TaskItemDetailsComponent } from './components/task-item-details/task-item-details.component';
import { TaskComponent } from './components/task/task.component';

const routes: Routes = [
  {path:'', component: TaskComponent},
  {path: 'task-details', component: TaskItemDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
