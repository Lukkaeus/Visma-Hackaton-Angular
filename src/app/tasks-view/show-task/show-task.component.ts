import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-show-task',
  templateUrl: './show-task.component.html',
  styleUrls: ['./show-task.component.css']
})
export class ShowTaskComponent implements OnInit {

  constructor(private service: SharedService) { }

  TaskList: any= [];

  ModalTitle:string | undefined;
  ActiveAddEditTaskComp: boolean = false;
  task:any;
  isModalVisible: boolean = false;

  ngOnInit(): void {
    this.refreshTaskList(); 
  }

  addClick(){
    this.task={
      TaskId:0,
      TaskName:""
    }
    this.ModalTitle="Add Task";
    this.ActiveAddEditTaskComp=true;
    this.isModalVisible= true;
  }

  editClick(item: any){
    this.task=item;
    this.ModalTitle="Edit Task";
    this.ActiveAddEditTaskComp = true;
    this.isModalVisible=false;
  }

  closeClick(){
    this.ActiveAddEditTaskComp=false;
    this.isModalVisible=false;
    this.refreshTaskList();
  }


  refreshTaskList(){
    this.service.getTaskList().subscribe(data=>{
      this.TaskList = data;
    })
  }

}
