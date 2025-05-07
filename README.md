## hello don't read me actually...

- [x] fix low res svgs on mobile
- [x] fix weird formatting on mobile
- [x] replace text navigation with icons
- [ ] update this readme with guide lol
- [x] transfer caffeine.garden domain to this account
- [ ] speech bubble with instructions for desktop
- [ ] speech bubble with instructions for mobile
- [ ] ability to switch characters on mobile
- [ ] pop-up modals for "about" and "shop" instead of changing text
- [x] glitchy / low-res css filters on icons

stretch for now...

- [ ] display ERROR on mobile landscape mode lol cuz it barely works
- [ ] speech bubbles for creature bios (gardener profiles)
- [ ] SCRAPER NO SCRAPING – FIGURE OUT HOW TO AVOID BIG CORP LLM SCALPELS

## foraging... some references & interesting things

- [windows95 icon pack](https://archive.org/details/windows-95-all-icons)
- [responsive clamping in css](https://css-tricks.com/responsive-layouts-fewer-media-queries/#aa-control-when-the-items-wrap)
- apparently [includes are a thing in html](https://www.cuit.columbia.edu/content/server-side-includes) ?
- and [viewports](https://css-tricks.com/the-notch-and-css/) [are](https://developer.mozilla.org/en-US/docs/Web/CSS/length#relative_length_units_based_on_viewport) [ambiguous](https://www.w3.org/TR/css-values-4/#large-viewport-size) :/

  - ["the ideal viewport doesn't exist"](https://viewports.fyi/")
  - old, but [incredibly thorough mobile screen testing](https://tripleodeon.com/2011/12/first-understand-your-screen/):

    > But when the viewport has not been constrained, and an HTML5 doctype (or none at all) is used, innerWidth will suddenly start to represent values much larger than the physical screen: and represent the width of the viewport canvas upon which the page has been rendered.

    > On a portrait iPhone, for example, the default viewport is 980 pixels. On a landscape iPhone it is, well, according to window.innerWidth, 981 (yes, really).
