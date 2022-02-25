import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIUrl="http://localhost:5000/api";
  

  constructor(private http:HttpClient) { }

  getTaskList(): Observable<any[]>{
    return this.http.get<any>(this.APIUrl+'/task')
  }

  addTask(val: any){
    return this.http.post(this.APIUrl+'/Task',val)
  }

  updateTask(val: any){
    return this.http.put(this.APIUrl+'/Task',val)
  }

  deleteTask(val: any){
    return this.http.delete(this.APIUrl+'/Task',val)
  }

  getAllTasksNames(): Observable <any[]>{
    return this.http.get<any[]>(this.APIUrl+'/Task/GetAllTaskNames')
  }
}
