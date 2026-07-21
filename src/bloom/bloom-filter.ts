import ClassicFilter from '../interfaces/classic-filter'
import BaseFilter from '../base-filter'
import BitSet, {ExportedBitSet} from './bit-set'
import {optimalFilterSize, optimalHashes} from '../formulas'
import {exportBigInt, importBigInt} from '../utils'
import {ExportedBigInt} from '../types'
import {HashableInput, SeedType} from '../types'

export type ExportedBloomFilter = {
  _size: number
  _nbHashes: number
  _filter: ExportedBitSet
  _seed: ExportedBigInt
}

/**
 * A Bloom filter is a space-efficient probabilistic data structure, conceived by Burton Howard Bloom in 1970,
 * that is used to test whether an element is a member of a set. False positive matches are possible, but false negatives are not.
 *
 * Reference: Bloom, B. H. (1970). Space/time trade-offs in hash coding with allowable errors. Communications of the ACM, 13(7), 422-426.
 * @see {@link http://crystal.uta.edu/~mcguigan/cse6350/papers/Bloom.pdf} for more details about classic Bloom Filters.
 * @author Thomas Minier
 * @author Arnaud Grall
 */
export default class BloomFilter
  extends BaseFilter
  implements ClassicFilter<HashableInput>
{
  public _size: number
  public _nbHashes: number
  public _filter: BitSet

  /**
   * Constructor
   * @param size - The number of cells
   * @param nbHashes - The number of hash functions used
   */
  constructor(size: number, nbHashes: number) {
      throw new Error("STUB");
  }

  /**
   * Create an optimal bloom filter providing the maximum of elements stored and the error rate desired
   * @param  nbItems      - The maximum number of item to store
   * @param  errorRate  - The error rate desired for a maximum of items inserted
   * @return A new {@link BloomFilter}
   */
  public static create(nbItems: number, errorRate: number): BloomFilter {
      throw new Error("STUB");
  }

  /**
   * Build a new Bloom Filter from an existing iterable with a fixed error rate
   * @param items - The iterable used to populate the filter
   * @param errorRate - The error rate, i.e. 'false positive' rate, targeted by the filter
   * @param seed - The random number seed (optional)
   * @return A new Bloom Filter filled with the iterable's elements
   * @example
   * ```js
   * // create a filter with a false positive rate of 0.1
   * const filter = BloomFilter.from(['alice', 'bob', 'carl'], 0.1);
   * ```
   */
  public static from(
    items: Iterable<HashableInput>,
    errorRate: number,
    seed?: SeedType
  ): BloomFilter {
      throw new Error("STUB");
  }

  /**
   * Get the optimal size of the filter
   * @return The size of the filter
   */
  get size(): number {
      throw new Error("STUB");
  }

  /**
   * Get the number of bits currently set in the filter
   * @return The filter length
   */
  public get length(): number {
      throw new Error("STUB");
  }

  /**
   * Add an element to the filter
   * @param element - The element to add
   * @example
   * ```js
   * const filter = new BloomFilter(15, 0.1);
   * filter.add('foo');
   * ```
   */
  public add(element: HashableInput): void {
      throw new Error("STUB");
  }

  /**
   * Test an element for membership
   * @param element - The element to look for in the filter
   * @return False if the element is definitively not in the filter, True is the element might be in the filter
   * @example
   * ```js
   * const filter = new BloomFilter(15, 0.1);
   * filter.add('foo');
   * console.log(filter.has('foo')); // output: true
   * console.log(filter.has('bar')); // output: false
   * ```
   */
  public has(element: HashableInput): boolean {
      throw new Error("STUB");
  }

  /**
   * Get the current false positive rate (or error rate) of the filter
   * @return The current false positive rate of the filter
   * @example
   * ```js
   * const filter = new BloomFilter(15, 0.1);
   * console.log(filter.rate()); // output: something around 0.1
   * ```
   */
  public rate(): number {
      throw new Error("STUB");
  }

  /**
   * Check if another Bloom Filter is equal to this one
   * @param  other - The filter to compare to this one
   * @return True if they are equal, false otherwise
   */
  public equals(other: BloomFilter): boolean {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedBloomFilter {
      throw new Error("STUB");
  }

  public static fromJSON(element: ExportedBloomFilter): BloomFilter {
      throw new Error("STUB");
  }
}
