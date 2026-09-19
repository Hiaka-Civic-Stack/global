# Civic Design System

## Purpose

The Hiaka Civic Design System is a standalone product model for builders of
civic technology interfaces.

It is inspired by Radius as a design system meta-framework: not a ready-made
component kit, but a way to structure tokens, components, adoption, governance
and design-to-code alignment. Hiaka applies that idea to civic technology.

The goal is not to make every interface look like the Hiaka hub. The goal is
to help civic product teams create trustworthy, inclusive, auditable,
localizable and coherent civic products while still allowing each product to
serve its own audience and institutional context.

## Relationship To Radius

Radius frames a design system as more than a component library. It includes
token management, component creation methods, adoption tracking, intake
processes and governance.

Hiaka should use the same meta-framework mindset:

* shadcn/ui is a technical substrate, not the Hiaka design language;
* the landing design system is separate from this Civic Design System product;
* tokens and components must express civic intent, not only brand styling;
* adoption, documentation and contribution rules are part of the system;
* design and engineering should share one vocabulary for components, tokens and
  interaction patterns.

References:

* Rangle Radius: <https://rangle.io/radius>
* Radius Workspace: <https://github.com/rangle/radius-workspace>

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

Components should be keyboard-accessible, screen-reader friendly and readable
under realistic contrast, zoom and mobile constraints.

## Layer 2: Design Tokens

Hiaka tokens should be more than raw values. They should form a bridge from
visual decisions to civic intent.

### Primitive Tokens

Primitive tokens hold raw values such as color scales, font families, spacing,
radius and motion timings. They should remain implementation-oriented and
rarely appear directly in product components.

### Semantic Tokens

Semantic tokens describe interface meaning: background, foreground, primary,
muted, border, ring, destructive, success, warning and similar roles. They are
the normal layer for components.

### Civic-Purpose Tokens

Civic-purpose tokens describe civic meaning: process state, participation
status, institutional action, public evidence, eligibility, consultation stage,
accountability progress and territorial scope.

These tokens should be introduced only when a recurring civic meaning appears
across multiple surfaces. They should not be invented for one-off decoration.

## Layer 3: Component Hierarchy

The component hierarchy separates civic product concepts from any one runtime
implementation.

```text
civic principles
  -> design tokens
  -> civic-purpose tokens
  -> component archetypes
  -> civic interaction patterns
  -> product implementation libraries
```

Rules:

* the Civic Design System defines reusable civic interface jobs, not one React
  implementation;
* runtime packages may implement this model later, but they are not the model
  itself;
* hub UI components and Payload editorial blocks are consumers or presentation
  surfaces, not the Civic Design System product;
* civic domain behavior belongs in civic product or module code, not in the
  design system.

## Layer 4: Civic Interaction Patterns

Hiaka should name recurring civic interactions so design and engineering can
reuse the same mental model across products.

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

These patterns are not UI components by themselves. They are lenses for
designing components, blocks, flows, states and documentation.

## Layer 5: Governance

The design system should be governed as a product.

Add a token when:

* the value represents a recurring semantic or civic meaning;
* multiple components or surfaces need the same role;
* changing the value centrally would preserve coherence.

Add a component when:

* the interface job repeats across multiple surfaces;
* the component can be described without referencing one page;
* the component has clear props and accessibility expectations;
* the component can be tested or visually reviewed independently.

Contribution workflow:

1. Identify the civic job and audience.
2. Check whether an existing token, component archetype or interaction pattern
   already fits.
3. Propose the smallest reusable contract.
4. Document usage guidance and constraints.
5. Verify accessibility, localization and responsive behavior.

## Layer 6: Adoption And Quality

A civic design system has value only when teams use it consistently.

### Adoption

Early adoption can be tracked manually through documentation and code review.
Later, the hub can introduce automated component usage reporting inspired by
Radius Tracker.

### Quality

Every reusable component or block should be evaluated against:

* accessibility and keyboard behavior;
* mobile readability;
* localization and long-text behavior;
* contrast and state clarity;
* civic meaning and editorial fit;
* whether it duplicates an existing pattern.

### Documentation

Every stable token group, component archetype or interaction pattern should
document:

* intended use;
* not-for-use cases;
* expected information contract;
* accessibility expectations;
* localization notes;
* examples from Hiaka pages or specs.

## Product Boundary

Keep this boundary:

```text
docs/design-docs/civic-design-system.md
  -> Civic Design System product doctrine

apps/specs/design-system.mdx
  -> public specs orientation for builders

packages/ui
  -> hub UI implementation, not the Civic Design System product

apps/landing
  -> presentation surface for the Civic Design System product
```

Future runtime packages for the Civic Design System should be planned
separately from the landing site's UI package.
