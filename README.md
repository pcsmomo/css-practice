# CSS Practice

[Youtube Online Tutorials](https://www.youtube.com/channel/UCbwXnUipZsLfUckBPsC7Jog)

## Goal

CSS Ninja and get used to practice SCSS syntax

## Setup

VSCode extension - Live Sass Compiler

```js
// .vscode/settings.json
{
  "liveSassCompile.settings.formats": [
    // This is Default.
    {
      "format": "expanded",
      "extensionName": ".css"
      // "savePath": "~/../css"
    }
  ],
  "liveSassCompile.settings.generateMap": false
}
```

And click "Watch sass" on the bottom bar

## details

<details open>
  <summary>Click to Contract/Expend</summary>

### 1115. Remake | CSS 3D Wavy Circle Loader Animation Effects

```css
.loader {
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(60deg);
}
```

```scss
// For loop
@for $i from 1 through 15 {
  span:nth-child(#{$i}) {
    top: ($i - 1) * 10 + px;
    left: ($i - 1) * 10 + px;
    bottom: ($i - 1) * 10 + px;
    right: ($i - 1) * 10 + px;
    animation-delay: ($i - 1) / 10 + s;
  }
}
```

### 1856. CSS Water Drop Logo Effect | Html CSS Dropmorphism

[ionicons - apple logo: open source icons](https://ionic.io/ionicons)

### 1848. Smooth Animated Blob using CSS & SVG | Html CSS Blobs Animation Effects

[blobs.app - blob shape generator](https://blobs.app/?e=6&gw=6&se=122369&c=d1d8e0&o=0)

### 1837. Ambient Light Effects | CSS 3D Glowing Cube Animation Effects

[sass maps](https://sass-lang.com/documentation/values/maps)

### 1794. Quick CSS Loading Animation | Html CSS Animation Effects

[Fancy Border Radius Generator](https://9elements.github.io/fancy-border-radius/)

### 1701. CSS Glassmorphism Product Card Slider UI Design | Html CSS and Javascript

```css
* {
  background-attachment: fixed;
  backdrop-filter: blur(4px);
}
```

### 1690. Parallax Scrolling Website | How to Make Website using Html CSS & Javascript

```css
section img#moon {
  mix-blend-mode: screen;
  white-space: nowrap;
}
```

### 1808. Create Responsive Admin Dashboard

```css
.details .table {
  border-collapse: collapse;
}
.main.active .toggle {
  left: initial;
}
```

[CSS initial Keyword - W3schools](https://www.w3schools.com/cssref/css_initial.asp)

### 1811. Chart JS Integration | Responsive Admin Dashboard

[Chart JS](https://www.chartjs.org/)

### 1866. Thanos | Image Distortion Effect using Html CSS & Anime.js

```css
.container .block {
  background-attachment: fixed;
}
```

- [background-attachment - MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/background-attachment)
- [Unsplash Random Images](https://source.unsplash.com/1600x900/?avengers)
- [Anime JS - timeline](https://animejs.com/documentation/#timelineBasics)

</details>
