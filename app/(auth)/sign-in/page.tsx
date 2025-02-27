"use client"
import GuestLayout from '@/components/layouts/guest-layout'
import { Button } from '@/components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import React from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from '@/resources/schemas/authSchema'
import { z } from 'zod'
import { useTranslations } from 'next-intl'
import { Checkbox } from '@/components/ui/checkbox'
import { useRouter } from 'next/navigation'


export default function SigninPage() {
    const router = useRouter();
    const t = useTranslations('auth')
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
            remember_me: false
        },
    })

    function onSubmit(values: z.infer<typeof loginSchema>) {
        // Do something with the form values.
        // ✅ This will be type-safe and validated.
        console.log(values)
    }
    return (
        <GuestLayout type="signin" className='mx-8'>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input placeholder="shadcn" type='email' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className='flex items-center justify-between'>
                                    <FormLabel>{t('password')}</FormLabel>
                                    <FormLabel className='underline cursor-pointer'>{t('lupapasword')}</FormLabel>
                                </div>
                                <FormControl>
                                    <Input placeholder="" type='password' {...field} />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="remember_me"
                        render={({ field }) => (
                            <FormItem className="flex items-center">
                                <FormControl>
                                    <Checkbox
                                        checked={field.value}
                                        onCheckedChange={field.onChange}
                                    />
                                </FormControl>
                                <FormLabel>
                                    {t('ingatsaya')}
                                </FormLabel>
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className='w-full cursor-pointer'>Submit</Button>
                </form>

                <div className='flex flex-col items-center py-3 gap-1'>
                    <Button type="button" className='w-full cursor-pointer' variant="outline">Google</Button>
                    <div className='flex items-center text-sm'>{t('belumpunyaakun')}
                        <span className='text-sidebar-primary cursor-pointer' onClick={() => router.push('/sign-up')}>{t('daftardisini')}</span>
                    </div>
                </div>
            </Form>
        </GuestLayout>
    )
}
