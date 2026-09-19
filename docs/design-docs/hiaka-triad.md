# Hiaka Triad

## Purpose

Hiaka is organized around three essential concepts:

1. Civic Design System
2. Civic Stack Model
3. Civic Stack Specs

Together, they define how Hiaka designs, models and implements trustworthy
civic technology. They are complementary domains. None of them replaces the
others.

## Civic Design System

The Civic Design System is an autonomous Hiaka domain for civic product
experience.

It answers:

> How should a civic technology interface behave, guide, reassure and include?

It owns:

* civic experience principles;
* experience standards;
* interaction patterns;
* accessibility and localization expectations;
* experience conformance;
* design-system governance.

It is both a design framework and a standard/spec for civic experience
conformance.

It does not own civic domain rules. Those belong to the Civic Stack Model. It
also does not own module APIs, events or interoperability contracts. Those
belong to the Civic Stack Specs.

Civic Design System specs are part of the Civic Design System domain. They are
not the same thing as Civic Stack Specs.

Reference:

* [Civic Design System](./civic-design-system.md)

## Civic Stack Model

The Civic Stack Model is the conceptual architecture for composing civic
services.

It answers:

> What reusable concepts make up a civic participation service?

It owns:

* Civic Modules;
* Civic Patterns;
* Civic Blueprints;
* Shared Digital Services;
* composition rules;
* architectural boundaries;
* civic product principles.

It does not define visual interaction details. Those belong to the Civic Design
System.

Reference:

* [Civic Stack product specification](../product-specs/civic-stack.md)

## Civic Stack Specs

The Civic Stack Specs are the implementation-contract and technical
conformance layer.

They answer:

> How should teams implement, integrate and verify Hiaka components?

They own:

* module specifications;
* blueprint specifications;
* API contracts;
* domain events;
* authorization rules;
* interoperability expectations;
* implementation conformance guidance.

They should stay precise enough for implementation. They should not become
marketing copy or high-level conceptual storytelling.

Reference:

* `apps/specs`

## Boundary Rule

Use this rule when deciding where a decision belongs:

```text
Experience decision -> Civic Design System
Conceptual composition decision -> Civic Stack Model
Implementation contract decision -> Civic Stack Specs
```

Examples:

* a process-status experience standard belongs first to the Civic Design
  System;
* the meaning of a participation stage belongs to the Civic Stack Model;
* the API shape for publishing a consultation belongs to the Civic Stack Specs.

The word "specs" can appear in more than one domain. Design System specs
describe civic experience standards. Civic Stack Specs describe implementation
contracts for stack capabilities.

## Hub Structure

The public hub should make the triad visible:

```text
Landing site
  -> explains the triad to decision makers, institutions, funders and contributors

Specifications portal
  -> documents the triad for implementers, architects and evaluators

Hub UI infrastructure
  -> supports the landing and specs experiences
```

The landing experience should help readers understand Hiaka quickly. The specs
experience should help builders understand the relevant specifications without
collapsing all specs into the Civic Stack Specs pillar.

## Roadmap

The post-Sprint 1 roadmap is documented in
[Specs-Ready Hub Roadmap](./specs-ready-roadmap.md). It plans the sequence from
Civic Design System foundation to a builder-ready hub for stack model and
implementation specs.
