import ClassicFilter from '../interfaces/classic-filter.js'
import BaseFilter from '../base-filter.js'
import {HashableInput, SeedType} from '../types.js'
import PartitionBloomFilter, {
  ExportedPartitionedBloomFilter,
} from './partitioned-bloom-filter.js'
import seedrandom from 'seedrandom'
import {exportBigInt, importBigInt} from '../utils.js'
import {ExportedBigInt} from '../types.js'

export type ExportedScalableBloomFilter = {
  _seed: ExportedBigInt
  _initial_size: number
  _initial_error_rate: number
  _ratio: number
  _filters: ExportedPartitionedBloomFilter[]
}

/**
 * A Scalable Bloom Filter is a variant of Bloom Filters that can adapt dynamically to the
number of elements stored, while assuring a maximum false positive probability
 *
 * Reference: ALMEIDA, Paulo Sérgio, BAQUERO, Carlos, PREGUIÇA, Nuno, et al. Scalable bloom filters. Information Processing Letters, 2007, vol. 101, no 6, p. 255-261.
 * @see {@link https://citeseerx.ist.psu.edu/viewdoc/download?doi=10.1.1.725.390&rep=rep1&type=pdf}
 * @author Thomas Minier & Arnaud Grall
 */
export default class ScalableBloomFilter
  extends BaseFilter
  implements ClassicFilter<HashableInput>
{
  /**
   * Static value, will power the size of the new set, by default we will follow a power of 2.
   */
  public static _s = 2

  /**
   * The initial size of this filter in number of elements, not in bits.
   */
  public _initial_size: number

  /**
   * The initial error rate desired.
   */
  public _initial_error_rate: number

  /**
   * The tightening error probability ratio, each new filter will get its new error rate decrease by this ratio
   * Default: DEFAULT_RATIO=0.8
   */
  public _ratio: number

  /**
   * Default rato 0.8 - 0.9
   * Citation: "We will see below that choosing r around 0.8 – 0.9 will
   * result in better average space usage for wide ranges of growth."
   */
  public static DEFAULT_RATIO = 0.8

  /**
   * Internal Partition Bloom Filters
   */
  public _filters: PartitionBloomFilter[] = []

  constructor(
    _initial_size = 128,
    _initial_error_rate = 0.001,
    _ratio = ScalableBloomFilter.DEFAULT_RATIO
  ) {
      throw new Error("STUB");
  }

  /**
   * @override
   * Return the current seed.
   * For obscure reason we must code this function...
   */
  public get seed() {
      throw new Error("STUB");
  }

  /**
   * @override
   * Set the seed for this structure. If you override the seed after adding data,
   * all the filters will be updated and you may get wrong indexes for already indexed data
   * due to the seed change. So only change it once before adding data.
   * @param  seed the new seed that will be used in this structure
   */
  public set seed(seed: SeedType) {
      throw new Error("STUB");
  }

  /**
   * Get the current filter to use
   */
  public get current(): PartitionBloomFilter {
      throw new Error("STUB");
  }

  public addFilter() {
      throw new Error("STUB");
  }

  /**
   * Add a new element to the filter
   * @param element
   */
  public add(element: HashableInput) {
      throw new Error("STUB");
  }

  /**
   * Return True if the element has been found, false otherwise.
   * Check until we found the value in a filter otherwise stop on the first value found.
   * @param element
   * @returns
   */
  public has(element: HashableInput) {
      throw new Error("STUB");
  }

  /**
   * Return the capacity of this filter
   * @returns
   */
  public capacity(): number {
      throw new Error("STUB");
  }

  /**
   * Return the current false positive rate of this structure
   * @returns
   */
  public rate(): number {
      throw new Error("STUB");
  }

  /**
   * Create a Scalable Bloom Filter based on Partitioned Bloom Filter.
   * @param _size the starting size of the filter
   * @param _error_rate ther error rate desired of the filter
   * @param _ratio the tightening ration
   * @returns
   */
  public static create(
    _size: number,
    _error_rate: number,
    _ratio = ScalableBloomFilter.DEFAULT_RATIO
  ) {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedScalableBloomFilter {
      throw new Error("STUB");
  }

  public static fromJSON(
    element: ExportedScalableBloomFilter
  ): ScalableBloomFilter {
      throw new Error("STUB");
  }
}
