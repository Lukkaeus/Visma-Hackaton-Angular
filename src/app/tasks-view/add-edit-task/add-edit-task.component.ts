import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { ShowTaskComponent } from '../show-task/show-task.component';


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
  TaskDescription: string | undefined;
  DateOfCreation: string | undefined;
  DateOfExpiration: string | undefined;
  ExpectedDuration: string | undefined;

  TaskList: any = [];

  ngOnInit(): void {
    this.loadTaskList();
  }

  loadTaskList(){
    this.service.getAllTasksNames().subscribe((data:any)=>{
      this.TaskList = data;

      this.TaskId=this.task.TaskId;
      this.TaskName=this.task.TaskName;
      this.TaskDescription=this.task.TaskDescription;
      this.DateOfCreation=this.task.DateOfCreation;
      this.DateOfExpiration=this.task.DateOfExpiration;
      this.ExpectedDuration=this.task.ExpectedDuration;
    })
  }

  addTask(){
    var val = {TaskId:this.TaskId, 
                TaskName:this.TaskName,
                TaskDescription:this.TaskDescription,
                DateOfCreation:this.DateOfCreation,
                DateOfExpiration:this.DateOfExpiration,
                ExpectedDuration:this.ExpectedDuration}
    this.service.addTask(val).subscribe(res=>{
      alert(res.toString());
    })
  }

  updateTask(){
    var val = {TaskId:this.TaskId, 
      TaskName:this.TaskName,
      TaskDescription:this.TaskDescription,
      DateOfCreation:this.DateOfCreation,
      DateOfExpiration:this.DateOfExpiration,
      ExpectedDuration:this.ExpectedDuration}
    this.service.updateTask(val).subscribe(res=>{
      alert(res.toString());
    })
  }

}
