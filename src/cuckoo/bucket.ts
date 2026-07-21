import eq from 'lodash/eq'
import indexOf from 'lodash/indexOf'
import * as utils from '../utils'

export type ExportedBucket<T> = {
  _size: number
  _elements: (T | null)[]
  _length: number
}

/**
 * A Bucket is a container of a fixed number of values, used in various bloom filters.
 * @extends Exportable
 * @author Thomas Minier
 * @private
 */
export default class Bucket<T> {
  public _elements: Array<T | null>
  public _size: number
  public _length: number

  /**
   * Constructor
   * @param size - The maximum number of elements in the bucket
   */
  constructor(size: number) {
    this._elements = utils.allocateArray(size, null)
    this._size = size
    this._length = 0
  }

  /**
   * Get the maximum number of element in the bucket
   */
  public get size(): number {
      throw new Error("STUB");
  }

  /**
   * Get the number of elements currenlty in the bucket
   */
  public get length(): number {
      throw new Error("STUB");
  }

  /**
   * Test if the bucket has any space available
   * @return True if te bucket has any space available, False if if its full
   */
  public isFree(): boolean {
      throw new Error("STUB");
  }

  /**
   * Get the index of the first empty slot in the bucket
   * @return The index of the first empty slot, or -1 if the bucket is full
   */
  public nextEmptySlot(): number {
      throw new Error("STUB");
  }

  /**
   * Get the element at the given index in the bucket
   * @param index - The index to access
   * @return The element at the given index
   */
  public at(index: number): T | null {
      throw new Error("STUB");
  }

  /**
   * Try to add an element to the bucket
   * @param element - The element to add in the bucket
   * @return True if the insertion is a success, False if the bucket is full
   */
  add(element: T | null): boolean {
      throw new Error("STUB");
  }

  /**
   * Try to remove an element from the bucket
   * @param element - The element to remove from the bucket
   * @return True if the element has been successfully removed, False if it was not in the bucket
   */
  public remove(element: T): boolean {
      throw new Error("STUB");
  }

  /**
   * Test an element for membership
   * @param element - The element to look for in the bucket
   * @return True is the element is in the bucket, otherwise False
   */
  public has(element: T): boolean {
      throw new Error("STUB");
  }

  /**
   * Set an element at the given index in the bucket
   * @param index - The index at where the element should be inserted
   * @param element - The element to insert
   */
  public set(index: number, element: T | null): void {
      throw new Error("STUB");
  }

  /**
   * Unset the element at the given index
   * @param index - The index of the element that should be unset
   */
  public unset(index: number): void {
      throw new Error("STUB");
  }

  /**
   * Randomly swap an element of the bucket with a given element, then return the replaced element
   * @param element - The element to be inserted
   * @param random - Factory function used to generate random function
   * @return The element that have been swapped with the parameter
   */
  public swapRandom(element: T, random: () => number = Math.random): T | null {
      throw new Error("STUB");
  }

  /**
   * Swap an element of the bucket with a given index and element, then return the replaced element
   * @param index - The index at where the element should be inserted
   * @param element - The element to be inserted
   * @return The element that have been swapped with the parameter
   */
  public swap(index: number, element: T): T | null {
      throw new Error("STUB");
  }

  /**
   * Test if two buckets are equals: they have the same size, length and content
   * @param bucket - The other bucket with which to compare
   * @return True if the two buckets are equals, False otherwise
   */
  public equals(bucket: Bucket<T>): boolean {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedBucket<T> {
      throw new Error("STUB");
  }

  public static fromJSON<U>(element: ExportedBucket<U>): Bucket<U> {
      throw new Error("STUB");
  }
}
