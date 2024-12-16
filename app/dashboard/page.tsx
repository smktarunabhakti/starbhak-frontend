import { AppSidebar } from "@/components/custom/sidebar/app-sidebar";
import ButtonWithIcon from "@/components/custom/buttons/buttons-with-icons";
import BarChartAttendance from "@/components/pages/dashboard/bar-charts-attendance";
import PieChartAttendance from "@/components/pages/dashboard/pie-charts-attendance";
import PieChartTapInAndNot from "@/components/pages/dashboard/pie-charts-tapin";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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

import { DownloadIcon, GroupIcon, School, School2, User, Users } from "lucide-react";

export default function Page() {
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
                    <BreadcrumbPage>Absensi</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4 pt-4">
            <div className="grid grid-cols-4 auto-rows-min gap-4">
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-1 aspect-[1/0.6] flex items-center justify-between p-4">
                <div className="flex items-center justify-center p-2 rounded-lg bg-muted/70">
                  <School height={52} width={52} className="text-[hsl(var(--chart-1))]" />
                </div>

                <div className="text-right">
                  <h3 className="text-2xl font-bold text-[hsl(var(--chart-1))]">12345</h3>
                  <p className="text-sm text-muted-foreground">Keseluruhan</p>
                </div>
              </div>
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-1 aspect-[1/0.6] flex items-center justify-between p-4">
                <div className="flex items-center justify-center p-2 rounded-lg bg-muted/70">
                  <Users height={52} width={52} className="text-[hsl(var(--chart-2))]" />
                </div>

                <div className="text-right">
                  <h3 className="text-2xl font-bold text-[hsl(var(--chart-2))]">12345</h3>
                  <p className="text-sm text-muted-foreground">X</p>
                </div>
              </div>
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-1 aspect-[1/0.6] flex items-center justify-between p-4">
                <div className="flex items-center justify-center p-2 rounded-lg bg-muted/70">
                  <Users height={52} width={52} className="text-[hsl(var(--chart-3))]" />
                </div>

                <div className="text-right">
                  <h3 className="text-2xl font-bold text-[hsl(var(--chart-3))]">12345</h3>
                  <p className="text-sm text-muted-foreground">XI</p>
                </div>
              </div>
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-1 aspect-[1/0.6] flex items-center justify-between p-4">
                <div className="flex items-center justify-center p-2 rounded-lg bg-muted/70">
                  <Users height={52} width={52} className="text-[hsl(var(--chart-4))]" />
                </div>

                <div className="text-right">
                  <h3 className="text-2xl font-bold text-[hsl(var(--chart-4))]">12345</h3>
                  <p className="text-sm text-muted-foreground">XII</p>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 auto-rows-min gap-4">
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50 col-span-4">
                <div className="flex w-full px-4 py-2 justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">Attendance Murid</h4>
                    <p className="text-xs">24 Nov 2024</p>
                  </div>
                  <ButtonWithIcon
                    icon={<DownloadIcon />}
                    text="Download Report"
                    variant={"outline"}
                  />
                </div>
                <div className="flex w-full h-4/5 px-4 py-2 justify-between items-center">
                  <div className="h-full w-2/5">
                    <h5 className="font-semibold text-base">Keseluruhan</h5>
                    <div className="h-full">
                      <PieChartAttendance />
                    </div>
                  </div>

                  <div className="h-full w-3/5">
                    <div className="h-full flex flex-col gap-4">
                      <BarChartAttendance />
                    </div>
                  </div>

                  <div className="w-1/5 flex justify-center items-center">
                    <div className="w-1/3 grid grid-cols-2 gap-4 items-center">
                      <span className="rounded-sm bg-[hsl(var(--chart-1))] aspect-square h-3"></span>
                      <p>Hadir</p>
                      <span className="rounded-sm bg-[hsl(var(--chart-2))] aspect-square h-3"></span>
                      <p>Telat</p>
                      <span className="rounded-sm bg-[hsl(var(--chart-3))] aspect-square h-3"></span>
                      <p>Absen</p>
                      <span className="rounded-sm bg-[hsl(var(--chart-4))] aspect-square h-3"></span>
                      <p>Alpha</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50  col-span-1 aspect-auto flex items-center flex-col p-4 gap-4">
                <h4 className="text-lg font-bold">Upcoming Events</h4>

                <div className=" flex items-center space-x-4 rounded-md p-4">
                  <span className="rounded-sm bg-[hsl(var(--chart-1))] aspect-square h-3"></span>
                  <div className="flex-1 space-y-1">
                    <p className="text-xs font-medium leading-none">
                      Push Notifications
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Send notifications to device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5 auto-rows-min gap-4">
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50  col-span-2 aspect-[1/0.91]">
                <div className="flex w-full px-4 py-2 justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">Tap In / Belum</h4>
                    <p className="text-xs">24 Nov 2024</p>
                  </div>
                  <ButtonWithIcon
                    icon={<DownloadIcon />}
                    text="Download Report"
                    variant={"outline"}
                  />
                </div>

                <div className="flex w-full h-4/5 px-4 py-2 justify-between items-center">
                  <div className="h-full w-2/3">
                    <PieChartTapInAndNot />
                  </div>

                  <div className="w-1/3 flex justify-start">
                    <div className="grid grid-cols-2 items-center">
                      <span className="rounded-sm bg-[hsl(var(--chart-1))] aspect-square h-3"></span>
                      <p>Sudah</p>
                      <span className="rounded-sm bg-[hsl(var(--chart-2))] aspect-square h-3"></span>
                      <p>Belum</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-muted/90 border dark:border-none dark:bg-muted/50  col-span-3 aspect-[1/0.6]">
                <div className="flex w-full px-4 py-2 justify-between items-center">
                  <div>
                    <h4 className="font-semibold text-lg">Tap In / Out</h4>
                    <p className="text-xs">2024/2025</p>
                  </div>
                  <ButtonWithIcon
                    icon={<DownloadIcon />}
                    text="Download Report"
                    variant={"outline"}
                  />
                </div>

                <div className="flex mt-2 w-full justify-evenly">
                  <ScrollArea>
                    <div className="flex flex-col gap-4 px-4 md:max-h-[298px]">
                      <p className="font-semibold text-base text-center">
                        Siswa Terajin
                      </p>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>

                  <ScrollArea>
                    <div className="flex flex-col gap-4 px-4 md:max-h-[298px]">
                      <p className="font-semibold text-base text-center">
                        Perlu Perhatian
                      </p>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-4 rounded-md border p-4">
                        <p className="text-xl">#1</p>
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium leading-none">
                            Push Notifications
                          </p>
                          <p className="text-sm text-muted-foreground">
                            Send notifications to device.
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollArea>
                </div>
              </div>
            </div>
          </div>
    </>
  );
}
