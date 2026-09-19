# Civic Design System

## Purpose

The Hiaka Civic Design System is an autonomous Hiaka domain for designing
civic technology products.

It is both:

* a civic-tech design framework for creating trustworthy participation
  experiences;
* an experience standard that products can use for conformance, review and
  improvement.

The Civic Design System is not the visual identity of the Hiaka hub. It is not
Payload, Mintlify, shadcn, `packages/ui` or any current implementation detail
of this repository.

The hub presents the Civic Design System and may use local UI infrastructure to
illustrate it. The hub does not define the system by itself.

## Relationship To Radius

Radius is useful as an inspiration because it treats design systems as
meta-frameworks: governance, tokens, adoption, design-to-code alignment and
quality practices matter as much as component inventory.

Hiaka applies that mindset to civic technology.

The Civic Design System should help teams answer:

* what makes a civic interface trustworthy;
* how participation flows should guide people;
* how public actions remain legible and auditable;
* how localization, territory and accessibility affect product design;
* how an implementation can show conformance to civic experience standards.

References:

* Rangle Radius: <https://rangle.io/radius>
* Radius Workspace: <https://github.com/rangle/radius-workspace>

## Domain Boundary

The Civic Design System owns experience rules and standards. It does not own
civic domain rules, module APIs or blueprint lifecycle contracts.

```text
Civic Design System
  -> civic experience framework
  -> interface standards
  -> interaction patterns
  -> experience conformance

Civic Stack Model
  -> conceptual composition model
  -> Modules, Patterns, Blueprints and Shared Digital Services

Civic Stack Specs
  -> implementation contracts
  -> APIs, events, authorization, interoperability and technical conformance
```

Important distinction:

* Civic Design System specs belong to the Civic Design System domain.
* Civic Stack Specs belong to the implementation-contract domain.
* Both may be presented in the same specs portal, but they are not the same
  pillar.

## Layer 1: Civic Principles

Every design decision should be traceable to one or more civic principles.

### Trust

Interfaces should make institutional actors, process state, deadlines and
responsibilities clear. Users should understand who is asking, who decides and
what happens next.

### Inclusion

Interfaces should support different literacy levels, devices, bandwidth
conditions, languages and participation contexts. Clarity is not decorative; it
is access.

### Transparency

The system should expose process rules, eligibility, status changes and public
outcomes in ways people can inspect without needing internal knowledge.

### Auditability

Important civic actions should leave visible traces: actor, time, state,
reason, evidence and relationship to the public process when relevant.

### Territory Awareness

Interfaces should represent territorial scope without hard-coding one country
or administrative hierarchy into the design language.

### Localization

Text, layout density and component behavior should support Malagasy and French
from the beginning. English may be used for developer-facing documentation.

### Accessibility

Products should be keyboard-accessible, screen-reader friendly and readable
under realistic contrast, zoom, device and connectivity constraints.

## Layer 2: Experience Standards

The Civic Design System should define standards that product teams can use to
evaluate civic experience quality.

Initial standards:

* process status is visible and understandable;
* public actions name the actor, timing and next step;
* eligibility and participation scope are explained before action;
* institutional responses are separated from participant contributions;
* territorial scope is represented without assuming one administrative model;
* public evidence and accountability progress are traceable;
* language, text length and layout support Malagasy and French;
* accessibility expectations are documented for each reusable pattern.

These standards are experience contracts. They are different from API
contracts.

## Layer 3: Tokens And Visual Language

The Civic Design System may define tokens, but tokens are not the product by
themselves.

Token layers:

* primitive tokens for raw values such as color, spacing, typography and
  motion;
* semantic tokens for interface roles such as background, foreground, action,
  warning, success and destructive;
* civic-purpose tokens for recurring civic meanings such as process state,
  participation status, public evidence, eligibility, consultation stage,
  accountability progress and territorial scope.

Civic-purpose tokens should be introduced only when a meaning repeats across
multiple civic products or surfaces.

## Layer 4: Civic Interaction Patterns

Hiaka should name recurring civic interactions so design, product and
engineering teams can share one vocabulary.

### Inform

Publish official information, process rules, dates, territorial scope and
institutional responsibilities.

### Consult

Ask a public, community or stakeholder group for input within a bounded civic
process.

### Contribute

Allow participants to submit ideas, proposals, documents, comments or evidence.

### Deliberate

Support discussion, comparison, argumentation, moderation and collective
sense-making.

### Decide

Represent public decisions, institutional responses, mandates, rationales and
outcomes.

### Account

Track commitments, milestones, evidence, progress and public follow-up.

These patterns are not UI components by themselves. They are civic experience
patterns that can be implemented through many tools, libraries or applications.

## Layer 5: Conformance

The Civic Design System should support conformance review for products that
claim to follow Hiaka experience standards.

Conformance should answer:

* does the product make civic process state visible;
* does it communicate actor, authority, responsibility and next step;
* does it preserve accessibility and localization under realistic content;
* does it expose public evidence and accountability where relevant;
* does it avoid hiding domain uncertainty behind visual polish;
* does it respect the boundaries of the Civic Stack Model.

Conformance can begin as manual review checklists. Automated testing and design
linting can come later when stable artifacts exist.

## Layer 6: Governance

The Civic Design System should be governed as a civic product.

Add a principle when:

* it expresses a recurring civic experience concern;
* it improves decisions across several products;
* it can be reviewed through concrete examples.

Add a pattern when:

* the interaction repeats across civic processes;
* it can be described without naming one product page;
* it has clear accessibility, localization and public-trust implications.

Add a token or component specification when:

* the interface meaning repeats across products;
* the expected behavior can be tested or reviewed;
* the artifact supports civic clarity rather than isolated decoration.

Contribution workflow:

1. Identify the civic job and audience.
2. Check whether an existing principle, standard or pattern already applies.
3. Propose the smallest reusable experience contract.
4. Document intended use, non-use and conformance expectations.
5. Validate accessibility, localization and long-content behavior.

## Future Repository Orientation

The current hub documents and presents the Civic Design System. A future
dedicated repository should contain the canonical implementation workspace for
the domain.

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

* Civic Design System specs;
* token definitions;
* UI component reference implementation;
* Figma bridge or design assets;
* examples of product implementation;
* conformance guidance and review checklists.

This is an orientation, not a frozen repository contract. The hub should avoid
pretending that its local UI package is the canonical implementation of the
Civic Design System.
