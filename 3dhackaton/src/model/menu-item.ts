import {MenuItemStep} from "./menu-item-step";

export class MenuItem {


  id:number;
  title: string;
  steps: MenuItemStep[] = [];

  constructor(id: number, title: string) {
    this.id = id;
    this.title = title;
  }
}
