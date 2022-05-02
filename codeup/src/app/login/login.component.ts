import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";
import {AuthService} from "../shared/services/authService";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  id: Subscription | undefined;

  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  form: any = {
    username: null,
    email: null,
    password: null
  };

  constructor(
    private router: Router,
    private authService: AuthService,
  ) {

  }
  ngOnInit(): void {
  }

  onSubmit(): void {
    this.authService.login(this.form.value).subscribe(
      () => {
        sessionStorage.setItem('isConnected', 'true');
        this.authService.emitAuthStatus(true);
        return this.router.navigate(['account']).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        console.log('error when login')
      }
    );
  }
}
