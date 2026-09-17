# Hiaka Codex Instructions

Hiaka is an open-source Civic Stack for building transparent, inclusive and interoperable digital 
participation services.

This repository is the public hub and documentation source for Hiaka. It should
be a Turborepo monorepo containing a Payload landing app and a Mintlify
specifications app, plus shared packages including a UI library based on
shadcn/ui. It is not the implementation repository for every Civic Module.

The architecture is organized around:

**Civic Modules → Civic Patterns → Civic Blueprints**

Before making substantial changes, read the relevant documentation under `docs/`.

## Source of truth

Start with:

* `docs/product-specs/civic-stack.md`
* `ARCHITECTURE.md` when present
* relevant module documentation under `docs/product-specs/modules/`
* relevant Civic Pattern documentation under `docs/product-specs/patterns/`
* relevant Civic Blueprint documentation under `docs/product-specs/blueprints/`

Do not silently contradict documented architecture.

If implementation reveals a conflict with the specification, document the conflict and propose the 
smallest coherent change.

## Core architecture

Preserve this dependency model:

```text
Civic Blueprint
      ↓
composes

Civic Patterns
      ↓
coordinate

Civic Modules
      ↓
consume

Shared Digital Services
```

Keep these concepts distinct.

### Civic Modules

Civic Modules own reusable civic capabilities and business rules.

Initial modules:

* Participation
* Contribution
* Deliberation
* Decision
* Accountability

A Civic Module must not depend on a specific Civic Blueprint.

### Civic Patterns

Civic Patterns coordinate recurring civic interactions across one or more modules.

Patterns should not own core business data.

Do not introduce a generic workflow engine unless concrete use cases demonstrate the need.

### Civic Blueprints

Civic Blueprints describe complete civic processes by composing Patterns and Modules.

Initial Blueprints include:

* Public Consultation
* Citizen Initiative
* Participatory Budget
* Policy Co-Creation
* Public Commitment Tracking

Public Consultation is the first reference implementation.

## Engineering principles

Follow these principles when making architectural decisions:

* civic first
* modular
* composable
* API first
* open by default
* interoperable
* privacy preserving
* auditable
* inclusive
* localizable
* territory aware

Prefer simple implementations that preserve these principles over premature abstractions.

## Architecture style

Use independently versioned Civic Module repositories for module
implementations. A deployable application may still compose those modules into a
simple modular runtime before there is a demonstrated need for distributed
operations.

Do not create one microservice per Civic Module.

Dependencies should generally point inward:

```text
UI
 ↓
API
 ↓
Application
 ↓
Domain
 ↑
Infrastructure adapters
```

Domain code must not depend directly on:

* Next.js
* NestJS controllers
* Prisma clients
* Keycloak SDKs
* HTTP clients
* infrastructure-specific libraries

Infrastructure should implement ports declared by the application or domain layer.

## Shared digital services

Generic capabilities are not Civic Modules.

Examples:

* authentication
* identity
* participant verification
* territory registry
* notifications
* document storage
* GIS
* search
* audit infrastructure

Access these capabilities through explicit ports and adapters.

Do not make the civic domain depend on a specific vendor or implementation.

## Identity and privacy

Keep these concepts separate:

* Account
* Participant
* Verified Identity
* Public Profile
* Eligibility

Verification must not automatically expose legal identity publicly.

Authorization must be enforced in the application or domain boundary, not only in the frontend.

## Territory

Do not hard-code Madagascar-specific administrative levels into the core.

The territorial model must support arbitrary hierarchies.

Madagascar-specific configuration may define levels such as:

* Region
* District
* Commune
* Fokontany

without changing the core domain.

## API

Use REST for the initial application API.

Maintain an OpenAPI specification.

Prefer explicit business actions for meaningful state transitions.

Prefer:

```http
POST /contributions/{id}/publish
```

over generic status mutation when publishing requires domain validation.

Keep transport DTOs separate from domain entities.

## Domain events

Important state transitions should emit domain events.

Examples:

* ProcessPublished
* ContributionPublished
* ContributionResponded
* DecisionRecorded
* CommitmentCreated
* MilestoneCompleted
* CommitmentCompleted

Domain events and audit logs are different concerns.

Do not use the event bus as the audit log.

## Implementation approach

Before coding:

1. Read this file.
2. Read the relevant specification.
3. Inspect existing module boundaries and conventions.
4. Identify the smallest coherent vertical change.
5. Reuse existing abstractions where appropriate.

During implementation:

1. Keep business rules out of controllers and UI components.
2. Prefer explicit domain concepts over generic data structures.
3. Avoid abstractions introduced only for hypothetical future use.
4. Keep module boundaries explicit.
5. Do not bypass application services to access another module's persistence directly.
6. Keep APIs and domain events backward-compatible when practical.
7. Update documentation when behavior or architecture changes.

## Testing

Every important business rule should be testable without booting the complete application.

Use the appropriate combination of:

* domain unit tests
* application use-case tests
* persistence integration tests
* API contract tests
* end-to-end tests

For bug fixes, add a regression test when practical.

Do not complete a task with known failing tests, type errors or lint errors unless the failure is 
unrelated and explicitly documented.

## Validation

Before finishing a task, run the repository validation commands defined by the project.

At minimum, when available:

```bash
pnpm lint
pnpm typecheck
pnpm test
```

Run relevant integration or end-to-end tests when the change affects those areas.

Do not claim validation succeeded if it was not executed.

## Documentation

Treat documentation as part of the product.

When introducing or materially changing:

* a Civic Module
* a Civic Pattern
* a Civic Blueprint
* a domain event
* an API contract
* an architectural boundary
* an authorization rule

update the corresponding documentation.

Prefer documenting architectural decisions rather than leaving important reasoning only in code 
comments.

## Repository structure

This repository should stay focused on the public hub, specifications and
implementation guidance:

```text
README.md
apps/
  landing/   # Payload public site and CMS
  specs/     # Mintlify specifications portal

packages/
  content/
  config/
  ui/        # Hiaka Design System based on shadcn/ui

docs/
  site/
  product-specs/
    modules/
    patterns/
    blueprints/

  design-docs/

  exec-plans/
    active/
    completed/
```

Implementation repositories should be separate, for example:

```text
hiaka-module-participation
hiaka-module-contribution
hiaka-module-deliberation
hiaka-module-decision
hiaka-module-accountability
hiaka-contracts
hiaka-events
hiaka-sdk
hiaka-app-public-consultation
```

Follow existing repository structure when it has already evolved beyond this proposal.

Do not reorganize large parts of the repository without a clear architectural reason.

## Civic Module structure

When applicable, organize a Civic Module approximately as:

```text
module/
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
└── tests/
```

Use this as guidance, not as a reason to create empty directories.

## Scope control

Do not introduce these capabilities unless explicitly required:

* national election infrastructure
* blockchain voting
* generic BPM engines
* generic low-code platforms
* social-network engagement algorithms
* AI moderation as a required dependency
* distributed event infrastructure without a concrete need
* unnecessary microservices

Prefer:

**specification first → concrete implementation → generalization**

## First implementation priority

The first end-to-end target is **Public Consultation v0**.

Prioritize this flow:

```text
Institution creates consultation
        ↓
Institution publishes consultation
        ↓
Participant submits contribution
        ↓
Contribution is published
        ↓
Institution responds
        ↓
Institution creates commitment
        ↓
Commitment progress is updated
        ↓
Participant sees implementation progress
```

Initial modules involved:

* Participation
* Contribution
* Accountability

Deliberation and Decision should not block the first vertical slice.

## Definition of done

A change is complete when, where relevant:

* domain behavior is implemented
* authorization is enforced
* tests cover important rules
* API contracts are updated
* domain events are defined
* audit requirements are handled
* localization is respected
* documentation is updated
* lint passes
* type checking passes
* tests pass

## Final rule

When choosing between a broad generic abstraction and a concrete implementation, choose the simplest 
concrete implementation that preserves the documented Civic Module boundaries.

Do not optimize Hiaka for hypothetical complexity.

Optimize it for clarity, composability and trustworthy civic participation.
