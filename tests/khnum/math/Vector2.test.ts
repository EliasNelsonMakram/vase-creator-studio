import { describe, expect, it } from "vitest";
import { Vector2 } from "@/khnum/math";

describe("Vector2", () => {

    it("adds vectors", () => {

        const a = new Vector2(1,2);
        const b = new Vector2(3,4);

        expect(a.add(b)).toEqual(
            new Vector2(4,6)
        );

    });

    it("normalizes", () => {

        const v = new Vector2(3,4);

        expect(
            v.normalize().length()
        ).toBeCloseTo(1);

    });

});