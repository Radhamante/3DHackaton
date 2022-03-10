export class MenuItemStep {
  id: number = 0;
  title: string = "";
  description: string = "";
  duration: number = 0;

  constructor(id: number, title: string, description: string, duration: number) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.duration = duration;
  }
}
