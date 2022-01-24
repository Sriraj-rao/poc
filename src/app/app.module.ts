import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { NotificationBoardComponent } from './notification-board/notification-board.component';
import { AddEditEmployeeComponent } from './modals/add-edit-employee/add-edit-employee.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LogicLoopComponent } from './logic-loop/logic-loop.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { AuthGuard } from './auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    TableComponent,
    NotificationBoardComponent,
    AddEditEmployeeComponent,
    LogicLoopComponent,
    LoginComponent,
    SignupComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
