import {Component, OnInit} from '@angular/core';
import {User} from "../shared/entities/User";
import {UserService} from "../shared/services/userService";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../shared/services/authService";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public user: any;
  public isSameUser = false;
  userForm: FormGroup;

  constructor(private userService: UserService, private authService: AuthService, private activatedRoute: ActivatedRoute) {
    this.user = this.activatedRoute.snapshot.data['userResolver'];

    this.userForm = new FormGroup({
      username: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
    });

    this.userForm.get("username")?.setValidators([Validators.required, Validators.pattern(/^\S*$/)]);
    this.userForm.get("firstname")?.setValidators([Validators.required, Validators.pattern(/^\S*$/)]);
    this.userForm.get("lastname")?.setValidators([Validators.required, Validators.pattern(/^\S*$/)]);
    this.userForm.get("email")?.setValidators([Validators.required, Validators.pattern(/^\S*$/)]);
    if (this.authService.loggedUser && this.authService.loggedUser.id === this.user.id) {
      this.isSameUser = true;
      this.userForm.setValue({
        username: this.user.username,
        firstname: this.user.firstname,
        lastname: this.user.lastname,
        email: this.user.email
      })
    }
  }
  ngOnInit() {
  }

  onSubmit() {
    if (this.user) {
      const updatedUser: User = {
        id: this.user.id,
        username: this.userForm.get("username")?.value,
        password: "",
        firstname: this.userForm.get("firstname")?.value,
        lastname: this.userForm.get("lastname")?.value,
        email: this.userForm.get("email")?.value
      };
      this.userService.updateUserById(this.user.id, updatedUser).subscribe(value => {
        this.user = value;
      });
    }

  }

  enableButton() {
            // same data
    return (this.userForm.get("email")?.value !== this.user.email || this.userForm.get("firstname")?.value !== this.user.firstname
    || this.userForm.get("lastname")?.value !== this.user.lastname || this.userForm.get("username")?.value !== this.user.username)
    //empty data
    && (this.userForm.get("email")?.value !== "" && this.userForm.get("username")?.value !== "" &&
      this.userForm.get("firstname")?.value !== "" && this.userForm.get("lastname")?.value !== "");
  }
}
