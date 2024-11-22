import {  Home, Settings, SquarePen, Image, NotebookText, MessageCircleMore , Grid2X2, BriefcaseBusiness, Users, Settings2 } from "lucide-react"
import logo from '@/static/image.png'

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/custom/sidebar/sidebar"

// Menu items.
const items = [
  {
    title: "Dashboard",
    url: "#",
    icon: Home,
  },
  {
    title: "Telusuri Tamatan",
    url: "#",
    icon: SquarePen,
  },
  {
    title: "Media",
    url: "#",
    icon: Image,
  },
  {
    title: "Pages",
    url: "#",
    icon: NotebookText,
  },
  {
    title: "Comments",
    url: "#",
    icon: MessageCircleMore,
  },
  {
    title: "Appearance",
    url: "#",
    icon: Grid2X2,
  },
  {
    title: "Plugins",
    url: "#",
    icon: BriefcaseBusiness,
  },
  {
    title: "Users",
    url: "#",
    icon: Users,
  },{
    title: "Settings",
    url: "#",
    icon: Settings,
  },
  {
    title: "Tools",
    url: "#",
    icon: Settings2,
  },
]

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel><img src={logo.src} className="w-10 mt-5" alt="" /></SidebarGroupLabel>
          <SidebarGroupContent className="mt-10">
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
              <button className="bg-[#667A8AFF] text-white p-2 text-left m-2 rounded-md mt-60">
                <a className="inline-flex" href="">
                  <svg width="25" height="25" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M21.6066 10.5781C24.6345 10.5781 27.1039 13.0052 27.1039 15.9934V21.8355H19.6584C19.1248 21.8355 18.7029 22.2502 18.7029 22.7746C18.7029 23.2869 19.1248 23.7138 19.6584 23.7138H27.1039V29.5437C27.1039 32.5318 24.6345 34.9711 21.5818 34.9711H15.5385C12.4982 34.9711 10.0288 32.544 10.0288 29.5559V16.0056C10.0288 13.0052 12.5107 10.5781 15.5509 10.5781H21.6066ZM30.2021 18.5671C30.568 18.189 31.1656 18.189 31.5315 18.5549L35.0929 22.1041C35.2758 22.287 35.3734 22.5187 35.3734 22.7749C35.3734 23.0188 35.2758 23.2627 35.0929 23.4335L31.5315 26.9827C31.3485 27.1656 31.1046 27.2632 30.8729 27.2632C30.6289 27.2632 30.385 27.1656 30.2021 26.9827C29.8362 26.6168 29.8362 26.0191 30.2021 25.6532L32.1535 23.714H27.1042V21.8357H32.1535L30.2021 19.8965C29.8362 19.5306 29.8362 18.933 30.2021 18.5671Z" fill="white"/>
                  </svg>
                  <p className="p-1">Logout</p>
                </a>
              </button>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
