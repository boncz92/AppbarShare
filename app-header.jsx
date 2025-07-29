import { SidebarTrigger } from "@/components/ui/sidebar-iam"
import { Separator } from "@/components/ui/separator"
import { UserProfile } from "@/components/app-sidebar/app-profile";
import { ThemeToggle } from "@/components/app-sidebar/app-theme-toggle";
import { PageTitle } from "@/components/app-sidebar/app-page-title";

export default function Header() {

    return (
        <header className="flex h-16 shrink-0 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 bg-header-background">
            <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-1 px-1">
                    <SidebarTrigger />
                    <Separator orientation="vertical" className="mr-2 h-4 bg-white" />
                    <PageTitle />
                </div>
                <div className="flex px-4 items-center">
                    <ThemeToggle />
                    <UserProfile />
                </div>
            </div>
        </header>
    );
}