# Site Information Architecture

## Purpose

This repository should be able to power two public-facing experiences:

1. A landing site that explains what Hiaka is and why it exists.
2. A specifications site that documents how to implement, compose and evaluate
   Hiaka components.

The landing site should be implemented as a Payload app. The specifications
site should be implemented as a Mintlify app. Shared interface components for
the hub should live in a local `packages/ui` library.

The public hub should make the two Hiaka concepts visible:

* **Civic Stack Model** for conceptual architecture and composition;
* **Civic Stack Specs** for specifications and conformance.

The detailed doctrine lives in
[Hiaka Civic Stack Model And Specs](../design-docs/hiaka-triad.md).

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
hub UI components from packages/ui
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
* Civic Stack Model
* Civic Stack Specs
* Civic Design System as a model component
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
hub UI components from packages/ui where supported
```

Recommended sections:

* Civic Stack Model orientation
* Civic Stack Specs orientation
* Civic Design System specifications
* Architecture overview
* Civic Module specifications
* Civic Design System pattern specifications
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

The hub UI package should provide reusable visual primitives for the Hiaka
hub, such as buttons, navigation, cards, callouts, layout primitives and content
blocks. It should serve the landing and specifications experiences without
becoming a home for civic domain behavior.

This package is the hub UI implementation. It may be informed by the
[Civic Design System](../design-docs/civic-design-system.md), but it is not the
Civic Design System itself. The Civic Design System is the Civic Stack Model
component for civic product experience, standards and conformance.

### Hub UI Structure

The hub UI implementation may be separated from the standard shadcn component
directory when that helps maintainability.

Use this package structure:

```text
packages/ui/src/components/
  shadcn/      # generated or adapted hub primitives
  atoms/       # small hub primitives
  molecules/   # reusable hub compositions
  organisms/   # reusable hub sections, when generic enough
```

Payload blocks should map to page organisms at render time, but blocks are still
CMS/editorial structures. They should not replace atoms, molecules or the shared
hub UI hierarchy.

Rules:

* add generated or adapted primitives into `components/shadcn/` when the hub
  uses shadcn;
* expose hub-facing primitives through `atoms/` and `molecules/`;
* keep app-specific block renderers in the app until they become reusable across
  landing and specs;
* do not import `components/shadcn/*` directly from applications.

### Block Contracts And Adapters

Payload blocks and hub UI blocks are different contracts.

Payload blocks describe the CMS editing model. Hub UI blocks describe
renderable component props. The landing app must translate between the two with
explicit adapters.

Use this dependency direction:

```text
Payload block schema
  -> generated Payload block type
  -> app adapter
  -> hub UI block props
  -> hub UI organism
  -> molecules
  -> atoms
  -> shadcn primitives
```

Rules:

* do not pass raw Payload block objects into hub UI organisms;
* define one hub props interface per reusable UI block;
* define one adapter per Payload block when the block is rendered by hub UI;
* keep adapters in the consuming app because they know about Payload field names,
  locale behavior and CMS defaults;
* keep hub UI free from Payload imports and generated Payload types.

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
Model
Modules
Design System
Blueprints
Specifications
Community
```

The landing experience should remain readable by non-technical audiences. The
specifications experience should remain precise enough for implementation and
conformance work.
