# Civic Design System Sprint 1 Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Historical Sprint 1 plan. Superseded by the later two-concept model
where the Civic Design System is a Civic Stack Model component and its specs
belong to Civic Stack Specs.

**Architecture:** The hub presents the Civic Design System, but does not define
or implement it. Mintlify presents current specs pages, while future canonical
sources may live in a separate Civic Design System repository that contains
specs, tokens, UI components, Figma bridge and examples.

Current model: the Civic Design System is intent-driven and semantic. Its
Conceptual Model contains Intent, Semantic and Pattern layers. Standards,
conformance and reference implementation artifacts are operational dimensions,
not conceptual layers.

**Tech Stack:** Markdown doctrine, Mintlify MDX navigation, Payload seed content.

**Spec:** `docs/design-docs/civic-design-system.md`

## Global Constraints

* The Civic Design System is not the hub UI implementation.
* `packages/ui`, shadcn and Payload are hub implementation details.
* Superseded by the later two-concept model: Civic Design System specs are now
  part of Civic Stack Specs because they specify a component of the Civic Stack
  Model.
* The future Civic Design System repository is one repository, but this hub should document that as a light orientation rather than a locked implementation decision.
* No runtime UI components, tokens or Payload schemas change in this sprint.

---

### Task 1: Correct Civic Design System Doctrine

**Files:**

* Modify: `docs/design-docs/civic-design-system.md`
* Modify: `docs/design-docs/hiaka-triad.md`
* Modify: `docs/design-docs/specs-ready-roadmap.md`

**Interfaces:**

* Consumes: the then-current three-concept doctrine.
* Produces: corrected doctrine used by landing and specs pages.

- [x] **Step 1: Remove hub implementation language**

  Remove language that treats shadcn, Payload or `packages/ui` as part of the Civic Design System identity.

- [x] **Step 2: Define dual nature**

  Define the Civic Design System as both a civic-tech design framework and an experience conformance standard.

- [x] **Step 3: Clarify specs boundary**

  Historical note: this boundary was later superseded by the two-concept model,
  where Civic Design System specs are included in Civic Stack Specs.

### Task 2: Add Specs Portal Structure

**Files:**

* Modify: `apps/specs/design-system.mdx`
* Create: `apps/specs/design-system/intents.mdx`
* Create: `apps/specs/design-system/semantic-language.mdx`
* Create: `apps/specs/design-system/patterns.mdx`
* Create: `apps/specs/design-system/standards-conformance.mdx`
* Create: `apps/specs/design-system/reference-implementation.mdx`
* Modify: `apps/specs/docs.json`

**Interfaces:**

* Consumes: corrected doctrine from Task 1.
* Produces: navigable Sprint 1 Civic Design System specs surface.

- [x] **Step 1: Expand overview**

  Update the design-system overview to present framework, standard and future reference implementation.

- [x] **Step 2: Add focused pages**

  Add pages for intents, semantic language, patterns, standards/conformance and
  reference implementation artifacts.

- [x] **Step 3: Update navigation**

  Historical note: this was later superseded; the pages now live under Civic
  Stack Specs navigation.

### Task 3: Correct Hub Strategy Docs

**Files:**

* Modify: `docs/design-docs/repository-strategy.md`
* Modify: `docs/product-specs/civic-stack.md`
* Modify: `docs/site/information-architecture.md`
* Modify: `docs/design-docs/content-blocks.md`

**Interfaces:**

* Consumes: corrected doctrine from Task 1.
* Produces: hub documentation that no longer conflates hub UI with the Civic Design System.

- [x] **Step 1: Rename hub UI responsibilities**

  Describe `packages/ui` as local hub UI infrastructure only.

- [x] **Step 2: Add light future repository orientation**

  Document a future single Civic Design System repository without freezing the final repository structure.

- [x] **Step 3: Preserve Payload block-first guidance**

  Keep Payload guidance scoped to the hub only.

### Task 4: Update Landing Content

**Files:**

* Modify: `apps/landing/src/seed/pages.ts`

**Interfaces:**

* Consumes: existing Payload block model.
* Produces: seeded landing copy aligned with the corrected doctrine.

- [x] **Step 1: Update design-system page copy**

  Remove references that frame shadcn or hub UI as the design system foundation.

- [x] **Step 2: Clarify relationship to specs**

  Explain that Mintlify presents current specs, while sources may later live in separated repositories.

- [x] **Step 3: Seed landing content**

  Run `pnpm seed:landing` after typecheck passes.

### Task 5: Validate

**Files:**

* No new source files.

**Interfaces:**

* Consumes: all previous tasks.
* Produces: confidence that docs, specs and seed content are coherent.

- [x] **Step 1: Run docs whitespace check**

  Run `git diff --check`.

- [x] **Step 2: Run specs typecheck**

  Run `pnpm --filter @hiaka/specs typecheck`.

- [x] **Step 3: Run landing typecheck**

  Run `pnpm --filter @hiaka/landing typecheck`.

- [x] **Step 4: Run seed**

  Run `pnpm seed:landing`.

- [x] **Step 5: Build landing**

  Run `pnpm --filter @hiaka/landing build`.
