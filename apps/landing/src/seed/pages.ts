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

const stalePageSlugs = ["triad", "design-system"]

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
            label: "Explore the model",
            href: "/model"
          },
          {
            label: "Read specifications",
            href: specsUrl()
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Hiaka concepts",
        title: "Model and specs for civic technology",
        body: "Hiaka separates the conceptual model of the Civic Stack from the specifications that make its components implementable.",
        variant: "cards",
        items: [
          {
            title: "Civic Stack Model",
            body: "The conceptual architecture for composing civic services from Modules, the Civic Design System, Blueprints and Shared Digital Services.",
            href: "/model"
          },
          {
            title: "Civic Stack Specs",
            body: "The specification layer for model components: modules, design system, blueprints, shared services, APIs, events and conformance.",
            href: specsUrl()
          }
        ]
      },
      {
        blockType: "richTextSection",
        eyebrow: "Boundary rule",
        title: "The model explains, the specs define",
        items: [
          {
            body: "The Civic Stack Model explains the reusable components of Hiaka: Civic Modules, the Civic Design System, Civic Blueprints and Shared Digital Services."
          },
          {
            body: "The Civic Design System is part of the model. It generalizes Civic Patterns such as inform, consult, contribute, deliberate, decide and account."
          },
          {
            body: "The Civic Stack Specs define the specifications and conformance expectations for the components of that model."
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Reference surfaces",
        title: "Go deeper into the stack",
        body: "These pages make the first reusable civic capabilities, experience patterns and reference blueprint concrete.",
        variant: "cards",
        items: [
          {
            title: "Civic Design System",
            body: "Explore the intent-driven and semantic model component that owns Civic Design System patterns.",
            href: "/model/design-system"
          },
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
        body: "The specs portal turns the Civic Stack Model into implementation guidance for architects, developers and evaluators.",
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
    slug: "model/design-system",
    summary:
      "The Civic Design System is the intent-driven and semantic Civic Stack Model component for civic product experience.",
    navigation: [],
    layout: [
      {
        blockType: "pageHero",
        eyebrow: "Civic Design System",
        title: "Intent-driven civic experience",
        body:
          "Hiaka treats design as civic infrastructure. The Civic Design System sits inside the Civic Stack Model and defines the intents, semantic language and patterns behind trustworthy public participation services.",
        actions: [
          {
            label: "Read design-system specs",
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
        eyebrow: "Conceptual model",
        title: "Three layers for civic experience",
        body: "The system is not the hub UI. It is the model component that helps teams design civic products from intent, semantic meaning and reusable patterns.",
        variant: "cards",
        items: [
          {
            title: "Intent Layer",
            body: "Civic jobs such as understanding a process, knowing if one can participate, contributing, verifying responses and following commitments."
          },
          {
            title: "Semantic Layer",
            body: "A shared civic language for actors, processes, stages, statuses, evidence, responses, decisions, commitments, territories and relations."
          },
          {
            title: "Pattern Layer",
            body: "Patterns such as inform, consult, contribute, deliberate, decide and account realize civic intents through the semantic language."
          },
          {
            title: "Civic principles",
            body: "Trust, inclusion, transparency, auditability, territory awareness, localization and accessibility govern every layer and artifact."
          },
          {
            title: "Standards and conformance",
            body: "Operational criteria help products prove that they respect civic intents, semantic consistency, patterns, accessibility and accountability."
          },
          {
            title: "Reference implementation artifacts",
            body: "Future tokens, components, Figma bridge, examples and guidance should implement stable civic meanings rather than define the model."
          }
        ]
      },
      {
        blockType: "richTextSection",
        eyebrow: "Boundary",
        title: "Experience model, not module ownership",
        items: [
          {
            body: "The Civic Design System helps people understand public processes, know their participation options and verify public action."
          },
          {
            body: "It does not define the business rules for participation, contribution, deliberation, decision or accountability modules."
          },
          {
            body: "Its specs belong to Civic Stack Specs because Civic Stack Specs specify the components of the Civic Stack Model."
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Builder relationship",
        title: "How builders use it",
        body: "The Civic Design System helps teams design civic products from Hiaka without copying the hub's local UI implementation.",
        variant: "index",
        items: [
          {
            label: "01",
            title: "Start from civic intent",
            body: "Name the civic job before choosing screens, flows or components."
          },
          {
            label: "02",
            title: "Use semantic language",
            body: "Represent actors, process state, eligibility, evidence, responses, decisions, commitments and territories consistently."
          },
          {
            label: "03",
            title: "Apply civic patterns",
            body: "Use patterns such as inform, consult, contribute, deliberate, decide and account to realize the intent."
          },
          {
            label: "04",
            title: "Review operational fit",
            body: "Check standards, conformance expectations and future implementation artifacts without confusing them with the conceptual model."
          }
        ]
      },
      {
        blockType: "calloutBand",
        title: "Design is part of civic trust",
        body: "Future token, component and design-asset work should start from the Civic Design System doctrine, not from isolated visual preferences.",
        action: {
          label: "Open design-system specs",
          href: specsUrl("/design-system")
        }
      }
    ],
    meta: {
      title: "Hiaka Civic Design System",
      description: "The intent-driven and semantic Civic Stack Model component for civic product experience."
    },
    _status: "published"
  },
  {
    title: "Core Model",
    slug: "model",
    summary:
      "The Hiaka model separates reusable modules, civic experience patterns, complete blueprints and shared digital services.",
    navigation: [],
    layout: [
      {
        blockType: "pageHero",
        eyebrow: "Civic Stack Model",
        title: "The conceptual model of the Civic Stack",
        body:
          "Hiaka composes civic services from Civic Modules, the Civic Design System, Civic Blueprints and Shared Digital Services.",
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
        title: "The four model components",
        body: "Blueprints compose Civic Modules and Civic Design System patterns into complete civic processes, with support from Shared Digital Services.",
        variant: "index",
        items: [
          {
            label: "01",
            title: "Civic Modules",
            body: "Reusable civic capabilities and business rules owned independently.",
            href: "/modules"
          },
          {
            label: "02",
            title: "Civic Design System",
            body: "The intent-driven and semantic civic experience framework that owns Civic Design System patterns.",
            href: "/model/design-system"
          },
          {
            label: "03",
            title: "Civic Blueprints",
            body: "Complete public participation processes composed from modules and Civic Design System patterns.",
            href: "/blueprints/public-consultation-v0"
          },
          {
            label: "04",
            title: "Shared Digital Services",
            body: "Identity, territory, notifications, documents, audit, search and other platform capabilities."
          }
        ]
      },
      {
        blockType: "richTextSection",
        eyebrow: "Composition rule",
        title: "Blueprints compose modules and patterns",
        items: [
          {
            body: "A Civic Blueprint describes a complete civic process, such as Public Consultation v0."
          },
          {
            body: "It composes Civic Modules for business capabilities and Civic Design System patterns for civic experience."
          },
          {
            body: "Shared Digital Services support the model through identity, territory, notifications, documents, search and audit infrastructure."
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
      title: "Hiaka Civic Stack Model",
      description: "How Hiaka composes Civic Modules, the Civic Design System, Civic Blueprints and Shared Digital Services."
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
            body: "The implementation should preserve the Civic Blueprint, Civic Module, Civic Design System pattern and Shared Service boundaries.",
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

  for (const slug of stalePageSlugs) {
    const stalePages = await payload.find({
      collection: "pages",
      limit: 10,
      where: {
        slug: {
          equals: slug
        }
      }
    })

    for (const page of stalePages.docs) {
      await payload.delete({
        collection: "pages",
        id: page.id
      })

      payload.logger.info(`Deleted stale page seed: ${slug}`)
    }
  }

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
