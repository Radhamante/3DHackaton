import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Category} from "../../model/category";
import {CategoriesConstants} from "../../model/categories-constants";
import {MenuItem} from "../../model/menu-item";
import {MenuItemConstants} from "../../model/menu-item-constants";
import {MenuItemStep} from "../../model/menu-item-step";

@Component({
  selector: 'app-visualizer',
  templateUrl: './visualizer.component.html',
  styleUrls: ['./visualizer.component.scss']
})
export class VisualizerComponent implements OnInit {

  private menuItemId: number = this.route.snapshot.params['id'];
  public menuItem: MenuItem = MenuItemConstants.getById(this.menuItemId);
  public currentStepIndex: number = 0;
  public currentStep: MenuItemStep = this.menuItem.steps[0];

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  nextStep(): void {
   //todo
  }
  previousStep(): void{
    //todo
  }

}
