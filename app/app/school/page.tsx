"use client";

import AppHeader from '@/components/app-header'
import MainLayout from '@/components/layouts/main-layout'
import { SetTitle } from '@/components/setHelmet'
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { schoolSchema } from '@/resources/schemas/schoolSchema'
import { zodResolver } from '@hookform/resolvers/zod'
import { useTranslations } from 'next-intl'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

export default function SchoolDataPage() {
    const t = useTranslations('School');

    const form = useForm<z.infer<typeof schoolSchema>>({
        resolver: zodResolver(schoolSchema),
        defaultValues: {
            name: "",
            npsn: "",
            status: "Negeri",
            bentuk_pend: "SMK",
            kurikulum: "",
            akreditasi: "",
            address: "",
            city: "",
            state: "",
        },
    })

    async function onSubmit(values: z.infer<typeof schoolSchema>) {
        console.log(values)
    }

    return (
        <MainLayout page={t('datasekolah')}>
            <SetTitle pageTitle={t('datasekolah')} />
            <AppHeader pageTitle={t('datasekolah')} />

            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='grid grid-cols-3 gap-x-3 space-y-2'>
                    <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('nama')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="SMK N 2" type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="npsn"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('npsn')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="13748181" type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="status"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('status')}</FormLabel>
                                <FormControl>
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className='flex items-center justify-between'>
                                        <FormItem className='flex items-center'>
                                            <FormControl>
                                                <RadioGroupItem value='Negeri' />
                                            </FormControl>
                                            <FormLabel>{t('negeri')}</FormLabel>
                                        </FormItem>
                                        <FormItem className='flex items-center'>
                                            <FormControl>
                                                <RadioGroupItem value='Swasta' />
                                            </FormControl>
                                            <FormLabel>{t('swasta')}</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="bentuk_pend"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('bentukpendidikan')}</FormLabel>
                                <FormControl>
                                    <RadioGroup onValueChange={field.onChange} defaultValue={field.value} className='flex items-center justify-between'>
                                        <FormItem className='flex items-center'>
                                            <FormControl>
                                                <RadioGroupItem value='SMK' />
                                            </FormControl>
                                            <FormLabel>{t('smk')}</FormLabel>
                                        </FormItem>
                                        <FormItem className='flex items-center'>
                                            <FormControl>
                                                <RadioGroupItem value='SMA' />
                                            </FormControl>
                                            <FormLabel>{t('sma')}</FormLabel>
                                        </FormItem>
                                    </RadioGroup>
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="kurikulum"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('kurikulum')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Merdeka" type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="akreditasi"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('akreditasi')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Baik Sekali" type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="address"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('alamat')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Jl. Rambutan" type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="city"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('kota')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Kulon Progo" type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="state"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>{t('provinsi')}</FormLabel>
                                <FormControl>
                                    <Input placeholder="Daerah Istimewa Yogyakarta" type='text' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button>{t('simpan')}</Button>
                </form>
            </Form>
        </MainLayout>
    )
}
