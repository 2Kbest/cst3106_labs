/**
 * Lab 8: Dice rolling animation with jQuery
 * Clicking the Roll button spins the die, and when the spin ends
 * the die shows a random number from 1 to 6.
 */

// Which dots to show for each number (same pip names as my Assignment 1 dice)
const PIP_LAYOUTS = {
  1: ['center'],
  2: ['top-left', 'bottom-right'],
  3: ['top-left', 'center', 'bottom-right'],
  4: ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
  5: ['top-left', 'top-right', 'center', 'bottom-left', 'bottom-right'],
  6: ['top-left', 'top-right', 'middle-left', 'middle-right', 'bottom-left', 'bottom-right']
};

/**
 * Rolls one die.
 * @returns {number} A random whole number from 1 to 6.
 */
function rollDie() {
  return Math.floor(Math.random() * 6) + 1;
}

/**
 * Shows a number on the die by drawing its dots.
 * @param {number} value - The number to show, from 1 to 6.
 */
function showFace(value) {
  $('#die').empty();                          // remove the old dots
  const positions = PIP_LAYOUTS[value];
  for (let i = 0; i < positions.length; i++) {
    $('#die').append('<span class="pip ' + positions[i] + '"></span>');  // add one dot
  }
}

// Run this once the page is ready
$(function () {

  // Event listener: when the Roll button is clicked...
  $('#roll-button').on('click', function () {
    $('#roll-button').prop('disabled', true);  // no double-clicks during the spin

    // ...when the spin finishes (once), show a new number and turn the button back on
    $('#die').one('animationend', function () {
      $('#die').removeClass('rolling');
      showFace(rollDie());
      $('#roll-button').prop('disabled', false);
    });

    $('#die').addClass('rolling');  // start the spin
  });

});