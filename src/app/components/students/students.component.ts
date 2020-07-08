import { Component, OnInit } from '@angular/core';
import {User} from "../../interfaces/user";
import {UserService} from "../../services/user.service";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {DeleteModalComponent} from "../delete-modal/delete-modal.component";
import {ModifyModalComponent} from "../modify-modal/modify-modal.component";

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

  users: User[];

  constructor(private userService: UserService, private modalService: NgbModal) {
    this.users = [];
  }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers(): void {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  deleteUser(user: User): void {
    this.userService.deleteUser(user.id).subscribe(users => {
      this.users = users;
    });
  }

  openDeleteModal(user: User): void {
    const modalRef = this.modalService.open(DeleteModalComponent);
    modalRef.componentInstance.user = user;
    modalRef.result.then(() => {
      this.deleteUser(user);
    }).catch(() => {});
  }

  openModifyModal(user: User): void {
    const modalRef = this.modalService.open(ModifyModalComponent);
    modalRef.componentInstance.user = user;
  }
}
