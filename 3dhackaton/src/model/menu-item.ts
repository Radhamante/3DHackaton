import {MenuItemStep} from "./menu-item-step";

export class MenuItem {


  id:number;
  title: string;
  steps: MenuItemStep[] = [];
  animationPath: string;

  constructor(id: number, title: string, steps: MenuItemStep[] | null, animationPath : string) {
    this.id = id;
    this.title = title;
    if(steps){
      this.steps = steps;
    }
    this.animationPath = animationPath;
  }
}
