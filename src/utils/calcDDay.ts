export default function calcDDay(openAt: number, today: number) {
  const dayMs = 1000 * 60 * 60 * 24;

  const targetDate = new Date(openAt);
  const nowDate = new Date(today);

  targetDate.setHours(0, 0, 0, 0);
  nowDate.setHours(0, 0, 0, 0);

  return Math.floor((targetDate.getTime() - nowDate.getTime()) / dayMs);
}
