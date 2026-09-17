import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from "../../components/molecules/card"
import type { PrinciplesGridProps } from "./principles-grid.types"

export function PrinciplesGrid({ items }: PrinciplesGridProps) {
  return (
    <section className="mx-auto grid max-w-7xl gap-5 px-6 pb-20 md:grid-cols-3">
      {items.map((principle, index) => (
        <Card key={`${principle.title}-${index}`}>
          <CardHeader>
            <CardTitle>{principle.title}</CardTitle>
            <CardDescription>{principle.body}</CardDescription>
          </CardHeader>
          {principle.link?.href ? (
            <CardContent>
              <a href={principle.link.href} className="text-sm font-semibold text-primary hover:underline">
                {principle.link.label}
              </a>
            </CardContent>
          ) : null}
        </Card>
      ))}
    </section>
  )
}
