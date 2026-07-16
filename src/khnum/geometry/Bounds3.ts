/**
 * Khnum Engine
 *
 * Copyright (c) 2026 Elias Nelson Makram
 *
 * Licensed under the MIT License.
 */
import { Vector3 } from "@/khnum";


/**
 * Represents an immutable axis-aligned bounding box (AABB).
 *
 * Bounds3 stores the minimum and maximum corner of a box aligned
 * with the world axes.
 *
 * All operations return new Bounds3 instances.
 */
export class Bounds3 {

    public readonly min: Vector3;
    public readonly max: Vector3;

    /**
     * Instead of forcing the constructor to reject every min > max,
     * allow the single canonical empty representation and reject every other invalid combination
     * @param min
     * @param max
     * @private
     */
    private static isCanonicalEmpty(min: Vector3, max: Vector3): boolean {
        return (
            min.x === Number.POSITIVE_INFINITY &&
            min.y === Number.POSITIVE_INFINITY &&
            min.z === Number.POSITIVE_INFINITY &&
            max.x === Number.NEGATIVE_INFINITY &&
            max.y === Number.NEGATIVE_INFINITY &&
            max.z === Number.NEGATIVE_INFINITY
        );
    }


    /**
     * Creates a new bounding box.
     *
     * @throws RangeError if min is greater than max on any axis.
     */
    public constructor(min: Vector3, max: Vector3) {

        if (!Bounds3.isCanonicalEmpty(min, max)) {
            if (min.x > max.x) {
                throw new RangeError("min.x must be <= max.x");
            }

            if (min.y > max.y) {
                throw new RangeError("min.y must be <= max.y");
            }

            if (min.z > max.z) {
                throw new RangeError("min.z must be <= max.z");
            }
        }
        this.min = min;
        this.max = max;

        Object.freeze(this);
    }

    /**
     * Returns an empty bounding box.
     */
    public static empty(): Bounds3 {
        return new Bounds3(
            Vector3.POSITIVE_INFINITY,
            Vector3.NEGATIVE_INFINITY
        );
    }

    /**
     * Returns true if this bounds is empty.
     */
    public isEmpty(): boolean {

        return (
            this.min.x > this.max.x ||
            this.min.y > this.max.y ||
            this.min.z > this.max.z
        );
    }

    /**
     * Width along the X axis.
     */
    public get width(): number {

        return this.isEmpty()
            ? 0
            : this.max.x - this.min.x;
    }

    /**
     * Height along the Y axis.
     */
    public get height(): number {

        return this.isEmpty()
            ? 0
            : this.max.y - this.min.y;
    }

    /**
     * Depth along the Z axis.
     */
    public get depth(): number {

        return this.isEmpty()
            ? 0
            : this.max.z - this.min.z;
    }

    /**
     * Returns the size vector.
     */
    public get size(): Vector3 {

        return new Vector3(
            this.width,
            this.height,
            this.depth
        );
    }

    /**
     * Returns the center point.
     *
     * @throws Error if bounds are empty.
     */
    public get center(): Vector3 {

        if (this.isEmpty()) {
            throw new Error("Cannot compute center of empty Bounds3.");
        }

        return new Vector3(

            (this.min.x + this.max.x) * 0.5,

            (this.min.y + this.max.y) * 0.5,

            (this.min.z + this.max.z) * 0.5
        );
    }

    public expand(point: Vector3): Bounds3 {

        if (this.isEmpty()) {
            return new Bounds3(point, point);
        }

        return new Bounds3(
            this.min.min(point),
            this.max.max(point)
        );
    }

    public union(other: Bounds3): Bounds3 {

        if (this.isEmpty()) {
            return other;
        }

        if (other.isEmpty()) {
            return this;
        }

        return new Bounds3(
            this.min.min(other.min),
            this.max.max(other.max)
        );
    }

}