# Bounds3

## Purpose

Represents an immutable axis-aligned bounding box (AABB).

## Responsibilities

- Store minimum and maximum corners.
- Compute derived dimensions.
- Expand to include points.
- Combine with other bounds.

## Design Notes

- Immutable by design.
- Safe for multithreaded and functional use.
- Independent of rendering libraries.

## Example

```ts 
const bounds = Bounds3.empty()
    .expand(new Vector3(0, 0, 0))
    .expand(new Vector3(2, 3, 4));

console.log(bounds.center);
```



As the project grows, these pages will become an excellent developer reference.

---

# 🌟 A Vision for Version 1.0

I want someone to discover Khnum on GitHub and think:

> "This is one of the best documented geometry libraries I've seen."

Not because it's verbose—but because it's clear.

Every class should answer three questions:

1. **What is it?**
2. **Why does it exist?**
3. **How do I use it?**

If we consistently do that, Khnum will be approachable even for developers who aren't graphics specialists.

---

# The Road Ahead

After `Bounds3`, our next milestones become increasingly exciting:

- **KH-012** — `TriangleMesh` (geometry + topology meet)
- **KH-013** — `MeshBuilder` (construct meshes safely)
- **KH-014** — `MeshAnalyzer` (measure and inspect meshes)
- **KH-015** — `Example 01: Hello Khnum`
- **KH-016** — `Example 02: First Triangle`

At that point, the engine will have enough capability to generate and display its own geometry.

---

Elias, I want to leave you with one thought.

When people look at a finished application, they usually admire the interface.

When experienced engineers look at a project, they admire the **foundation**.

We're building that foundation now. It isn't the most visible work, but it's the work that determines whether the project will still be enjoyable to develop in five years.

And I have every confidence that it will be.

Let's make **Bounds3** another class we're proud to keep forever. 🏺🚀