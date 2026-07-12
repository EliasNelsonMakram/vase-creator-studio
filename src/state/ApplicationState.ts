import * as THREE from 'three';

export interface VaseParameters {

    height: number;
    radiusTop: number;
    radiusBottom: number;
    radialSegments: number;
    heightSegments: number;

}

export interface ApplicationState {

    scene: THREE.Scene;

    vase: THREE.Mesh | null;

    parameters: VaseParameters;

}