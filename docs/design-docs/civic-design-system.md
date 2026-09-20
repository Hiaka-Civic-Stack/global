# Civic Design System

## Purpose

The Hiaka Civic Design System is the Civic Stack Model component for civic
product experience.

It is both:

* a civic-tech design framework for creating trustworthy public participation
  products;
* a civic experience standard that products can use for specification,
  conformance review and improvement.

The Civic Design System is not the visual identity of the Hiaka hub. It is not
Payload, Mintlify, shadcn, `packages/ui` or any current implementation detail
of this repository.

The hub presents the Civic Design System and may contain examples or local UI
infrastructure. The hub does not define the system by itself.

Within the Civic Stack Model, the Civic Design System generalizes the former
standalone Civic Patterns concept. Civic Patterns remain named, but they live
inside the Civic Design System.

## Relationship To Radius

Radius is useful as an inspiration because it treats design systems as
meta-frameworks: governance, tokens, adoption, design-to-code alignment and
quality practices matter as much as component inventory.

Hiaka applies that mindset to civic technology. The Civic Design System should
not begin as a component kit. It should begin as a model for the civic intents,
semantic language and patterns that make digital public participation legible,
inclusive and auditable.

References:

* Rangle Radius: <https://rangle.io/radius>
* Radius Workspace: <https://github.com/rangle/radius-workspace>

## Model Boundary

The Civic Design System owns civic experience rules and standards inside the
Civic Stack Model. It does not own module business rules or blueprint lifecycle
contracts.

```text
Civic Stack Model
  -> Civic Modules
  -> Civic Design System
       -> Civic Patterns
  -> Civic Blueprints
  -> Shared Digital Services

Civic Stack Specs
  -> specs for all model components
  -> APIs, events, authorization, interoperability and conformance
```

Important rules:

* Civic Design System is part of the Civic Stack Model.
* Civic Design System specs are part of Civic Stack Specs.
* Civic Patterns are concepts of the Civic Design System, not a separate
  top-level layer.
* Standards, conformance, tokens, components, Figma bridge and implementation
  guidance are operational dimensions, not conceptual layers.

## Civic Principles

Civic principles are transverse foundations. They govern every part of the
Conceptual Model and every operational artifact, but they are not a separate
layer.

Every design decision should be traceable to one or more principles:

* **Trust**: people can identify actors, authority, process state, deadlines,
  responsibilities and next steps.
* **Inclusion**: products support different literacy levels, devices, bandwidth
  conditions, languages and participation contexts.
* **Transparency**: rules, eligibility, status changes and public outcomes are
  inspectable without internal knowledge.
* **Auditability**: important civic actions expose traceable actor, time,
  state, reason, evidence and process relationship when relevant.
* **Territory awareness**: products represent territorial scope without
  hard-coding one country or administrative hierarchy into the design language.
* **Localization**: products support Malagasy and French from the beginning;
  English may be used for developer-facing documentation.
* **Accessibility**: products are keyboard-accessible, screen-reader friendly
  and readable under realistic contrast, zoom, device and connectivity
  constraints.

## Conceptual Model

The Conceptual Model defines the reusable civic experience language of the
Design System.

```text
Conceptual Model
  -> Intent Layer
  -> Semantic Layer
  -> Pattern Layer
```

The layers are not page types or UI components. They are conceptual lenses that
help teams design and evaluate civic products before choosing an implementation.

## Intent Layer

The Intent Layer names the civic jobs people need to accomplish in a public
participation product.

It answers:

> What is the civic purpose of this experience?

Initial civic intents include:

* understand a public process;
* know whether one can participate;
* contribute to a bounded civic process;
* compare, discuss or deliberate around public input;
* verify an official response, decision or rationale;
* follow a decision, commitment or implementation progress.

Intent-driven design prevents teams from starting with screens, components or
generic workflows. A product surface should first be justified by the civic job
it helps people complete.

## Semantic Layer

The Semantic Layer defines the civic language used across products,
documentation, specs and implementation.

It answers:

> Which civic meanings must remain consistent across products?

The Semantic Layer is broader than semantic tokens. It includes:

* actors: institution, participant, facilitator, moderator, decision maker,
  observer, implementation owner;
* processes: consultation, initiative, participatory budget, co-creation,
  commitment tracking;
* stages: draft, scheduled, open, under review, responded, decided, committed,
  archived;
* statuses: eligibility, contribution state, moderation state, response state,
  decision state, commitment progress;
* evidence: official documents, submitted attachments, response rationale,
  decision rationale, progress proof;
* official responses: institutional answer, rejection reason, merge decision,
  follow-up action;
* decisions: selected option, mandate, rationale, publication date,
  responsible institution;
* commitments: obligation, responsible actor, milestone, progress update,
  evidence, due date;
* territories: scope, jurisdiction, administrative hierarchy, local
  configuration;
* accountability progress: milestone state, latest update, next expected
  update, evidence trail;
* relations: contribution-to-response, response-to-decision,
  decision-to-commitment, commitment-to-progress.

This layer gives design, product and engineering teams a shared vocabulary. It
also creates the bridge from civic experience design to specs, APIs, events and
future implementation artifacts.

## Pattern Layer

The Pattern Layer realizes civic intents through the Semantic Layer.

It answers:

> Which recurring civic experience pattern should be used here?

Initial Civic Design System patterns:

* **Inform**: publish official information, process rules, dates, territorial
  scope and institutional responsibilities.
* **Consult**: ask a public, community or stakeholder group for input within a
  bounded civic process.
* **Contribute**: allow participants to submit ideas, proposals, documents,
  comments or evidence.
* **Deliberate**: support discussion, comparison, argumentation, moderation and
  collective sense-making.
* **Decide**: represent public decisions, institutional responses, mandates,
  rationales and outcomes.
* **Account**: track commitments, milestones, evidence, progress and public
  follow-up.

Patterns are not UI components by themselves. They are Civic Stack Model
concepts inside the Civic Design System and can be implemented through many
tools, libraries or applications.

## Operational Model

The Operational Model makes the Conceptual Model usable, reviewable and
eventually implementable.

```text
Operational Model
  -> Standards and conformance
  -> Reference implementation artifacts
```

These are operational dimensions, not conceptual layers.

## Standards And Conformance

Standards and conformance define how products prove that they respect the Civic
Design System.

They answer:

> How can a product be reviewed against the civic experience model?

Conformance should check whether a product:

* starts from explicit civic intents;
* uses the shared semantic language consistently;
* applies the correct Civic Design System patterns;
* makes process state, actor responsibility, eligibility and next steps clear;
* preserves accessibility and localization under realistic content;
* exposes public evidence and accountability where relevant;
* respects the boundaries of the Civic Stack Model.

Conformance criteria for the Civic Design System are specified through Civic
Stack Specs. They can begin as manual review checklists. Automated testing,
design linting and implementation certification can come later when stable
artifacts exist.

## Applicable Specs

Civic Design System specs should follow a stable structure:

* purpose;
* civic intent;
* semantic concepts;
* patterns;
* module touchpoints;
* accessibility;
* localization;
* conformance checks;
* examples;
* non-goals.

The first applicable specs are published in the Mintlify specs portal:

* `design-system/spec-structure`;
* `design-system/intents/understand-process`;
* `design-system/intents/know-participation-eligibility`;
* `design-system/intents/contribute-bounded-process`;
* `design-system/patterns/inform`;
* `design-system/patterns/consult`;
* `design-system/patterns/contribute`;
* `design-system/public-consultation-v0-mapping`.

## Reference Implementation Artifacts

Reference implementation artifacts help builders turn the model into usable
products.

They may include:

* token definitions for repeated civic meanings;
* UI component reference implementations;
* Figma bridge or design assets;
* examples of product implementation;
* implementation guidance and accessibility examples;
* conformance review checklists.

These artifacts are downstream of the Conceptual Model. Tokens, components and
Figma assets should be introduced only when they express stable civic intents,
semantic meanings or patterns.

## Governance

The Civic Design System should be governed as a civic product.

Add an intent when:

* it expresses a recurring civic job;
* it applies across multiple civic products or blueprints;
* it can be reviewed through concrete product examples.

Add a semantic concept when:

* the meaning repeats across products, specs or APIs;
* inconsistent naming would weaken trust, auditability or interoperability;
* the concept has clear relationships to actors, processes, evidence,
  decisions, commitments or territories.

Add a pattern when:

* the interaction repeats across civic processes;
* it realizes one or more civic intents;
* it can be described without naming one product page;
* it has clear accessibility, localization and public-trust implications.

Add a token, component or Figma artifact when:

* the implementation meaning is stable across products;
* the expected behavior can be tested or reviewed;
* the artifact supports civic clarity rather than isolated decoration.

Contribution workflow:

1. Identify the civic intent and audience.
2. Check whether existing semantic concepts and patterns already apply.
3. Propose the smallest reusable experience contract.
4. Document intended use, non-use and conformance expectations.
5. Validate accessibility, localization and long-content behavior.

## Future Implementation Workspace

The current hub documents and presents the Civic Design System as a component
of the Civic Stack Model. A future dedicated repository can contain the
canonical implementation workspace for that component.

Light orientation for that future repository:

```text
hiaka-civic-design-system/
  specs/
  tokens/
  components/
  figma/
  examples/
  conformance/
```

The future repository is expected to contain:

* Civic Design System specs aligned with Civic Stack Specs;
* token definitions;
* UI component reference implementation;
* Figma bridge or design assets;
* examples of product implementation;
* conformance guidance and review checklists.

This is an orientation, not a frozen repository contract. The hub should avoid
pretending that its local UI package is the canonical implementation of the
Civic Design System.
