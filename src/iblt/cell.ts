import {xorUint8Array} from '../utils.js'

export type ExportedCell = {
  _idSum: number[]
  _hashSum: number
  _count: number
}

/**
 * @internal
 * @private
 * @see InvertibleBloomFilter
 * A cell is composed of an idSum (the XOR of all element inserted in that cell), a hashSum (the XOR of all hashed element in that cell) and a counter (the number of elements inserted in that cell).
 * @author Arnaud Grall
 * @author Thomas Minier
 */
export default class Cell {
  public _idSum: Uint8Array
  public _hashSum: number
  public _count: number

  /**
   * Constructor.
   * To create an empty cell, you might want to use the static Cell#empty() method.
   * @param idSum - The XOR of all element inserted in that cell
   * @param hashSum - The XOR of all hashed elements in that cell
   * @param count - The number of elements inserted in that cell
   */
  constructor(idSum: Uint8Array, hashSum: number, count: number) {
    this._idSum = idSum
    this._hashSum = hashSum
    this._count = count
  }

  /**
   * Create an empty cell
   * @return An empty Cell
   */
  public static empty(): Cell {
      throw new Error("STUB");
  }

  /**
   * Add an element in this cell
   * @param idSum - The element to XOR in this cell
   * @param hashSum - The hash of the element to XOR in this cell
   */
  public add(idSum: Uint8Array, hashSum: number): void {
      throw new Error("STUB");
  }

  /**
   * Perform the XOR operation between this Cell and another one and returns a resulting Cell.
   * A XOR between two cells is the XOR between their id sum and hash sum,
   * and the difference between their count.
   * @param cell - Cell to perform XOR with
   * @return A new Cell, resulting from the XOR operation
   */
  public xorm(cell: Cell): Cell {
      throw new Error("STUB");
  }

  /**
   * Test if the Cell is empty
   * @return True if the Cell is empty, False otherwise
   */
  public isEmpty(): boolean {
      throw new Error("STUB");
  }

  public arrayEqual(a: Uint8Array, b: Uint8Array): boolean {
      throw new Error("STUB");
  }

  /**
   * Test if another Cell is equals to this one
   * @param  cell - The cell to compare with
   * @return True if the two Cells are equals, False otherwise
   */
  public equals(cell: Cell): boolean {
      throw new Error("STUB");
  }

  public saveAsJSON(): ExportedCell {
      throw new Error("STUB");
  }

  public static fromJSON(element: ExportedCell): Cell {
      throw new Error("STUB");
  }
}
