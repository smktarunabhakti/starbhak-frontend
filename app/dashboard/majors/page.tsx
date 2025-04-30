"use client";

import { useEffect, useState } from "react";
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
import { ModeToggle } from "@/components/ui/ModeToggle";
import { DataTable } from "./data-table";
import { columns, Majors } from "./columns";
import { toast } from "sonner";
import path from "path";
import { Component } from "lucide-react";
import axios from "axios";
import { ColumnDef } from "@tanstack/react-table"
import MyForm from "./edit/[id]/page";
import getData from "./get-majors";

interface apiResponse {
    id: string,
    majors_id: string,
    majors_head_id: string,
    name: string,
    isActive: string,
    createdAt: string,
    updatedAt: string,
}

export default function Page() {
  const [data, setData] = useState<apiResponse[]>([]);

  const fetchData = async ()=> {
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

  const deleteMajors = async (id: string) => {
        try {
          const response = await fetch(
            `http://127.0.0.1:3000/api/v1/master-data/majors/${id}`,
            { method: "DELETE" }
          );

          if (!response.ok) {
            throw new Error("Failed to delete major");
          }
          fetchData();
        } catch (error) {
          console.error("Error deleting major:", error);
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
                    <BreadcrumbPage>Kejuruan</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
            <div className="flex px-4">
              <ModeToggle />
            </div>
          </header>
          <div className="flex items-center justify-between p-4 pt-4"></div>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
            <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-4">
              <DataTable columns={columns(deleteMajors)} data={data} />
            </div>
          </div>
        </ScrollArea>
      </SidebarInset>
    </SidebarProvider>
  );
}