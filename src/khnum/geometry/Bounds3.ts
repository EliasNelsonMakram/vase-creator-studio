import { Vector3 } from "@/khnum/math";

/**
 * Axis-aligned bounding box.
 */
export class Bounds3 {

    constructor(
        public readonly min: Vector3,
        public readonly max: Vector3
    ) {}

    public empty() {

    }

    public isEmpty(){
        return (
            this.min.x > this.max.x ||
            this.min.y > this.max.y ||
            this.min.z > this.max.z
        );
    }

    public get width(): number {
        return this.max.x - this.min.x;
    }

    public get height(): number {
        return this.max.y - this.min.y;
    }

    public get depth(): number {
        return this.max.z - this.min.z;
    }

    public get center(): Vector3 {
        return new Vector3(
            (this.min.x + this.max.x) * 0.5,
            (this.min.y + this.max.y) * 0.5,
            (this.min.z + this.max.z) * 0.5
        );
    }
}