import { describe, expect, it } from "vitest";
import { Triangle } from "@/khnum";

describe("Triangle", () => {
    it("creates a valid triangle", () => {
        const t = new Triangle(0, 1, 2);

        expect(t.a).toBe(0);
        expect(t.b).toBe(1);
        expect(t.c).toBe(2);
    });

    it("returns indices", () => {
        const t = new Triangle(4, 5, 6);

        expect(t.indices).toEqual([4, 5, 6]);
    });

    it("detects contained vertices", () => {
        const t = new Triangle(3, 8, 10);

        expect(t.contains(3)).toBe(true);
        expect(t.contains(8)).toBe(true);
        expect(t.contains(10)).toBe(true);
        expect(t.contains(99)).toBe(false);
    });

    it("detects duplicate indices", () => {
        expect(new Triangle(0, 1, 2).hasDuplicateIndices()).toBe(false);
        expect(new Triangle(0, 0, 2).hasDuplicateIndices()).toBe(true);
        expect(new Triangle(5, 5, 5).hasDuplicateIndices()).toBe(true);
    });

    it("compares by value", () => {
        expect(
            new Triangle(1, 2, 3).equals(
                new Triangle(1, 2, 3)
            )
        ).toBe(true);

        expect(
            new Triangle(1, 2, 3).equals(
                new Triangle(3, 2, 1)
            )
        ).toBe(false);
    });

    it("formats as text", () => {
        expect(new Triangle(1, 2, 3).toString())
            .toBe("Triangle(1, 2, 3)");
    });

    it("rejects floating-point values", () => {
        expect(() => new Triangle(1.5, 2, 3)).toThrow();
    });

    it("rejects NaN", () => {
        expect(() => new Triangle(Number.NaN, 2, 3)).toThrow();
    });

    it("rejects Infinity", () => {
        expect(() => new Triangle(Number.POSITIVE_INFINITY, 2, 3)).toThrow();
    });
});