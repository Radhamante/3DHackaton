import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import * as THREE from "three"
import {
  GLTFLoader
} from 'three/examples/jsm/loaders/GLTFLoader.js'
import {
  OrbitControls
} from "three/examples/jsm/controls/OrbitControls";

// let paused = false
// let steps = [0.01,2.4, 4.75]
// let stepIndex = 0
// let direction = 1


@Component({
  selector: 'app-cube',
  templateUrl: './cube.component.html',
  styleUrls: ['./cube.component.scss']
})
export class CubeComponent implements OnInit, AfterViewInit {

  public testInt: number = 0;

  @Input() testInput: any;

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  public fieldOfView: number = 75;
  public nearClippingPlane: number = 1;
  public farClippingPlane: number = 400;

  public cameraLookAt = new THREE.Vector3(0, 25, 55);
  public cameraPosition = new THREE.Vector3(120, 75, 130);
  public cameraMinZoom = 10
  public cameraMaxZoom = 200

  private camera!: THREE.PerspectiveCamera;
  private get canvas(): HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private renderer!: THREE.WebGLRenderer
  private scene!: THREE.Scene;

  private scooterGroup = new THREE.Group()

  private paused = true
  public steps = [0.03, 2.4, 4.8, 7.2, 9.6, 12, 14.35]
  public stepIndex = 0
  private direction = 1

  constructor() {}
  ngAfterViewInit(): void {
    this.createscene()
    this.startRenderingLoop()


    this.testInput.addEventListener
    /*this.testInput.onChange( ($event: any) => {
        console.log($event);
    });*/
  }

  pauseAnim(): void {
    this.paused = true
  }

  nextAnim(): void {
    this.paused = false
    this.direction = 1
  }
  prevAnim(): void {
    this.paused = false
    this.direction = -1
  }

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges) {
    if (changes && changes['testInput'] && changes['testInput'].previousValue) {
      console.log(changes['testInput'])
      if(changes['testInput'].previousValue['id'] < changes['testInput'].currentValue['id']){
        this.nextAnim();
      } else if(changes['testInput'].previousValue['id'] > changes['testInput'].currentValue['id']) {
        this.prevAnim();
      }
    }
  }
  private createscene() {
    /**
     * Renderer
     */
    this.renderer = new THREE.WebGLRenderer({
      canvas: this.canvas
    });

    /**
     * Scene
     */
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xEEEEEE)

    /**
     * Sizes
     */
    const sizes = {
      width: window.innerWidth,
      height: window.innerHeight
    }

    /**
     * Resize
     */
    window.addEventListener('resize', () => {
      // Save sizes
      console.log(this.canvas.parentElement!.clientWidth)
      sizes.width = this.canvas.parentElement!.clientWidth
      sizes.height = this.canvas.parentElement!.clientHeight

      // Update renderer
      this.renderer.setSize(sizes.width, sizes.height)

      // Update camera
      this.camera.aspect = sizes.width / sizes.height
      this.camera.updateProjectionMatrix()
    })


    /**
     * Light
     */
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.z = 50
    directionalLight.position.y = 50
    directionalLight.position.x = 50
    this.scene.add(directionalLight)

    /**
     * Camera
     */
    const canvaBounding = this.canvas.getBoundingClientRect()
    this.camera = new THREE.PerspectiveCamera(
      this.fieldOfView,
      canvaBounding.width / canvaBounding.height,
      this.nearClippingPlane,
      this.farClippingPlane
    )
    this.camera.position.x = this.cameraPosition.x;
    this.camera.position.y = this.cameraPosition.y;
    this.camera.position.z = this.cameraPosition.z;

    /**
     * Controls
     */
    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.minDistance = this.cameraMinZoom;
    controls.maxDistance = this.cameraMaxZoom;
    controls.enablePan = false;
    controls.target = this.cameraLookAt;
    controls.update();

    /**
     * Load GLTF model
     */
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
      '/assets/models/twoshotanimright(8).glb',
      (gltf) => {
        // Add to group
        this.scooterGroup.add(gltf.scene)

        // Start animation
        let clock: THREE.Clock = new THREE.Clock();
        let mixer = new THREE.AnimationMixer(gltf.scene);
        gltf.animations.forEach((clip) => {
          mixer.clipAction(clip).play();

          // Animation loop
          const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            mixer.update(delta);

            const time = mixer.clipAction(clip).time

            if (this.direction == 1 && time > this.steps[this.stepIndex + this.direction]) {
              this.paused = true
              if (this.stepIndex < this.steps.length - 1) {
                this.stepIndex += 1
              }
            }

            if (this.direction == -1 && time < this.steps[this.stepIndex + this.direction]) {
              this.paused = true
              if (this.stepIndex > 0) {
                this.stepIndex -= 1
              }
            }

            mixer.clipAction(clip).paused = this.paused
            mixer.timeScale = this.direction
          }
          animate();
        });
      },
      undefined,
      (error) => {
        console.log("Screen error")
        console.log(error)
      }
    )
    // Add to scene
    this.scene.add(this.scooterGroup)
    this.scooterGroup.scale.set(1, 1, 1)
    this.scooterGroup.position.x = 0
    this.scooterGroup.position.y = 0
  }

  private startRenderingLoop() {
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight)
    const component: CubeComponent = this;

    function render() {
      requestAnimationFrame(render);
      component.renderer.render(component.scene, component.camera);
    }
    render()
  }
}
