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
import { useEffect, useState } from "react";

export function Chart() {
  const [levelCount, setLevelCount] = useState<{
    confident: number;
    intermediate: number;
    familiar: number;
  }>();

  useEffect(() => {
    const levelCount = {
      confident: 0,
      intermediate: 0,
      familiar: 0,
    };

    technologies.forEach((item) => {
      if (item.level === 1) {
        levelCount.familiar += 1;
      } else if (item.level === 2) {
        levelCount.intermediate += 1;
      } else {
        levelCount.confident += 1;
      }
    });

    setLevelCount(levelCount);
  }, []);

  const chartData = [
    {
      level: "Confident",
      count: levelCount ? levelCount.confident : 0,
      fill: "green",
    },
    {
      level: "Intermediate",
      count: levelCount ? levelCount.intermediate : 0,
      fill: "orange",
    },
    {
      level: "Familiar",
      count: levelCount ? levelCount.familiar : 0,
      fill: "yellow",
    },
  ];

  const chartConfig = {
    //   visitors: {
    //     label: "Visitors",
    //   },
    Confident: {
      label: "Confident",
      color: "green",
    },
    Intermediate: {
      label: "Intermediate",
      color: "orange",
    },
    Familiar: {
      label: "Familiar",
      color: "yellow",
    },
  } satisfies ChartConfig;

  return (
    <Card className="flex flex-col bg-transparent border-none">
      <CardHeader className="items-center pb-0">
        {/* <CardTitle>Pie Chart - Legend</CardTitle> */}
        <div className="flex flex-col items-center">
          <h2 className="tracking-tighter text-white leading-none">
            Tech Chart
          </h2>
          <span className="text-gray-200 leading-none">January 2025</span>
        </div>
        {/* <CardDescription>January - June 2024</CardDescription> */}
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <Pie
              data={chartData}
              dataKey="count"
            />
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
