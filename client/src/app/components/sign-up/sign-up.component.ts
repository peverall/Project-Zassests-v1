import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';


export function passwordsMatchValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password')?.value;
    const confirmPassword = control.get('confirmPassword')?.value;

    if (password && confirmPassword && password !== confirmPassword) {
      return {
        passwordsDoNotMatch: true
      }
    }

    return null;
  };
}




@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})

export class SignUpComponent {
  signUpForm = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', Validators.required),
    confirmPassword: new FormControl('', Validators.required)
  }, { validators: passwordsMatchValidator() })

  constructor(){ }

  public onSubmit(){
    /*   console.log(this.signupForm.value);
      createUserWithEmailAndPassword(
      this.auth,
      this.signupForm.value.email,
      this.signupForm.value.password).then((res:any) => {
        console.log(res);
      }).catch((err) => {
        console.log(err);
        alert(err.message);
      }) */
    }
  

  ngOnInit(): void{  }

  get name() {
    return this.signUpForm.get('name');
  }

  get email() {
    return this.signUpForm.get('email');
  }

  get password() {
    return this.signUpForm.get('password');
  }

  get confirmPassword() {
    return this.signUpForm.get('confirmPassword');
  }

  // submit(){

  // }


}
