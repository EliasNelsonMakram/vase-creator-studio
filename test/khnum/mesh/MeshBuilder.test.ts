import {describe, expect, it} from "vitest";
import {MeshBuilder} from "@/khnum";
import {Vector3} from "@/khnum";

describe("MeshBuilder", () => {
    it("smoke test creates a valid mesh", () => {
        const mesh = new MeshBuilder()

            .vertex(new Vector3(0, 0, 0))
            .vertex(new Vector3(1, 0, 0))
            .vertex(new Vector3(0, 1, 0))

            .triangle(0, 1, 2)

            .build();

        console.log(mesh.vertexCount);
        console.log(mesh.triangleCount);
        console.log(mesh.bounds.toString());

    });
});

