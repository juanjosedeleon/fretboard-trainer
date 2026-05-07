# Feature Specification: [FEATURE NAME]

**Feature Branch**: `[###-feature-name]`  
**Created**: [DATE]  
**Status**: Draft  
**Input**: User description: "$ARGUMENTS"

## User Scenarios & Validation *(mandatory)*

<!--
  IMPORTANT: User stories should be PRIORITIZED as user journeys ordered by importance.
  Each user story/journey must be INDEPENDENTLY VALIDATABLE - meaning if you implement just ONE of them,
  you should still have a viable MVP (Minimum Viable Product) that delivers value.
  
  Assign priorities (P1, P2, P3, etc.) to each story, where P1 is the most critical.
  Think of each story as a standalone slice of functionality that can be:
  - Developed independently
  - Validated independently
  - Deployed independently
  - Demonstrated to users independently
-->

### User Story 1 - [Brief Title] (Priority: P1)

[Describe this user journey in plain language]

**Why this priority**: [Explain the value and why it has this priority level]

**Independent Validation**: [Describe how this can be manually validated in the browser and what value it delivers on its own]

**Acceptance Scenarios**:

1. **Given** [initial state], **When** [action], **Then** [expected outcome]
2. **Given** [initial state], **When** [action], **Then** [expected outcome]

---

### User Story 2 - [Brief Title] (Priority: P2)

[Describe this user journey in plain language]

**Why this priority**: [Explain the value and why it has this priority level]

**Independent Validation**: [Describe how this can be manually validated in the browser]

**Acceptance Scenarios**:

1. **Given** [initial state], **When** [action], **Then** [expected outcome]

---

### User Story 3 - [Brief Title] (Priority: P3)

[Describe this user journey in plain language]

**Why this priority**: [Explain the value and why it has this priority level]

**Independent Validation**: [Describe how this can be manually validated in the browser]

**Acceptance Scenarios**:

1. **Given** [initial state], **When** [action], **Then** [expected outcome]

---

[Add more user stories as needed, each with an assigned priority]

### Edge Cases

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right edge cases.
-->

- What happens when microphone permission is denied or unavailable?
- How does the UI respond when pitch detection is unstable, noisy, or silent?
- How does the layout adapt when the viewport is too small for the default fretboard presentation?

## Requirements *(mandatory)*

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right functional requirements.
-->

### Functional Requirements

- **FR-001**: System MUST deliver the feature entirely through frontend components and browser capabilities.
- **FR-002**: System MUST provide a friendly, simple interface with clear labels and low-friction primary actions.  
- **FR-003**: Users MUST be able to complete the primary practice flow on mobile and desktop layouts.
- **FR-004**: System MUST use React, Next.js, Tailwind CSS, Web Audio API, and Pitchy for implementation.
- **FR-005**: System MUST NOT require databases, authentication, user management, or calls to external services.
- **FR-006**: System MUST define manual validation steps for each user story instead of automated tests.

*Example of marking unclear requirements:*

- **FR-007**: System MUST visualize pitch feedback with [NEEDS CLARIFICATION: tuner format not specified - needle, meter, note card, or combined view]
- **FR-008**: System MUST expose responsive fretboard content optimized for [NEEDS CLARIFICATION: portrait only, landscape only, or both orientations]

### Key Entities *(include if feature involves UI or client-side state)*

- **[UI Entity 1]**: [What it represents in the interface or client state, key attributes without implementation]
- **[UI Entity 2]**: [What it represents, and how it relates to the user flow]

## Success Criteria *(mandatory)*

<!--
  ACTION REQUIRED: Define measurable success criteria.
  These must be technology-agnostic and measurable.
-->

### Measurable Outcomes

- **SC-001**: [Measurable metric, e.g., "First-time users can start the primary practice flow within 30 seconds"]
- **SC-002**: [Measurable metric, e.g., "Core screens remain usable without horizontal scrolling at 320px width"]
- **SC-003**: [User satisfaction metric, e.g., "Most trial users identify the primary action without explanation"]
- **SC-004**: [Feature metric, e.g., "Pitch feedback updates quickly enough for real-time tuning adjustments"]

## Assumptions

<!--
  ACTION REQUIRED: The content in this section represents placeholders.
  Fill them out with the right assumptions based on reasonable defaults
  chosen when the feature description did not specify certain details.
-->

- [Assumption about target users, e.g., "Users can grant microphone access in a modern browser"]
- [Assumption about scope boundaries, e.g., "The feature stays within frontend-only scope and does not add accounts or persistence"]
- [Assumption about environment, e.g., "Pitch detection can rely on the browser Web Audio API and the Pitchy library"]
- [Assumption about delivery, e.g., "Validation will be performed manually rather than through automated tests"]
