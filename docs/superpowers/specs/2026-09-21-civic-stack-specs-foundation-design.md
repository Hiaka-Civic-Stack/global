# Civic Stack Specs Foundation Design

## Status

Approved design for Sprint 3.

The specifications created by this sprint are normative drafts. They are
precise enough to guide implementation and conformance review, but they are not
yet stable specifications.

## Purpose

Sprint 3 turns Civic Stack Specs into a coherent contract layer for the
components of the Civic Stack Model.

It establishes:

* a common specification core;
* specialized profiles for different model components;
* normative language and requirement identifiers;
* cross-cutting contracts for APIs, events, authorization, auditability,
  interoperability and conformance;
* a Mintlify information architecture organized around contracts.

The sprint does not implement runtime APIs, Payload schemas, tokens,
components, repositories or automated conformance tooling.

## Design Principles

The specification framework must be:

* vendor-neutral;
* implementation-agnostic where possible;
* explicit about responsibilities and non-responsibilities;
* testable through observable requirements;
* interoperable through stable, documented contracts;
* applicable to independently versioned component repositories;
* distinct from the conceptual Civic Stack Model.

The framework must preserve the architectural rule:

```text
Civic Modules + Civic Design System patterns -> Civic Blueprints
                                      |
                                      +-- supported by Shared Digital Services
```

## Contract Kernel And Profiles

Hiaka uses a Contract Kernel plus specialized profiles.

The Contract Kernel defines the obligations shared by every Hiaka
specification. A specialized profile extends the kernel for one type of Civic
Stack Model component.

Every specification must declare one primary profile. A specification may
declare additional profiles only when it genuinely specifies multiple
component types. This prevents hybrid documents with unclear ownership.

### Common Specification Core

Every Hiaka specification must contain:

1. Identity: title, identifier, version, status and owners.
2. Purpose and problem statement.
3. Scope, responsibilities and non-responsibilities.
4. Assumptions and dependencies.
5. Actors and consumers.
6. Domain concepts and terminology.
7. Interfaces and integration expectations.
8. Data exchange expectations.
9. Cross-cutting obligations.
10. Conformance requirements and expected evidence.
11. Risks and trade-offs.
12. Open questions.
13. Change history.

Sections may state that they are not applicable only when the specification
provides a reason. A section must not be silently omitted.

### Module Profile

The Module profile adds:

* domain concepts and invariants;
* commands and queries;
* domain events;
* API surface;
* authorization policies;
* persistence boundaries;
* external ports;
* test expectations.

A Module specification must remain independent from any single Civic
Blueprint.

### Blueprint Profile

The Blueprint profile adds:

* actors;
* stages and lifecycle;
* required Civic Modules;
* required Civic Design System patterns;
* key civic journeys;
* process-specific composition constraints;
* expected actions and events;
* audit requirements;
* Blueprint conformance checks.

A Blueprint specification composes component contracts. It must not duplicate
or take ownership of Module business rules.

### Civic Design System Profile

The Civic Design System profile adds:

* civic intent;
* semantic concepts;
* patterns;
* Module touchpoints;
* accessibility;
* localization;
* conformance checks;
* examples;
* non-goals.

This profile incorporates the Design System specification structure created in
Sprint 1A. It does not replace that structure with API-oriented sections that
do not apply to civic experience specifications.

### Shared Service Profile

The Shared Service profile adds:

* capability boundary;
* consumer-facing ports;
* integration contracts;
* data handling constraints;
* security expectations;
* availability and recovery expectations;
* observability expectations;
* vendor-neutral adapter requirements.

A Shared Service specification must not redefine generic infrastructure as a
Civic Module.

## Normative Language

Hiaka specifications use the normative keywords `MUST`, `MUST NOT`, `SHOULD`,
`SHOULD NOT` and `MAY`.

Their meaning follows this policy:

* `MUST` and `MUST NOT` identify mandatory conformance requirements.
* `SHOULD` and `SHOULD NOT` identify recommended requirements. A documented,
  evidence-backed exception is required when they are not followed.
* `MAY` identifies an optional capability that must remain interoperable with
  implementations that omit it.

Normative statements must be specific, observable and linked to expected
evidence. Explanatory prose and examples must not introduce hidden normative
requirements.

## Requirement Identifiers

Each normative requirement receives a stable identifier scoped by contract
domain:

| Domain | Prefix | Example |
| --- | --- | --- |
| API conventions | `API` | `API-001` |
| Domain events | `EVT` | `EVT-001` |
| Authorization | `AUTH` | `AUTH-001` |
| Auditability | `AUD` | `AUD-001` |
| Interoperability | `INT` | `INT-001` |
| Conformance | `CONF` | `CONF-001` |

Identifiers are never renumbered after publication. Removed requirements are
marked deprecated so that existing conformance evidence remains traceable.

Component-specific requirements may introduce a component prefix in later
sprints. Sprint 3 defines only the cross-cutting identifier namespaces.

## Cross-Cutting Contracts

### API Conventions

The API contract defines:

* REST as the initial application protocol;
* resource and action naming;
* explicit business actions for meaningful state transitions;
* transport DTO and domain model separation;
* standard errors;
* pagination and filtering;
* idempotency expectations;
* versioning and compatibility;
* OpenAPI documentation obligations.

Requirements use the `API-*` namespace.

### Domain Events

The Domain Events contract defines:

* event names expressed as completed facts;
* a common event envelope;
* event identity, type and version;
* occurrence time;
* actor and subject references where appropriate;
* correlation and causation identifiers;
* payload compatibility;
* the distinction between Domain Events and audit records.

Requirements use the `EVT-*` namespace.

### Authorization

The Authorization contract defines:

* enforcement at the application or domain boundary;
* actor, role, permission and policy concepts;
* resource and territorial scope;
* eligibility as distinct from authentication;
* separation of verified identity and public profile;
* explicit denial behavior;
* evidence required for policy enforcement.

Requirements use the `AUTH-*` namespace.

### Auditability

The Auditability contract defines:

* which civic actions require audit records;
* actor, timestamp, previous state, new state and reason;
* source and provenance;
* integrity and access expectations;
* retention considerations;
* the distinction between public evidence and internal audit records;
* the distinction between audit records and Domain Events.

Requirements use the `AUD-*` namespace.

### Interoperability

The Interoperability contract defines:

* open and documented interfaces;
* shared schemas and stable identifiers;
* ports and adapters for Shared Digital Services;
* vendor neutrality;
* compatibility and version negotiation;
* localization and territory representation expectations;
* required versus optional dependencies.

Requirements use the `INT-*` namespace.

### Conformance

The Conformance contract defines:

* how normative requirements are evaluated;
* acceptable forms of evidence;
* the requirements-to-evidence matrix;
* exception handling for `SHOULD` requirements;
* result classifications;
* reporting expectations.

The initial result classifications are:

* conformant;
* partially conformant;
* non-conformant.

Requirements use the `CONF-*` namespace.

## Evidence-Based Conformance

A conformance claim must identify evidence for each applicable mandatory
requirement.

Evidence may include:

* an OpenAPI operation;
* an event schema;
* an authorization policy;
* an automated test;
* an audit record definition;
* an interoperability adapter contract;
* an accessibility or localization review;
* a documented architectural decision.

A declaration without inspectable evidence is not sufficient for conformance.

Each cross-cutting contract page must include:

1. Purpose and scope.
2. Normative requirements with identifiers.
3. Non-goals.
4. Expected evidence.
5. Conformant and non-conformant examples.
6. Dependencies on other contracts.

## Specification Lifecycle

Sprint 3 specifications use `draft` status.

Draft specifications are normative but not stable. Implementers may use them
for planning, implementation and review, while expecting compatible refinement
before stabilization.

This sprint defines only the meaning of `draft`. The complete lifecycle
vocabulary, promotion criteria and governance workflow will be defined after
the framework has been validated by Public Consultation v0 and the first
Module specifications.

## Mintlify Information Architecture

The Civic Stack Specs tab will use this hierarchy:

```text
Start Here
└── Civic Stack Specs

Specification Framework
├── Framework Overview
├── Normative Language
├── Common Spec Structure
└── Specification Profiles
    ├── Module Profile
    ├── Blueprint Profile
    ├── Civic Design System Profile
    └── Shared Service Profile

Cross-Cutting Contracts
├── API Conventions
├── Domain Events
├── Authorization
├── Auditability
├── Interoperability
└── Conformance

Component Specifications
├── Civic Design System
├── Civic Modules
└── Civic Blueprints

Repository Strategy
```

The source files will be grouped under:

```text
apps/specs/
├── framework/
│   ├── index.mdx
│   ├── normative-language.mdx
│   ├── common-spec-structure.mdx
│   └── profiles/
└── contracts/
    ├── api-conventions.mdx
    ├── domain-events.mdx
    ├── authorization.mdx
    ├── auditability.mdx
    ├── interoperability.mdx
    └── conformance.mdx
```

Existing component specifications remain in their current locations. Sprint 3
links them to the appropriate profile but does not migrate or rewrite them.

## Validation Strategy

Sprint 3 validation includes:

* JSON validation for `apps/specs/docs.json`;
* Mintlify broken-link validation;
* repository type checking and linting;
* Markdown whitespace validation;
* a requirement identifier uniqueness check;
* a manual traceability review between the common core, profiles and
  cross-cutting contracts;
* a manual review against `docs/product-specs/civic-stack.md`.

No runtime build, Payload seed or landing build is required unless the landing
is changed.

## Deferred Work

The following work is intentionally deferred:

* applying the Blueprint profile fully to Public Consultation v0 in Sprint 4;
* applying the Module profile to Participation, Contribution and
  Accountability in Sprint 5;
* creating canonical external specification repositories;
* machine-readable specification schemas;
* automated conformance tooling;
* stable-status governance and release automation;
* runtime API or event implementations.

## Success Criteria

Sprint 3 is complete when:

* every future Hiaka spec has one common core and a primary profile;
* normative requirements use defined keywords and stable domain identifiers;
* the six cross-cutting contracts are documented and evidence-oriented;
* Mintlify is navigable by framework, contract and component specification;
* existing Design System specs remain compatible with their specialized
  profile;
* the framework is ready to be validated by Public Consultation v0 without
  prematurely freezing machine-readable schemas or repository boundaries.
