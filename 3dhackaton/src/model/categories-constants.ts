import {Category} from "./category";
import {MenuItemConstants} from "./menu-item-constants";

export class CategoriesConstants {
  public static WHEELS = new Category(1, "Roue", "https://global-uploads.webflow.com/5f1a994364b3473c65835692/6141f7d459af2161bca48634_DSC03728-copie%20(1).jpg", MenuItemConstants.WHEEL);
  public static LIGHTING = new Category(2, "Éclairage", "https://global-uploads.webflow.com/5f1a994364b3473c65835692/6141f7d2ccd28872c1dd3608_DSC03727-copie%20(1).jpg", MenuItemConstants.LIGHTING);
  public static DIRECTION = new Category(3, "Direction", "https://global-uploads.webflow.com/5f1a994364b3473c65835692/606b3b028255e431a7f48f18_Small_DSC09266.jpg", MenuItemConstants.DIRECTION);
  public static OTHERS = new Category(4, "Autres", "https://global-uploads.webflow.com/5f1a994364b3473c65835692/606b42fa4a48736d9378c9f7_Nina_Brumaire_Touching_Seat.jpeg", MenuItemConstants.OTHER);

  public static CATEGORIES = [
    CategoriesConstants.WHEELS,
    CategoriesConstants.LIGHTING,
    CategoriesConstants.DIRECTION,
    CategoriesConstants.OTHERS
  ]

  public static getById (id: number) {
    return this.CATEGORIES.filter(category => {
      return category.id == id;
    })[0]
  }
}
