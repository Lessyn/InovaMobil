import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { LoginModels } from 'src/app/models/loginModels';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder, private router: Router) { }

  ngOnInit(): void {

    this.loginForm = this.formBuilder.group(
      {
        usuario: ['', [Validators.required]],
        senha: ['', [Validators.required]]
      }
    );
  }

  userLogin() {
    var dadosLogin = this.loginForm.getRawValue() as LoginModels;
  }

}
