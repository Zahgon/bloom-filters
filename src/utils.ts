import {ExportedBigInt} from './types'

/**
 * Create a new array fill with a base value
 * @param size - The size of the array
 * @param defaultValue - The default value used to fill the array. If it's a function, it will be invoked to get the default value.
 * @return A newly allocated array
 * @memberof Utils
 */
export function allocateArray<T>(
  size: number,
  defaultValue: T | (() => T)
): Array<T> {
    throw new Error("STUB");
}

/**
 * Generate a random int between two bounds (included)
 * @param min - The lower bound
 * @param max - The upper bound
 * @param random - Function used to generate random floats
 * @return A random int bewteen lower and upper bound (included)
 * @memberof Utils
 * @author Thomas Minier
 */
export function randomInt(
  min: number,
  max: number,
  random?: () => number
): number {
    throw new Error("STUB");
}

/**
 * Return the default seed used in the package
 * @return A seed as a big integer
 * @author Arnaud Grall
 */
export function getDefaultSeed(): bigint {
    throw new Error("STUB");
}

/**
 * Return the non-destructive XOR of two Uint8Array
 * @param a - The Uint8Array to copy, then to xor with b
 * @param b - The Uint8Array to xor with
 * @return The results of the XOR between the two Uint8Array
 * @author Arnaud Grall
 */
export function xorUint8Array(a: Uint8Array, b: Uint8Array): Uint8Array {
    throw new Error("STUB");
}

/**
 * Return the absolute value of a bigint
 * @param n
 * @returns
 */
export function getBigIntAbs(n: bigint): bigint {
    throw new Error("STUB");
}

/**
 * Export a bigint into a serializable format
 * @param value
 * @returns
 */
export function exportBigInt(value: bigint): ExportedBigInt {
    throw new Error("STUB");
}

/**
 * Import a serialized bigint into a Bigint
 * @param value
 * @returns
 */
export function importBigInt(value: ExportedBigInt) {
    throw new Error("STUB");
}

const max = 2n ** (64n - 1n) - 1n
/**
 * Transform a BigInt into a number. It must be a signed 64-bit integer otherwise it will throw an error.
 * @param int
 * @returns
 * @throws Number doesn't fit in signed 64-bit integer!
 */
export function bigIntToNumber(int: bigint): number {
    throw new Error("STUB");
}
