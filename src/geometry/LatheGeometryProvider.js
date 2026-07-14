import * as THREE from 'three';
export class LatheGeometryProvider {
    generate(parameters) {
        return new THREE.CylinderGeometry(parameters.radiusTop, parameters.radiusBottom, parameters.height, parameters.radialSegments, parameters.heightSegments);
    }
}
