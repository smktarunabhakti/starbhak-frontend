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

async function getData(): Promise<Payment[]> {
  // Fetch data from your API here.
  return [
    {
      id: "1",
      id_mapel: "728ed52f",
      Mapel: "Bahasa",
      status: "Is active",
    },
    {
      id: "2",
      id_mapel: "728ed52f",
      Mapel: "MTK",
      status: "Is active",
    },
    {
      id: "3",
      id_mapel: "728ed52f",
      Mapel: "IPAS",
      status: "Is active",
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
                    <BreadcrumbPage>Kejuruan</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex items-center justify-between p-4 pt-4">
            <div className="flex gap-5">
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-1 aspect-[1/0.6] flex items-center justify-between p-4">
                <div className="flex items-center justify-center p-2 rounded-lg bg-muted/70">
                  <Book
                    height={52}
                    width={52}
                    className="text-[hsl(var(--chart-5))]"
                  />
                </div>

                <div className="text-right px-2">
                  <h3 className="text-2xl font-bold text-[hsl(var(--chart-5))]">
                    3
                  </h3>
                  <p className="text-sm text-muted-foreground">Mapel</p>
                </div>
              </div>

              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-1 aspect-[1/0.6] flex items-center justify-between p-4">
                <div className="flex items-center justify-start p-2 rounded-lg bg-muted/70">
                  <Check
                    height={52}
                    width={52}
                    className="text-[hsl(var(--chart-3))]"
                  />
                </div>

                <div className="text-right px-2">
                  <h3 className="text-2xl font-bold text-[hsl(var(--chart-3))]">
                    3
                  </h3>
                  <p className="text-sm text-muted-foreground">IS Active</p>
                </div>
              </div>
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-1 aspect-[1/0.6] flex items-center justify-between p-4">
                <div className="flex items-center justify-start p-2 rounded-lg bg-muted/70">
                  <X
                    height={52}
                    width={52}
                    className="text-[hsl(var(--chart-2))]"
                  />
                </div>

                <div className="text-right px-2">
                  <h3 className="text-2xl font-bold text-[hsl(var(--chart-2))]">
                    0
                  </h3>
                  <p className="text-sm text-muted-foreground">ISNT Active</p>
                </div>
              </div>
            </div>

            <Button
              variant="outline"
              className="flex items-center justify-between p-4"
            >
              <a href="/subject/create">Add new mapel +</a>
            </Button>
          </div>
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
