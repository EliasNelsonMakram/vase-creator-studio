/**
 * Khnum Engine
 *
 * Copyright (c) 2026 Elias Nelson Makram
 *
 * Licensed under the MIT License.
 */


/**
 * Represents an immutable triangle by indexing three vertices
 * in a TriangleMesh.
 *
 * Triangle stores topology only. Vertex positions are stored
 * separately in the mesh.
 */
export class Triangle {
    public readonly a: number;
    public readonly b: number;
    public readonly c: number;

    public constructor(a: number, b: number, c: number) {
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
    public get indices(): readonly [number, number, number] {
        return [this.a, this.b, this.c] as const;
    }

    /**
     * Returns true if this triangle references the specified vertex.
     */
    public contains(vertexIndex: number): boolean {
        return (
            this.a === vertexIndex ||
            this.b === vertexIndex ||
            this.c === vertexIndex
        );
    }

    /**
     * Returns true if two or more indices are identical.
     */
    public hasDuplicateIndices(): boolean {
        return (
            this.a === this.b ||
            this.a === this.c ||
            this.b === this.c
        );
    }

    /**
     * Value equality.
     */
    public equals(other: Triangle): boolean {
        return (
            this.a === other.a &&
            this.b === other.b &&
            this.c === other.c
        );
    }

    public toString(): string {
        return `Triangle(${this.a}, ${this.b}, ${this.c})`;
    }

    private static assertInteger(value: number, name: string): void {
        if (!Number.isInteger(value)) {
            throw new TypeError(
                `${name} must be an integer. Received: ${value}`
            );
        }
    }
}