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
  student_id: string;
  nisn: string;
  nipd: string;
  nik: string;
  rfid: string;
  gender: string;
  email: string;
  name: string;
  DoB: string;
  PoB: string;
  starting_school_years_id: string;
};

const deleteStudent = async (rfid: string) => {
  const response = await fetch(`http://127.0.0.1:3000/api/v1/master-data/students/${rfid}`, {
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
    accessorKey: "student_id",
    header: "id siswa",
  },
  {
    accessorKey: "nisn",
    header: "NISN",
  },
  {
    accessorKey: "nipd",
    header: "NIPD",
  },
  {
    accessorKey: "nik",
    header: "NIK",
  },
  {
    accessorKey: "rfid",
    header: "RFID",
  },
  {
    accessorKey: "gender",
    header: "Jenis Kelamin",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "name",
    header: "Nama",
  },
  {
    accessorKey: "DoB",
    header: "Tanggal Lahir",
  },
  {
    accessorKey: "PoB",
    header: "Tempat Lahir",
  },
  {
    accessorKey: "starting_school_years_id",
    header: "Tahun Ajaran",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const kejuruan = row.original;
      const router = useRouter();

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
              router.push(`/dashboard/students/edit?student_id=${kejuruan.student_id}`);
            }}
            >Edit</DropdownMenuItem>
            <DropdownMenuItem
            onClick={() => {
              const confirmDelete = window.confirm("Are you sure you want to delete this item?");
              if (confirmDelete) {
                deleteStudent(kejuruan.rfid); 
              }
            }}
            >Delete</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
