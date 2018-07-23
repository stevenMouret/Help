# SASS Help

## Functions

### Color

#### Transparent
Input
```sass
$color: #000;
span {
    color: opacify($color, .5);
}
```

Output
```css
span {
    color: rgba(0, 0, 0, .5);
}
```

## Trick

### Ampersand
Input
```sass
.block {
    .home & {
        position: relative;
    }
}
```

Output
```css
.home .block {
    position: relative;
}
```

### Interpolation brackets
Input
```sass
.block {
    &__btn {
        @at-root {
            span#{&} {
                position: relative;
            }
        }
    }
}
```

Output
```css
span.block__btn {
  position: relative;
}
```
