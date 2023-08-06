import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComputersListComponent } from './components/computers-list/computers-list.component';
import { ComputerFormComponent } from './components/computer-form/computer-form.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { AddComputerComponent } from './components/add-computer/add-computer.component';
import { EditComputerComponent } from './components/edit-computer/edit-computer.component'; // <== NEWLY ADDED LINE

@NgModule({
  declarations: [
    AppComponent,
    ComputersListComponent,
    ComputerFormComponent,
    AddComputerComponent,
    EditComputerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule // <== NEWLY ADDED LINE
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
