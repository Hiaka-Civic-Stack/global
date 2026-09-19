# Content Blocks

## Purpose

The landing app uses a block-first content model. Payload owns page content,
page order, drafts, previews and localization. Next.js owns routing and server
rendering. The shared UI package owns reusable rendering contracts and visual
components.

This keeps the hub editable without turning the landing page into a single
hard-coded React composition.

This document sits under the broader
[Civic Design System](./civic-design-system.md) doctrine. The Civic Design
System defines the design-system meta-model for civic tech; this document
defines how that doctrine is applied to Payload editorial blocks.

## Dependency Direction

Use this direction for every reusable block:

```text
Payload block schema
  -> generated Payload type
  -> landing app adapter
  -> shared UI props interface
  -> shared UI block component
  -> molecules
  -> atoms
  -> shadcn primitives
```

Applications must not pass raw Payload block objects into `packages/ui`.
Shared UI must not import Payload types.

## Current Core Blocks

`pageHero`

Positions a page with an eyebrow, title, body and actions. Use it once near the
top of most routable pages.

`contentGrid`

Renders repeatable editorial items as cards or index rows. Use it for hub
navigation, principle grids, capability maps and short reference lists.

`richTextSection`

Renders a short editorial explanation with one intro and a list of paragraphs.
Use it when the page needs connective tissue between structured blocks.

`calloutBand`

Renders a focused call to action. Use it sparingly, normally near the end of a
page or after a complete section.

## When To Create A New Block

Create a new Payload block only when the editor needs a distinct content job,
not merely a different visual treatment. Prefer extending a shared UI component
variant when the content shape is unchanged.

Good reasons:

* the editor needs a different field model;
* the block represents a stable content-design pattern;
* the block can be reused across multiple pages;
* the rendering contract can be named without referencing one page.

Weak reasons:

* one page needs spacing changes;
* one heading needs a different size;
* a component name describes a page instead of a content job;
* the UI can already be represented by `pageHero`, `contentGrid`,
  `richTextSection` or `calloutBand`.

## File Placement

Payload schemas live in:

```text
apps/landing/src/blocks/payload/
```

Adapters live in:

```text
apps/landing/src/adapters/blocks/
```

Shared block props and components live in:

```text
packages/ui/src/blocks/
```

Hiaka design system primitives live in:

```text
packages/ui/src/components/atoms/
packages/ui/src/components/molecules/
packages/ui/src/components/shadcn/
```

Do not import `components/shadcn/*` from apps. Apps should consume shared
atoms, molecules or block components through `@hiaka/ui`.

## Runtime Content

Reference JSON files may describe content-design structure, but they are not
runtime content. Runtime content comes from Payload documents in the `pages`
collection and from Payload globals such as `site-settings`.
