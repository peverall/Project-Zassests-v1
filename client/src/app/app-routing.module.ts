import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersListComponent } from './components/computers-list/computers-list.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component'; // <== NEWLY ADDED LINE
import { EditComputerComponent } from './components/edit-computer/edit-computer.component'; // <== NEWLY ADDED LINE

const routes: Routes = [
  { path: '', redirectTo: 'computers', pathMatch: 'full'},
  { path: 'computers', component: ComputersListComponent },
  { path: 'computers/new', component: AddComputerComponent }, // <== NEWLY ADDED LINE
  { path: 'computers/edit/:id', component: EditComputerComponent } // <== NEWLY ADDED LINE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
