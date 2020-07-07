import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input()
  buttonText: string;
  @Input()
  buttonLink: string;
  @Input()
  buttonClass: string;
  @Input()
  titleText: string;

  constructor() { }

  ngOnInit(): void {
  }

}
