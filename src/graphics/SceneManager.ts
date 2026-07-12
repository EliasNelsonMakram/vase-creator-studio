import * as THREE from 'three';

export class SceneManager {

    public readonly scene: THREE.Scene;

    constructor() {

        this.scene = new THREE.Scene();

        this.scene.background =
            new THREE.Color(0xf5f5f5);
    }
}