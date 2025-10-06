.
├── Docker
│   ├── OLD_Dockerfile
│   ├── prod.Dockerfile
│   └── staging.Dockerfile
├── Docker-compose
│   ├── node_modules
│   ├── prod-docker-compose.yml
│   └── staging-docker-compose.yml
├── LICENSE
├── README.md
├── app
│   ├── Main.tsx
│   ├── about
│   │   └── page.tsx
│   ├── api
│   │   └── newsletter
│   │       └── route.ts
│   ├── blog
│   │   ├── [...slug]
│   │   │   └── page.tsx
│   │   ├── page
│   │   │   └── [page]
│   │   │       └── page.tsx
│   │   └── page.tsx
│   ├── layout.tsx
│   ├── not-found.tsx
│   ├── page.tsx
│   ├── projects
│   │   └── page.tsx
│   ├── robots.ts
│   ├── seo.tsx
│   ├── sitemap.ts
│   ├── tag-data.json
│   ├── tags
│   │   ├── [tag]
│   │   │   └── page.tsx
│   │   └── page.tsx
│   └── theme-providers.tsx
├── components
│   ├── Card.tsx
│   ├── Comments.tsx
│   ├── Footer.tsx
│   ├── Header.tsx
│   ├── Image.tsx
│   ├── LayoutWrapper.tsx
│   ├── Link.tsx
│   ├── MDXComponents.tsx
│   ├── MobileNav.tsx
│   ├── PageTitle.tsx
│   ├── ScrollTopAndComment.tsx
│   ├── SearchButton.tsx
│   ├── SectionContainer.tsx
│   ├── TableWrapper.tsx
│   ├── Tag.tsx
│   ├── ThemeSwitch.tsx
│   ├── TwitterComments.tsx
│   └── social-icons
│       ├── icons.tsx
│       └── index.tsx
├── contentlayer.config.ts
├── css
│   ├── prism.css
│   └── tailwind.css
├── data
│   ├── authors
│   │   ├── default.mdx
│   │   └── sparrowhawk.mdx
│   ├── blog
│   │   ├── code-sample.mdx
│   │   ├── release-of-tailwind-nextjs-starter-blog-v2.0.mdx
│   │   └── world
│   │       └── ماذا-يقع-في-العالم-؟-دجنبر-2024.mdx
│   ├── headerNavLinks.ts
│   ├── logo.svg
│   ├── projectsData.ts
│   ├── references-data.bib
│   └── siteMetadata.js
├── eslint.config.mjs
├── faq
│   ├── custom-mdx-component.md
│   ├── customize-kbar-search.md
│   └── deploy-with-docker.md
├── jsconfig.json
├── layouts
│   ├── AuthorLayout.tsx
│   ├── ListLayout.tsx
│   ├── ListLayoutWithTags.tsx
│   ├── PostBanner.tsx
│   ├── PostLayout.tsx
│   └── PostSimple.tsx
├── next-env.d.ts
├── next.config.js
├── node_modules
├── package.json
├── postcss.config.js
├── prettier.config.js
├── public
│   ├── search.json
│   └── static
│       ├── favicons
│       │   ├── android-chrome-96x96.png
│       │   ├── apple-touch-icon.png
│       │   ├── browserconfig.xml
│       │   ├── favicon-16x16.png
│       │   ├── favicon-32x32.png
│       │   ├── favicon.ico
│       │   ├── mstile-150x150.png
│       │   ├── safari-pinned-tab.svg
│       │   └── site.webmanifest
│       └── images
│           ├── EastVsWestBlock.png
│           ├── article_1.jpeg
│           ├── avatar.png
│           ├── canada
│           │   ├── lake.jpg
│           │   ├── maple.jpg
│           │   ├── mountains.jpg
│           │   └── toronto.jpg
│           ├── github-traffic.png
│           ├── google.png
│           ├── logo.png
│           ├── ocean.jpeg
│           ├── sparrowhawk-avatar.jpg
│           ├── time-machine.jpg
│           └── twitter-card.png
├── scripts
│   ├── postbuild.mjs
│   └── rss.mjs
├── tailwind.config.js
├── tsconfig.json
└── yarn.lock