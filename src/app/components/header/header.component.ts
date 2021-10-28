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
  showRemoveTask: boolean = false;
  btnLabelText : string = "Add";

  constructor(private uiService: UiService) {
    this.uiService.onToggle().subscribe((data) => {
      this.showAddTask = data;
      this.btnLabelDisplay();
    });
    this.uiService.onUserInTaskDetails().subscribe((data)=>{
      this.showRemoveTask = data;
      this.btnLabelDisplay();
    });
    this.uiService.onTaskDetaislDestroyed().subscribe(() => {
      this.showRemoveTask = false;
      this.btnLabelDisplay();
    });
    this.uiService.onTaskViewInitialized().subscribe(() => {
      this.showRemoveTask = false;
      this.showAddTask = false;
      console.log("onTaskViewInitialized");
      this.btnLabelDisplay();
    });
   }

  ngOnInit(): void {
  }

  onHeaderBtnClick() {
    this.uiService.toggleHeaderBtn(this.btnLabelText);
  }

  btnLabelDisplay() {
    if(this.showRemoveTask) {
      this.btnLabelText = "Remove";
    }else {
      if(this.showAddTask) {
        this.btnLabelText = "Close";
      }else {
        this.btnLabelText = "Add";
      }
    }
  }

}
