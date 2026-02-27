const paperColors = [
  "#FFF8E7",
  "#F6F4FF",
  "#EAF7FF",
  "#FDF0F5",
  "#F3FFF4",
  "#FFF3F0",
  "#FFF8DC ",
  "#FAF0E6 ",
  "#F5F5F5  ",
  "#E0E0E0 ",
  "#F0F8FF  ",
  "#E6E6FA ",
];

export function randomColor() {
  return paperColors[Math.floor(Math.random() * paperColors.length)];
}
