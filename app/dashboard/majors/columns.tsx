"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Link, MoreHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import getData from "./get-majors";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Majors = {
  id: number;
  majors_id: string;
  majors_head_id: string;
  name: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
};

export const columns= (onDelete: (id: string) => void): ColumnDef<Majors>[] => [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "id",
    header: "Id",
  },
  {
    accessorKey: "majors_id",
    header: "ID jurusan",
  },
  {
    accessorKey: "majors_head_id",
    header: "ID kepala jurusan",
  },
  {
    accessorKey: "name",
    header: "Nama jurusan",
  },
  {
    accessorKey: "isActive",
    header: "Status aktif",
  },
  {
    accessorKey: "createdAt",
    header: "Created at",
  },
  {
    accessorKey: "updatedAt",
    header: "Updated at",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const kejuruan = row.original;

     
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() =>
                navigator.clipboard.writeText(kejuruan.majors_id.toString())
              }
            >
              Copy kejuruan ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <a href={`majors/edit/${kejuruan.majors_id.toString()}`}>
                Edit
              </a>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => onDelete(kejuruan.majors_id.toString())}
            >
              Delete
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
