const cleanPercentage = (percentage: number) => {
  const isNegativeOrNaN = !Number.isFinite(+percentage) || percentage < 0; // we can set non-numbers to 0 here
  const isTooHigh = percentage > 100;
  return isNegativeOrNaN ? 0 : isTooHigh ? 100 : +percentage;
};

interface Props {
  colour: string;
  percentage: number;
}

const Circle = ({ colour, percentage }: Props) => {
  const r = 70;
  const circ = 2 * Math.PI * r;
  const strokePct = ((100 - percentage) * circ) / 100; // where stroke will start, e.g. from 15% to 100%.
  return (
    <circle
      r={r}
      cx={100}
      cy={100}
      fill="transparent"
      stroke={strokePct !== circ ? colour : ""} // remove colour as 0% sets full circumference
      strokeWidth={"0.2rem"}
      strokeDasharray={circ}
      strokeDashoffset={percentage ? strokePct : 0}
    ></circle>
  );
};

export const ProcessCircle = ({ percentage, colour }: Props) => {
  const pct = cleanPercentage(percentage);
  return (
    <svg width={181} height={181}>
      <g transform={`rotate(-90 ${"100 100"})`}>
        <Circle colour={colour} percentage={pct} />
      </g>
    </svg>
  );
};
