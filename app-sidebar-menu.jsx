'use client';

import { ChevronRight, Ellipsis, LogIn } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger, } from "@/components/ui/collapsible"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger, } from "@/components/ui/dropdown-menu"
import { SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar-iam"
import { DropdownMenuArrow } from "@radix-ui/react-dropdown-menu"
import Link from 'next/link'
import { Label } from "@/components/ui/label"
import { useProfile } from "@/components/providers/profile-provider";
import { Button } from "@/components/ui/button";


export function SidebarNavigationMenu() {
    const { navigationMenu, profile } = useProfile();
    const samlLoginURL = process.env.NEXT_PUBLIC_SAMLLoginURL || '/';
    if (!profile) {
        return (
            <SidebarContent>
                <SidebarGroup className='group-data-[collapsible=icon]:hidden group-data-[mobile=true]:visible'>
                    <SidebarMenu>
                        <SidebarGroupLabel>Not Currently Logged in</SidebarGroupLabel>
                        {samlLoginURL &&
                            <SidebarMenuButton asChild tooltip="Login Now">
                                <Link href={samlLoginURL} >
                                    <span>Login Now</span>
                                </Link>
                            </SidebarMenuButton>
                        }
                    </SidebarMenu>
                </SidebarGroup>
                <SidebarGroup className='group-data-[collapsible=]:hidden group-data-[mobile=true]:hidden'>
                    <SidebarMenu>
                        <Label asChild>
                            <SidebarMenuItem>
                                <SidebarMenuButton tooltip="Not Currently Logged in">
                                    <Ellipsis />
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </Label>
                        <SidebarMenuButton asChild tooltip="Login Now">
                            <Link href={samlLoginURL} >
                                <LogIn />
                                <span>Login Now</span>
                            </Link>
                        </SidebarMenuButton>
                    </SidebarMenu>
                </SidebarGroup>
            </SidebarContent>
        )
    }

    return (
        <SidebarContent>
            <SidebarGroup className='group-data-[collapsible=icon]:hidden group-data-[mobile=true]:visible'>
                <SidebarMenu>
                    {Array.isArray(navigationMenu) && navigationMenu.map((category) => (
                        <div key={category.title}>
                            {category.menus && category.menus.length > 0 ?
                                <>
                                    <SidebarGroupLabel>{category.title}</SidebarGroupLabel>
                                    {category.menus.map((menu, i) =>
                                        <Collapsible key={i} asChild className="group/collapsible">
                                            <SidebarMenuItem>
                                                <CollapsibleTrigger asChild>
                                                    <SidebarMenuButton tooltip={menu.title}>
                                                        {menu.icon && <menu.icon />}
                                                        <span>{menu.title}</span>
                                                        <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                    </SidebarMenuButton>
                                                </CollapsibleTrigger>
                                                <CollapsibleContent>
                                                    <SidebarMenuSub>
                                                        {menu.items?.map((item) =>
                                                            item.url && (
                                                                <SidebarMenuSubItem key={item.title}>
                                                                    <SidebarMenuSubButton asChild>
                                                                        <Link href={item.url}>
                                                                            <span>{item.title}</span>
                                                                        </Link>
                                                                    </SidebarMenuSubButton>
                                                                </SidebarMenuSubItem>
                                                            )
                                                        )}
                                                    </SidebarMenuSub>
                                                </CollapsibleContent>
                                            </SidebarMenuItem>
                                        </Collapsible>
                                    )}
                                </>
                                :
                                <SidebarMenuButton asChild tooltip={category.title}>
                                    {category.url ? (
                                        <Link href={category.url}>
                                            {category.icon && <category.icon />}
                                            <span>{category.title}</span>
                                        </Link>
                                    ) : (
                                        <Button>
                                            {category.icon && <category.icon />}
                                            <span>{category.title}</span>
                                        </Button>
                                    )}
                                </SidebarMenuButton>
                            }
                        </div>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
            <SidebarGroup className='group-data-[collapsible=]:hidden group-data-[mobile=true]:hidden'>
                <SidebarMenu>
                    {Array.isArray(navigationMenu) && navigationMenu.map((category) => (
                        <div key={category.title}>
                            {category.menus && category.menus.length > 0 ?
                                <div>
                                    <SidebarMenu>
                                        <Label asChild>
                                            <SidebarMenuItem>
                                                <SidebarMenuButton tooltip={category.title}>
                                                    <Ellipsis />
                                                </SidebarMenuButton>
                                            </SidebarMenuItem>
                                        </Label>
                                    </SidebarMenu>
                                    {category.menus.map((menu, i) =>
                                        <DropdownMenu key={i}>
                                            <DropdownMenuTrigger asChild>
                                                <SidebarMenuItem>
                                                    <SidebarMenuButton tooltip={menu.title}>
                                                        {menu.icon && <menu.icon />}
                                                        <span>{menu.title}</span>
                                                    </SidebarMenuButton>
                                                </SidebarMenuItem>
                                            </DropdownMenuTrigger>
                                            <DropdownMenuContent side="right" align="start" className="w-56">
                                                <DropdownMenuArrow className="stroke-border" />
                                                <DropdownMenuLabel>{menu.title}</DropdownMenuLabel>
                                                <DropdownMenuSeparator />
                                                {menu.items?.map((item) =>
                                                    item.url && (
                                                        <DropdownMenuItem key={item.title}>
                                                            <Link href={item.url} className="flex w-full">
                                                                {item.title}
                                                            </Link>
                                                        </DropdownMenuItem>
                                                    )
                                                )}
                                            </DropdownMenuContent>
                                        </DropdownMenu>
                                    )}
                                </div>
                                :
                                <SidebarMenuButton asChild tooltip={category.title}>
                                    {category.url ? (
                                        <Link href={category.url}>
                                            {category.icon && <category.icon />}
                                            <span>{category.title}</span>
                                        </Link>
                                    ) : (
                                        <Button>
                                            {category.icon && <category.icon />}
                                            <span>{category.title}</span>
                                        </Button>
                                    )}
                                </SidebarMenuButton>
                            }
                        </div>
                    ))}
                </SidebarMenu>
            </SidebarGroup>
        </SidebarContent>
    )
}