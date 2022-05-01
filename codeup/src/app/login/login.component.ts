import { Component, OnInit } from '@angular/core';
import {AuthService} from "../services/authService";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {Subscription} from "rxjs";

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
    private authService: AuthService,
  ) {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });
  }
  ngOnInit(): void {
  }

  loginUser(): void {
    this.authService.login(this.loginForm.value).subscribe(
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
