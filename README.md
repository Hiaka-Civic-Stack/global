# Hiaka Civic Stack

Hiaka is an open-source Civic Stack for building transparent, inclusive and
interoperable digital participation services.

This repository is the public home for the Hiaka Civic Stack. It is intended to
serve two roles:

1. A landing page source for explaining Hiaka to governments, civic
   organizations, implementers and contributors.
2. A documentation and specification source for the Civic Stack Model and
   Civic Stack Specs.

Hiaka follows a GovStack-like philosophy for the civic participation domain:
reusable, interoperable and independently maintained building blocks should be
combined to deliver concrete public digital services.

This hub should be implemented as a Turborepo monorepo containing:

* a Payload app for the public landing website and managed editorial content
* a Mintlify app for the public specifications portal
* shared packages used by the hub apps

## Core Model

```text
Civic Stack Model
  -> Civic Modules
  -> Civic Design System
       -> Civic Patterns
  -> Civic Blueprints
  -> Shared Digital Services

Civic Stack Specs
  -> specifications for the model components
```

Civic Blueprints compose Civic Modules and Civic Design System patterns to form
complete civic processes.

## Repository Role

This repository is not the implementation repository for every Hiaka Civic
Module. Each Civic Module should be able to live in its own repository, with
its own contracts, tests, release cycle and implementation documentation.

This repository should contain:

* the public narrative for Hiaka
* the Payload landing app
* the Mintlify specifications app
* shared packages used by the hub apps
* product and architecture specifications
* module, design system and blueprint specifications
* implementation playbooks
* interoperability and compliance guidance
* links to module and reference implementation repositories

## Start Here

* [Civic Stack specification](docs/product-specs/civic-stack.md)
* [Repository strategy](docs/design-docs/repository-strategy.md)
* [Site information architecture](docs/site/information-architecture.md)

## Local Development

Install dependencies:

```bash
pnpm install
```

Prepare the Payload app environment:

```bash
cp apps/landing/.env.example apps/landing/.env
```

Seed the editable Payload pages:

```bash
pnpm seed:landing
```

Run the Payload landing app:

```bash
pnpm dev:landing
```

The landing app is available at `http://localhost:3000`. The Payload admin is
available at `http://localhost:3000/admin`.

Run the Mintlify specifications app separately:

```bash
pnpm dev:specs
```

The specifications app is available at `http://localhost:3001`.
