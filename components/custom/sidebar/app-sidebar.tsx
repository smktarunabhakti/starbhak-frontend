import { Calendar, Home, Inbox, Search, Settings, SquarePen, Image, NotebookText, MessageCircleMore , Grid2X2, BriefcaseBusiness, Users, Settings2 } from "lucide-react"



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
          <SidebarGroupLabel><img className="w-72" alt="" /></SidebarGroupLabel>
          <SidebarGroupContent>
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
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
