# Site Information Architecture

## Purpose

This repository should be able to power two public-facing experiences:

1. A landing site that explains what Hiaka is and why it exists.
2. A specifications site that documents how to implement, compose and evaluate
   Hiaka components.

The landing site should be implemented as a Payload app. The specifications
site should be implemented as a Mintlify app. Shared interface components
should live in a `packages/ui` library based on shadcn/ui.

## Landing Site

The landing site should be oriented toward decision makers, institutions, civil
society organizations, funders, implementers and contributors.

Target app:

```text
apps/landing
```

Primary technology:

```text
Payload
shared shadcn/ui components from packages/ui
```

### Payload block-first model

The landing site should use Payload as the editorial source of truth, not as a
decorative dependency around a hard-coded React page.

Use a block-first model:

* `pages` owns routable documents, drafts, preview, localization, page metadata
  and page-level navigation.
* `pages.layout` is a Payload Blocks field.
* each block has one editorial job and one Next renderer component.
* Next.js owns routing and server rendering.
* React components render Payload block data; they should not own page order or
  editorial content.
* JSON structure references may document content-design patterns, but they must
  not become the runtime source of page content.

Core editorial landing blocks:

* `pageHero` for page positioning and primary actions.
* `contentGrid` for card grids, index lists and hub navigation surfaces.
* `richTextSection` for short editorial explanation blocks.
* `calloutBand` for a focused next action.

Specialized blocks may still exist for product-specific storytelling, but they
should be introduced only when the editorial job is not covered by the core
blocks. The homepage should prefer the core editorial blocks so that the
content model stays reusable across pages.

Routing convention:

```text
Payload page slug "home" -> /
Payload page slug "about" -> /about
Payload page slug "community" -> /community
```

Recommended sections:

* What Hiaka is
* Why civic participation needs a reusable stack
* Core model: Civic Modules, Civic Patterns and Civic Blueprints
* Initial modules
* Initial blueprints
* Public Consultation v0
* GovStack-like building-block philosophy
* Madagascar-first, reusable elsewhere
* Open-source participation and contribution paths

## Specifications Site

The specifications site should be oriented toward implementers, architects,
developers and evaluators.

Target app:

```text
apps/specs
```

Primary technology:

```text
Mintlify
shared shadcn/ui components from packages/ui where supported
```

Recommended sections:

* Architecture overview
* Civic Module specifications
* Civic Pattern specifications
* Civic Blueprint specifications
* Shared digital service interfaces
* API conventions
* Domain events
* Authorization model
* Auditability requirements
* Localization and accessibility requirements
* Compliance and conformance guidance
* Implementation playbooks

## Shared UI

Target package:

```text
packages/ui
```

Primary technology:

```text
shadcn/ui
Tailwind CSS
React
```

The shared UI package should provide reusable visual primitives for the Hiaka
hub, such as buttons, navigation, cards, callouts, layout primitives and content
blocks. It should serve the landing and specifications experiences without
becoming a home for civic domain behavior.

The higher-level doctrine for this package is the
[Civic Design System](../design-docs/civic-design-system.md). That document
defines how Hiaka adapts a Radius-like design system meta-model to civic tech:
civic principles, token layers, component hierarchy, interaction patterns,
governance, adoption and quality.

### Atomic Design System

The Hiaka Design System should be separated from the standard shadcn component
directory.

Use this package structure:

```text
packages/ui/src/components/
  shadcn/      # generated or adapted shadcn/ui primitives
  atoms/       # Hiaka atoms built from shadcn primitives and design tokens
  molecules/   # reusable component compositions
  organisms/   # reusable product-level interface sections, when generic enough
```

Payload blocks should map to page organisms at render time, but blocks are still
CMS/editorial structures. They should not replace atoms, molecules or the shared
design system hierarchy.

Rules:

* add new shadcn components into `components/shadcn/`;
* expose Hiaka-facing primitives through `atoms/` and `molecules/`;
* keep app-specific block renderers in the app until they become reusable across
  landing and specs;
* do not import `components/shadcn/*` directly from applications.

### Block Contracts And Adapters

Payload blocks and UI blocks are different contracts.

Payload blocks describe the CMS editing model. Shared UI blocks describe
renderable component props. The landing app must translate between the two with
explicit adapters.

Use this dependency direction:

```text
Payload block schema
  -> generated Payload block type
  -> app adapter
  -> shared UI block props
  -> shared UI organism
  -> molecules
  -> atoms
  -> shadcn primitives
```

Rules:

* do not pass raw Payload block objects into shared UI organisms;
* define one shared props interface per reusable UI block;
* define one adapter per Payload block when the block is rendered by shared UI;
* keep adapters in the consuming app because they know about Payload field names,
  locale behavior and CMS defaults;
* keep shared UI free from Payload imports and generated Payload types.

Example vertical slice:

```text
apps/landing/src/blocks/payload/page-hero.block.ts
apps/landing/src/adapters/blocks/page-hero.adapter.ts
packages/ui/src/blocks/page-hero/page-hero.types.ts
packages/ui/src/blocks/page-hero/page-hero.tsx
```

## Navigation Model

```text
Home
About Hiaka
Architecture
Modules
Patterns
Blueprints
Implementation Playbooks
Specifications
Community
```

The landing experience should remain readable by non-technical audiences. The
specifications experience should remain precise enough for implementation and
conformance work.
