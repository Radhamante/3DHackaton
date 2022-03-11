import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
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
  public currentStepIndex: number = 0;
  public currentStep: any = this.menuItem.steps[0];
  public chevronRight: any = faChevronRight;
  public chevronLeft: any = faChevronLeft;


  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
  }

  nextStep(): void {
    this.currentStepIndex++;
    console.log(this.currentStepIndex)
    this.currentStep = this.menuItem.steps[this.currentStepIndex];
  }
  previousStep(): void{
    this.currentStepIndex--;
    this.currentStep = this.menuItem.steps[this.currentStepIndex];
  }

}
