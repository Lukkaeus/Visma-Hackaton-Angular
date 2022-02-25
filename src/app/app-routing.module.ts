import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TasksViewComponent } from './tasks-view/tasks-view.component';


const routes: Routes = [
  {path:'task',component:TasksViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
