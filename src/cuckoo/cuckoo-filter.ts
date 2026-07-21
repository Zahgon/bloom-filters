import WritableFilter from '../interfaces/writable-filter'
import BaseFilter from '../base-filter'
import Bucket, {ExportedBucket} from './bucket'
import {
  allocateArray,
  bigIntToNumber,
  exportBigInt,
  getBigIntAbs,
  importBigInt,
  randomInt,
} from '../utils'
import {ExportedBigInt} from '../types'
import {HashableInput} from '../types'

export type ExportedCuckooFilter = {
  _size: number
  _fingerprintLength: number
  _length: number
  _maxKicks: number
  _filter: ExportedBucket<string>[]
  _seed: ExportedBigInt
  _bucketSize: number
}

/**
 * Compute the optimal fingerprint length in bytes for a given bucket size
 * and a false positive rate.
 * @param  {int} size - The filter bucket size
 * @param  {int} rate - The error rate, i.e. 'false positive' rate, targetted by the filter
 * @return {int} The optimal fingerprint length in bytes
 * @private
 */
function computeFingerpintLength(size: number, rate: number): number {
    throw new Error("STUB");
}

/**
 * Cuckoo filters improve on Bloom filters by supporting deletion, limited counting,
 * and bounded False positive rate with similar storage efficiency as a standard Bloom filter.
 *
 * Reference: Fan, B., Andersen, D. G., Kaminsky, M., & Mitzenmacher, M. D. (2014, December). Cuckoo filter: Practically better than bloom.
 * In Proceedings of the 10th ACM International on Conference on emerging Networking Experiments and Technologies (pp. 75-88). ACM.
 * @see {@link https://www.cs.cmu.edu/~dga/papers/cuckoo-conext2014.pdf} for more details about Cuckoo filters
 * @author Thomas Minier & Arnaud Grall
 */
export default class CuckooFilter
  extends BaseFilter
  implements WritableFilter<HashableInput>
{
  public _filter: Array<Bucket<string>>
  public _size: number
  public _bucketSize: number
  public _fingerprintLength: number
  public _length: number
  public _maxKicks: number
  /**
   * Constructor
   * @param size - The filter size
   * @param fLength - The length of the fingerprints
   * @param bucketSize - The size of the buckets in the filter
   * @param maxKicks - (optional) The max number of kicks when resolving collision at insertion, default to 1
   */
  constructor(
    size: number,
    fLength: number,
    bucketSize: number,
    maxKicks = 500
  ) {
    super()
    this._filter = allocateArray(size, () => { throw new Error("STUB"); })
    this._size = size
    this._bucketSize = bucketSize
    this._fingerprintLength = fLength
    this._length = 0
    this._maxKicks = maxKicks
  }

  /**
   * Return a new optimal CuckooFilter given the number of maximum elements to store and the error rate desired
   * @param  size - The number of items to store
   * @param  errorRate - The desired error rate
   * @param  bucketSize - The number of buckets desired per cell
   * @param  maxKicks - The number of kicks done when a collision occurs
   * @return A Cuckoo Filter optimal for these parameters
   */
  public static create(
    size: number,
    errorRate: number,
    bucketSize = 4,
    maxKicks = 500
  ): CuckooFilter {
      throw new Error("STUB");
  }

  /**
   * Build a new optimal CuckooFilter from an iterable with a fixed error rate
   * @param items - Iterable used to populate the filter
   * @param errorRate - The error rate of the filter
   * @param  bucketSize - The number of buckets desired per cell
   * @param  maxKicks - The number of kicks done when a collision occurs
   * @return A new Cuckoo Filter filled with the iterable's elements
   */
  public static from(
    items: Iterable<HashableInput>,
    errorRate: number,
    bucketSize = 4,
    maxKicks = 500
  ): CuckooFilter {
      throw new Error("STUB");
  }

  /**
   * Get the filter size
   */
  public get size(): number {
      throw new Error("STUB");
  }

  /**
   * Get the filter full size, i.e., the total number of cells
   */
  public get fullSize(): number {
      throw new Error("STUB");
  }

  /**
   * Get the filter length, i.e. the current number of elements in the filter
   */
  public get length(): number {
      throw new Error("STUB");
  }

  /**
   * Get the length of the fingerprints in the filter
   */
  public get fingerprintLength(): number {
      throw new Error("STUB");
  }

  /**
   * Get the size of the buckets in the filter
   */
  public get bucketSize(): number {
      throw new Error("STUB");
  }

  /**
   * Get the max number of kicks when resolving collision at insertion
   */
  public get maxKicks(): number {
      throw new Error("STUB");
  }

  /**
   * Add an element to the filter, if false is returned, it means that the filter is considered as full.
   * @param element - The element to add
   * @return True if the insertion is a success, False if the filter is full
   * @example
   * ```js
   * const filter = new CuckooFilter(15, 3, 2);
   * filter.add('alice');
   * filter.add('bob');
   * ```
   */
  public add(
    element: HashableInput,
    throwError = false,
    destructive = false
  ): boolean {
      throw new Error("STUB");
  }

  /**
   * Remove an element from the filter
   * @param element - The element to remove
   * @return True if the element has been removed from the filter, False if it wasn't in the filter
   * @example
   * ```js
   * const filter = new CuckooFilter(15, 3, 2);
   * filter.add('alice');
   * filter.add('bob');
   *
   * // remove an element
   * filter.remove('bob');
   * ```
   */
  public remove(element: HashableInput): boolean {
      throw new Error("STUB");
  }

  /**
   * Test an element for membership
   * @param element - The element to look for in the filter
   * @return False if the element is definitively not in the filter, True is the element might be in the filter
   * @example
   * ```js
   * const filter = new CuckooFilter(15, 3, 2);
   * filter.add('alice');
   *
   * console.log(filter.has('alice')); // output: true
   * console.log(filter.has('bob')); // output: false
   * ```
   */
  public has(element: HashableInput): boolean {
      throw new Error("STUB");
  }

  /**
   * Return the false positive rate for this cuckoo filter
   * @return The false positive rate
   */
  public rate(): number {
      throw new Error("STUB");
  }

  /**
   * Return the load of this filter
   * @return {Object} load: is the load, size is the number of entries, free is the free number of entries, used is the number of entry used
   */
  public _computeHashTableLoad() {
      throw new Error("STUB");
  }

  /**
   * For a element, compute its fingerprint and the index of its two buckets
   * @param element - The element to hash
   * @return The fingerprint of the element and the index of its two buckets
   * @private
   */
  public _locations(element: HashableInput) {
      throw new Error("STUB");
  }

  /**
   * Check if another Cuckoo filter is equal to this one
   * @param  filter - The cuckoo filter to compare to this one
   * @return True if they are equal, false otherwise
   */
  public equals(filter: CuckooFilter): boolean {
      throw new Error("STUB");
  }

  /**
   * Save this filter in JSON format
   * @returns
   */
  public saveAsJSON(): ExportedCuckooFilter {
      throw new Error("STUB");
  }

  /**
   * Import a JSON exported filter into a new CuckooFilter instance
   * @param element - The JSON exported object to import
   * @returns
   */
  public static fromJSON(element: ExportedCuckooFilter): CuckooFilter {
      throw new Error("STUB");
  }
}
