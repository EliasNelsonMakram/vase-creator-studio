/**
 * Represents an immutable triangle by indexing three vertices
 * in a TriangleMesh.
 *
 * Triangle stores topology only. Vertex positions are stored
 * separately in the mesh.
 */
export class Triangle {
    a;
    b;
    c;
    constructor(a, b, c) {
        Triangle.assertInteger(a, "a");
        Triangle.assertInteger(b, "b");
        Triangle.assertInteger(c, "c");
        this.a = a;
        this.b = b;
        this.c = c;
        Object.freeze(this);
    }
    /**
     * Returns the three vertex indices.
     */
    get indices() {
        return [this.a, this.b, this.c];
    }
    /**
     * Returns true if this triangle references the specified vertex.
     */
    contains(vertexIndex) {
        return (this.a === vertexIndex ||
            this.b === vertexIndex ||
            this.c === vertexIndex);
    }
    /**
     * Returns true if two or more indices are identical.
     */
    hasDuplicateIndices() {
        return (this.a === this.b ||
            this.a === this.c ||
            this.b === this.c);
    }
    /**
     * Value equality.
     */
    equals(other) {
        return (this.a === other.a &&
            this.b === other.b &&
            this.c === other.c);
    }
    toString() {
        return `Triangle(${this.a}, ${this.b}, ${this.c})`;
    }
    static assertInteger(value, name) {
        if (!Number.isInteger(value)) {
            throw new TypeError(`${name} must be an integer. Received: ${value}`);
        }
    }
}
