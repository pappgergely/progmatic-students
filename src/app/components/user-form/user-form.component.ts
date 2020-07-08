import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../services/user.service";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss']
})
export class UserFormComponent implements OnInit {

  form: FormGroup;

  @Output()
  submitUser: EventEmitter<User>;

  constructor(private userService: UserService) {
    this.form = new FormGroup({
      name: new FormControl(null, [Validators.required, Validators.maxLength(20), userService.checkCapital]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      age: new FormControl(null, [Validators.required, Validators.min(18), Validators.max(120)]),
      gender: new FormControl(null, Validators.required)
    });
    this.submitUser = new EventEmitter<User>();
  }

  ngOnInit(): void {
  }

  submitForm() {
    const u: User = {
      name: this.form.get('name').value,
      email: this.form.get('email').value,
      age: this.form.get('age').value,
      gender: this.form.get('gender').value,
    };
    this.submitUser.emit(u);
  }
}
