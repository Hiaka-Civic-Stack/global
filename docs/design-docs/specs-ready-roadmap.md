# Specs-Ready Hub Roadmap

## Purpose

This roadmap plans the six one-week sprints after Sprint 1. The goal is to
bring Hiaka to a specs-ready hub: clear for builders, coherent around the
triad, and ready to guide the first civic products.

Sprint 1 is handled separately. It establishes the Civic Design System as an
autonomous Hiaka product for future civic product builders. It must not be
confused with the local design system used by the landing site or the hub UI.

## Roadmap Outcome

At the end of this roadmap, the hub should provide:

* a clear public explanation of the Hiaka triad;
* a stable Civic Stack Model;
* a navigable Civic Stack Specs portal;
* a builder-ready Public Consultation v0 specification;
* initial module specs for Participation, Contribution and Accountability;
* onboarding guidance for builders and future module authors.

This roadmap does not create the independent Civic Module repositories. It
prepares the hub so those repositories can be created from stable guidance.

## Sprint 1: Civic Design System Product Foundation

Sprint 1 is the prerequisite for the rest of the roadmap.

Primary goal:

* define the Civic Design System as a standalone Hiaka product for builders of
  civic products.

Key boundary:

* the Civic Design System is not the landing design system;
* `packages/ui` is hub UI infrastructure, not the Civic Design System product;
* Payload editorial blocks are not part of the Civic Design System product.

Expected output:

* product doctrine and specs for the Civic Design System;
* landing content that presents the product without implying it is implemented
  by the landing UI;
* specs content that explains how builders should use the Civic Design System.

## Sprint 2: Civic Stack Model Foundation

Objective:

Make the conceptual model fully readable and stable.

Deliverables:

* clarify the doctrine `Civic Modules -> Civic Patterns -> Civic Blueprints ->
  Shared Digital Services`;
* create dedicated specs pages for Civic Modules, Civic Patterns, Civic
  Blueprints and Shared Digital Services;
* separate the conceptual model from implementation specs and design-system
  guidance;
* update landing content so the model is presented without being confused with
  the specs.

Validation:

* `pnpm --filter @hiaka/specs typecheck`;
* `pnpm --filter @hiaka/landing typecheck`;
* `pnpm seed:landing` if landing seed changes;
* `pnpm --filter @hiaka/landing build` if landing seed changes.

Acceptance criteria:

* a builder can explain the four conceptual layers without reading the full
  product spec;
* each model layer has a dedicated orientation page;
* the model remains distinct from Civic Stack Specs.

## Sprint 3: Civic Stack Specs Foundation

Objective:

Turn the specs portal into a real contract layer.

Deliverables:

* define the standard structure of a Hiaka spec:
  * purpose;
  * responsibilities;
  * boundaries;
  * API surface;
  * events;
  * authorization;
  * auditability;
  * localization;
  * conformance checks;
* create cross-cutting specs pages:
  * API conventions;
  * Domain events;
  * Authorization model;
  * Auditability model;
  * Interoperability model;
  * Conformance model;
* update Mintlify navigation so Civic Stack Specs are navigable by contract.

Validation:

* `pnpm --filter @hiaka/specs typecheck`;
* manual review against `docs/product-specs/civic-stack.md`.

Acceptance criteria:

* every future module or blueprint spec can follow one standard structure;
* cross-cutting contract pages are discoverable from the specs portal;
* specs read as implementation guidance, not overview copy.

## Sprint 4: Public Consultation v0 Specification

Objective:

Make Public Consultation v0 the first builder-ready blueprint.

Deliverables:

* extend the Public Consultation v0 spec with:
  * actors;
  * lifecycle;
  * stages;
  * required modules;
  * required patterns;
  * key user journeys;
  * expected API actions;
  * expected events;
  * audit requirements;
  * conformance checklist;
* identify Participation, Contribution and Accountability as the required
  modules;
* keep Deliberation and Decision outside the critical v0 path.

Validation:

* `pnpm --filter @hiaka/specs typecheck`;
* manual review against `AGENTS.md` and `docs/product-specs/civic-stack.md`.

Acceptance criteria:

* a builder can understand the end-to-end Public Consultation v0 flow;
* the required modules and excluded modules are explicit;
* the blueprint is concrete enough to guide future implementation work.

## Sprint 5: Module Specs v0

Objective:

Provide initial module specs concrete enough to prepare future independent
module repositories.

Deliverables:

* create or deepen specs for:
  * Participation Module;
  * Contribution Module;
  * Accountability Module;
* for each module, document:
  * responsibilities;
  * non-responsibilities;
  * domain concepts;
  * commands;
  * queries;
  * events;
  * API expectations;
  * authorization rules;
  * persistence boundaries;
  * test expectations;
* keep Deliberation and Decision as overview-level specs only.

Validation:

* `pnpm --filter @hiaka/specs typecheck`;
* verify that no module spec depends on a specific blueprint.

Acceptance criteria:

* each v0 module can be handed to a future module repository owner;
* Participation, Contribution and Accountability are detailed enough for
  implementation planning;
* Deliberation and Decision are not accidentally pulled into the v0 critical
  path.

## Sprint 6: Builder Onboarding And Repository Strategy

Objective:

Prepare builders to use Hiaka without ambiguity.

Deliverables:

* create a "Build with Hiaka" guide;
* clarify how a builder chooses between:
  * Civic Design System;
  * Civic Stack Model;
  * Civic Stack Specs;
  * module repository;
  * blueprint repository;
  * app or reference implementation;
* update repository strategy with a concrete path through:
  * hub repo;
  * module repos;
  * contract repos;
  * adapter repos;
  * app and blueprint repos;
* add a checklist for "before creating a module repository".

Validation:

* `pnpm --filter @hiaka/specs typecheck`;
* manual review against `docs/design-docs/repository-strategy.md`.

Acceptance criteria:

* builders can identify the right starting point for their role;
* repository boundaries are clear before any module repo is created;
* module repository creation has a checklist.

## Sprint 7: Specs-Ready Hub Polish

Objective:

Stabilize the hub as a readable public product.

Deliverables:

* review landing content so it clearly presents:
  * Civic Design System;
  * Civic Stack Model;
  * Civic Stack Specs;
  * Public Consultation v0;
  * builder entrypoints;
* review Mintlify navigation to remove duplicates and dead ends;
* add a "Start here" index for:
  * decision makers;
  * builders;
  * module authors;
  * civic product teams;
* complete an editorial consistency pass across names, links,
  responsibilities and boundaries.

Validation:

* `pnpm --filter @hiaka/specs typecheck`;
* `pnpm --filter @hiaka/landing typecheck`;
* `pnpm seed:landing`;
* `pnpm --filter @hiaka/landing build`;
* manual review of `/`, `/design-system`, `/model`, `/modules` and
  `/blueprints/public-consultation-v0`.

Acceptance criteria:

* the public hub can be understood by readers with no prior context;
* the specs portal has no obvious navigation dead ends;
* the triad is consistently explained across landing and specs;
* the hub is ready to guide the first builders.

## Global Assumptions

* Sprint cadence is one week.
* The target outcome is a specs-ready hub, not a complete runtime product.
* Landing content presents concepts but does not define implementation specs.
* The Civic Design System is autonomous and distinct from the landing design
  system.
* Independent module repositories are not created during this roadmap.
