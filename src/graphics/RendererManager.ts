import * as THREE from 'three';

export class RendererManager {

    public readonly renderer:
        THREE.WebGLRenderer;

    constructor() {

        this.renderer =
            new THREE.WebGLRenderer({
                antialias: true
            });

        this.renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );
    }
}