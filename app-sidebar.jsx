import { Fingerprint } from "lucide-react"
import { Sidebar, SidebarContent, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarRail } from "@/components/ui/sidebar-iam"
import { SidebarNavigationMenu } from "@/components/app-sidebar/app-sidebar-menu"



export default function AppSidebar({ }) {

    return (
        <Sidebar collapsible="icon">
            <SidebarHeader>
                <SidebarContent>
                    <SidebarMenu>
                        <SidebarMenuItem>
                            <SidebarMenuButton size="lg" className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground">
                                <div className="flex aspect-square size-8 items-center justify-center rounded-lg text-sidebar-primary-foreground">
                                    <Fingerprint className="size-7 text-sidebar-accent-foreground" />
                                </div>
                                <div className="grid flex-1 justify-center text-sm leading-tight">
                                    <span className="truncate font-semibold">
                                        Identity Management Portal
                                    </span>
                                </div>
                            </SidebarMenuButton>
                        </SidebarMenuItem>
                    </SidebarMenu>
                </SidebarContent>
            </SidebarHeader>
            <SidebarNavigationMenu />
            <SidebarRail />
        </Sidebar>
    )
}