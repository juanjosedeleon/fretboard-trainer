# Feature Specification: User Interface

**Feature Branch**: `001-user-interface`  
**Created**: 2026-05-03  
**Status**: Draft  
**Input**: User description: "create user interface - This application should simulate a guitar fretboard with 12 frets and 6 strings. The fretboard must be in a container with brown background simulating wood, over a white background page. On the left side of every string, there must be a checkbox with a checked value by default. Below the fretboard container, there must be a label for one letter where the musical note will be displayed. Below that, add another label for one more digit as a countdown, a small textbox with increase and decrease buttons attached, and a start/stop button."

## User Scenarios & Testing *(mandatory)*

### User Story 1 - View the Guitar Fretboard (Priority: P1)

A user opens the application and immediately sees a visual guitar fretboard rendered as a wood-textured container on a white page. The fretboard displays 6 horizontal strings and 12 vertical frets in the correct proportional layout. This is the central element of the entire application and must exist before any other feature has value.

**Why this priority**: Without a visible, correctly laid-out fretboard, the application cannot serve its core purpose. All other stories depend on this layout existing.

**Independent Test**: Can be fully tested by loading the page and verifying that a fretboard container with 6 rows and 12 columns is rendered with a brown background, delivering the core visual metaphor of the app.

**Acceptance Scenarios**:

1. **Given** the application is loaded, **When** the page renders, **Then** a container with a brown wood-like background is displayed against a white page background.
2. **Given** the fretboard container is visible, **When** a user inspects the layout, **Then** it shows exactly 6 strings (rows) and 12 frets (columns).
3. **Given** any viewport width (mobile or desktop), **When** the page renders, **Then** the fretboard container adapts to fit the screen without overflowing.

---

### User Story 2 - Toggle Active Strings with Checkboxes (Priority: P2)

A user can see a checkbox to the left of each of the 6 strings. All checkboxes are checked by default when the page loads. The user can uncheck any string to exclude it from practice, or re-check it to include it again.

**Why this priority**: String selection is a key personalization step — a beginner may only want to practice on a few strings. The fretboard must already be rendered (P1) for these controls to make sense.

**Independent Test**: Can be fully tested by verifying that 6 checked checkboxes appear left-aligned to their respective strings on load, and that clicking one toggles its checked state.

**Acceptance Scenarios**:

1. **Given** the application loads, **When** the user views the fretboard, **Then** each of the 6 strings has a corresponding checkbox on its left side, all checked by default.
2. **Given** a checkbox is checked, **When** the user clicks it, **Then** the checkbox becomes unchecked.
3. **Given** a checkbox is unchecked, **When** the user clicks it, **Then** the checkbox becomes checked again.

---

### User Story 3 - Display the Target Musical Note (Priority: P3)

Below the fretboard container, a label displays a single musical note letter (e.g., A, B, C, D, E, F, G). This label shows the note the user must identify on the fretboard during a practice session.

**Why this priority**: The note label is the primary output of the practice session. It requires the fretboard (P1) to already be visible but is otherwise independent of string selection (P2).

**Independent Test**: Can be fully tested by checking that a single-character note label element is present below the fretboard and can display any of the 12 note names.

**Acceptance Scenarios**:

1. **Given** the application loads, **When** the page renders, **Then** a label element is displayed below the fretboard container.
2. **Given** a practice session is active, **When** a note is set, **Then** the label displays exactly one note letter (A–G, including sharps/flats as a single symbol).
3. **Given** no session is active, **When** the page first loads, **Then** the note label is empty or shows a neutral placeholder.

---

### User Story 4 - Countdown Timer Display and Configuration (Priority: P4)

Below the note label, a countdown label (up to 2 digits) shows the remaining seconds for the current challenge. Next to it is a small textbox with an attached decrease (−) button on the left and an increase (+) button on the right, which lets the user set the starting countdown value. The default starting value is 5 seconds and the maximum allowed value is 60.

**Why this priority**: The countdown controls are configuration UI for the practice session. They add no value unless the note display (P3) is present and the session flow (P5) can use them.

**Independent Test**: Can be fully tested by verifying the countdown label, the number input, and the two buttons render in the correct order below the note label, and that clicking + or − changes the textbox value by 1.

**Acceptance Scenarios**:

1. **Given** the page renders, **When** the user views the area below the note label, **Then** a countdown label, a textbox with a decrease button and an increase button are visible in that order.
2. **Given** the textbox shows a value, **When** the user clicks the increase (+) button, **Then** the value increments by 1.
3. **Given** the textbox shows a value greater than 1, **When** the user clicks the decrease (−) button, **Then** the value decrements by 1.
4. **Given** the textbox shows 1, **When** the user clicks the decrease (−) button, **Then** the value does not go below 1.
5. **Given** the textbox shows 60, **When** the user clicks the increase (+) button, **Then** the value does not go above 60.
6. **Given** a session is running, **When** each second elapses, **Then** the countdown label decrements by 1 until it reaches 0.

---

### User Story 5 - Start and Stop a Practice Session (Priority: P5)

A start/stop button allows the user to begin and end a practice session. Pressing "Start" begins the countdown and shows the target note. Pressing "Stop" (or the same button toggled) ends the session and resets the display.

**Why this priority**: This is the action that activates all dynamic behavior. It ties together note display (P3) and the countdown (P4) into an actual practice flow.

**Independent Test**: Can be fully tested by verifying that clicking the button changes its label between "Start" and "Stop", and that the countdown begins or halts accordingly.

**Acceptance Scenarios**:

1. **Given** the page loads, **When** the user views the controls, **Then** a button labeled "Start" is visible.
2. **Given** the session is stopped, **When** the user clicks "Start", **Then** the button label changes to "Stop" and the countdown begins from the configured value.
3. **Given** the session is running, **When** the user clicks "Stop", **Then** the button label reverts to "Start" and the countdown halts.
4. **Given** the countdown reaches 0, **When** the timer expires, **Then** the session automatically advances: a new note is displayed and the countdown restarts from the configured value.

---

### Edge Cases

- What happens when all 6 string checkboxes are unchecked and the user presses "Start"? The session should not start and a visible indication should inform the user that at least one string must be selected.
- What happens when the countdown textbox is cleared or receives a non-numeric value? The input should reject non-numeric characters and restore the last valid value.
- What happens when the countdown textbox value is set to 0 or a negative number via direct input? The value must be clamped to a minimum of 1.
- What happens on very small viewports (e.g., 320 px wide)? The fretboard and controls must remain usable, with horizontal scrolling allowed only for the fretboard itself.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: The UI MUST render a fretboard container with exactly 6 strings and 12 frets.
- **FR-002**: The fretboard container MUST have a brown background that visually suggests a wood texture; the page background MUST be white.
- **FR-003**: Each of the 6 strings MUST have a corresponding checkbox displayed as the leftmost cell of its row inside the fretboard container, checked by default on page load.
- **FR-004**: A note label MUST be displayed below the fretboard container and show a single musical note letter when a session is active.
- **FR-005**: A countdown label (displaying up to 2 digits) MUST be displayed below the note label and show the remaining seconds during an active session.
- **FR-006**: A numeric textbox with an attached decrease (−) button and an increase (+) button MUST be displayed below the note label alongside the countdown label, allowing the user to configure the countdown starting value.
- **FR-007**: The countdown value MUST be constrained to a minimum of 1 and a maximum of 60; the UI MUST prevent values outside this range via button interaction and direct input.
- **FR-008**: A start/stop button MUST be displayed in the controls area; its label MUST toggle between "Start" and "Stop" to reflect the current session state. When the countdown reaches 0, the session MUST automatically advance by displaying a new note and restarting the countdown from the configured value without user interaction.
- **FR-009**: The entire UI MUST be responsive and usable on mobile, tablet, and desktop viewport sizes.
- **FR-010**: The fretboard and all controls MUST be built with React components and styled exclusively with Tailwind CSS.

### Key Entities

- **Fretboard**: The visual grid of 6 strings × 12 frets rendered inside a wood-colored container.
- **String row**: One horizontal row in the fretboard, associated with one checkbox and one string of the guitar.
- **Practice controls**: The area below the fretboard containing the note label, countdown label, countdown configurator (textbox + buttons), and the start/stop button.
- **Session state**: The runtime state capturing whether a session is active, the current countdown value, and the currently displayed note.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The fretboard renders with exactly 6 string rows and 12 fret columns on every supported viewport width.
- **SC-002**: All 6 string checkboxes are in a checked state immediately after the page loads, with no user interaction required.
- **SC-003**: The note label, countdown label, countdown configurator, and start/stop button are all visible below the fretboard without scrolling on a 768 px wide viewport.
- **SC-004**: The countdown textbox reliably rejects values below 1 in 100% of interaction attempts via buttons and direct input.
- **SC-005**: The start/stop button correctly toggles session state (label changes, countdown starts/stops) within one render cycle of the click event.

## Assumptions

- The note label displays notes using standard English letter names (A–G), with sharps represented as two characters (e.g., A#) when needed; flats are not used. The label must accommodate up to 2 characters.
- The logic for deriving which note to display from the selected strings and fret positions is out of scope for this feature; in this spec the displayed note is a placeholder value supplied by whatever caller triggers the session.
- The countdown label supports values 1–60 seconds (up to 2 digits). The default value on page load is 5.
- The fretboard is a static visual grid in this feature; fret markers, dot inlays, and nut representation are considered visual enhancements and are not required for this spec.
- String numbering follows standard guitar convention: string 1 (thinnest, highest pitch) at the top, string 6 (thickest, lowest pitch) at the bottom.
- No audio capture or pitch detection is wired up in this feature; the UI controls are layout and interaction only.
- The project uses React (with hooks) and Tailwind CSS as mandated by the constitution; no other UI framework or styling system will be introduced.
