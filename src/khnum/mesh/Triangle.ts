/**
 * References three vertices of a mesh.
 *
 * The values are indices into TriangleMesh.vertices.
 */
export class Triangle {

    constructor(
        public readonly a: number,
        public readonly b: number,
        public readonly c: number
    ) {

        if (a < 0 || b < 0 || c < 0) {
            throw new Error("Triangle indices must be non-negative.");
        }
    }

    public toArray(): [number, number, number] {
        return [this.a, this.b, this.c];
    }
}