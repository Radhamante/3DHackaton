import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../model/menu-item";

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {

  @Input() item: MenuItem | undefined;
  constructor() { }

  ngOnInit(): void {
    console.log(this.item)
  }

}
