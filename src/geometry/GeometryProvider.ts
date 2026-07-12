import * as THREE from 'three';

import type {VaseParameters} from '../state/ApplicationState';

export interface GeometryProvider {

    generate(

        parameters: VaseParameters

    ): THREE.BufferGeometry;

}