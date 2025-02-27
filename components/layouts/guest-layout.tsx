import { MonitorCog } from 'lucide-react'
import { useTranslations } from 'next-intl'
import React from 'react'
import { cn } from '@/lib/utils'
import { SwitchLanguage } from '../toggle-languages'

type GuestLayoutProps = {
    children?: React.ReactNode
    type: "signin" | "signup"
    className?: string
}
export default function GuestLayout({ children, type, className }: GuestLayoutProps) {
    const t = useTranslations('auth')
    return (
        <div className='min-h-screen h-full w-full flex flex-col justify-center items-center'>
            <div className='flex flex-col items-center'>

                <div className='pb-7'>
                    <SwitchLanguage />
                </div>

                <div className='flex items-center gap-2 flex-col justify-center'>
                    <div className="bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg">
                        <MonitorCog className="size-5" />
                    </div>
                    <div className="flex  flex-col items-center justify-center flex-1 text-left text-sm leading-tight">
                        <span className="truncate font-bold text-base">iSisman</span>
                        <span className="truncate text-xs">School Management</span>
                    </div>
                </div>

            </div>
            <div className='w-full max-w-xl'>

                <div className='flex flex-col items-center justify-center text-center py-5'>
                    <h1 className='text-2xl font-bold'>{type === 'signin' ? t('masukakun') : t('daftarakun')}</h1>
                    <p className="text-center text-xs px-10 lg:px-0">{type === 'signin' ?  t('masukakundesc') : t('daftarakundesc')}</p>
                </div>

                <div className={cn('lg:px-10 md:px-14 lg:px-10 px-5', className)}>
                    {children}
                </div>
            </div>
        </div>
    )
}
