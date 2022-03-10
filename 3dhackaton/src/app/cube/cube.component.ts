import { AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

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

  @ViewChild('canvas')
  private canvasRef!: ElementRef;

  @ViewChild('prevAnim')
  private prevAnimRef!: ElementRef;
  @ViewChild('nextAnim')
  private nextAnimRef!: ElementRef;

  public prevAnimEnable = true
  public nextAnimEnable = false

  @Input() public rotationSpeedX: number = 0.05
  @Input() public rotationSpeedY: number = 0.01
  @Input() public size: number = 20
  @Input() public texture: string =   "/assets/texture.jpg"

  @Input() public cameraZ: number = 50;
  @Input() public fieldOfView: number = 75;
  @Input("nearClipping") public nearClippingPlane: number = 1;
  @Input("farClipping") public farClippingPlane: number = 1000;

  private camera!: THREE.PerspectiveCamera;
  private get canvas() :HTMLCanvasElement {
    return this.canvasRef.nativeElement;
  }
  private renderer!: THREE.WebGLRenderer
  private scene!: THREE.Scene;
  
  private control!: OrbitControls;
  private controlNextPos!: any;

  private scooterGroup = new THREE.Group()

  private paused = true
  public steps = [0.03, 2.4, 4.75]
  public stepIndex = 0
  private direction = 1

  constructor() { }
  ngAfterViewInit(): void {
    this.createscene()
    this.startRenderingLoop()
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

  ngOnInit(): void {
  }

  private createscene () {
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas });

    // Scene
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0xEEEEEE)

    /**
     * Sizes
     */
    const sizes = {width:window.innerWidth,height:window.innerHeight}

    window.addEventListener('resize', () =>
    {
        // Save sizes
        sizes.width = window.innerWidth
        sizes.height = window.innerHeight

        // Update renderer
        this.renderer.setSize(sizes.width, sizes.height)

        // Update camera
        this.camera.aspect = sizes.width / sizes.height
        this.camera.updateProjectionMatrix()
    })


    /** Lights **/
    const ambientLight = new THREE.AmbientLight(0xffffff, 1)
    this.scene.add(ambientLight)

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5)
    directionalLight.position.z = 50
    this.scene.add(directionalLight)

    //Camera
    const canvaBounding = this.canvas.getBoundingClientRect()
    this.camera = new THREE.PerspectiveCamera (
      this.fieldOfView,
      canvaBounding.width/canvaBounding.height,
      0.1,
      400
    )
    this.camera.position.x = 120;
    this.camera.position.y = 75;
    this.camera.position.z = 130;

    // Controls
    const controls = new OrbitControls( this.camera, this.renderer.domElement);
    controls.minDistance = 10;
    controls.maxDistance = 200;
    controls.enablePan = false;
    controls.target.set( 0, 25, 55 );
    controls.update();
    this.control = controls

    // MODEL
    const gltfLoader = new GLTFLoader()
    gltfLoader.load(
      '/assets/models/twoshotanimright(6).glb',
      (gltf) => {
        this.scooterGroup.add(gltf.scene)

        let clock: THREE.Clock = new THREE.Clock();
        let mixer = new THREE.AnimationMixer( gltf.scene );
        
        console.log(gltf.animations[1])
        
        gltf.animations.forEach( ( clip ) => {
          mixer.clipAction( clip ).play();
          console.log(clip)

          mixer.addEventListener( 'loop', ( e ) => {
            console.log(clip)
            console.log("loop")
            this.stepIndex = 0
          } );

          const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            mixer.update(delta);

            const time = mixer.clipAction( clip ).time
            
            if(this.direction == 1 && time > this.steps[this.stepIndex + this.direction]){
              this.paused = true
              if(this.stepIndex < this.steps.length -1){
                this.stepIndex += 1
                this.prevAnimEnable = false
              }else{
                this.nextAnimEnable = true
              }
            }

            if(this.direction == -1 && time < this.steps[this.stepIndex + this.direction]){
              this.paused = true
              if(this.stepIndex > 0){
                this.stepIndex -= 1
                this.nextAnimEnable = false
              }else{
                this.prevAnimEnable = true
              }
            }
            
            console.log(this.stepIndex)

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
    this.scene.add(this.scooterGroup)
    this.scooterGroup.scale.set(1,1,1)
    this.scooterGroup.position.x = 0
    this.scooterGroup.position.y = 0
    
  }

  private startRenderingLoop () {
    // Renderer
    // Use canvas element in template
    
    this.renderer.setPixelRatio(devicePixelRatio);
    this.renderer.setSize(this.canvas.clientWidth, this.canvas.clientHeight )
    let component: CubeComponent = this;
    function render () {
      requestAnimationFrame(render);
      component.renderer.render(component. scene, component.camera);
    }
    render()
  }
}
