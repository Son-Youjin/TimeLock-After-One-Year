export function dateNumber(date: Date) {
  return (
    date.getFullYear() * 10000 + (date.getMonth() + 1) * 100 + date.getDate()
  );
}

export function isOpenByDate(openAt: number) {
  const todayNum = dateNumber(new Date());
  const targetNum = dateNumber(new Date(openAt));

  return todayNum >= targetNum;
}
