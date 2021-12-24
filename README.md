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

### 001

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

</details>
