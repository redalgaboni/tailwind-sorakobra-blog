import type { Metadata } from 'next'
import Link from 'next/link'
import siteMetadata from '@/data/siteMetadata'
import Tag from '@/components/Tag'
import InfographicDiphtheria from '@/components/InfographicDiphtheria'

const path = 'انفوغرافيك/لقاح-الدفتيريا-في-المغرب'
const url = `${siteMetadata.siteUrl}/${path}`
const articlePath =
  'blog/المغرب/من-يصنع-ويربح-من-لقاح-الدفتيريا-الخناق-في-المغرب-سبتمبر-2026'

const title = 'مَن يُصنّع لقاح الدفتيريا ويوزّعه في المغرب؟ — انفوغرافيك'
const description =
  'انفوغرافيك تفاعلي: الترخيص التسويقي لسانوفي، التوزيع من طرف ماربيو ببنسليمان، مساهمو ماربيو بين صندوق محمد السادس والبنوك، وبنية ملكية سانوفي.'
const tags = ['المغرب', 'لقاحات', 'داء الخناق', 'Sanofi', 'MarBio', 'صندوق محمد السادس']

export const metadata: Metadata = {
  title,
  description,
  alternates: {
    canonical: url,
  },
  openGraph: {
    title,
    description,
    url,
    siteName: siteMetadata.title,
    locale: siteMetadata.locale,
    type: 'article',
    images: [{ url: `${siteMetadata.siteUrl}/hexaxim/لقاح-الدفتيريا-في-المغرب.png` }],
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    images: ['/hexaxim/لقاح-الدفتيريا-في-المغرب.png'],
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: siteMetadata.title, item: siteMetadata.siteUrl },
    { '@type': 'ListItem', position: 2, name: 'المقالات', item: `${siteMetadata.siteUrl}/blog` },
    { '@type': 'ListItem', position: 3, name: title, item: url },
  ],
}

const webPageJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  name: title,
  description,
  url,
  inLanguage: siteMetadata.language,
  image: `${siteMetadata.siteUrl}/hexaxim/لقاح-الدفتيريا-في-المغرب.png`,
  isPartOf: { '@type': 'WebSite', name: siteMetadata.title, url: siteMetadata.siteUrl },
}

export default function InfographicPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageJsonLd) }} />

      <div className="space-y-4 pb-8">
        <nav aria-label="مسار التصفح" className="text-sm text-gray-500 dark:text-gray-400">
          <Link href="/" className="hover:text-primary-500">
            الرئيسية
          </Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-primary-500">
            المقالات
          </Link>
          <span className="mx-2">/</span>
          <span>انفوغرافيك لقاح الدفتيريا</span>
        </nav>

        <p className="text-sm text-gray-600 dark:text-gray-300">
          مصورة توضيحية تفاعلية تكمّل المقال —{' '}
          <Link
            href={`/${articlePath}`}
            className="font-medium text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          >
            اقرأ المقال الكامل ↗
          </Link>
        </p>

        <InfographicDiphtheria />

        <div className="flex flex-wrap items-center gap-x-1 gap-y-2 pt-2 text-sm font-medium text-gray-500 dark:text-gray-400">
          <span className="ml-2">الوسوم:</span>
          {tags.map((t) => (
            <Tag key={t} text={t} />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 pt-2">
          <Link
            href={`/${articlePath}`}
            className="rounded-lg bg-primary-500 px-5 py-2.5 text-center text-sm font-semibold text-white hover:bg-primary-600"
          >
            اقرأ المقال الكامل ↗
          </Link>
          <a
            href="/hexaxim/لقاح-الدفتيريا-في-المغرب.png"
            target="_blank"
            rel="noopener"
            className="rounded-lg border border-primary-500 px-5 py-2.5 text-center text-sm font-semibold text-primary-500 hover:bg-primary-500 hover:text-white"
          >
            تحميل المصورة (PNG)
          </a>
        </div>
      </div>
    </>
  )
}
