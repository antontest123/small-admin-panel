import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  form: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  hide = true;

  constructor(
    private router: Router,
  ) { }

  loginWithForm() {
    if(this.form.valid){
      this.router.navigate(['main']);
      localStorage.setItem('token', '12345')
    }
  }

}
