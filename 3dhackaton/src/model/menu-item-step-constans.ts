import {MenuItemStep} from "./menu-item-step";

export class MenuItemStepConstants {

  //WHEEL_REMOVAL
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


  //HEADLIGHT_CHANGING
  public static STABILIZE_SCOOT = new MenuItemStep(1, "Stabiliser le scooter", "A l'aide de la béquille" +
    " stabilisez le scooter.", 0.03);
  public static REMOVE_GLASS = new MenuItemStep(2, "Enlever la lunette avant", "En appuyant sur les extremités de la lunette, tirer la lunette vers soi. Si la lunette résiste, tournez légerment dans le sens anti-horaire avec de tirer." , 2.4);
  public static UNSCREW_BULB = new MenuItemStep(3, "Dévisser l'ampoule", "Attendre que l'ampoule ne soit plus chaude!" +
    " Puis, à l'aide d'un chiffon, tournez l'ampoule dans le sens anti-horaire.", 4.8);
  public static LAY_BULB = new MenuItemStep(4, "Déposer l'ampoule",
    " Déposer délicatement l'ancienne ampoule sur le côté du scooter.", 7.2);
  public static TAKE_BULB = new MenuItemStep(5, "Prendre la nouvelle ampoule",
    "Prendre délicatement la nouvelle ampoule.", 9.6);
  public static SCREW_BULB = new MenuItemStep(6, "Visser la nouvelle ampoule",
    "Placez la nouvelle ampoule dans la zone ZA8. Puis tournez dans le sens horaire jusqu'à l'enfoncement de l'ampoule.", 12);
  public static PUT_GLASS = new MenuItemStep(7, "Remettre la lunette", "Replacez la lunette en appuyant légèrement sur les extrémités.", 14.39);

  public static HEADLIGHT_CHANGING = [
    MenuItemStepConstants.STABILIZE_SCOOT,
    MenuItemStepConstants.REMOVE_GLASS,
    MenuItemStepConstants.UNSCREW_BULB,
    MenuItemStepConstants.LAY_BULB,
    MenuItemStepConstants.TAKE_BULB,
    MenuItemStepConstants.SCREW_BULB,
    MenuItemStepConstants.PUT_GLASS,
  ];

  //TRUNK_OPENING
  public static STABILIZE = new MenuItemStep(1, "Stabiliser le scooter", "Après avoir stabiliser le scooter à l'aide des béquilles," +
    " se diriger vers l'arrière du scooter.", 0.03);
  public static PULL_HANDLE = new MenuItemStep(2, "Tirer la poignée", "A l'arrière du coffre," +
    " tirez légèrement la poignée vers soi.", 2.4);
  public static POP_UP_TRUNK = new MenuItemStep(3, "Lever le coffre", "Levez le coffre vers le haut pour accéder au contenu de coffre.", 4.75);

  public static TRUNK_OPENING = [
    MenuItemStepConstants.STABILIZE,
    MenuItemStepConstants.PULL_HANDLE,
    MenuItemStepConstants.POP_UP_TRUNK,
  ];

  //WHEELING
  public static WHEELING = new MenuItemStep(1, "Mettre le scooter en Y", "Levez le scooter en utilisant l'accélérateur, Accélérez à fond, gardez l'équilibre, pour redescendre utilisez le frein légèrement.",
    0.03);
  public static WHEELING_ONGOING = new MenuItemStep(2, "Mettre le scooter en Y", "Levez le scooter en utilisant l'accélérateur, Accélérez à fond, gardez l'équilibre, pour redescendre utilisez le frein légèrement.",
    20);

  public static DO_WHEELING = [
    MenuItemStepConstants.WHEELING,
    MenuItemStepConstants.WHEELING_ONGOING
  ]
}

