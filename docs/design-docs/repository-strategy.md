# Repository Strategy

## Purpose

Hiaka should use a hub-and-modules repository strategy.

This repository is the canonical public hub for the Hiaka Civic Stack. It
should be a Turborepo monorepo containing the public landing application and the
public specifications application, plus shared packages used by those apps.

The hub monorepo must not become the implementation repository for every Civic
Module. Civic Modules should remain independently maintainable in their own
repositories.

## Repository Types

### Public Hub Monorepo

Example repository:

```text
hiaka-civic-stack
```

Responsibilities:

* explain the Hiaka vision and architecture
* host the Payload landing app
* host the Mintlify specifications app
* host shared packages used by the hub applications
* publish Civic Module, Civic Design System and Civic Blueprint specifications
* define cross-stack principles and invariants
* document interoperability expectations
* document implementation playbooks
* link to module and reference implementation repositories

Recommended structure:

```text
hiaka-civic-stack/
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
    ├── design-docs/
    └── exec-plans/
```

The landing experience should be comparable in role to a public project site.
The specifications experience should be comparable in role to a dedicated specs
portal.

### Shared Hub Packages

The hub monorepo should include shared packages for code reused by the landing
and specifications apps.

Recommended initial packages:

```text
packages/content
packages/config
packages/ui
```

`packages/ui` should contain reusable React components for the hub experience.
It may use shadcn/ui components copied into the codebase and adapted for the
hub's visual identity, accessibility requirements and content needs.

The UI package is hub infrastructure. It is not the canonical implementation of
the Civic Design System. It must not contain Civic Module domain logic or
pretend to define Civic Design System standards.

### Civic Design System Repository

The Civic Design System should eventually have a dedicated repository as a
component of the Civic Stack Model.

Light orientation:

```text
hiaka-civic-design-system
```

This repository is expected to contain the Design System's specs, token
definitions, UI component reference implementation, Figma bridge or design
assets, examples and conformance guidance. Its specs are part of Civic Stack
Specs because Civic Stack Specs specify the components of the Civic Stack
Model.

The repository should implement and document the Civic Design System's
intent-driven and semantic model: Intent Layer, Semantic Layer and Pattern
Layer, with standards/conformance and reference implementation artifacts as
operational dimensions.

This is an orientation, not a locked repository contract. Until that repository
exists, the hub can present the doctrine and current specs orientation, but it
should not treat `packages/ui`, Payload blocks or shadcn as the Design System
itself.

### Civic Module Repositories

Example repositories:

```text
hiaka-module-participation
hiaka-module-contribution
hiaka-module-deliberation
hiaka-module-decision
hiaka-module-accountability
```

Each Civic Module repository owns one reusable civic capability. It should
contain the module's domain model, application services, API contracts, domain
events, tests, persistence adapters where applicable and module documentation.

A Civic Module repository must not depend on one specific Civic Blueprint.

### Shared Contract Repositories

Example repositories:

```text
hiaka-contracts
hiaka-events
hiaka-sdk
```

Shared contract repositories define stable interfaces used across modules,
applications and adapters.

They should evolve carefully, with versioned compatibility expectations.

### Adapter Repositories

Example repositories:

```text
hiaka-adapter-identity-keycloak
hiaka-adapter-territory
hiaka-adapter-notification
hiaka-adapter-documents
```

Adapters connect Hiaka modules to shared digital services such as identity,
territory registries, notifications, document storage, GIS, search and audit
infrastructure.

Adapters must not leak vendor-specific concepts into the civic domain model.

### Application and Blueprint Repositories

Example repositories:

```text
hiaka-app-public-consultation
hiaka-blueprint-public-consultation
```

Application repositories compose modules, patterns and adapters into deployable
services.

Blueprint repositories may contain reusable process configuration,
documentation and examples for a complete civic process.

## GovStack-Like Philosophy

Hiaka applies a building-block approach to civic participation.

GovStack focuses on reusable digital public infrastructure building blocks
across government services. Hiaka focuses on reusable civic participation
building blocks: participation, contribution, deliberation, decision and
accountability.

The goal is not to create a single civic application. The goal is to make civic
services composable from independently useful modules with clear contracts.

## Initial Repository Priority

Before creating every module repository, this hub should define:

* the Payload landing app information architecture
* the Mintlify specifications portal structure
* the Civic Design System intent-driven and semantic model component
* the Public Consultation v0 blueprint
* the Participation module specification
* the Contribution module specification
* the Accountability module specification
* the shared event model
* the shared authorization model
* the interoperability rules for external digital public services
