import { Component, OnInit } from '@angular/core';
import { TASK } from '../../mock-task';
import { Task } from '../../Task';
import { HttpService } from '../../services/http.service';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {

  tasks : Task[] = [];
  text: string = "";
  showTaskForm : boolean = false;

  constructor(private httpService: HttpService, private uiService: UiService) { 
    this.uiService.onToggle().subscribe((data) => {
      this.showTaskForm = data;
    })
  }

  ngOnInit(): void {
    this.httpService.getTask().subscribe((data) => {
      this.tasks = data;
    });
  }

  onAddTask(task : any) {
    this.httpService.addTask(task).subscribe((data) => {
      this.tasks.push(data);
    });
  }

}
