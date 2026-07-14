import * as THREE from 'three';
export class SceneManager {
    scene;
    constructor() {
        this.scene = new THREE.Scene();
        this.scene.background =
            new THREE.Color(0xf5f5f5);
    }
}
