# VibePass — Landing Page

Bootstrap 5 + nested SCSS + Font Awesome + Slick Carousel + video hero.

## 1. Project structure

```
vibepass/
├── index.html
├── package.json
├── css/                 → compiled output (generated, don't hand-edit)
│   └── main.css
├── scss/
│   ├── main.scss              # entry point — imports everything below in order
│   ├── abstracts/
│   │   ├── _variables.scss    # colors, fonts, spacing, Bootstrap overrides
│   │   └── _mixins.scss
│   ├── base/
│   │   ├── _reset.scss
│   │   └── _typography.scss
│   ├── layout/
│   │   ├── _header.scss
│   │   └── _footer.scss
│   ├── components/
│   │   ├── _buttons.scss
│   │   ├── _cards.scss        # event cards, feature cards, testimonial cards
│   │   ├── _forms.scss        # hero search bar, newsletter inputs, FAQ accordion
│   │   └── _slick-overrides.scss
│   └── sections/
│       ├── _hero.scss
│       ├── _categories.scss
│       ├── _trending.scss
│       ├── _why-choose.scss
│       ├── _testimonials.scss
│       ├── _faq.scss
│       └── _newsletter.scss
├── js/
│   └── main.js           # Slick init + small UI behaviors
├── images/                → put downloaded images here (see manifest below)
└── videos/                 → put the hero background video here
```

Every section of the page has its **own SCSS partial**, and `main.scss` is the
only file that gets compiled directly — it `@use`s everything else in a fixed
order (abstracts → Bootstrap → base → layout → components → sections).

## 2. Install & compile SCSS

You need Node.js installed. From the `vibepass/` folder:

```bash
npm install
npm run sass:watch     # compiles + watches scss/main.scss → css/main.css
```

For a production build:

```bash
npm run sass:build     # minified, no source map
```

`main.scss` pulls Bootstrap's source directly from `node_modules/bootstrap/scss/bootstrap`,
so **all** Bootstrap variables can be overridden in `scss/abstracts/_variables.scss`
before Bootstrap compiles (colors, radius, grid, etc.) instead of fighting it with
overrides afterwards.

Font Awesome, Slick's CSS/JS, jQuery and Bootstrap's JS bundle are loaded via CDN
`<link>`/`<script>` tags in `index.html` — no npm install needed for those.

## 3. Open the page

Just open `index.html` in a browser (or serve the folder with any static server,
e.g. `npx serve .`) once `css/main.css` exists.

## 4. Images to download

The HTML references local files under `images/`. Download the source photo from
each Unsplash page below (top-right "Download free" button on the page), and
save it with the filename listed so the `<img>` tags resolve automatically.
All are free-to-use under the Unsplash License.

| Save as                       | Used for                          | Source page to download from |
|--------------------------------|------------------------------------|-------------------------------|
| `images/hero-poster.jpg`      | Hero fallback image (shown before video loads) | https://unsplash.com/photos/crowd-with-hands-raised-at-a-concert-with-stage-lights-b7gi_rqKxcQ |
| `images/event-concert.jpg`    | "Neon Nights Tour" card + reused for last card | https://unsplash.com/photos/crowd-watching-a-vibrant-concert-stage-with-bright-lights-bo8XlhXNrE8 |
| `images/event-sports.jpg`     | "City Rivals Derby" card           | https://unsplash.com/photos/vibrant-blurred-crowd-and-bright-arena-lights-DtjUdpHuc-I |
| `images/event-workshop.jpg`   | "Digital Art Masterclass" card     | https://unsplash.com/photos/team-collaborating-around-a-computer-in-an-office-UikYLDQj9_I |
| `images/event-festival.jpg`   | "SunWave Festival 2024" card       | https://unsplash.com/photos/crowd-gathered-at-an-outdoor-music-festival-D62FR9Fbdy8 |

Testimonial avatars already use hotlinked placeholder photos from
`https://i.pravatar.cc/150?img=N` — no download needed, but swap them for real
photos any time by changing the `img` src.

## 5. Hero background video

Download any short, loopable crowd/concert clip (MP4, ideally < 8–10MB,
1920×1080 or smaller) and save it as `videos/hero-bg.mp4`. Good free options:

- https://www.pexels.com/video/crowd-of-people-at-a-concert-12695733/
- https://www.pexels.com/video/vibrant-concert-crowd-with-cellphone-lights-35340079/
- https://www.pexels.com/video/concert-crowd-26744705/

The `<video>` tag already has `autoplay muted loop playsinline` and a
`poster="images/hero-poster.jpg"` fallback, and `js/main.js` pauses the video
automatically for users with `prefers-reduced-motion` enabled.

## 6. Customizing the theme

Everything visual (brand color, gradient, fonts, radius, spacing) lives in
`scss/abstracts/_variables.scss`. Change a value there and every component/
section picks it up on next compile — nothing else needs to be touched.
