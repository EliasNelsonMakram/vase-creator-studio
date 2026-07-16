/**
 * Khnum Engine
 *
 * Copyright (c) 2026 Elias Nelson Makram
 *
 * Licensed under the MIT License.
 */

/**
 * Immutable three-dimensional vector.
 */

export class Vector3 {
    static readonly ZERO = new Vector3(0, 0, 0);
    static readonly ONE = new Vector3(1, 1, 1);
    static readonly UNIT_X = new Vector3(1, 0, 0);
    static readonly UNIT_Y = new Vector3(0, 1, 0);
    static readonly UNIT_Z = new Vector3(0, 0, 1);
    public static readonly POSITIVE_INFINITY =
        new Vector3(
            Number.POSITIVE_INFINITY,
            Number.POSITIVE_INFINITY,
            Number.POSITIVE_INFINITY
        );

    public static readonly NEGATIVE_INFINITY =
        new Vector3(
            Number.NEGATIVE_INFINITY,
            Number.NEGATIVE_INFINITY,
            Number.NEGATIVE_INFINITY
        );
    constructor(public readonly x: number, public readonly y: number, public readonly z: number) {
        Object.freeze(this);
    }

    /**
     * Returns the component-wise minimum of this vector and another.
     */
    public min(other: Vector3): Vector3 {
        return new Vector3(
            Math.min(this.x, other.x),
            Math.min(this.y, other.y),
            Math.min(this.z, other.z)
        );
    }

    /**
     * Returns the component-wise maximum of this vector and another.
     */
    public max(other: Vector3): Vector3 {
        return new Vector3(
            Math.max(this.x, other.x),
            Math.max(this.y, other.y),
            Math.max(this.z, other.z)
        );
    }

    /**
     * Returns the component-wise minimum of two vectors.
     */
    public static min(a: Vector3, b: Vector3): Vector3 {
        return a.min(b);
    }

    /**
     * Returns the component-wise maximum of two vectors.
     */
    public static max(a: Vector3, b: Vector3): Vector3 {
        return a.max(b);
    }

    add(v: Vector3): Vector3 {
        return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z);
    }

    subtract(v: Vector3): Vector3 {
        return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z);
    }

    multiplyScalar(s: number): Vector3 {
        return new Vector3(this.x * s, this.y * s, this.z * s);
    }

    divideScalar(s: number): Vector3 {
        if (s === 0) throw new Error('Division by zero');
        return new Vector3(this.x / s, this.y / s, this.z / s);
    }

    dot(v: Vector3): number {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    cross(v: Vector3): Vector3 {
        return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x);
    }

    length() : number {
        return Math.hypot(this.x, this.y, this.z);
    }

    normalize(): Vector3 {
        const l = this.length();
        return l === 0 ? Vector3.ZERO : this.divideScalar(l);
    }

    distanceTo(v: Vector3):number {
        return this.subtract(v).length();
    }

    lerp(v: Vector3, t: number): Vector3 {
        return new Vector3(this.x + (v.x - this.x) * t, this.y + (v.y - this.y) * t, this.z + (v.z - this.z) * t);
    }

    equals(v: Vector3): boolean {
        return this.x === v.x && this.y === v.y && this.z === v.z;
    }

    toArray(): [number, number, number] {
        return [this.x, this.y, this.z];
    }

    public toString(): string {
        return `Vector3(${this.x}, ${this.y}, ${this.z})`;
    }
}
