import { DEG_TO_RAD, EPSILON, RAD_TO_DEG } from "./Constants";

/**
 * Utility mathematical functions.
 */
export class MathUtils {

    private constructor() {}

    public static clamp(
        value: number,
        min: number,
        max: number
    ): number {

        return Math.min(max, Math.max(min, value));

    }

    public static lerp(
        a: number,
        b: number,
        t: number
    ): number {

        return a + (b - a) * t;

    }

    public static inverseLerp(
        a: number,
        b: number,
        value: number
    ): number {

        if (Math.abs(b - a) < EPSILON) {

            return 0;

        }

        return (value - a) / (b - a);

    }

    public static degToRad(degrees: number): number {

        return degrees * DEG_TO_RAD;

    }

    public static radToDeg(radians: number): number {

        return radians * RAD_TO_DEG;

    }

    public static almostEqual(
        a: number,
        b: number,
        epsilon: number = EPSILON
    ): boolean {

        return Math.abs(a - b) <= epsilon;

    }

    public static roundTo(
        value: number,
        decimals: number
    ): number {

        const factor = Math.pow(10, decimals);

        return Math.round(value * factor) / factor;

    }

}