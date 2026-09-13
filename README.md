# Pixel Style Portfolio

A retro videogame styled personal portfolio built with **Next.js**, **TypeScript**, and **Tailwind CSS**, deployed using **Vercel**.
The site has been designed as an interactive single-page application that contrasts conventional, minimalist developer portfolios by showcasing the content into a vivid, retro videogame world. Users interact with animated sprites to trigger dialogue boxes, chests containing project descriptions, and dynamic environmental transitions.

**[Live Demo](https://feliarroyo.vercel.app/)**

## Screenshots

| Day Mode | Night Mode |
| :---: | :---: |
| ![Day Theme Preview](/public/images/readme/preview-day.png) | ![Night Theme Preview](/public/images/readme/preview-night.png) |

| Projects Drawer | Project Detail Overlay |
| :---: | :---: |
| ![Projects Drawer Preview](/public/images/readme/preview-projects.png) | ![Detail Overlay Preview](/public/images/readme/preview-detail.png) |

## Features

- **Retro Pixel Art Style:** With a mix of free assets and some custom-made ones, the site boasts a colorful design resembling a platforming game, with a focus on readability, originality and creativity.
- **Dark Mode Toggle:** Implemented using [next-themes](https://github.com/pacocoursey/next-themes). Click on the Sun/Moon sprite to change the theme. The background sprites have been edited to reflect the time of the day, and the toggles are animated to go with it, making the change feel organic.
- **Language Toggle:** Implemented via context toggling. Click on the Earth icon to change the language of the page: Spanish and English are currently supported.
- **Project Subpages:** Subpages for each project have been implemented, detailing the project description, tech stack used, and links to the project repository or live demo. These appear as overlays, to provide a fluid user experience.
- **Relevant Links:** Social Media and CV links have been added using pixel art icons, keeping with the theme of the site. These links open on a new tab, not affecting the page state.

## Planned Features

- [ ] **Expanded Project Media:** Add screenshots and videos whenever possible to each project subpage, to showcase the work done and the final result.
- [ ] **Mobile Text Indicators:** Repurpose tooltips so that mobile users can see the text for each interactive element, since hover is not available on mobile devices.
- [ ] **Toggleable SFX:** Sound Effects would add to the site feel, but they should be toggleable and disabled by default to not annoy users.

## How to run

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Alternatively, the project is currently deployed using Vercel on [this link](https://feliarroyo.vercel.app/).

## Asset Credits

This portfolio uses the following assets, which are credited to their respective authors:

- Mail, Phone, GitHub and LinkedIn button sprites: [Pixel Art Social Media Icon](https://joi3.itch.io/pixel-art-social-media-icon) by [JOI3](https://joi3.itch.io/)
- CV, Earth, Sun and Moon sprites: [320 Pixel Emojis](https://joi3.itch.io/joi3s-free-pixel-art-emoji-icon) by [JOI3](https://joi3.itch.io/)
- Background sprites: [Free Sky Backgrounds](https://free-game-assets.itch.io/free-sky-with-clouds-background-pixel-art-set) by [CraftPix.net](https://craftpix.net/)
- (Not yet used): [Justin's 16x16 Icons](https://zeromatrix.itch.io/rpgiab-icons)
- (Not yet used): [Complete UI Essential Pack](https://crusenho.itch.io/complete-ui-essential-pack)
