import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoriesConstants} from "../../model/categories-constants";
import {MenuItem} from "../../model/menu-item";
import {MenuItemConstants} from "../../model/menu-item-constants";

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {

  private menuItemId: number = this.route.snapshot.params['id'];
  public menuItem: MenuItem = MenuItemConstants.getById(this.menuItemId);

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    console.log(this.menuItem);
  }

}
