import { useEffect, useState } from "react";
import {
  CartesianGrid,
  ReferenceArea,
  ReferenceLine,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  PEER_BAND,
  STATUTORY_DAYS,
  type CasePoint,
  type Metric,
} from "@/data/comparison";

type PlotRow = CasePoint & { x: number; y: number };

type TipProps = {
  active?: boolean;
  payload?: Array<{ payload?: PlotRow }>;
};

function Tip({ active, payload }: TipProps) {
  const row = payload?.[0]?.payload;
  if (!active || !row) return null;
  return (
    <div className="max-w-56 border border-line bg-card px-3 py-2 shadow-sm">
      <p className="font-semibold text-ink">{row.plotLabel}</p>
      <p className="text-sm text-muted">
        Score {row.y}
        {row.xIsMeasured ? ` · ${row.latencyLabel}` : " · day-count not measured"}
      </p>
    </div>
  );
}

type DotProps = {
  cx?: number;
  cy?: number;
  payload?: PlotRow;
};

export function ComparisonChart({
  points,
  metric,
  selectedId,
  onSelect,
  showLabels,
}: {
  points: CasePoint[];
  metric: Metric;
  selectedId: string;
  onSelect: (id: string) => void;
  showLabels: boolean;
}) {
  const [ready, setReady] = useState(false);
  useEffect(() => {
    setReady(true);
  }, []);

  const rows: PlotRow[] = points.flatMap((point) =>
    point.plotX === null
      ? []
      : [{ ...point, x: point.plotX, y: point[metric] }],
  );
  const egan = rows.filter((row) => row.series === "egan");
  const peers = rows.filter((row) => row.series === "other");

  function renderDot({ cx, cy, payload }: DotProps) {
    if (cx == null || cy == null || !payload) return <g />;
    const selected = payload.id === selectedId;
    const isEgan = payload.series === "egan";
    const radius = isEgan ? 9 : 8;
    const labelY = payload.labelBelow ? cy + 20 : cy - 14;
    return (
      <g onClick={() => onSelect(payload.id)} style={{ cursor: "pointer" }}>
        <circle cx={cx} cy={cy} r={20} fill="transparent" />
        {selected ? (
          <circle
            cx={cx}
            cy={cy}
            r={radius + 6}
            fill="none"
            stroke="var(--color-ink)"
            strokeWidth={1.5}
          />
        ) : null}
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill={isEgan ? "var(--color-egan)" : "var(--color-other)"}
          stroke={isEgan ? "var(--color-egan)" : "var(--color-card)"}
          strokeWidth={isEgan ? 0 : 1.5}
        />
        {showLabels ? (
          <text
            x={cx}
            y={labelY}
            textAnchor="middle"
            fill={isEgan ? "var(--color-egan)" : "var(--color-other)"}
            fontSize={13}
            fontFamily="inherit"
            fontWeight={selected ? 700 : 600}
          >
            {payload.plotLabel}
          </text>
        ) : null}
      </g>
    );
  }

  if (!ready) {
    return (
      <div className="flex h-full items-end border border-dashed border-line px-4 pb-8">
        <p className="text-sm text-muted">Drawing the scatter from the correspondence review…</p>
      </div>
    );
  }

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ScatterChart margin={{ top: 16, right: 12, bottom: 8, left: 0 }}>
        <ReferenceArea
          x1={PEER_BAND.from}
          x2={PEER_BAND.to}
          y1={0}
          y2={5}
          fill="var(--color-band)"
          fillOpacity={0.85}
          strokeOpacity={0}
          ifOverflow="hidden"
        />
        <CartesianGrid stroke="var(--color-line)" vertical={false} />
        <XAxis
          type="number"
          dataKey="x"
          domain={[0, 22]}
          ticks={[0, 5, 10, 15, 20]}
          tick={{ fill: "var(--color-muted)", fontSize: 12, fontFamily: "inherit" }}
          axisLine={{ stroke: "var(--color-line)" }}
          tickLine={false}
          dy={6}
        />
        <YAxis
          type="number"
          dataKey="y"
          domain={[-0.25, 5.45]}
          ticks={[0, 1, 2, 3, 4, 5]}
          width={28}
          tick={{ fill: "var(--color-muted)", fontSize: 12, fontFamily: "inherit" }}
          axisLine={false}
          tickLine={false}
        />
        <ReferenceLine
          x={STATUTORY_DAYS}
          stroke="var(--color-rule)"
          strokeDasharray="4 4"
          label={{
            value: "Day 20",
            position: "insideTopRight",
            fill: "var(--color-rule)",
            fontSize: 12,
            fontFamily: "inherit",
          }}
        />
        <Tooltip
          cursor={false}
          content={<Tip />}
          wrapperStyle={{ outline: "none", zIndex: 5 }}
        />
        <Scatter
          name="Other bodies"
          data={peers}
          shape={renderDot}
          isAnimationActive={false}
        />
        <Scatter
          name="Council replies"
          data={egan}
          shape={renderDot}
          isAnimationActive={false}
        />
      </ScatterChart>
    </ResponsiveContainer>
  );
}
