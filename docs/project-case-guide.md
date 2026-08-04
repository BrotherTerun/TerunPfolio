# Project case architecture — snap screens

## Final case structure

Every case is planned as four proof-oriented screens:

```text
00  Overview + visual materials
01  Context + personal role
02  Design + implementation
03  Result + endcap
```

There is no separate iteration diary and no separate materials screen.

## Desktop behaviour

For screens wider than `960px` and taller than `760px`:

- one wheel movement opens the next or previous screen;
- transition duration is `1200ms`;
- `ArrowUp`, `ArrowDown`, `PageUp`, `PageDown`, `Home`, and `End`
  navigate the case;
- fixed up/down controls are shown;
- the side navigation highlights the active screen.

For narrow or short screens, the case becomes a normal scrolling page.

## Project media on the overview screen

The first three items from `project_media` are rendered on the opening
screen. The first item becomes the large visual, and the next two become
supporting tiles.

Image:

```yaml
project_media:
  - type: "image"
    src: "/assets/images/projects/project-legend/editor.png"
    alt: "Visual graph editor"
    label: "Editor tooling"
    caption: "Graph editor for dialogue content"
```

Video:

```yaml
  - type: "video"
    src: "/assets/video/project-legend/demo.mp4"
    poster: "/assets/images/projects/project-legend/demo-poster.jpg"
    label: "Prototype"
    caption: "Short gameplay demonstration"
```

Temporary placeholder:

```yaml
  - placeholder: true
    label: "Interface or editor screenshot"
```

## Content screens

Each screen must use:

```html
<section
  class="pc-screen pc-case-screen"
  id="context-role"
  data-case-screen
>
  <div class="pc-screen__inner gd-container">
    ...
  </div>
</section>
```

The section ID must match `case_nav`.

## Shared final block

The Result screen ends with:

```liquid
{% include project-case-endcap.html %}
```

It renders:

- contact CTA;
- previous/next case navigation;
- copyright;
- return to all projects.


## Layout repair notes

The case sidebar intentionally reuses:

```text
gd-side-nav
gd-side-nav__panel
gd-side-nav__marker
```

from the main portfolio stylesheet.

The desktop evidence grid uses three `16:9` media windows:

```text
large main frame | supporting frame
                 | supporting frame
```

The desktop screen-scroll target must remain:

```js
target.offsetTop
```

because `.pc-main` already reserves `--gd-header-height`.


## Gallery media

```yaml
project_gallery:
  - src: "/assets/images/projects/project-legend/case01_media02.png"
    filename: "case01_media02.png"
    alt: "Accessible description"
    label: "MEDIA 02"
    caption: "Short visible caption"
```

`filename` is used by the placeholder when the image does not yet
exist. The number of slides and navigation dots is generated
automatically.

## Project video

```yaml
project_video:
  src: "/assets/video/projects/project-legend/case01_video01.mp4"
  filename: "case01_video01.mp4"
  mime: "video/mp4"
  poster: "/assets/images/projects/project-legend.jpg"
```

The case layout uses a native HTML5 `<video>` element with custom
controls. No Jekyll plugin or external player is required.
