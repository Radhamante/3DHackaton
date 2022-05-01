import {Component, OnInit} from '@angular/core';
import {AuthService} from "../services/authService";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  form: any = {
    username: null,
    email: null,
    password: null
  };
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';
  constructor(private router: Router, private authService: AuthService) { }
  ngOnInit(): void {
  }
  onSubmit(): void {
    this.authService.register(this.form.value).subscribe(
      () => {
        return this.router.navigate(['home']);
      },
      (error) => {
        error.log(error);
        return;
      }
    );
  }
}
