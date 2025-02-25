import MainLayout from '@/components/layouts/main-layout'
import { useLocale, useTranslations } from 'next-intl';
import React from 'react'

export default function DashboardPage() {
    const t = useTranslations('HomePage');
    const locale = useLocale();
    return (
        <MainLayout page=''>
            <div>
                <div>
                    <div>
                        <div>
                            <h1>{t('title')}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}
