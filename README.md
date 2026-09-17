# Hiaka Civic Stack

Hiaka is an open-source Civic Stack for building transparent, inclusive and
interoperable digital participation services.

This repository is the public home for the Hiaka Civic Stack. It is intended to
serve two roles:

1. A landing page source for explaining Hiaka to governments, civic
   organizations, implementers and contributors.
2. A documentation and specification source for the Civic Modules, Civic
   Patterns and Civic Blueprints that make up the stack.

Hiaka follows a GovStack-like philosophy for the civic participation domain:
reusable, interoperable and independently maintained building blocks should be
combined to deliver concrete public digital services.

This hub should be implemented as a Turborepo monorepo containing:

* a Payload app for the public landing website and managed editorial content
* a Mintlify app for the public specifications portal
* shared packages, including a UI library based on shadcn/ui

## Core Model

```text
Civic Blueprints
  compose Civic Patterns
    coordinate Civic Modules
      consume Shared Digital Services
```

## Repository Role

This repository is not the implementation repository for every Hiaka Civic
Module. Each Civic Module should be able to live in its own repository, with
its own contracts, tests, release cycle and implementation documentation.

This repository should contain:

* the public narrative for Hiaka
* the Payload landing app
* the Mintlify specifications app
* a shared UI package based on shadcn/ui
* product and architecture specifications
* module, pattern and blueprint specifications
* implementation playbooks
* interoperability and compliance guidance
* links to module and reference implementation repositories

## Start Here

* [Civic Stack specification](docs/product-specs/civic-stack.md)
* [Repository strategy](docs/design-docs/repository-strategy.md)
* [Site information architecture](docs/site/information-architecture.md)
