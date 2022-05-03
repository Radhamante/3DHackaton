import { Component } from '@angular/core';
import {FormControl} from "@angular/forms";
import {LoginComponent} from "./login/login.component";
import {SigninComponent} from "./signin/signin.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Codeup';
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];

  constructor(public dialog: MatDialog) {
  }
  openSignin() {
    const dialogRef = this.dialog.open(SigninComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }

  openLogin() {
    const dialogRef = this.dialog.open(LoginComponent);
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}
