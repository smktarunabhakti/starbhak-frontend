'use client';

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

import { Book, Check, Link, School, Users, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import axios from 'axios';
import { useRouter } from "next/navigation";

interface ApiResponse {
  id: number;
  school_year_id: string;
  start: number;
  end: number;
  isActive: boolean;
}

async function getData(): Promise<ApiResponse[]> {
  const res = await axios.get('http://127.0.0.1:3000/api/v1/master-data/school-year');

  return res.data.data.schoolYear.map((schoolyear: any) => ({
    id: schoolyear.id.toString(), 
    school_year_id: schoolyear.school_year_id,
    start: schoolyear.start,
    end: schoolyear.end,
    isActive: schoolyear.isActive,
  }));
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
            <div className="float-end right-3 absolute">
              <ModeToggle/>  
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
