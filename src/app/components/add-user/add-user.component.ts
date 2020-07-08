import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidationErrors, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent {

  constructor(private userService: UserService, private router: Router) {
  }

  addUser(u: User) {
    this.userService.addUser(u).subscribe((response) => {
      if (response.success) {
        this.router.navigate(['/students']);
      } else {
        /*
        if (response['error-infos'].includes('not-valid-email')) {
          this.addForm.get('email').setErrors({ email: true });
        }
        if (response['error-infos'].includes('not-valid-age')) {
          this.addForm.get('age').setErrors({ required: true });
        }
        */
      }
    });
  }
}
