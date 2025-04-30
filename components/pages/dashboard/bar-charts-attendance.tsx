"use client";

import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Checkbox } from "@/components/ui/checkbox";

import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";


const chartData = [
  { year: "X", hadir: 186, izin: 80, absen: 72, alpha: 11 },
  { year: "XI", hadir: 305, izin: 200, absen: 18, alpha: 19 },
  { year: "XII", hadir: 237, izin: 120, absen: 91, alpha: 72 },
];

const chartConfig = {
  hadir: {
    label: "Hadir",
    color: "hsl(var(--chart-1))",
  },
  izin: {
    label: "Izin",
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
} satisfies ChartConfig;

export default function BarChartAttendance() {
  const [selectedYear, setSelectedYear] = useState<string[]>([]);
  const [selectedType, setSelectedType] = useState<string[]>([
    "hadir",
    "telat",
    "absen",
    "alpha",
  ]);

  const handleCheckboxChange = (type: string) => {
    setSelectedType((prev) =>
      prev.includes(type)
        ? prev.filter((item) => item !== type)
        : [...prev, type]
    );

    console.log(selectedType)
  };

  const chartData = [
    { year: "X", hadir: 186, telat: 80, absen: 72, alpha: 11 },
    { year: "XI", hadir: 305, telat: 200, absen: 18, alpha: 19 },
    { year: "XII", hadir: 237, telat: 120, absen: 91, alpha: 72 },
  ];

  const filteredData = selectedYear.length
    ? chartData.filter((item) => selectedYear.includes(item.year))
    : chartData;

  return (
    <>
      <div className="flex gap-4 items-center">
        <h5 className="text-base font-semibold">Tingkatan</h5>
        <ToggleGroup
          type="multiple"
          variant="outline"
          onValueChange={(value) => {
            setSelectedYear(value);
          }}
        >
          <ToggleGroupItem value="X" aria-label="Toggle X">
            <span className="font-bold">X</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="XI" aria-label="Toggle XI">
            <span className="font-bold">XI</span>
          </ToggleGroupItem>
          <ToggleGroupItem value="XII" aria-label="Toggle XII">
            <span className="font-bold">XII</span>
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex gap-4 items-center">
      <div className="flex items-center space-x-2">
          <Checkbox
            checked={selectedType.length === 4}
            onCheckedChange={(isChecked) => {
              setSelectedType(isChecked ? ["hadir", "telat", "absen", "alpha"] : [])
            }}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            All
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={selectedType.includes("hadir")}
            onCheckedChange={(value) => {
              handleCheckboxChange("hadir");
            }}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Hadir
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={selectedType.includes("telat")}
            onCheckedChange={(value) => {
              handleCheckboxChange("telat");
            }}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Telat
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={selectedType.includes("absen")}
            onCheckedChange={(value) => {
              handleCheckboxChange("absen");
            }}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Absen
          </label>
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox
            checked={selectedType.includes("alpha")}
            onCheckedChange={(value) => {
              handleCheckboxChange("alpha");
            }}
          />
          <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
            Alpha
          </label>
        </div>
      </div>

      <ChartContainer
        config={chartConfig}
        className="min-h-[100px] max-h-[350px]"
      >
        <BarChart accessibilityLayer data={filteredData}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="year"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <ChartTooltip
            cursor={false}
            content={<ChartTooltipContent indicator="dashed" />}
          />
          {selectedType.includes("hadir") && (
            <Bar dataKey="hadir" fill="var(--color-hadir)" radius={4} />
          )}
          {selectedType.includes("telat") && (
            <Bar dataKey="telat" fill="var(--color-izin)" radius={4} />
          )}
          {selectedType.includes("absen") && (
            <Bar dataKey="absen" fill="var(--color-absen)" radius={4} />
          )}
          {selectedType.includes("alpha") && (
            <Bar dataKey="alpha" fill="var(--color-alpha)" radius={4} />
          )}
        </BarChart>
      </ChartContainer>
    </>
  );
}
