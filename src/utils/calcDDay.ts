export default function calcDDay(openAt: number, today: number) {
  const diff = openAt - today;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
