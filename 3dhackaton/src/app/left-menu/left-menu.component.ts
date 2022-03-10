import { Component, OnInit } from '@angular/core';
import {Category} from "../../model/category";
import {MenuItem} from "../../model/menu-item";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {
  c1: Category = new Category(1, "Montage");
  c2: Category = new Category(1, "Démontage");
  categories: Category[] = [];
  constructor() { }

  ngOnInit(): void {
    this.c1.items.push(new MenuItem(1, "monter roue"), new MenuItem(2, "monter en l'air"))
    this.c2.items.push(new MenuItem(1, "monter roue"), new MenuItem(2, "monter en l'air"))
    this.categories.push(this.c1);
    this.categories.push(this.c2);
  }

}
