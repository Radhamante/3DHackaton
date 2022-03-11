import {MenuItem} from "./menu-item";
import {MenuItemStepConstants} from "./menu-item-step-constans";

export class MenuItemConstants {

  //WHEEL RELATED MENU ITEMS
  public static REMOVE_FRONT_WHEEL = new MenuItem(1, "Démonter la roue avant", MenuItemStepConstants.WHEEL_REMOVAL, "/assets/models/twoshotanimright.glb");
  public static REMOVE_REAR_WHEEL = new MenuItem(2, "Démonter la roue arrière", null, "");
  public static CHANGE_TIRE = new MenuItem(3, "Changer un pneu", null, "");
  public static PRESSURE_CHECK = new MenuItem(4, "Vérifier la pression d'un pneu", null, "");
  public static TIRE_CHECK = new MenuItem(5, "Vérifier l'état d'un pneu", null, "");

  //LIGHTING RELATED MENU ITEMS
  public static CHANGE_HEADLIGHT = new MenuItem(6, "Changer le phare", null, "");
  public static CHANGE_BLINKER = new MenuItem(7, "Changer le clignotant", null, "");
  public static CHANGE_BRAKE_LIGHT = new MenuItem(8, "Changer les feux stop", null, "");
  public static CHANGE_FOG_LIGHT = new MenuItem(9, "Changer l'antibrouillard", null, "");

  //DIRECTION RELATED MENU ITEMS
  public static CHANGE_BEARING = new MenuItem(10, "Changer les roulements", null, "");
  public static CHECK_ALIGNMENT = new MenuItem(11, "Vérifier l'alignement", null, "");


  //OTHER
  public static CHANGE_REARVIEW_MIRROR = new MenuItem(12, "Changer un rétroviseur", null, "");
  public static OPEN_TRUNK = new MenuItem(13, "Ouvrir le coffre", null, "");
  public static CONTACT_US = new MenuItem(14, "Nous contacter", null, "");

  public static WHEEL = [
    MenuItemConstants.REMOVE_FRONT_WHEEL,
    MenuItemConstants.REMOVE_REAR_WHEEL,
    MenuItemConstants.CHANGE_TIRE,
    MenuItemConstants.PRESSURE_CHECK,
    MenuItemConstants.TIRE_CHECK
  ];

  public static LIGHTING = [
    MenuItemConstants.CHANGE_HEADLIGHT,
    MenuItemConstants.CHANGE_BLINKER,
    MenuItemConstants.CHANGE_BRAKE_LIGHT,
    MenuItemConstants.CHANGE_FOG_LIGHT
  ];

  public static DIRECTION = [
    MenuItemConstants.CHANGE_BEARING,
    MenuItemConstants.CHECK_ALIGNMENT,
  ];

  public static OTHER= [
    MenuItemConstants.CHANGE_REARVIEW_MIRROR,
    MenuItemConstants.OPEN_TRUNK,
    MenuItemConstants.CONTACT_US,
  ]



  public static ALL = [
    MenuItemConstants.REMOVE_FRONT_WHEEL,
    MenuItemConstants.REMOVE_REAR_WHEEL,
    MenuItemConstants.CHANGE_TIRE,
    MenuItemConstants.PRESSURE_CHECK,
    MenuItemConstants.TIRE_CHECK,
    MenuItemConstants.CHANGE_HEADLIGHT,
    MenuItemConstants.CHANGE_BLINKER,
    MenuItemConstants.CHANGE_BRAKE_LIGHT,
    MenuItemConstants.CHANGE_FOG_LIGHT,
    MenuItemConstants.CHANGE_BEARING,
    MenuItemConstants.CHECK_ALIGNMENT,
    MenuItemConstants.CHANGE_REARVIEW_MIRROR,
    MenuItemConstants.OPEN_TRUNK,
    MenuItemConstants.CONTACT_US
  ];


  public static getById(id: number) {
    return this.ALL.filter(item => {
      return item.id == id;
    })[0]
  }

}
