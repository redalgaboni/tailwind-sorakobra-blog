/* eslint-disable @next/next/no-img-element */
import type { ReactNode } from 'react'

interface Branch {
  title: string
  color: string
  body: ReactNode
}

interface Props {
  rootLabel: string
  rootImage?: string
  branches: Branch[]
}

export default function OwnersTree({ rootLabel, rootImage, branches }: Props) {
  return (
    <div className="not-prose my-6 flex flex-col items-center">
      <div className="flex items-center gap-2.5 rounded-full border-2 border-gray-800 bg-white px-5 py-2 shadow-sm dark:border-gray-200 dark:bg-gray-900">
        {rootImage && <img src={rootImage} alt="" className="h-7 w-auto" />}
        <span className="text-sm font-extrabold text-gray-900 dark:text-gray-100">
          {rootLabel}
        </span>
      </div>
      <div className="h-4 w-px bg-gray-300 dark:bg-gray-700" />
      <div className="relative w-full">
        <span className="absolute inset-x-[16.66%] top-0 hidden h-px bg-gray-300 sm:block dark:bg-gray-700" />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          {branches.map((b) => (
            <div key={b.title} className="relative pt-0 sm:pt-4">
              <span className="absolute left-1/2 top-0 hidden h-4 w-px -translate-x-1/2 bg-gray-300 sm:block dark:bg-gray-700" />
              <div className="h-full overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-gray-900">
                <div
                  className="px-3 py-2.5 text-center text-[13px] font-extrabold text-white"
                  style={{ backgroundColor: b.color }}
                >
                  {b.title}
                </div>
                <div className="flex h-full min-h-[110px] flex-col items-center justify-center p-3.5">{b.body}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
