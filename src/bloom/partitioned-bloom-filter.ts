import BaseFilter from '../base-filter.js'
import ClassicFilter from '../interfaces/classic-filter.js'
import {allocateArray, exportBigInt, importBigInt} from '../utils.js'
import {ExportedBigInt} from '../types.js'
import {HashableInput, SeedType} from '../types.js'
import BitSet, {ExportedBitSet} from './bit-set.js'

export type ExportedPartitionedBloomFilter = {
  _seed: ExportedBigInt
  _bits: number
  _k: number
  _m: number
  _filter: ExportedBitSet[]
  _errorRate: number
}

/**
 * A Partitioned Bloom Filter is a variation of a classic Bloom filter.
 *
 * This filter works by partitioning the M-sized bit array into k slices of size m = M/k bits, k = nb of hash functions in the filter.
 * Each hash function produces an index over m for its respective slice.
 * Thus, each element is described by exactly k bits, meaning the distribution of false positives is uniform across all elements.
 *
 * Be careful, as a Partitioned Bloom Filter have much higher collison risks that a classic Bloom Filter on small sets of data.
 *
 * Reference: Chang, F., Feng, W. C., & Li, K. (2004, March). Approximate caches for packet classification. In INFOCOM 2004. Twenty-third AnnualJoint Conference of the IEEE Computer and Communications Societies (Vol. 4, pp. 2196-2207). IEEE.
 * @see {@link https://pdfs.semanticscholar.org/0e18/e24b37a1f4196fddf8c9ff8e4368b74cfd88.pdf} for more details about Partitioned Bloom Filters
 * @author Thomas Minier & Arnaud Grall
 */
export default class PartitionedBloomFilter
  extends BaseFilter
  implements ClassicFilter<HashableInput>
{
  public _bits: number
  public _k: number
  public _m: number
  public _filter: BitSet[]
  public _errorRate: number

  /**
   * Constructor
   * @param bits - The total number of bits
   * @param nbHashes - The number of hash functions
   * @param errorRate - The expected error rate with respect to bits and nbHashes
   */
  constructor(bits: number, nbHashes: number, errorRate: number) {
    super()
    this._bits = bits
    this._k = nbHashes
    this._errorRate = errorRate
    this._m = Math.ceil(this._bits / this._k)
    this._filter = allocateArray(this._k, () => { throw new Error("STUB"); })
  }

  /**
   * Return a PartitionedBloomFilter for a given number of elements and under a given error rate
   * @param  size - The max allowable number of items to insert
   * @param  errorRate - The desired error rate
   * @return A new PartitionedBloomFilter optimal for the given parameters
   */
  public static create(
    size: number,
    errorRate: number,
    nbHashes?: number
  ): PartitionedBloomFilter {
      throw new Error("STUB");
  }

  /**
   * Build a new Partitioned Bloom Filter from an existing iterable with a fixed error rate
   * @param items - The iterable used to populate the filter
   * @param errorRate - The error rate, i.e. 'false positive' rate, targetted by the filter
   * @return A new Bloom Filter filled with the iterable's elements
   * @example
   * ```js
   * // create a filter with a false positive rate of 0.1
   * const filter = PartitionedBloomFilter.from(['alice', 'bob', 'carl'], 0.1);
   * ```
   */
  public static from(
    items: Iterable<HashableInput>,
    errorRate: number,
    seed?: SeedType
  ): PartitionedBloomFilter {
      throw new Error("STUB");
  }

  /**
   * Get the filter capacity, i.e. the maximum number of elements it can hold
   */
  public get capacity(): number {
      throw new Error("STUB");
  }

  /**
   * Get the size of the filter
   */
  public get size(): number {
      throw new Error("STUB");
  }

  /**
   * Add an element to the filter
   * @param element - The element to add
   * @example
   * ```js
   * const filter = new PartitionedBloomFilter(15, 0.1);
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
   * const filter = new PartitionedBloomFilter(15, 0.1);
   * filter.add('foo');
   * console.log(filter.has('foo')); // output: true
   * console.log(filter.has('bar')); // output: false
   * ```
   */
  public has(element: HashableInput): boolean {
      throw new Error("STUB");
  }

  /**
   * Compute the current false positive rate (or error rate) of the filter
   * @return The current false positive rate of the filter
   * @example
   * ```js
   * const filter = PartitionedBloomFilter.create(15, 0.1);
   * console.log(filter.rate()); // output: something around 0.1
   * ```
   */
  public rate(): number {
      throw new Error("STUB");
  }

  /**
   * Return the current load of this filter; number of bits set by the size
   * @return An float between 0 and 1, where 0 = filter empty and 1 = filter full
   */
  public load(): number {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedPartitionedBloomFilter {
      throw new Error("STUB");
  }

  public static fromJSON(
    element: ExportedPartitionedBloomFilter
  ): PartitionedBloomFilter {
      throw new Error("STUB");
  }
}
