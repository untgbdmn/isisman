"use client"


import MainLayout from '@/components/layouts/main-layout'
import { User } from 'lucide-react';
import { useTranslations } from 'next-intl';
import React from 'react'
import { FiBookmark } from "react-icons/fi";
import { CardDashboard, DashboardHeader } from './components';
import moment from 'moment'
import { SetTitle } from '@/components/setHelmet';

export default function DashboardPage() {
    const t = useTranslations('Dashboard');
    const date = new Date();

    return (
        <MainLayout page=''>
            <SetTitle pageTitle="Dashboard" />
            <DashboardHeader />
            <div className='grid lg:grid-cols-4 sm:grid-cols-1 md:grid-cols-2 gap-5'>
                <CardDashboard label={t('siswasum')} value={1932} icon={User} lastUpdated={moment(date).format('ll')} />
                <CardDashboard label={t('gurusum')} value={298} icon={User} lastUpdated={moment(date).format('ll')} />
                <CardDashboard label={t('stafsum')} value={60} icon={User} lastUpdated={moment(date).format('ll')} />
                <div className='bg-sidebar-primary text-white shadow rounded-sm p-3'>
                    <div className='flex items-center justify-between'>
                        <h1 className='text-sm font-medium'>{t('langganan')}</h1>
                        <FiBookmark className='size-5' />
                    </div>
                    <div className='flex flex-col itesm-center justify-start'>
                        <span className='text-xs font-normal'>{t('akanberakhir')}</span>
                        <h1 className='text-2xl font-bold'>{moment(moment(date).add(10, 'month').calendar()).format('ll')}</h1>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
