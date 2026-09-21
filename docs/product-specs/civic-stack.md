# Hiaka Civic Stack

## Purpose

Hiaka is an open-source Civic Stack for building transparent, inclusive and interoperable digital 
participation services.

Hiaka is designed first for Madagascar, while its core architecture must remain reusable in other 
institutional and territorial contexts.

Hiaka is not a single civic application.

It is a composable stack built around a conceptual model and a specification
layer.

The Civic Stack Model contains:

```text
Civic Modules
Civic Design System
  -> Civic Patterns
Civic Blueprints
Shared Digital Services
```

These concepts have distinct roles:

* Civic Modules own reusable civic capabilities and business rules.
* The Civic Design System owns civic intents, semantic language and experience
  patterns.
* Civic Blueprints compose Modules and Design System patterns into complete
  civic processes.
* Shared Digital Services support those components through explicit,
  vendor-neutral interfaces; they are not a fourth civic component layer.

The conceptual orientation is published under the Civic Stack Model section of
the specs portal. Detailed implementation and conformance contracts belong to
Civic Stack Specs.

The reference Hiaka application is only one possible consumer of the stack.

The stack must also be usable by third-party applications, government portals, local authorities, civil 
society organizations and other digital public services.

This repository is the public hub and specification source for the stack. It
should support a landing-page experience and a specifications experience,
similar in role to a public project site and a dedicated specs portal.

The hub is organized around two essential concepts:

* **Civic Stack Model**: the conceptual model for composing civic services from
  Modules, the Civic Design System, Blueprints and Shared Digital Services.
* **Civic Stack Specs**: the specification layer for the components of the
  Civic Stack Model: module specs, design system specs, blueprint specs, shared
  service/interface specs, APIs, events, authorization, interoperability and
  conformance.

The Civic Design System is part of the Civic Stack Model. It generalizes the
former standalone Civic Patterns concept through an intent-driven and semantic
model:
Intent Layer, Semantic Layer and Pattern Layer. Patterns remain named, but they
live inside the Civic Design System.

Civic Blueprints compose Civic Modules and Civic Design System patterns to form
complete civic processes.

The hub should be implemented as a Turborepo monorepo with a Payload app for
the landing site, a Mintlify app for the specifications portal and shared
packages used by those apps.

The hub's UI package is local hub infrastructure. It must not be treated as the
canonical Civic Design System. The Civic Design System may later have a
dedicated repository as a component of the Civic Stack Model, containing
reference implementation artifacts such as tokens, components, Figma bridge,
examples and conformance guidance.

Implementation repositories for individual Civic Modules should be independent
repositories with their own contracts, tests, release cycles and documentation.

## Civic Stack Specs Framework

Civic Stack Specs use a Contract Kernel + Profiles model.

The Contract Kernel defines the common structure and normative language shared
by all specifications. Four profiles extend it for Civic Modules, Civic
Blueprints, the Civic Design System and Shared Digital Services.

Current specifications are normative drafts. Requirements use explicit
`MUST`, `SHOULD` and `MAY` language and domain-scoped identifiers for the
specification framework, API, event, authorization, auditability,
interoperability and conformance contracts.

Conformance is evidence-based. A conformance claim must identify the spec
version and primary profile, then link each applicable mandatory requirement
to inspectable evidence.

---

# Product principles

All architecture and implementation decisions should follow these principles.

## Civic first

Model civic participation concepts explicitly.

Do not let framework, database or UI concepts define the domain.

## Modular

Capabilities must be separable and have explicit boundaries.

A feature that can be reused across multiple civic processes should not be implemented directly inside 
one blueprint.

Civic Modules should be independently maintainable and may live in separate
repositories.

## Composable

Complex civic services are assembled from reusable capabilities and interactions.

Avoid hard-coded end-to-end processes.

## API first

Every important capability must be accessible through a documented API.

The web application must consume the same application layer exposed to other clients.

Do not couple domain logic to Next.js pages or controllers.

## Open by default

Specifications, contracts and source code should be suitable for open-source publication.

Avoid proprietary dependencies when a reasonable open alternative exists.

## Interoperable

Identity, notifications, territorial registries, document storage and similar generic services must be 
accessed through explicit interfaces or adapters.

Hiaka Core must not require one specific identity provider or government system.

## Privacy preserving

Identity, eligibility and public participation identity are separate concepts.

Never expose personally identifiable information simply because a participant has been verified.

## Auditable

Important civic actions and institutional decisions must produce traceable records.

Status changes should retain actor, timestamp, previous state and reason where relevant.

## Inclusive

The architecture should support low-bandwidth interfaces and multiple channels.

Do not assume that all participants use a modern desktop browser.

## Localizable

User-facing content must be internationalized from the beginning.

The first supported locales are:

* Malagasy
* French

English may be used for technical documentation and developer-facing contracts.

## Territory aware

Civic activity can have a territorial scope.

The core must support hierarchical territories without hard-coding Madagascar-specific administrative 
levels.

---

# Core concepts

## Civic Module

A Civic Module is a reusable runtime capability that provides a coherent civic function.

It answers:

**What can the Civic Stack do?**

Definition:

> A reusable functional capability that provides a specific civic participation function and can be 
composed with other modules to support different democratic processes.

A Civic Module owns:

* its domain model
* business rules
* application use cases
* permissions
* events
* API contracts
* persistence interfaces
* validation rules

A Civic Module must not know which Civic Blueprint is using it.

### Initial Civic Modules

The first version of Hiaka should contain:

1. Participation
2. Contribution
3. Deliberation
4. Decision
5. Accountability

Assembly can be added after the first complete vertical slice.

### Participation Module

Responsibilities:

* civic process lifecycle
* process metadata
* stages
* participation period
* territorial scope
* participant eligibility policy references
* activated capabilities
* process status

Example capabilities:

* create process
* configure process
* publish process
* open stage
* close stage
* archive process

### Contribution Module

Responsibilities:

* citizen proposals
* ideas
* amendments
* submissions
* attachments references
* geographic references
* institutional responses

Example capabilities:

* create contribution
* edit draft
* publish contribution
* withdraw contribution
* moderate contribution
* respond to contribution
* link contribution to an outcome

### Deliberation Module

Responsibilities:

* discussions
* comments
* replies
* argumentation
* moderation state

Example capabilities:

* open discussion
* add contribution to discussion
* comment
* reply
* close discussion
* moderate content

### Decision Module

Responsibilities:

* support
* prioritization
* selection
* decision mechanisms
* decision records

Do not assume all decisions are votes.

A decision strategy should be configurable.

Possible strategies may include:

* SUPPORT
* SINGLE_CHOICE
* MULTIPLE_CHOICE
* RANKED_CHOICE
* BUDGET_ALLOCATION
* CONSENSUS
* INSTITUTIONAL_SELECTION

Electoral voting is explicitly outside the initial scope.

### Accountability Module

Responsibilities:

* public commitments
* implementation results
* responsible organizations
* milestones
* progress
* evidence
* status history

Example capabilities:

* create commitment
* assign responsible organization
* create milestone
* update progress
* attach evidence reference
* mark milestone complete
* complete commitment

---

# Civic Design System And Civic Patterns

The Civic Design System is the Civic Stack Model component that defines civic
product experience through:

* civic principles as transverse foundations;
* an Intent Layer for recurring civic jobs;
* a Semantic Layer for shared civic language;
* a Pattern Layer for reusable civic experience patterns;
* operational standards, conformance and reference implementation orientation.

A Civic Pattern describes a reusable civic experience pattern.

It answers:

**How should a recurring civic interaction be experienced and guided?**

Definition:

> A reusable civic experience pattern describing how civic actors perform,
understand and trust a recurring democratic action using one or more Civic
Modules.

A Civic Pattern does not own independent business data.

It realizes civic intents through the shared semantic language and guides how
capabilities exposed by Civic Modules are experienced by civic actors.

Examples:

* Publish civic information
* Submit a contribution
* Verify participant eligibility
* Support a contribution
* Moderate a contribution
* Run a deliberation
* Evaluate a contribution
* Publish an institutional response
* Record a decision
* Track a commitment

A Civic Pattern should define:

* id
* name
* purpose
* actors
* trigger
* preconditions
* related semantic concepts
* participating modules
* interaction steps
* outcome
* relevant API, event or module specs
* failure states

Example conceptual definition:

```yaml
id: submit-contribution
version: 1.0.0

actors:
  - participant

trigger:
  participant-starts-contribution

uses:
  - participation
  - contribution

semanticConcepts:
  - participant
  - eligibility
  - contribution-state
  - process-stage

preconditions:
  - process-is-open
  - contribution-stage-is-active
  - participant-is-eligible

steps:
  - create-draft
  - validate-content
  - validate-eligibility
  - publish-contribution

outcome:
  contribution-published
```

Patterns should initially be specified as part of the Civic Design System
specs.

Do not build a generic workflow engine until at least two real Blueprints demonstrate the need for one.

---

# Civic Blueprint

A Civic Blueprint is an adaptable end-to-end model of a civic process.

It answers:

**What civic service are we delivering?**

Definition:

> A reusable end-to-end model for delivering a civic or democratic process through a composition of 
Civic Modules, Civic Design System patterns, actors, rules and lifecycle stages.

A Blueprint defines:

* purpose
* actors
* eligibility
* territorial scope
* stages
* Civic Design System patterns
* required Civic Modules
* configuration
* inputs
* outputs
* transparency requirements
* lifecycle
* expected outcomes

A Blueprint should not duplicate domain logic implemented by a Civic Module.

---

# Initial Civic Blueprints

Implement specifications for these Blueprints.

Do not implement all of them simultaneously.

## Public Consultation

Primary reference Blueprint.

Lifecycle:

```text
DISCOVER
   ↓
CONTRIBUTE
   ↓
DELIBERATE
   ↓
EVALUATE
   ↓
RESPOND
   ↓
TRACK
```

Civic Design System patterns:

* publish civic information
* submit contribution
* discuss contribution
* evaluate contribution
* publish institutional response
* create commitment
* track commitment

Modules:

* Participation
* Contribution
* Deliberation
* Accountability

This Blueprint is the first end-to-end implementation target.

## Citizen Initiative

Lifecycle:

```text
CREATE
   ↓
VERIFY
   ↓
PUBLISH
   ↓
COLLECT SUPPORT
   ↓
REACH THRESHOLD
   ↓
REVIEW
   ↓
RESPOND
   ↓
TRACK
```

Modules:

* Participation
* Contribution
* Decision
* Deliberation
* Accountability

## Participatory Budget

Lifecycle:

```text
DISCOVER
   ↓
PROPOSE
   ↓
DELIBERATE
   ↓
TECHNICAL REVIEW
   ↓
COST
   ↓
PRIORITIZE
   ↓
SELECT
   ↓
IMPLEMENT
   ↓
TRACK
```

Modules:

* Participation
* Contribution
* Deliberation
* Decision
* Accountability

## Policy Co-Creation

Lifecycle:

```text
PUBLISH DRAFT
   ↓
COMMENT
   ↓
PROPOSE AMENDMENTS
   ↓
DELIBERATE
   ↓
REVIEW
   ↓
PUBLISH DECISIONS
   ↓
PUBLISH NEW VERSION
```

## Public Commitment Tracking

Lifecycle:

```text
COMMITMENT
   ↓
OWNER
   ↓
MILESTONES
   ↓
IMPLEMENTATION
   ↓
EVIDENCE
   ↓
COMPLETION
```

This Blueprint may also be embedded as the final part of other Blueprints.

---

# Shared Digital Services

Generic digital infrastructure is not part of the Civic Module layer.

Examples:

* identity
* authentication
* participant verification
* organizations
* territory registry
* notifications
* document storage
* search
* GIS
* audit infrastructure

Civic Modules communicate with these capabilities using ports and adapters.

Example:

```text
Contribution Module
        │
        ├── Identity Port
        ├── Territory Port
        ├── Document Port
        └── Notification Port
```

The core domain must not directly depend on Keycloak, S3, a specific GIS provider or a specific 
messaging provider.

---

# Identity model

Distinguish at least:

```text
Account
Participant
Verified Identity
Public Profile
Eligibility
```

These concepts must not collapse into one database entity.

A participant can be eligible for an action without exposing their legal identity publicly.

Authentication should use OpenID Connect through an adapter.

The reference implementation may use Keycloak.

---

# Territorial model

Territories must support arbitrary hierarchy.

Do not encode Region, District, Commune or Fokontany directly into Hiaka Core.

Conceptual model:

```typescript
TerritoryLevel {
  id
  code
  name
  order
}

Territory {
  id
  code
  name
  levelId
  parentId
}
```

A Madagascar implementation may configure:

```text
Region
District
Commune
Fokontany
```

without changing the core domain.

---

# Domain events

Important state changes must emit domain events.

Initial event catalogue:

```text
ProcessCreated
ProcessPublished
ProcessStageOpened
ProcessStageClosed

ContributionCreated
ContributionPublished
ContributionUpdated
ContributionWithdrawn
ContributionModerated
ContributionResponded

DeliberationOpened
CommentAdded
DeliberationClosed

SupportRecorded
DecisionRecorded

CommitmentCreated
CommitmentUpdated
MilestoneCreated
MilestoneCompleted
CommitmentCompleted
```

Events must contain stable identifiers and timestamps.

Do not put presentation-specific data into domain events.

---

# Auditability

Domain events and audit records serve different purposes.

Do not treat the event bus as the audit log.

Audit records should capture sensitive administrative actions such as:

* moderation
* permission changes
* institutional responses
* decision changes
* commitment progress changes

Where relevant capture:

```text
actor
action
resource
resourceId
timestamp
previousState
newState
reason
correlationId
```

---

# API conventions

Use REST for the initial public application API.

Generate and maintain an OpenAPI specification.

Resource examples:

```http
GET    /processes
POST   /processes
GET    /processes/{processId}

GET    /processes/{processId}/contributions
POST   /processes/{processId}/contributions

GET    /contributions/{contributionId}
PATCH  /contributions/{contributionId}
POST   /contributions/{contributionId}/publish

POST   /contributions/{contributionId}/support

GET    /commitments/{commitmentId}
PATCH  /commitments/{commitmentId}
```

Prefer explicit action endpoints for meaningful state transitions instead of generic status mutation.

Example:

```http
POST /contributions/{id}/publish
```

is preferred over:

```http
PATCH /contributions/{id}
{
  "status": "published"
}
```

when publishing requires business validation.

---

# Authorization

Authorization must be enforced in the application/domain boundary, not only in the frontend.

Initial roles may include:

```text
participant
facilitator
moderator
institution_manager
platform_admin
```

Do not rely exclusively on global roles.

Permissions may also depend on:

* organization
* process
* territory
* stage
* eligibility
* ownership

Model authorization so that contextual policies can evolve later.

---

# Technology baseline

Use TypeScript for the hub and reference implementations unless a module has a
documented reason to choose another stack.

Recommended baseline:

```text
pnpm
Turborepo
Next.js
Payload
Mintlify
shadcn/ui
NestJS

PostgreSQL
Prisma

OpenID Connect
Keycloak reference adapter

OpenAPI

Vitest or Jest
Playwright
```

Redis may be introduced only when a concrete use case requires it.

Do not add infrastructure merely because it may be useful later.

Prefer simple synchronous application flows first.

Introduce queues or event brokers when asynchronous processing is required by a real workflow.

---

# Repository structure

Hiaka should be organized as a Turborepo hub monorepo plus a federated
ecosystem of implementation repositories.

This repository is the public hub and specification source. It should contain:

```text
hiaka-civic-stack/
├── AGENTS.md
├── README.md
│
├── apps/
│   ├── landing/   # Payload public site and CMS
│   └── specs/     # Mintlify specifications portal
│
├── packages/
│   ├── content/
│   ├── config/
│   └── ui/        # hub UI primitives and content components
│
└── docs/
    ├── site/
    ├── product-specs/
    │   ├── civic-stack.md
    │   ├── modules/
    │   └── blueprints/
    │
    ├── design-docs/
    │   ├── module-contract.md
    │   ├── event-model.md
    │   ├── authorization.md
    │   └── interoperability.md
    │
    └── exec-plans/
        ├── active/
        └── completed/
```

Runtime implementations should live in separate repositories, for example:

```text
hiaka-module-participation
hiaka-module-contribution
hiaka-module-deliberation
hiaka-module-decision
hiaka-module-accountability
hiaka-civic-design-system
hiaka-contracts
hiaka-events
hiaka-sdk
hiaka-adapter-identity-keycloak
hiaka-app-public-consultation
```

Treat `docs/` as part of the product.

Architectural decisions must be documented alongside code changes when relevant.

---

# Dependency rules

Dependencies should point inward toward domain concepts.

Preferred direction:

```text
UI
 ↓
API
 ↓
Application
 ↓
Domain
 ↑
Adapters
```

A domain package must not import:

* Next.js
* NestJS controllers
* Prisma-generated clients
* Keycloak SDK
* HTTP clients

Infrastructure implements interfaces declared by the application or domain layer.

---

# Civic Module contract

Every Civic Module must expose a consistent structure.

Recommended module layout:

```text
modules/contribution/
├── domain/
│   ├── entities/
│   ├── value-objects/
│   ├── events/
│   └── policies/
│
├── application/
│   ├── commands/
│   ├── queries/
│   ├── ports/
│   └── services/
│
├── infrastructure/
│   ├── persistence/
│   └── adapters/
│
├── api/
│   ├── controllers/
│   └── dto/
│
├── tests/
└── README.md
```

Every module README should document:

* purpose
* scope
* capabilities
* entities
* states
* commands
* queries
* events
* permissions
* dependencies
* extension points

---

# Testing strategy

Every domain rule must be testable without booting the complete application.

Require:

* domain unit tests
* application use-case tests
* repository integration tests
* API contract tests
* critical end-to-end tests

The first Public Consultation vertical slice must include an end-to-end scenario covering:

```text
institution creates consultation
→ institution publishes consultation
→ participant submits contribution
→ contribution becomes public
→ institution responds
→ institution creates commitment
→ participant can view commitment progress
```

---

# Definition of done

A feature is complete only when:

* domain behavior is implemented
* tests cover important rules
* authorization is enforced
* API contract is documented
* relevant domain events exist
* audit requirements are respected
* localization is supported where user-facing
* documentation is updated
* linting passes
* type checking passes
* tests pass

Do not leave known failing validation behind.

---

# Non-goals for the first release

Do not build:

* national election infrastructure
* blockchain-based voting
* a generic BPM engine
* a generic low-code platform
* social-network engagement mechanics
* recommendation algorithms
* AI moderation as a core dependency
* mandatory microservice deployment for every Civic Module
* distributed event infrastructure before it is needed

Prefer a simple composed runtime first, even when Civic Module source code lives
in separate repositories.

Module boundaries must be strong enough to permit independent deployment later
without requiring distributed operations now.

---

# First implementation milestone

Build one complete thin vertical slice.

## Public Consultation v0

Support:

```text
Create process
Publish process
Open contribution stage
Submit contribution
Publish contribution
List contributions
Respond to contribution
Create commitment from contribution
Update commitment progress
View commitment
```

Modules involved:

```text
Participation
Contribution
Accountability
```

Deliberation and Decision should not block this milestone.

The purpose is to validate:

* module boundaries
* contracts
* authorization model
* domain event approach
* API structure
* persistence architecture
* web-to-API integration

---

# Codex working rules

Before implementing a substantial task:

1. Read `AGENTS.md`.
2. Read the relevant product spec.
3. Inspect existing module boundaries and conventions.
4. Identify the smallest coherent implementation.
5. Do not introduce a new abstraction without a concrete need.
6. Do not silently change the Civic Module, Civic Design System pattern or Civic Blueprint definitions.
7. If implementation reveals an architectural conflict, document it rather than working around the 
architecture invisibly.
8. Prefer extending existing patterns over creating parallel approaches.
9. Run all repository validation commands before completing the task.
10. Update documentation when behavior or architecture changes.

When uncertain between a generic abstraction and a concrete implementation, implement the simplest 
concrete version that preserves the documented module boundary.

---

# Architectural invariant

The following relationship must remain true throughout the project:

```text
Civic Blueprint
      ↓
composes

Civic Modules
and
Civic Design System patterns
      ↓
consume

Shared Digital Services
```

A Blueprint must not become a monolithic application.

A Pattern must not become the owner of core business data.

A Module must not become dependent on one Blueprint.

Shared digital infrastructure must not leak vendor-specific concerns into the civic domain.

---

# North star

Hiaka should make it possible to describe a civic service as composition rather than custom software.

Eventually, this:

```yaml
blueprint:
  id: public-consultation

  stages:
    - discover
    - contribute
    - deliberate
    - evaluate
    - respond
    - track

  patterns:
    - publish-information
    - submit-contribution
    - deliberate
    - evaluate-contribution
    - publish-response
    - track-commitment

  modules:
    - participation
    - contribution
    - deliberation
    - accountability
```

should be enough to describe the essential structure of a civic process independently from its user 
interface or infrastructure provider.

Do not build the generic Blueprint runtime until the concrete implementations demonstrate which parts 
truly need to be configurable.

**Specification first. Concrete implementation second. Generalization third.**
