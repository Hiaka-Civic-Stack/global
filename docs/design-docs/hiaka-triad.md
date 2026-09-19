# Hiaka Triad

## Purpose

Hiaka is organized around three essential concepts:

1. Civic Design System
2. Civic Stack Model
3. Civic Stack Specs

Together, they define how Hiaka explains, designs and implements trustworthy
civic technology. They are complementary pillars. None of them replaces the
others.

## Civic Design System

The Civic Design System is the experience language for Hiaka.

It answers:

> How should a civic technology interface behave, guide, reassure and include?

It owns:

* civic UX principles;
* design tokens;
* component hierarchy;
* interaction patterns;
* design-system governance;
* accessibility, localization and adoption expectations.

It does not own civic domain rules. Those belong to the Civic Stack Model and
implementation specifications.

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

The Civic Stack Specs are the implementation and conformance layer.

They answer:

> How should teams implement, integrate and verify Hiaka components?

They own:

* module specifications;
* blueprint specifications;
* API contracts;
* domain events;
* authorization rules;
* interoperability expectations;
* conformance guidance.

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

* a process-status color belongs first to the Civic Design System;
* the meaning of a participation stage belongs to the Civic Stack Model;
* the API shape for publishing a consultation belongs to the Civic Stack Specs.

## Hub Structure

The public hub should make the triad visible:

```text
Landing site
  -> explains the triad to decision makers, institutions, funders and contributors

Specifications portal
  -> documents the triad for implementers, architects and evaluators

Shared UI package
  -> implements local hub UI primitives
```

The landing experience should help readers understand Hiaka quickly. The specs
experience should help builders implement Hiaka correctly.

## Roadmap

The post-Sprint 1 roadmap is documented in
[Specs-Ready Hub Roadmap](./specs-ready-roadmap.md). It plans the sequence from
Civic Design System foundation to a builder-ready specifications hub.
