import {MenuItemStep} from "./menu-item-step";

export class MenuItemStepConstants {
  public static UNBOLT = new MenuItemStep(1, "Enlever les boulons", "Utilisez la clé" +
    " N°4 pour désserer les boulons de la roue avant.", 0.03);
  public static REMOVE_WHEEL = new MenuItemStep(2, "Enlever la roue", "Attrapez la roue avec vos deux mains" +
    " puis tirez sur la roue avant du scooter afin de la retirer.", 2.4);
  public static LAY_WHEEL = new MenuItemStep(3, "Déposer la roue à plat", "Délicatement, veillez à bien déposer la roue à plat à côté du scooter.", 4.8);
  public static REMOVE_RIM = new MenuItemStep(4, "Enlever l'ancienne jante", "A l'aide des deux mains, enlever la jante. Si la jante a du mal à sortir, " +
    "utilisez l'huile AB7.", 7.2);
  public static REPLACE_RIM = new MenuItemStep(5, "Placer la nouvelle jante", "Replacer la nouvelle jante dans le pneu en laissant toujours le pneu à plat.", 9.6);
  public static REPLACE_WHEEL = new MenuItemStep(6, "Replacer la roue à l'avant", "Prenez l'ensemble de la roue et le replacer en dessous de l'avant du scooter. N'oubliez pas de placer la béquille pour stabiliser le scooter.", 12);
  public static SCREW_BOLT = new MenuItemStep(7, "Remettre les boulons", "A l'aide du boulon N°4, ressérer les boulons de la roue avant.", 14.35);

  public static WHEEL_REMOVAL = [
    MenuItemStepConstants.UNBOLT,
    MenuItemStepConstants.REMOVE_WHEEL,
    MenuItemStepConstants.LAY_WHEEL,
    MenuItemStepConstants.REMOVE_RIM,
    MenuItemStepConstants.REPLACE_RIM,
    MenuItemStepConstants.REPLACE_WHEEL,
    MenuItemStepConstants.SCREW_BOLT
  ];
}

