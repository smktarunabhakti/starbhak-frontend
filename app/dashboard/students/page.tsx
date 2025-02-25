"use client";

import { AppSidebar } from "@/components/custom/sidebar/app-sidebar";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Payment, columns } from "./columns";
import { DataTable } from "./data-table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";


import { Link, School, Users } from "lucide-react";

async function getData(): Promise<Payment[]> {
  return [
    { 
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Udin",
      dob: "11/12/2008",
      pob: "Bandung",
      starting_school_years:"2024/2025",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Perempuan",
      email: "123@321.com",
      name: "Alice",
      dob: "11/12/2008",
      pob: "Jakarta",
      starting_school_years:"2023/2024",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Joko",
      dob: "11/12/2008",
      pob: "Sukabumi",
      starting_school_years:"2022/2023",
    },
    { 
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Udin",
      dob: "11/12/2008",
      pob: "Bandung",
      starting_school_years:"2024/2025",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Perempuan",
      email: "123@321.com",
      name: "Alice",
      dob: "11/12/2008",
      pob: "Jakarta",
      starting_school_years:"2023/2024",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Joko",
      dob: "11/12/2008",
      pob: "Sukabumi",
      starting_school_years:"2022/2023",
    },{ 
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Udin",
      dob: "11/12/2008",
      pob: "Bandung",
      starting_school_years:"2024/2025",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Perempuan",
      email: "123@321.com",
      name: "Alice",
      dob: "11/12/2008",
      pob: "Jakarta",
      starting_school_years:"2023/2024",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Joko",
      dob: "11/12/2008",
      pob: "Sukabumi",
      starting_school_years:"2022/2023",
    },{ 
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Udin",
      dob: "11/12/2008",
      pob: "Bandung",
      starting_school_years:"2024/2025",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Perempuan",
      email: "123@321.com",
      name: "Alice",
      dob: "11/12/2008",
      pob: "Jakarta",
      starting_school_years:"2023/2024",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Joko",
      dob: "11/12/2008",
      pob: "Sukabumi",
      starting_school_years:"2022/2023",
    },
    { 
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Udin",
      dob: "11/12/2008",
      pob: "Bandung",
      starting_school_years:"2024/2025",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Perempuan",
      email: "123@321.com",
      name: "Alice",
      dob: "11/12/2008",
      pob: "Jakarta",
      starting_school_years:"2023/2024",
    },
    {
      id: "728ed52f",
      nisn: "12345678",
      nipd: "87654321",
      nik: "0012345678",
      rfid: "445557897",
      gender: "Laki-laki",
      email: "123@321.com",
      name: "Joko",
      dob: "11/12/2008",
      pob: "Sukabumi",
      starting_school_years:"2022/2023",
    },
  ];
}

export default async function Page() {
  const data = await getData();
  return (
    <>
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 shadow-md dark:shadow-none">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
              <BreadcrumbPage></BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
      <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
        <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-4">
          <DataTable columns={columns} data={data} />
        </div>
      </div>
    </>
  );
}
