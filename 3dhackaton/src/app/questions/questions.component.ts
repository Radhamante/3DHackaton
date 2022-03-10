import { Component, OnInit } from '@angular/core';
import {CategoriesConstants} from "../../model/categories-constants";
import {Category} from "../../model/category";
import {Router} from "@angular/router";

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {
  categories: Category[] = CategoriesConstants.CATEGORIES;
  question: any;
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  openCategory(id: number) {
    this.router.navigate(["/categorie/"+id])
  }
}
