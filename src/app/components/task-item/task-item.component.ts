import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

import { Task } from 'src/app/Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  @Input() task: any;
  @Output() onItemClick : EventEmitter<Task> = new EventEmitter();
  color: string = "red";

  date: Date = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  onNavigate(task : Task) {
    this.onItemClick.emit(task);
  }

}
