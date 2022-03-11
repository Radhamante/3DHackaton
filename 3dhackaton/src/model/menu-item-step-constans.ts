import {MenuItemStep} from "./menu-item-step";

export class MenuItemStepConstants {
  public static UNBOLT = new MenuItemStep(1, "Enlever les boulons", "Utiliser la clé" +
    " N°4 pour désserer les boulons de la roue avant", 4.7);
  public static REMOVE_WHEEL = new MenuItemStep(2, "Enlever la roue", "Attraper la roue avec vos deux main (la gauche et la droite) " +
    " puis tirer sur la roue avant du scooter afin de la retirer", 4.7);
  public static END_STEP = new MenuItemStep(3, "Fin", "Vous venez de réussir l'ensemble des étapes, bien joué 😎", 4.7);

  public static WHEEL_REMOVAL = [
    MenuItemStepConstants.UNBOLT,
    MenuItemStepConstants.REMOVE_WHEEL,
    MenuItemStepConstants.END_STEP
  ];
}

