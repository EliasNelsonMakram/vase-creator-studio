import { Vector2, Vector3 } from "@/khnum/math";
import { Bounds3 } from "./Bounds3";
import { Triangle } from "./Triangle";

/**
 * Renderer-independent triangle mesh.
 */
export class TriangleMesh {

    public readonly vertices: Vector3[] = [];

    public readonly triangles: Triangle[] = [];

    public readonly normals: Vector3[] = [];

    public readonly uvs: Vector2[] = [];

    public get vertexCount(): number {
        return this.vertices.length;
    }

    public get triangleCount(): number {
        return this.triangles.length;
    }

    public get isEmpty(): boolean {
        return this.vertices.length === 0;
    }

    public computeBounds(): Bounds3 {

        if (this.isEmpty) {
            throw new Error("Cannot compute bounds of an empty mesh.");
        }

        let minX = this.vertices[0].x;
        let minY = this.vertices[0].y;
        let minZ = this.vertices[0].z;

        let maxX = minX;
        let maxY = minY;
        let maxZ = minZ;

        for (const v of this.vertices) {

            minX = Math.min(minX, v.x);
            minY = Math.min(minY, v.y);
            minZ = Math.min(minZ, v.z);

            maxX = Math.max(maxX, v.x);
            maxY = Math.max(maxY, v.y);
            maxZ = Math.max(maxZ, v.z);
        }

        return new Bounds3(
            new Vector3(minX, minY, minZ),
            new Vector3(maxX, maxY, maxZ)
        );
    }
}