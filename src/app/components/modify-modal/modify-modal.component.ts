import {Component, Input, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {User} from "../../interfaces/user";

@Component({
  selector: 'app-modify-modal',
  templateUrl: './modify-modal.component.html',
  styleUrls: ['./modify-modal.component.scss']
})
export class ModifyModalComponent implements OnInit {

  @Input()
  user: User;

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit(): void {
  }

  modifyUser(u: User) {
    this.activeModal.close(u);
  }
}
