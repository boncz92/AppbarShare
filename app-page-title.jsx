'use client';

import { useSidebar } from "@/components/ui/sidebar-iam";
import { Label } from '@/components/ui/label'


export function PageTitle() {
    const { pathTitle } = useSidebar();

    return (
        <Label className='text-white'>{pathTitle}</Label>
    )
}