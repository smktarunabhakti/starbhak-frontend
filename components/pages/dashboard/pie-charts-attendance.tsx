"use client"

import { LabelList, Pie, PieChart } from "recharts"

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart"

const chartData = [
  { type: "hadir", total: 275, fill: "var(--color-hadir)" },
  { type: "telat", total: 200, fill: "var(--color-telat)" },
  { type: "absen", total: 187, fill: "var(--color-absen)" },
  { type: "alpha", total: 90, fill: "var(--color-alpha)" },
]

const chartConfig = {
  total: {
    label: "Total",
  },
  hadir: {
    label: "Hadir",
    color: "hsl(var(--chart-1))",
  },
  telat: {
    label: "Telat",
    color: "hsl(var(--chart-2))",
  },
  absen: {
    label: "Absen",
    color: "hsl(var(--chart-3))",
  },
  alpha: {
    label: "Alpha",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export default function PieChartAttendance() {
  return (
    <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square min-h-[100px] max-h-[350px] [&_.recharts-text]:fill-background"
        >
          <PieChart>
            <ChartTooltip
              content={<ChartTooltipContent nameKey="total" hideLabel/>}
            />
            <Pie data={chartData} dataKey="total">
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
  )
}
