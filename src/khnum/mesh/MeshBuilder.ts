import { Triangle } from "@/khnum";
import { TriangleMesh } from "@/khnum";
import { Vector3 } from "@/khnum";

const V000 = 0;
const V100 = 1;
const V110 = 2;
const V010 = 3;
const V001 = 4;
const V101 = 5;
const V111 = 6;
const V011 = 7;

/**
 * Mutable builder for creating immutable TriangleMesh instances.
 */
export class MeshBuilder {

    private readonly _vertices: Vector3[] = [];
    private readonly _triangles: Triangle[] = [];

    /**
     * Creates a cube centered at the origin.
     *
     * @param size Edge length of the cube.
     * @returns Immutable cube mesh.
     *
     * @throws RangeError if size <= 0.
     */
    public static cube(size: number): TriangleMesh {

        if (size <= 0) {
            throw new RangeError(
                `Cube size must be greater than zero. Received: ${size}`
            );
        }

        const h = size / 2;

        const builder = new MeshBuilder();

        // Vertices
        builder
            .vertex(new Vector3(-h, -h, -h)) // 0
            .vertex(new Vector3( h, -h, -h)) // 1
            .vertex(new Vector3( h,  h, -h)) // 2
            .vertex(new Vector3(-h,  h, -h)) // 3
            .vertex(new Vector3(-h, -h,  h)) // 4
            .vertex(new Vector3( h, -h,  h)) // 5
            .vertex(new Vector3( h,  h,  h)) // 6
            .vertex(new Vector3(-h,  h,  h)); // 7

        // Back
        builder.triangle(V000 , V110, V100);
        builder.triangle(V000 , V010, V110);

        // Front
        builder.triangle(V001, V101, V111);
        builder.triangle(V001, V111, V011);

        // Left
        builder.triangle(V000 , V011, V010);
        builder.triangle(V000, V001, V011);

        // Right
        builder.triangle(V100, V110, V111);
        builder.triangle(V100, V111, V101);

        // Bottom
        builder.triangle(V000 , V100, V101);
        builder.triangle(V000 , V101, V001);

        // Top
        builder.triangle(V010, V011, V111);
        builder.triangle(V010, V111, V110);

        return builder.build();
    }

    /**
     * Removes all geometry from the builder.
     */
    public clear(): MeshBuilder {

        this._vertices.length = 0;
        this._triangles.length = 0;

        return this;
    }

    /**
     * Fluent vertex addition.
     */
    public vertex(vertex: Vector3): MeshBuilder {

        this.addVertex(vertex);

        return this;
    }

    /**
     * Fluent triangle addition.
     */
    public triangle(
        a: number,
        b: number,
        c: number
    ): MeshBuilder {

        this.addTriangle(a, b, c);

        return this;
    }

    /**
     * Adds a vertex and returns its index.
     */
    public addVertex(vertex: Vector3): number {

        const index = this._vertices.length;

        this._vertices.push(vertex);

        return index;
    }

    /**
     * Adds a triangle.
     */
    public addTriangle(
        a: number,
        b: number,
        c: number
    ): MeshBuilder {

        this._triangles.push(
            new Triangle(a, b, c)
        );

        return this;
    }

    /**
     * Number of vertices currently stored.
     */
    public get vertexCount(): number {
        return this._vertices.length;
    }

    /**
     * Number of triangles currently stored.
     */
    public get triangleCount(): number {
        return this._triangles.length;
    }

    /**
     * Creates an immutable mesh.
     */
    public build(): TriangleMesh {

        return new TriangleMesh(
            this._vertices,
            this._triangles
        );
    }

    /**
     * Creates a copy of this builder.
     */
    public clone(): MeshBuilder {

        const builder = new MeshBuilder();

        builder._vertices.push(...this._vertices);
        builder._triangles.push(...this._triangles);

        return builder;
    }
}