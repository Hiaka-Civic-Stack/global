import type { Metadata } from "next"

import "../globals.css"

export const metadata: Metadata = {
  title: "Hiaka Civic Stack",
  description:
    "An open-source Civic Stack for transparent, inclusive and interoperable digital participation services."
}

export default function FrontendLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-primary-foreground"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  )
}
