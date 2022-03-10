import {Component, Input, OnInit} from '@angular/core';
import {MenuItem} from "../../model/menu-item";
import {ActivatedRoute, Route, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoriesConstants} from "../../model/categories-constants";

@Component({
  selector: 'app-question-item',
  templateUrl: './question-item.component.html',
  styleUrls: ['./question-item.component.scss']
})
export class QuestionItemComponent implements OnInit {
  private categoryId: number = this.route.snapshot.params['id'];
  public category: Category = CategoriesConstants.getById(this.categoryId);
  @Input() item: MenuItem | undefined;
  constructor(private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
      console.log(this.category)
  }

}
