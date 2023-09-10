import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';
 

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required)
  })

  constructor(private authService: AuthenticationService, private router: Router){

  }

  ngOnInit(): void { }
  
  get email() {
    return this.loginForm.get('email');
  }

  get password() {
    return this.loginForm.get('password');
  }

  
  onSubmit(){
    const { email, password } = this.loginForm.value;

    if (!this.loginForm.valid || !email || !password){
      return;
    }


    this.authService.login(email, password).subscribe(() => {

    })



  }
 

}
