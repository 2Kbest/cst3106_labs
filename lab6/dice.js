/**
 * Dice module (CST3106 Lab 6)
 * Handles rolling the dice for the Yatzy game.
 */
class Dice {
  /**
   * Sets up a new set of dice.
   * @param {number} count - How many dice are in the set (5 for Yatzy).
   */
  constructor(count) {
    this.count = count;  // how many dice are in this set
    this.values = [];    // what each die shows after a roll (empty until the first roll)
  }

  /**
   * Rolls one die.
   * @returns {number} A random whole number from 1 to 6.
   */
  roll() {
    return Math.floor(Math.random() * 6) + 1;
  }

  /**
   * Rolls every die in the set and remembers the results.
   * @returns {number[]} The new values, for example [3, 6, 1, 6, 2].
   */
  rollAll() {
    this.values = [];  // clear the last roll so old dice don't pile up
    for (let i = 0; i < this.count; i++) {
      this.values.push(this.roll());  // roll one die and add it to the list
    }
    return this.values;
  }
}