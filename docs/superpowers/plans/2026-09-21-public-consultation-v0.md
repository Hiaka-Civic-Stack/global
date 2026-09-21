# Public Consultation v0 Specification Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Publish Public Consultation v0 as the first complete, evidence-based Civic Blueprint specification using the Hiaka Blueprint Profile and cross-cutting contracts.

**Architecture:** Keep `apps/specs/blueprints/public-consultation-v0.mdx` as a concise overview and split normative detail across six focused pages under `apps/specs/blueprints/public-consultation-v0/`. Define each `BP-PC-*` requirement exactly once, then assemble traceability and navigation without copying Module business rules into the Blueprint.

**Tech Stack:** Mintlify MDX, JSON navigation, Markdown, pnpm, Turborepo.

**Spec:** `docs/superpowers/specs/2026-09-21-public-consultation-v0-design.md`

## Global Constraints

* Specification identity is `BP-PUBLIC-CONSULTATION`, version `0.1.0`, status `draft`, primary profile `Blueprint`.
* Blueprint-specific requirements use `BP-PC-001` through `BP-PC-030` and are never renumbered after publication.
* Define every `BP-PC-*` requirement exactly once under a `### BP-PC-NNN` heading; references elsewhere do not redefine it.
* Required Modules are Participation, Contribution and Accountability.
* Deliberation and Decision remain optional and do not block the v0 critical path.
* Required specified patterns are Inform, Consult and Contribute.
* Decide and Account remain provisional mappings until dedicated pattern specs exist.
* Contribution publication policy is configurable as `immediate` or `pre_moderated`.
* Published consultation content is publicly readable; a Participant account is required to contribute.
* Verified identity, public profile, Participant, Account and Eligibility remain distinct.
* A public outcome summary is mandatory after contribution closure; individual responses are optional.
* A public commitment is required when an institution announces a concrete action.
* Reference `API-*`, `EVT-*`, `AUTH-*`, `AUD-*`, `INT-*` and `CONF-*` requirements instead of copying their normative text.
* Do not define Module DTOs, persistence models or internal business invariants.
* Do not modify runtime UI, Payload schemas, landing content, Module implementations or external repositories.

## File Map

Create:

```text
apps/specs/blueprints/public-consultation-v0/scope-and-actors.mdx
apps/specs/blueprints/public-consultation-v0/lifecycle.mdx
apps/specs/blueprints/public-consultation-v0/composition.mdx
apps/specs/blueprints/public-consultation-v0/civic-journeys.mdx
apps/specs/blueprints/public-consultation-v0/contract-expectations.mdx
apps/specs/blueprints/public-consultation-v0/conformance.mdx
```

Modify:

```text
apps/specs/blueprints/public-consultation-v0.mdx
apps/specs/design-system/public-consultation-v0-mapping.mdx
apps/specs/docs.json
docs/product-specs/civic-stack.md
docs/design-docs/specs-ready-roadmap.md
```

---

### Task 1: Define Scope And Actors

**Files:**

* Create: `apps/specs/blueprints/public-consultation-v0/scope-and-actors.mdx`

**Interfaces:**

* Consumes: Blueprint Profile, Common Spec Structure, Authorization and Interoperability contracts.
* Produces: canonical definitions of v0 scope, actors, identity boundaries and requirements `BP-PC-001` through `BP-PC-005`.

- [ ] **Step 1: Create specification identity and scope**

Create `scope-and-actors.mdx` with frontmatter title `Scope And Actors` and a draft callout containing:

```text
Blueprint: BP-PUBLIC-CONSULTATION
Version: 0.1.0
Status: draft
Primary profile: Blueprint
```

Describe the full flow from institution configuration through public commitment tracking. Add explicit non-goals for electoral voting, binding ballots, advanced deliberation, formal decision mechanisms, workflow engines, mandatory national identity and mandatory individual response.

- [ ] **Step 2: Define actors and boundaries**

Define Public Visitor, Participant and Institution Manager as required actors. Define Moderator and Facilitator as optional roles. State responsibilities and non-responsibilities for each actor.

Make these boundaries explicit:

* public content can be read without authentication;
* contribution requires a Participant account;
* verification is conditional on eligibility policy;
* Facilitator does not inherit institutional or moderation permissions;
* public profile remains separate from verified identity.

- [ ] **Step 3: Add scope and actor requirements**

Define these headings and exact normative statements:

```markdown
### BP-PC-001

Published consultation information, published contributions, public outcome
summaries, commitments and public evidence **MUST** be readable without
authentication.

### BP-PC-002

The Blueprint **MUST** support Public Visitor, Participant and Institution
Manager as required actors.

### BP-PC-003

A person **MUST** have a Participant account before submitting a contribution.

### BP-PC-004

Account, Participant, Verified Identity, Public Profile and Eligibility
**MUST** remain distinct concepts.

### BP-PC-005

Moderator and Facilitator **MAY** be enabled as optional roles and **MUST NOT**
receive Institution Manager permissions implicitly.
```

For each requirement, add responsible component, applicable `AUTH-*` or
`INT-*` references and expected evidence.

- [ ] **Step 4: Validate scope page**

Run:

```bash
rg -n '^### BP-PC-00[1-5]$' apps/specs/blueprints/public-consultation-v0/scope-and-actors.mdx
git diff --check
pnpm --filter @hiaka/specs typecheck
```

Expected: five requirement headings, clean whitespace and no broken links.

- [ ] **Step 5: Commit scope and actors**

```bash
git add apps/specs/blueprints/public-consultation-v0/scope-and-actors.mdx
git commit -m "Specify public consultation actors and scope"
```

---

### Task 2: Define Lifecycle And Optional Stages

**Files:**

* Create: `apps/specs/blueprints/public-consultation-v0/lifecycle.mdx`

**Interfaces:**

* Consumes: scope and actors from Task 1 plus Participation ownership from the Civic Stack Model.
* Produces: canonical stage/state distinction and requirements `BP-PC-006` through `BP-PC-010`.

- [ ] **Step 1: Document civic experience stages**

Create `lifecycle.mdx` with the stage sequence:

```text
DISCOVER → CONTRIBUTE → [DELIBERATE] → [EVALUATE] → RESPOND → TRACK
```

Explain that bracketed stages are optional. `DELIBERATE` can introduce the Deliberation Module. `EVALUATE` can remain internal review unless a formal Decision capability is added.

- [ ] **Step 2: Document operational states**

Define this separate state sequence:

```text
DRAFT → PUBLISHED → OPEN → CLOSED → RESPONDED → TRACKING → COMPLETED
```

For each state, describe entry condition, public meaning and allowed next state. State that `CLOSED` means contributions are no longer accepted, while `RESPONDED` means the public outcome summary has been published.

- [ ] **Step 3: Add lifecycle requirements**

Define:

```markdown
### BP-PC-006

The Blueprint **MUST** distinguish civic experience stages from operational
process states.

### BP-PC-007

The operational lifecycle **MUST** support `DRAFT`, `PUBLISHED`, `OPEN`,
`CLOSED`, `RESPONDED`, `TRACKING` and `COMPLETED` as distinct states.

### BP-PC-008

`CLOSED` **MUST** remain distinct from `RESPONDED`; closing contributions
**MUST NOT** imply that the institution has published its outcome.

### BP-PC-009

The `DELIBERATE` stage **MAY** be enabled and **MUST NOT** make the Deliberation
Module mandatory when it is absent.

### BP-PC-010

The `EVALUATE` stage **MAY** represent internal institutional review and
**MUST NOT** make the Decision Module mandatory unless a formal decision
mechanism is configured.
```

Map each requirement to responsible component, expected lifecycle tests and applicable event/audit requirements.

- [ ] **Step 4: Validate lifecycle page**

Run:

```bash
rg -n '^### BP-PC-0(06|07|08|09|10)$' apps/specs/blueprints/public-consultation-v0/lifecycle.mdx
git diff --check
pnpm --filter @hiaka/specs typecheck
```

Expected: five requirement headings and successful validation.

- [ ] **Step 5: Commit lifecycle**

```bash
git add apps/specs/blueprints/public-consultation-v0/lifecycle.mdx
git commit -m "Specify public consultation lifecycle"
```

---

### Task 3: Define Component Composition

**Files:**

* Create: `apps/specs/blueprints/public-consultation-v0/composition.mdx`

**Interfaces:**

* Consumes: Module and Design System model pages, Blueprint Profile, Shared Service Profile.
* Produces: required/optional component matrix and requirements `BP-PC-011` through `BP-PC-015`.

- [ ] **Step 1: Document Module ownership**

Create `composition.mdx` and define:

* Participation ownership of consultation lifecycle, periods, territory and eligibility policy reference;
* Contribution ownership of drafts, submission, publication, moderation and contribution responses;
* Accountability ownership of commitments, owners, milestones, progress, evidence and completion;
* Deliberation and Decision as optional Modules under the conditions approved in the design.

Do not define DTOs, persistence models or Module invariants beyond these ownership boundaries.

- [ ] **Step 2: Document pattern composition**

Define Inform, Consult and Contribute as required patterns. Define Decide and Account as provisional mappings and explain that they cannot support full Design System conformance until dedicated pattern specs exist.

- [ ] **Step 3: Document Shared Service classifications**

Add a matrix classifying:

* Authentication: required;
* Identity or verification: conditional;
* Territory registry: conditional;
* Document storage: conditional;
* Notifications: optional;
* Audit infrastructure: required.

For each service, state trigger, consumer and interface boundary.

- [ ] **Step 4: Add composition requirements**

Define:

```markdown
### BP-PC-011

Public Consultation v0 **MUST** compose Participation, Contribution and
Accountability as required Civic Modules.

### BP-PC-012

The Blueprint **MUST NOT** duplicate or take ownership of business rules owned
by its required or optional Civic Modules.

### BP-PC-013

The Blueprint **MUST** apply Inform, Consult and Contribute as required Civic
Design System patterns.

### BP-PC-014

Decide and Account mappings **MUST** be disclosed as provisional until their
dedicated pattern specifications exist.

### BP-PC-015

Every Shared Digital Service dependency **MUST** be classified as required,
conditional or optional and consumed through an explicit interface.
```

Attach model links, responsible components and expected composition evidence.

- [ ] **Step 5: Validate and commit composition**

Run:

```bash
rg -n '^### BP-PC-01[1-5]$' apps/specs/blueprints/public-consultation-v0/composition.mdx
git diff --check
pnpm --filter @hiaka/specs typecheck
```

Then commit:

```bash
git add apps/specs/blueprints/public-consultation-v0/composition.mdx
git commit -m "Specify public consultation composition"
```

---

### Task 4: Define Civic Journeys And Institutional Outcomes

**Files:**

* Create: `apps/specs/blueprints/public-consultation-v0/civic-journeys.mdx`

**Interfaces:**

* Consumes: actors, lifecycle and composition from Tasks 1-3 plus the Design System mapping.
* Produces: end-to-end journeys and requirements `BP-PC-016` through `BP-PC-025`.

- [ ] **Step 1: Write the four key journeys**

Create `civic-journeys.mdx` and document preconditions, steps, outcome, failure states and responsible components for:

1. Institution configures and publishes a consultation.
2. Participant checks eligibility and contributes.
3. Institution closes participation and publishes the outcome.
4. Institution creates a commitment and the public follows progress.

Use the existing Design System mapping for intent, semantics and patterns. Do not restate its conformance checks as Blueprint requirements.

- [ ] **Step 2: Define publication, eligibility and moderation rules**

Document `immediate` and `pre_moderated` policies. Explain when eligibility is evaluated, how state is communicated and which failure states participants can recover from.

Define requirements:

```markdown
### BP-PC-016

Each consultation **MUST** declare either `immediate` or `pre_moderated` as its
contribution publication policy before contributions are submitted.

### BP-PC-017

A contribution **MUST NOT** be submitted when the consultation is outside its
open contribution period.

### BP-PC-018

Applicable eligibility rules **MUST** be evaluated before a contribution is
accepted for publication.

### BP-PC-019

Moderation status and an appropriate reason **MUST** be visible to the affected
Participant without exposing sensitive administrative information.

### BP-PC-020

Eligibility or identity verification **MUST NOT** expose verified legal
identity through the Participant's public profile by default.
```

- [ ] **Step 3: Define outcome, response and commitment rules**

Document the mandatory outcome summary fields: received contributions, consideration method, institutional conclusion, planned next steps and remaining uncertainty.

Define:

```markdown
### BP-PC-021

The institution **MUST** publish one public outcome summary after the
contribution period closes.

### BP-PC-022

The outcome summary **MUST** explain what was received, how contributions were
considered, what was concluded, which next steps are planned and which
uncertainties remain.

### BP-PC-023

Individual institutional responses **MAY** be published and, when present,
**MUST** be visibly institutional and linked to the relevant contribution.

### BP-PC-024

When an institution announces a concrete action, it **MUST** create a public
commitment for that action.

### BP-PC-025

A public commitment **MUST** identify its consultation, responsible actor,
current status, progress history and public evidence, and **SHOULD** link to
related contributions or the outcome summary where relevant.
```

- [ ] **Step 4: Validate and commit civic journeys**

Run:

```bash
rg -n '^### BP-PC-0(1[6-9]|2[0-5])$' apps/specs/blueprints/public-consultation-v0/civic-journeys.mdx
git diff --check
pnpm --filter @hiaka/specs typecheck
```

Then commit:

```bash
git add apps/specs/blueprints/public-consultation-v0/civic-journeys.mdx
git commit -m "Specify public consultation civic journeys"
```

---

### Task 5: Define Contract Expectations And Conformance

**Files:**

* Create: `apps/specs/blueprints/public-consultation-v0/contract-expectations.mdx`
* Create: `apps/specs/blueprints/public-consultation-v0/conformance.mdx`

**Interfaces:**

* Consumes: all Blueprint pages from Tasks 1-4 and all Sprint 3 cross-cutting contracts.
* Produces: expected actions/events, authorization/audit mappings, requirements `BP-PC-026` through `BP-PC-030` and the complete evidence matrix.

- [ ] **Step 1: Document expected API actions**

Create `contract-expectations.mdx` and list these Blueprint-level action expectations:

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

State that Module specs own DTOs, errors and validation. Map actions to responsible Module and applicable `API-*`, `AUTH-*`, `AUD-*` and `INT-*` requirements.

- [ ] **Step 2: Document expected Domain Events**

List:

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

Map events to producer Module and applicable `EVT-*`, `AUD-*` and `INT-*` requirements. State that Module specs own event schemas.

- [ ] **Step 3: Document authorization and audit expectations**

Add an actor/action matrix for Public Visitor, Participant, Institution Manager, Moderator and Facilitator.

List mandatory audit actions:

* consultation publication and closure;
* moderation decisions;
* institutional responses;
* outcome publication;
* commitment creation and material modification;
* commitment progress, evidence and completion;
* eligibility or moderation policy changes.

- [ ] **Step 4: Add contract and traceability requirements**

Define in `contract-expectations.mdx`:

```markdown
### BP-PC-026

The Blueprint specification **MUST** identify expected API actions and map each
action to its responsible Module and applicable cross-cutting requirements.

### BP-PC-027

The Blueprint specification **MUST** identify expected Domain Events and map
each event to its responsible producer and applicable cross-cutting
requirements.

### BP-PC-028

Every protected Blueprint action **MUST** identify its allowed actor, resource
scope, process or territory context and denial expectation.

### BP-PC-029

Consultation publication, closure, moderation, institutional response, outcome
publication, policy changes and commitment state changes **MUST** produce
reviewable audit evidence.
```

- [ ] **Step 5: Create the conformance page and final requirement**

Create `conformance.mdx`. Define:

```markdown
### BP-PC-030

A Public Consultation v0 conformance claim **MUST** provide evidence for every
applicable `BP-PC-*` requirement and disclose provisional Decide and Account
mapping gaps.
```

Add one matrix row for each `BP-PC-001` through `BP-PC-030` with columns:

```markdown
| Requirement | Cross-cutting contracts | Responsible component | Expected evidence | Result |
```

Use `Not evaluated` as the draft result. Reference requirement IDs without restating their normative text.

Add risk/trade-off and open-question sections covering provisional patterns, future Module contract depth, configurable moderation and optional stages. Add a `0.1.0` change-history entry.

- [ ] **Step 6: Validate requirements and conformance matrix**

Run:

```bash
definitions=$(rg --no-filename -o '^### BP-PC-[0-9]{3}$' apps/specs/blueprints/public-consultation-v0 apps/specs/blueprints/public-consultation-v0.mdx | sort -u | wc -l | tr -d ' ')
test "$definitions" = "30" || { echo "expected 30 definitions, found $definitions"; exit 1; }

for number in $(seq -w 1 30); do
  rg -q "^### BP-PC-0${number}$" apps/specs/blueprints/public-consultation-v0 || { echo "missing BP-PC-0${number}"; exit 1; }
done

matrix_rows=$(rg --no-filename -o '^\| BP-PC-[0-9]{3} \|' apps/specs/blueprints/public-consultation-v0/conformance.mdx | wc -l | tr -d ' ')
test "$matrix_rows" = "30" || { echo "expected 30 matrix rows, found $matrix_rows"; exit 1; }
```

Expected: exit code 0 and no output.

Then run:

```bash
git diff --check
pnpm --filter @hiaka/specs typecheck
```

- [ ] **Step 7: Commit contract expectations and conformance**

```bash
git add apps/specs/blueprints/public-consultation-v0/contract-expectations.mdx apps/specs/blueprints/public-consultation-v0/conformance.mdx
git commit -m "Specify public consultation contracts and conformance"
```

---

### Task 6: Integrate Blueprint Navigation And Documentation

**Files:**

* Modify: `apps/specs/blueprints/public-consultation-v0.mdx`
* Modify: `apps/specs/design-system/public-consultation-v0-mapping.mdx`
* Modify: `apps/specs/docs.json`
* Modify: `docs/product-specs/civic-stack.md`
* Modify: `docs/design-docs/specs-ready-roadmap.md`

**Interfaces:**

* Consumes: all six Blueprint detail pages and 30 requirements.
* Produces: hierarchical Mintlify navigation, concise Blueprint index and bidirectional Design System links.

- [ ] **Step 1: Rewrite the Blueprint overview as an index**

Update `public-consultation-v0.mdx` with:

* identity, version, status and primary profile;
* purpose and complete end-to-end flow;
* required and optional Modules;
* required and provisional patterns;
* links to all six detail pages;
* explicit links to the Blueprint Profile, Common Spec Structure and Design System mapping;
* concise assumptions, dependencies, risks and non-goals without duplicating detail-page requirements.

- [ ] **Step 2: Add bidirectional Design System boundary links**

Update `design-system/public-consultation-v0-mapping.mdx` to link to Blueprint scope, lifecycle, composition and journeys pages. State explicitly that the Blueprint pages own lifecycle and composition while the mapping owns the experience view.

- [ ] **Step 3: Create hierarchical Mintlify navigation**

Replace the single `blueprints/public-consultation-v0` entry under `Civic Blueprints` with a nested `Public Consultation v0` group containing:

```json
[
  "blueprints/public-consultation-v0",
  "blueprints/public-consultation-v0/scope-and-actors",
  "blueprints/public-consultation-v0/lifecycle",
  "blueprints/public-consultation-v0/composition",
  "blueprints/public-consultation-v0/civic-journeys",
  "blueprints/public-consultation-v0/contract-expectations",
  "blueprints/public-consultation-v0/conformance"
]
```

- [ ] **Step 4: Align product documentation and roadmap**

Update the Public Consultation section in `docs/product-specs/civic-stack.md` to:

* show optional `DELIBERATE` and `EVALUATE` stages;
* list Participation, Contribution and Accountability as required;
* list Deliberation and Decision as optional;
* reference configurable moderation, mandatory outcome summary and conditional commitments;
* preserve Module ownership boundaries.

Update Sprint 4 in `docs/design-docs/specs-ready-roadmap.md` to reflect the implemented Blueprint suite and 30 evidence-based requirements. Do not mark Sprint 5 work complete.

- [ ] **Step 5: Validate navigation and complete repository**

Run:

```bash
node -e "JSON.parse(require('fs').readFileSync('apps/specs/docs.json', 'utf8')); console.log('docs.json valid')"
git diff --check
pnpm --filter @hiaka/specs typecheck
pnpm lint
pnpm typecheck
```

Expected: JSON valid, no whitespace errors, no broken links, lint exit 0 and typecheck exit 0.

- [ ] **Step 6: Run final traceability audit**

Run the 30-definition and 30-matrix-row commands from Task 5 again.

Then run:

```bash
rg -n "T[B]D|T[O]DO|F[I]XME|place[h]older" apps/specs/blueprints/public-consultation-v0 apps/specs/blueprints/public-consultation-v0.mdx
{ git diff --name-only origin/main...HEAD; git diff --name-only; } | sort -u
```

Expected: no placeholder output. Changed files are limited to Sprint 4 specs, navigation and doctrine; no landing, Payload or runtime implementation file appears.

- [ ] **Step 7: Commit Blueprint integration**

```bash
git add apps/specs/blueprints/public-consultation-v0.mdx apps/specs/design-system/public-consultation-v0-mapping.mdx apps/specs/docs.json docs/product-specs/civic-stack.md docs/design-docs/specs-ready-roadmap.md
git commit -m "Integrate public consultation blueprint navigation"
```

---

## Completion Gate

Before declaring Sprint 4 complete, confirm:

```bash
git diff --check
pnpm --filter @hiaka/specs typecheck
pnpm lint
pnpm typecheck
```

Verify manually:

* 30 unique `BP-PC-*` definitions exist and the evidence matrix has 30 rows;
* every Common Spec Structure section appears in the Blueprint suite or is justified in the overview;
* every Blueprint Profile section appears in the suite;
* Participation, Contribution and Accountability remain required and independently owned;
* Deliberation and Decision remain optional;
* Decide and Account remain disclosed as provisional mappings;
* the moderation policy, outcome summary and commitment rules match the approved design;
* no runtime or landing file changed.
