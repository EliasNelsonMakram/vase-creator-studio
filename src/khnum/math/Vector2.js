/**
 * Immutable two-dimensional vector.
 */
export class Vector2 {
    x;
    y;
    static ZERO = new Vector2(0, 0);
    static ONE = new Vector2(1, 1);
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(other) {
        return new Vector2(this.x + other.x, this.y + other.y);
    }
    subtract(other) {
        return new Vector2(this.x - other.x, this.y - other.y);
    }
    multiplyScalar(scalar) {
        return new Vector2(this.x * scalar, this.y * scalar);
    }
    divideScalar(scalar) {
        if (scalar === 0) {
            throw new Error("Division by zero.");
        }
        return new Vector2(this.x / scalar, this.y / scalar);
    }
    dot(other) {
        return this.x * other.x +
            this.y * other.y;
    }
    length() {
        return Math.hypot(this.x, this.y);
    }
    normalize() {
        const len = this.length();
        if (len === 0) {
            return Vector2.ZERO;
        }
        return this.divideScalar(len);
    }
    distanceTo(other) {
        return this.subtract(other).length();
    }
    lerp(other, t) {
        return new Vector2(this.x + (other.x - this.x) * t, this.y + (other.y - this.y) * t);
    }
    equals(other) {
        return this.x === other.x &&
            this.y === other.y;
    }
    toArray() {
        return [
            this.x,
            this.y
        ];
    }
}
