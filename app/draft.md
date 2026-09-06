# Website draft

## Header

About Me | Projects | Idea Box | Contact

## Title

Felipe Arroyo
Backend Developer | Full Stack Developer | Systems Engineer

## Setting

The page consists of a single page, with a retro pixel art style with pastel-like coloring. Interaction with the page occurs through clicking on elements, which are animated. The page is responsive and should work on mobile devices, adjusting element sizes and layouts as needed.

### Interactive Elements

|-----------------------|
| FLAG         SUN    SM|
|                       |
|        Title          |
|                       |
|                       |
| ME    CHEST   HOUSE   |
|-----------------------|

- Sun / Moon (Dark Mode toggle): Clicking the sun turns the page into night, and makes the moon appear. The opposite happens when clicking the moon. The sun and moon are animated, and the background changes color to reflect the time of day.

- Flag (Language toggle): Clicking the flag changes the language of the page. The flag is animated, and the text on the page changes to reflect the selected language.

- "SM" or Social Media icons (Contact): Clicking the icons opens a new tab to the corresponding social media page.

- Me (About Me): Clicking my animated avatar opens a dialog bubble with information about me, my background, and experience with IT.

- Chest (Projects): Clicking the chest opens a subwindow displaying capsules for each project. Each capsule displays the project logo and badges for each tech stack element utilized, as well as a read more button that opens a subpage for the project with more detail.

- House (Idea Box): Clicking the house opens a subwindow displaying a list of project ideas (logos showcasing titles) that I've intended for the future. This would be done with a simple animation of my avatar sleeping on a bed, while dreaming the logos.

## Design decisions

Hovering over an interactive element should either trigger an animation or make it slightly larger, to indicate that it is interactive. Each element should also display a text above to show what it does. The page should be responsive, and the layout should adjust to different screen sizes. The page should also be accessible, with appropriate alt text for images and ARIA labels for interactive elements.

Subpages for projects would have a more traditional layout, according to the ProjectItem interface detailed in project_registry.ts.

## Resources

(Verify when finished which ones were actually used, as well as names of the authors)

Social Media Icons: <https://joi3.itch.io/pixel-art-social-media-icon>
Justin's 16x16 Icons: <https://zeromatrix.itch.io/rpgiab-icons>
Complete UI Essential Pack: <https://crusenho.itch.io/complete-ui-essential-pack>
