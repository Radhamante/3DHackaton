import {Component, OnInit} from '@angular/core';
import {User} from "../shared/entities/User";
import {UserService} from "../shared/services/userService";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../shared/services/authService";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  public user: User | undefined;
  public isSameUser = false;
  userForm: FormGroup;

  constructor(private userService: UserService, private authService: AuthService, private activatedRoute: ActivatedRoute) {

    this.userForm = new FormGroup({
      username: new FormControl(''),
      firstname: new FormControl(''),
      lastname: new FormControl(''),
      email: new FormControl(''),
    });
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(value => {
      const id = value['id'];
      this.userService.getUserById(id).subscribe(value1 => {
        this.user = value1;
        if (this.authService.loggedUser && this.authService.loggedUser.id === this.user.id) {
          this.isSameUser = true;
          console.log('here')
          this.userForm.setValue({
            username: this.user.username,
            firstname: this.user.firstname,
            lastname: this.user.lastname,
            email: this.user.email
          })
        }
      })
    });
  }


  onSubmit() {
    if (this.user){
      console.log("ici")
      const updatedUser: User = {
        id: this.user.id,
        username: this.userForm.get("username")?.value,
        password: " ",
        firstname: this.userForm.get("firstname")?.value,
        lastname: this.userForm.get("lastname")?.value,
        email: this.userForm.get("email")?.value
      };
      this.userService.updateUserById(this.user.id, updatedUser).subscribe(value => {
        this.user = value;
      });
    }

  }
}
