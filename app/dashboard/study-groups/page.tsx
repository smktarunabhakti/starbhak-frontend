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

import { Book, Check, Link, School, Users, X } from "lucide-react";
import { ModeToggle } from "@/components/ui/ModeToggle";
import axios from "axios";

interface ApiResponse {
  id: string;
  study_groups_id: string;
  starting_school_years_id: string;
  name: string;
  homeroom_teacher_id: string;
  year: string;
  isActive: boolean;
  counseling_teacher_id: string;
  major_id: string;
}

async function getData(): Promise<ApiResponse[]> {
  const res = await axios.get('http://127.0.0.1:3000/api/v1/master-data/study-groups');

  return res.data.data.studyGroups.map((studyGroup: any) => ({
    id: studyGroup.id.toString(), 
    study_groups_id: studyGroup.studyGroups_id,
    starting_school_years_id: studyGroup.starting_school_years_id,
    name: studyGroup.name,
    homeroom_teacher_id: studyGroup.homeroom_teacher_id,
    year: studyGroup.year,
    isActive: studyGroup.isActive,
    counseling_teacher_id: studyGroup.counseling_teacher_id,
    major_id: studyGroup.major_id,
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
