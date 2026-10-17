# Lab 6: Yatzy Game Modules

Skeleton modules for a single-player Yatzy game, written in JavaScript.
Each module shows its structure and planned behaviour. The full logic
will be added in Assignment 1.

## 1. Review and Refinement

I reviewed the rolling dice example from Lecture 5. Its rolling logic
was mixed in with the page code. As a refinement, I moved the rolling
into its own `Dice` class, so it can be reused and tested separately
from the page.

## 2. Design Decisions

- **Dice:** 5 six-sided dice.
- **Scoring categories (15):**
  - Upper section: Ones, Twos, Threes, Fours, Fives, Sixes
    (50-point bonus if the upper total is 63 or more)
  - Lower section: One Pair, Two Pairs, Three of a Kind, Four of a Kind,
    Small Straight, Large Straight, Full House, Chance, Yatzy
- **Game flow:** each turn, the player rolls up to 3 times, holding the
  dice they want to keep, then scores in one empty category. The game
  ends after 15 rounds, when every category is filled.
- **Why modules:** splitting the game into separate parts keeps each one
  focused on a single job, which makes the code easier to build, test,
  and change later.

## Modules

| File | Class | Job |
|------|-------|-----|
| `dice.js` | `Dice` | Rolls a die (`roll()`) and tracks the number of dice and their values |
| `yatzyEngine.js` | `YatzyEngine` | Scoring rules: `calculateScore()`, `isValidSelection()`, and the score table |
| `yatzyGame.js` | `YatzyGame` | Game state: current player, round, total score; `startNewGame()`, `endTurn()`, `endGame()` |

## How to Test

Open `index.html` in a browser, open the console (F12), and try:

    const dice = new Dice(5);
    dice.roll();