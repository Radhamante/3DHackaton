import * as THREE from "three";
import {MenuItemStep} from "./menu-item-step";

export class MenuItem {


  id:number;
  title: string;
  steps: MenuItemStep[] = [];
  animationPath: string;
  cameraPosition: THREE.Vector3;
  cameraLookAt: THREE.Vector3;

  constructor(id: number, title: string, steps: MenuItemStep[] | null, animationPath : string,
              cameraPosition: THREE.Vector3 = new THREE.Vector3(120, 75, 130),
              cameraLookAt: THREE.Vector3 = new THREE.Vector3(0, 25, 55)) {
    this.id = id;
    this.title = title;
    if(steps){
      this.steps = steps;
    }
    this.animationPath = animationPath;
    this.cameraPosition = cameraPosition;
    this.cameraLookAt = cameraLookAt;
  }
}
