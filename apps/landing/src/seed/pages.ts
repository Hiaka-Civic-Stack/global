import { getPayload } from "payload"

import config from "../payload.config"
import type { Page } from "../payload-types"

type PageSeed = Pick<Page, "title" | "slug" | "summary" | "navigation" | "layout" | "meta" | "_status">
type NavigationSeed = {
  label: string
  href: string
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
    href: "http://localhost:3001"
  }
] satisfies NavigationSeed[]

const siteSettings = {
  siteName: "Hiaka",
  footerSummary: "Open-source Civic Stack for transparent, inclusive and interoperable digital participation services.",
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
        blockType: "hero",
        eyebrow: "GovStack-like civic building blocks",
        title: "Hiaka Civic Stack",
        body:
          "An open-source Civic Stack for transparent, inclusive and interoperable digital participation services. Designed first for Madagascar, reusable across institutional and territorial contexts.",
        primaryLink: {
          label: "Explore the model",
          href: "/model"
        },
        secondaryLink: {
          label: "Read specifications",
          href: "http://localhost:3001"
        },
        asideLabel: "Reference vertical slice",
        asideTitle: "Public Consultation v0",
        asideItems: [
          {
            label: "Institution publishes a consultation"
          },
          {
            label: "Participants submit contributions"
          },
          {
            label: "Institution responds and tracks commitments"
          }
        ]
      },
      {
        blockType: "trustStrip",
        items: [
          {
            label: "Open source"
          },
          {
            label: "API first"
          },
          {
            label: "Composable"
          },
          {
            label: "Privacy preserving"
          },
          {
            label: "Territory aware"
          }
        ]
      },
      {
        blockType: "statementBand",
        statement:
          "Civic software should be composed from trustworthy public building blocks, not rebuilt from scratch for every institution."
      },
      {
        blockType: "updatesGrid",
        title: "Explore the hub",
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
        blockType: "layeredModel",
        eyebrow: "Core model",
        title: "Civic services composed from clear layers",
        body:
          "Hiaka separates complete public processes, recurring civic interactions, reusable domain capabilities and shared digital services.",
        layers: [
          {
            name: "Civic Blueprints",
            description: "Complete public participation processes composed from patterns and modules."
          },
          {
            name: "Civic Patterns",
            description: "Recurring civic interactions coordinated across one or more modules."
          },
          {
            name: "Civic Modules",
            description: "Reusable civic capabilities and business rules owned independently."
          },
          {
            name: "Shared Digital Services",
            description: "Identity, territory, notifications, documents, audit, search and other platform capabilities."
          }
        ]
      },
      {
        blockType: "principlesGrid",
        items: [
          {
            title: "Civic first",
            body: "Start from public participation needs and domain rules, then choose the technical shape.",
            link: {
              label: "Read architecture",
              href: "http://localhost:3001/architecture"
            }
          },
          {
            title: "Interoperable",
            body: "Expose explicit contracts and preserve module boundaries for long-term reuse.",
            link: {
              label: "Open specs",
              href: "http://localhost:3001"
            }
          },
          {
            title: "Territory aware",
            body: "Support local administrative hierarchies without hard-coding one national model into the core.",
            link: {
              label: "Read architecture",
              href: "http://localhost:3001/architecture"
            }
          },
          {
            title: "Privacy preserving",
            body: "Keep accounts, participants, verified identity, eligibility and public profiles separate.",
            link: {
              label: "Open specs",
              href: "http://localhost:3001"
            }
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
        blockType: "moduleExplorer",
        eyebrow: "Initial Civic Modules",
        title: "Reusable modules, independent repositories",
        body:
          "Each Civic Module can live in its own repository with its own contracts, tests, release cycle and implementation documentation.",
        previewLabel: "Initial module map",
        modules: [
          {
            name: "Participation",
            description: "Manage civic processes, publics, eligibility and participant access."
          },
          {
            name: "Contribution",
            description: "Collect, publish, classify and respond to civic contributions."
          },
          {
            name: "Deliberation",
            description: "Support structured debate, argumentation and collective sense-making."
          },
          {
            name: "Decision",
            description: "Record decisions, rationale, mandates and institutional outcomes."
          },
          {
            name: "Accountability",
            description: "Track commitments, milestones, progress evidence and public follow-up."
          }
        ]
      },
      {
        blockType: "ecosystemGrid",
        eyebrow: "Ecosystem",
        title: "Built for institutions, implementers and civic contributors",
        body:
          "The hub should explain the stack, document the contracts and connect independent module work into one coherent civic architecture.",
        items: [
          {
            label: "Public institutions"
          },
          {
            label: "Civic technology teams"
          },
          {
            label: "Civil society organizations"
          },
          {
            label: "Module maintainers"
          },
          {
            label: "Implementation partners"
          },
          {
            label: "Open-source contributors"
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
        blockType: "journey",
        eyebrow: "First implementation priority",
        title: "Public Consultation v0",
        body:
          "The first end-to-end target proves the stack through a concrete public participation flow before generalizing abstractions.",
        steps: [
          {
            label: "Institution creates consultation"
          },
          {
            label: "Institution publishes consultation"
          },
          {
            label: "Participant submits contribution"
          },
          {
            label: "Contribution is published"
          },
          {
            label: "Institution responds"
          },
          {
            label: "Institution creates commitment"
          },
          {
            label: "Commitment progress is updated"
          },
          {
            label: "Participant sees implementation progress"
          }
        ]
      },
      {
        blockType: "updatesGrid",
        title: "Specification surfaces",
        items: [
          {
            title: "Blueprint specification",
            body: "Detailed Public Consultation v0 documentation lives in the specifications portal.",
            href: "http://localhost:3001/blueprints/public-consultation-v0"
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

seedPages().catch((error: unknown) => {
  console.error(error)
  process.exit(1)
})
