import { Component, OnInit } from '@angular/core';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title: string = "Task Tracker";
  showAddTask : boolean = false;

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((data) => {
      this.showAddTask = data;
    })
   }

  ngOnInit(): void {
  }

  toggleAddTask() {
    this.uiService.toggleAddTask();
  }

}
