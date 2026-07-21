import BaseFilter from '../base-filter.js'
import {allocateArray, exportBigInt, importBigInt} from '../utils.js'
import {ExportedBigInt} from '../types.js'
import {HashableInput, SeedType} from '../types.js'
import {xxh3} from '@node-rs/xxhash'

export type XorSize = 8 | 16 | 32 | 64
export type ExportedXorFilter = {
  _filter: ExportedBigInt[]
  _bits: XorSize
  _size: number
  _blockLength: number
  _seed: ExportedBigInt
}

/**
 * XOR-Filter for 8/16/32/64-bits fingerprint length.
 * To use for fixed sets of elements only
 * Inspired by java impl.
 * @see https://github.com/FastFilter/fastfilter_java/blob/master/fastfilter/src/main/java/org/fastfilter/xor/Xor8.java
 * @author Arnaud GRALL
 * @example
 * ```js
 * let xor = new XorFilter(1) // store by default 8-bits fingerprints
 * xor = new XorFilter(1, 16) // store 16-bits fingerprints
 * xor = new XorFilter(1, 32) // store 3é-bits fingerprints
 * xor = new XorFilter(1, 64) // store 64-bits fingerprints
 * xor.add(['a'])
 * xor.has('a') // true
 * xor.has('b') // false
 * ```
 */
export default class XorFilter extends BaseFilter {
  public ALLOWED_FINGERPRINT_SIZES: XorSize[] = [8, 16, 32, 64]
  public HASHES = 3
  public OFFSET = 32
  public FACTOR_TIMES_100 = 123
  public MAX_ITERATIONS = 100 // 2 ** 10 // 1024

  /**
   * Buffer array of fingerprints
   */
  public _filter: bigint[]

  /**
   * Number of bits per fingerprint
   */
  public _bits: XorSize = 8

  /**
   * Number of elements inserted in the filter
   */
  public _size: number

  /**
   * Size of each block (filter size / HASHES)
   */
  public _blockLength: number

  /**
   * Create an empty XorFilter for a number of `size` elements.
   * The fingerprint length can be choosen
   * @param size
   * @param bits_per_fingerprint
   */
  constructor(size: number, bits_per_fingerprint: XorSize = 8) {
      throw new Error("STUB");
  }

  /**
   * Return False if the element is not in the filter, True if it might be in the set with certain probability.
   * @param element
   * @returns
   */
  public has(element: HashableInput): boolean {
      throw new Error("STUB");
  }

  /**
   * Add elements to the filter, modify the filter in place.
   * Warning: Another call will override the previously created filter.
   * @param elements
   */
  public add(elements: HashableInput[]) {
      throw new Error("STUB");
  }

  /**
   * @internal
   * @private
   */
  public _hash64(element: HashableInput, seed: SeedType): bigint {
      throw new Error("STUB");
  }

  /**
   * @internal
   * @private
   */
  public _createHx(index: number, hash: bigint, blockLength: number): number {
      throw new Error("STUB");
  }

  /**
   * Create the filter representing the elements to store.
   * @param elements array of elements to add in the filter
   * @returns
   */
  public _create(elements: HashableInput[]) {
      throw new Error("STUB");
  }

  /**
   * Return a XorFilter for a specified set of elements
   * @param elements
   * @param bits_per_fingerprint
   * @returns
   */
  public static create(
    elements: HashableInput[],
    bits_per_fingerprint: XorSize = 8
  ): XorFilter {
      throw new Error("STUB");
  }

  /**
   * @internal
   * @private
   * Return the optimal xor filter size
   * @param size
   * @returns
   */
  public _getOptimalFilterSize(size: number): number {
      throw new Error("STUB");
  }

  /**
   * @internal
   * @private
   * Generate the fingerprint of the hash
   * @param hash hash of the element
   * @returns
   */
  public _fingerprint(hash: bigint): bigint {
      throw new Error("STUB");
  }

  /**
   * Return this filter as in JSON
   * @returns
   */
  public saveAsJSON(): ExportedXorFilter {
      throw new Error("STUB");
  }

  /**
   * Import this filter from JSON
   * @returns
   */
  public static fromJSON(element: ExportedXorFilter): XorFilter {
      throw new Error("STUB");
  }
}
