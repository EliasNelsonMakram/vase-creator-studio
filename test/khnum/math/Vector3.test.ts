import {describe, it, expect} from 'vitest';
import {Vector3} from "@/khnum";

describe('Vector3', () => {
    it('add', () => {
        expect(new Vector3(1, 2, 3).add(new Vector3(2, 3, 4))).toEqual(new Vector3(3, 5, 7));
    });
});

describe("Vector3.min()", () => {

    it("returns component-wise minimum", () => {

        const a = new Vector3(5, -2, 7);
        const b = new Vector3(3, 10, 1);

        expect(a.min(b)).toEqual(
            new Vector3(3, -2, 1)
        );
    });

});

describe("Vector3.max()", () => {

    it("returns component-wise maximum", () => {

        const a = new Vector3(5, -2, 7);
        const b = new Vector3(3, 10, 1);

        expect(a.max(b)).toEqual(
            new Vector3(5, 10, 7)
        );
    });

});

describe("Vector3 static helpers", () => {

    it("Vector3.min()", () => {

        const a = new Vector3(5, -2, 7);
        const b = new Vector3(3, 10, 1);

        expect(Vector3.min(a, b))
            .toEqual(new Vector3(3, -2, 1));
    });

    it("Vector3.max()", () => {

        const a = new Vector3(5, -2, 7);
        const b = new Vector3(3, 10, 1);

        expect(Vector3.max(a, b))
            .toEqual(new Vector3(5, 10, 7));
    });

});