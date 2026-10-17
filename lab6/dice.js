/**
 * Dice module (CST3106 Lab 6)
 * Handles rolling the dice for the Yatzy game.
 * Skeleton version: structure and intended behaviour only.
 */
class Dice {
  /**
   * Sets up a new set of dice.
   * @param {number} count - How many dice are in the set (5 for Yatzy).
   */
  constructor(count) {
    this.count = count;  // how many dice are in this set
    this.values = [];    // the current value of each die (filled in when the dice are rolled)
  }

  /**
   * Rolls one die.
   * @returns {number} A random whole number from 1 to 6.
   */
  roll() {
    return Math.floor(Math.random() * 6) + 1;
  }
}