import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-task',
  templateUrl: './add-edit-task.component.html',
  styleUrls: ['./add-edit-task.component.css']
})
export class AddEditTaskComponent implements OnInit {

  
  constructor(private service:SharedService) { }

  @Input() task:any;
  TaskId:string | undefined ;
  TaskName: string | undefined;

  ngOnInit(): void {
    this.TaskId=this.task.TaskId;
    this.TaskName=this.task.TaskName;
  }

  addTask(){
    var val = {TaskId:this.TaskId, TaskName:this.TaskName}
    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateTask(){
    var val = {TaskId:this.TaskId, TaskName:this.TaskName}
    this.service.updateTask(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
