import BaseFilter from '../base-filter.js'
import WritableFilter from '../interfaces/writable-filter.js'
import Cell, {ExportedCell} from './cell.js'
import {allocateArray, exportBigInt, importBigInt} from '../utils.js'
import {ExportedBigInt} from '../types.js'
import {xxh3} from '@node-rs/xxhash'
import {SeedType} from '../types.js'

/**
 * The reason why an Invertible Bloom Lookup Table decoding operation has failed
 */
export type IBLTDecodingErrorReason = {
  cells: Cell[]
  iblt: InvertibleBloomFilter
  decoded: number
}

/**
 * The results of decoding an Invertible Bloom Lookup Table
 */
export type IBLTDecodingResults = {
  success: boolean
  reason?: IBLTDecodingErrorReason
  additional: string[]
  missing: string[]
}

export type ExportedInvertibleBloomFilter = {
  _size: number
  _hashCount: number
  _elements: ExportedCell[]
  _differences: number
  _alpha: number
  _seed: ExportedBigInt
}

/**
 * An Invertible Bloom Lookup Table is a space-efficient and probabilistic data-structure for solving the set-difference problem efficiently without the use of logs or other prior context. It computes the set difference with communication proportional to the size of the difference between the sets being compared.
 * They can simultaneously calculate D(A−B) and D(B−A) using O(d) space. This data structure encodes sets in a fashion that is similar in spirit to Tornado codes’ construction [6], in that it randomly combines elements using the XOR function
 * Reference: Eppstein, D., Goodrich, M. T., Uyeda, F., & Varghese, G. (2011). What's the difference? Efficient set reconciliation without prior context. ACM SIGCOMM Computer Communication Review, 41(4), 218-229.
 * @see {@link https://conferences.sigcomm.org/sigcomm/2011/papers/sigcomm/p218.pdf} for more details about Invertible Bloom Lookup Tables
 * @author Arnaud Grall
 * @author Thomas Minier
 */
export default class InvertibleBloomFilter
  extends BaseFilter
  implements WritableFilter<string>
{
  public _size: number
  public _differences: number
  public _alpha: number
  public _hashCount: number
  public _elements: Cell[]

  public static encoder = new TextEncoder()
  public static decoder = new TextDecoder()

  /**
   * Construct an Invertible Bloom Lookup Table
   * @param differences the expected number of differences
   * @param alpha the ratio used for determining the number of cells in the IBLT
   * @param hashCount the number of hash functions used
   * @param seed (Optional) the seed to assign to the IBLT and its cells
   */
  constructor(differences: number, alpha = 2, hashCount = 6, seed?: SeedType) {
      throw new Error("STUB");
  }

  /**
   * Get the number of elements added in the filter
   * Complexity in time: O(alpha*d)
   */
  public get length(): number {
      throw new Error("STUB");
  }

  /**
   * Add an element to the InvertibleBloomFilter
   * @param element - The element to insert
   */
  public add(element: string): void {
      throw new Error("STUB");
  }

  /**
   * Remove an element from the filter
   * @param element - The element to remove
   * @return True if the element has been removed, False otheriwse
   */
  public remove(element: string): boolean {
      throw new Error("STUB");
  }

  /**
   * Test if an item is in the filter.
   * @param  element - The element to test
   * @return False if the element is not in the filter, true if "may be" in the filter.
   */
  public has(element: string): boolean {
      throw new Error("STUB");
  }

  /**
   * List all entries from the filter
   * @return A list of entries in this filter
   */
  public listEntries(): string[] {
      throw new Error("STUB");
  }

  /**
   * Substract the filter with another {@link InvertibleBloomFilter}, and returns the resulting filter.
   * @param  iblt - The filter to substract with
   * @return A new InvertibleBloomFilter which is the XOR of the local and remote one
   */
  public substract(iblt: InvertibleBloomFilter): InvertibleBloomFilter {
      throw new Error("STUB");
  }

  public genHash(element: string): number {
      throw new Error("STUB");
  }

  public genIndexes(element: string): number[] {
      throw new Error("STUB");
  }

  /**
   * Test if the cell is "Pure".
   * A pure cell is a cell with a counter equal to 1 or -1, and the hash of the idSum is equal to the hashSum
   * @return True if the cell is pure, False otherwise
   */
  public isCellPure(cell: Cell): boolean {
      throw new Error("STUB");
  }

  /**
   * Decode an InvertibleBloomFilter based on its substracted version
   * @return The results of the deconding process
   */
  public decode(
    additional: string[] = [],
    missing: string[] = []
  ): IBLTDecodingResults {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedInvertibleBloomFilter {
      throw new Error("STUB");
  }

  public static fromJSON(
    element: ExportedInvertibleBloomFilter
  ): InvertibleBloomFilter {
      throw new Error("STUB");
  }
}
