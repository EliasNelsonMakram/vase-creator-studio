/**
 * Khnum Engine
 *
 * Copyright (c) 2026 Elias Nelson Makram
 *
 * Licensed under the MIT License.
 */

import { Bounds3 } from "@/khnum";
import { Triangle } from "@/khnum";
import { Vector3 } from "@/khnum";

/**
 * Immutable triangle mesh.
 *
 * A TriangleMesh consists of a collection of vertices and a collection
 * of triangles referencing those vertices by index.
 *
 * The mesh is immutable after construction.
 */
export class TriangleMesh {

    public readonly vertices: readonly Vector3[];
    public readonly triangles: readonly Triangle[];

    private readonly _bounds: Bounds3;

    /**
     * Creates a new immutable triangle mesh.
     *
     * @param vertices Mesh vertices.
     * @param triangles Mesh topology.
     *
     * @throws RangeError if a triangle references an invalid vertex.
     */
    public constructor(
        vertices: readonly Vector3[],
        triangles: readonly Triangle[]
    ) {

        TriangleMesh.validateTriangles(
            vertices,
            triangles
        );

        // Defensive copies
        this.vertices = Object.freeze([...vertices]);
        this.triangles = Object.freeze([...triangles]);

        // Cache expensive values
        this._bounds = TriangleMesh.computeBounds(this.vertices);

        Object.freeze(this);
    }

    /**
     * Creates an empty triangle mesh
     */
    public static empty(): TriangleMesh {
        return new TriangleMesh([], []);
    }
    /**
     * Number of vertices.
     */
    public get vertexCount(): number {
        return this.vertices.length;
    }

    /**
     * Number of triangles.
     */
    public get triangleCount(): number {
        return this.triangles.length;
    }

    /**
     * Cached mesh bounds.
     */
    public get bounds(): Bounds3 {
        return this._bounds;
    }

    /**
     * Returns true if the mesh contains no geometry.
     */
    public isEmpty(): boolean {
        return this.vertexCount === 0;
    }

    /**
     * Returns the requested vertex.
     */
    public vertex(index: number): Vector3 {

        TriangleMesh.validateIndex(
            index,
            this.vertexCount,
            "Vertex"
        );

        return this.vertices[index];
    }

    /**
     * Returns the requested triangle.
     */
    public triangle(index: number): Triangle {

        TriangleMesh.validateIndex(
            index,
            this.triangleCount,
            "Triangle"
        );

        return this.triangles[index];
    }

    /**
     * Returns an iterator over all vertices.
     */
    public *verticesIterator(): IterableIterator<Vector3> {

        for (const vertex of this.vertices) {
            yield vertex;
        }
    }

    /**
     * Returns an iterator over all triangles.
     */
    public *trianglesIterator(): IterableIterator<Triangle> {

        for (const triangle of this.triangles) {
            yield triangle;
        }
    }
    /**
     * Returns true if this mesh is equal to another mesh.
     */
    public equals(other: TriangleMesh): boolean {

        if (this === other) {
            return true;
        }

        if (this.vertexCount !== other.vertexCount) {
            return false;
        }

        if (this.triangleCount !== other.triangleCount) {
            return false;
        }

        for (let i = 0; i < this.vertexCount; i++) {
            if (!this.vertices[i].equals(other.vertices[i])) {
                return false;
            }
        }

        for (let i = 0; i < this.triangleCount; i++) {
            if (!this.triangles[i].equals(other.triangles[i])) {
                return false;
            }
        }

        return true;
    }

    /**
     * Returns a readable string representation.
     */
    public toString(): string {
        return `TriangleMesh(vertices=${this.vertexCount}, triangles=${this.triangleCount})`;
    }

    /**
     * Computes the axis-aligned bounds of the mesh.
     */
    private static computeBounds(
        vertices: readonly Vector3[]
    ): Bounds3 {

        let bounds = Bounds3.empty();

        for (const vertex of vertices) {
            bounds = bounds.expand(vertex);
        }

        return bounds;
    }

    /**
     * Validates that all triangle indices reference existing vertices.
     */
    private static validateTriangles(
        vertices: readonly Vector3[],
        triangles: readonly Triangle[]
    ): void {

        const vertexCount = vertices.length;

        for (let triangleIndex = 0; triangleIndex < triangles.length; triangleIndex++) {

            const triangle = triangles[triangleIndex];

            TriangleMesh.validateVertexReference(
                triangle.a,
                vertexCount,
                triangleIndex
            );

            TriangleMesh.validateVertexReference(
                triangle.b,
                vertexCount,
                triangleIndex
            );

            TriangleMesh.validateVertexReference(
                triangle.c,
                vertexCount,
                triangleIndex
            );
        }
    }

    /**
     * Validates a vertex reference contained in a triangle.
     */
    private static validateVertexReference(
        vertexIndex: number,
        vertexCount: number,
        triangleIndex: number
    ): void {

        if (vertexIndex < 0 || vertexIndex >= vertexCount) {

            throw new RangeError(
                `Triangle ${triangleIndex} references vertex ${vertexIndex}, ` +
                `but valid indices are [0, ${vertexCount - 1}].`
            );
        }
    }

    /**
     * Validates an array index.
     */
    private static validateIndex(
        index: number,
        count: number,
        name: string
    ): void {

        if (!Number.isInteger(index)) {
            throw new TypeError(
                `${name} index must be an integer. Received: ${index}`
            );
        }

        if (index < 0 || index >= count) {
            throw new RangeError(
                `${name} index ${index} is out of range [0, ${count - 1}].`
            );
        }
    }
}