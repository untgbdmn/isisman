"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { useTheme } from 'next-themes'
import { Computer, Moon, Sun } from 'lucide-react'

export default function ToggleTheme() {
    const { theme, setTheme } = useTheme()
    const labelTheme = theme === "light" ? "Light Mode" : theme === "dark" ? "Dark Mode" : "System Mode";
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <DropdownMenuGroup>
                    <DropdownMenuItem className='cursor-pointer'>
                        {theme === "light" ? <Sun /> : theme === "dark" ? <Moon /> : <Computer />}
                        {labelTheme}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" side='left'>
                <DropdownMenuItem className='cursor-pointer' onClick={() => setTheme("light")}>
                    Light
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer' onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer' onClick={() => setTheme("system")}>
                    System
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
