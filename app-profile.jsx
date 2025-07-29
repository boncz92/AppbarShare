'use client';

import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from "@/components/ui/tooltip";
import { DropdownMenu, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useProfile } from "@/components/providers/profile-provider";
import { useMemo } from "react";
import Link from "next/link";


export function UserProfile() {
    const { profile } = useProfile();


    const fullName = useMemo(() => {
        if (profile) {
            return `${profile.firstName} ${profile.lastName}`
        }
        else {
            return null;
        }

    }, [profile]);

    const userInitials = useMemo(() => {
        if (profile) {
            return `${profile.firstName[0]}${profile.lastName[0]}`;
        }
        else {
            return null;
        }
    }, [profile]);

    const supportGroup = useMemo(() => {
        if (profile) {
            return profile.snowSupportGroup.name;
        }
        else {
            return null;
        }
    }, [profile])

    if (!profile) {
        return;
    }

    return (
        <DropdownMenu>
            <TooltipProvider disableHoverableContent>
                <Tooltip delayDuration={500}>
                    <TooltipTrigger asChild>
                        <DropdownMenuTrigger asChild>
                            <Button variant="outline" className="relative h-8 w-8 rounded-full bg-sidebar-accent">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback className="bg-transparent">{userInitials}</AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                    </TooltipTrigger>
                    <TooltipContent side="bottom">Profile</TooltipContent>
                </Tooltip>
            </TooltipProvider>

            <DropdownMenuContent className="w-56" align="end">
                <DropdownMenuLabel className="font-normal">
                    <div className="flex flex-col space-y-1">
                        <p className="text-sm font-medium leading-none">{fullName}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {supportGroup}
                        </p>
                        <p className="text-xs leading-none text-muted-foreground">
                            Current Server: {process.env.NEXT_PUBLIC_ServerName}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                    <Link href={process.env.NEXT_PUBLIC_SAMLLoginURL}>Reauthenticate</Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}