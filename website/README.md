# Next.js & NextUI Template

This is a template for creating applications using Next.js 14 (pages directory) and NextUI (v2).

[Try it on CodeSandbox](https://githubbox.com/nextui-org/next-pages-template)

>Note: Since Next.js 14, the pages router is recommend migrating to the [new App Router](https://nextjs.org/docs/app) to leverage React's latest features
>
>Read more: [Pages Router](https://nextjs.org/docs/pages)

## Technologies Used

- [Next.js 14](https://nextjs.org/docs/getting-started)
- [NextUI](https://nextui.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)
- [next-themes](https://github.com/pacocoursey/next-themes)

## How to Use

To create a new project based on this template using `create-next-app`, run the following command:

```bash
npx create-next-app -e https://github.com/nextui-org/next-pages-template
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@nextui-org/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## License

Licensed under the [MIT license](https://github.com/nextui-org/next-pages-template/blob/main/LICENSE).

```
website
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .npmrc
├─ .vscode
│  └─ settings.json
├─ actions
│  └─ postAction.js
├─ assets
│  ├─ avatars
│  │  ├─ avatar.png
│  │  └─ avatar1.png
│  ├─ banners
│  │  ├─ banner1.jpg
│  │  ├─ banner10.png
│  │  ├─ banner11.jpg
│  │  ├─ banner12.png
│  │  ├─ banner2.png
│  │  ├─ banner3.jpg
│  │  ├─ banner4.jpg
│  │  ├─ banner5.jpg
│  │  ├─ banner6.jpg
│  │  ├─ banner7.jpg
│  │  ├─ banner8.jpg
│  │  ├─ banner9.jpg
│  │  ├─ bannerHero.jpg
│  │  └─ chuyenmuc.png
│  ├─ flagUSA.png
│  ├─ flagVN.png
│  ├─ groups
│  │  ├─ bacho.jpg
│  │  ├─ covid.jpg
│  │  ├─ daihoicaccap.png
│  │  ├─ daihoixii.png
│  │  ├─ group1.jpg
│  │  ├─ group2.jpg
│  │  ├─ group3.jpg
│  │  └─ luat.jpg
│  ├─ handle_cert.png
│  ├─ logo.png
│  ├─ medal.png
│  └─ on_top.png
├─ components
│  ├─ dashboard
│  │  ├─ accessions
│  │  │  └─ index.tsx
│  │  ├─ accounts
│  │  │  ├─ addUser.tsx
│  │  │  └─ index.tsx
│  │  ├─ index.tsx
│  │  ├─ navbar
│  │  │  ├─ navbar.tsx
│  │  │  └─ notification
│  │  │     ├─ index.tsx
│  │  │     └─ notificationWrapper.tsx
│  │  ├─ news
│  │  │  └─ index.tsx
│  │  ├─ settings
│  │  │  └─ index.tsx
│  │  ├─ sidebar
│  │  │  ├─ sidebar.tsx
│  │  │  └─ tooltip.jsx
│  │  ├─ table
│  │  │  ├─ data.ts
│  │  │  ├─ renderCell.tsx
│  │  │  └─ table.tsx
│  │  └─ userDropDown
│  │     ├─ darkModeSwitch.tsx
│  │     └─ index.tsx
│  ├─ home
│  │  ├─ banner.tsx
│  │  ├─ groupBanners.tsx
│  │  ├─ hero.tsx
│  │  ├─ iconSlide.tsx
│  │  ├─ navbarr.tsx
│  │  ├─ scrowView.tsx
│  │  ├─ slideShow.tsx
│  │  ├─ swapBanner.tsx
│  │  └─ topics.tsx
│  ├─ icons
│  │  ├─ eyeFilledIcon.tsx
│  │  ├─ eyeSlashFilledIcon.tsx
│  │  ├─ searchIcon.tsx
│  │  ├─ sidebar
│  │  │  ├─ accounts-icon.tsx
│  │  │  ├─ filter-icon.tsx
│  │  │  ├─ home-icon.tsx
│  │  │  ├─ news-icon.tsx
│  │  │  ├─ report-icon.tsx
│  │  │  └─ setting-icon.tsx
│  │  └─ table
│  │     ├─ deleteIcon.tsx
│  │     ├─ editIcon.tsx
│  │     └─ eyeIcon.tsx
│  └─ protectedRoute.tsx
├─ config
│  ├─ fonts.ts
│  └─ site.ts
├─ constant
│  ├─ index.js
│  ├─ message.js
│  └─ status.js
├─ context
│  └─ sidebarContext.tsx
├─ layouts
│  ├─ dashboard
│  │  └─ default.tsx
│  ├─ default.tsx
│  ├─ footer.jsx
│  ├─ footer.tsx
│  └─ header.tsx
├─ lib
│  ├─ mongo
│  │  └─ mongodb.js
│  └─ utils
│     ├─ auth.ts
│     └─ storage.ts
├─ LICENSE
├─ middlewares
│  ├─ authenticateToken.ts
│  ├─ checkToken.ts
│  └─ index.ts
├─ models
│  ├─ icons.js
│  ├─ images.js
│  ├─ news.js
│  ├─ roles.js
│  ├─ tokens.js
│  ├─ topics.js
│  └─ users.js
├─ package.json
├─ pages
│  ├─ api
│  │  ├─ icons
│  │  │  └─ route.ts
│  │  ├─ images
│  │  │  └─ route.ts
│  │  ├─ news
│  │  │  ├─ route.ts
│  │  │  └─ [id].ts
│  │  ├─ register
│  │  │  └─ route.ts
│  │  ├─ roles
│  │  │  ├─ route.ts
│  │  │  └─ [id].ts
│  │  ├─ tokens
│  │  │  └─ route.ts
│  │  ├─ topics
│  │  │  ├─ route.ts
│  │  │  └─ [id].ts
│  │  └─ users
│  │     ├─ admin.ts
│  │     ├─ route.ts
│  │     └─ verifyRoute.ts
│  ├─ gioiThieu
│  │  ├─ CDTPHCM
│  │  │  ├─ bch-cac-thoi-ky
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ tabs.tsx
│  │  │  ├─ co-cau-to-chuc
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ tabs.tsx
│  │  │  └─ van-kien-dai-hoi
│  │  │     ├─ index.tsx
│  │  │     └─ tabs.tsx
│  │  └─ CDVN
│  │     ├─ dieulecongdoan
│  │     │  ├─ index.tsx
│  │     │  └─ tabs.tsx
│  │     └─ huongdandieule
│  │        ├─ index.tsx
│  │        └─ tabs.tsx
│  ├─ home
│  │  └─ index.tsx
│  ├─ index.tsx
│  ├─ login
│  │  └─ index.tsx
│  ├─ portals
│  │  └─ dashboard
│  │     ├─ accessions
│  │     │  └─ index.tsx
│  │     ├─ accounts
│  │     │  └─ index.tsx
│  │     ├─ index.tsx
│  │     ├─ news
│  │     │  └─ index.tsx
│  │     └─ settings
│  │        └─ index.tsx
│  ├─ register
│  │  └─ index.tsx
│  ├─ _app.tsx
│  └─ _document.tsx
├─ postcss.config.js
├─ public
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ icon1.gif
│  │  │  ├─ icon10.gif
│  │  │  ├─ icon11.gif
│  │  │  ├─ icon2.gif
│  │  │  ├─ icon3.gif
│  │  │  ├─ icon4.gif
│  │  │  ├─ icon5.gif
│  │  │  ├─ icon6.gif
│  │  │  ├─ icon7.gif
│  │  │  ├─ icon8.gif
│  │  │  └─ icon9.gif
│  │  └─ topics
│  │     ├─ topicImage1.png
│  │     ├─ topicImage10.jpg
│  │     ├─ topicImage2.jpg
│  │     ├─ topicImage3.jpg
│  │     ├─ topicImage4.jpg
│  │     ├─ topicImage5.jpg
│  │     ├─ topicImage6.png
│  │     ├─ topicImage7.jpg
│  │     ├─ topicImage8.jpg
│  │     └─ topicImage9.jpg
│  └─ favicon.ico
├─ README.md
├─ store
│  ├─ action
│  │  ├─ authorizeAction.tsx
│  │  └─ selfAction.tsx
│  └─ index.tsx
├─ styles
│  ├─ App.module.css
│  └─ globals.css
├─ tailwind.config.js
├─ tsconfig.json
└─ types
   └─ index.ts

```
```
website
├─ .eslintignore
├─ .eslintrc.json
├─ .gitignore
├─ .npmrc
├─ .vscode
│  └─ settings.json
├─ actions
│  └─ postAction.js
├─ assets
│  ├─ avatars
│  │  ├─ avatar.png
│  │  └─ avatar1.png
│  ├─ banners
│  │  ├─ banner1.jpg
│  │  ├─ banner10.png
│  │  ├─ banner11.jpg
│  │  ├─ banner12.png
│  │  ├─ banner2.png
│  │  ├─ banner3.jpg
│  │  ├─ banner4.jpg
│  │  ├─ banner5.jpg
│  │  ├─ banner6.jpg
│  │  ├─ banner7.jpg
│  │  ├─ banner8.jpg
│  │  ├─ banner9.jpg
│  │  ├─ bannerHero.jpg
│  │  └─ chuyenmuc.png
│  ├─ flagUSA.png
│  ├─ flagVN.png
│  ├─ groups
│  │  ├─ bacho.jpg
│  │  ├─ covid.jpg
│  │  ├─ daihoicaccap.png
│  │  ├─ daihoixii.png
│  │  ├─ group1.jpg
│  │  ├─ group2.jpg
│  │  ├─ group3.jpg
│  │  └─ luat.jpg
│  ├─ handle_cert.png
│  ├─ logo.png
│  ├─ medal.png
│  └─ on_top.png
├─ components
│  ├─ dashboard
│  │  ├─ accessions
│  │  │  └─ index.tsx
│  │  ├─ accounts
│  │  │  ├─ addUser.tsx
│  │  │  └─ index.tsx
│  │  ├─ index.tsx
│  │  ├─ navbar
│  │  │  ├─ navbar.tsx
│  │  │  └─ notification
│  │  │     ├─ index.tsx
│  │  │     └─ notificationWrapper.tsx
│  │  ├─ news
│  │  │  └─ index.tsx
│  │  ├─ settings
│  │  │  └─ index.tsx
│  │  ├─ sidebar
│  │  │  ├─ sidebar.tsx
│  │  │  └─ tooltip.jsx
│  │  ├─ table
│  │  │  ├─ data.ts
│  │  │  ├─ renderCell.tsx
│  │  │  └─ table.tsx
│  │  └─ userDropDown
│  │     ├─ darkModeSwitch.tsx
│  │     └─ index.tsx
│  ├─ home
│  │  ├─ banner.tsx
│  │  ├─ groupBanners.tsx
│  │  ├─ hero.tsx
│  │  ├─ iconSlide.tsx
│  │  ├─ navbarr.tsx
│  │  ├─ scrowView.tsx
│  │  ├─ slideShow.tsx
│  │  ├─ swapBanner.tsx
│  │  └─ topics.tsx
│  ├─ icons
│  │  ├─ eyeFilledIcon.tsx
│  │  ├─ eyeSlashFilledIcon.tsx
│  │  ├─ searchIcon.tsx
│  │  ├─ sidebar
│  │  │  ├─ accounts-icon.tsx
│  │  │  ├─ filter-icon.tsx
│  │  │  ├─ home-icon.tsx
│  │  │  ├─ news-icon.tsx
│  │  │  ├─ report-icon.tsx
│  │  │  └─ setting-icon.tsx
│  │  └─ table
│  │     ├─ deleteIcon.tsx
│  │     ├─ editIcon.tsx
│  │     └─ eyeIcon.tsx
│  └─ protectedRoute.tsx
├─ config
│  ├─ fonts.ts
│  └─ site.ts
├─ constant
│  ├─ index.js
│  ├─ message.js
│  └─ status.js
├─ context
│  └─ sidebarContext.tsx
├─ layouts
│  ├─ dashboard
│  │  └─ default.tsx
│  ├─ default.tsx
│  ├─ footer.tsx
│  └─ header.tsx
├─ lib
│  ├─ mongo
│  │  └─ mongodb.js
│  └─ utils
│     ├─ auth.ts
│     └─ storage.ts
├─ LICENSE
├─ middlewares
│  ├─ authenticateToken.ts
│  ├─ checkToken.ts
│  └─ index.ts
├─ models
│  ├─ icons.js
│  ├─ images.js
│  ├─ news.js
│  ├─ roles.js
│  ├─ tokens.js
│  ├─ topics.js
│  └─ users.js
├─ package.json
├─ pages
│  ├─ api
│  │  ├─ icons
│  │  │  └─ route.ts
│  │  ├─ images
│  │  │  └─ route.ts
│  │  ├─ news
│  │  │  ├─ route.ts
│  │  │  └─ [id].ts
│  │  ├─ register
│  │  │  └─ route.ts
│  │  ├─ roles
│  │  │  ├─ route.ts
│  │  │  └─ [id].ts
│  │  ├─ tokens
│  │  │  ├─ admin.ts
│  │  │  └─ route.ts
│  │  ├─ topics
│  │  │  ├─ route.ts
│  │  │  └─ [id].ts
│  │  └─ users
│  │     ├─ admin.ts
│  │     └─ route.ts
│  ├─ gioiThieu
│  │  ├─ CDTPHCM
│  │  │  ├─ bch-cac-thoi-ky
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ tabs.tsx
│  │  │  ├─ co-cau-to-chuc
│  │  │  │  ├─ index.tsx
│  │  │  │  └─ tabs.tsx
│  │  │  └─ van-kien-dai-hoi
│  │  │     ├─ index.tsx
│  │  │     └─ tabs.tsx
│  │  └─ CDVN
│  │     ├─ dieulecongdoan
│  │     │  ├─ index.tsx
│  │     │  └─ tabs.tsx
│  │     └─ huongdandieule
│  │        ├─ index.tsx
│  │        └─ tabs.tsx
│  ├─ home
│  │  └─ index.tsx
│  ├─ index.tsx
│  ├─ login
│  │  └─ index.tsx
│  ├─ portals
│  │  └─ dashboard
│  │     ├─ accessions
│  │     │  └─ index.tsx
│  │     ├─ accounts
│  │     │  └─ index.tsx
│  │     ├─ index.tsx
│  │     ├─ news
│  │     │  └─ index.tsx
│  │     └─ settings
│  │        └─ index.tsx
│  ├─ profile
│  │  ├─ annual-evaluation
│  │  │  └─ index.tsx
│  │  ├─ calendar
│  │  │  └─ index.tsx
│  │  ├─ events
│  │  │  └─ index.tsx
│  │  ├─ file-submission
│  │  │  └─ index.tsx
│  │  ├─ index.tsx
│  │  └─ userNavbar.tsx
│  ├─ register
│  │  └─ index.tsx
│  ├─ _app.tsx
│  └─ _document.tsx
├─ postcss.config.js
├─ public
│  ├─ assets
│  │  ├─ icons
│  │  │  ├─ icon1.gif
│  │  │  ├─ icon10.gif
│  │  │  ├─ icon11.gif
│  │  │  ├─ icon2.gif
│  │  │  ├─ icon3.gif
│  │  │  ├─ icon4.gif
│  │  │  ├─ icon5.gif
│  │  │  ├─ icon6.gif
│  │  │  ├─ icon7.gif
│  │  │  ├─ icon8.gif
│  │  │  └─ icon9.gif
│  │  └─ topics
│  │     ├─ topicImage1.png
│  │     ├─ topicImage10.jpg
│  │     ├─ topicImage2.jpg
│  │     ├─ topicImage3.jpg
│  │     ├─ topicImage4.jpg
│  │     ├─ topicImage5.jpg
│  │     ├─ topicImage6.png
│  │     ├─ topicImage7.jpg
│  │     ├─ topicImage8.jpg
│  │     └─ topicImage9.jpg
│  └─ favicon.ico
├─ README.md
├─ store
│  ├─ action
│  │  ├─ authorizeAction.tsx
│  │  └─ selfAction.tsx
│  └─ index.tsx
├─ styles
│  ├─ App.module.css
│  └─ globals.css
├─ tailwind.config.js
├─ tsconfig.json
└─ types
   └─ index.ts

```