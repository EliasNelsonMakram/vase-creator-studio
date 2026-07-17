import { describe, expect, it } from "vitest";
import {MeshBuilder, Triangle} from "@/khnum";
import {Vector3} from "@/khnum";

describe("Mesh Builder Cube Test", () => {

    it("creates a unit cube", () => {
        const cube = MeshBuilder.cube(1);

        expect(cube.vertexCount).toBe(8);
        expect(cube.triangleCount).toBe(12);
    });

    it("creates a cube of size 2", () => {
        const cube = MeshBuilder.cube(2);

        expect(cube.bounds.min).toEqual(new Vector3(-1, -1, -1));
        expect(cube.bounds.max).toEqual(new Vector3( 1,  1,  1));
    });

    it("creates a half-unit cube", () => {
        const cube = MeshBuilder.cube(0.5);

        expect(cube.bounds.min)
            .toEqual(new Vector3(-0.25, -0.25, -0.25));

        expect(cube.bounds.max)
            .toEqual(new Vector3(0.25, 0.25, 0.25));
    });

    it("throws for zero size", () => {
        expect(() => MeshBuilder.cube(0))
            .toThrow(RangeError);
    });

    it("throws for negative size", () => {
        expect(() => MeshBuilder.cube(-1))
            .toThrow(RangeError);
    });

    it("is centered at the origin", () => {

        const cube = MeshBuilder.cube(1);

        let center = Vector3.ZERO;

        for (const v of cube.vertices) {
            center = center.add(v);
        }

        center = center.divideScalar(cube.vertexCount);

        expect(center.equals(Vector3.ZERO)).toBe(true);
    });

    it("contains eight unique vertices", () => {

        const cube = MeshBuilder.cube(1);

        const vertices = new Set(
            cube.vertices.map(v => v.toArray().join(","))
        );

        expect(vertices.size).toBe(8);
    });

    it("references only valid vertices", () => {

        const cube = MeshBuilder.cube(1);

        for (const t of cube.triangles) {

            expect(t.a).toBeGreaterThanOrEqual(0);
            expect(t.b).toBeGreaterThanOrEqual(0);
            expect(t.c).toBeGreaterThanOrEqual(0);

            expect(t.a).toBeLessThan(cube.vertexCount);
            expect(t.b).toBeLessThan(cube.vertexCount);
            expect(t.c).toBeLessThan(cube.vertexCount);
        }
    });

    it("creates identical cubes", () => {

        const a = MeshBuilder.cube(1);
        const b = MeshBuilder.cube(1);

        expect(a.equals(b)).toBe(true);
    });

    it("creates different cubes for different sizes", () => {

        const a = MeshBuilder.cube(1);
        const b = MeshBuilder.cube(2);

        expect(a.equals(b)).toBe(false);
    });

    it("contains twelve unique triangles", () => {

        const cube = MeshBuilder.cube(1);

        const triangles = new Set(
            cube.triangles.map(
                t => `${t.a},${t.b},${t.c}`
            )
        );

        expect(triangles.size).toBe(12);
    });


});