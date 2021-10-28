import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpService } from 'src/app/services/http.service';
import { UiService } from 'src/app/services/ui.service';
import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item-details',
  templateUrl: './task-item-details.component.html',
  styleUrls: ['./task-item-details.component.css']
})
export class TaskItemDetailsComponent implements OnInit {

  task: Task = {
    text: "",
    day: "",
    reminder: false
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router,
    private uiService: UiService, private httpService: HttpService) { }

  ngOnInit(): void {
    
    let task = this.activatedRoute.snapshot.paramMap.get("task");
    console.log(task);
    let temp = JSON.parse(task+"");
    this.task = temp;

    this.uiService.userIsInTaskDetails();

    this.uiService.onToggle().subscribe((data) => {
      console.log(data);
      this.httpService.deleteTask(this.task).subscribe((data)=> {
        this.router.navigate(['']);
      });
    })
  
  }

  ngOnDestroy() : void {
    console.log("destroying task item details");
  }

}
