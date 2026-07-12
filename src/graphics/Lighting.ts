import * as THREE from 'three';

export class Lighting {

    public static create(
        scene: THREE.Scene
    ): void {

        scene.add(
            new THREE.AmbientLight(
                0xffffff,
                1
            )
        );

        const light =
            new THREE.DirectionalLight(
                0xffffff,
                3
            );

        light.position.set(
            5,
            10,
            5
        );

        scene.add(light);
    }
}