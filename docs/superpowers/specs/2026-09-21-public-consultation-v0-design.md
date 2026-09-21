# Public Consultation v0 Specification Design

## Status

Approved design for Sprint 4.

The resulting Blueprint specification will have `draft` status. It will be
normative enough to guide implementation and conformance review, but it will
not yet be stable.

## Purpose

Sprint 4 applies the Hiaka Specification Framework to Public Consultation v0,
the first reference Civic Blueprint.

The work must prove that the Blueprint Profile, common spec structure and
cross-cutting contracts can describe one complete civic process without moving
Module business rules into the Blueprint.

## Specification Identity

```text
ID: BP-PUBLIC-CONSULTATION
Version: 0.1.0
Status: draft
Primary profile: Blueprint
```

The specification uses `BP-PC-*` for Public Consultation-specific normative
requirements. Cross-cutting requirements retain their existing identifiers.

## Scope

Public Consultation v0 covers this end-to-end flow:

```text
Institution configures consultation
→ Institution publishes consultation
→ Public visitor discovers consultation
→ Participant checks eligibility
→ Participant submits contribution
→ Contribution is published according to moderation policy
→ Institution closes contribution period
→ Institution publishes outcome summary
→ Institution optionally responds to individual contributions
→ Institution creates commitments for announced actions
→ Institution updates progress and evidence
→ Public visitor follows implementation
```

The Blueprint must support public understanding before, during and after the
contribution period.

## Non-Goals

Public Consultation v0 does not define:

* electoral voting or a legally binding ballot;
* advanced public deliberation;
* a formal decision or selection mechanism;
* a generic workflow engine;
* mandatory national identity verification;
* mandatory individual response to every contribution;
* detailed Module DTOs, persistence models or business invariants;
* one deployment topology or infrastructure vendor.

## Actors

### Public Visitor

A Public Visitor can discover and inspect published consultations,
contributions, institutional outcomes, commitments and public evidence without
being required to authenticate.

### Participant

A Participant can check eligibility, create and submit contributions, inspect
their contribution state and follow institutional responses and commitments.

A Participant account is required to contribute. Verified identity or
territorial verification is conditional on the consultation's eligibility
policy.

The public profile remains distinct from verified legal identity.

### Institution Manager

An Institution Manager can configure, publish, open and close consultations;
publish outcome summaries; respond to contributions; and create or update
commitments within an authorized organizational and territorial scope.

### Moderator

Moderator is an optional role activated when the selected moderation policy
requires review or post-publication moderation.

### Facilitator

Facilitator is an optional role for process support. It does not automatically
inherit moderation or Institution Manager permissions.

## Lifecycle Model

The specification separates civic experience stages from operational process
states.

### Civic Experience Stages

```text
DISCOVER
   ↓
CONTRIBUTE
   ↓
[DELIBERATE]
   ↓
[EVALUATE]
   ↓
RESPOND
   ↓
TRACK
```

`DELIBERATE` and `EVALUATE` are optional in v0.

Activating `DELIBERATE` can introduce the Deliberation Module through an
additional contract. Activating `EVALUATE` does not make the Decision Module
mandatory unless a formal decision mechanism is added.

An institution can perform internal review between contribution closure and
the public outcome response without exposing a formal Decision Module contract.

### Operational States

```text
DRAFT
  → PUBLISHED
  → OPEN
  → CLOSED
  → RESPONDED
  → TRACKING
  → COMPLETED
```

The contribution period closes before the institution publishes its outcome.
`CLOSED` must therefore remain distinct from `RESPONDED`.

`TRACKING` begins when at least one public commitment is created. A
consultation can become `COMPLETED` after its response obligations are met and
all required tracking obligations have ended.

## Required Module Composition

### Participation

Participation owns:

* consultation identity and metadata;
* lifecycle and stage configuration;
* contribution period;
* territorial scope;
* eligibility policy reference;
* process publication and externally visible status.

### Contribution

Contribution owns:

* contribution drafts and submissions;
* contribution publication;
* moderation state and reason;
* attachments and geographic references where enabled;
* institutional responses linked to contributions.

### Accountability

Accountability owns:

* commitments;
* responsible organizations;
* milestones;
* progress updates;
* evidence;
* completion state and history.

## Optional Modules

Deliberation is optional and only required when the `DELIBERATE` stage exposes
public discussion capabilities.

Decision is optional and only required when the consultation adds a formal
selection, prioritization or decision mechanism.

Neither Module blocks the v0 critical path.

## Civic Design System Composition

### Required Patterns

* Inform supports discovery, status, deadlines, institutional ownership and
  published results.
* Consult frames the public question, participation scope and expected outcome.
* Contribute supports submission, validation, publication and participant
  follow-up.

### Provisional Mappings

Decide is provisionally mapped to institutional response and rationale.
Account is provisionally mapped to commitments, progress and public evidence.

These mappings guide experience design but cannot support complete Civic Design
System conformance until dedicated Decide and Account pattern specifications
exist.

The existing Public Consultation Design System mapping remains the experience
view of this Blueprint. The Blueprint specification becomes the source of
truth for lifecycle and composition.

## Shared Digital Services

Each dependency is classified as required, conditional or optional.

| Shared service | Classification | Use |
| --- | --- | --- |
| Authentication | Required | Participant and institutional access |
| Identity or verification | Conditional | Eligibility policies requiring verification |
| Territory registry | Conditional | Territorial consultation or eligibility scope |
| Document storage | Conditional | Official documents, attachments and evidence |
| Notifications | Optional | Participant and institutional updates |
| Audit infrastructure | Required | Sensitive institutional and moderation actions |

All Shared Digital Services are consumed through explicit ports or contracts.
No provider is mandatory.

## Eligibility And Privacy

Published consultation content is publicly readable.

A Participant account is required to submit a contribution. The consultation
defines whether additional identity, residency or territorial verification is
required.

Eligibility is evaluated before submission or publication according to the
policy. The result must not expose verified legal identity publicly.

Public profile, Participant, Account, Verified Identity and Eligibility remain
separate concepts.

## Contribution Publication Policy

The consultation selects one of two publication policies:

* `immediate`: a submitted contribution is published after business validation;
* `pre_moderated`: a submitted contribution is published after moderation
  approval.

The policy must be visible before submission.

Any moderation state must be understandable to the Participant. Rejection,
restriction or removal must expose an appropriate reason without disclosing
sensitive administrative information.

## Institutional Outcome Obligations

After the contribution period closes, the institution must publish one public
outcome summary for the consultation.

The summary must explain:

* what was received;
* how contributions were considered;
* what the institution concluded;
* which next steps are planned;
* which uncertainties or limitations remain.

Individual responses are optional. When present, they are visibly
institutional and linked to the relevant contribution.

When the institution announces a concrete action, it must create a public
commitment linked to the consultation and, where relevant, to related
contributions or the outcome summary.

## Expected API Actions

The Blueprint expects these business actions:

```http
POST /processes
POST /processes/{id}/publish
POST /processes/{id}/open
POST /processes/{id}/close

POST /processes/{id}/contributions
POST /contributions/{id}/submit
POST /contributions/{id}/publish
POST /contributions/{id}/moderate
POST /contributions/{id}/respond

POST /processes/{id}/outcomes
POST /commitments
POST /commitments/{id}/progress-updates
POST /commitments/{id}/complete
```

These are Blueprint-level expectations. Future Module specifications own DTOs,
validation rules, errors and exact resource contracts.

All actions apply the API, Authorization, Auditability and Interoperability
contracts where relevant.

## Expected Domain Events

The Blueprint expects these facts:

```text
ProcessCreated
ProcessPublished
ProcessOpened
ProcessClosed
ContributionSubmitted
ContributionPublished
ContributionModerated
ContributionResponded
OutcomePublished
CommitmentCreated
CommitmentProgressUpdated
CommitmentCompleted
```

Future Module specifications own event payloads and producer contracts. Events
must follow the Domain Events and Interoperability contracts.

## Authorization Expectations

### Public Visitor

Can read published processes, published contributions, public outcome
summaries, commitments and public evidence.

### Participant

Can contribute only when:

* the contribution period is open;
* the eligibility policy is satisfied;
* required fields and business validations pass;
* the action is within any applicable territorial scope.

### Institution Manager

Can configure, publish, close, respond and manage commitments only within an
authorized organization, process and territory scope.

### Moderator

Can moderate only when the role and moderation policy are enabled for the
consultation.

### Facilitator

Can support the process only through explicitly granted permissions. The role
does not imply institutional response, moderation or commitment permissions.

## Auditability Expectations

Audit records are required for:

* consultation publication and closure;
* moderation decisions;
* institutional responses;
* outcome summary publication;
* commitment creation and material modification;
* commitment progress, evidence and completion;
* eligibility or moderation policy changes.

Audit records remain distinct from Domain Events and public evidence.

## Requirement Model

Public Consultation-specific requirements use 30 stable identifiers:

| Range | Concern |
| --- | --- |
| `BP-PC-001` to `BP-PC-005` | Scope, actors and public access |
| `BP-PC-006` to `BP-PC-010` | Lifecycle and optional stages |
| `BP-PC-011` to `BP-PC-015` | Modules, patterns and Shared Services |
| `BP-PC-016` to `BP-PC-020` | Contribution, eligibility and moderation |
| `BP-PC-021` to `BP-PC-025` | Outcomes, responses and commitments |
| `BP-PC-026` to `BP-PC-030` | Traceability, evidence and conformance |

Each requirement maps to applicable cross-cutting contracts, a responsible
component and expected evidence.

## Evidence-Based Conformance

The conformance matrix uses:

```text
Blueprint requirement
→ applicable cross-cutting contracts
→ responsible component
→ expected evidence
→ result
```

Expected evidence includes:

* OpenAPI operations;
* event schemas;
* lifecycle and civic journey tests;
* authorization policy tests;
* audit record schemas and tests;
* interoperability adapter contracts;
* accessibility and localization reviews;
* the Civic Design System mapping.

Provisional Decide and Account mappings must be disclosed as conformance gaps,
not silently treated as complete pattern conformance.

## Information Architecture

The Blueprint specification is published as a hierarchical Mintlify suite:

```text
Civic Blueprints
└── Public Consultation v0
    ├── Overview
    ├── Scope And Actors
    ├── Lifecycle
    ├── Composition
    ├── Civic Journeys
    ├── Contract Expectations
    └── Conformance
```

The current `public-consultation-v0.mdx` becomes the concise overview and index.
Detail pages live under `apps/specs/blueprints/public-consultation-v0/`.

The Design System mapping remains under `apps/specs/design-system/` with
bidirectional links.

## Validation Strategy

Sprint 4 validation includes:

* JSON validation for Mintlify navigation;
* broken-link validation;
* uniqueness and completeness checks for `BP-PC-001` through `BP-PC-030`;
* traceability review against the Blueprint Profile and common spec structure;
* traceability review against applicable `API-*`, `EVT-*`, `AUTH-*`, `AUD-*`,
  `INT-*` and `CONF-*` requirements;
* repository lint and type checking;
* confirmation that no runtime API, Module implementation, Payload schema or
  landing content changed.

## Risks And Trade-Offs

### Provisional Experience Coverage

Decide and Account do not yet have dedicated pattern specs. The Blueprint can
map to them but cannot claim complete Design System conformance for those
moments.

### Module Contract Depth

Module v0 specs are scheduled after this Blueprint. Sprint 4 defines expected
actions and events without freezing Module DTOs or internal invariants.

### Configurable Moderation

Supporting immediate and pre-moderated publication increases conformance
surface, but avoids coupling the reusable Blueprint to one institutional
moderation policy.

### Optional Stages

Keeping `DELIBERATE` and `EVALUATE` visible preserves the complete consultation
model, while making them optional protects the v0 delivery path from premature
Module dependencies.

## Deferred Work

The following work is deferred:

* detailed Participation, Contribution and Accountability Module specs;
* dedicated Decide and Account pattern specs;
* advanced public deliberation;
* formal decision mechanisms;
* runtime APIs, event producers and persistence;
* automated conformance tooling;
* stable Blueprint release governance.

## Success Criteria

Sprint 4 is complete when:

* Public Consultation v0 implements every section of the Blueprint Profile and
  common spec structure;
* the complete v0 journey is understandable without reading Module internals;
* Participation, Contribution and Accountability ownership remains explicit;
* Deliberation and Decision remain optional;
* publication and moderation policy is visible and configurable;
* outcome summary and commitment obligations are explicit;
* 30 Blueprint requirements map to cross-cutting contracts and evidence;
* the Mintlify navigation presents the Blueprint as a hierarchy rather than a
  single linear page;
* no runtime implementation is introduced.
