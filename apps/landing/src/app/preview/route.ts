import { draftMode } from "next/headers"
import { redirect } from "next/navigation"

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const previewSecret = process.env.PREVIEW_SECRET
  const path = searchParams.get("path") || "/"

  if (previewSecret && searchParams.get("previewSecret") !== previewSecret) {
    return new Response("Invalid preview secret", { status: 401 })
  }

  const draft = await draftMode()
  draft.enable()

  redirect(path)
}
