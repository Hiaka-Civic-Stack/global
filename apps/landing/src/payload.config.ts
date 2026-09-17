import path from "node:path"
import { fileURLToPath } from "node:url"

import { sqliteAdapter } from "@payloadcms/db-sqlite"
import { lexicalEditor } from "@payloadcms/richtext-lexical"
import { buildConfig } from "payload"

import { Media } from "./collections/Media"
import { Pages } from "./collections/Pages"
import { Users } from "./collections/Users"

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)

export default buildConfig({
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname)
    },
    livePreview: {
      breakpoints: [
        {
          label: "Mobile",
          name: "mobile",
          width: 390,
          height: 844
        },
        {
          label: "Desktop",
          name: "desktop",
          width: 1440,
          height: 900
        }
      ],
      collections: [Pages.slug],
      url: ({ data }) => {
        const siteURL = process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
        const slug = typeof data?.slug === "string" ? data.slug : "home"
        const path = slug === "home" ? "/" : `/${slug}`

        return `${siteURL}${path}`
      }
    }
  },
  collections: [Users, Pages, Media],
  db: sqliteAdapter({
    client: {
      url: process.env.DATABASE_URI || "file:./payload.db"
    }
  }),
  editor: lexicalEditor(),
  localization: {
    defaultLocale: "fr",
    fallback: true,
    locales: ["fr", "mg", "en"]
  },
  secret: process.env.PAYLOAD_SECRET || "development-secret-change-me",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts")
  }
})
