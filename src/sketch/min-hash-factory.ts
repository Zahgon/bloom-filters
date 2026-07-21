import MinHash, {HashFunction} from './min-hash'
import random from 'lodash/random'

/**
 * Test if a number is a prime number
 * @param x - Number to test
 * @return True if the input is a prime number, False otherwise
 */
function isPrime(x: number): boolean {
    throw new Error("STUB");
}

/**
 * Find the fist prime number superior to a number
 * @param x - Input number
 * @return The fist prime number superior to the input number
 */
function closestPrime(x: number): number {
    throw new Error("STUB");
}

/**
 * A factory to create MinHash sketches using the same set of hash functions.
 *
 * **WARNING**: Only the MinHash produced by the same factory can be compared between them.
 * @author Thomas Minier
 */
export default class MinHashFactory {
  public _nbHashes: number
  public _maxValue: number
  public _hashFunctions: HashFunction[]

  /**
   * Constructor
   * @param nbHashes - Number of hash functions to use for comouting the MinHash signature
   * @param maxValue - The highest value that can be found in the set to compare
   */
  constructor(nbHashes: number, maxValue: number) {
      throw new Error("STUB");
  }

  /**
   * Create a new MinHash set
   * @return A new MinHash set
   */
  public create(): MinHash {
      throw new Error("STUB");
  }
}
