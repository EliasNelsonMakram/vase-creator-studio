
# Khnum Architecture

## Vision

A modern, lightweight, renderer-independent computational geometry
engine written in TypeScript.

## Design Principles

1. Immutable value objects
2. Renderer-independent core
3. Mathematical correctness
4. Defensive programming
5. Composition over inheritance
6. Explicit APIs
7. Zero hidden mutable state
8. Small focused classes
9. High unit test coverage
10. Minimal dependencies

## Project Structure

math/
geometry/
mesh/
algorithms/
io/
examples/

## Definition of Done

✓ Builds without warnings
✓ Tests pass
✓ Public API documented
✓ JSDoc complete
✓ Reviewed
✓ Changelog updated
✓ Export files updated

## Coding Standard

- readonly by default
- Object.freeze(this)
- explicit return types
- no any
- descriptive exception messages
- no duplicated mathematics

## Engineering Philosophy

Every class should have a single clear responsibility.

Every algorithm should be expressed as clearly as possible.

Correctness is preferred over cleverness.

Optimize only after measurement.

Readable code is part of the API.

## Performance rule

Never sacrifice API correctness for a micro-optimization unless profiling demonstrates it's necessary.

## Responsabilities

| Class          | Responsibility     |
| -------------- | ------------------ |
| `Vector3`      | Mathematics        |
| `Triangle`     | Topology           |
| `Bounds3`      | Spatial extent     |
| `TriangleMesh` | Geometry container |


## Project conventions

### Constructors never contain algorithms.
Constructors should only:
* validate input
* assign fields
* initialize cached values
* freeze object
* Algorithms belong in methods.

### Exception messages 
Exception messages must tell the developer what happened, what value was received, and what range or condition was expected.

## The "Khnum Pyramid"
                 Algorithms
          (Extrusion, BVH, STL)

              Mesh Layer
      (TriangleMesh, MeshBuilder)

          Geometry Layer
(Bounds3, Plane, Ray, Triangle)

          Mathematics
      (Vector3, Matrix4)

          Engineering
Tests • Docs • Architecture


