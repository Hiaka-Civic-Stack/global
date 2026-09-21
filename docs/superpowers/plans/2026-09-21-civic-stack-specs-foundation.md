# Civic Stack Specs Foundation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Establish Civic Stack Specs as a draft normative contract layer with a common specification core, four specialized profiles and six evidence-based cross-cutting contracts.

**Architecture:** Implement a Contract Kernel under `apps/specs/framework/`, then extend it through Module, Blueprint, Civic Design System and Shared Service profiles. Publish cross-cutting requirements under `apps/specs/contracts/` with stable domain-scoped identifiers and expose the resulting hierarchy through Mintlify without changing runtime UI or Payload.

**Tech Stack:** Mintlify MDX, JSON navigation, Markdown, pnpm, Turborepo.

**Spec:** `docs/superpowers/specs/2026-09-21-civic-stack-specs-foundation-design.md`

## Global Constraints

* All new specifications have status `draft`: normative enough for implementation and conformance review, but not stable.
* Normative keywords are `MUST`, `MUST NOT`, `SHOULD`, `SHOULD NOT` and `MAY`.
* Requirement identifiers use domain prefixes: `SPEC-*`, `API-*`, `EVT-*`, `AUTH-*`, `AUD-*`, `INT-*`, `CONF-*`.
* Published identifiers are not renumbered; removed requirements are deprecated rather than reused.
* Every conformance claim points to inspectable evidence.
* Every specification declares one primary profile.
* Existing Design System specs remain in place and retain their specialized structure.
* Keep conceptual Model pages separate from normative Specs pages.
* Do not add runtime APIs, Payload schemas, UI components, tokens, Figma artifacts, external repositories or automated conformance tooling.
* Do not modify the landing unless implementation reveals a broken public link that cannot be fixed in the specs portal.

## File Map

Create:

```text
apps/specs/framework/index.mdx
apps/specs/framework/normative-language.mdx
apps/specs/framework/common-spec-structure.mdx
apps/specs/framework/profiles/module.mdx
apps/specs/framework/profiles/blueprint.mdx
apps/specs/framework/profiles/civic-design-system.mdx
apps/specs/framework/profiles/shared-service.mdx
apps/specs/contracts/api-conventions.mdx
apps/specs/contracts/domain-events.mdx
apps/specs/contracts/authorization.mdx
apps/specs/contracts/auditability.mdx
apps/specs/contracts/interoperability.mdx
apps/specs/contracts/conformance.mdx
```

Modify:

```text
apps/specs/specs.mdx
apps/specs/docs.json
apps/specs/design-system/spec-structure.mdx
apps/specs/modules/overview.mdx
apps/specs/blueprints/public-consultation-v0.mdx
docs/product-specs/civic-stack.md
docs/design-docs/specs-ready-roadmap.md
```

---

### Task 1: Publish The Contract Kernel

**Files:**

* Create: `apps/specs/framework/index.mdx`
* Create: `apps/specs/framework/normative-language.mdx`
* Create: `apps/specs/framework/common-spec-structure.mdx`

**Interfaces:**

* Consumes: the approved Sprint 3 design spec.
* Produces: canonical Mintlify routes `/framework`, `/framework/normative-language` and `/framework/common-spec-structure` used by every profile and contract page.

- [ ] **Step 1: Create the framework overview**

Create `apps/specs/framework/index.mdx` with frontmatter title `Specification Framework` and description `The common contract kernel and specialized profiles for Hiaka specifications.`

The page must:

* label the framework `draft`;
* explain Contract Kernel + Profiles;
* state that every spec declares one primary profile;
* distinguish Civic Stack Model orientation from Civic Stack Specs contracts;
* link to normative language, common structure and all four profiles;
* state that multi-profile specs require an explicit reason.

- [ ] **Step 2: Define normative language**

Create `apps/specs/framework/normative-language.mdx` with these exact semantics:

* `MUST` and `MUST NOT`: mandatory for conformance;
* `SHOULD` and `SHOULD NOT`: recommended, with an evidence-backed exception required when omitted;
* `MAY`: optional and interoperable with implementations that omit it.

Add rules that normative statements must be observable, carry one stable requirement identifier and identify expected evidence. State that examples and explanatory prose are non-normative unless explicitly linked to an identified requirement.

- [ ] **Step 3: Define the common spec structure**

Create `apps/specs/framework/common-spec-structure.mdx` with the thirteen required sections:

1. identity;
2. purpose and problem statement;
3. scope, responsibilities and non-responsibilities;
4. assumptions and dependencies;
5. actors and consumers;
6. domain concepts and terminology;
7. interfaces and integration expectations;
8. data exchange expectations;
9. cross-cutting obligations;
10. conformance requirements and evidence;
11. risks and trade-offs;
12. open questions;
13. change history.

For each section, state what an author must provide. Allow `Not applicable` only with a written reason. Include an authoring checklist covering primary profile, normative keywords, identifier uniqueness, evidence and non-goals.

- [ ] **Step 4: Verify the framework pages**

Run:

```bash
git diff --check
pnpm --filter @hiaka/specs typecheck
```

Expected: no whitespace errors and Mintlify reports `success no broken links found`. The new pages are not yet in navigation, but links between existing files must resolve.

- [ ] **Step 5: Commit the Contract Kernel**

```bash
git add apps/specs/framework/index.mdx apps/specs/framework/normative-language.mdx apps/specs/framework/common-spec-structure.mdx
git commit -m "Define civic stack specification framework"
```

---

### Task 2: Publish The Four Specification Profiles

**Files:**

* Create: `apps/specs/framework/profiles/module.mdx`
* Create: `apps/specs/framework/profiles/blueprint.mdx`
* Create: `apps/specs/framework/profiles/civic-design-system.mdx`
* Create: `apps/specs/framework/profiles/shared-service.mdx`
* Modify: `apps/specs/design-system/spec-structure.mdx`
* Modify: `apps/specs/modules/overview.mdx`
* Modify: `apps/specs/blueprints/public-consultation-v0.mdx`

**Interfaces:**

* Consumes: `/framework/common-spec-structure` from Task 1.
* Produces: canonical profile routes under `/framework/profiles/*` and explicit profile links from current component specs.

- [ ] **Step 1: Create the Module profile**

Create `apps/specs/framework/profiles/module.mdx`. Require the common core plus:

* domain concepts and invariants;
* commands and queries;
* domain events;
* API surface;
* authorization policies;
* persistence boundaries;
* external ports;
* test expectations.

State that a Module MUST remain independent from any one Blueprint, MUST NOT expose infrastructure entities as domain contracts and MUST identify all applicable cross-cutting contract requirements.

- [ ] **Step 2: Create the Blueprint profile**

Create `apps/specs/framework/profiles/blueprint.mdx`. Require the common core plus:

* actors;
* stages and lifecycle;
* required Modules;
* required Civic Design System patterns;
* key civic journeys;
* process-specific composition constraints;
* expected actions and events;
* audit requirements;
* Blueprint conformance checks.

State that a Blueprint MUST NOT duplicate Module business rules and MUST make every required component dependency explicit.

- [ ] **Step 3: Create the Civic Design System profile**

Create `apps/specs/framework/profiles/civic-design-system.mdx`. Require the common core plus:

* civic intent;
* semantic concepts;
* patterns;
* Module touchpoints;
* accessibility;
* localization;
* conformance checks;
* examples;
* non-goals.

Explain that this profile adopts the Sprint 1A Design System spec structure and does not require API, event or persistence sections when they are not applicable.

- [ ] **Step 4: Create the Shared Service profile**

Create `apps/specs/framework/profiles/shared-service.mdx`. Require the common core plus:

* capability boundary;
* consumer-facing ports;
* integration contracts;
* data handling constraints;
* security expectations;
* availability and recovery expectations;
* observability expectations;
* vendor-neutral adapter requirements.

State that a Shared Service MUST NOT own civic business rules or be presented as a Civic Module.

- [ ] **Step 5: Link current specs to their profiles**

Modify:

* `apps/specs/design-system/spec-structure.mdx` to declare the Civic Design System profile and link to `/framework/profiles/civic-design-system` and `/framework/common-spec-structure`;
* `apps/specs/modules/overview.mdx` to link future Module specs to `/framework/profiles/module`;
* `apps/specs/blueprints/public-consultation-v0.mdx` to mark its current status as an orientation draft and link the Sprint 4 work to `/framework/profiles/blueprint`.

Do not rewrite the existing Design System specs or expand Public Consultation v0 in this task.

- [ ] **Step 6: Verify profile boundaries**

Run:

```bash
rg -n "MUST|MUST NOT" apps/specs/framework/profiles
pnpm --filter @hiaka/specs typecheck
git diff --check
```

Expected: all four profile pages contain explicit boundaries, all links resolve and no whitespace errors exist.

- [ ] **Step 7: Commit the profiles**

```bash
git add apps/specs/framework/profiles apps/specs/design-system/spec-structure.mdx apps/specs/modules/overview.mdx apps/specs/blueprints/public-consultation-v0.mdx
git commit -m "Add civic stack specification profiles"
```

---

### Task 3: Define API And Domain Event Contracts

**Files:**

* Create: `apps/specs/contracts/api-conventions.mdx`
* Create: `apps/specs/contracts/domain-events.mdx`

**Interfaces:**

* Consumes: normative language and common structure from Task 1.
* Produces: `API-001` through `API-010` and `EVT-001` through `EVT-010` for use by Module and Blueprint specs.

- [ ] **Step 1: Write API convention requirements**

Create `apps/specs/contracts/api-conventions.mdx` with purpose, scope, non-goals, dependencies, expected evidence and conformant/non-conformant examples.

Define these requirements:

| ID | Requirement |
| --- | --- |
| `API-001` | Implementations MUST expose documented REST interfaces for initial application APIs. |
| `API-002` | API contracts MUST be described with a valid OpenAPI document. |
| `API-003` | Transport DTOs MUST remain separate from domain entities. |
| `API-004` | Meaningful state transitions MUST use explicit business actions when domain validation is required. |
| `API-005` | Errors MUST use a consistent machine-readable shape with a stable code and human-readable message. |
| `API-006` | Collection endpoints MUST document pagination behavior and deterministic ordering. |
| `API-007` | Retryable commands MUST document idempotency behavior. |
| `API-008` | Breaking contract changes MUST introduce an explicit version transition and migration guidance. |
| `API-009` | Authorization requirements MUST be documented per operation and enforced beyond the client UI. |
| `API-010` | Locale and territory inputs MUST use documented, interoperable representations. |

Expected evidence must include OpenAPI fragments, contract tests and versioning notes. Use `POST /contributions/{id}/publish` as the conformant action example and generic status mutation as the non-conformant example when publishing has domain validation.

- [ ] **Step 2: Write Domain Event requirements**

Create `apps/specs/contracts/domain-events.mdx` with purpose, scope, non-goals, dependencies, expected evidence and examples.

Define these requirements:

| ID | Requirement |
| --- | --- |
| `EVT-001` | Event names MUST describe completed domain facts in past tense. |
| `EVT-002` | Every event MUST contain a globally unique event identifier. |
| `EVT-003` | Every event MUST declare an event type and schema version. |
| `EVT-004` | Every event MUST record its occurrence time using an unambiguous timestamp. |
| `EVT-005` | Events MUST identify the affected aggregate or domain subject. |
| `EVT-006` | Events SHOULD identify the responsible actor when that information is available and lawful to retain. |
| `EVT-007` | Events MUST support correlation and causation identifiers across a business action. |
| `EVT-008` | Event schema evolution MUST preserve documented compatibility within a supported version. |
| `EVT-009` | Event payloads MUST NOT expose private identity data unless the receiving contract explicitly requires and protects it. |
| `EVT-010` | Domain Events MUST NOT be treated as the audit log. |

Expected evidence must include event schemas, producer contract tests and compatibility notes. Include `ContributionPublished` as a conformant name and `PublishContribution` as a non-conformant event name.

- [ ] **Step 3: Verify identifier uniqueness**

Run:

```bash
rg --no-filename -o '^\| `(API|EVT)-[0-9]{3}`' apps/specs/contracts | sort | uniq -d
```

Expected: no output. Then run:

```bash
pnpm --filter @hiaka/specs typecheck
git diff --check
```

Expected: no broken links and no whitespace errors.

- [ ] **Step 4: Commit API and event contracts**

```bash
git add apps/specs/contracts/api-conventions.mdx apps/specs/contracts/domain-events.mdx
git commit -m "Define API and domain event contracts"
```

---

### Task 4: Define Authorization And Auditability Contracts

**Files:**

* Create: `apps/specs/contracts/authorization.mdx`
* Create: `apps/specs/contracts/auditability.mdx`

**Interfaces:**

* Consumes: normative language, the API contract and the Domain Event contract.
* Produces: `AUTH-001` through `AUTH-010` and `AUD-001` through `AUD-010`.

- [ ] **Step 1: Write Authorization requirements**

Create `apps/specs/contracts/authorization.mdx` with the standard contract-page sections.

Define these requirements:

| ID | Requirement |
| --- | --- |
| `AUTH-001` | Authorization MUST be enforced at the application or domain boundary, not only in the frontend. |
| `AUTH-002` | Each protected action MUST identify the actor, permission and protected resource. |
| `AUTH-003` | Authorization policies MUST support resource and territorial scope where applicable. |
| `AUTH-004` | Authentication, participant eligibility and authorization MUST remain distinct decisions. |
| `AUTH-005` | Verified legal identity MUST NOT automatically become public profile data. |
| `AUTH-006` | Denied actions MUST return an explicit, non-sensitive denial result. |
| `AUTH-007` | Default access MUST be denied when no applicable policy grants an action. |
| `AUTH-008` | Privileged institutional actions MUST be attributable to an accountable actor. |
| `AUTH-009` | Policy inputs and decisions SHOULD be testable independently from transport and UI layers. |
| `AUTH-010` | Authorization documentation MUST identify external identity or eligibility dependencies through interfaces rather than vendors. |

Expected evidence must include policy definitions, use-case tests and protected-operation documentation. Include a policy test as the conformant example and a hidden frontend button as the non-conformant example.

- [ ] **Step 2: Write Auditability requirements**

Create `apps/specs/contracts/auditability.mdx` with the standard contract-page sections.

Define these requirements:

| ID | Requirement |
| --- | --- |
| `AUD-001` | Specifications MUST identify important civic actions that require audit records. |
| `AUD-002` | Audit records MUST include an unambiguous timestamp and action type. |
| `AUD-003` | Audit records MUST identify the accountable actor or documented system actor. |
| `AUD-004` | State-change records MUST capture previous state, new state and reason when relevant. |
| `AUD-005` | Audit records MUST preserve source and provenance information. |
| `AUD-006` | Audit data MUST be protected against unauthorized modification and access. |
| `AUD-007` | Retention and deletion expectations MUST be documented for each audit category. |
| `AUD-008` | Public evidence MUST be distinguished from restricted internal audit data. |
| `AUD-009` | Audit records MUST NOT be replaced by Domain Events without an explicit audit projection satisfying this contract. |
| `AUD-010` | Audit evidence SHOULD be retrievable by authorized reviewers using stable civic object identifiers. |

Expected evidence must include audit schemas, authorization rules, retention policy and tests for important state transitions. Distinguish a public commitment history from an internal administrative audit record.

- [ ] **Step 3: Verify privacy and audit boundaries**

Run:

```bash
rg -n "frontend|eligibility|public profile|Domain Events|public evidence|retention" apps/specs/contracts/authorization.mdx apps/specs/contracts/auditability.mdx
rg --no-filename -o '^\| `(AUTH|AUD)-[0-9]{3}`' apps/specs/contracts | sort | uniq -d
pnpm --filter @hiaka/specs typecheck
git diff --check
```

Expected: required boundaries are present, duplicate identifier command emits no output, links pass and whitespace is clean.

- [ ] **Step 4: Commit authorization and auditability**

```bash
git add apps/specs/contracts/authorization.mdx apps/specs/contracts/auditability.mdx
git commit -m "Define authorization and auditability contracts"
```

---

### Task 5: Define Interoperability And Conformance Contracts

**Files:**

* Create: `apps/specs/contracts/interoperability.mdx`
* Create: `apps/specs/contracts/conformance.mdx`

**Interfaces:**

* Consumes: all earlier framework and contract pages.
* Produces: `INT-001` through `INT-010`, `CONF-001` through `CONF-010` and the evidence matrix format used in later sprints.

- [ ] **Step 1: Write Interoperability requirements**

Create `apps/specs/contracts/interoperability.mdx` with the standard contract-page sections.

Define these requirements:

| ID | Requirement |
| --- | --- |
| `INT-001` | Component interfaces MUST be openly documented. |
| `INT-002` | Exchanged data MUST use documented schemas and stable identifiers. |
| `INT-003` | Shared Digital Services MUST be consumed through explicit ports or contracts. |
| `INT-004` | Civic domain contracts MUST NOT require one vendor-specific implementation. |
| `INT-005` | Required and optional dependencies MUST be identified explicitly. |
| `INT-006` | Contract versions and compatibility expectations MUST be documented. |
| `INT-007` | Locale values MUST use documented language tags and preserve local civic terminology. |
| `INT-008` | Territory references MUST support arbitrary hierarchies without hard-coded Madagascar-specific levels. |
| `INT-009` | Date, time and identifier formats MUST be unambiguous across system boundaries. |
| `INT-010` | Adapter failures MUST surface a documented failure category without leaking vendor-specific errors into the civic domain. |

Expected evidence must include interface definitions, schemas, adapter contract tests and compatibility documentation.

- [ ] **Step 2: Write Conformance requirements**

Create `apps/specs/contracts/conformance.mdx` with the standard contract-page sections.

Define these requirements:

| ID | Requirement |
| --- | --- |
| `CONF-001` | A conformance claim MUST identify the specification version and primary profile evaluated. |
| `CONF-002` | Every applicable `MUST` and `MUST NOT` requirement MUST have inspectable evidence. |
| `CONF-003` | Every unmet `SHOULD` or `SHOULD NOT` requirement MUST include a documented exception and rationale. |
| `CONF-004` | Non-applicable requirements MUST include a scope-based justification. |
| `CONF-005` | Evidence MUST identify its type, location, owner and review date. |
| `CONF-006` | Conformance reports MUST preserve requirement identifiers exactly. |
| `CONF-007` | A result MUST be classified as conformant, partially conformant or non-conformant. |
| `CONF-008` | Any unmet applicable mandatory requirement MUST prevent a conformant result. |
| `CONF-009` | Conformance reports MUST distinguish missing evidence from evidence of non-conformance. |
| `CONF-010` | Conformance evidence SHOULD be reproducible or independently reviewable. |

Include this evidence matrix shape:

```markdown
| Requirement | Applicability | Evidence type | Evidence location | Result | Notes |
| --- | --- | --- | --- | --- | --- |
| API-002 | Applicable | OpenAPI document | `openapi.yaml` | Pass | Version validated in CI |
```

Define results precisely:

* `conformant`: all applicable mandatory requirements pass with evidence;
* `partially conformant`: the evaluation remains incomplete because required evidence is missing, but no mandatory violation has been demonstrated;
* `non-conformant`: evidence demonstrates violation of one or more applicable mandatory requirements.

- [ ] **Step 3: Verify all cross-cutting identifiers**

Run:

```bash
rg --no-filename -o '^\| `(API|EVT|AUTH|AUD|INT|CONF)-[0-9]{3}`' apps/specs/contracts | sort | uniq -d
```

Expected: no output.

Run:

```bash
for prefix in API EVT AUTH AUD INT CONF; do
  count=$(rg --no-filename -o "^\\| \`${prefix}-[0-9]{3}\`" apps/specs/contracts | sort -u | wc -l | tr -d ' ')
  test "$count" = "10" || { echo "$prefix expected 10 identifiers, found $count"; exit 1; }
done
```

Expected: exit code 0 and no output.

- [ ] **Step 4: Verify links and formatting**

Run:

```bash
pnpm --filter @hiaka/specs typecheck
git diff --check
```

Expected: no broken links and no whitespace errors.

- [ ] **Step 5: Commit interoperability and conformance**

```bash
git add apps/specs/contracts/interoperability.mdx apps/specs/contracts/conformance.mdx
git commit -m "Define interoperability and conformance contracts"
```

---

### Task 6: Integrate The Contract-Oriented Specs Portal

**Files:**

* Modify: `apps/specs/docs.json`
* Modify: `apps/specs/specs.mdx`
* Modify: `docs/product-specs/civic-stack.md`
* Modify: `docs/design-docs/specs-ready-roadmap.md`

**Interfaces:**

* Consumes: every route created in Tasks 1-5.
* Produces: final contract-oriented Mintlify navigation and project-level documentation links.

- [ ] **Step 1: Restructure Mintlify navigation**

Modify the `Civic Stack Specs` tab in `apps/specs/docs.json` to this order:

1. `Start Here`: `specs`.
2. `Specification Framework`:
   * `framework`;
   * `framework/normative-language`;
   * `framework/common-spec-structure`;
   * nested `Specification Profiles` with all four profile routes.
3. `Cross-Cutting Contracts`: all six `contracts/*` routes.
4. `Component Specifications`:
   * nested `Civic Design System` using the current Design System subtree;
   * nested `Civic Modules` containing `modules/overview`;
   * nested `Civic Blueprints` containing `blueprints/public-consultation-v0`.
5. `Repository Strategy`: `repository-strategy`.

Keep the `Overview` and `Civic Stack Model` tabs unchanged.

- [ ] **Step 2: Turn the Specs page into the contract entry point**

Update `apps/specs/specs.mdx` to:

* label current specs as normative drafts;
* explain Contract Kernel + Profiles;
* link to the framework and six contracts;
* explain evidence-based conformance;
* preserve links to Design System, Modules, Public Consultation v0 and repository strategy;
* state that Mintlify presents the specs while future canonical contracts may move to dedicated repositories.

- [ ] **Step 3: Align product documentation and roadmap**

Update `docs/product-specs/civic-stack.md` with a short `Civic Stack Specs framework` subsection linking conceptually to:

* common core;
* specialized profiles;
* normative language;
* domain-scoped requirement identifiers;
* evidence-based conformance.

Update Sprint 3 in `docs/design-docs/specs-ready-roadmap.md` to reflect the implemented Contract Kernel + Profiles architecture and the six cross-cutting contracts. Mark the deliverables as implemented without marking Sprint 4 or later work complete.

- [ ] **Step 4: Validate JSON and Mintlify navigation**

Run:

```bash
node -e "JSON.parse(require('fs').readFileSync('apps/specs/docs.json', 'utf8')); console.log('docs.json valid')"
pnpm --filter @hiaka/specs typecheck
```

Expected: `docs.json valid` and `success no broken links found`.

- [ ] **Step 5: Run repository validation**

Run:

```bash
git diff --check
pnpm lint
pnpm typecheck
```

Expected: all commands exit 0. A macOS duplicate `GNotificationCenterDelegate` warning from installed `sharp/libvips` versions may appear; it is non-blocking when Mintlify reports no broken links.

- [ ] **Step 6: Perform the final requirement audit**

Run:

```bash
rg --no-filename -o '^\| `(API|EVT|AUTH|AUD|INT|CONF)-[0-9]{3}`' apps/specs/contracts | sort | uniq -d
rg -n "T[B]D|T[O]DO|F[I]XME|place[h]older" apps/specs/framework apps/specs/contracts
```

Expected: both commands produce no output.

Review manually:

* every contract page has purpose, scope, non-goals, requirements, evidence, examples and dependencies;
* every profile extends the common core;
* every current component-spec entry point links to its primary profile;
* Model pages remain descriptive and contain no copied normative contracts;
* Design System specs remain distinct from API and Module business rules.

- [ ] **Step 7: Commit portal integration**

```bash
git add apps/specs/docs.json apps/specs/specs.mdx docs/product-specs/civic-stack.md docs/design-docs/specs-ready-roadmap.md
git commit -m "Integrate civic stack contract navigation"
```

---

## Completion Gate

Before declaring Sprint 3 complete, run from the repository root:

```bash
git diff --check
pnpm --filter @hiaka/specs typecheck
pnpm lint
pnpm typecheck
```

Confirm:

* `apps/specs/docs.json` parses as JSON;
* Mintlify reports no broken links;
* each identifier namespace contains exactly ten unique requirements;
* no placeholder markers remain in framework or contract pages;
* the worktree contains only the intended Sprint 3 changes;
* the landing and Payload seed were not changed.
