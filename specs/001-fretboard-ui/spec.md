# Feature Specification: Guitar Fretboard UI

**Feature Branch**: `001-fretboard-ui`
**Created**: 2026-05-06
**Status**: Draft

## Clarifications

### Session 2026-05-10

- Q: Which string ordering should the fretboard display use — standard playing position (low E top) or tab/sheet music view (high E top)? → A: High E at top, low E at bottom (tab/sheet music view, strings numbered 1–6 top to bottom)
- Q: What should the default state of each string's enable/disable checkbox be on load? → A: All checkboxes checked — all 6 strings enabled on load
- Q: Should fret 12 show a single dot or a double dot marker? → A: Double dot — two dots at fret 12 matching the real guitar octave marker
- Q: Should the string checkboxes be labeled? → A: Labeled with standard open-string note names (E, B, G, D, A, E from top to bottom in tab order)
- Q: What should the note display area show when no note is being practiced? → A: Completely empty — no text or symbol
**Input**: User description: "create user interface - add a wide centered container with a wooden background simulating a guitar fretboard. The fretboard must be horizontally splitted in 12 frets, each division with a silver gradient simulating a metal fret. Centered dots must be added to frets 3, 5, 7, 9 and 12 as fret markers in guitars. There must be 6 vertical splits for guitar strings. Guitar strings must be visible with a metallic color. Each position of a fret in every string must have an invisible placeholder where a note letter (from A to G) can be displayed. At the left of each string we must have a checkbox to enable the string. Below the fretboard, a placeholder for a note should be displayed, along with a textbox for a number of seconds and a increase and decrease button. Add a start/stop button."

## User Scenarios & Validation *(mandatory)*

### User Story 1 - Fretboard Visual Display (Priority: P1)

A guitarist opens the app and immediately sees a realistic fretboard graphic centered on the page. The wide container has a warm wooden appearance, is divided into 12 horizontal sections (frets) separated by shiny metallic dividers, and shows 6 horizontal string lines in a metallic color. Fret marker dots appear at positions 3, 5, 7, 9, and 12, matching standard guitar convention.

**Why this priority**: The fretboard visual is the centerpiece of the entire app. All other interactions depend on it existing. Without this, there is no product surface at all.

**Independent Validation**: Open the app in a browser. Verify that a wide centered fretboard container is visible with a wood-like background. Count 12 fret sections separated by silver-gradient dividers. Confirm 6 metallic horizontal string lines span the full width. Confirm circular marker dots appear at frets 3, 5, 7, 9, and 12.

**Acceptance Scenarios**:

1. **Given** a user opens the app on a desktop browser, **When** the page loads, **Then** a wide centered fretboard container is visible with a warm wooden background.
2. **Given** the fretboard is displayed, **When** the user counts the fret sections, **Then** exactly 12 fret sections are present, each bounded by a silver-gradient divider resembling a metal guitar fret.
3. **Given** the fretboard is displayed, **When** the user looks at fret positions 3, 5, 7, and 9, **Then** each shows a single centered circular marker dot; and fret 12 shows a double dot (two dots side by side), matching standard guitar fretboard conventions.
4. **Given** the fretboard is displayed, **When** the user examines the string layout, **Then** 6 horizontal lines in a metallic color span the full width of the fretboard from left to right, ordered from string 1 (high E) at the top to string 6 (low E) at the bottom — matching standard guitar tab and sheet music notation.

---

### User Story 2 - Note Placeholders and String Controls (Priority: P2)

A guitarist sees a checkbox to the left of each of the 6 string rows. Checking and unchecking a checkbox includes or excludes that string from the practice session. Each of the 72 intersections between a string and a fret contains a hidden placeholder cell. When a note is assigned to a position, the corresponding letter (A through G) becomes visible inside that cell without disrupting the fretboard layout.

**Why this priority**: String selection and note display are the next critical interactive layer after the visual. They make the fretboard functional for practice rather than just decorative.

**Independent Validation**: Open the app. Confirm 6 checkboxes appear to the left of the fretboard strings. Toggle a checkbox and confirm it updates visually. Inspect the fretboard grid and confirm that each of the 72 string/fret cells has a presence in the layout even when empty, and that displaying a note letter in one cell does not shift surrounding cells.

**Acceptance Scenarios**:

1. **Given** the fretboard is displayed, **When** the user looks to the left of each string row, **Then** a checkbox is visible for each of the 6 strings, labeled with its standard open-string note name (E, B, G, D, A, E from top to bottom), and all 6 checkboxes are checked by default.
2. **Given** a string checkbox is checked, **When** the user clicks to uncheck it, **Then** the checkbox reflects the unchecked state without altering the fretboard visual structure.
3. **Given** the fretboard is displayed with empty note placeholders, **When** no note is assigned, **Then** all 72 placeholder cells are invisible and the fretboard looks clean.
4. **Given** a note letter is assigned to a specific fret/string position, **When** the placeholder becomes visible, **Then** the letter (e.g., "E") appears centered inside that fret cell without affecting the layout of adjacent cells.

---

### User Story 3 - Practice Session Controls (Priority: P3)

Below the fretboard, a guitarist sees a compact control row showing: a note display area showing the current note being practiced, a numeric seconds field with a + button and a − button to adjust the duration, and a start/stop toggle button to begin or end a practice session.

**Why this priority**: The controls complete the core practice UI surface. They are lower priority than the fretboard itself but are required for the feature to be usable as a practice tool.

**Independent Validation**: Open the app. Confirm a note display area is visible below the fretboard. Confirm a seconds input shows a numeric value. Click the + button and verify the value increments. Click the − button and verify the value decrements (and stops at the minimum). Click the start/stop button and verify the label toggles.

**Acceptance Scenarios**:

1. **Given** the page is loaded, **When** the user looks below the fretboard, **Then** they see an empty note display area, a seconds numeric input, a + button, a − button, and a start/stop button — all clearly accessible.
2. **Given** the seconds field shows a value, **When** the user clicks the + button, **Then** the value increments by 1.
3. **Given** the seconds field shows a value greater than 1, **When** the user clicks the − button, **Then** the value decrements by 1.
4. **Given** the seconds field shows the minimum value (1), **When** the user clicks the − button, **Then** the value does not change below 1.
5. **Given** the start/stop button shows "Start", **When** the user clicks it, **Then** the label changes to "Stop".
6. **Given** the start/stop button shows "Stop", **When** the user clicks it, **Then** the label changes back to "Start".

---

### Edge Cases

- What happens when the viewport is narrower than the fretboard's minimum width? The fretboard container should allow horizontal scrolling without breaking the overall page layout.
- What happens if the user attempts to decrement the seconds value below 1? The − button must be disabled or have no effect at the minimum value of 1.
- What happens if all 6 string checkboxes are unchecked? The UI must remain stable; no crash or layout shift should occur.
- How does the layout adapt on a small mobile screen? The fretboard scrolls horizontally while the controls section below it remains fully accessible and vertically stacked.

## Requirements *(mandatory)*

### Functional Requirements

- **FR-001**: System MUST deliver the fretboard UI entirely through frontend components and browser capabilities.
- **FR-002**: System MUST display a wide centered container with a wooden-appearance background representing a guitar fretboard.
- **FR-003**: System MUST divide the fretboard into exactly 12 horizontal fret sections, each boundary marked by a silver gradient visual resembling a metal fret.
- **FR-004**: System MUST display centered circular marker dots at fret positions 3, 5, 7, and 9 (single dot each), and a double dot (two dots side by side) at fret position 12, matching standard guitar fretboard conventions.
- **FR-005**: System MUST render 6 horizontal string lines spanning the full fretboard width in a metallic color, ordered from string 1 (high E) at the top to string 6 (low E) at the bottom, matching standard guitar tab and sheet music notation.
- **FR-006**: System MUST provide an invisible placeholder cell at every string/fret intersection (72 total) capable of displaying a single note letter (A through G).
- **FR-007**: System MUST display a labeled checkbox to the left of each of the 6 string rows; labels MUST show the standard open-string note name in standard tuning order top to bottom: E, B, G, D, A, E (string 1 to string 6); all 6 checkboxes MUST be checked (enabled) by default on initial load.
- **FR-008**: System MUST display a note placeholder area below the fretboard to show the current note being practiced; the area MUST be completely empty (no text or symbol) when no note is assigned.
- **FR-009**: System MUST display a numeric seconds input below the fretboard with a + increment button and a − decrement button; the minimum value is 1.
- **FR-010**: System MUST display a start/stop toggle button below the fretboard that alternates its label between "Start" and "Stop" on each click.
- **FR-011**: System MUST use React, Next.js, and Tailwind CSS for implementation.
- **FR-012**: System MUST NOT require databases, authentication, user management, or calls to external services.
- **FR-013**: System MUST provide a friendly, simple interface with clear labels and low-friction primary actions.
- **FR-014**: The fretboard layout MUST remain fully usable on desktop screens and scroll gracefully on viewports too narrow to display it at full width.

### Key Entities *(include if feature involves UI or client-side state)*

- **Fretboard**: The main wide centered container representing the guitar neck; holds the full grid of frets and strings with a wood-appearance background.
- **Fret Section**: One of 12 horizontal columns in the fretboard grid; bounded by a silver-gradient fret divider on the right side.
- **Fret Marker**: A circular dot displayed centered within the fret section at positions 3, 5, 7, and 9 (single dot); at position 12 two dots are displayed side by side (double dot) to mark the octave, matching standard guitar conventions.
- **String Row**: One of 6 horizontal rows within the fretboard; ordered from string 1 (high E) at the top to string 6 (low E) at the bottom, matching tab notation; each row shows a metallic string line and has an enable/disable checkbox to its left labeled with the string's standard open-string note name (E, B, G, D, A, E respectively); all checkboxes are checked by default.
- **Note Placeholder**: An invisible-by-default cell at each string/fret intersection; reveals a note letter (A–G) when a value is assigned and hides itself otherwise.
- **Practice Controls**: The below-fretboard UI area containing the current note display area, the seconds input with +/− buttons, and the start/stop toggle button.

## Success Criteria *(mandatory)*

### Measurable Outcomes

- **SC-001**: The fretboard is immediately recognizable as a guitar neck to a musician on first page load without any explanatory text.
- **SC-002**: All 72 note placeholder positions (6 strings × 12 frets) are present and can each independently display a note letter without causing a layout shift.
- **SC-003**: The full UI — fretboard and controls — loads and becomes interactive within 3 seconds on a standard broadband connection.
- **SC-004**: The fretboard and controls render without visual overflow or horizontal scrollbar on desktop viewports 1280px wide and above.
- **SC-005**: The seconds value can be incremented and decremented using the +/− buttons without requiring keyboard input.

## Assumptions

- Users are guitarists or music students who recognize standard guitar fretboard conventions (6 strings, 12 frets, marker dots at positions 3/5/7/9/12).
- The wood-appearance background and metallic string colors are achieved entirely through CSS/Tailwind styling; no external image assets are required.
- The note letters shown in placeholder cells will be populated by a future audio pitch-detection feature; this spec covers only the display container.
- The seconds field represents a practice interval duration; the valid range is 1–60 seconds, defaulting to 5.
- The start/stop button manages a session state toggle; actual audio capture and pitch detection are outside this UI spec.
- Validation is performed manually in a browser on both a desktop viewport and a simulated mobile viewport.
