# Implementation Plan: [FEATURE]

**Branch**: `[###-feature-name]` | **Date**: [DATE] | **Spec**: [link]
**Input**: Feature specification from `/specs/[###-feature-name]/spec.md`

**Note**: This template is filled in by the `/speckit.plan` command. See `.specify/templates/plan-template.md` for the execution workflow.

## Summary

[Extract from feature spec: primary requirement + technical approach from research]

## Technical Context

<!--
  ACTION REQUIRED: Replace the content in this section with the technical details
  for the project. The structure here is presented in advisory capacity to guide
  the iteration process.
-->

**Language/Version**: TypeScript with current React and Next.js versions in the repo  
**Primary Dependencies**: React, Next.js, Tailwind CSS, Web Audio API, Pitchy  
**Storage**: N/A - frontend-only application with no database or server persistence  
**Validation**: Manual browser validation, linting, and type-checking only; automated tests are prohibited by the constitution  
**Target Platform**: Modern mobile and desktop browsers with microphone access
**Project Type**: Frontend web application  
**Performance Goals**: Responsive UI updates during interactive fretboard and tuning flows; low-latency pitch feedback suitable for practice use  
**Constraints**: Mobile-first responsive design, friendly UX, no backend services, no auth, no external service integrations  
**Scale/Scope**: Single product surface focused on fretboard training and note-tuning interactions

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

- Preserves a simple, friendly user experience centered on the primary practice flow.
- Remains fully responsive across phone, tablet, and desktop breakpoints.
- Uses frontend-only architecture with no database, auth, user management, or external service calls.
- Stays within the approved stack: React, Next.js, Tailwind CSS, Web Audio API, and Pitchy.
- Uses manual validation only and does not introduce automated test code, frameworks, or tasks.

## Project Structure

### Documentation (this feature)

```text
specs/[###-feature]/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── ui-model.md          # Phase 1 output (/speckit.plan command) when feature state or UI structures need documentation
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── interaction-notes.md # Phase 1 output (/speckit.plan command) for flows, audio behavior, and responsive decisions
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)
<!--
  ACTION REQUIRED: Replace the placeholder tree below with the concrete layout
  for this feature. Delete unused options and expand the chosen structure with
  real paths (e.g., apps/admin, packages/something). The delivered plan must
  not include Option labels.
-->

```text
app/
├── (routes)/
├── layout.tsx
└── page.tsx

components/
├── ui/
└── fretboard/

lib/
├── audio/
└── music/

public/
└── [static assets]

styles/
└── [global styles if needed beyond Tailwind entrypoints]
```

**Structure Decision**: [Document the selected structure and reference the real
directories captured above]

## Complexity Tracking

> **Fill ONLY if Constitution Check has violations that must be justified**

| Violation | Why Needed | Simpler Alternative Rejected Because |
|-----------|------------|-------------------------------------|
| [e.g., non-standard responsive pattern] | [current need] | [why standard Tailwind layout utilities were insufficient] |
| [e.g., custom audio-processing abstraction] | [specific problem] | [why direct Web Audio plus Pitchy wiring was insufficient] |
