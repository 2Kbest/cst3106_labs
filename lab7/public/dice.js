/**
 * Lab 7: Dice module (client side)
 * The dice are now rolled on the server. This file asks the server
 * for the values and shows them on the page.
 */
class Dice {
  constructor(count) {
    this.count = count;   // how many dice (5)
    this.values = [];     // the last roll
  }

  /**
   * Asks the server to roll the dice.
   * @returns {Promise<number[]>} The five dice values.
   */
  async rollAll() {
    const response = await fetch('/roll-dices');
    if (!response.ok) {
      throw new Error('Server error: ' + response.status);
    }
    this.values = await response.json();
    return this.values;
  }
}

const dice = new Dice(5);
const rollButton = document.getElementById('roll-button');
const message = document.getElementById('message');

rollButton.addEventListener('click', async function () {
  rollButton.disabled = true;   // stop double-clicks while we wait
  message.textContent = '';     // clear any old error

  try {
    const values = await dice.rollAll();
    for (let i = 0; i < dice.count; i++) {
      document.getElementById('die-' + i).textContent = values[i];
    }
  } catch (error) {
    message.textContent = 'Could not roll the dice. Is the server running?';
    console.error(error);
  }

  rollButton.disabled = false;
});