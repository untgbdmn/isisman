"use client"
import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { setUserLocale } from '@/i18n/locale'
import { useLocale, useTranslations } from 'next-intl';
import IDFlag from '@/resources/assets/icons/indonesia-flag.png'
import USFlag from '@/resources/assets/icons/united-states.png'
import Image from 'next/image';

export default function ToggleLanguage() {
    const locale = useLocale();
    const t = useTranslations('language')
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <DropdownMenuGroup>
                    <DropdownMenuItem className='cursor-pointer'>
                        <Image src={locale === 'id' ? IDFlag : USFlag} alt='' className='size-4' />
                        {locale === 'id' ? t('indo') : t('eng')}
                    </DropdownMenuItem>
                </DropdownMenuGroup>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" side='right'>
                <DropdownMenuItem className='cursor-pointer' onClick={() => {
                    setUserLocale("id")
                }}>
                    <Image src={IDFlag} alt='' className='size-4' /> {t('indo')}
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer' onClick={() => {
                    setUserLocale("en")
                }}>
                    <Image src={USFlag} alt='' className='size-4' /> {t('eng')}
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>

    )
}
