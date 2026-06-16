# Portfolio — React Edition

This is the original static portfolio (`index.html` + `attendtrack-gallery.html` +
`style.css` + `script.js`) rebuilt as a **React + Vite** single-page app. The visual
design is intentionally untouched for now — same fonts, same colors, same layout,
same CSS — so this PR is purely "same site, React architecture." Tailwind comes next.

## Tech stack

- **Vite** — build tool / dev server
- **React 19**
- **React Router v6** — client-side routing between the portfolio and the
  AttendTrack gallery (no more separate `.html` files)

## Getting started

```bash
npm install
npm run dev      # start the dev server
npm run build    # production build -> dist/
npm run preview  # preview the production build
```

## Project structure

```
src/
├── main.jsx                # entry point, wraps the app in <BrowserRouter>
├── App.jsx                 # routes: "/" and "/attendtrack-gallery"
├── index.css               # global styles (ported from style.css 1:1)
│
├── context/
│   └── ThemeContext.jsx    # light/dark theme provider (data-theme attr + localStorage)
│
├── hooks/
│   ├── useTheme.js              # consume ThemeContext
│   ├── useReveal.js             # IntersectionObserver-based scroll-reveal
│   ├── useActiveSection.js      # highlights the nav link for the section in view
│   ├── useScrollToTopVisible.js # shows/hides the "back to top" button
│   └── usePageTransition.js     # page-exit/page-enter fade between routes
│
├── components/
│   ├── Navbar.jsx           # nav bar, mobile menu, theme toggle, active link
│   ├── Footer.jsx
│   ├── ScrollToTopButton.jsx
│   ├── Reveal.jsx            # <Reveal> wrapper that applies the scroll-reveal hook
│   ├── Icons.jsx              # all inline SVG icons as components
│   ├── AttendTrackModal.jsx  # the "case study" modal on the home page
│   └── Lightbox.jsx           # fullscreen image viewer for the gallery page
│
├── sections/                 # the home page, broken into one file per <section>
│   ├── Hero.jsx
│   ├── About.jsx
│   ├── Skills.jsx
│   ├── Projects.jsx
│   ├── Experience.jsx
│   └── Contact.jsx
│
├── pages/
│   ├── Home.jsx               # assembles all sections + modal
│   └── AttendTrackGallery.jsx # the former attendtrack-gallery.html
│
├── data/                     # content as plain data, used by the components above
│   ├── about.js               # chips + info cards
│   ├── skills.js
│   ├── timeline.js
│   └── attendtrack.js         # AttendTrack project + gallery content
│
└── styles/
    └── gallery.css           # styles for the gallery page only, scoped under
                               # `.gallery-page` so its color variables can't
                               # leak into the rest of the site
```

## Notes on the conversion

- **Routing**: `/` is the portfolio, `/attendtrack-gallery` is the gallery page.
  The nav's "AttendTrack" link and the gallery's "Portfolio" link both play the
  original fade/slide page-exit animation before navigating.
- **Theme**: a single `ThemeContext` now drives dark/light mode everywhere
  (previously each HTML page had its own copy of the toggle logic). The gallery
  page originally *defaulted* to dark — it's been flipped to default to light so
  both pages agree on what "no `data-theme` attribute" means, with the dark
  variant applied via `[data-theme="dark"]`.
- **Scroll reveal / active nav / scroll-to-top**: these were vanilla
  `IntersectionObserver` / `scroll` listeners in `script.js`; they're now small
  custom hooks (`useReveal`, `useActiveSection`, `useScrollToTopVisible`).
- **Content as data**: skills, timeline entries, project info, and AttendTrack
  screenshots/features live in `src/data/*.js` so they're easy to tweak without
  touching component markup.
- **Bug fix**: the original `style.css` had a stray `\n` inside a selector
  (`\n .mo-close:hover`) which silently broke that hover rule — fixed during the
  port.

## Next step

Styling is currently the original hand-written CSS (`index.css` +
`styles/gallery.css`), copied over class-for-class. The plan is to replace this
with Tailwind utility classes next, section by section.
