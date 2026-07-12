import * as THREE from 'three';

import { SceneManager }
    from '../graphics/SceneManager';

import { CameraController }
    from '../graphics/CameraController';

import { RendererManager }
    from '../graphics/RendererManager';

import { Lighting }
    from '../graphics/Lighting';

import { OrbitControls }
    from 'three/examples/jsm/controls/OrbitControls.js';
import {FPSMonitor} from "../ui/FPSMonitor.ts";

export class Application {

    private sceneManager:
        SceneManager;

    private cameraController:
        CameraController;

    private rendererManager:
        RendererManager;

    private controls:
        OrbitControls;

    private fps=new FPSMonitor();

    private clock=new THREE.Clock();

    constructor() {

        this.sceneManager =
            new SceneManager();

        this.cameraController =
            new CameraController();

        this.rendererManager =
            new RendererManager();

        document.body.appendChild(
            this.rendererManager
                .renderer
                .domElement
        );

        Lighting.create(
            this.sceneManager.scene
        );

        const grid =
            new THREE.GridHelper(
                20,
                20
            );

        const axes =
            new THREE.AxesHelper(5);

        this.sceneManager.scene.add(grid);
        this.sceneManager.scene.add(axes);

        this.controls =
            new OrbitControls(
                this.cameraController.camera,
                this.rendererManager
                    .renderer
                    .domElement
            );

        this.animate();

        window.addEventListener(
            'resize',
            () => this.onResize()
        );
    }

    private animate = (): void => {
        this.fps.stats.begin();

        const delta=this.clock.getDelta();

        requestAnimationFrame(
            this.animate
        );



        this.controls.update();

        this.rendererManager.renderer.render(
            this.sceneManager.scene,
            this.cameraController.camera
        );

        this.fps.stats.end();
    };

    private onResize(): void {

        const camera =
            this.cameraController.camera;

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        this.rendererManager
            .renderer
            .setSize(
                window.innerWidth,
                window.innerHeight
            );
    }
}