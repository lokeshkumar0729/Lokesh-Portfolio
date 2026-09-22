# Lokesh Kumar — Portfolio (React)

A React + Vite version of the portfolio, built from your resume. Same design,
now split into components so it's easy to keep updating.

## Run it locally

```bash
npm install
npm run dev
```

Then open the URL it prints (usually `http://localhost:5173`).

To build a deployable version:

```bash
npm run build
```

This outputs a `dist/` folder you can deploy to Vercel, Netlify, GitHub Pages,
or any static host.

## Where to edit things

**Almost everything you'll want to change lives in one file:**

```
src/data/site-data.js
```

That includes:

- Your name, role, email, phone, location
- Your resume file path (see below)
- GitHub / LinkedIn / LeetCode links
- The featured project (Flash Sale) — description, bullet points, stack, live
  demo and source links
- The other three projects — description, stack, links
- Skills, grouped
- Experience and education entries
- Certifications
- About section text and quick facts

You very rarely need to touch the component files (`src/components/`) unless
you want to change the *layout*, not the *content*.

## Updating your resume

1. Replace `public/Lokesh_Kumar_Resume.pdf` with your new PDF. Keep the same
   file name, or update `resumeFile` in `src/data/site-data.js` to match.
2. That's it — the Resume button in the nav, the hero, and the contact
   section all read from that one `resumeFile` value.

## How the email button works

A plain `mailto:` link only opens something if the visitor's device has a
default mail app configured. If it doesn't, nothing visibly happens, which is
confusing.

To fix that, `src/hooks/useMailLink.js` does three things when "Send an
email" is clicked:

1. Copies your email address to the clipboard immediately.
2. Still attempts to open the visitor's mail app via `mailto:`.
3. If the page never loses focus (meaning no mail app took over), it shows a
   toast confirming the address was copied, so the visitor can paste it
   wherever they prefer to write to you.

To change the email address, edit `email` in `src/data/site-data.js` — every
button and link that uses it will update automatically.

## Project structure

```
public/
  Lokesh_Kumar_Resume.pdf   ← your resume PDF, linked from the Resume buttons
src/
  assets/
    portrait.jpg             ← About section photo
    flash-sale.jpg           ← Featured project image
  data/
    site-data.js              ← ALL editable content lives here
  hooks/
    useTheme.js                ← light/dark theme, persisted in localStorage
    useToast.js                 ← small toast notification helper
    useMailLink.js               ← the "Send an email" behavior described above
  components/
    Nav.jsx
    Hero.jsx
    ApiConsole.jsx              ← the interactive JWT/role demo in the hero
    Projects.jsx
    ProjectThumbs.jsx            ← small decorative SVGs for the project list
    Skills.jsx
    Experience.jsx
    About.jsx
    Contact.jsx
    Toast.jsx
    Footer.jsx
  App.jsx
  main.jsx
  index.css                     ← all styling (design tokens at the top)
index.html
package.json
vite.config.js
```

## Theme

Colors and fonts are defined as CSS variables at the top of `src/index.css`
under `:root` (light) and `:root[data-theme="dark"]` (dark). Change the
`--accent` variable to swap the lime accent color for something else.

## Notes

- The Flash Sale and project thumbnail images are illustrations, not
  screenshots of the live app. Swap `src/assets/flash-sale.jpg` for a real
  screenshot whenever you'd like.
- The API console in the hero is illustrative — it's a fixed demo showing
  how role-based access would respond, not a live call to your API.
