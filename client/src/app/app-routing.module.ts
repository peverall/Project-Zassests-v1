import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComputersListComponent } from './components/computers-list/computers-list.component';
import { AddComputerComponent } from './components/add-computer/add-computer.component';// <== NEWLY ADDED LINE
import { EditComputerComponent } from './components/edit-computer/edit-computer.component'; // <== NEWLY ADDED LINE
import { HomeComponent } from './components/home/home.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { LandingComponent } from './components/landing/landing.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'computers', pathMatch: 'full'},
  //{ path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '', redirectTo: 'landing', pathMatch: 'full' },
  { path: 'landing', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LogInComponent },
  { path: 'signup', component: SignUpComponent },
  { path: 'computers', component: ComputersListComponent },
  { path: 'computers/new', component: AddComputerComponent }, // <== NEWLY ADDED LINE
  { path: 'computers/edit/:id', component: EditComputerComponent } // <== NEWLY ADDED LINE
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
