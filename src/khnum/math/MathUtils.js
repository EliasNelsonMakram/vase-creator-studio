import { DEG_TO_RAD, EPSILON, RAD_TO_DEG } from "./Constants";
/**
 * Utility mathematical functions.
 */
export class MathUtils {
    constructor() { }
    static clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }
    static lerp(a, b, t) {
        return a + (b - a) * t;
    }
    static inverseLerp(a, b, value) {
        if (Math.abs(b - a) < EPSILON) {
            return 0;
        }
        return (value - a) / (b - a);
    }
    static degToRad(degrees) {
        return degrees * DEG_TO_RAD;
    }
    static radToDeg(radians) {
        return radians * RAD_TO_DEG;
    }
    static almostEqual(a, b, epsilon = EPSILON) {
        return Math.abs(a - b) <= epsilon;
    }
    static roundTo(value, decimals) {
        const factor = Math.pow(10, decimals);
        return Math.round(value * factor) / factor;
    }
}
