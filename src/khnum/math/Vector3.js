export class Vector3 {
    x;
    y;
    z;
    static ZERO = new Vector3(0, 0, 0);
    static ONE = new Vector3(1, 1, 1);
    static UNIT_X = new Vector3(1, 0, 0);
    static UNIT_Y = new Vector3(0, 1, 0);
    static UNIT_Z = new Vector3(0, 0, 1);
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
    add(v) { return new Vector3(this.x + v.x, this.y + v.y, this.z + v.z); }
    subtract(v) { return new Vector3(this.x - v.x, this.y - v.y, this.z - v.z); }
    multiplyScalar(s) { return new Vector3(this.x * s, this.y * s, this.z * s); }
    divideScalar(s) { if (s === 0)
        throw new Error('Division by zero'); return new Vector3(this.x / s, this.y / s, this.z / s); }
    dot(v) { return this.x * v.x + this.y * v.y + this.z * v.z; }
    cross(v) { return new Vector3(this.y * v.z - this.z * v.y, this.z * v.x - this.x * v.z, this.x * v.y - this.y * v.x); }
    length() { return Math.hypot(this.x, this.y, this.z); }
    normalize() { const l = this.length(); return l === 0 ? Vector3.ZERO : this.divideScalar(l); }
    distanceTo(v) { return this.subtract(v).length(); }
    lerp(v, t) { return new Vector3(this.x + (v.x - this.x) * t, this.y + (v.y - this.y) * t, this.z + (v.z - this.z) * t); }
    equals(v) { return this.x === v.x && this.y === v.y && this.z === v.z; }
    toArray() { return [this.x, this.y, this.z]; }
}
