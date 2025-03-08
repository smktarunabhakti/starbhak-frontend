"use client";

import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
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
import { useRouter } from "next/navigation";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Payment = {
  id: string;
  study_groups_id: string;
  starting_school_years_id: string;
  name: string;
  homeroom_teacher_id: string;
  year: string;
  isActive: boolean;
  counseling_teacher_id: string;
  major_id: string;
};

const deleteStudyGroups = async (study_groups_id: string) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/master-data/study-groups/${study_groups_id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (!response.ok) {
    console.error("hapus data gagal");
  } else {
    console.log("hapus data berhasil");
    location.reload();
  }
};

export const columns: ColumnDef<Payment>[] = [
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
    header: "id",
  },
  {
    accessorKey: "study_groups_id",
    header: "id kelas",
  },
  {
    accessorKey: "starting_school_years_id",
    header: "id tahun ajaran",
  },
  {
    accessorKey: "name",
    header: "Nama Kelas",
  },
  {
    accessorKey: "homeroom_teacher_id",
    header: "id Wali Kelas",
  },
  {
    accessorKey: "year",
    header: "Tahun",
  },
  {
    accessorKey: "isActive",
    header: "Aktif",
  },
  {
    accessorKey: "counseling_teacher_id",
    header: "id guru bk",
  },
  {
    accessorKey: "major_id",
    header: "id jurusan",
  },
  
  {
    id: "actions",
    cell: ({ row }) => {
      const kejuruan = row.original;
      const router =useRouter()

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
              onClick={() => navigator.clipboard.writeText(kejuruan.id)}
            >
              Copy kejuruan ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem
            onClick={() => {
              router.push(`/dashboard/study-groups/edit?study_groups_id=${kejuruan.study_groups_id}`);
            }}
            >Edit</DropdownMenuItem>
            <DropdownMenuItem
            onClick={() => {
              const confirmDelete = window.confirm("Are you sure you want to delete this item?");
              if (confirmDelete) {
                deleteStudyGroups(kejuruan.study_groups_id); 
              }
            }}
            >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
