/**
 * Lab 7: Yatzy dice server
 * Serves the game page and rolls the dice on the server.
 */
const express = require('express');
const app = express();
const PORT = 3000;

// Serve the files in the "public" folder (index.html, dice.js) to the browser
app.use(express.static('public'));

/**
 * Rolls one die.
 * @returns {number} A random whole number from 1 to 6.
 */
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

// Endpoint: GET /roll-dices returns five dice values, for example [3, 6, 1, 6, 2]
app.get('/roll-dices', function (req, res) {
  const values = [];
  for (let i = 0; i < 5; i++) {
    values.push(rollDie());
  }
  res.json(values);
});

// Start the server
app.listen(PORT, function () {
  console.log('Server running at http://localhost:' + PORT);
});