# Animation (CSS, JS)

## Hover animations

Hover effects for [links](https://norzserge.github.io/animation/links/index.html)

Hover effects for [button](https://norzserge.github.io/animation/buttons/index.html) 

Hover effects for [shop-cards](https://norzserge.github.io/animation/shop-cards/index.html)

## Sliders

Infinite [slider](https://norzserge.github.io/animation/infinite-slider/index.html)

[Slider](https://norzserge.github.io/animation/slider-with-text/index.html) with text

## Scroll animations

[Sticky header](https://norzserge.github.io/animation/sticky-header/index.html)
 with back scrolled header 

Calculating the [position](https://norzserge.github.io/animation/check-box-status-after-scroll/index.html) of the element when scrolling the page

[Appearing elements](https://norzserge.github.io/animation/appear-elements-after-scroll/index.html) after scroll

Change [body background](https://norzserge.github.io/animation/change-bg-with-scroll/index.html) with scrolling

[Scroll into view](https://norzserge.github.io/animation/scroll-into-view/index.html) - scroll page to top / center / botton position of the element.

[Horizontal scrolling](https://norzserge.github.io/animation/horizontal-scrolling-with-wheel/index.html) with mouse wheel

[Zoom element](https://norzserge.github.io/animation/zoom-with-wheel/index.html) with mouse wheel

## 3D and Parallax

404-page [parallax](https://norzserge.github.io/animation/404-parallax/index.html)

3D cude infinite [animation](https://norzserge.github.io/animation/3D-cude/index.html)

При изменении положения элемента по оси `Z` можно столкнуться с не самым приятным эффектом. Его размер будет меняться при отдалении или приближении к вьюпорту. Однако мы можем легко справиться с этой проблемой. Чтобы показывать элемент в реальном размере, следует применить к нему трансформацию `scale()`.

Для вычисления коэффициента масштабирования `scale` применяется следующая формула: `1 + (translateZ * -1) / perspective`.

То есть если свойство perspective равно 1px и мы передвигаем элемент по оси Z на -2px, то коэффициент будет равен трём:
```
.layer {
  transform: translateZ(-2px) scale(3);
}
```
3D card [flipping on hover](https://norzserge.github.io/animation/backflip-3d-hover-card/index.html)

Plain [parallax effect](https://norzserge.github.io/animation/plain-parallax/index.html) in background

[Parallax effect](https://norzserge.github.io/animation/parallax/index.html)

Fixed [background](https://norzserge.github.io/animation/fixed-bg/index.html)

Parallax with JS [(magic hand)](https://norzserge.github.io/animation/magic-hand/index.html)

Animated [cards](https://norzserge.github.io/animation/animated-cards/index.html) (with mouse move)

## Other animations

Elements animation in [product card](https://norzserge.github.io/animation/product-card/index.html)

Animation for [burger menu](https://norzserge.github.io/animation/burger-menu/index.html)

Animation for [tabs](https://norzserge.github.io/animation/tabs/index.html)

Animation for [popup](https://norzserge.github.io/animation/popup/index.html)

Plain vertical [accordion](https://norzserge.github.io/animation/accordion/index.html)

## Full pages
[Rental landing page](https://norzserge.github.io/animation/rental-page-with-animations/index.html) with animation

[Rental landing page](https://norzserge.github.io/animation/rental-page-with-scroll-animations/index.html) with scroll animation

Page with [3D product cards](https://norzserge.github.io/animation/3D-cards/index.html)

Page with [parallax header](https://norzserge.github.io/animation/parallax-page/index.html)

[First screen](https://norzserge.github.io/animation/first-screen-parallax/index.html) with parallax effect
