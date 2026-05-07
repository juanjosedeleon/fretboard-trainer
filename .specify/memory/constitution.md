<!--
Sync Impact Report
Version change: template -> 1.0.0
Modified principles:
- Principle 1 -> I. Friendly, Simple UX
- Principle 2 -> II. Responsive By Default
- Principle 3 -> III. Frontend-Only Scope
- Principle 4 -> IV. Fixed Frontend Stack
- Principle 5 -> V. No Automated Testing
Added sections:
- Product Constraints
- Delivery Workflow
Removed sections:
- None
Templates requiring updates:
- ✅ updated /.specify/templates/plan-template.md
- ✅ updated /.specify/templates/spec-template.md
- ✅ updated /.specify/templates/tasks-template.md
Follow-up TODOs:
- None
-->
# Fretboard Trainer Constitution

## Core Principles

### I. Friendly, Simple UX
Every feature MUST reduce friction for a learner trying to tune, identify, or
understand notes on the fretboard. Interfaces MUST use plain language, obvious
states, and a welcoming visual tone. Dense control clusters, ambiguous labels,
and feature-first flows that bury the primary learning action are not allowed.
Rationale: the product succeeds only if first-time users can understand the UI
without instruction.

### II. Responsive By Default
All screens and components MUST be designed mobile-first and remain fully usable
across phone, tablet, and desktop widths. Layout decisions MUST start from the
smallest viewport and scale up using responsive behavior instead of desktop-only
adaptations. Rationale: the app is a practice tool that users may open in a
variety of environments, including while holding an instrument.

### III. Frontend-Only Scope
The codebase MUST remain a frontend application. Features MUST be implemented as
UI components, client-side state, and browser capabilities only. Databases,
authentication, user management, server-side persistence, and integrations with
external services or APIs are out of scope unless this constitution is amended.
Rationale: the project is intentionally constrained to a focused practice tool,
not a platform.

### IV. Fixed Frontend Stack
Production work MUST use React, Next.js, and Tailwind CSS for the interface.
Audio input MUST use the Web Audio API, and pitch detection MUST use the Pitchy
library. Per current official documentation, Next.js App Router conventions and
Tailwind responsive utility patterns are the baseline for structure and styling.
Alternative frameworks, CSS systems, or pitch-detection libraries are not
permitted without an approved amendment. Rationale: a fixed stack keeps the
learning surface consistent and avoids avoidable architectural drift.

### V. No Automated Testing
This project MUST NOT add unit tests, integration tests, end-to-end tests, test
scaffolding, or testing framework dependencies. Validation MUST be done through
manual review, local interaction, linting, type-checking, and targeted runtime
verification only. Rationale: the project explicitly optimizes for fast
iteration on a constrained frontend surface and rejects the maintenance cost of
test suites.

## Product Constraints

- The application MUST prioritize tuning, note recognition, and fretboard
	learning interactions over generic app infrastructure.
- Static assets and local browser capabilities are allowed; remote storage,
	telemetry services, hosted auth, and third-party backends are not.
- UI copy MUST feel approachable and supportive rather than technical or harsh.
- Styling MUST use Tailwind utilities and project-level design tokens where
	needed; ad hoc CSS systems or component libraries require explicit approval.

## Delivery Workflow

- Plans and specs MUST describe the user-facing flow first, then the minimum
	client-side implementation needed to support it.
- Manual validation steps MUST be written in terms of user behavior and browser
	outcomes, not automated test cases.
- Work items MUST map to frontend slices such as routes, components, hooks,
	audio-processing utilities, and styling changes.
- Any proposal that introduces backend concerns, stored accounts, or external
	dependencies MUST be rejected during planning unless the constitution is
	amended first.

## Governance

This constitution overrides conflicting planning and task-generation guidance in
the repository. Amendments require: a written change to this file, an explicit
reason for the governance change, updates to affected templates or guidance, and
re-validation of active plans against the amended rules. Semantic versioning is
mandatory for this document: MAJOR for incompatible principle changes or scope
removals, MINOR for new principles or materially expanded governance, PATCH for
wording clarifications that do not change project obligations. Every plan,
specification, and task list MUST include a constitution check that confirms the
feature preserves simple UX, responsive behavior, frontend-only scope, the fixed
stack, and the prohibition on automated tests.

**Version**: 1.0.0 | **Ratified**: 2026-05-06 | **Last Amended**: 2026-05-06
