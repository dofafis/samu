import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginModel } from './loginModel';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loginModel: LoginModel;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {
    this.createLoginForm();
  }

  ngOnInit() {
  }

  createLoginForm() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.minLength(5)],
      password: ['', Validators.minLength(6)]
    });
  }

  validField(fieldName : string) {
    return this.loginForm.controls[fieldName].valid;
  }

  submitLogin() {
    if(this.loginForm.valid) {
      this.loginModel = this.loginForm.getRawValue() as LoginModel;
      
      // Chamar serviço para fazer requisição para o backend

      this.router.navigate(['home']);
    }
  }
  
}
