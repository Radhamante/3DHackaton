import {MenuItemStep} from "./menu-item-step";

export class MenuItem {


  id:number;
  title: string;
  steps: MenuItemStep[] = [];

  constructor(id: number, title: string, steps: MenuItemStep[] | null) {
    this.id = id;
    this.title = title;
    if(steps){
      this.steps = steps;
    }
  }
}
