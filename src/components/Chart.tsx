"use client";
import { Pie, PieChart } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { technologies } from "@/constants/data";

const levelCount = technologies.reduce(
  (acc, item) => {
    if (item.level === 1) acc.familiar += 1;
    else if (item.level === 2) acc.intermediate += 1;
    else acc.confident += 1;
    return acc;
  },
  { confident: 0, intermediate: 0, familiar: 0 }
);

const chartData = [
  { level: "Confident", count: levelCount.confident, fill: "green" },
  { level: "Intermediate", count: levelCount.intermediate, fill: "orange" },
  { level: "Familiar", count: levelCount.familiar, fill: "yellow" },
];

const chartConfig = {
  Confident: { label: "Confident", color: "green" },
  Intermediate: { label: "Intermediate", color: "orange" },
  Familiar: { label: "Familiar", color: "yellow" },
} satisfies ChartConfig;

export function Chart() {
  return (
    <Card className="flex flex-col bg-transparent border-none">
      <CardHeader className="items-center pb-0">
        <div className="flex flex-col items-center">
          <h2 className="tracking-tighter text-white leading-none">Tech Chart</h2>
          <span className="text-gray-200 leading-none">January 2025</span>
        </div>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <Pie data={chartData} dataKey="count" />
            <ChartLegend
              content={<ChartLegendContent nameKey="level" />}
              className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center text-white"
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
