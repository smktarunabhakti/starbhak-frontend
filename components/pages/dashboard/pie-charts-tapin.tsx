"use client";

import { LabelList, Pie, PieChart } from "recharts";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { useState } from "react";

const chartData = [
  { type: "sudah", total: 275, percen: 78.5, fill: "var(--color-sudah)" },
  { type: "belum", total: 25, percen: 21.5, fill: "var(--color-belum)" },
];

const chartConfig = {
  total: {
    label: "Total",
  },
  percen: {
    label: "Percen (%)",
  },
  sudah: {
    label: "Sudah",
    color: "hsl(var(--chart-1))",
  },
  belum: {
    label: "Belum",
    color: "hsl(var(--chart-2))",
  },
} satisfies ChartConfig;

export default function PieChartTapInAndNot() {

    const [selectedData, setSelectedData] = useState<string>("total");

  return (
    <>
      <ToggleGroup
          type="single"
          variant="outline"
          onValueChange={(value) => {
            setSelectedData(value)
          }}
        >
          <ToggleGroupItem value="total" aria-label="Toggle Total">
            <span className="font-bold">Total</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="percen" aria-label="Toggle Persentase">
            <span className="font-bold">Persentase (%)</span>
          </ToggleGroupItem>
        </ToggleGroup>
      <div className="h-full">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[100px] max-h-[350px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey={selectedData} hideLabel  />}
            />
            <Pie data={chartData} dataKey={selectedData}>
              <LabelList
                dataKey="type"
                className="fill-background"
                stroke="none"
                fontSize={12}
                formatter={(value: keyof typeof chartConfig) =>
                  chartConfig[value]?.label
                }
              />
            </Pie>
          </PieChart>
        </ChartContainer>
      </div>
    </>
  );
}
