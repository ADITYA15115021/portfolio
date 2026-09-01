import type { ReactNode } from 'react'

type SectionHeadingProps = { eyebrow: string; title: string; children?: ReactNode }

export function SectionHeading({ eyebrow, title, children }: SectionHeadingProps) {
  return <div className="mb-10 max-w-2xl sm:mb-14">
    <p className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-moss">{eyebrow}</p>
    <h2 className="font-display text-4xl leading-[1.05] tracking-tight text-ink sm:text-5xl">{title}</h2>
    {children && <div className="mt-5 text-base leading-7 text-muted">{children}</div>}
  </div>
}
