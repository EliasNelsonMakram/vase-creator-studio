import { Vector3 } from "@/khnum/math";
/**
 * Axis-aligned bounding box.
 */
export class Bounds3 {
    min;
    max;
    constructor(min, max) {
        this.min = min;
        this.max = max;
    }
    get width() {
        return this.max.x - this.min.x;
    }
    get height() {
        return this.max.y - this.min.y;
    }
    get depth() {
        return this.max.z - this.min.z;
    }
    get center() {
        return new Vector3((this.min.x + this.max.x) * 0.5, (this.min.y + this.max.y) * 0.5, (this.min.z + this.max.z) * 0.5);
    }
}
