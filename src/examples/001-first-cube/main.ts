import {MeshBuilder} from "@/khnum";


const cube = MeshBuilder.cube(1.0);
console.log("🏺 KHNUM ENGINE");
console.log("Geometry with Purpose.");
console.log("Creating cube...");

console.log(cube.vertexCount);
console.log(cube.triangleCount);
console.log(cube.bounds);

console.log("FIRST LIGHT example achieved.");
