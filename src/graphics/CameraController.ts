import * as THREE from 'three';

export class CameraController {

    public readonly camera:
        THREE.PerspectiveCamera;

    constructor() {

        this.camera =
            new THREE.PerspectiveCamera(
                45,
                window.innerWidth /
                window.innerHeight,
                0.1,
                1000
            );

        this.camera.position.set(
            0,
            5,
            10
        );
    }
}