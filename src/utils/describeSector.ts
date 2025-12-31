const angleToPoint = (angle: number, r: number) => {
  const rad = (angle - 90) * (Math.PI / 180);
  return {
    x: 50 + r * Math.cos(rad),
    y: 50 + r * Math.sin(rad),
  };
};

export default function describeSector(angle: number, r: number) {
  const start = angleToPoint(0, r);
  const end = angleToPoint(angle, r);
  const largeArcFlag = angle > 180 ? 1 : 0;

  return `
    M 50 50
    L ${start.x} ${start.y}
    A ${r} ${r} 0 ${largeArcFlag} 1 ${end.x} ${end.y}
    Z
  `;
}
