# Implementation Plan: User Interface — User Story 1

**Branch**: `001-user-interface` | **Date**: 2026-05-03 | **Spec**: [spec.md](spec.md)  
**Input**: Feature specification from `/specs/001-user-interface/spec.md`, scoped to **User Story 1 — View the Guitar Fretboard** (Priority: P1)

## Summary

Render a static guitar fretboard as a React component tree: a horizontally scrollable, wood-brown container holding 6 string rows, each row composed of a checkbox cell followed by 12 equal-width fret cells. The page background is white. Layout is responsive at all viewport widths with horizontal overflow limited to the fretboard container. All logic is pure and isolated from presentation so that note-count and layout invariants can be unit-tested with Jest without a browser.

## Technical Context

**Language/Version**: TypeScript 5 + React 18  
**Primary Dependencies**: React, Tailwind CSS v3, Jest, ts-jest, React Testing Library (unit-level component rendering only)  
**Storage**: N/A — no persistence in this feature  
**Testing**: Jest + React Testing Library (unit tests only, per constitution)  
**Target Platform**: Browser — desktop and mobile (Chrome, Safari, Firefox current)  
**Project Type**: Frontend-only web application (Vite + React)  
**Performance Goals**: Initial render < 200 ms on mid-range mobile hardware  
**Constraints**: No backend, no databases, no user accounts; Tailwind CSS is the only styling system  
**Scale/Scope**: Single-page application; fretboard is a static display component in this story

## Constitution Check

| Principle | Status | Notes |
|-----------|--------|-------|
| I. Fretboard Mastery First | ✅ Pass | The fretboard visual is the foundational learning element |
| II. Frontend-Only | ✅ Pass | No server calls, no persistence introduced |
| III. Clean Code / Simple UX | ✅ Pass | Small composable components; no unnecessary controls in US1 |
| IV. Responsive Practice Experience | ✅ Pass | Horizontal scroll on fretboard container; page layout adapts |
| V. Audio / Quality Gates | ✅ Pass | No audio in US1; Jest unit tests required and planned |
| Tailwind-only styling | ✅ Pass | No CSS modules, no inline style objects for layout |
| Jest-only testing | ✅ Pass | React Testing Library is a Jest companion, not a separate harness |

No violations requiring justification.

## Project Structure

### Documentation (this feature)

```text
specs/001-user-interface/
├── plan.md         ← this file
└── spec.md
```

### Source Code (repository root)

```text
src/
├── components/
│   └── Fretboard/
│       ├── Fretboard.tsx        # Outer container + string list
│       ├── StringRow.tsx        # One string: checkbox cell + fret cells
│       └── FretCell.tsx         # Single fret intersection cell
├── constants/
│   └── fretboard.ts             # STRING_COUNT = 6, FRET_COUNT = 12
├── App.tsx                      # Root component, white page wrapper
└── main.tsx                     # Vite entry point

src/__tests__/
├── constants/
│   └── fretboard.test.ts
└── components/
    ├── App.test.tsx
    ├── Fretboard.test.tsx
    ├── StringRow.test.tsx
    └── FretCell.test.tsx
```

**Structure Decision**: Single-project frontend layout (Option 2 frontend subtree, no backend). Components are co-located by feature under `src/components/Fretboard/`. Constants are extracted to `src/constants/fretboard.ts` so string/fret counts are a single source of truth testable independently of rendering.

## Implementation Phases

### Phase 0 — Project Bootstrap

Set up the Vite + React + TypeScript + Tailwind project with Jest configured for TypeScript and React Testing Library. No feature code yet.

**Deliverables**:
- `package.json` with `vite`, `react`, `react-dom`, `tailwindcss`, `jest`, `ts-jest`, `@testing-library/react`, `@testing-library/jest-dom`, `jest-environment-jsdom`
- `tailwind.config.ts` with `content` paths covering `src/**/*.tsx`
- `jest.config.ts` targeting `src/__tests__/**/*.test.tsx`
- `src/main.tsx` and `src/App.tsx` as empty shells
- Passing placeholder test (`1 + 1 === 2`) to verify the Jest pipeline

### Phase 1 — Constants and Data Shape

Define the pure data constants and helper that the components will consume.

**Deliverables**:
- `src/constants/fretboard.ts` exports `STRING_COUNT = 6` and `FRET_COUNT = 12`
- Unit tests verify the exported values and that an array of length `STRING_COUNT` can be generated

### Phase 2 — FretCell Component

The smallest visual unit: a single cell at a string–fret intersection.

**Deliverables**:
- `FretCell.tsx`: a `div` with fixed-width, full-height, and a right border (fret wire) in Tailwind. Accepts no props in US1.
- `FretCell.test.tsx`: verifies the element renders and carries the expected Tailwind border class

### Phase 3 — StringRow Component

One horizontal string: the checkbox cell on the left followed by `FRET_COUNT` FretCell instances.

**Deliverables**:
- `StringRow.tsx`: renders a `<label>` wrapping a `<input type="checkbox" defaultChecked />` as the first cell, then maps `FRET_COUNT` cells. Accepts `stringIndex` prop for accessibility labelling.
- `StringRow.test.tsx`:
  - Renders exactly `FRET_COUNT` fret cells
  - Renders exactly one checkbox
  - Checkbox is checked by default

### Phase 4 — Fretboard Component

The outer container that positions `STRING_COUNT` StringRow instances inside the wood-brown box.

**Deliverables**:
- `Fretboard.tsx`: a `div` with Tailwind `bg-amber-800` (or equivalent brown), `rounded`, `overflow-x-auto`, mapping `STRING_COUNT` rows. Wrapped in a `w-full` white-page container in `App.tsx`.
- `Fretboard.test.tsx`:
  - Renders exactly `STRING_COUNT` string rows
  - Container element has the brown background class
  - All `STRING_COUNT` checkboxes are present and checked

### Phase 5 — Responsive Layout

Validate and harden the responsive behaviour.

**Deliverables**:
- `App.tsx` updated: page root uses `min-h-screen bg-white` with padding so the fretboard is centred
- Tailwind `overflow-x-auto` is confirmed on the fretboard container (not the page root) so only the board scrolls on narrow viewports
- Unit test confirms the fretboard wrapper does not carry a class that would cause full-page overflow

## Open Questions

None — all clarifications resolved in the clarify pass.
