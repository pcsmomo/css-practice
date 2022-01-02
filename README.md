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

</details>
