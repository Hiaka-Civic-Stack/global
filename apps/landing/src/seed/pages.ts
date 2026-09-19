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
    label: "Modules",
    href: "/modules"
  },
  {
    label: "Blueprint",
    href: "/blueprints/public-consultation-v0"
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
        eyebrow: "Stack principles",
        title: "Built for trustworthy civic participation",
        body: "Hiaka turns civic values into concrete architecture constraints for public digital services.",
        variant: "cards",
        items: [
          {
            title: "Open source",
            body: "Specifications and source code should be suitable for public review, reuse and contribution."
          },
          {
            title: "API first",
            body: "Every important capability should be available through explicit contracts, not only through one web interface."
          },
          {
            title: "Composable",
            body: "Civic services should be assembled from reusable modules, patterns and blueprints."
          },
          {
            title: "Privacy preserving",
            body: "Identity, eligibility and public participation identity must remain separate concepts."
          },
          {
            title: "Territory aware",
            body: "The core model supports local administrative hierarchies without hard-coding one national structure."
          }
        ]
      },
      {
        blockType: "richTextSection",
        eyebrow: "Civic Stack",
        title: "Reusable public building blocks, not one hard-coded application",
        items: [
          {
            body: "Hiaka is not a single civic application. It is a composable stack built around Civic Modules, Civic Patterns and Civic Blueprints."
          },
          {
            body: "The public hub explains the stack, while the specifications portal documents how to implement, compose and evaluate its components."
          },
          {
            body: "The first reference implementation is Public Consultation v0, focused on Participation, Contribution and Accountability before broader generalization."
          }
        ]
      },
      {
        blockType: "contentGrid",
        eyebrow: "Explore",
        title: "Explore the hub",
        body: "Start from the conceptual model, then move into modules and the first reference blueprint.",
        variant: "cards",
        items: [
          {
            title: "Core model",
            body: "Understand the relationship between Civic Blueprints, Civic Patterns, Civic Modules and Shared Digital Services.",
            href: "/model"
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
        title: "Read the public specifications",
        body: "The specs portal documents the architecture, module map and Public Consultation v0 blueprint for implementers.",
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
            body: "Complete public participation processes composed from patterns and modules."
          },
          {
            label: "02",
            title: "Civic Patterns",
            body: "Recurring civic interactions coordinated across one or more modules."
          },
          {
            label: "03",
            title: "Civic Modules",
            body: "Reusable civic capabilities and business rules owned independently."
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
