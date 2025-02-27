"use client";

import { AppSidebar } from "@/components/custom/sidebar/app-sidebar";
import { useState, useEffect } from "react";
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
import { ModeToggle } from "@/components/ui/ModeToggle";

// async function getData(): Promise<Payment[]> {
//   // Fetch from localStorage or use fallback data
//   return JSON.parse(localStorage.getItem("teacherData") || "[]");
// }
async function getData(): Promise<Payment[]> {
  return [
    {
      id: "728ed52f",
      DoB: "21/4/2000",
      PoB: "Jakarta",
      gender: "Wanita",
      email: "miranda@gmail.com",
      name: "Miranda S.pd",
      user_id: "82123hab",
      isActive: "Is active",
    },
    {
      id: "728ed52f",
      DoB: "21/4/2000",
      PoB: "Jakarta",
      gender: "Wanita",
      email: "miranda@gmail.com",
      name: "Miranda S.pd",
      user_id: "82123hab",
      isActive: "Is active",
    },
    {
      id: "728ed52f",
      DoB: "21/4/2000",
      PoB: "Jakarta",
      gender: "Wanita",
      email: "miranda@gmail.com",
      name: "Miranda S.pd",
      user_id: "82123hab",
      isActive: "Is active",
    },
  ];
}

export default async function Page() {
  const data = await getData();
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <ScrollArea>
          <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 shadow-md dark:shadow-none justify-between">
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
                    <BreadcrumbPage>Guru</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex px-4">
              <ModeToggle />
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
            <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-4">
              <DataTable columns={columns} data={data} />
            </div>
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
