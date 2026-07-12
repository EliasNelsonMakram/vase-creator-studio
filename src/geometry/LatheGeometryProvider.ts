import * as THREE from 'three';

import type {GeometryProvider} from './GeometryProvider';

import type {VaseParameters} from '../state/ApplicationState';

export class LatheGeometryProvider
    implements GeometryProvider{

    generate(
        parameters: VaseParameters
    ): THREE.BufferGeometry{

        return new THREE.CylinderGeometry(

            parameters.radiusTop,

            parameters.radiusBottom,

            parameters.height,

            parameters.radialSegments,

            parameters.heightSegments

        );

    }

}