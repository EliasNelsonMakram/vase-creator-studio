/**
 * Immutable two-dimensional vector.
 */

export class Vector2 {

    public static readonly ZERO = new Vector2(0, 0);

    public static readonly ONE = new Vector2(1, 1);

    constructor(

        public readonly x: number,

        public readonly y: number

    ) {}

    public add(other: Vector2): Vector2 {

        return new Vector2(
            this.x + other.x,
            this.y + other.y
        );

    }

    public subtract(other: Vector2): Vector2 {

        return new Vector2(
            this.x - other.x,
            this.y - other.y
        );

    }

    public multiplyScalar(scalar: number): Vector2 {

        return new Vector2(
            this.x * scalar,
            this.y * scalar
        );

    }

    public divideScalar(scalar: number): Vector2 {

        if (scalar === 0) {

            throw new Error("Division by zero.");

        }

        return new Vector2(
            this.x / scalar,
            this.y / scalar
        );

    }

    public dot(other: Vector2): number {

        return this.x * other.x +
            this.y * other.y;

    }

    public length(): number {

        return Math.hypot(
            this.x,
            this.y
        );

    }

    public normalize(): Vector2 {

        const len = this.length();

        if (len === 0) {

            return Vector2.ZERO;

        }

        return this.divideScalar(len);

    }

    public distanceTo(other: Vector2): number {

        return this.subtract(other).length();

    }

    public lerp(
        other: Vector2,
        t: number
    ): Vector2 {

        return new Vector2(

            this.x + (other.x - this.x) * t,

            this.y + (other.y - this.y) * t

        );

    }

    public equals(other: Vector2): boolean {

        return this.x === other.x &&
            this.y === other.y;

    }

    public toArray(): [number, number] {

        return [
            this.x,
            this.y
        ];

    }

}