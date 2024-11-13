import { SidebarProvider, SidebarTrigger } from "@/components/custom/sidebar/sidebar"
import { AppSidebar } from "@/components/custom/sidebar/app-sidebar"
import { Navbar } from "@/components/custom/navbar/navbar"

export default function DashPage({ children }: { children: React.ReactNode }){
    return(
        <>
        <div className="inline-flex">
            <SidebarProvider>
                <AppSidebar/>
                    <main>
                        <SidebarTrigger />
                        {children}
                    </main>
                </SidebarProvider>
            <Navbar/>
        </div>
            
        </>
        
    )
}