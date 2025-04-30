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
import axios from "axios";
import { Link, School, Users } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import getData from './get-teachers';

interface apiResponse {
  id: string,
  teacher_id: string,
  name: string,
  email: string,
  DoB: string,
  PoB: string,
  isActive: string,
  updatedAt: string,
}

export default function Page() {
  const [data, setData] = useState<apiResponse[]>([]);

  const fetchData = async () => {
    try {
      const result = await getData();

      setData(result);
    } catch (err) {
      console.error("error: failed to fetch ", err);

    }
  };


  useEffect(() => {
    fetchData();
  }, []);

  const deleteTeachers = async (teacher_id: string) => {
    try {
      const response = await fetch(
        `http://127.0.0.1:3000/api/v1/master-data/teachers/${teacher_id}`,
        { method: "DELETE" }
      );

      if (!response.ok) {
        throw new Error("Failed to delete teacher");
      }
      fetchData();
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  };

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
              <DataTable columns={columns(deleteTeachers)} data={data} />
            </div>
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}
