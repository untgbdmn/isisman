"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible"
import {
    SidebarGroup,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { usePathname } from "next/navigation"
import { IconType } from "react-icons"

export interface NavMainProps {
    items?: {
        title: string
        url?: string
        icon?: LucideIcon | IconType
        isActive?: boolean
        items?: childProps[]
    }[]
}

export interface childProps {
    title: string
    url: string
}

export function NavMain({
    items,
}: NavMainProps) {
    const pathname = usePathname();
    return (
        <SidebarGroup>
            <SidebarMenu>
                {items?.map((item) => {
                    const menuActive = pathname === item.url;

                    const isActive = item.items?.some(child => child.url === pathname) || false;

                    return (
                        <Collapsible
                            key={item.title}
                            asChild
                            defaultOpen={isActive}
                            className="group/collapsible"
                        >
                            <SidebarMenuItem>
                                <CollapsibleTrigger asChild>
                                    {item.url ? (
                                        <a href={item.url}>
                                            <SidebarMenuButton tooltip={item.title} className={` cursor-pointer transition-all duration-200 ease-in-out ${menuActive ? "bg-sidebar-primary hover:bg-sidebar-primary/60" : ""}`}>
                                                {item.icon && <item.icon />}
                                                <span>{item.title}</span>
                                                {item.items && (
                                                    <ChevronRight
                                                        className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                                )}
                                            </SidebarMenuButton>
                                        </a>
                                    ) : (
                                        <SidebarMenuButton tooltip={item.title} className="">
                                            {item.icon && <item.icon />}
                                            <span>{item.title}</span>
                                            {item.items && (
                                                <ChevronRight
                                                    className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                                            )}
                                        </SidebarMenuButton>
                                    )}
                                </CollapsibleTrigger>
                                <CollapsibleContent>
                                    <SidebarMenuSub>
                                        {item.items?.map((subItem) => {
                                            const subMenuActive = pathname === subItem.url;
                                            return (
                                                <SidebarMenuSubItem key={subItem.title}>
                                                    <SidebarMenuSubButton asChild className={subMenuActive ? "" : ""}>
                                                        <a href={subItem.url}>
                                                            <span>{subItem.title}</span>
                                                        </a>
                                                    </SidebarMenuSubButton>
                                                </SidebarMenuSubItem>
                                            )
                                        })}
                                    </SidebarMenuSub>
                                </CollapsibleContent>
                            </SidebarMenuItem>
                        </Collapsible>
                    )
                })}
            </SidebarMenu>
        </SidebarGroup>
    )
}
