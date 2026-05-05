# Tasks: User Interface — User Story 1

**Input**: `/specs/001-user-interface/spec.md`, `/specs/001-user-interface/plan.md`  
**Scope**: User Story 1 — View the Guitar Fretboard (Priority: P1)

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel with other tasks at the same phase that share no file dependencies
- **[US1]**: Belongs to User Story 1

---

## Phase 1: Setup — Project Bootstrap

**Purpose**: Initialise the Vite + React + TypeScript + Tailwind + Jest project so subsequent phases have a working build and test pipeline.

- [x] T001 [US1] Scaffold Vite project with React + TypeScript template: `npm create vite@latest . -- --template react-ts`
- [x] T002 [US1] Install Tailwind CSS and configure `tailwind.config.ts` with `content: ['./index.html','./src/**/*.{ts,tsx}']`; add Tailwind directives to `src/index.css`
- [x] T003 [P] [US1] Install Jest dependencies: `jest`, `ts-jest`, `@testing-library/react`, `@testing-library/jest-dom`, `jest-environment-jsdom`
- [x] T004 [P] [US1] Create `jest.config.ts` pointing to `jsdom` environment, `ts-jest` transform, and `setupFilesAfterEnv` importing `@testing-library/jest-dom`
- [x] T005 [P] [US1] Add `test` script to `package.json`: `"test": "jest"`
- [x] T006 [US1] Verify bootstrap: write a placeholder test (`expect(1 + 1).toBe(2)`) and confirm `npm test` passes and `npm run dev` starts the dev server (depends on T001–T005)

**Checkpoint**: Green Jest run + Vite dev server starts.

---

## Phase 2: Foundational — Constants

**Purpose**: Single source of truth for fretboard dimensions. Must exist before any component is written.

- [x] T007 [US1] Create `src/constants/fretboard.ts` exporting `STRING_COUNT = 6` and `FRET_COUNT = 12`
- [x] T008 [US1] Write `src/__tests__/constants/fretboard.test.ts`: assert `STRING_COUNT === 6`, `FRET_COUNT === 12`, and `Array.from({ length: STRING_COUNT })` produces a 6-element array

**Checkpoint**: Constants exported and their invariants covered by passing unit tests.

---

## Phase 3: User Story 1 — FretCell Component 🎯

**Goal**: Render the smallest visual unit — a single fret intersection cell.

**Independent Test**: `FretCell.test.tsx` passes with no other components present.

### Tests — FretCell ⚠️ Write first, confirm they FAIL, then implement

- [x] T009 [P] [US1] Write `src/__tests__/components/FretCell.test.tsx`:
  - renders without crashing
  - rendered element carries a right-border Tailwind class (e.g., `border-r`)

### Implementation — FretCell

- [x] T010 [US1] Create `src/components/Fretboard/FretCell.tsx`: a `<div>` with Tailwind classes for fixed minimum width, full height, and a right border to represent a fret wire (depends on T009 tests failing)

**Checkpoint**: `FretCell` tests green; component is importable.

---

## Phase 4: User Story 1 — StringRow Component

**Goal**: Render one horizontal guitar string — a checked checkbox cell followed by 12 `FretCell` instances.

**Independent Test**: `StringRow.test.tsx` passes; can be rendered standalone.

### Tests — StringRow ⚠️ Write first, confirm they FAIL, then implement

- [x] T011 [P] [US1] Write `src/__tests__/components/StringRow.test.tsx`:
  - renders exactly `FRET_COUNT` (12) fret cells
  - renders exactly one checkbox input
  - checkbox is checked by default (`defaultChecked`)
  - checkbox has an accessible label containing the string index

### Implementation — StringRow

- [x] T012 [US1] Create `src/components/Fretboard/StringRow.tsx`: accepts `stringIndex: number` prop; renders a `<label>` wrapping `<input type="checkbox" defaultChecked />` as the first cell, then maps `Array.from({ length: FRET_COUNT })` to `<FretCell>` instances (depends on T010, T011 tests failing)

**Checkpoint**: `StringRow` tests green; component renders 12 fret cells with a checked checkbox.

---

## Phase 5: User Story 1 — Fretboard Component

**Goal**: Render the complete wood-brown container with 6 `StringRow` instances.

**Independent Test**: `Fretboard.test.tsx` passes; entire fretboard visible at any viewport width.

### Tests — Fretboard ⚠️ Write first, confirm they FAIL, then implement

- [x] T013 [P] [US1] Write `src/__tests__/components/Fretboard.test.tsx`:
  - renders exactly `STRING_COUNT` (6) string rows
  - container element has the brown background Tailwind class (`bg-amber-800` or equivalent)
  - all 6 checkboxes are present and checked by default
  - container carries `overflow-x-auto` (horizontal scroll confined to fretboard)

### Implementation — Fretboard and App shell

- [x] T014 [US1] Create `src/components/Fretboard/Fretboard.tsx`: a `<div>` with `bg-amber-800 rounded overflow-x-auto` mapping `Array.from({ length: STRING_COUNT })` to `<StringRow stringIndex={i} />` (depends on T012, T013 tests failing)
- [x] T015 [US1] Update `src/App.tsx`: white-page root (`min-h-screen bg-white flex flex-col items-center p-4`) wrapping `<Fretboard />` (depends on T014)

**Checkpoint**: `Fretboard` tests green; full fretboard renders on the white page in the browser.

---

## Phase 6: Polish — Responsive Layout Validation

**Purpose**: Confirm overflow is contained to the fretboard and the page layout holds at narrow viewports.

- [x] T016 [US1] Create `src/__tests__/components/App.test.tsx`: render `<App />` and assert the root wrapper element does NOT carry `overflow-x-auto` or `overflow-x-scroll` (overflow must be scoped to the fretboard container only, not the page root)
- [x] T017 [US1] Manual spot-check at 320 px viewport width in browser dev tools: verify horizontal scroll applies only to the fretboard, not the whole page

**Checkpoint**: All Jest tests pass (`npm test`); fretboard is usable at 320 px.

---

## Dependencies & Execution Order

### Phase Dependencies

- **Phase 1 (Setup)**: No dependencies — start immediately
- **Phase 2 (Constants)**: Depends on Phase 1 complete
- **Phase 3 (FretCell)**: Depends on Phase 2 — tests written first, then implementation
- **Phase 4 (StringRow)**: Depends on Phase 3 implementation (T010)
- **Phase 5 (Fretboard + App)**: Depends on Phase 4 implementation (T012)
- **Phase 6 (Polish)**: Depends on Phase 5 complete

### Parallel Opportunities

- T003, T004, T005 can run in parallel (different config files, no shared dependency)
- T009 (FretCell tests) and T011 (StringRow tests) can be written in parallel — tests only, no implementation dependency
- T013 (Fretboard tests) can be written in parallel with T012 (StringRow impl)

### Within Each Phase

Tests MUST be written and confirmed to FAIL before the corresponding implementation task begins. Red → Green → (Refactor if needed).
