import BaseFilter from '../base-filter'
import {ExportedBigInt, SeedType} from '../types'
import {exportBigInt, importBigInt} from '../utils'
import CountMinSketch, {ExportedCountMinSketch} from './count-min-sketch'
import sortedIndexBy from 'lodash/sortedIndexBy'

/**
 * An element in a MinHeap
 * @author Thomas Minier
 */
type HeapElement = {
  value: string
  frequency: number
}

/**
 * An element in a TopK
 * @author Thomas Minier
 */
export type TopkElement = HeapElement & {
  rank: number
}

export type ExportedMinHeap = {
  _content: HeapElement[]
}

/**
 * A MinHeap stores items sorted by ascending frequency
 * @author Thomas Minier
 */
export class MinHeap {
  public _content: HeapElement[]

  constructor() {
    this._content = []
  }

  /**
   * Get the number of items in the heap
   */
  public get length() {
      throw new Error("STUB");
  }

  public get content() {
      throw new Error("STUB");
  }

  public set content(value: HeapElement[]) {
      throw new Error("STUB");
  }

  /**
   * Access an item at a given index
   * @param index - Index of the item
   * @return The item or `undefined` if the index is out of the array
   */
  public get(index: number): HeapElement | undefined {
      throw new Error("STUB");
  }

  /**
   * Add a new element to the heap and keep items sorted by ascending frequency
   * @param element - Element to insert
   */
  public add(element: HeapElement) {
      throw new Error("STUB");
  }

  /**
   * Remove an item at a given index and keep items sorted by ascending frequency
   * @param index - Index of the item to remove
   */
  public remove(index: number): void {
      throw new Error("STUB");
  }

  /**
   * Remove and returns the element with the smallest frequency in the heap
   * @return The element with the smallest frequency in the heap
   */
  public popMin(): HeapElement | undefined {
      throw new Error("STUB");
  }

  /**
   * Get the index of an element by its value
   * @param value - Value of the element to search for
   * @return Index of the element or -1 if it is not in the heap
   */
  public indexOf(value: string): number {
      throw new Error("STUB");
  }

  /**
   * Clear the content of the heap
   */
  public clear() {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedMinHeap {
      throw new Error("STUB");
  }

  public static fromJSON(element: ExportedMinHeap): MinHeap {
      throw new Error("STUB");
  }
}

export type ExportedTopK = {
  _seed: ExportedBigInt
  _k: number
  _errorRate: number
  _accuracy: number
  _sketch: ExportedCountMinSketch
  _heap: ExportedMinHeap
}

/**
 * A TopK computes the ranking of elements in a multiset (by an arbitrary score) and returns the `k` results with the highest scores.
 * This implementation of the TopK problem sorts items based on their estimated cardinality in the multiset.
 * It is based on a Count Min Sketch, for estimating the cardinality of items, and a MinHeap, for implementing a sliding window over the `k` results with the highest scores.
 * @author Thomas Minier
 * @author Arnaud Grall
 */
export default class TopK extends BaseFilter {
  public _k: number
  public _errorRate: number
  public _accuracy: number
  public _sketch: CountMinSketch
  public _heap: MinHeap

  /**
   * Constructor
   * @param k - How many elements to store
   * @param errorRate - The error rate
   * @param accuracy  - The probability of accuracy
   * @param seed - The seed to use (optional)
   */
  constructor(k: number, errorRate: number, accuracy: number, seed?: SeedType) {
      throw new Error("STUB");
  }

  /**
   * Add an element to the TopK
   * @param element - Element to add
   */
  public add(element: string, count = 1): void {
      throw new Error("STUB");
  }

  /**
   * Clear the content of the TopK
   */
  public clear(): void {
      throw new Error("STUB");
  }

  /**
   * Get the top-k values as an array of objects {value: string, frequency: number, rank: number}
   * @return The top-k values as an array of objects {value: string, frequency: number, rank: number}
   */
  public values(): TopkElement[] {
      throw new Error("STUB");
  }

  /**
   * Get the top-k values as an iterator that yields objects {value: string, frequency: number, rank: number}.
   * WARNING: With this method, values are produced on-the-fly, hence you should not modify the TopK
   * while the iteration is not completed, otherwise the generated values may not respect the TopK properties.
   * @return The top-k values as an iterator of object {value: string, frequency: number, rank: number}
   */
  public iterator(): Iterator<TopkElement> {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedTopK {
      throw new Error("STUB");
  }

  public static fromJSON(element: ExportedTopK): TopK {
      throw new Error("STUB");
  }
}
