import { SidebarProvider, SidebarTrigger } from "@/components/custom/sidebar/sidebar"
import { AppSidebar } from "@/components/custom/sidebar/app-sidebar"
import { Navbar } from "@/components/custom/navbar/navbar"
import { Container } from "@/components/custom/container/container"

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
            <div>
                <Navbar/>
                <div className="relative md:w-[600px] lg:w-[1000px]">
                    <div className=" absolute left-0">
                       {["Total Tamatan","Total Industri","Siswa Aktif PKL","Total Industri"].map((item)=>(
                            <Container key={item}>{item}</Container>
                       ))}
                    </div>
                </div>
            </div>
        </div>
        </>
        
    )
}