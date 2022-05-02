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
  loginForm: FormGroup;
  id: Subscription | undefined;

  constructor(
    private router: Router,
    private userService: AuthService,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.loginUser();
  }

  loginUser(): void {
    this.userService.login(this.loginForm.value).subscribe(
      () => {
        sessionStorage.setItem('isConnected', 'true');
        this.userService.emitAuthStatus(true);
        /*this.toastr.success(
          'You are successfully logged in',
          'Login successful!'
        );*/
        return this.router.navigate(['account']).then(() => {
          window.location.reload();
        });
      },
      (error) => {
        /*this.toastr.error(
          'Your username/password is wrong',
          'Login failed!'
        );*/
      }
    );
  }
}
