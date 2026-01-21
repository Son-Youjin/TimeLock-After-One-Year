export default function calcDDay(openAt: number, today: number) {
  const diff = openAt - today;
  if (diff <= 0) return null;
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}
