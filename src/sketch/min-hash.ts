import BaseFilter from '../base-filter'
import {ExportedBigInt} from '../types'
import {allocateArray, exportBigInt, importBigInt} from '../utils'

export type ExportedMinHash = {
  _seed: ExportedBigInt
  _nbHashes: number
  _hashFunctions: HashFunction[]
  _signature: number[]
}

/**
 * An error thrown when we try to compute the Jaccard Similarity with an empty MinHash
 * @author Thomas Minier
 */
class EmptyMinHashError extends Error {}

/**
 * The parameters of a Hash function used in the MinHash algorithm
 * @author Thomas Minier
 */
export type HashFunction = {
  a: number
  b: number
  c: number
}

/**
 * Apply a hash function to a number to produce a hash
 * @param x - Value to hash
 * @param fn - HashFunction to apply
 * @return The hashed value
 */
function applyHashFunction(x: number, fn: HashFunction): number {
    throw new Error("STUB");
}

/**
 * MinHash (or the min-wise independent permutations locality sensitive hashing scheme) is a technique for quickly estimating how similar two sets are.
 * It is able to estimate the Jaccard similarity between two large sets of numbers using random hashing.
 *
 * **WARNING**: Only the MinHash produced by the same {@link MinHashFactory} can be compared between them.
 *
 * @see "On the resemblance and containment of documents", by Andrei Z. Broder, in Compression and Complexity of Sequences: Proceedings, Positano, Amalfitan Coast, Salerno, Italy, June 11-13, 1997.
 * @author Thomas Minier
 */
export default class MinHash extends BaseFilter {
  public _nbHashes: number
  public _hashFunctions: HashFunction[]
  public _signature: number[]

  /**
   * Constructor
   * @param nbHashes - Number of hash functions to use for comouting the MinHash signature
   * @param hashFunctions - Hash functions used to compute the signature
   */
  constructor(nbHashes: number, hashFunctions: HashFunction[]) {
    super()
    this._nbHashes = nbHashes
    this._hashFunctions = hashFunctions
    this._signature = allocateArray(this._nbHashes, Infinity)
  }

  /**
   * Get the number of hash functions used by the MinHash
   */
  public get nbHashes(): number {
      throw new Error("STUB");
  }

  /**
   * Test if the signature of the MinHash is empty
   * @return True if the MinHash is empty, False otherwise
   */
  public isEmpty(): boolean {
      throw new Error("STUB");
  }

  /**
   * Insert a value into the MinHash and update its signature.
   * @param value - Value to insert
   */
  public add(value: number): void {
      throw new Error("STUB");
  }

  /**
   * Ingest a set of values into the MinHash, in an efficient manner, and update its signature.
   * @param values - Set of values to load
   */
  public bulkLoad(values: number[]): void {
      throw new Error("STUB");
  }

  /**
   * Estimate the Jaccard similarity coefficient with another MinHash signature
   * @param other - MinHash to compare with
   * @return The estimated Jaccard similarity coefficient between the two sets
   */
  public compareWith(other: MinHash): number {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedMinHash {
      throw new Error("STUB");
  }

  public static fromJSON(element: ExportedMinHash): MinHash {
      throw new Error("STUB");
  }
}
