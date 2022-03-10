import {MenuItem} from "./menu-item";

export class Category {
  id: number = 0;
  title: string = "";
  items: MenuItem[] = [];
  imageUrl: string = "";
  constructor(id: number, title: string, url: string, items: MenuItem[]) {
    this.id = id;
    this.title = title;
    this.imageUrl = url;
    this.items = items;
  }
}
