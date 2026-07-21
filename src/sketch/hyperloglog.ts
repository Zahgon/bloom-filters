import BaseFilter from '../base-filter.js'
import {allocateArray, exportBigInt, importBigInt} from '../utils.js'
import {ExportedBigInt, HashableInput} from '../types.js'
import {xxh3} from '@node-rs/xxhash'

// 2^32, computed as a constant as we use it a lot in the HyperLogLog algorithm
const TWO_POW_32 = 2 ** 32

/**
 * Estimlate the bias-correction constant, denoted alpha in the algorithm, based on the number of registers.
 * As alpha is pretty expensive to compute, we estimate it with the formula from Flajolet et al.
 * @param m - Number of registers in the HyperLogLog algorithm
 * @return The estimated bias-correction constant
 */
function computeAlpha(m: number): number {
    throw new Error("STUB");
}

export type ExportedHyperLogLog = {
  _seed: ExportedBigInt
  _m: number
  _b: number
  _correctionBias: number
  _registers: number[]
}

/**
 * HyperLogLog is an algorithm for the count-distinct problem, approximating the number of distinct elements in a multiset.
 * @see HyperLogLog: the analysis of a near-optimal cardinality estimation algorithm {@link http://algo.inria.fr/flajolet/Publications/FlFuGaMe07.pdf}
 * @author Thomas Minier
 */
export default class HyperLogLog extends BaseFilter {
  /**
   * The number of registers, denoted m in the algorithm
   */
  public _m: number

  /**
   * Number of bits to take per hash, denoted b in the algorithm (b = log2(m))
   */
  public _b: number

  /**
   * The bias-correction constant, denoted alpha in the algorithm
   */
  public _correctionBias: number

  /**
   * The registers used to store data
   */
  public _registers: number[]

  /**
   * Hash size in bits of the hash function used.
   * We use 64-bits hash function to avoid collisions for bigger sets but a 32-bits like the standard one would be enough for most cases
   */
  public HASH_SIZE = 64

  /**
   * Constructor
   * @param nbRegisters - The number of registers to use; should be a power of 2: 2^b with b in [4..16]
   */
  constructor(nbRegisters: number) {
      throw new Error("STUB");
  }

  /**
   * Get the number of registers used by the HyperLogLog
   */
  public get nbRegisters(): number {
      throw new Error("STUB");
  }

  /**
   * Update The multiset with a new element
   * @param element - Element to add
   */
  public update(element: HashableInput): void {
      throw new Error("STUB");
  }

  /**
   * Estimate the cardinality of the multiset
   * @return The estimated cardinality of the multiset
   */
  public count(round = false): number {
      throw new Error("STUB");
  }

  /**
   * Compute the relative error of this filter: +/- 1.04/sqrt(m)
   * @return The relative error
   */
  public relative_error(): number {
      throw new Error("STUB");
  }

  /**
   * Perform the union with another HyperLogLog multiset
   * @param other - Multiset ot merge with
   * @return The union of the two multisets
   */
  public merge(other: HyperLogLog): HyperLogLog {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedHyperLogLog {
      throw new Error("STUB");
  }

  public static fromJSON(element: ExportedHyperLogLog): HyperLogLog {
      throw new Error("STUB");
  }
}
