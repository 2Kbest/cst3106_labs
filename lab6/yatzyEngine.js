/**
 * YatzyEngine module (CST3106 Lab 6)
 * Handles the rules and score calculation for the Yatzy game.
 */
class YatzyEngine {
  /**
   * Sets up an empty score table.
   * null means the box hasn't been scored yet.
   */
  constructor() {
    this.scoreTable = {
      // Upper section
      ones: null,
      twos: null,
      threes: null,
      fours: null,
      fives: null,
      sixes: null,
      // Lower section
      onePair: null,
      twoPairs: null,
      threeOfAKind: null,
      fourOfAKind: null,
      smallStraight: null,
      largeStraight: null,
      fullHouse: null,
      chance: null,
      yatzy: null
    };
  }
}