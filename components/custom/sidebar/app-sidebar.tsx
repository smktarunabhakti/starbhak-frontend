"use client"

import * as React from "react"
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

import { NavMain } from "@/components/custom/sidebar/nav-main"
import { NavProjects } from "@/components/custom/sidebar/nav-projects"
import { NavUser } from "@/components/custom/sidebar/nav-user"
import { TeamSwitcher } from "@/components/custom/sidebar/team-switcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar"
import { ScrollArea } from "../../ui/scroll-area"

// This is sample data.
const data = {
  user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "/avatars/shadcn.jpg",
  },
  teams: [
    {
      name: "TB",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
  ],
  projects: [
    {
      name: "Guru",
      url: "/dashboard/teachers",
      icon: Frame,
    },
    {
      name: "Jadwal Guru",
      url: "/dashboard/teachers-schedule",
      icon: PieChart,
    },
    {
      name: "Kejuruan",
      url: "/dashboard/majors",
      icon: Map,
    },
    {
      name: "User",
      url: "/dashboard/users",
      name: "Kelas",
      url: "/dashboard/study-groups",
      icon: Frame,
    },
    {
      name: "Murid",
      url: "/dashboard/students",
      icon: PieChart,
    },
    {
      name: "Mata Pelajaran",
      url: "/dashboard/subject",
      icon: Map,
    },
    {
      name: "Tahun Ajaran",
      url: "/dashboard/school-years",
      icon: Map,
    },
    {
      name: "Attendance Permittance",
      url: "/dashboard/attendance-permittance",
      icon: Map,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <ScrollArea >
          <NavProjects projects={data.projects} />
        </ScrollArea>
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
