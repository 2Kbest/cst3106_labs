# Hospital Triage Design System

**Author:** Rouvier Mervius
**Course:** CST3106, Lab 10

## Overview

The Hospital Triage app has two pages:

- **User page:** a patient selects their type of injury and their level of pain, then submits the entry.
- **Admin page:** triage staff see all entries sorted by necessary attention, and can raise or lower an entry's attention level, or remove it from the triage list.

This document describes the design system for both pages: fonts, colours, components, layout and navigation, and how consistency is kept across the app. Each choice is explained in terms of user experience and accessibility, because the people using this app are often in pain, stressed, or working under time pressure.

## 1. Fonts

### Font family

The whole app uses one font family:

```css
font-family: Arial, Helvetica, sans-serif;
```

- **Arial** is the main font.
- **Helvetica** is the backup if Arial isn't installed (mostly on Mac).
- **sans-serif** is the last backup: the browser's default font without serifs.

### Font weights

| Weight | Value | Used for |
|---|---|---|
| Regular | 400 | Descriptions, instructions, table text |
| Bold | 700 | Page titles, section headings, buttons, selected values, urgency labels |

Only two weights are used. Fewer weights keep the pages calm and make bold text stand out when it matters.

### Type scale

| Element | Size | Weight | Example |
|---|---|---|---|
| Page title | 32px | Bold | Hospital Triage - User |
| Section heading | 20px | Bold | Type of injury |
| Body text and descriptions | 16px | Regular | Select the type of injury and your level of pain... |
| Buttons | 16px | Bold | Submit entry |
| Admin table text | 15px | Regular | Heart, 8 |
| Small labels (pain words, urgency badges) | 13px | Bold | Severe, Critical |

No text is smaller than 13px.

### Why Arial

- **Easy to read on screens.** Arial is a sans-serif font with simple, open letter shapes. It stays clear at small sizes and on lower-quality screens, like the ones often found in waiting rooms and on hospital workstations.
- **Already installed everywhere.** Arial comes with Windows and macOS, so the app doesn't need to download a font. Pages load faster, and the text looks the same on every computer, which matters in a hospital, where the app may run on many different machines.
- **Clear numbers.** Pain levels and attention scores are numbers. Arial's digits are distinct and easy to tell apart, so a 1 isn't confused with a 7, or a 3 with an 8.
- **Calm and neutral.** Arial has no decorative style. In a medical setting, the interface should feel clear and trustworthy, not playful.

### Accessibility choices

- **Body text is 16px or larger**, so patients who are in pain, older, or have weaker eyesight can read it without zooming.
- **Bold, not italics, for titles.** Italic text is harder to read, especially for people with dyslexia or low vision, so titles use bold only.
- **Short lines and plain words.** Instructions are kept short, because a patient in pain shouldn't have to read a paragraph to know what to do.

## 2. Colour palette

The palette follows one rule: **colour is used for meaning.** The pages themselves stay calm and neutral, and strong colours are kept for urgency. This follows the way clinical tools work: if everything is red, nothing stands out.

### Shared colours (both pages)

| Name | Hex | Used for |
|---|---|---|
| Page background | `#F7F8FA` | Background of both pages |
| White | `#FFFFFF` | Buttons, table rows |
| Main text | `#1E2430` | Body text, table text |
| Secondary text | `#4A5262` | Descriptions and instructions |
| Border | `#D5D9E0` | Button and card borders |
| Divider | `#E3E6EB` | Lines between table rows |

### User page: calm blue

| Name | Hex | Used for |
|---|---|---|
| User blue | `#1F5FAD` | Page title, injury buttons, Submit entry button, selected outline |

Blue is calm and trusted, and is widely used in healthcare. The patient using this page is often in pain and anxious, so the page should feel reassuring, not alarming. That's why the User page title is **not red**: in a hospital, red means critical.

### Admin page: professional teal

| Name | Hex | Used for |
|---|---|---|
| Admin teal | `#0E6E6E` | Page title, table header, Select and action buttons |
| Selected row | `#E6F1F1` | Background of the selected entry in the table |

Teal is a darker, more serious colour for staff. It is also different enough from the User blue that staff can tell at a glance which page they are on.

### Triage colours: urgency

These colours are used **only** for pain levels (User page) and necessary attention (Admin page). They follow the traffic-light order that triage and emergency staff already know: green is the least urgent, red is the most urgent.

| Level | Pain (User page) | Attention (Admin page) | Light background | Border | Text |
|---|---|---|---|---|---|
| 1 to 3 | Mild | Low | `#E3F1E4` | `#2E7D32` | `#1B5E20` |
| 4 to 6 | Moderate | Moderate | `#FFF4CC` | `#C99A00` | `#6B5200` |
| 7 to 8 | Severe | High | `#FDE7D6` | `#E8711A` | `#8A3B00` |
| 9 to 10 | Worst | Critical | `#FBE3E3` | `#C62828` | `#8E1B1B` |

Each level uses a **light background with dark text** of the same colour, so the text stays easy to read.

The red border colour (`#C62828`) is also used for the **Remove from triage** button, because removing a patient is a serious action that can't be undone.

### Accessibility

- **Colour is never the only signal.** Every pain level shows its **number and a word** ("8 · Severe"), and every attention badge shows its number and level ("9 · Critical"). About 1 in 12 men has some red-green colour blindness, so the app must still work without the colours.
- **Strong contrast.** Every text and background pair meets the WCAG AA minimum contrast of 4.5:1 for normal text:

| Text | Background | Contrast |
|---|---|---|
| Main text `#1E2430` | Page `#F7F8FA` | 14.6:1 |
| Secondary text `#4A5262` | Page `#F7F8FA` | 7.4:1 |
| White | User blue `#1F5FAD` | 6.4:1 |
| White | Admin teal `#0E6E6E` | 6.0:1 |
| Low text `#1B5E20` | `#E3F1E4` | 6.7:1 |
| Moderate text `#6B5200` | `#FFF4CC` | 6.7:1 |
| High text `#8A3B00` | `#FDE7D6` | 6.5:1 |
| Critical text `#8E1B1B` | `#FBE3E3` | 7.4:1 |

- **Selected pain level:** a selected pain button keeps its light colour and gets a thick blue outline. It does not turn solid orange or red, because white text on solid orange is too hard to read (3.1:1).

## 3. App components

All buttons on both pages share these rules:

- **Minimum size of 44 × 44px**, so they are easy to tap on a tablet or kiosk, even with shaky hands.
- **Bold 16px text** with a short, clear label that says exactly what the button does.
- **A visible focus outline** (blue on the User page, teal on the Admin page) when the button is reached with the keyboard, so the app can be used without a mouse.

### Page titles

- **User page:** "Hospital Triage - User", in User blue (`#1F5FAD`)
- **Admin page:** "Hospital Triage - Admin", in Admin teal (`#0E6E6E`)
- **Design:** 32px, bold, centered at the top of the page.
- **Why:** the title tells people right away which page they are on. The different colours (blue for patients, teal for staff) make this clear even before reading the words.

### Description

- **Location:** right below the title, on both pages.
- **Design:** 16px, regular, secondary text colour (`#4A5262`), centered, one or two short sentences.
- **User page text:** "Select the type of injury and your level of pain, then submit. A triage nurse will review your entry."
- **Admin page text:** "Entries are sorted by necessary attention (10 = most urgent). Select an entry to update or remove it."
- **Why:** it tells each person what to do, in plain words. On the User page, it also reassures the patient that a nurse will review their entry.

### User questionnaire (User page)

**Type of injury buttons**
- **Options:** Head, Heart, Lung, Neck, Stomach, Bone or muscle, Burn or cut.
- **Default:** white background, blue border and blue text.
- **Selected:** solid blue background with white text. Only one injury can be selected at a time.
- **Why:** big, labelled buttons are faster and easier than typing, especially for someone in pain. The filled button shows clearly what was chosen.

**Level of pain buttons**
- **Options:** 1 to 10, each showing its number and a word: 1 to 3 Mild, 4 to 6 Moderate, 7 to 8 Severe, 9 to 10 Worst.
- **Design:** each button uses its triage colour (light background, coloured border, dark text). See Section 2.
- **Selected:** keeps its colour and gets a thick blue outline. Only one pain level can be selected.
- **Why:** the numbers follow the familiar 0 to 10 pain scale used in healthcare (this app starts at 1, as in the assignment). The words help patients who aren't sure what a number means, and the colours show the scale from mild to worst.

**Submit entry button**
- **Design:** solid User blue with white bold text, centered below the questionnaire. It is the only solid button on the page, so it is the clear final step.
- **If something is missing:** a short message under the button says what to choose, for example "Select your level of pain."
- **After submitting:** a confirmation message appears: "Your entry was sent. A triage nurse will review it."
- **Why:** the patient always knows if their entry was sent, and what to fix if it wasn't.

### Admin summary (Admin page)

**Triage table**
- **Columns:** Entry, Necessary attention, Injury, Pain, Waiting, and a Select button.
- **Header row:** Admin teal background with white bold text.
- **Rows:** white, separated by thin divider lines. The table is sorted by necessary attention, most urgent first. When two entries have the same attention level, the one that has waited longest comes first.
- **Why:** staff see the most urgent patient at the top without searching. Entries are shown by number, not by name, which protects patient privacy if the screen is visible to others.

**Necessary attention badges**
- **Design:** a small badge in the triage colours, showing the number and level, for example "9 · Critical".
- **Why:** staff can scan the column and spot urgent patients by colour, while the number and word make the level exact.

**Waiting time**
- **Design:** plain text in the Waiting column, showing how long ago the entry was submitted, for example "12 min" or "1 h 05 min". It updates every minute.
- **Why:** urgency isn't the only thing that matters in triage. A patient with moderate pain who has waited a long time still needs attention. Showing the wait helps staff spot patients who are being left behind, and makes the order fair when two entries have the same attention level. It uses plain text, not a colour, so colour stays reserved for urgency.

**Select button and selected row**
- **Design:** a small teal outline button in each row. When an entry is selected, its button turns solid teal and reads "Selected", and the whole row gets a light teal background (`#E6F1F1`).
- **Why:** staff always know which entry the action buttons will change, which prevents changing the wrong patient.

**Action buttons**
- **Increase attention** and **Decrease attention:** teal outline buttons. They move the selected entry up or down by one level, and the table re-sorts.
- **Remove from triage:** red outline button (`#C62828`), placed apart from the other two.
- **Why:** the two attention buttons are used often and are safe to undo, so they share a calm style. Removing a patient is serious and can't be undone, so it uses the warning colour and sits apart to avoid an accidental click.

## 4. Layout and navigation

### Layout structure

Both pages use the same simple layout: **one centered column**, read from top to bottom, with a maximum width of about 900px so lines don't get too long on wide screens.

Every page follows the same order:

1. **Title**
2. **Description**
3. **Main content** (the questionnaire, or the triage table)
4. **Action buttons**

### User page wireframe

```
┌──────────────────────────────────────────────────────┐
│               Hospital Triage - User                 │  Title
│   Select the type of injury and your level of pain,  │  Description
│   then submit. A triage nurse will review your entry.│
│                                                      │
│   Type of injury                                     │  Section heading
│   [Head] [Heart] [Lung] [Neck] [Stomach]             │  Injury buttons
│   [Bone or muscle] [Burn or cut]                     │
│                                                      │
│   Level of pain                                      │  Section heading
│   [1 Mild] [2 Mild] [3 Mild] [4 Moderate] [5 Moderate]│  Pain buttons
│   [6 Moderate] [7 Severe] [8 Severe] [9 Worst] [10 Worst]│
│                                                      │
│                  [ Submit entry ]                    │  Main action
│        (message: missing choice, or sent)            │  Feedback
└──────────────────────────────────────────────────────┘
```

### Admin page wireframe

```
┌───────────────────────────────────────────────────────────────┐
│                  Hospital Triage - Admin                      │  Title
│   Entries are sorted by necessary attention                   │  Description
│   (10 = most urgent). Select an entry to update it.           │
│                                                               │
│  Entry │ Attention     │ Injury  │ Pain │ Waiting │           │  Table header
│  ──────┼───────────────┼─────────┼──────┼─────────┼────────── │
│    3   │ 9 · Critical  │ Heart   │  8   │  6 min  │ [Select]  │  Most urgent first
│    1   │ 7 · High      │ Lung    │  7   │ 25 min  │[Selected] │  Selected row
│    5   │ 5 · Moderate  │ Neck    │  5   │ 48 min  │ [Select]  │  Same level:
│    4   │ 5 · Moderate  │ Stomach │  5   │ 12 min  │ [Select]  │  longest wait first
│    2   │ 2 · Low       │ Neck    │  2   │ 30 min  │ [Select]  │
│                                                               │
│  [Increase attention] [Decrease attention]                    │  Actions
│                                    [Remove from triage]       │  Separated, red
└───────────────────────────────────────────────────────────────┘
### Small screens

- The injury and pain buttons **wrap onto more rows** on a narrow screen, such as a phone or a small tablet, instead of shrinking.
- On the Admin page, the table **scrolls sideways** inside its own area if the screen is too narrow, so the page itself never breaks.

### Navigation flow

The two pages are used by different people, so they are kept separate. **There is no link from the User page to the Admin page**: patients should never be able to reach the staff page and change the triage list.

**Patient (User page):**

```
Open User page
   → choose type of injury
   → choose level of pain
   → Submit entry
        → missing choice?  → message says what to choose → back to the questionnaire
        → all set          → confirmation message, entry sent to the Admin page
   → the page resets for the next patient
```

**Triage staff (Admin page):**

```
Open Admin page
   → see entries, most urgent first
   → Select an entry (row is highlighted)
   → Increase attention / Decrease attention → the table re-sorts
   → or Remove from triage                   → the entry leaves the list
```

### How the layout and navigation help users

- **Top-to-bottom order matches the task.** The patient reads the instructions, makes two choices, then submits. Nothing is hidden on another screen or behind a menu.
- **One task per page.** Patients only report; staff only manage. Each page has fewer buttons and less to think about.
- **The most important action is easy to find.** Submit entry is the only solid button on the User page. The most urgent patient is always at the top of the Admin table.
- **Clear feedback.** After every action, the page shows what happened: a confirmation message, a highlighted row, or a re-sorted table.

## 5. Consistency

The User page and the Admin page are used by different people, but they should still feel like one app. Consistency makes the app faster to learn, and reduces mistakes, which matters in an emergency room.

### How consistency is achieved

**1. One shared stylesheet with CSS variables**

All colours, fonts and sizes are defined once, at the top of one CSS file shared by both pages. Every component uses these variables instead of typing the values again:

```css
:root {
  /* Fonts */
  --font: Arial, Helvetica, sans-serif;

  /* Shared colours */
  --page-bg: #F7F8FA;
  --text: #1E2430;
  --text-secondary: #4A5262;
  --border: #D5D9E0;

  /* Page colours */
  --user-blue: #1F5FAD;
  --admin-teal: #0E6E6E;

  /* Triage colours (border) */
  --low: #2E7D32;
  --moderate: #C99A00;
  --high: #E8711A;
  --critical: #C62828;
}
```

If a colour ever needs to change, it is changed in one place, and the whole app updates.

**2. The same font and type scale everywhere**

Both pages use Arial, the same two weights (regular and bold), and the same sizes for titles, headings, body text and buttons (see Section 1).

**3. Colour always means the same thing**

- Blue always means **User page**, teal always means **Admin page**.
- The triage colours always mean **urgency**, on both pages: the same green, yellow, orange and red scale is used for pain levels and for necessary attention. A patient's "8 · Severe" and the matching "High" badge on the Admin page share the same orange.
- Red is only used for urgency and for the one serious action (Remove from triage). It is never used for decoration.

**4. The same layout order on both pages**

Title, description, main content, then actions, in one centered column (see Section 4).

**5. The same button rules**

Every button is at least 44 × 44px, uses bold 16px text, and shows a focus outline. Outline buttons are for regular choices, and each page has only one solid button style for its main or selected action.

**6. The same writing style**

- **Short, plain words**, written for someone who is in pain or in a hurry.
- **Buttons start with a verb**, so they say what they do: "Submit entry", "Increase attention", "Remove from triage".
- **Sentence case** for buttons and headings: only the first word is capitalized ("Type of injury", not "Type Of Injury").

**7. The same feedback after every action**

Every action shows a visible result: a selected button, a highlighted row, a re-sorted table, or a short message. Users never have to guess whether something worked.

### Why consistency matters here

In a hospital, people don't have time to learn an interface. When the same colour, size and wording always mean the same thing, patients can finish their entry quickly, and staff can read the triage list at a glance and act on the right patient.

## Future improvements

This design is for a class version of the app. A version used in a real emergency department would also need:

- **CTAS levels.** Canadian emergency departments use the Canadian Triage and Acuity Scale, from Level 1 (most urgent) to Level 5 (least urgent). A real version would use these levels instead of a 10-point attention score that runs in the opposite direction.
- **Wait-time targets.** Each CTAS level has a target time to be seen. The Waiting column could warn staff when a patient goes past the target for their level.
- **A confirmation before removing a patient.** "Remove from triage" would first ask staff to confirm, to prevent mistakes.
- **An audit trail.** The app would record who changed an entry's attention level, and when.
- **The nurse decides.** The patient's pain score is information, not a diagnosis. The triage nurse would always set the final priority.