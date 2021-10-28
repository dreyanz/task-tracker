import { Component, OnInit } from '@angular/core';
import { TASK } from '../../mock-task';
import { Task } from '../../Task';
import { HttpService } from '../../services/http.service';
import { UiService } from '../../services/ui.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks : Task[] = [];
  text: string = "";
  showTaskForm : boolean = false;

  constructor(private httpService: HttpService, private uiService: UiService,
      private router: Router) { 
    this.uiService.onToggle().subscribe((data) => {
      console.log(data);
      this.showTaskForm = data.showAddTask;

    })
  }

  ngOnInit(): void {
    console.log("initializing task component");
    this.httpService.getTask().subscribe((data) => {
      this.tasks = data;
    });
    this.uiService.taskViewInitialized();
  }

  onAddTask(task : any) {
    this.httpService.addTask(task).subscribe((data) => {
      this.tasks.push(data);
    });
  }

  onNavigateToTaskDetails(task: Task){
    this.router.navigate(['task-details', {task:JSON.stringify(task)}]);
  }

}
