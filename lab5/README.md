# Yatzy Game – Design Documentation

CST3106 Lab 05 · Algonquin College

## Overview

This is the design plan for a single-player Yatzy game built with HTML, CSS and JavaScript. The player rolls five dice, chooses which dice to keep, and fills in a scorecard over 15 turns. The goal is the highest total score.

This lab covers the design only: the design system, the dice, and a static HTML/CSS mockup. The working game logic comes in Assignment #1.

## How to Play

1. Each turn starts with a roll of all five dice.
2. Click any dice you want to **hold**. Held dice keep their value.
3. Roll the remaining dice again. You can reroll up to **2 more times**, for 3 rolls per turn.
4. Pick one empty box on the scorecard to score your dice. If your dice don't fit any category, you must enter a 0 in a box.
5. The game ends after 15 turns, when every box is filled. Your final score is shown at the end.

## Scoring Rules

### Upper Section

| Category | How to score |
| -------- | ------------ |
| Ones | Sum of all dice showing 1 |
| Twos | Sum of all dice showing 2 |
| Threes | Sum of all dice showing 3 |
| Fours | Sum of all dice showing 4 |
| Fives | Sum of all dice showing 5 |
| Sixes | Sum of all dice showing 6 |
| **Bonus** | **50 points** if the upper section totals 63 or more |

### Lower Section

| Category | Requirement | Score |
| -------- | ----------- | ----- |
| One Pair | Two dice with the same number | Sum of the pair |
| Two Pairs | Two different pairs | Sum of both pairs |
| Three of a Kind | Three dice with the same number | Sum of those three |
| Four of a Kind | Four dice with the same number | Sum of those four |
| Small Straight | 1-2-3-4-5 | 15 |
| Large Straight | 2-3-4-5-6 | 20 |
| Full House | Three of a kind plus a different pair | Sum of all dice |
| Chance | Any combination | Sum of all dice |
| Yatzy | All five dice the same | 50 |

## Design System

### Colors

The colors match my portfolio website, so the game feels like part of the same site when it's linked from my Projects section.

| Role | Hex | Used for |
| ---- | --- | -------- |
| Primary (navy) | `#1F4E8C` | Header, headings, dice pips, Roll button |
| Accent (gold) | `#E0A82E` | Held dice frame, footer link |
| Accent light | `#FFF6E0` | Background of a held die |
| Dark (charcoal) | `#2B2D33` | Footer, Total row |
| Page background | `#F5F6F8` | Behind the cards |
| Card background | `#FFFFFF` | Game board and scorecard cards |
| Text | `#1F2430` | Body text |
| Muted text | `#5B6270` | Hints and labels |

**Why these colors:** Navy is the main color for structure and anything clickable, so the player learns that navy means "you can act here." Gold is saved for highlights like held dice, so they stand out right away. Charcoal frames the bottom of the page and the final total. Gold is never used for text on white, because it doesn't have enough contrast to read easily.

### Fonts

| Use | Font | Size |
| --- | ---- | ---- |
| Headings (h1, h2) | Georgia (serif) | 36px / 28px |
| Subheadings and labels | Source Sans 3, bold | 13–18px |
| Body text | Source Sans 3 | 17px |

**Why these fonts:** Georgia matches the serif headings on my portfolio and gives the game a classic board-game feel. Source Sans 3 is clean and easy to read at small sizes, which matters for the scorecard numbers. Georgia is built into every computer, and Source Sans 3 loads from Google Fonts.

All colors and fonts are defined as CSS variables at the top of `style.css`, so they can be changed in one place.

## Dice Design

[ADD SCREENSHOT OF THE DICE HERE]

- **Size:** 88 × 88px with rounded corners (14px). On phones they shrink to 64 × 64px.
- **Color:** white face, light grey border, navy pips.
- **Pips:** each die face is a 3×3 CSS grid. Each pip is a small navy circle placed in a grid cell using a class like `top-left` or `center`. This means no images are needed for the dice.
- **Held state:** a held die gets a thick gold border, a light gold face, a soft shadow, and lifts up slightly. A "HELD" label appears underneath.
- **Not held:** a "TAP TO HOLD" label appears underneath as a hint.
- **Accessibility:** each die is a `<button>`, so it works with the keyboard, and it has a label like "Die 1 showing 5, held" for screen readers.

## Mockups

[ADD SCREENSHOT OF mockup.html ON DESKTOP HERE]

[ADD SCREENSHOT OF mockup.html ON A PHONE HERE]

The mockup is in [`mockup.html`](mockup.html) with styles in [`style.css`](style.css). It shows a turn in progress: the player rolled 5-5-5-2-6 and is holding the three fives.

The page has four parts:

1. **Header:** game title, current turn, and a link back to my portfolio.
2. **Game board:** a message telling the player what to do next, the five dice, the Roll button, and how many rolls are left.
3. **Scorecard:** a table with the upper section, upper total and bonus, the lower section, and the grand total. Filled boxes show the score in bold. Empty boxes show a button with what the current roll would score, so the player can compare options before choosing.
4. **Footer:** same style as my portfolio footer.

## Layout and Game Flow

On desktop, the game board and scorecard sit side by side. On phones, the scorecard stacks below the game board. This uses flexbox with `flex-wrap`, so no separate mobile page is needed.

```
Start turn → Roll all dice → Hold some dice → Reroll (up to 2 times)
          → Pick a scorecard box → Next turn
          → After 15 turns: show final score
```

## Planned Interactions and Animations

- **Holding dice:** clicking a die toggles the "held" class, which switches its style.
- **Rolling animation:** when the player clicks Roll, the dice that aren't held will spin through faces for about 1 second before landing on a random value, based on the rolling dice animation from Lecture 05 (`setTimeout` and CSS `@keyframes`).
- **Roll button:** disabled and greyed out when no rolls are left.
- **Score preview:** after each roll, the empty scorecard boxes update to show what the current dice would score.
- **Game over:** a message shows the final score with a "New game" button.

## Other Design Choices

- **Touch targets** (dice, Roll button, score buttons) are at least 44px tall, so they're easy to tap on a phone.
- **Buttons are real `<button>` elements**, not clickable `<div>`s, so the game works with a keyboard.
- **The scorecard is an HTML `<table>`**, because the scores are tabular data, and the lecture recommended a tabular layout for the scorecard.
