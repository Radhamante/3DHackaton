import { Component, OnInit } from '@angular/core';
import {Constants} from "../../model/constants";
import {CategoriesConstants} from "../../model/categories-constants";
import {Category} from "../../model/category";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  categories: Category[] = CategoriesConstants.CATEGORIES;
  constructor() { }

  ngOnInit(): void {
  }

}
