# Fretboard Trainer Constitution

## Core Principles

### I. Fretboard Mastery First
Every feature must directly support the primary goal: helping users memorize note locations on the guitar fretboard. Practice flows, feedback, and learning aids must prioritize note recognition, ear-to-fretboard connection, and repeatable skill-building over novelty features. Any proposal that does not clearly improve fretboard learning outcomes should be rejected.

### II. Frontend-Only by Design
The application must remain a client-side product. No databases, backend services, user accounts, authentication, profile storage, or server-managed progression may be introduced. User state, if required, must stay local to the device and remain optional. Product scope must avoid features whose core value depends on persistent multi-user or server infrastructure.

### III. Clean Code and Simple UX
Code must be organized into small, composable React units with explicit responsibilities, minimal coupling, and predictable state flow. The interface must stay simple, legible, and fast to understand: clear practice actions, low-friction navigation, and no unnecessary controls. Complexity requires explicit justification tied to learning value or accessibility.

### IV. Responsive Practice Experience
All user-facing flows must work well on mobile and desktop layouts. Responsive design is a core requirement, not a later refinement. Visual hierarchy, touch targets, spacing, and feedback timing must remain usable across viewport sizes so practice sessions are equally effective on phones, tablets, and larger screens.

### V. Audio Accuracy with Focused Quality Gates
Pitch-aware features must use the Web Audio API for audio capture and the `pitchy` library for pitch detection. Audio processing must be implemented with stable permission handling, failure states, and predictable cleanup of browser audio resources. Automated verification is limited to unit tests written with Jest; no integration, end-to-end, or other testing types should be added unless this constitution is amended.

## Technical Constraints

The required application stack is React for UI composition and Tailwind CSS for styling. New UI work must fit this stack instead of introducing parallel styling systems or alternate frontend frameworks.

Audio-related logic must be isolated from presentation code so pitch detection, note mapping, and practice evaluation can be unit tested independently of rendered components.

Dependencies must be kept minimal. New libraries are allowed only when they materially reduce complexity or improve correctness for fretboard training, audio capture, accessibility, or responsive UI behavior.

Local-only persistence, if added later, must be limited to browser capabilities such as local storage or equivalent client-side APIs and must not evolve into account-based data management.

Agent-assisted development must use Context7 through MCP as the primary source for framework, library, and API documentation whenever external technical reference is needed.

## Development Workflow

Every substantive feature or refactor must preserve three outcomes: clear learning intent, responsive UI behavior, and unit-testable logic boundaries.

Jest unit tests are required for fretboard note calculation, practice scoring, pitch-to-note interpretation, and other pure or near-pure logic introduced by the feature. Components should be structured so critical behavior can be verified primarily through unit-level coverage rather than broader test harnesses.

Code review and self-review must check for violations of frontend-only scope, unnecessary abstraction, audio resource leaks, and UI decisions that complicate practice without improving learning effectiveness.

## Governance

This constitution overrides conflicting local conventions and speculative feature ideas. Any change to these principles requires a documented amendment that states the reason, the scope impact, and any migration needed for existing specs or implementation plans.

All future specifications, plans, and implementation tasks must explicitly align with these principles. Reviews must reject work that introduces backend dependencies, account systems, non-Jest testing mandates, or UI complexity that is not justified by the core learning goal.

Version changes follow semantic versioning for this constitution: major for principle removals or redefinitions, minor for new principles or materially expanded constraints, and patch for clarifications that do not change intent.

**Version**: 1.0.0 | **Ratified**: 2026-05-03 | **Last Amended**: 2026-05-03
