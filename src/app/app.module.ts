import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksViewComponent } from './tasks-view/tasks-view.component';
import { ShowTaskComponent } from './tasks-view/show-task/show-task.component';
import { AddEditTaskComponent } from './tasks-view/add-edit-task/add-edit-task.component';
import { SharedService  } from './shared.service';

import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    TasksViewComponent,
    ShowTaskComponent,
    AddEditTaskComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule 
  ],
  exports: [AddEditTaskComponent],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
