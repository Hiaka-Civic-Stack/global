import { getPayload } from "payload"

import config from "../payload.config"
import type { Page } from "../payload-types"

type PageSeed = Pick<Page, "title" | "slug" | "summary" | "navigation" | "layout" | "meta" | "_status">
type NavigationSeed = {
  label: string
  href: string
}

const specsBaseUrl = process.env.SPECS_BASE_URL || "http://localhost:3001"

function specsUrl(path = "") {
  const normalizedBaseUrl = specsBaseUrl.replace(/\/$/, "")
  const normalizedPath = path.startsWith("/") ? path : `/${path}`

  return path ? `${normalizedBaseUrl}${normalizedPath}` : normalizedBaseUrl
}

const mainNavigation = [
  {
    label: "Design System",
    href: "/design-system"
  },
  {
    label: "Model",
    href: "/model"
  },
  {
    label: "Specifications",
    href: specsUrl()
  }
] satisfies NavigationSeed[]

const siteSettings = {
  siteName: "Hiaka",
  footerSummary: "Open-source Civic Stack for transparent, inclusive and interoperable digital participation services.",
  specsBaseUrl,
  headerNavigation: mainNavigation,
  footerNavigation: mainNavigation
}

const pages: PageSeed[] = [
  {
    title: "Hiaka Civic Stack",
    slug: "home",
    summary:
      "Hiaka is an open-source Civic Stack for transparent, inclusive and interoperable digital participation services.",
    navigation: [],
    layout: [
      {
        blockType: "pageHero",
        eyebrow: "GovStack-like civic building blocks",
        title: "Hiaka Civic Stack",
        body:
          "An open-source Civic Stack for transparent, inclusive and interoperable digital participation services. Designed first for Madagascar, reusable across institutional and territorial contexts.",
        actions: [
          {
            label: "Explore the triad",
            href: "/design-system"
          },
          {
            label: "Read specifications",
            href: specsUrl()
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Hiaka triad",
        title: "Three pillars for civic technology",
        body: "Hiaka combines experience design, conceptual architecture and implementation contracts into one coherent public stack.",
        variant: "cards",
        items: [
          {
            title: "Civic Design System",
            body: "A standalone Hiaka product model for builders who need to create trustworthy, inclusive and auditable civic interfaces.",
            href: "/design-system"
          },
          {
            title: "Civic Stack Model",
            body: "The conceptual architecture for composing civic services from Modules, Patterns, Blueprints and Shared Digital Services.",
            href: "/model"
          },
          {
            title: "Civic Stack Specs",
            body: "The implementation and conformance layer for module contracts, blueprint specifications, APIs, events and interoperability.",
            href: specsUrl()
          }
        ]
      },
      {
        blockType: "richTextSection",
        eyebrow: "Boundary rule",
        title: "Design, model and specs stay distinct",
        items: [
          {
            body: "The Civic Design System shapes experience, interaction and interface trust, but it does not own civic domain rules."
          },
          {
            body: "The Civic Stack Model explains how civic services are composed, but it does not define every visual detail."
          },
          {
            body: "The Civic Stack Specs define implementation contracts and conformance, but they should remain precise rather than becoming marketing storytelling."
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Reference surfaces",
        title: "Go deeper into the stack",
        body: "The triad gives the top-level model. These pages make the first reusable civic capabilities and reference blueprint concrete.",
        variant: "cards",
        items: [
          {
            title: "Initial Civic Modules",
            body: "Review the first reusable civic capabilities and how each can live in its own repository.",
            href: "/modules"
          },
          {
            title: "Public Consultation v0",
            body: "Follow the first reference blueprint and its end-to-end civic journey.",
            href: "/blueprints/public-consultation-v0"
          }
        ]
      },
      {
        blockType: "calloutBand",
        title: "Build from the public specifications",
        body: "The specs portal turns the triad into implementation guidance for architects, developers and evaluators.",
        action: {
          label: "Open specifications",
          href: specsUrl()
        }
      }
    ],
    meta: {
      title: "Hiaka Civic Stack",
      description:
        "Open-source civic building blocks for transparent, inclusive and interoperable digital participation services."
    },
    _status: "published"
  },
  {
    title: "Civic Design System",
    slug: "design-system",
    summary:
      "The Civic Design System is Hiaka's civic-tech experience meta-model for trust, inclusion, accessibility and design governance.",
    navigation: [],
    layout: [
      {
        blockType: "pageHero",
        eyebrow: "Civic Design System",
        title: "A meta design system for civic technology",
        body:
          "Hiaka treats design as civic infrastructure. The Civic Design System defines how interfaces should guide, reassure, include and remain accountable across public participation services.",
        actions: [
          {
            label: "Read the specs orientation",
            href: specsUrl("/design-system")
          },
          {
            label: "Explore the model",
            href: "/model"
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Meta-model",
        title: "Six layers of the Civic Design System",
        body: "The system is not a skin over shadcn. It is a civic-tech meta-model for designing public interfaces coherently.",
        variant: "cards",
        items: [
          {
            title: "Civic principles",
            body: "Trust, inclusion, transparency, auditability, territory awareness, localization and accessibility guide every design decision."
          },
          {
            title: "Design tokens",
            body: "Primitive, semantic and civic-purpose tokens connect visual choices to civic meaning."
          },
          {
            title: "Component hierarchy",
            body: "shadcn primitives become Hiaka atoms, molecules, organisms and shared UI blocks through explicit contracts."
          },
          {
            title: "Civic interaction patterns",
            body: "Inform, consult, contribute, deliberate, decide and account provide a shared vocabulary for civic flows."
          },
          {
            title: "Governance",
            body: "Rules for adding tokens, component archetypes and civic interaction patterns keep the system coherent as it grows."
          },
          {
            title: "Adoption and quality",
            body: "Accessibility, localization, responsiveness and adoption practices make the system usable beyond this hub."
          }
        ]
      },
      {
        blockType: "richTextSection",
        eyebrow: "Boundary",
        title: "Experience language, not domain ownership",
        items: [
          {
            body: "The Civic Design System helps people understand public processes and trust digital civic interfaces."
          },
          {
            body: "It does not define the domain rules for participation, contribution, deliberation, decision or accountability."
          },
          {
            body: "Those rules belong to the Civic Stack Model and are implemented through the Civic Stack Specs."
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Builder relationship",
        title: "How builders use it",
        body: "The Civic Design System helps teams design civic products from Hiaka without copying the landing site's local UI system.",
        variant: "index",
        items: [
          {
            label: "01",
            title: "Model civic experience",
            body: "Start from trust, inclusion, auditability, localization and territory-aware participation."
          },
          {
            label: "02",
            title: "Choose civic patterns",
            body: "Use patterns such as inform, consult, contribute, deliberate, decide and account."
          },
          {
            label: "03",
            title: "Implement in your product",
            body: "Translate the model into the runtime and component library appropriate for your civic product."
          }
        ]
      },
      {
        blockType: "calloutBand",
        title: "Design is part of civic trust",
        body: "Future token and component work should start from the Civic Design System doctrine, not from isolated visual preferences.",
        action: {
          label: "Open design-system specs",
          href: specsUrl("/design-system")
        }
      }
    ],
    meta: {
      title: "Hiaka Civic Design System",
      description: "The civic-tech experience meta-model behind Hiaka interfaces, tokens and components."
    },
    _status: "published"
  },
  {
    title: "Core Model",
    slug: "model",
    summary:
      "The Hiaka model separates complete civic processes, recurring civic interactions, reusable modules and shared digital services.",
    navigation: [],
    layout: [
      {
        blockType: "pageHero",
        eyebrow: "Core model",
        title: "Civic services composed from clear layers",
        body:
          "Hiaka separates complete public processes, recurring civic interactions, reusable domain capabilities and shared digital services.",
        actions: [
          {
            label: "Read architecture",
            href: specsUrl("/architecture")
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Composition",
        title: "The four layers",
        body: "Each layer has a distinct responsibility in the stack.",
        variant: "index",
        items: [
          {
            label: "01",
            title: "Civic Blueprints",
            body: "Complete public participation processes composed from patterns and modules.",
            href: "/blueprints/public-consultation-v0"
          },
          {
            label: "02",
            title: "Civic Patterns",
            body: "Recurring civic interactions coordinated across one or more modules."
          },
          {
            label: "03",
            title: "Civic Modules",
            body: "Reusable civic capabilities and business rules owned independently.",
            href: "/modules"
          },
          {
            label: "04",
            title: "Shared Digital Services",
            body: "Identity, territory, notifications, documents, audit, search and other platform capabilities."
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Principles",
        title: "Engineering principles",
        body: "The stack should stay concrete, interoperable and accountable as it grows.",
        variant: "cards",
        items: [
          {
            title: "Civic first",
            body: "Start from public participation needs and domain rules, then choose the technical shape.",
            href: specsUrl("/architecture")
          },
          {
            title: "Interoperable",
            body: "Expose explicit contracts and preserve module boundaries for long-term reuse.",
            href: specsUrl()
          },
          {
            title: "Territory aware",
            body: "Support local administrative hierarchies without hard-coding one national model into the core.",
            href: specsUrl("/architecture")
          },
          {
            title: "Privacy preserving",
            body: "Keep accounts, participants, verified identity, eligibility and public profiles separate.",
            href: specsUrl()
          }
        ]
      }
    ],
    meta: {
      title: "Hiaka Core Model",
      description: "How Hiaka composes Civic Blueprints, Civic Patterns, Civic Modules and Shared Digital Services."
    },
    _status: "published"
  },
  {
    title: "Initial Civic Modules",
    slug: "modules",
    summary:
      "Hiaka starts with Participation, Contribution, Deliberation, Decision and Accountability as independent civic capabilities.",
    navigation: [],
    layout: [
      {
        blockType: "pageHero",
        eyebrow: "Initial Civic Modules",
        title: "Reusable modules, independent repositories",
        body:
          "Each Civic Module can live in its own repository with its own contracts, tests, release cycle and implementation documentation.",
        actions: [
          {
            label: "Open specifications",
            href: specsUrl("/modules/overview")
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Initial module map",
        title: "Reusable civic capabilities",
        body: "These modules define the first reusable capability set for public participation services.",
        variant: "cards",
        items: [
          {
            title: "Participation",
            body: "Manage civic processes, publics, eligibility and participant access."
          },
          {
            title: "Contribution",
            body: "Collect, publish, classify and respond to civic contributions."
          },
          {
            title: "Deliberation",
            body: "Support structured debate, argumentation and collective sense-making."
          },
          {
            title: "Decision",
            body: "Record decisions, rationale, mandates and institutional outcomes."
          },
          {
            title: "Accountability",
            body: "Track commitments, milestones, progress evidence and public follow-up."
          }
        ]
      },
      {
        blockType: "richTextSection",
        eyebrow: "Ecosystem",
        title: "Built for institutions, implementers and civic contributors",
        items: [
          {
            body: "The hub explains the stack, documents contracts and connects independent module work into one coherent civic architecture."
          },
          {
            body: "Module repositories can evolve independently while still sharing common contracts, design principles and documentation conventions."
          },
          {
            body: "Shared services such as identity, territory, notifications, search and audit infrastructure should remain reusable platform capabilities, not Civic Modules."
          }
        ]
      }
    ],
    meta: {
      title: "Hiaka Civic Modules",
      description: "Initial reusable Civic Modules for the Hiaka Civic Stack."
    },
    _status: "published"
  },
  {
    title: "Public Consultation v0",
    slug: "blueprints/public-consultation-v0",
    summary:
      "Public Consultation v0 is the first reference blueprint for proving the Hiaka Civic Stack end to end.",
    navigation: [],
    layout: [
      {
        blockType: "pageHero",
        eyebrow: "First implementation priority",
        title: "Public Consultation v0",
        body:
          "The first end-to-end target proves the stack through a concrete public participation flow before generalizing abstractions.",
        actions: [
          {
            label: "Read blueprint specification",
            href: specsUrl("/blueprints/public-consultation-v0")
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Reference journey",
        title: "End-to-end civic flow",
        body: "The first blueprint focuses the product around a concrete institutional and participant journey.",
        variant: "index",
        items: [
          {
            label: "01",
            title: "Institution creates consultation"
          },
          {
            label: "02",
            title: "Institution publishes consultation"
          },
          {
            label: "03",
            title: "Participant submits contribution"
          },
          {
            label: "04",
            title: "Contribution is published"
          },
          {
            label: "05",
            title: "Institution responds"
          },
          {
            label: "06",
            title: "Institution creates commitment"
          },
          {
            label: "07",
            title: "Commitment progress is updated"
          },
          {
            label: "08",
            title: "Participant sees implementation progress"
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Specifications",
        title: "Specification surfaces",
        body: "Reference implementation work should point back to stable public specifications.",
        variant: "index",
        items: [
          {
            title: "Blueprint specification",
            body: "Detailed Public Consultation v0 documentation lives in the specifications portal.",
            href: specsUrl("/blueprints/public-consultation-v0")
          },
          {
            title: "Module dependencies",
            body: "The first vertical slice depends primarily on Participation, Contribution and Accountability.",
            href: "/modules"
          },
          {
            title: "Core architecture",
            body: "The implementation should preserve the Civic Blueprint, Pattern, Module and Shared Service boundaries.",
            href: "/model"
          }
        ]
      },
      {
        blockType: "calloutBand",
        title: "Keep implementation concrete before generalizing",
        body: "Public Consultation v0 should prove Participation, Contribution and Accountability before introducing broader abstractions.",
        action: {
          label: "Review module map",
          href: "/modules"
        }
      }
    ],
    meta: {
      title: "Public Consultation v0",
      description: "The first reference blueprint and implementation journey for the Hiaka Civic Stack."
    },
    _status: "published"
  }
]

async function seedPages() {
  const payload = await getPayload({ config })

  await payload.updateGlobal({
    slug: "site-settings",
    data: siteSettings,
    locale: "fr"
  })

  payload.logger.info("Updated global seed: site-settings")

  for (const page of pages) {
    const existingPage = await payload.find({
      collection: "pages",
      limit: 1,
      where: {
        slug: {
          equals: page.slug
        }
      }
    })

    const existing = existingPage.docs[0]

    if (existing) {
      await payload.update({
        collection: "pages",
        id: existing.id,
        data: page,
        locale: "fr"
      })

      payload.logger.info(`Updated page seed: ${page.slug}`)
    } else {
      const created = await payload.create({
        collection: "pages",
        data: page,
        locale: "fr"
      })

      payload.logger.info(`Created page seed: ${page.slug} (${created.id})`)
    }
  }

  await payload.destroy()
}

seedPages()
  .then(() => {
    process.exit(0)
  })
  .catch((error: unknown) => {
    console.error(error)
    process.exit(1)
  })
