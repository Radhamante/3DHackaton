import {MenuItem} from "./menu-item";

export class Category {
  id: number = 0;
  title: string = "";
  items: MenuItem[] = [];
  constructor(id: number, title: string) {
    this.id = id;
    this.title = title
  }
}
