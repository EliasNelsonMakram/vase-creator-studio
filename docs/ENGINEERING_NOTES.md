2026-07-16

Decision:
TriangleMesh performs defensive copies of input arrays.

Reason:
Guarantees immutability.

Alternative considered:
Store array references.

Rejected because:
External mutation would violate the mesh invariants.