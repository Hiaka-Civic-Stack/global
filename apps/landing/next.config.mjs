import { withPayload } from "@payloadcms/next/withPayload"

/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@hiaka/content", "@hiaka/ui"],
  async redirects() {
    return [
      {
        source: "/triad",
        destination: "/model",
        permanent: true
      },
      {
        source: "/design-system",
        destination: "/model/design-system",
        permanent: true
      }
    ]
  }
}

export default withPayload(nextConfig)
