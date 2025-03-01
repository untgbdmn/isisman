import { SetTitle } from '@/components/setHelmet';
import MainLayout from '@/components/layouts/main-layout'
import { useTranslations } from 'next-intl'
import React from 'react'
import AppHeader from '@/components/app-header';

export default function StudentsPageList() {
    const t = useTranslations("Siswa");
    return (
        <MainLayout page={t('daftarsiswa')}>
            <SetTitle pageTitle={t('daftarsiswa')} />
            <AppHeader pageTitle={t('daftarsiswa')} />

            <div>
                asd
            </div>
        </MainLayout>
    )
}
