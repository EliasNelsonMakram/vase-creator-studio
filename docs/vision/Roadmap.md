# 🏺 Project Declaration

**Date:** July 12, 2026
**Repository**
`vase-creator-studio`
**Status**
> Active Development
**Release Target**
> v0.1.0-alpha — **Khnum Awakening**

--- 
## KH-000

Project Vision

Geometry with Purpose.

The principles in MANIFESTO.md and ARCHITECTURE.md
take precedence over convenience.

Every engineering decision should support this vision.

---

v0.1 "Khnum Awakening"
-----
✓ Math
✓ Geometry
✓ Mesh foundation

v0.2 "The Potter's Wheel"
-----
□ MeshBuilder
□ STL Import
□ OBJ Import

v0.3 "First Clay"
-----
□ Extrusion
□ Surface generation
□ Mesh repair

v0.4 "Nile"
-----
□ BVH
□ Ray intersection
□ Picking

v1.0 "Creation"
-----
□ Stable API
□ Documentation
□ Examples
□ Benchmarks


or

## v0.1.0-alpha    Potter's Wheel
## v0.2.0          Obelisk
## v0.3.0          Lotus
## v0.4.0          Papyrus
## v0.5.0          Horizon
## v1.0.0          House of Khnum

### KH-012 — TriangleMesh

Status:
✓ Complete

Added:
✓ Immutable mesh container
✓ Defensive copies
✓ Cached bounds
✓ Deep equality
✓ Iterators

Quality:
✓ Build
✓ Tests
✓ Documentation

Impact:

First aggregate root of the geometry engine.
Foundation for all future mesh algorithms.



### KH-013 - MeshBuilder
* Status: ACTIVE
* Date: 2026.07.17
* Mission
Build the first procedural geometry construction API for the Khnum Engine.
* Motto
Immutable output. Fluent construction.
* 
---

🏺 KH-013 — MeshBuilder

STATUS

✓ COMPLETE

Added

✓ Mutable MeshBuilder
✓ Fluent API
✓ Index-returning addVertex()
✓ Immutable build()
✓ Clone support
✓ Clear support

Quality

✓ Build
✓ Tests
✓ Smoke Test
✓ Documentation

Impact

Khnum can now create its own geometry.


---

KH-013.1: Add procedural cube generator

• Added MeshBuilder.cube()
• Added cube validation
• Added cube tests
• Added first procedural geometry example

☐ MeshBuilder.cube()

☐ Tests

☐ Example

☐ Documentation

☐ Build passes

☐ All tests pass

☐ README updated

☐ Tag v0.1.0-alpha
FIRST LIGHT achieved.

---



### KH-014 - MeshStatistics
### KH-015 - Plane
### KH-016 - Ray
### KH-017 - Ray–Triangle Intersection
### KH-018 - STL Import

KH-014  Plane
KH-015  Ray
KH-016  Matrix4
KH-017  Transform
KH-018  Mesh Transformations
KH-019  STL Export
KH-020  STL Import

## 🏺 Roadmap v0.2 — The Geometry Era

v0.2.0

KH-014   Matrix4
KH-015   Transform
KH-016   Ray
KH-017   Plane
KH-018   Mesh Transformations
KH-019   AABB / Ray Intersection
KH-020   STL Export

v0.3.0

Cylinder
Sphere
Lathe
Extrusion
OBJ Import
OBJ Export

v0.4.0

Subdivision
Normals
UV Coordinates
Vertex Colors