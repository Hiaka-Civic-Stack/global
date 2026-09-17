import { withPayload } from "@payloadcms/next/withPayload"

/** @type {import("next").NextConfig} */
const nextConfig = {
  transpilePackages: ["@hiaka/content", "@hiaka/ui"]
}

export default withPayload(nextConfig)

