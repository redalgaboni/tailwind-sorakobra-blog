type Item = {
  label: string
  sub?: string
  pct: number
}

interface Props {
  title: string
  caption?: string
  items: Item[]
  max?: number
  color?: string
  note?: string
}

export default function PctBars({
  title,
  caption,
  items,
  max = 100,
  color = '#10b981',
  note,
}: Props) {
  return (
    <div className="not-prose my-6 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-gray-100 bg-gray-50/80 px-4 py-3 dark:border-gray-800 dark:bg-gray-900/70">
        <h4 className="text-sm font-extrabold text-gray-900 sm:text-base dark:text-gray-100">
          {title}
        </h4>
        {caption && (
          <span className="rounded-full border border-gray-200 bg-white px-2.5 py-0.5 text-[11px] font-semibold text-gray-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400">
            {caption}
          </span>
        )}
      </div>
      <div className="flex justify-between px-4 pt-3 text-[10px] font-medium text-gray-500 dark:text-gray-400">
        <span>0%</span>
        <span>{max}%</span>
      </div>
      <ul className="space-y-4 px-4 pb-4 pt-1">
        {items.map((it) => (
          <li key={it.label}>
            <div className="mb-1.5 flex items-baseline justify-between gap-3">
              <span className="text-sm font-semibold leading-snug text-gray-800 dark:text-gray-200">
                {it.label}
                {it.sub && (
                  <bdi className="block text-[11px] font-normal text-gray-500 dark:text-gray-400">
                    {it.sub}
                  </bdi>
                )}
              </span>
              <span
                className="shrink-0 text-sm font-extrabold tabular-nums"
                style={{ color }}
              >
                ≈ {it.pct}%
              </span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full bg-gray-100 dark:bg-gray-800">
              <div
                className="h-full rounded-full"
                style={{
                  width: `${Math.round((it.pct / max) * 1000) / 10}%`,
                  backgroundColor: color,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
      {note && (
        <div className="border-t border-dashed border-gray-200 px-4 py-3 text-[11px] leading-5 text-gray-500 dark:border-gray-800 dark:text-gray-400">
          {note}
        </div>
      )}
    </div>
  )
}
