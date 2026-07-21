import {decode, encode} from 'base64-arraybuffer'

const bitsPerWord = 8

export type ExportedBitSet = {
  size: number
  content: string
}

/**
 * A memory-efficient Boolean array. Contains just the minimal operations needed for our Bloom filter implementation.
 *
 * @author David Leppik
 */
export default class BitSet {
  public readonly size: number

  // Uint32Array may be slightly faster due to memory alignment, but this avoids endianness when serializing
  public array: Uint8Array

  /**
   * Constructor. All bits are initially set to false.
   * @param size the number of bits that can be stored. (This is NOT required to be a multiple of 8.)
   */
  constructor(size: number) {
      throw new Error("STUB");
  }

  /**
   * Returns the value of the bit at the given index
   * @param index position of the bit, zero-indexed
   */
  public has(index: number): boolean {
      throw new Error("STUB");
  }

  /**
   * Set the bit to true
   * @param index position of the bit, zero-indexed
   */
  public add(index: number) {
      throw new Error("STUB");
  }

  /**
   * Returns the maximum true bit.
   */
  public max(): number {
      throw new Error("STUB");
  }

  /**
   * Returns the number of true bits.
   */
  public bitCount(): number {
      throw new Error("STUB");
  }

  /**
   * Returns true if the size and contents are identical.
   * @param other another BitSet
   */
  public equals(other: BitSet): boolean {
      throw new Error("STUB");
  }

  /**
   * Returns a JSON-encodable object readable by {@link import}.
   */
  public export(): {size: number; content: string} {
      throw new Error("STUB");
  }

  /**
   * Returns an object written by {@link export}.
   * @param data an object written by {@link export}
   */
  public static import(data: {size: number; content: string}): BitSet {
      throw new Error("STUB");
  }

  /**
   * Returns the index of the maximum bit in the number, or -1 for 0
   * @param bits an unsigned 8-bit number
   * ```js
   * @example
   * BitSet.highBit(0) // returns -1
   * BitSet.highBit(5) // returns 2
   * ```
   */
  public static highBit(bits: number): number {
      throw new Error("STUB");
  }

  /**
   * Returns the number of true bits in the number
   * @param bits an unsigned 8-bit number
   * @example
   * ```js
   * BitSet.countBits(0) // returns 0
   * BitSet.countBits(3) // returns 2
   * ```
   */
  public static countBits(bits: number): number {
      throw new Error("STUB");
  }
}
