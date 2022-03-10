import {MenuItem} from "./menu-item";

export class Category {
  id: number = 0;
  title: string = "";
  items: MenuItem[] = [];
  imageUrl: string = "";
  constructor(id: number, title: string, url: string) {
    this.id = id;
    this.title = title;
    this.imageUrl = url;
  }
}
