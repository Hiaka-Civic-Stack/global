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
* host shared packages, including a UI library based on shadcn/ui
* publish Civic Module, Civic Pattern and Civic Blueprint specifications
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
│   └── ui/        # Hiaka Design System based on shadcn/ui
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

`packages/ui` should contain the shared design system and reusable React
components. It should be based on shadcn/ui components copied into the codebase,
owned by Hiaka and adapted for Hiaka's visual identity, accessibility
requirements and content needs.

The UI package should remain focused on presentation components for the hub. It
must not contain Civic Module domain logic.

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
* the Public Consultation v0 blueprint
* the Participation module specification
* the Contribution module specification
* the Accountability module specification
* the shared event model
* the shared authorization model
* the interoperability rules for external digital public services
