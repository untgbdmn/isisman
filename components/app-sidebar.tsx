"use client"

import * as React from "react"
import {
    MonitorCog,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarHeader,
    SidebarMenuButton,
    SidebarRail,
} from "@/components/ui/sidebar"
import { MENUITEM } from "@/resources/constants/menu"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return (
        <Sidebar collapsible="icon" {...props}>
            <SidebarHeader>
                <SidebarMenuButton
                    size="lg"
                    className="data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
                >
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <MonitorCog className="size-5" />
                    </div>
                    <div className="grid flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-bold text-base">iSisman</span>
                        <span className="truncate text-xs">Sistem Management</span>
                    </div>
                </SidebarMenuButton>
            </SidebarHeader>
            <SidebarContent>
                <NavMain items={MENUITEM.navMain} />
            </SidebarContent>
            <SidebarFooter>
                <NavUser user={MENUITEM.user} />
            </SidebarFooter>
            <SidebarRail />
        </Sidebar>
    )
}
