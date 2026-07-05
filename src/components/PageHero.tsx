import type { ReactNode } from 'react'

export default function PageHero({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string
  title: string
  subtitle?: ReactNode
}) {
  return (
    <div className="mb-10 text-center sm:mb-14">
      <span className="mb-3 inline-block text-xs font-semibold tracking-[0.2em] text-[#e8722a] uppercase">
        {eyebrow}
      </span>
      <h1 className="text-3xl font-bold text-[#0d2b4e] sm:text-4xl">{title}</h1>
      {subtitle && (
        <p className="mx-auto mt-3 max-w-2xl text-sm text-gray-500 sm:text-base">{subtitle}</p>
      )}
    </div>
  )
}
