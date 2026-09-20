# Hiaka Civic Stack Model And Specs

## Purpose

Hiaka is organized around two essential concepts:

1. Civic Stack Model
2. Civic Stack Specs

Together, they define what the stack is made of and how its components are
specified, implemented and evaluated.

The Civic Design System is no longer a top-level peer concept. It is a
component of the Civic Stack Model. It generalizes the former standalone Civic
Patterns concept through an intent-driven and semantic model. Patterns remain
named, but they live inside the Civic Design System.

## Civic Stack Model

The Civic Stack Model is the conceptual model for composing civic services.

It answers:

> What reusable concepts make up a civic participation service?

It owns:

* Civic Modules;
* Civic Design System;
* Civic Blueprints;
* Shared Digital Services as support services consumed by the model;
* composition rules;
* architectural boundaries;
* civic product principles.

The core composition rule is:

```text
Civic Blueprints
  compose Civic Modules
  and Civic Design System patterns
  to form complete civic processes
```

### Civic Modules

Civic Modules own reusable civic capabilities and business rules.

Initial modules:

* Participation;
* Contribution;
* Deliberation;
* Decision;
* Accountability.

A Civic Module must not depend on one specific Civic Blueprint.

### Civic Design System

The Civic Design System is the model component for civic experience.

It owns:

* the Intent Layer for recurring civic jobs;
* the Semantic Layer for shared civic language;
* the Pattern Layer for reusable civic experience patterns;
* transverse civic principles such as trust, inclusion, transparency,
  auditability, territory awareness, localization and accessibility;
* operational standards, conformance and reference implementation orientation.

Civic Patterns are recurring civic experience patterns such as inform, consult,
contribute, deliberate, decide and account. They are not a separate top-level
layer of the stack.

Standards, conformance, tokens, components, Figma bridge and implementation
guidance are operational dimensions. They are not conceptual layers of the
Design System.

### Civic Blueprints

Civic Blueprints describe complete civic processes. They compose Civic Modules
and Civic Design System patterns into a process that institutions and
participants can understand and implement.

Initial blueprints include:

* Public Consultation;
* Citizen Initiative;
* Participatory Budget;
* Policy Co-Creation;
* Public Commitment Tracking.

### Shared Digital Services

Shared Digital Services are support services consumed by the model. They are
not Civic Modules.

Examples:

* identity;
* participant verification;
* territory registry;
* notifications;
* document storage;
* GIS;
* search;
* audit infrastructure.

## Civic Stack Specs

The Civic Stack Specs are the specification layer for the components of the
Civic Stack Model.

They answer:

> How should teams specify, implement, integrate and verify model components?

They include:

* module specs;
* design system specs;
* blueprint specs;
* shared service and interface specs;
* API contracts;
* domain events;
* authorization rules;
* interoperability expectations;
* conformance guidance.

Civic Stack Specs should stay precise enough for implementation and review.
They should not become marketing copy or high-level conceptual storytelling.

## Boundary Rule

Use this rule when deciding where a decision belongs:

```text
Conceptual composition decision -> Civic Stack Model
Specification or conformance decision -> Civic Stack Specs
Hub presentation decision -> landing/specs app implementation
```

Examples:

* the meaning of Participation as a reusable capability belongs to the Civic
  Stack Model;
* the experience pattern for consulting a public belongs to the Civic Design
  System inside the Model;
* the specification for implementing a contribution API belongs to Civic Stack
  Specs;
* the layout of a landing page belongs to the hub implementation.

## Hub Structure

The public hub should make the two-concept model visible:

```text
Landing site
  -> explains Civic Stack Model and Civic Stack Specs

Specifications portal
  -> presents specs for model components

Hub UI infrastructure
  -> supports the landing and specs experiences
```

The landing experience should help readers understand Hiaka quickly. The specs
experience should help builders implement and evaluate the components of the
Civic Stack Model.

## Roadmap

The roadmap is documented in
[Specs-Ready Hub Roadmap](./specs-ready-roadmap.md). It plans the sequence from
Civic Design System foundation to a builder-ready hub for model and specs.
