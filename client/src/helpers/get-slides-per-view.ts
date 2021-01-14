export function getSlidesPerView(): number {
  if (window.matchMedia(`(min-width: 580px)`).matches) {
    return 3;
  } else {
    return 2;
  }
}
